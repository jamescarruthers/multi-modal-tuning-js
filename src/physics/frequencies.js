/**
 * Frequency Computation Module
 * 
 * Main functions for computing natural frequencies of undercut bars
 * using the FEM model. Supports both 2D Timoshenko beam and 3D solid
 * element analysis.
 * 
 * Note on async behavior:
 * - BEAM_2D mode is synchronous and returns Array<number> directly
 * - SOLID_3D mode is asynchronous and returns Promise<Array<number>>
 * - For consistent behavior, use batchComputeFitnessAsync which handles both modes
 */

import { AnalysisMode } from '../types.js';
import { genesToCuts } from './barProfile.js';
import { assembleGlobalMatrices, solveGeneralizedEigenvalue } from './femAssembly.js';
import { compute_frequencies_3d } from './fem3d.js';

/**
 * Compute natural frequencies for a bar with given element heights.
 * 
 * **Important**: This function returns different types based on analysis mode:
 * - BEAM_2D: Returns Array<number> (synchronous)
 * - SOLID_3D: Returns Promise<Array<number>> (asynchronous)
 * 
 * For consistent async handling, use the async versions of frequency computation.
 * 
 * @param {Array<number>} elementHeights - Height of each finite element (m)
 * @param {number} le - Length of each element (m)
 * @param {number} b - Bar width (m)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} rho - Density (kg/m^3)
 * @param {number} nu - Poisson's ratio
 * @param {number} numModes - Number of modes to extract
 * @param {string} analysisMode - BEAM_2D (fast, sync) or SOLID_3D (accurate, async)
 * @param {number} ny - Number of elements in width direction (3D only)
 * @param {number} nz - Number of elements in thickness direction (3D only)
 * @returns {Array<number>|Promise<Array<number>>} List of natural frequencies in Hz
 */
export function computeFrequencies(
    elementHeights,
    le,
    b,
    E,
    rho,
    nu,
    numModes,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 2
) {
    if (analysisMode === AnalysisMode.SOLID_3D) {
        // 3D solid element analysis
        const length = le * elementHeights.length;
        return compute_frequencies_3d(
            elementHeights, length, b, E, rho, nu, numModes, ny, nz
        );
    } else {
        // 2D Timoshenko beam analysis (default)
        const { K_global, M_global } = assembleGlobalMatrices(elementHeights, le, b, E, rho, nu);
        return solveGeneralizedEigenvalue(K_global, M_global, numModes);
    }
}

/**
 * Compute frequencies directly from cut parameters (genes).
 * Combines profile generation and frequency computation.
 * 
 * @param {Array<number>} genes - Flat array [lambda_1, h_1, lambda_2, h_2, ..., length_adjust?]
 * @param {Object} bar - Bar parameters (L, b, h0, hMin)
 * @param {Object} material - Material properties (E, rho, nu)
 * @param {number} numModes - Number of modes to extract
 * @param {number} numElements - Number of finite elements
 * @param {number} numCuts - Number of cuts (for determining length adjustment gene)
 * @param {string} analysisMode - BEAM_2D (fast) or SOLID_3D (accurate)
 * @param {number} ny - Number of elements in width direction (3D only)
 * @param {number} nz - Number of elements in thickness direction (3D only)
 * @returns {Array<number>|Promise<Array<number>>} List of natural frequencies in Hz
 */
export function computeFrequenciesFromGenes(
    genes,
    bar,
    material,
    numModes,
    numElements,
    numCuts = 0,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 2
) {
    // Handle length adjustment if present
    let barLength = bar.L;
    if (numCuts > 0 && genes.length > numCuts * 2) {
        const lengthAdjust = genes[numCuts * 2];
        barLength = bar.L - 2 * lengthAdjust;
    }

    // Parse genes into cuts
    const cutGenes = numCuts > 0 ? genes.slice(0, numCuts * 2) : genes;
    let cuts = genesToCuts(cutGenes);

    // Sort by lambda descending (largest first)
    cuts = cuts.sort((a, b) => b.lambda_ - a.lambda_);

    // Generate element heights
    const le = barLength / numElements;
    const centerX = barLength / 2;

    const elementHeights = [];
    for (let e = 0; e < numElements; e++) {
        const xMid = (e + 0.5) * le;
        const distFromCenter = Math.abs(xMid - centerX);

        // Find all cuts that contain this point, return the innermost one's height
        let innermostH = bar.h0;
        for (const cut of cuts) {
            if (cut.lambda_ > 0 && distFromCenter <= cut.lambda_) {
                innermostH = cut.h;
            }
        }

        elementHeights.push(innermostH);
    }

    return computeFrequencies(
        elementHeights,
        le,
        bar.b,
        material.E,
        material.rho,
        material.nu,
        numModes,
        analysisMode,
        ny,
        nz
    );
}

