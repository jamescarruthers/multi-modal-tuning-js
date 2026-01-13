/**
 * Selection Operators for Evolutionary Algorithm
 * 
 * Implements roulette wheel selection (Eq. 15 from paper)
 * and other selection strategies.
 */

import { Individual } from '../types.js';

/**
 * Roulette wheel selection (fitness proportional) from Eq. 15.
 * 
 * p_i = (1/e_i) / sum(1/e_j)
 * 
 * Lower fitness = higher probability of selection.
 * 
 * @param {Array<Individual>} population - Array of individuals with fitness values
 * @param {number} numSelections - Number of individuals to select
 * @returns {Array<Individual>} Selected individuals
 */
export function rouletteSelection(population, numSelections) {
    // Filter out individuals with invalid fitness
    const validPopulation = population.filter(
        ind => isFinite(ind.fitness) && ind.fitness > 0
    );

    if (validPopulation.length === 0) {
        // Fallback: return random selection from original population
        const selected = [];
        for (let i = 0; i < numSelections; i++) {
            selected.push(population[Math.floor(Math.random() * population.length)]);
        }
        return selected;
    }

    // Calculate selection probabilities (inverse of fitness)
    const inverseFitnesses = validPopulation.map(ind => 1.0 / ind.fitness);
    const sumInverse = inverseFitnesses.reduce((a, b) => a + b, 0);
    const probabilities = inverseFitnesses.map(inv => inv / sumInverse);

    // Calculate cumulative probabilities
    const cumulative = [];
    let cumSum = 0.0;
    for (const prob of probabilities) {
        cumSum += prob;
        cumulative.push(cumSum);
    }

    // Select individuals using roulette wheel
    const selected = [];
    for (let i = 0; i < numSelections; i++) {
        const r = Math.random();

        // Find the individual corresponding to this random number
        let selectedIndex = 0;
        for (let j = 0; j < cumulative.length; j++) {
            if (r <= cumulative[j]) {
                selectedIndex = j;
                break;
            }
        }

        selected.push(validPopulation[selectedIndex]);
    }

    return selected;
}

/**
 * Tournament selection.
 * Selects the best individual from a random subset of the population.
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @param {number} numSelections - Number of individuals to select
 * @param {number} tournamentSize - Size of each tournament (default: 3)
 * @returns {Array<Individual>} Selected individuals
 */
export function tournamentSelection(population, numSelections, tournamentSize = 3) {
    const selected = [];

    for (let i = 0; i < numSelections; i++) {
        // Pick random individuals for tournament
        const tournament = [];
        for (let j = 0; j < tournamentSize; j++) {
            tournament.push(population[Math.floor(Math.random() * population.length)]);
        }

        // Select the best from tournament
        const winner = tournament.reduce((best, current) =>
            current.fitness < best.fitness ? current : best
        );
        selected.push(winner);
    }

    return selected;
}

/**
 * Rank-based selection.
 * Selection probability based on rank rather than absolute fitness.
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @param {number} numSelections - Number of individuals to select
 * @param {number} selectionPressure - Higher values favor better individuals (1.0-2.0)
 * @returns {Array<Individual>} Selected individuals
 */
export function rankSelection(population, numSelections, selectionPressure = 1.5) {
    // Sort by fitness (ascending - best first)
    const sortedPop = [...population].sort((a, b) => a.fitness - b.fitness);
    const n = sortedPop.length;

    // Calculate rank-based probabilities
    const probabilities = [];
    for (let i = 0; i < n; i++) {
        const rank = i;
        const prob = (2 - selectionPressure) / n +
            2 * (selectionPressure - 1) * (n - 1 - rank) / (n * (n - 1));
        probabilities.push(prob);
    }

    // Normalize probabilities
    const sumProb = probabilities.reduce((a, b) => a + b, 0);
    const normalizedProbs = probabilities.map(p => p / sumProb);

    // Calculate cumulative probabilities
    const cumulative = [];
    let cumSum = 0.0;
    for (const prob of normalizedProbs) {
        cumSum += prob;
        cumulative.push(cumSum);
    }

    // Select individuals
    const selected = [];
    for (let i = 0; i < numSelections; i++) {
        const r = Math.random();
        let selectedIndex = 0;
        for (let j = 0; j < cumulative.length; j++) {
            if (r <= cumulative[j]) {
                selectedIndex = j;
                break;
            }
        }
        selected.push(sortedPop[selectedIndex]);
    }

    return selected;
}

/**
 * Select pairs for mating.
 * Ensures each pair contains two different individuals.
 * 
 * @param {Array<Individual>} population - Array of individuals
 * @param {number} numPairs - Number of pairs to select
 * @param {string} selectionMethod - Selection method to use ('roulette', 'tournament', 'rank')
 * @returns {Array<Array<Individual>>} Array of pairs [parent1, parent2]
 */
export function selectMatingPairs(population, numPairs, selectionMethod = 'roulette') {
    const pairs = [];

    const selectFn = {
        'roulette': rouletteSelection,
        'tournament': tournamentSelection,
        'rank': rankSelection
    }[selectionMethod];

    for (let i = 0; i < numPairs; i++) {
        // Select two parents
        const [parent1] = selectFn(population, 1);

        // Keep selecting second parent until it's different
        let parent2 = parent1;
        let attempts = 0;
        while (parent2 === parent1 && attempts < 10) {
            [parent2] = selectFn(population, 1);
            attempts++;
        }

        pairs.push([parent1, parent2]);
    }

    return pairs;
}

/**
 * Elitism: select the best individuals to pass unchanged to next generation.
 * 
 * @param {Array<Individual>} population - Current population
 * @param {number} numElite - Number of elite individuals
 * @returns {Array<Individual>} Array of elite individuals (cloned)
 */
export function selectElite(population, numElite) {
    const sortedPop = [...population].sort((a, b) => a.fitness - b.fitness);
    return sortedPop.slice(0, numElite).map(ind =>
        new Individual(
            ind.genes.slice(),
            ind.fitness,
            ind.sigmas ? ind.sigmas.slice() : null
        )
    );
}

export default {
    rouletteSelection,
    tournamentSelection,
    rankSelection,
    selectMatingPairs,
    selectElite,
};
