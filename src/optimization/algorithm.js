/**
 * Evolutionary Algorithm for Bar Tuning Optimization
 * 
 * Main optimization loop implementing the algorithm from Section 3 of the paper.
 * Combines elitism, selection, crossover, and mutation to find optimal
 * undercut geometries for target frequencies.
 */

import {
    Individual,
    BarParameters,
    EAParameters,
    OptimizationResult,
    ProgressUpdate,
    AnalysisMode,
} from '../types.js';
import { computeFrequenciesFromGenes, batchComputeFitness } from '../physics/frequencies.js';
import { genesToCuts } from '../physics/barProfile.js';

import {
    createBounds,
    createUncutBarIndividual,
    initializePopulation,
    getBestIndividual,
    calculatePopulationStats,
    cloneIndividual,
    getLengthAdjustFromGenes,
    BoundsConstraints,
} from './population.js';
import { selectElite, selectMatingPairs } from './selection.js';
import { heuristicCrossover } from './crossover.js';
import { uniformMutation, gaussianSelfAdaptiveMutation, adaptiveLengthMutation, FrequencyError } from './mutation.js';
import { computeVolumePenalty, computeRoughnessPenalty } from './penalties.js';
import { evaluateDetailed } from './objective.js';

/**
 * Configuration for the evolutionary algorithm.
 */
export class EAConfig {
    constructor(config = {}) {
        this.bar = config.bar;
        this.material = config.material;
        this.targetFrequencies = config.targetFrequencies;
        this.numCuts = config.numCuts;
        this.penaltyType = config.penaltyType ?? 'none';
        this.penaltyWeight = config.penaltyWeight ?? 0.0;
        this.eaParams = config.eaParams ?? null;
        this.seedGenes = config.seedGenes ?? null;
        this.onProgress = config.onProgress ?? null;
        this.shouldStop = config.shouldStop ?? null;
    }
}

/**
 * Compute frequencies and cents errors for an individual.
 * 
 * @private
 */
function computeFrequenciesAndErrors(
    genes,
    bar,
    material,
    targetFrequencies,
    numElements,
    numCuts,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 2
) {
    try {
        const lengthTrim = getLengthAdjustFromGenes(genes, numCuts);
        const computedFrequencies = computeFrequenciesFromGenes(
            genes,
            bar,
            material,
            targetFrequencies.length,
            numElements,
            numCuts,
            analysisMode,
            ny,
            nz
        );

        const errorsInCents = [];
        for (let i = 0; i < computedFrequencies.length; i++) {
            const target = i < targetFrequencies.length ? targetFrequencies[i] : 0;
            if (target && target > 0) {
                errorsInCents.push(1200 * Math.log2(computedFrequencies[i] / target));
            } else {
                errorsInCents.push(0.0);
            }
        }

        return {
            computedFrequencies,
            errorsInCents,
            lengthTrim
        };
    } catch (e) {
        return {
            computedFrequencies: [],
            errorsInCents: [],
            lengthTrim: 0.0
        };
    }
}

/**
 * Batch evaluate population fitness.
 * 
 * @private
 */
function batchEvaluatePopulation(
    population,
    bar,
    material,
    targetFrequencies,
    penaltyType,
    penaltyWeight,
    numElements,
    f1Priority = 1.0,
    numCuts = 1,
    maxWorkers = 0,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 2
) {
    const genesArray = population.map(ind => ind.genes);
    const tuningErrors = batchComputeFitness(
        genesArray,
        bar,
        material,
        targetFrequencies,
        numElements,
        f1Priority,
        numCuts,
        maxWorkers,
        analysisMode,
        ny,
        nz
    );

    // Apply penalties if needed
    const result = [];
    for (let i = 0; i < population.length; i++) {
        const ind = population[i];
        let fitness = tuningErrors[i];

        if (penaltyType !== 'none' && penaltyWeight > 0) {
            // Extract cut genes only (exclude length trim)
            const cutGenes = ind.genes.slice(0, numCuts * 2);
            const cuts = genesToCuts(cutGenes);

            // Get effective bar length if length adjustment is used
            const lengthAdjust = getLengthAdjustFromGenes(ind.genes, numCuts);
            const effectiveL = bar.L - 2 * lengthAdjust;

            if (penaltyType === 'volume') {
                const penalty = computeVolumePenalty(cuts, effectiveL, bar.h0);
                fitness = (1 - penaltyWeight) * fitness + penaltyWeight * penalty;
            } else {
                const penalty = computeRoughnessPenalty(cuts, bar.h0);
                fitness = (1 - penaltyWeight) * fitness + penaltyWeight * penalty;
            }
        }

        result.push(new Individual(
            ind.genes.slice(),
            fitness,
            ind.sigmas ? ind.sigmas.slice() : null
        ));
    }

    return result;
}

