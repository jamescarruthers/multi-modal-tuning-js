/**
 * Population Management for Evolutionary Algorithm
 * 
 * Handles creation, manipulation, and analysis of populations of individuals.
 */

import { Individual, VariableBounds, BarParameters } from '../types.js';

/**
 * Constraint options for creating bounds.
 */
export class BoundsConstraints {
    constructor(config = {}) {
        this.minCutWidth = config.minCutWidth ?? 0.0;      // Minimum spacing between cut boundaries (m)
        this.maxCutWidth = config.maxCutWidth ?? 0.0;      // Maximum cut width = 2*lambda (m), 0 = no limit
        this.minCutDepth = config.minCutDepth ?? 0.0;      // Minimum depth = h0 - h (m), 0 = no limit
        this.maxCutDepth = config.maxCutDepth ?? 0.0;      // Maximum depth = h0 - h (m), 0 = use bar.hMin
        this.maxLengthTrim = config.maxLengthTrim ?? 0.0;  // Maximum trim from each end (m), 0 = no trimming
        this.maxLengthExtend = config.maxLengthExtend ?? 0.0; // Maximum extension from each end (m), 0 = no extension
    }
}

/**
 * Population statistics.
 */
export class PopulationStats {
    constructor(config = {}) {
        this.bestFitness = config.bestFitness ?? Infinity;
        this.worstFitness = config.worstFitness ?? Infinity;
        this.averageFitness = config.averageFitness ?? Infinity;
        this.medianFitness = config.medianFitness ?? Infinity;
        this.standardDeviation = config.standardDeviation ?? 0.0;
    }
}

/**
 * Create bounds for optimization variables based on bar parameters.
 * 
 * @param {BarParameters} bar - Bar parameters
 * @param {number} numCuts - Number of cuts
 * @param {BoundsConstraints} constraints - Optional constraint parameters
 * @returns {VariableBounds} Variable bounds
 */
export function createBounds(bar, numCuts, constraints = null) {
    if (constraints === null) {
        constraints = new BoundsConstraints();
    }

    // Lambda bounds
    const lambdaMin = 0.0;
    const lambdaMax = bar.L / 2;

    // Height bounds (remember: depth = h0 - h, so larger depth means smaller h)
    const hMax = constraints.minCutDepth > 0 
        ? Math.max(bar.hMin, bar.h0 - constraints.minCutDepth) 
        : bar.h0;
    const hMin = constraints.maxCutDepth > 0 
        ? Math.max(bar.hMin, bar.h0 - constraints.maxCutDepth) 
        : bar.hMin;

    return new VariableBounds({
        lambda_min: lambdaMin,
        lambda_max: lambdaMax,
        h_min: hMin,
        h_max: hMax,
        min_cut_width: constraints.minCutWidth,
        max_cut_width: constraints.maxCutWidth,
        min_cut_depth: constraints.minCutDepth,
        max_cut_depth: constraints.maxCutDepth,
        max_length_trim: constraints.maxLengthTrim,
        max_length_extend: constraints.maxLengthExtend
    });
}

/**
 * Create an "uncut bar" individual - baseline with no modifications.
 * All lambdas = 0 (no cuts), all heights = h0 (full thickness).
 * 
 * @param {number} numCuts - Number of cuts (determines gene array size)
 * @param {VariableBounds} bounds - Variable bounds
 * @param {number} h0 - Original bar thickness
 * @returns {Individual} Individual representing an uncut bar
 */
export function createUncutBarIndividual(numCuts, bounds, h0) {
    const genes = [];

    // All cuts have lambda=0 and h=h0 (no material removed)
    for (let i = 0; i < numCuts; i++) {
        genes.push(0.0);   // lambda = 0 (no cut extent)
        genes.push(h0);    // h = h0 (full original thickness)
    }

    // Add length adjustment gene if enabled (set to 0 = no trim/extend)
    const hasLengthAdjust = bounds.max_length_trim > 0 || bounds.max_length_extend > 0;
    if (hasLengthAdjust) {
        genes.push(0.0);
    }

    return new Individual(genes, Infinity);
}

/**
 * Create a random individual within bounds, respecting min/max cut width constraints.
 * 
 * @param {number} numCuts - Number of cuts (2 genes per cut: lambda, h)
 * @param {VariableBounds} bounds - Variable bounds
 * @returns {Individual} New individual with random genes
 */
