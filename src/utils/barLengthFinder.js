/**
 * Bar Length Finder Utility
 * 
 * Uses binary search to find optimal bar length for a target fundamental frequency.
 * The physics relationship: f1 is proportional to h/L^2 for a uniform bar.
 * Longer bars -> lower frequencies, shorter bars -> higher frequencies.
 * 
 * Supports both 2D Timoshenko beam analysis (fast) and 3D solid element analysis (accurate).
 */

import { BarParameters, AnalysisMode } from '../types.js';
import { computeFrequenciesFromGenes } from '../physics/frequencies.js';
import { frequencyErrorCents } from './noteUtils.js';

/**
 * Result of binary search for optimal bar length.
 */
export class LengthSearchResult {
    constructor(config = {}) {
        this.length = config.length;           // Optimal length in mm
        this.computedFreq = config.computedFreq; // f1 at optimal length (Hz)
        this.iterations = config.iterations;     // Number of search iterations
        this.errorCents = config.errorCents;     // Error in cents
    }
}

/**
 * Result of finding optimal bar length for a note.
 */
export class BarLengthResult {
    constructor(config = {}) {
        this.noteName = config.noteName;
        this.noteFrequency = config.noteFrequency;
        this.noteMidiNumber = config.noteMidiNumber;
        this.targetFrequency = config.targetFrequency;
        this.optimalLength = config.optimalLength;       // mm
        this.computedFrequency = config.computedFrequency; // Hz
        this.errorCents = config.errorCents;
        this.searchIterations = config.searchIterations;
        this.selected = config.selected ?? false;
    }
}

/**
 * Compute f1 for a uniform bar (no cuts) at given length.
 * 
 * @param {number} length - Bar length in mm
 * @param {number} width - Bar width in mm
 * @param {number} thickness - Bar thickness in mm
 * @param {Object} material - Material properties
 * @param {number} numElements - Number of FEM elements (default: 80)
 * @param {string} analysisMode - BEAM_2D (fast) or SOLID_3D (accurate)
 * @param {number} ny - Number of elements in width direction (3D only)
 * @param {number} nz - Number of elements in thickness direction (3D only)
 * @returns {number} Fundamental frequency f1 in Hz
 */
export function computeF1ForUniformBar(
    length,
    width,
    thickness,
    material,
    numElements = 80,
    analysisMode = AnalysisMode.BEAM_2D,
    ny = 2,
    nz = 3
) {
    // Convert mm to meters for physics calculations
    const L_m = length / 1000;
    const b_m = width / 1000;
    const h0_m = thickness / 1000;

    const bar = new BarParameters(L_m, b_m, h0_m, h0_m / 10);

    // 2D Timoshenko beam analysis (default and fast)
    const genes = []; // Empty genes = uniform bar with no cuts

    const frequencies = computeFrequenciesFromGenes(
        genes,
        bar,
        material,
        1,              // Only need f1
        numElements,
        0               // 0 cuts
    );

    return frequencies.length > 0 ? frequencies[0] : 0.0;
}

/**
 * Progress update object for bar length finding.
 * @typedef {Object} LengthSearchProgress
 * @property {number} iteration - Current iteration number
 * @property {number} maxIterations - Maximum number of iterations
 * @property {number} currentLength - Current bar length being tested (mm)
 * @property {number} currentFrequency - Computed frequency at current length (Hz)
 * @property {number} errorCents - Frequency error in cents
 * @property {number} searchRange - Remaining search range (mm)
 */

