# Multi-Modal Bar Tuning - JavaScript Port

A JavaScript library for designing and optimizing percussion instrument bars (marimbas, xylophones, vibraphones) to achieve precise harmonic tuning.

This is a port of the Python multi-modal bar tuning optimization library, providing tools for bar design, frequency analysis, and tuning optimization.

## Features

- 🎵 **Comprehensive Materials Database** - 19 materials including metals (aluminum, brass, steel) and premium tonewoods (rosewood, padauk, sapele)
- 🎹 **Tuning Presets** - Standard tuning ratios for various percussion instruments (marimba 1:4:10, xylophone 1:3:6, etc.)
- 🎼 **Note-Frequency Conversion** - Full musical note utilities with MIDI support
- 📊 **Frequency Analysis** - Calculate tuning errors in cents, analyze harmonic relationships
- 🔬 **FEM-based Analysis** - 3D finite element method for accurate frequency computation (partial port)

## Demo

🎵 **[Live Demo on GitHub Pages](https://jamescarruthers.github.io/multi-modal-tuning-js/)** - Try it now!

Alternatively, open `demo.html` or `index.html` locally in a web browser to see an interactive demonstration of the library features:

- **Materials Database** - Browse all available materials with their physical properties
- **Tuning Presets** - Explore standard tuning ratios and calculate target frequencies
- **Note Converter** - Convert between note names and frequencies, generate note ranges
- **Frequency Calculator** - Calculate tuning errors and analyze frequency relationships

## Quick Start

```javascript
import {
    MATERIALS,
    getPreset,
    calculateTargetFrequencies,
    noteToFrequency,
    frequencyErrorCents
} from './src/index.js';

// Get a material
const rosewood = MATERIALS.rosewood;
console.log(`${rosewood.name}: E=${rosewood.E/1e9} GPa, ρ=${rosewood.rho} kg/m³`);

// Calculate target frequencies for marimba tuning
const preset = getPreset('1:4:10');
const fundamental = 220; // A3
const targets = calculateTargetFrequencies(preset.ratios, fundamental);
console.log('Target frequencies:', targets); // [220, 880, 2200] Hz

// Convert note to frequency
const freq = noteToFrequency('A4');
console.log('A4 =', freq, 'Hz'); // 440 Hz

// Calculate tuning error
const computed = 442;
const target = 440;
const error = frequencyErrorCents(computed, target);
console.log('Error:', error, 'cents'); // +7.85 cents (sharp)
```

## Modules

### Core Types (`src/types.js`)
- `Material` - Material properties (E, ρ, ν)
- `BarParameters` - Bar geometry (L, b, h0, hMin)
- `Cut` - Rectangular cut definition
- `TuningPreset` - Tuning ratios for instruments
- `EAParameters` - Evolutionary algorithm parameters
- Other optimization types

### Data Modules (`src/data/`)
- `materials.js` - 19 materials database with physical properties
- `presets.js` - 10 tuning presets for percussion instruments

### Utilities (`src/utils/`)
- `noteUtils.js` - Note-frequency conversion, MIDI utilities, note range generation

### Physics Modules (`src/physics/`)
- `fem3d.js` - 3D finite element analysis (ported)
- Additional modules to be ported from Python

## Materials Database

### Metals
- Aluminum 6061 & 7075
- Brass C260
- Steel 1018 & Stainless Steel 304
- Bronze (Phosphor, Bell)
- Fiberglass Composite

### Tonewoods
- Premium: Rosewood (Honduran, African), Padauk, Sapele, Bubinga
- Other: Maple, Purpleheart, Wenge, Bocote, Zebrawood, Cocobolo, Ebony, Teak

## Tuning Presets

| Name | Ratios | Instrument | Description |
|------|--------|------------|-------------|
| 1:4:10 | 1 : 4 : 10 | Marimba | Standard triple tuning |
| 1:4:9 | 1 : 4 : 9 | Vibraphone | Alternative tuning |
| 1:3:6 | 1 : 3 : 6 | Xylophone | Xylophone tuning |
| 1:3:6:12 | 1 : 3 : 6 : 12 | Custom | Extended harmonic series |
| 1:2:4:8 | 1 : 2 : 4 : 8 | Custom | Octave series |
| 1:2.76:5.40 | 1 : 2.756 : 5.404 | Uniform Bar | Natural frequencies |

## Browser Compatibility

This library uses ES6 modules. Serve with a local HTTP server:

```bash
python3 -m http.server 8080
# Then open http://localhost:8080/demo.html
```

Or use any modern web server. All major browsers support ES6 modules.

## Port Status

### ✅ Completed
- Type definitions
- Materials database
- Tuning presets
- Note utilities (note-frequency conversion, MIDI, ranges)
- 3D FEM analysis module
- Interactive demo HTML

### 🚧 In Progress / To Do
- Bar profile generation
- Frequency computation utilities
- Timoshenko beam FEM
- FEM assembly
- Optimization algorithms (EA, crossover, mutation, selection)
- Bar length finder
- Visualization utilities

## Original Python Version

This is a port of the Python implementation. The original version includes:
- Full FEM analysis (2D Timoshenko beam + 3D solid elements)
- Evolutionary algorithm optimization
- Parallel processing support
- Visualization tools
- Complete example workflows

## References

Based on research in percussion bar tuning and finite element analysis for musical acoustics.

## License

See the original repository for license information.

## Contributing

This is a port in progress. Contributions welcome for:
- Completing the physics modules
- Porting optimization algorithms
- Adding visualization tools
- Improving documentation
- Performance optimization

---

**Note:** This JavaScript port is designed for educational and demonstration purposes. For production use, consider the original Python implementation which includes the complete optimization pipeline.
