/**
 * Crossover Operators for Evolutionary Algorithm
 * 
 * Implements heuristic crossover (Eq. 16 from paper)
 * and other crossover strategies.
 */

import { Individual } from '../types.js';
import { clampToBounds } from './population.js';

/**
 * Heuristic crossover from Eq. 16.
 * 
 * c1 = p1 + r * (p2 - p1)
 * c2 = p2 + r * (p1 - p2)
 * 
 * where r is uniform random [0, 1]
 * 
 * @param {Individual} parent1 - First parent
 * @param {Individual} parent2 - Second parent
 * @param {Object} bounds - Variable bounds for clamping
 * @returns {Array<Individual>} Two children [child1, child2]
 */
export function heuristicCrossover(parent1, parent2, bounds) {
    const numGenes = parent1.genes.length;
    const r = Math.random();

    const child1Genes = [];
    const child2Genes = [];

    for (let i = 0; i < numGenes; i++) {
        const p1 = parent1.genes[i];
        const p2 = parent2.genes[i];

        child1Genes.push(p1 + r * (p2 - p1));
        child2Genes.push(p2 + r * (p1 - p2));
    }

    // Clamp to bounds
    const clampedChild1 = clampToBounds(child1Genes, bounds);
    const clampedChild2 = clampToBounds(child2Genes, bounds);

    // Handle sigmas for self-adaptive mutation
    let child1Sigmas = null;
    let child2Sigmas = null;

    if (parent1.sigmas && parent2.sigmas) {
        child1Sigmas = parent1.sigmas.map((s1, i) => s1 + r * (parent2.sigmas[i] - s1));
        child2Sigmas = parent2.sigmas.map((s2, i) => s2 + r * (parent1.sigmas[i] - s2));
    }

    return [
        new Individual(clampedChild1, Infinity, child1Sigmas),
        new Individual(clampedChild2, Infinity, child2Sigmas)
    ];
}

/**
 * Single-point crossover.
 * Genes are swapped after a random crossover point.
 * 
 * @param {Individual} parent1 - First parent
 * @param {Individual} parent2 - Second parent
 * @param {Object} bounds - Variable bounds
 * @returns {Array<Individual>} Two children
 */
export function singlePointCrossover(parent1, parent2, bounds) {
    const numGenes = parent1.genes.length;
    const crossoverPoint = Math.floor(Math.random() * (numGenes - 1)) + 1;

    const child1Genes = [
        ...parent1.genes.slice(0, crossoverPoint),
        ...parent2.genes.slice(crossoverPoint)
    ];
    const child2Genes = [
        ...parent2.genes.slice(0, crossoverPoint),
        ...parent1.genes.slice(crossoverPoint)
    ];

    return [
        new Individual(clampToBounds(child1Genes, bounds), Infinity),
        new Individual(clampToBounds(child2Genes, bounds), Infinity)
    ];
}

/**
 * Two-point crossover.
 * Genes between two random points are swapped.
 * 
 * @param {Individual} parent1 - First parent
 * @param {Individual} parent2 - Second parent
 * @param {Object} bounds - Variable bounds
 * @returns {Array<Individual>} Two children
 */
export function twoPointCrossover(parent1, parent2, bounds) {
    const numGenes = parent1.genes.length;

    let point1 = Math.floor(Math.random() * numGenes);
    let point2 = Math.floor(Math.random() * numGenes);

    if (point1 > point2) {
        [point1, point2] = [point2, point1];
    }

    const child1Genes = [
        ...parent1.genes.slice(0, point1),
        ...parent2.genes.slice(point1, point2),
        ...parent1.genes.slice(point2)
    ];
    const child2Genes = [
        ...parent2.genes.slice(0, point1),
        ...parent1.genes.slice(point1, point2),
        ...parent2.genes.slice(point2)
    ];

    return [
        new Individual(clampToBounds(child1Genes, bounds), Infinity),
        new Individual(clampToBounds(child2Genes, bounds), Infinity)
    ];
}

/**
 * Uniform crossover.
 * Each gene is randomly chosen from either parent.
 * 
 * @param {Individual} parent1 - First parent
 * @param {Individual} parent2 - Second parent
 * @param {Object} bounds - Variable bounds
 * @param {number} mixingRatio - Probability of choosing from parent1 (default: 0.5)
 * @returns {Array<Individual>} Two children
 */
export function uniformCrossover(parent1, parent2, bounds, mixingRatio = 0.5) {
    const numGenes = parent1.genes.length;

    const child1Genes = [];
    const child2Genes = [];

    for (let i = 0; i < numGenes; i++) {
        if (Math.random() < mixingRatio) {
            child1Genes.push(parent1.genes[i]);
            child2Genes.push(parent2.genes[i]);
        } else {
            child1Genes.push(parent2.genes[i]);
            child2Genes.push(parent1.genes[i]);
        }
    }

    return [
        new Individual(clampToBounds(child1Genes, bounds), Infinity),
        new Individual(clampToBounds(child2Genes, bounds), Infinity)
    ];
}

/**
 * Blend crossover (BLX-alpha).
 * Children are generated in an extended range around parents.
 * 
 * @param {Individual} parent1 - First parent
 * @param {Individual} parent2 - Second parent
 * @param {Object} bounds - Variable bounds
 * @param {number} alpha - Extension parameter (default: 0.5)
 * @returns {Array<Individual>} Two children
 */
export function blendCrossover(parent1, parent2, bounds, alpha = 0.5) {
    const numGenes = parent1.genes.length;

    const child1Genes = [];
    const child2Genes = [];

    for (let i = 0; i < numGenes; i++) {
        const p1 = parent1.genes[i];
        const p2 = parent2.genes[i];

        const minVal = Math.min(p1, p2);
        const maxVal = Math.max(p1, p2);
        const rangeVal = maxVal - minVal;

        const extendedMin = minVal - alpha * rangeVal;
        const extendedMax = maxVal + alpha * rangeVal;

        child1Genes.push(extendedMin + Math.random() * (extendedMax - extendedMin));
        child2Genes.push(extendedMin + Math.random() * (extendedMax - extendedMin));
    }

    return [
        new Individual(clampToBounds(child1Genes, bounds), Infinity),
        new Individual(clampToBounds(child2Genes, bounds), Infinity)
    ];
}

/**
 * Perform crossover on multiple parent pairs.
 * 
 * @param {Array<Array<Individual>>} pairs - Array of parent pairs
 * @param {Object} bounds - Variable bounds
 * @param {string} method - Crossover method to use ('heuristic', 'single', 'two', 'uniform', 'blend')
 * @returns {Array<Individual>} Array of children
 */
export function performCrossover(pairs, bounds, method = 'heuristic') {
    const crossoverFn = {
        'heuristic': heuristicCrossover,
        'single': singlePointCrossover,
        'two': twoPointCrossover,
        'uniform': uniformCrossover,
        'blend': blendCrossover
    }[method];

    const children = [];

    for (const [parent1, parent2] of pairs) {
        const [child1, child2] = crossoverFn(parent1, parent2, bounds);
        children.push(child1, child2);
    }

    return children;
}

export default {
    heuristicCrossover,
    singlePointCrossover,
    twoPointCrossover,
    uniformCrossover,
    blendCrossover,
    performCrossover,
};