/**
 * Find optimal bar length for a target frequency using binary search.
 * 
 * Uses the fact that f1 decreases monotonically with length:
 * - If computed f1 is too high, need a longer bar (search upper half)
 * - If computed f1 is too low, need a shorter bar (search lower half)
 * 
 * @param {number} targetFrequency - Target fundamental frequency in Hz
 * @param {number} width - Bar width in mm
 * @param {number} thickness - Bar thickness in mm
 * @param {Object} material - Material properties
 * @param {number} minLength - Minimum bar length to search (mm)
 * @param {number} maxLength - Maximum bar length to search (mm)
 * @param {number} toleranceCents - Stop search when within this tolerance (cents) (default: 1.0)
 * @param {number} maxIterations - Maximum search iterations (default: 50)
 * @param {number} numElements - Number of FEM elements (default: 80)
 * @param {string} analysisMode - BEAM_2D (fast) or SOLID_3D (accurate)
 * @param {number} frequencyOffset - Calibration offset (e.g., -0.05 to aim 5% lower)
 * @param {number} ny - Number of elements in width direction (3D only)
 * @param {number} nz - Number of elements in thickness direction (3D only)
 * @param {function(LengthSearchProgress): void} onProgress - Optional callback for progress updates
 * @returns {LengthSearchResult} Search result with optimal length and computed frequency
 */
export function findOptimalLength(
    targetFrequency,
    width,
    thickness,
    material,
    minLength,
    maxLength,
    toleranceCents = 1.0,
    maxIterations = 50,
    numElements = 80,
    analysisMode = AnalysisMode.BEAM_2D,
    frequencyOffset = 0.0,
    ny = 2,
    nz = 3,
    onProgress = null
) {
    // Apply frequency offset for calibration
    const effectiveTarget = targetFrequency * (1 + frequencyOffset);

    let low = minLength;
    let high = maxLength;
    let iterations = 0;
    let bestLength = (low + high) / 2;
    let bestFreq = 0.0;
    let bestError = Infinity;

    // Check bounds first
    const fAtMin = computeF1ForUniformBar(minLength, width, thickness, material, numElements, analysisMode, ny, nz);
    const fAtMax = computeF1ForUniformBar(maxLength, width, thickness, material, numElements, analysisMode, ny, nz);

    // f1 decreases with length, so f_at_min > f_at_max
    if (effectiveTarget >= fAtMin) {
        return new LengthSearchResult({
            length: minLength,
            computedFreq: fAtMin,
            iterations: 1,
            errorCents: frequencyErrorCents(fAtMin, targetFrequency)
        });
    }
    if (effectiveTarget <= fAtMax) {
        return new LengthSearchResult({
            length: maxLength,
            computedFreq: fAtMax,
            iterations: 1,
            errorCents: frequencyErrorCents(fAtMax, targetFrequency)
        });
    }

    // Binary search
    while (iterations < maxIterations && high - low > 0.01) { // 0.01mm precision
        iterations++;
        const mid = (low + high) / 2;
        const f1 = computeF1ForUniformBar(mid, width, thickness, material, numElements, analysisMode, ny, nz);

        // Error vs effective_target for search decisions
        const searchErrorCents = frequencyErrorCents(f1, effectiveTarget);
        // Error vs original target for reporting
        const reportErrorCents = frequencyErrorCents(f1, targetFrequency);

        if (Math.abs(reportErrorCents) < Math.abs(bestError)) {
            bestLength = mid;
            bestFreq = f1;
            bestError = reportErrorCents;
        }

        // Progress callback
        if (onProgress) {
            onProgress({
                iteration: iterations,
                maxIterations: maxIterations,
                currentLength: mid,
                currentFrequency: f1,
                errorCents: reportErrorCents,
                searchRange: high - low
            });
        }

        // Check if within tolerance (vs effective target for search)
        if (Math.abs(searchErrorCents) <= toleranceCents) {
            break;
        }

        // f1 decreases with length, so:
        // If computed f1 is too high, need longer bar -> search upper half
        // If computed f1 is too low, need shorter bar -> search lower half
        if (f1 > effectiveTarget) {
            low = mid; // Need longer bar (lower frequency)
        } else {
            high = mid; // Need shorter bar (higher frequency)
        }
    }

    return new LengthSearchResult({
        length: bestLength,
        computedFreq: bestFreq,
        iterations,
        errorCents: bestError
    });
}

