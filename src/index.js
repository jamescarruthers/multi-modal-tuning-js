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

export const VERSION = '1.0.0';
