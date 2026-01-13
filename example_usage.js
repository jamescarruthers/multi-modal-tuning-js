/**
 * Example: Using the Multi-Modal Bar Tuning Library
 * 
 * This example demonstrates how to use the JavaScript library
 * for percussion bar design and frequency analysis.
 */

import {
    // Materials
    MATERIALS,
    getMaterial,
    getMaterialsByCategory,
    KAPPA,
    
    // Presets
    TUNING_PRESETS,
    getPreset,
    calculateTargetFrequencies,
    frequencyToCents,
    UNIFORM_BAR_RATIOS,
    
    // Note utilities
    noteToFrequency,
    frequencyToNote,
    noteToMidiNumber,
    generateNotesInRange,
    frequencyErrorCents,
    
    // Types
    Material,
    BarParameters,
    TuningPreset
} from './src/index.js';

console.log('═══════════════════════════════════════════════════');
console.log('  Multi-Modal Bar Tuning - JavaScript Library Demo');
console.log('═══════════════════════════════════════════════════\n');

// Example 1: Working with Materials
console.log('Example 1: Materials Database');
console.log('─────────────────────────────\n');

const rosewood = MATERIALS.rosewood;
console.log(`Material: ${rosewood.name}`);
console.log(`  Young's modulus: ${(rosewood.E / 1e9).toFixed(1)} GPa`);
console.log(`  Density: ${rosewood.rho} kg/m³`);
console.log(`  Poisson's ratio: ${rosewood.nu}`);
console.log(`  Category: ${rosewood.category}`);
console.log();

// List all materials by category
const { metals, woods } = getMaterialsByCategory();
console.log(`Available materials: ${metals.length} metals, ${woods.length} woods`);
console.log(`Metals: ${metals.map(([k, m]) => m.name.split(' ')[0]).join(', ')}`);
console.log(`Woods: ${woods.map(([k, m]) => m.name.split(' ')[0]).join(', ')}`);
console.log();

// Example 2: Tuning Presets
console.log('Example 2: Tuning Presets');
console.log('─────────────────────────\n');

const marimbaPreset = getPreset('1:4:10');
console.log(`Preset: ${marimbaPreset.name}`);
console.log(`Description: ${marimbaPreset.description}`);
console.log(`Instrument: ${marimbaPreset.instrument}`);
console.log(`Ratios: ${marimbaPreset.ratios.join(' : ')}`);
console.log();

// Calculate target frequencies for A3 (220 Hz)
const fundamental = 220.0; // A3
const targetFreqs = calculateTargetFrequencies(marimbaPreset.ratios, fundamental);
console.log(`Fundamental: ${fundamental} Hz (${frequencyToNote(fundamental)})`);
console.log('Target frequencies:');
targetFreqs.forEach((freq, i) => {
    const note = frequencyToNote(freq);
    const ratio = marimbaPreset.ratios[i];
    console.log(`  Mode ${i + 1} (${ratio}x): ${freq.toFixed(2)} Hz (${note})`);
});
console.log();

// Example 3: Note Conversions
console.log('Example 3: Note-Frequency Conversions');
console.log('──────────────────────────────────────\n');

const testNotes = ['C4', 'A4', 'C#5', 'Bb3'];
testNotes.forEach(note => {
    const freq = noteToFrequency(note);
    const midi = noteToMidiNumber(note);
    console.log(`${note.padEnd(4)} = ${freq.toFixed(2).padStart(7)} Hz  (MIDI ${midi})`);
});
console.log();

// Reverse conversion
const testFreqs = [261.63, 440.00, 523.25];
console.log('Frequency to Note:');
testFreqs.forEach(freq => {
    const note = frequencyToNote(freq);
    console.log(`${freq.toFixed(2).padStart(7)} Hz ≈ ${note}`);
});
console.log();

// Example 4: Generate Note Range
console.log('Example 4: Generate Note Range');
console.log('───────────────────────────────\n');

