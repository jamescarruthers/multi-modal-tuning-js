/**
 * Optimization Module Index
 * 
 * Re-exports all optimization components for convenient importing.
 */

// Algorithm
export {
    EAConfig,
    runEvolutionaryAlgorithm,
    runAdaptiveEvolution,
    getDefaultEAParameters,
} from './algorithm.js';

// Population
export {
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
} from './population.js';

// Selection
export {
    rouletteSelection,
    tournamentSelection,
    rankSelection,
    selectMatingPairs,
    selectElite,
} from './selection.js';

// Crossover
export {
    heuristicCrossover,
    singlePointCrossover,
    twoPointCrossover,
    uniformCrossover,
    blendCrossover,
    performCrossover,
} from './crossover.js';

// Mutation
export {
    FrequencyError,
    gaussianRandom,
    uniformMutation,
    adaptiveLengthMutation,
    gaussianSelfAdaptiveMutation,
    polynomialMutation,
    performMutation,
} from './mutation.js';

// Penalties
export {
    computeVolumePenalty,
    computeRoughnessPenalty,
    computeBothPenalties,
    estimateMinimumVolume,
} from './penalties.js';

// Objective
export {
    computeTuningError,
    computeMaxTuningError,
    combinedObjectiveVolume,
    combinedObjectiveRoughness,
    evaluateFitness,
    evaluatePopulation,
    evaluateDetailed,
} from './objective.js';
