/**
 * Mutation Operators for Evolutionary Algorithm
 * 
 * Implements uniform random mutation and self-adaptive Gaussian mutation
 * from Section 3.3 of the paper (Eq. 17-18).
 */

import { Individual } from '../types.js';
import { clampToBounds } from './population.js';

/**
 * Frequency error info for adaptive length mutation.
 */
export class FrequencyError {
    constructor(f1Error) {
        this.f1Error = f1Error; // f1_computed - f1_target (positive = too high, negative = too low)
    }
}

/**
 * Generate a random number from standard Gaussian distribution.
 * Using Box-Muller transform.
 * 
 * @returns {number} Random number from N(0, 1)
 */
export function gaussianRandom() {
    let u1 = Math.random();
    const u2 = Math.random();

    // Avoid log(0)
    while (u1 === 0) {
        u1 = Math.random();
    }

    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

/**
 * Uniform random mutation.
 * As described in paper Section 3.3:
 * 1. Randomly select number of genes to mutate (1 to 2N)
 * 2. Randomly select which genes to mutate
 * 3. Mutate with: c = p + sigma * r, where r is uniform [-1, 1]
 * 
 * @param {Individual} individual - Individual to mutate
 * @param {number} sigma - Mutation strength (normalized to bounds)
 * @param {Object} bounds - Variable bounds
 * @returns {Individual} Mutated individual
 */
export function uniformMutation(individual, sigma, bounds) {
    const genes = individual.genes.slice();
    const numGenes = genes.length;

    // Step 1: Random number of genes to mutate
    const numMutate = Math.floor(Math.random() * numGenes) + 1;

    // Step 2: Select which genes to mutate (using Fisher-Yates shuffle to pick random indices)
    const indices = Array.from({ length: numGenes }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const indicesToMutate = new Set(indices.slice(0, numMutate));

    // Determine if length adjustment gene is present
    const hasLengthAdjust = bounds.max_length_trim > 0 || bounds.max_length_extend > 0;
    const numCuts = hasLengthAdjust ? Math.floor((numGenes - 1) / 2) : Math.floor(numGenes / 2);
    const cutGenesCount = numCuts * 2;

    // Step 3: Mutate selected genes
    for (const idx of indicesToMutate) {
        let rangeVal;
        // Determine bound range for this gene
        if (hasLengthAdjust && idx === cutGenesCount) {
            // This is the length adjustment gene
            rangeVal = bounds.max_length_trim + bounds.max_length_extend;
        } else {
            // Cut genes: alternating lambda and h
            const isLambda = idx % 2 === 0;
            rangeVal = isLambda 
                ? (bounds.lambda_max - bounds.lambda_min) 
                : (bounds.h_max - bounds.h_min);
        }

        // Random mutation: r is uniform [-1, 1]
        const r = Math.random() * 2 - 1;
        genes[idx] += sigma * rangeVal * r;
    }

    // Clamp to bounds
    const mutatedGenes = clampToBounds(genes, bounds);

    return new Individual(
        mutatedGenes,
        Infinity,
        individual.sigmas ? individual.sigmas.slice() : null
    );
}

/**
 * Adaptive mutation with gradient-aware length adjustment.
 * 
 * When mutating the length gene, biases the direction based on f1 error:
 * - If f1 is too high (positive error), bias toward trimming (positive length adjust)
 * - If f1 is too low (negative error), bias toward extending (negative length adjust)
 * 
 * Physics: f1 is proportional to 1/L^2, so shorter bar = higher frequency.
 * 
 * @param {Individual} individual - Individual to mutate
 * @param {number} sigma - Mutation strength (normalized to bounds)
 * @param {Object} bounds - Variable bounds
 * @param {FrequencyError} freqError - Optional frequency error info for adaptive length mutation
 * @param {number} adaptiveBias - How strongly to bias toward the correct direction (0-1, default 0.7)
 * @returns {Individual} Mutated individual
 */
export function adaptiveLengthMutation(individual, sigma, bounds, freqError = null, adaptiveBias = 0.7) {
    const genes = individual.genes.slice();
    const numGenes = genes.length;

    // Step 1: Random number of genes to mutate
    const numMutate = Math.floor(Math.random() * numGenes) + 1;

    // Step 2: Select which genes to mutate
    const indices = Array.from({ length: numGenes }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const indicesToMutate = new Set(indices.slice(0, numMutate));

    // Determine if length adjustment gene is present
    const hasLengthAdjust = bounds.max_length_trim > 0 || bounds.max_length_extend > 0;
    const numCuts = hasLengthAdjust ? Math.floor((numGenes - 1) / 2) : Math.floor(numGenes / 2);
    const cutGenesCount = numCuts * 2;
    const lengthGeneIdx = cutGenesCount;

    // Step 3: Mutate selected genes
    for (const idx of indicesToMutate) {
        if (hasLengthAdjust && idx === lengthGeneIdx) {
            // This is the length adjustment gene - use adaptive mutation
            const rangeVal = bounds.max_length_trim + bounds.max_length_extend;

            if (freqError && Math.abs(freqError.f1Error) > 0.001) {
                // Use gradient-aware mutation for length gene
                // f1_error > 0 means f1 is too high, need to extend (negative length adjust)
                // f1_error < 0 means f1 is too low, need to trim (positive length adjust)
                const desiredDirection = freqError.f1Error < 0 ? 1 : -1;

                // Generate biased random value
                let r;
                if (Math.random() < adaptiveBias) {
                    // Biased: move in the desired direction
                    r = desiredDirection * Math.random();
                } else {
                    // Random exploration
                    r = Math.random() * 2 - 1;
                }

                genes[idx] += sigma * rangeVal * r;
            } else {
                // No frequency error info, use standard random mutation
                const r = Math.random() * 2 - 1;
                genes[idx] += sigma * rangeVal * r;
            }
        } else {
            // Cut genes: alternating lambda and h - standard random mutation
            const isLambda = idx % 2 === 0;
            const rangeVal = isLambda 
                ? (bounds.lambda_max - bounds.lambda_min) 
                : (bounds.h_max - bounds.h_min);

            const r = Math.random() * 2 - 1;
            genes[idx] += sigma * rangeVal * r;
        }
    }

    // Clamp to bounds
    const mutatedGenes = clampToBounds(genes, bounds);

    return new Individual(
        mutatedGenes,
        Infinity,
        individual.sigmas ? individual.sigmas.slice() : null
    );
}

/**
 * Self-adaptive Gaussian mutation from Eq. 17-18.
 * 
 * sigma_k^{t+1} = sigma_k^t * exp(tau1 * z1 + tau2 * z2)
 * c_k = p_k + sigma_k^{t+1} * z3
 * 
 * where:
 * - tau1 = 1 / sqrt(2 * sqrt(2n))
 * - tau2 = 1 / sqrt(4n)
 * - z1, z2, z3 are Gaussian random numbers with standard deviation phi
 * 
 * @param {Individual} individual - Individual to mutate (must have sigmas)
 * @param {number} phi - Base standard deviation for random numbers
 * @param {Object} bounds - Variable bounds
 * @returns {Individual} Mutated individual with updated sigmas
 */
export function gaussianSelfAdaptiveMutation(individual, phi, bounds) {
    const genes = individual.genes.slice();
    const numGenes = genes.length;
    const n = numGenes;

    // Initialize sigmas if not present
    const sigmas = individual.sigmas ? individual.sigmas.slice() : new Array(numGenes).fill(0.2);

    // Learning rates from Eq. 18
    const tau1 = 1.0 / Math.sqrt(2 * Math.sqrt(2 * n));
    const tau2 = 1.0 / Math.sqrt(4 * n);

    // Common random factor (same for all genes in this mutation)
    const z1 = gaussianRandom() * phi;

    // Determine if length adjustment gene is present
    const hasLengthAdjust = bounds.max_length_trim > 0 || bounds.max_length_extend > 0;
    const numCuts = hasLengthAdjust ? Math.floor((numGenes - 1) / 2) : Math.floor(numGenes / 2);
    const cutGenesCount = numCuts * 2;

    for (let k = 0; k < numGenes; k++) {
        // Gene-specific random factors
        const z2 = gaussianRandom() * phi;
        const z3 = gaussianRandom();

        // Update sigma (Eq. 17, first line)
        sigmas[k] = sigmas[k] * Math.exp(tau1 * z1 + tau2 * z2);

        // Clamp sigma to reasonable range
        sigmas[k] = Math.max(0.001, Math.min(1.0, sigmas[k]));

        // Mutate gene (Eq. 17, second line)
        let rangeVal;
        if (hasLengthAdjust && k === cutGenesCount) {
            rangeVal = bounds.max_length_trim + bounds.max_length_extend;
        } else {
            const isLambda = k % 2 === 0;
            rangeVal = isLambda 
                ? (bounds.lambda_max - bounds.lambda_min) 
                : (bounds.h_max - bounds.h_min);
        }

        genes[k] += sigmas[k] * rangeVal * z3;
    }

    // Clamp to bounds
    const mutatedGenes = clampToBounds(genes, bounds);

    return new Individual(mutatedGenes, Infinity, sigmas);
}

/**
 * Polynomial mutation.
 * Non-uniform mutation that can produce values close to parents or at bounds.
 * 
 * @param {Individual} individual - Individual to mutate
 * @param {number} mutationProb - Probability of mutating each gene
 * @param {number} eta - Distribution index (higher = closer to parent)
 * @param {Object} bounds - Variable bounds
 * @returns {Individual} Mutated individual
 */
export function polynomialMutation(individual, mutationProb, eta, bounds) {
    const genes = individual.genes.slice();
    const numGenes = genes.length;

    const hasLengthAdjust = bounds.max_length_trim > 0 || bounds.max_length_extend > 0;
    const numCuts = hasLengthAdjust ? Math.floor((numGenes - 1) / 2) : Math.floor(numGenes / 2);
    const cutGenesCount = numCuts * 2;

    for (let i = 0; i < numGenes; i++) {
        if (Math.random() > mutationProb) {
            continue;
        }

        let minVal, maxVal;
        if (hasLengthAdjust && i === cutGenesCount) {
            minVal = -bounds.max_length_extend;
            maxVal = bounds.max_length_trim;
        } else {
            const isLambda = i % 2 === 0;
            minVal = isLambda ? bounds.lambda_min : bounds.h_min;
            maxVal = isLambda ? bounds.lambda_max : bounds.h_max;
        }

        const x = genes[i];
        const delta1 = maxVal !== minVal ? (x - minVal) / (maxVal - minVal) : 0;
        const delta2 = maxVal !== minVal ? (maxVal - x) / (maxVal - minVal) : 0;

        const r = Math.random();
        let delta;

        if (r < 0.5) {
            const xy = 1 - delta1;
            const val = 2 * r + (1 - 2 * r) * Math.pow(xy, eta + 1);
            delta = Math.pow(val, 1 / (eta + 1)) - 1;
        } else {
            const xy = 1 - delta2;
            const val = 2 * (1 - r) + 2 * (r - 0.5) * Math.pow(xy, eta + 1);
            delta = 1 - Math.pow(val, 1 / (eta + 1));
        }

        genes[i] = x + delta * (maxVal - minVal);
    }

    return new Individual(
        clampToBounds(genes, bounds),
        Infinity,
        individual.sigmas ? individual.sigmas.slice() : null
    );
}

/**
 * Perform mutation on a set of individuals.
 * 
 * @param {Array<Individual>} individuals - Individuals to mutate
 * @param {Object} bounds - Variable bounds
 * @param {string} method - Mutation method ('uniform' or 'gaussian')
 * @param {number} sigma - Mutation strength (for uniform) or phi (for gaussian)
 * @returns {Array<Individual>} Mutated individuals
 */
export function performMutation(individuals, bounds, method = 'uniform', sigma = 0.1) {
    if (method === 'uniform') {
        return individuals.map(ind => uniformMutation(ind, sigma, bounds));
    } else {
        return individuals.map(ind => gaussianSelfAdaptiveMutation(ind, sigma, bounds));
    }
}

export default {
    FrequencyError,
    gaussianRandom,
    uniformMutation,
    adaptiveLengthMutation,
    gaussianSelfAdaptiveMutation,
    polynomialMutation,
    performMutation,
};