export function createRandomIndividual(numCuts, bounds) {
    const genes = [];
    const minWidth = bounds.min_cut_width || 0.0;
    const maxWidth = bounds.max_cut_width || 0.0;

    // Generate lambdas that respect both min and max cut width constraints
    const lambdas = [];

    if (numCuts === 1) {
        // Single cut
        let lambda = bounds.lambda_min + Math.random() * (bounds.lambda_max - bounds.lambda_min);
        if (maxWidth > 0) {
            lambda = Math.min(lambda, maxWidth);
        }
        lambdas.push(lambda);
    } else {
        // Multiple cuts: generate with spacing constraints
        let currentMax = bounds.lambda_max;

        for (let i = 0; i < numCuts; i++) {
            const remainingCuts = numCuts - i - 1;
            const reservedSpace = remainingCuts * minWidth;
            const availableMax = currentMax - reservedSpace;

            let cutMin = bounds.lambda_min + reservedSpace;
            let cutMax = availableMax;

            if (maxWidth > 0 && i > 0) {
                cutMin = Math.max(cutMin, lambdas[i - 1] - maxWidth);
            }

            if (cutMax < cutMin) {
                cutMax = cutMin;
            }

            const lambda = cutMin + Math.random() * (cutMax - cutMin);
            lambdas.push(lambda);

            currentMax = lambda - minWidth;
        }
    }

    // Ensure lambdas are sorted descending
    lambdas.sort((a, b) => b - a);

    // Build genes array with lambdas and random heights
    for (let i = 0; i < numCuts; i++) {
        genes.push(lambdas[i]);
        const h = bounds.h_min + Math.random() * (bounds.h_max - bounds.h_min);
        genes.push(h);
    }

    // Add length adjustment gene if enabled
    const hasLengthAdjust = bounds.max_length_trim > 0 || bounds.max_length_extend > 0;
    if (hasLengthAdjust) {
        const minVal = -bounds.max_length_extend;
        const maxVal = bounds.max_length_trim;
        const lengthAdjust = minVal + Math.random() * (maxVal - minVal);
        genes.push(lengthAdjust);
    }

    return new Individual(genes, Infinity);
}

/**
 * Initialize a population of random individuals, optionally seeded with initial genes.
 * 
 * @param {number} populationSize - Number of individuals
 * @param {number} numCuts - Number of cuts per individual
 * @param {VariableBounds} bounds - Variable bounds
 * @param {Array<number>} seedGenes - Optional seed genes to use for initial individual(s)
 * @returns {Array<Individual>} Array of individuals
 */
export function initializePopulation(populationSize, numCuts, bounds, seedGenes = null) {
    const population = [];

    // If seed genes provided, create an individual from them
    if (seedGenes && seedGenes.length > 0) {
        const clampedGenes = clampToBounds(seedGenes, bounds);
        population.push(new Individual(clampedGenes, Infinity));

        // Also add some mutated variants of the seed for diversity
        const numVariants = Math.min(Math.floor(populationSize * 0.2), 10);
        for (let i = 0; i < numVariants; i++) {
            if (population.length >= populationSize) {
                break;
            }
            const variantGenes = clampedGenes.map(g => g * (0.95 + Math.random() * 0.1));
            population.push(new Individual(
                clampToBounds(variantGenes, bounds),
                Infinity
            ));
        }
    }

    // Fill remaining slots with random individuals
    while (population.length < populationSize) {
        population.push(createRandomIndividual(numCuts, bounds));
    }

    return population;
}

/**
 * Get the best individual from a population.
 * (Lowest fitness is best - we're minimizing)
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @returns {Individual} Best individual
 */
export function getBestIndividual(population) {
    return population.reduce((best, current) =>
        current.fitness < best.fitness ? current : best
    );
}

/**
 * Get the N best individuals from a population.
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @param {number} n - Number of best individuals to return
 * @returns {Array<Individual>} N best individuals
 */
export function getTopIndividuals(population, n) {
    return [...population].sort((a, b) => a.fitness - b.fitness).slice(0, n);
}

/**
 * Calculate population statistics.
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @returns {PopulationStats} Population statistics
 */
export function calculatePopulationStats(population) {
    const fitnesses = population
        .filter(ind => isFinite(ind.fitness))
        .map(ind => ind.fitness);

    if (fitnesses.length === 0) {
        return new PopulationStats({
            bestFitness: Infinity,
            worstFitness: Infinity,
            averageFitness: Infinity,
            medianFitness: Infinity,
            standardDeviation: 0.0
        });
    }

    fitnesses.sort((a, b) => a - b);

    const average = fitnesses.reduce((a, b) => a + b, 0) / fitnesses.length;

    let median;
    if (fitnesses.length % 2 === 0) {
        median = (fitnesses[fitnesses.length / 2 - 1] + fitnesses[fitnesses.length / 2]) / 2;
    } else {
        median = fitnesses[Math.floor(fitnesses.length / 2)];
    }

    const squaredDiffs = fitnesses.map(f => (f - average) ** 2);
    const variance = squaredDiffs.reduce((a, b) => a + b, 0) / fitnesses.length;
    const stdDev = Math.sqrt(variance);

    return new PopulationStats({
        bestFitness: fitnesses[0],
        worstFitness: fitnesses[fitnesses.length - 1],
        averageFitness: average,
        medianFitness: median,
        standardDeviation: stdDev
    });
}

/**
 * Deep clone an individual.
 * 
 * @param {Individual} individual - Individual to clone
 * @returns {Individual} Cloned individual
 */