/**
 * Compute fitness for a single individual.
 * Internal function used by batchComputeFitness.
 * 
 * @private
 */
function computeSingleFitness(
    genes,
    barLength,
    barWidth,
    h0,
    numElements,
    E,
    rho,
    nu,
    targetFrequencies,
    f1Priority,
    numCuts,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 2
) {
    // Handle length adjustment if present
    let effectiveLength = barLength;
    if (numCuts > 0 && genes.length > numCuts * 2) {
        const lengthAdjust = genes[numCuts * 2];
        effectiveLength = barLength - 2 * lengthAdjust;
    }

    // Parse genes into cuts
    const cutGenes = numCuts > 0 ? genes.slice(0, numCuts * 2) : genes;
    let cuts = genesToCuts(cutGenes);
    cuts = cuts.sort((a, b) => b.lambda_ - a.lambda_);

    // Generate element heights
    const le = effectiveLength / numElements;
    const centerX = effectiveLength / 2;

    const elementHeights = [];
    for (let e = 0; e < numElements; e++) {
        const xMid = (e + 0.5) * le;
        const distFromCenter = Math.abs(xMid - centerX);

        let innermostH = h0;
        for (const cut of cuts) {
            if (cut.lambda_ > 0 && distFromCenter <= cut.lambda_) {
                innermostH = cut.h;
            }
        }

        elementHeights.push(innermostH);
    }

    // Compute frequencies
    let frequencies;
    try {
        frequencies = computeFrequencies(
            elementHeights,
            le,
            barWidth,
            E,
            rho,
            nu,
            targetFrequencies.length,
            analysisMode,
            ny,
            nz
        );
        
        // Handle Promise for 3D analysis
        if (frequencies instanceof Promise) {
            // For sync context, we can't await, so return Infinity.
            // This is expected behavior when batchComputeFitness is called with SOLID_3D mode.
            // For 3D analysis, use batchComputeFitnessAsync instead which properly handles async.
            // Returning Infinity ensures the sync fitness computation doesn't silently use invalid data.
            return Infinity;
        }
    } catch (e) {
        return Infinity;
    }

    // Compute weighted tuning error
    const numModes = targetFrequencies.length;
    if (frequencies.length < numModes) {
        return Infinity;
    }

    let weightedSumSqError = 0.0;
    let totalWeight = 0.0;
    for (let m = 0; m < numModes; m++) {
        const weight = m === 0 ? f1Priority : 1.0;
        const relError = (frequencies[m] - targetFrequencies[m]) / targetFrequencies[m];
        weightedSumSqError += weight * relError * relError;
        totalWeight += weight;
    }

    if (totalWeight > 0) {
        return 100.0 * weightedSumSqError / totalWeight;
    } else {
        return Infinity;
    }
}

/**
 * Batch compute fitness for entire population.
 * 
 * **Important**: This function is synchronous and only works correctly with BEAM_2D mode.
 * For SOLID_3D (async) mode, use batchComputeFitnessAsync instead.
 * If called with SOLID_3D mode, individuals will receive Infinity fitness.
 * 
 * Note: Unlike the Python version, this does not use multithreading.
 * JavaScript is single-threaded, but we could use Web Workers for true parallelism.
 * 
 * @param {Array<Array<number>>} genesArray - List of gene arrays, one per individual
 * @param {Object} bar - Bar parameters
 * @param {Object} material - Material properties
 * @param {Array<number>} targetFrequencies - Target frequencies (Hz)
 * @param {number} numElements - Number of FEM elements
 * @param {number} f1Priority - Weight multiplier for f1 (>1 prioritizes f1)
 * @param {number} numCuts - Number of cuts per individual
 * @param {number} maxWorkers - Maximum number of worker threads (ignored in JS, kept for API compatibility)
 * @param {string} analysisMode - BEAM_2D (fast, sync) or SOLID_3D (will return Infinity - use async version)
 * @param {number} ny - Number of elements in width direction (3D only)
 * @param {number} nz - Number of elements in thickness direction (3D only)
 * @returns {Array<number>} List of fitness values for each individual
 */
