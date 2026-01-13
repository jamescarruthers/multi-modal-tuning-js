/**
 * Material properties for bar tuning optimization.
 * 
 * Contains properties for common metals and woods used in percussion instruments.
 */

import { Material } from '../types.js';

// Shear correction factor for rectangular cross-section
export const KAPPA = 5.0 / 6.0;

// Material database
export const MATERIALS = {
    // Metals commonly used in vibraphones, glockenspiels, metallophones
    aluminum: new Material(
        "Aluminum 6061",
        68.9e9,      // Pa
        2700,        // kg/m^3
        0.33,
        "metal"
    ),
    aluminum7075: new Material(
        "Aluminum 7075",
        71.7e9,
        2810,
        0.33,
        "metal"
    ),
    brass: new Material(
        "Brass C260",
        110e9,
        8530,
        0.35,
        "metal"
    ),
    steel: new Material(
        "Steel 1018",
        205e9,
        7870,
        0.29,
        "metal"
    ),
    stainless_steel: new Material(
        "Stainless Steel 304",
        193e9,
        8000,
        0.29,
        "metal"
    ),
    bronze: new Material(
        "Phosphor Bronze",
        110e9,
        8800,
        0.34,
        "metal"
    ),
    bell_bronze: new Material(
        "Bell Bronze (B20)",
        100e9,
        8600,
        0.34,
        "metal"
    ),

    // Premium tonewoods for marimbas/xylophones
    rosewood: new Material(
        "Honduran Rosewood",
        12.5e9,
        850,
        0.37,
        "wood"
    ),
    african_rosewood: new Material(
        "African Rosewood (Bubinga)",
        15.8e9,
        890,
        0.36,
        "wood"
    ),
    padauk: new Material(
        "African Padauk",
        11.7e9,
        750,
        0.35,
        "wood"
    ),
    sapele: new Material(
        "Sapele",
        12.0e9,
        640,
        0.35,
        "wood"
    ),
    bubinga: new Material(
        "Bubinga",
        15.8e9,
        890,
        0.36,
        "wood"
    ),

    // Other tonewoods
    maple: new Material(
        "Hard Maple",
        12.6e9,
        705,
        0.35,
        "wood"
    ),
    purpleheart: new Material(
        "Purpleheart",
        17.0e9,
        880,
        0.35,
        "wood"
    ),
    wenge: new Material(
        "Wenge",
        14.0e9,
        870,
        0.35,
        "wood"
    ),
    bocote: new Material(
        "Bocote",
        14.1e9,
        930,
        0.36,
        "wood"
    ),
    zebrawood: new Material(
        "Zebrawood",
        15.2e9,
        780,
        0.35,
        "wood"
    ),
    cocobolo: new Material(
        "Cocobolo",
        14.1e9,
        1100,
        0.36,
        "wood"
    ),
    ebony: new Material(
        "African Ebony",
        17.4e9,
        1050,
        0.38,
        "wood"
    ),
    teak: new Material(
        "Teak",
        12.3e9,
        630,
        0.35,
        "wood"
    ),

    // Synthetic alternatives
    fiberglass: new Material(
        "Fiberglass Composite",
        17.0e9,
        1800,
        0.30,
        "metal"  // grouped with metals for categorization
    ),
};

/**
 * Get material by key.
 */
export function getMaterial(key) {
    return MATERIALS[key] || null;
}

/**
 * Get all materials grouped by category.
 */
export function getMaterialsByCategory() {
    const metals = [];
    const woods = [];
    
    for (const [key, material] of Object.entries(MATERIALS)) {
        if (material.category === 'metal') {
            metals.push([key, material]);
        } else {
            woods.push([key, material]);
        }
    }
    
    return { metals, woods };
}

/**
 * Calculate shear modulus from Young's modulus and Poisson's ratio.
 */
export function calculateShearModulus(E, nu) {
    return E / (2 * (1 + nu));
}
