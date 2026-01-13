/**
 * Objective Function for Optimization
 * 
 * Implements the tuning error objective function from the paper (Eq. 7)
 * and combined objective functions with penalties (Eq. 11, 13).
 */

import { Individual, DetailedEvaluation } from '../types.js';
import { computeFrequenciesFromGenes } from '../physics/frequencies.js';
import { genesToCuts } from '../physics/barProfile.js';
import { computeVolumePenalty, computeRoughnessPenalty } from './penalties.js';

/**
 * Compute the weighted squared tuning error (modified Eq. 7 from paper).
 * 
 * epsilon = 100 * sum(w_m * ((omega_bar_m - omega_star_m) / omega_star_m)^2) / sum(w_m)
 * 
 * With f1_priority > 1, f1 is weighted more heavily than higher modes.
 * This helps ensure the fundamental frequency is well-tuned.
 * 
 * @param {Array<number>} computedFreq - Computed frequencies from FEM
 * @param {Array<number>} targetFreq - Target frequencies
 * @param {number} f1Priority - Weight multiplier for f1 (default 1 = equal weighting)
 * @returns {number} Weighted average squared error as percentage
 */
export function computeTuningError(computedFreq, targetFreq, f1Priority = 1.0) {
    const M = Math.min(computedFreq.length, targetFreq.length);
    if (M === 0) {
        return Infinity;
    }

    let weightedSumSquaredError = 0.0;
    let totalWeight = 0.0;

    for (let m = 0; m < M; m++) {
        const computed = computedFreq[m];
        const target = targetFreq[m];

        if (target === 0) {
            continue;
        }

        // Weight: f1 gets f1_priority, other modes get 1
        const weight = m === 0 ? f1Priority : 1.0;

        const relativeError = (computed - target) / target;
        weightedSumSquaredError += weight * relativeError * relativeError;
        totalWeight += weight;
    }

    // Return as percentage
    return totalWeight > 0 ? 100.0 * (weightedSumSquaredError / totalWeight) : Infinity;
}

/**
 * Compute the maximum squared error (Eq. 8 from paper).
 * 
 * epsilon = 100 * max((omega_bar_m - omega_star_m) / omega_star_m)^2
 * 
 * @param {Array<number>} computedFreq - Computed frequencies
 * @param {Array<number>} targetFreq - Target frequencies
 * @returns {number} Maximum squared error as percentage
 */
export function computeMaxTuningError(computedFreq, targetFreq) {
    const M = Math.min(computedFreq.length, targetFreq.length);
    if (M === 0) {
        return Infinity;
    }

    let maxSquaredError = 0.0;

    for (let m = 0; m < M; m++) {
        const computed = computedFreq[m];
        const target = targetFreq[m];

        if (target === 0) {
            continue;
        }

        const relativeError = (computed - target) / target;
        const squaredError = relativeError * relativeError;

        if (squaredError > maxSquaredError) {
            maxSquaredError = squaredError;
        }
    }

    return 100.0 * maxSquaredError;
}

/**
 * Combined objective function with volumetric penalty (Eq. 11).
 * 
 * E = (1 - alpha) * epsilon + alpha * V
 * 
 * @param {number} tuningError - Tuning error epsilon (%)
 * @param {number} volumePenalty - Volume penalty V (%)
 * @param {number} alpha - Weighting factor (0-1)
 * @returns {number} Combined objective value
 */
export function combinedObjectiveVolume(tuningError, volumePenalty, alpha) {
    return (1 - alpha) * tuningError + alpha * volumePenalty;
}

/**
 * Combined objective function with roughness penalty (Eq. 13).
 * 
 * E = (1 - alpha) * epsilon + alpha * S
 * 
 * @param {number} tuningError - Tuning error epsilon (%)
 * @param {number} roughnessPenalty - Roughness penalty S (%)
 * @param {number} alpha - Weighting factor (0-1)
 * @returns {number} Combined objective value
 */
export function combinedObjectiveRoughness(tuningError, roughnessPenalty, alpha) {
    return (1 - alpha) * tuningError + alpha * roughnessPenalty;
}

/**
 * Evaluate fitness of an individual.
 * Lower fitness is better (we're minimizing).
 * 
 * @param {Individual} individual - Individual with genes
 * @param {Object} bar - Bar parameters
 * @param {Object} material - Material properties
 * @param {Array<number>} targetFreq - Target frequencies
 * @param {string} penaltyType - Type of penalty ('volume', 'roughness', or 'none')
 * @param {number} alpha - Penalty weight (0-1)
 * @param {number} numElements - Number of FEM elements (default: 150)
 * @param {number} f1Priority - Weight multiplier for f1 (default: 1 = equal)
 * @param {number} numCuts - Number of cuts
 * @returns {number} Fitness value (lower is better)
 */