/**
 * Run the evolutionary algorithm.
 * 
 * @param {EAConfig} config - Algorithm configuration
 * @returns {OptimizationResult} Optimization result
 */
export function runEvolutionaryAlgorithm(config) {
    const bar = config.bar;
    const material = config.material;
    const originalTargetFrequencies = config.targetFrequencies;
    const numCuts = config.numCuts;
    const penaltyType = config.penaltyType;
    const penaltyWeight = config.penaltyWeight;
    const eaParams = config.eaParams || getDefaultEAParameters(numCuts);
    const seedGenes = config.seedGenes;
    const onProgress = config.onProgress;
    const shouldStop = config.shouldStop;

    // Apply frequency offset for 2D/3D calibration
    const offset = eaParams.frequency_offset;
    const targetFrequencies = originalTargetFrequencies.map(f => f * (1 + offset));

    const boundsConstraints = new BoundsConstraints({
        minCutWidth: eaParams.min_cut_width,
        maxCutWidth: eaParams.max_cut_width,
        minCutDepth: eaParams.min_cut_depth,
        maxCutDepth: eaParams.max_cut_depth,
        maxLengthTrim: eaParams.max_length_trim,
        maxLengthExtend: eaParams.max_length_extend
    });
    const bounds = createBounds(bar, numCuts, boundsConstraints);

    const f1Priority = eaParams.f1_priority;
    const hasLengthAdjust = eaParams.max_length_trim > 0 || eaParams.max_length_extend > 0;
    const maxWorkers = eaParams.max_workers;
    const analysisMode = eaParams.analysis_mode;
    const ny = eaParams.num_elements_y;
    const nz = eaParams.num_elements_z;

    // Log optimization start
    console.log(`[EA] Starting evolutionary algorithm optimization`);
    console.log(`[EA] Population size: ${eaParams.population_size}, Max generations: ${eaParams.max_generations}`);

    // Report Generation 0: uncut bar baseline
    if (onProgress) {
        const uncutBar = createUncutBarIndividual(numCuts, bounds, bar.h0);
        const [evaluatedUncut] = batchEvaluatePopulation(
            [uncutBar], bar, material, targetFrequencies,
            penaltyType, penaltyWeight, eaParams.num_elements, f1Priority, numCuts, maxWorkers,
            analysisMode, ny, nz
        );
        const freqData = computeFrequenciesAndErrors(
            evaluatedUncut.genes, bar, material, targetFrequencies, eaParams.num_elements, numCuts,
            analysisMode, ny, nz
        );
        onProgress(new ProgressUpdate({
            generation: 0,
            best_fitness: evaluatedUncut.fitness,
            best_individual: evaluatedUncut,
            average_fitness: evaluatedUncut.fitness,
            computed_frequencies: freqData.computedFrequencies,
            errors_in_cents: freqData.errorsInCents,
            length_trim: freqData.lengthTrim
        }));
    }

    // Initialize population (with optional seed)
    let population = initializePopulation(eaParams.population_size, numCuts, bounds, seedGenes);

    // Evaluate initial population
    population = batchEvaluatePopulation(
        population, bar, material, targetFrequencies,
        penaltyType, penaltyWeight, eaParams.num_elements, f1Priority, numCuts, maxWorkers,
        analysisMode, ny, nz
    );

    // Calculate percentages for different operations
    const numElite = Math.max(1, Math.floor(eaParams.population_size * eaParams.elitism_percent / 100));
    const numCrossover = Math.floor(eaParams.population_size * eaParams.crossover_percent / 100);
    const numCrossoverPairs = Math.floor((numCrossover + 1) / 2);

    let bestEver = getBestIndividual(population);
    let generation = 0;

    // Main evolution loop
    while (generation < eaParams.max_generations) {
        // Check stopping condition
        if (shouldStop && shouldStop()) {
            break;
        }

        // Check if target error reached
        if (bestEver.fitness <= eaParams.target_error) {
            break;
        }

        // Create next generation
        const nextGeneration = [];

        // 1. Elitism: Keep best individuals unchanged
        const elite = selectElite(population, numElite);
        nextGeneration.push(...elite);

        // 2. Crossover: Select parents and create children
        const newOffspring = [];
        if (numCrossover > 0) {
            const matingPairs = selectMatingPairs(population, numCrossoverPairs, 'roulette');

            for (const [parent1, parent2] of matingPairs) {
                const [child1, child2] = heuristicCrossover(parent1, parent2, bounds);
                newOffspring.push(child1);
                if (nextGeneration.length + newOffspring.length < eaParams.population_size) {
                    newOffspring.push(child2);
                }
            }
        }

        // 3. Mutation: Select individuals and mutate
        const sortedPop = [...population].sort((a, b) => a.fitness - b.fitness);
        while (nextGeneration.length + newOffspring.length < eaParams.population_size) {
            let idx = Math.floor(sortedPop.length * Math.min(0.5, (numElite + numCrossover) / eaParams.population_size) *
                (1 + 0.5 * (1 - nextGeneration.length / eaParams.population_size)));
            idx = Math.min(idx, sortedPop.length - 1);
            const parent = sortedPop[idx];

            // Use adaptive mutation if length adjustment is enabled
            let mutant;
            if (hasLengthAdjust) {
                const parentFreqs = computeFrequenciesFromGenes(
                    parent.genes, bar, material, 1, eaParams.num_elements, numCuts,
                    analysisMode, ny, nz
                );
                const f1Error = parentFreqs.length > 0 ? parentFreqs[0] - targetFrequencies[0] : 0;
                const freqError = new FrequencyError(f1Error);
                mutant = adaptiveLengthMutation(parent, eaParams.mutation_strength, bounds, freqError);
            } else {
                mutant = uniformMutation(parent, eaParams.mutation_strength, bounds);
            }
            newOffspring.push(mutant);
        }

        // Batch evaluate all new offspring at once
        if (newOffspring.length > 0) {
            const evaluatedOffspring = batchEvaluatePopulation(
                newOffspring, bar, material, targetFrequencies,
                penaltyType, penaltyWeight, eaParams.num_elements, f1Priority, numCuts, maxWorkers,
                analysisMode, ny, nz
            );
            nextGeneration.push(...evaluatedOffspring);
        }

        // Update population
        population = nextGeneration;

        // Update best ever
        const currentBest = getBestIndividual(population);
        if (currentBest.fitness < bestEver.fitness) {
            bestEver = cloneIndividual(currentBest);
        }

        generation += 1;

        // Log generation progress
        const stats = calculatePopulationStats(population);
        console.log(`[EA] Generation ${generation}/${eaParams.max_generations} | Population: ${population.length} | Best fitness: ${bestEver.fitness.toFixed(4)} | Avg fitness: ${stats.averageFitness.toFixed(4)}`);

        // Report progress
        if (onProgress) {
            const freqData = computeFrequenciesAndErrors(
                bestEver.genes, bar, material, targetFrequencies, eaParams.num_elements, numCuts,
                analysisMode, ny, nz
            );
            onProgress(new ProgressUpdate({
                generation,
                best_fitness: bestEver.fitness,
                best_individual: cloneIndividual(bestEver),
                average_fitness: stats.averageFitness,
                computed_frequencies: freqData.computedFrequencies,
                errors_in_cents: freqData.errorsInCents,
                length_trim: freqData.lengthTrim
            }));
        }
    }

    // Get detailed results for best solution
    const lengthAdjust = getLengthAdjustFromGenes(bestEver.genes, numCuts);
    const effectiveLength = bar.L - 2 * lengthAdjust;

    // Create effective bar for detailed evaluation
    const effectiveBar = lengthAdjust !== 0
        ? new BarParameters(effectiveLength, bar.b, bar.h0, bar.hMin)
        : bar;

    // Extract only cut genes
    const cutGenes = bestEver.genes.slice(0, numCuts * 2);

    // Evaluate against ORIGINAL targets (not offset-adjusted) for accurate reporting
    const detailed = evaluateDetailed(
        cutGenes,
        effectiveBar,
        material,
        originalTargetFrequencies,
        penaltyType,
        penaltyWeight,
        eaParams.num_elements,
        numCuts
    );

    return new OptimizationResult({
        best_individual: bestEver,
        cuts: genesToCuts(cutGenes),
        computed_frequencies: detailed.computed_frequencies,
        target_frequencies: originalTargetFrequencies,
        tuning_error: detailed.tuning_error,
        max_error_cents: detailed.max_cents_error,
        errors_in_cents: detailed.cents_errors,
        volume_percent: detailed.volume_penalty,
        roughness_percent: detailed.roughness_penalty,
        generations: generation,
        length_trim: lengthAdjust,
        effective_length: effectiveLength
    });
}

