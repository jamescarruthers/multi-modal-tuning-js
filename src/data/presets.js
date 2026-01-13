/**
 * Tuning presets for common percussion instruments.
 * 
 * Contains standard tuning ratios for marimbas, vibraphones, xylophones, etc.
 */

import { TuningPreset } from '../types.js';

export const TUNING_PRESETS = [
    new TuningPreset(
        "1:2.76:5.40",
        [1, 2.756, 5.404],
        "Natural uniform bar frequencies (no tuning needed)",
        "Uniform Bar"
    ),
    new TuningPreset(
        "1:4:10",
        [1, 4, 10],
        "Standard marimba tuning (triple tuning)",
        "Marimba"
    ),
    new TuningPreset(
        "1:4:9",
        [1, 4, 9],
        "Alternative marimba/vibraphone tuning",
        "Vibraphone"
    ),
    new TuningPreset(
        "1:3:6",
        [1, 3, 6],
        "Xylophone tuning",
        "Xylophone"
    ),
    new TuningPreset(
        "1:3:6:12",
        [1, 3, 6, 12],
        "Extended harmonic series (quadruple tuning)",
        "Custom"
    ),
    new TuningPreset(
        "1:2:4:8",
        [1, 2, 4, 8],
        "Octave series (demanding)",
        "Custom"
    ),
    new TuningPreset(
        "1:2:4:8:16",
        [1, 2, 4, 8, 16],
        "Extended octave series (5 modes)",
        "Custom"
    ),
    new TuningPreset(
        "1:5:10:15",
        [1, 5, 10, 15],
        "Unorthodox quintal tuning",
        "Custom"
    ),
    new TuningPreset(
        "1:2:5:10",
        [1, 2, 5, 10],
        "Mixed interval tuning",
        "Custom"
    ),
    new TuningPreset(
        "1:3:5:7:9",
        [1, 3, 5, 7, 9],
        "Odd harmonic series",
        "Custom"
    ),
];

/**
 * Get preset by name.
 */
export function getPreset(name) {
    return TUNING_PRESETS.find(preset => preset.name === name) || null;
}

/**
 * Calculate target frequencies from preset and fundamental.
 */
export function calculateTargetFrequencies(ratios, fundamentalHz) {
    return ratios.map(r => r * fundamentalHz);
}

/**
 * Convert frequency ratio to cents deviation.
 * 1 cent = 1/100 of a semitone = 1/1200 of an octave.
 */
export function frequencyToCents(computed, target) {
    if (target <= 0 || computed <= 0) {
        return 0.0;
    }
    return 1200 * Math.log2(computed / target);
}

// Natural frequencies of a uniform rectangular bar (free-free)
// For reference: f_n = (beta_n)^2 / (2*pi*L^2) * sqrt(E*I / (rho*A))
// where beta_1 = 4.730, beta_2 = 7.853, beta_3 = 10.996, beta_4 = 14.137
export const UNIFORM_BAR_BETAS = [4.730041, 7.853205, 10.995608, 14.137165, 17.278760];

// Frequency ratios for uniform bar (relative to first mode)
// f_n / f_1 = (beta_n / beta_1)^2
export const UNIFORM_BAR_RATIOS = UNIFORM_BAR_BETAS.map(b => Math.pow(b / UNIFORM_BAR_BETAS[0], 2));
// Results: [1, 2.76, 5.40, 8.93, 13.34] approximately