export function evaluateFitness(
    individual,
    bar,
    material,
    targetFreq,
    penaltyType,
    alpha,
    numElements = 150,
    f1Priority = 1.0,
    numCuts = 1
) {
    const genes = individual.genes;

    try {
        // Compute frequencies
        const computedFreq = computeFrequenciesFromGenes(
            genes,
            bar,
            material,
            targetFreq.length,
            numElements,
            numCuts
        );

        // Compute tuning error (with f1 priority weighting)
        const tuningError = computeTuningError(computedFreq, targetFreq, f1Priority);

        // If no penalty, return tuning error
        if (penaltyType === 'none' || alpha === 0) {
            return tuningError;
        }

        // Convert genes to cuts for penalty calculation
        const cuts = genesToCuts(genes);

        // Compute penalty based on type
        if (penaltyType === 'volume') {
            const volumePenalty = computeVolumePenalty(cuts, bar.L, bar.h0);
            return combinedObjectiveVolume(tuningError, volumePenalty, alpha);
        } else {
            const roughnessPenalty = computeRoughnessPenalty(cuts, bar.h0);
            return combinedObjectiveRoughness(tuningError, roughnessPenalty, alpha);
        }

    } catch (e) {
        // Return high fitness if computation fails
        return 1e10;
    }
}

/**
 * Evaluate an entire population.
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @param {Object} bar - Bar parameters
 * @param {Object} material - Material properties
 * @param {Array<number>} targetFreq - Target frequencies
 * @param {string} penaltyType - Type of penalty
 * @param {number} alpha - Penalty weight
 * @param {number} numElements - Number of FEM elements (default: 150)
 * @param {number} numCuts - Number of cuts
 * @returns {Array<Individual>} Population with updated fitness values
 */
export function evaluatePopulation(
    population,
    bar,
    material,
    targetFreq,
    penaltyType,
    alpha,
    numElements = 150,
    numCuts = 1
) {
    return population.map(ind =>
        new Individual(
            ind.genes.slice(),
            evaluateFitness(ind, bar, material, targetFreq, penaltyType, alpha, numElements, 1.0, numCuts),
            ind.sigmas ? ind.sigmas.slice() : null
        )
    );
}

/**
 * Get detailed evaluation results for an individual.
 * Used for displaying results to user.
 * 
 * @param {Array<number>} genes - Gene array
 * @param {Object} bar - Bar parameters
 * @param {Object} material - Material properties
 * @param {Array<number>} targetFreq - Target frequencies
 * @param {string} penaltyType - Type of penalty
 * @param {number} alpha - Penalty weight
 * @param {number} numElements - Number of FEM elements (default: 150)
 * @param {number} numCuts - Number of cuts
 * @returns {DetailedEvaluation} Detailed evaluation results
 */
export function evaluateDetailed(
    genes,
    bar,
    material,
    targetFreq,
    penaltyType,
    alpha,
    numElements = 150,
    numCuts = 1
) {
    const cuts = genesToCuts(genes);

    // Compute frequencies
    const computedFrequencies = computeFrequenciesFromGenes(
        genes,
        bar,
        material,
        targetFreq.length,
        numElements,
        numCuts
    );

    // Compute tuning error
    const tuningError = computeTuningError(computedFrequencies, targetFreq);

    // Compute penalties
    const volumePenalty = computeVolumePenalty(cuts, bar.L, bar.h0);
    const roughnessPenalty = computeRoughnessPenalty(cuts, bar.h0);

    // Compute combined fitness
    let combinedFitness = tuningError;
    if (penaltyType === 'volume' && alpha > 0) {
        combinedFitness = combinedObjectiveVolume(tuningError, volumePenalty, alpha);
    } else if (penaltyType === 'roughness' && alpha > 0) {
        combinedFitness = combinedObjectiveRoughness(tuningError, roughnessPenalty, alpha);
    }

    // Compute cents errors
    const centsErrors = [];
    for (let i = 0; i < computedFrequencies.length; i++) {
        const target = i < targetFreq.length ? targetFreq[i] : 0;
        if (target && target > 0) {
            centsErrors.push(1200 * Math.log2(computedFrequencies[i] / target));
        } else {
            centsErrors.push(0.0);
        }
    }

    const maxCentsError = centsErrors.length > 0 
        ? Math.max(...centsErrors.map(Math.abs)) 
        : 0.0;

    return new DetailedEvaluation({
        computed_frequencies: computedFrequencies,
        target_frequencies: targetFreq,
        tuning_error: tuningError,
        volume_penalty: volumePenalty,
        roughness_penalty: roughnessPenalty,
        combined_fitness: combinedFitness,
        cents_errors: centsErrors,
        max_cents_error: maxCentsError
    });
}

export default {
    computeTuningError,
    computeMaxTuningError,
    combinedObjectiveVolume,
    combinedObjectiveRoughness,
    evaluateFitness,
    evaluatePopulation,
    evaluateDetailed,
};