/**
 * Run optimization with adaptive mutation.
 * Uses self-adaptive Gaussian mutation for potentially better convergence.
 * 
 * @param {EAConfig} config - Algorithm configuration
 * @returns {OptimizationResult} Optimization result
 */
export function runAdaptiveEvolution(config) {
    const bar = config.bar;
    const material = config.material;
    const originalTargetFrequencies = config.targetFrequencies;
    const numCuts = config.numCuts;
    const penaltyType = config.penaltyType;
    const penaltyWeight = config.penaltyWeight;
    const eaParams = config.eaParams || getDefaultEAParameters(numCuts);

    // Apply frequency offset for 2D/3D calibration
    const offset = eaParams.frequency_offset;
    const targetFrequencies = originalTargetFrequencies.map(f => f * (1 + offset));
    const onProgress = config.onProgress;
    const shouldStop = config.shouldStop;

    const boundsConstraints = new BoundsConstraints({
        minCutWidth: eaParams.min_cut_width,
        maxCutWidth: eaParams.max_cut_width,
        minCutDepth: eaParams.min_cut_depth,
        maxCutDepth: eaParams.max_cut_depth,
        maxLengthTrim: eaParams.max_length_trim,
        maxLengthExtend: eaParams.max_length_extend
    });
    const bounds = createBounds(bar, numCuts, boundsConstraints);

    const f1Priority = eaParams.f1_priority;
    const hasLengthAdjust = eaParams.max_length_trim > 0 || eaParams.max_length_extend > 0;
    const numGenes = hasLengthAdjust ? numCuts * 2 + 1 : numCuts * 2;
    const maxWorkers = eaParams.max_workers;
    const analysisMode = eaParams.analysis_mode;
    const ny = eaParams.num_elements_y;
    const nz = eaParams.num_elements_z;

    // Log optimization start
    console.log(`[EA-Adaptive] Starting adaptive evolutionary algorithm optimization`);
    console.log(`[EA-Adaptive] Population size: ${eaParams.population_size}, Max generations: ${eaParams.max_generations}`);

    // Report Generation 0: uncut bar baseline
    if (onProgress) {
        const uncutBar = createUncutBarIndividual(numCuts, bounds, bar.h0);
        const [evaluatedUncut] = batchEvaluatePopulation(
            [uncutBar], bar, material, targetFrequencies,
            penaltyType, penaltyWeight, eaParams.num_elements, f1Priority, numCuts, maxWorkers,
            analysisMode, ny, nz
        );
        const freqData = computeFrequenciesAndErrors(
            evaluatedUncut.genes, bar, material, targetFrequencies, eaParams.num_elements, numCuts,
            analysisMode, ny, nz
        );
        onProgress(new ProgressUpdate({
            generation: 0,
            best_fitness: evaluatedUncut.fitness,
            best_individual: evaluatedUncut,
            average_fitness: evaluatedUncut.fitness,
            computed_frequencies: freqData.computedFrequencies,
            errors_in_cents: freqData.errorsInCents,
            length_trim: freqData.lengthTrim
        }));
    }

    // Initialize population with sigmas
    let population = initializePopulation(eaParams.population_size, numCuts, bounds);
    for (const ind of population) {
        ind.sigmas = new Array(numGenes).fill(0.2);
    }

    // Evaluate initial population
    population = batchEvaluatePopulation(
        population, bar, material, targetFrequencies,
        penaltyType, penaltyWeight, eaParams.num_elements, f1Priority, numCuts, maxWorkers,
        analysisMode, ny, nz
    );

    const numElite = Math.max(1, Math.floor(eaParams.population_size * eaParams.elitism_percent / 100));

    let bestEver = getBestIndividual(population);
    let generation = 0;

    while (generation < eaParams.max_generations) {
        if (shouldStop && shouldStop()) {
            break;
        }
        if (bestEver.fitness <= eaParams.target_error) {
            break;
        }

        const nextGeneration = [];

        // Elitism
        const elite = selectElite(population, numElite);
        nextGeneration.push(...elite);

        // Generate offspring through mutation only (mu + lambda strategy)
        const newOffspring = [];
        const sortedPop = [...population].sort((a, b) => a.fitness - b.fitness);

        while (nextGeneration.length + newOffspring.length < eaParams.population_size) {
            let idx = Math.floor(sortedPop.length * 0.5 * (1 - newOffspring.length / eaParams.population_size));
            idx = Math.min(idx, sortedPop.length - 1);
            const parent = sortedPop[idx];
            const mutant = gaussianSelfAdaptiveMutation(parent, eaParams.mutation_strength, bounds);
            newOffspring.push(mutant);
        }

        // Batch evaluate all new offspring at once
        if (newOffspring.length > 0) {
            const evaluatedOffspring = batchEvaluatePopulation(
                newOffspring, bar, material, targetFrequencies,
                penaltyType, penaltyWeight, eaParams.num_elements, f1Priority, numCuts, maxWorkers,
                analysisMode, ny, nz
            );
            nextGeneration.push(...evaluatedOffspring);
        }

        population = nextGeneration;

        const currentBest = getBestIndividual(population);
        if (currentBest.fitness < bestEver.fitness) {
            bestEver = cloneIndividual(currentBest);
        }

        generation += 1;

        // Log generation progress
        const stats = calculatePopulationStats(population);
        console.log(`[EA-Adaptive] Generation ${generation}/${eaParams.max_generations} | Population: ${population.length} | Best fitness: ${bestEver.fitness.toFixed(4)} | Avg fitness: ${stats.averageFitness.toFixed(4)}`);

        if (onProgress) {
            const freqData = computeFrequenciesAndErrors(
                bestEver.genes, bar, material, targetFrequencies, eaParams.num_elements, numCuts,
                analysisMode, ny, nz
            );
            onProgress(new ProgressUpdate({
                generation,
                best_fitness: bestEver.fitness,
                best_individual: cloneIndividual(bestEver),
                average_fitness: stats.averageFitness,
                computed_frequencies: freqData.computedFrequencies,
                errors_in_cents: freqData.errorsInCents,
                length_trim: freqData.lengthTrim
            }));
        }
    }

    // Get detailed results
    const lengthAdjust = getLengthAdjustFromGenes(bestEver.genes, numCuts);
    const effectiveLength = bar.L - 2 * lengthAdjust;

    const effectiveBar = lengthAdjust !== 0
        ? new BarParameters(effectiveLength, bar.b, bar.h0, bar.hMin)
        : bar;

    const cutGenes = bestEver.genes.slice(0, numCuts * 2);

    // Evaluate against ORIGINAL targets (not offset-adjusted) for accurate reporting
    const detailed = evaluateDetailed(
        cutGenes,
        effectiveBar,
        material,
        originalTargetFrequencies,
        penaltyType,
        penaltyWeight,
        eaParams.num_elements,
        numCuts
    );

    return new OptimizationResult({
        best_individual: bestEver,
        cuts: genesToCuts(cutGenes),
        computed_frequencies: detailed.computed_frequencies,
        target_frequencies: originalTargetFrequencies,
        tuning_error: detailed.tuning_error,
        max_error_cents: detailed.max_cents_error,
        errors_in_cents: detailed.cents_errors,
        volume_percent: detailed.volume_penalty,
        roughness_percent: detailed.roughness_penalty,
        generations: generation,
        length_trim: lengthAdjust,
        effective_length: effectiveLength
    });
}

/**
 * Get default EA parameters based on problem size.
 * 
 * @param {number} numCuts - Number of cuts
 * @returns {EAParameters} Default EA parameters
 */
export function getDefaultEAParameters(numCuts) {
    return new EAParameters({
        population_size: Math.max(30, numCuts * 10),
        elitism_percent: 10.0,
        crossover_percent: 30.0,
        mutation_percent: 60.0,
        mutation_strength: 0.1,
        max_generations: 100,
        target_error: 0.01,  // 0.01% error
        num_elements: 150,
        f1_priority: 1.0,
        min_cut_width: 0.0,
        max_cut_width: 0.0,
        min_cut_depth: 0.0,
        max_cut_depth: 0.0,
        max_length_trim: 0.0,
        max_length_extend: 0.0,
        max_workers: 0  // 0 = auto
    });
}

export default {
    EAConfig,
    runEvolutionaryAlgorithm,
    runAdaptiveEvolution,
    getDefaultEAParameters,
};