export function batchComputeFitness(
    genesArray,
    bar,
    material,
    targetFrequencies,
    numElements,
    f1Priority = 1.0,
    numCuts = 1,
    maxWorkers = 0,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 2
) {
    const fitnessValues = [];

    for (const genes of genesArray) {
        const fitness = computeSingleFitness(
            genes,
            bar.L,
            bar.b,
            bar.h0,
            numElements,
            material.E,
            material.rho,
            material.nu,
            targetFrequencies,
            f1Priority,
            numCuts,
            analysisMode,
            ny,
            nz
        );
        fitnessValues.push(fitness);
    }

    return fitnessValues;
}

/**
 * Async version of batchComputeFitness that properly handles 3D analysis.
 * 
 * @param {Array<Array<number>>} genesArray - List of gene arrays, one per individual
 * @param {Object} bar - Bar parameters
 * @param {Object} material - Material properties
 * @param {Array<number>} targetFrequencies - Target frequencies (Hz)
 * @param {number} numElements - Number of FEM elements
 * @param {number} f1Priority - Weight multiplier for f1 (>1 prioritizes f1)
 * @param {number} numCuts - Number of cuts per individual
 * @param {number} maxWorkers - Maximum number of worker threads (ignored)
 * @param {string} analysisMode - BEAM_2D (fast) or SOLID_3D (accurate)
 * @param {number} ny - Number of elements in width direction (3D only)
 * @param {number} nz - Number of elements in thickness direction (3D only)
 * @returns {Promise<Array<number>>} List of fitness values for each individual
 */
export async function batchComputeFitnessAsync(
    genesArray,
    bar,
    material,
    targetFrequencies,
    numElements,
    f1Priority = 1.0,
    numCuts = 1,
    maxWorkers = 0,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 2
) {
    const fitnessPromises = genesArray.map(async (genes) => {
        try {
            // Handle length adjustment if present
            let effectiveLength = bar.L;
            if (numCuts > 0 && genes.length > numCuts * 2) {
                const lengthAdjust = genes[numCuts * 2];
                effectiveLength = bar.L - 2 * lengthAdjust;
            }

            // Parse genes into cuts
            const cutGenes = numCuts > 0 ? genes.slice(0, numCuts * 2) : genes;
            let cuts = genesToCuts(cutGenes);
            cuts = cuts.sort((a, b) => b.lambda_ - a.lambda_);

            // Generate element heights
            const le = effectiveLength / numElements;
            const centerX = effectiveLength / 2;

            const elementHeights = [];
            for (let e = 0; e < numElements; e++) {
                const xMid = (e + 0.5) * le;
                const distFromCenter = Math.abs(xMid - centerX);

                let innermostH = bar.h0;
                for (const cut of cuts) {
                    if (cut.lambda_ > 0 && distFromCenter <= cut.lambda_) {
                        innermostH = cut.h;
                    }
                }

                elementHeights.push(innermostH);
            }

            // Compute frequencies
            let frequencies = computeFrequencies(
                elementHeights,
                le,
                bar.b,
                material.E,
                material.rho,
                material.nu,
                targetFrequencies.length,
                analysisMode,
                ny,
                nz
            );

            // Handle Promise for 3D analysis
            if (frequencies instanceof Promise) {
                frequencies = await frequencies;
            }

            // Compute weighted tuning error
            const numModes = targetFrequencies.length;
            if (frequencies.length < numModes) {
                return Infinity;
            }

            let weightedSumSqError = 0.0;
            let totalWeight = 0.0;
            for (let m = 0; m < numModes; m++) {
                const weight = m === 0 ? f1Priority : 1.0;
                const relError = (frequencies[m] - targetFrequencies[m]) / targetFrequencies[m];
                weightedSumSqError += weight * relError * relError;
                totalWeight += weight;
            }

            if (totalWeight > 0) {
                return 100.0 * weightedSumSqError / totalWeight;
            } else {
                return Infinity;
            }
        } catch (e) {
            return Infinity;
        }
    });

    return Promise.all(fitnessPromises);
}

export default {
    computeFrequencies,
    computeFrequenciesFromGenes,
    batchComputeFitness,
    batchComputeFitnessAsync,
};