/**
 * Find optimal lengths for all notes in a range.
 * 
 * @param {Array<Object>} notes - Array of notes to find lengths for (with name, frequency, midiNumber)
 * @param {number} width - Bar width in mm
 * @param {number} thickness - Bar thickness in mm
 * @param {Object} material - Material properties
 * @param {number} minLength - Minimum bar length to search (mm)
 * @param {number} maxLength - Maximum bar length to search (mm)
 * @param {number} toleranceCents - Acceptable frequency error in cents (default: 1.0)
 * @param {number} numElements - Number of FEM elements (default: 80)
 * @param {Function} onProgress - Callback for progress updates
 * @param {string} analysisMode - BEAM_2D (fast) or SOLID_3D (accurate)
 * @param {number} frequencyOffset - Calibration offset for 2D/3D calibration
 * @param {number} ny - Number of elements in width direction (3D only)
 * @param {number} nz - Number of elements in thickness direction (3D only)
 * @returns {Array<BarLengthResult>} Array of results for each note
 */
export function findLengthsForNotes(
    notes,
    width,
    thickness,
    material,
    minLength,
    maxLength,
    toleranceCents = 1.0,
    numElements = 80,
    onProgress = null,
    analysisMode = AnalysisMode.BEAM_2D,
    frequencyOffset = 0.0,
    ny = 2,
    nz = 3
) {
    const results = [];

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        if (onProgress) {
            onProgress(note.name, i, notes.length);
        }

        const result = findOptimalLength(
            note.frequency,
            width,
            thickness,
            material,
            minLength,
            maxLength,
            toleranceCents,
            50,
            numElements,
            analysisMode,
            frequencyOffset,
            ny,
            nz
        );

        results.push(new BarLengthResult({
            noteName: note.name,
            noteFrequency: note.frequency,
            noteMidiNumber: note.midiNumber,
            targetFrequency: note.frequency,
            optimalLength: result.length,
            computedFrequency: result.computedFreq,
            errorCents: result.errorCents,
            searchIterations: result.iterations,
            selected: false
        }));
    }

    return results;
}

/**
 * Estimate bar length from Euler-Bernoulli beam theory.
 * This is an approximation - actual frequency depends on exact boundary conditions
 * and Timoshenko corrections for thick bars.
 * 
 * f1 = (beta^2 / (2*pi)) * sqrt(E*I / (rho*A*L^4))
 * where beta ≈ 4.73 for first mode of free-free beam
 * 
 * Rearranging for L:
 * L = ((beta^2 / (2*pi*f1))^2 * E*I / (rho*A))^0.25
 * 
 * For rectangular cross-section: I = b*h^3/12, A = b*h
 * 
 * @param {number} targetFrequency - Target f1 in Hz
 * @param {number} width - Bar width in mm
 * @param {number} thickness - Bar thickness in mm
 * @param {Object} material - Material properties
 * @returns {number} Estimated bar length in mm
 */
export function estimateLengthFromTheory(targetFrequency, width, thickness, material) {
    const beta1 = 4.73004074; // First mode eigenvalue for free-free beam
    const E = material.E;     // Pa
    const rho = material.rho; // kg/m^3

    // Convert mm to m
    const b = width / 1000;
    const h = thickness / 1000;

    // Second moment of area for rectangular cross-section
    const I = (b * h * h * h) / 12; // m^4
    const A = b * h;                 // m^2

    // From Euler-Bernoulli: f = (beta^2 / (2*pi*L^2)) * sqrt(E*I / (rho*A))
    // Rearranging: L^2 = (beta^2 / (2*pi*f)) * sqrt(E*I / (rho*A))
    // L = sqrt((beta^2 / (2*pi*f)) * sqrt(E*I / (rho*A)))

    const factor = (beta1 * beta1) / (2 * Math.PI * targetFrequency);
    const stiffnessTerm = Math.sqrt((E * I) / (rho * A));
    const L = Math.sqrt(factor * stiffnessTerm);

    // Convert back to mm
    return L * 1000;
}

export default {
    LengthSearchResult,
    BarLengthResult,
    computeF1ForUniformBar,
    findOptimalLength,
    findLengthsForNotes,
    estimateLengthFromTheory,
};