export function cloneIndividual(individual) {
    return new Individual(
        individual.genes.slice(),
        individual.fitness,
        individual.sigmas ? individual.sigmas.slice() : null
    );
}

/**
 * Check if genes are within bounds and clamp if necessary.
 * Enforces both minimum and maximum cut width constraints.
 * 
 * @param {Array<number>} genes - Array of genes
 * @param {VariableBounds} bounds - Variable bounds
 * @returns {Array<number>} Clamped genes
 */
export function clampToBounds(genes, bounds) {
    const clamped = genes.slice();
    const minWidth = bounds.min_cut_width || 0.0;
    const maxWidth = bounds.max_cut_width || 0.0;

    // Determine if length adjustment gene is present
    const hasLengthAdjust = bounds.max_length_trim > 0 || bounds.max_length_extend > 0;
    const numCuts = hasLengthAdjust ? Math.floor((clamped.length - 1) / 2) : Math.floor(clamped.length / 2);
    const cutGenesLength = numCuts * 2;

    // First pass: clamp individual cut values (lambda and h)
    for (let i = 0; i < cutGenesLength; i += 2) {
        // Clamp lambda
        clamped[i] = Math.max(bounds.lambda_min, Math.min(bounds.lambda_max, clamped[i]));
        // Clamp height
        clamped[i + 1] = Math.max(bounds.h_min, Math.min(bounds.h_max, clamped[i + 1]));
    }

    // Clamp length adjustment gene if present
    if (hasLengthAdjust && clamped.length > cutGenesLength) {
        const minVal = -bounds.max_length_extend;
        const maxVal = bounds.max_length_trim;
        clamped[cutGenesLength] = Math.max(minVal, Math.min(maxVal, clamped[cutGenesLength]));
    }

    // Second pass: enforce min/max spacing between lambdas
    if ((minWidth > 0 || maxWidth > 0) && numCuts >= 1) {
        // Extract lambdas with their original indices
        const lambdasWithIdx = [];
        for (let i = 0; i < numCuts; i++) {
            lambdasWithIdx.push({ value: clamped[i * 2], idx: i * 2 });
        }

        // Sort by lambda descending (outermost first)
        lambdasWithIdx.sort((a, b) => b.value - a.value);

        // Enforce constraints from outside in
        for (let i = 1; i < lambdasWithIdx.length; i++) {
            const outerLambda = lambdasWithIdx[i - 1].value;
            let innerLambda = lambdasWithIdx[i].value;

            // Enforce minimum spacing
            if (minWidth > 0) {
                const maxAllowed = outerLambda - minWidth;
                if (innerLambda > maxAllowed) {
                    innerLambda = Math.max(bounds.lambda_min, maxAllowed);
                }
            }

            // Enforce maximum spacing
            if (maxWidth > 0) {
                const minAllowed = outerLambda - maxWidth;
                if (innerLambda < minAllowed) {
                    innerLambda = Math.max(bounds.lambda_min, minAllowed);
                }
            }

            lambdasWithIdx[i].value = innerLambda;
        }

        // Write back to clamped array
        for (const { value, idx } of lambdasWithIdx) {
            clamped[idx] = value;
        }
    }

    return clamped;
}

/**
 * Extract length adjustment from genes array.
 * Returns 0 if length adjustment is not enabled.
 * 
 * @param {Array<number>} genes - Gene array [lambda_1, h_1, ..., length_adjust?]
 * @param {number} numCuts - Number of cuts
 * @returns {number} Length adjustment value (m): positive = trim, negative = extend, 0 if not present
 */
export function getLengthAdjustFromGenes(genes, numCuts) {
    const expectedCutGenes = numCuts * 2;
    if (genes.length > expectedCutGenes) {
        return genes[expectedCutGenes];
    }
    return 0.0;
}

/**
 * Calculate diversity measure for population.
 * Higher values indicate more diverse population.
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @returns {number} Diversity measure
 */
export function calculateDiversity(population) {
    if (population.length < 2) {
        return 0.0;
    }

    const numGenes = population[0].genes.length;
    let totalVariance = 0.0;

    for (let g = 0; g < numGenes; g++) {
        const geneValues = population.map(ind => ind.genes[g]);
        const mean = geneValues.reduce((a, b) => a + b, 0) / geneValues.length;
        const variance = geneValues.reduce((sum, v) => sum + (v - mean) ** 2, 0) / geneValues.length;
        totalVariance += variance;
    }

    return Math.sqrt(totalVariance / numGenes);
}

export default {
    BoundsConstraints,
    PopulationStats,
    createBounds,
    createUncutBarIndividual,
    createRandomIndividual,
    initializePopulation,
    getBestIndividual,
    getTopIndividuals,
    calculatePopulationStats,
    cloneIndividual,
    clampToBounds,
    getLengthAdjustFromGenes,
    calculateDiversity,
};