const chromaticRange = generateNotesInRange('C4', 'C5', 'chromatic');
console.log(`Chromatic scale C4-C5: ${chromaticRange.length} notes`);
console.log(`Notes: ${chromaticRange.slice(0, 13).map(n => n.name).join(', ')}`);
console.log();

const naturalRange = generateNotesInRange('C4', 'C5', 'natural');
console.log(`Natural scale C4-C5: ${naturalRange.length} notes (white keys only)`);
console.log(`Notes: ${naturalRange.map(n => n.name).join(', ')}`);
console.log();

// Example 5: Frequency Error Analysis
console.log('Example 5: Tuning Error Analysis');
console.log('─────────────────────────────────\n');

const tuningTests = [
    { computed: 440.0, target: 440.0 },
    { computed: 442.0, target: 440.0 },
    { computed: 438.0, target: 440.0 },
    { computed: 880.0, target: 440.0 },
];

tuningTests.forEach(({ computed, target }) => {
    const error = frequencyErrorCents(computed, target);
    const status = Math.abs(error) < 5 ? '✓ Excellent' : 
                   Math.abs(error) < 10 ? '⚠ Good' : '✗ Out of tune';
    const sign = error >= 0 ? '+' : '';
    console.log(`${computed} Hz vs ${target} Hz: ${sign}${error.toFixed(2)} cents ${status}`);
});
console.log();

// Example 6: Uniform Bar Natural Frequencies
console.log('Example 6: Uniform Bar Natural Frequencies');
console.log('───────────────────────────────────────────\n');

console.log('Natural frequency ratios for a free-free rectangular bar:');
UNIFORM_BAR_RATIOS.forEach((ratio, i) => {
    console.log(`  f${i + 1}/f₁ = ${ratio.toFixed(3)}`);
});
console.log('\nFor a 500mm rosewood bar (example):');
// Simplified formula for demonstration
const L = 0.5; // 500mm
const exampleF1 = 300; // Hz (approximate)
console.log(`  f₁ ≈ ${exampleF1} Hz`);
UNIFORM_BAR_RATIOS.forEach((ratio, i) => {
    const freq = exampleF1 * ratio;
    console.log(`  f${i + 1} ≈ ${freq.toFixed(1)} Hz (${frequencyToNote(freq)})`);
});
console.log();

// Example 7: Preset Comparison
console.log('Example 7: Comparing Tuning Presets');
console.log('────────────────────────────────────\n');

const presetsToCompare = ['1:4:10', '1:4:9', '1:3:6'];
const fundHz = 220;

console.log(`Fundamental: ${fundHz} Hz\n`);
presetsToCompare.forEach(presetName => {
    const preset = getPreset(presetName);
    const freqs = calculateTargetFrequencies(preset.ratios, fundHz);
    console.log(`${preset.name.padEnd(10)} (${preset.instrument}):`);
    console.log(`  ${freqs.map(f => f.toFixed(1) + ' Hz').join(', ')}`);
});
console.log();

// Example 8: Material Comparison
console.log('Example 8: Material Properties Comparison');
console.log('──────────────────────────────────────────\n');

const materialsToCompare = ['rosewood', 'aluminum', 'brass'];
console.log('Property comparison:');
console.log('Material'.padEnd(20) + 'E (GPa)'.padStart(10) + 'ρ (kg/m³)'.padStart(12) + 'Sound speed'.padStart(15));
console.log('─'.repeat(57));

materialsToCompare.forEach(key => {
    const mat = MATERIALS[key];
    // Sound speed: c = sqrt(E/rho)
    const soundSpeed = Math.sqrt(mat.E / mat.rho);
    console.log(
        mat.name.padEnd(20) + 
        (mat.E / 1e9).toFixed(1).padStart(10) + 
        mat.rho.toString().padStart(12) + 
        soundSpeed.toFixed(0).padStart(14) + ' m/s'
    );
});
console.log();

console.log('═══════════════════════════════════════════════════');
console.log('  Demo completed successfully!');
console.log('═══════════════════════════════════════════════════');
