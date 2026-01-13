/**
 * Multi-Modal Bar Tuning Optimization - JavaScript Port
 * 
 * Main entry point for the library.
 */

// Types
export * from './types.js';

// Data modules
export { MATERIALS, getMaterial, getMaterialsByCategory, KAPPA, calculateShearModulus } from './data/materials.js';
export { 
    TUNING_PRESETS, 
    getPreset, 
    calculateTargetFrequencies, 
    frequencyToCents,
    UNIFORM_BAR_BETAS,
    UNIFORM_BAR_RATIOS
} from './data/presets.js';

// Utils
export {
    noteToFrequency,
    frequencyToNote,
    noteToMidiNumber,
    midiNumberToNote,
    generateNotesInRange,
    generateNoteList,
    formatFrequency,
    frequencyErrorCents,
    NoteInfo
} from './utils/noteUtils.js';

export {
    LengthSearchResult,
    BarLengthResult,
    computeF1ForUniformBar,
    findOptimalLength,
    findLengthsForNotes,
    estimateLengthFromTheory
} from './utils/barLengthFinder.js';

// Physics modules
export {
    computeHeight,
    generateElementHeights,
    genesToCuts,
    cutsToGenes,
    countEffectiveCuts,
    validateCuts,
    generateAdaptiveMesh1d,
    MeshResolutionWarning,
    analyzeMeshResolution,
    checkMeshResolution,
    generateProfilePoints
} from './physics/barProfile.js';

export {
    computeElementStiffness,
    computeElementMass
} from './physics/timoshenko.js';

export {
    assembleGlobalMatrices,
    solveGeneralizedEigenvalue
} from './physics/femAssembly.js';

export {
    computeFrequencies,
    computeFrequenciesFromGenes,
    batchComputeFitness,
    batchComputeFitnessAsync
} from './physics/frequencies.js';

// 3D FEM exports
export {
    gauss_points_3d,
    shape_functions_hex8,
    shape_function_derivatives_hex8,
    elasticity_matrix_3d,
    compute_hex8_matrices,
    generate_bar_mesh_3d,
    generate_bar_mesh_3d_adaptive,
    assemble_global_matrices_3d,
    solve_eigenvalue_3d,
    compute_frequencies_3d,
    find_corner_nodes,
    classify_mode_soares,
    classify_all_modes,
    solve_eigenvalue_3d_with_vectors,
    compute_frequencies_3d_classified,
    get_bending_frequencies_3d,
    compute_frequencies_3d_adaptive
} from './physics/fem3d.js';

// Optimization modules
export {
    EAConfig,
    runEvolutionaryAlgorithm,
    runAdaptiveEvolution,
    getDefaultEAParameters,
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
    rouletteSelection,
    tournamentSelection,
    rankSelection,
    selectMatingPairs,
    selectElite,
    heuristicCrossover,
    singlePointCrossover,
    twoPointCrossover,
    uniformCrossover,
    blendCrossover,
    performCrossover,
    FrequencyError,
    gaussianRandom,
    uniformMutation,
    adaptiveLengthMutation,
    gaussianSelfAdaptiveMutation,
    polynomialMutation,
    performMutation,
    computeVolumePenalty,
    computeRoughnessPenalty,
    computeBothPenalties,
    estimateMinimumVolume,
    computeTuningError,
    computeMaxTuningError,
    combinedObjectiveVolume,
    combinedObjectiveRoughness,
    evaluateFitness,
    evaluatePopulation,
    evaluateDetailed
} from './optimization/index.js';

export const VERSION = '1.0.0';
