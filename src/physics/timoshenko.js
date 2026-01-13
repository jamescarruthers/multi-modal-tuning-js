/**
 * Timoshenko Beam Element Matrices
 * 
 * Implements Timoshenko beam element stiffness and mass matrices
 * for computing natural frequencies of undercut bars.
 * 
 * The Timoshenko beam model accounts for shear deformation, which is
 * important for thick bars used in percussion instruments.
 */

import { KAPPA } from '../data/materials.js';

/**
 * Compute Timoshenko beam element stiffness matrix (4x4).
 * DOFs: [w1, theta1, w2, theta2] - transverse displacement and rotation.
 * 
 * @param {number} le - Element length (m)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} I - Second moment of area (m^4)
 * @param {number} G - Shear modulus (Pa)
 * @param {number} A - Cross-sectional area (m^2)
 * @returns {Array<Array<number>>} 4x4 element stiffness matrix
 */
export function computeElementStiffness(le, E, I, G, A) {
    const phi = (12.0 * E * I) / (KAPPA * G * A * le * le);
    const denom = (1.0 + phi) * le * le * le;

    const k11 = (12.0 * E * I) / denom;
    const k12 = (6.0 * E * I * le) / denom;
    const k22 = ((4.0 + phi) * E * I * le * le) / denom;
    const k23 = ((2.0 - phi) * E * I * le * le) / denom;

    return [
        [k11, k12, -k11, k12],
        [k12, k22, -k12, k23],
        [-k11, -k12, k11, -k12],
        [k12, k23, -k12, k22],
    ];
}

/**
 * Compute Timoshenko beam element mass matrix (4x4).
 * Using consistent mass matrix formulation with rotary inertia.
 * 
 * @param {number} le - Element length (m)
 * @param {number} rho - Density (kg/m^3)
 * @param {number} A - Cross-sectional area (m^2)
 * @param {number} I - Second moment of area (m^4)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} G - Shear modulus (Pa)
 * @returns {Array<Array<number>>} 4x4 element mass matrix
 */
export function computeElementMass(le, rho, A, I, E, G) {
    const phi = (12.0 * E * I) / (KAPPA * G * A * le * le);
    const denom = (1.0 + phi) * (1.0 + phi);

    // Translational mass terms
    const m = rho * A * le;

    // Rotary inertia terms
    const r2 = I / A; // radius of gyration squared

    const c1 = (13.0 / 35.0 + 7.0 * phi / 10.0 + phi * phi / 3.0) / denom;
    const c2 = (9.0 / 70.0 + 3.0 * phi / 10.0 + phi * phi / 6.0) / denom;
    const c3 = ((11.0 / 210.0 + 11.0 * phi / 120.0 + phi * phi / 24.0) * le) / denom;
    const c4 = ((13.0 / 420.0 + 3.0 * phi / 40.0 + phi * phi / 24.0) * le) / denom;
    const c5 = ((1.0 / 105.0 + phi / 60.0 + phi * phi / 120.0) * le * le) / denom;
    const c6 = ((1.0 / 140.0 + phi / 60.0 + phi * phi / 120.0) * le * le) / denom;

    // Add rotary inertia contribution
    const r_scale = r2 / (le * le);
    const r1 = (6.0 / 5.0) / denom * r_scale;
    const r2_term = ((2.0 / 15.0 + phi / 6.0 + phi * phi / 3.0) * le * le) / denom * r_scale;
    const r3 = ((1.0 / 10.0 - phi / 2.0) * le) / denom * r_scale;
    const r4 = ((-1.0 / 30.0 - phi / 6.0 + phi * phi / 6.0) * le * le) / denom * r_scale;

    return [
        [m * (c1 + r1), m * (c3 + r3), m * (c2 - r1), m * (-c4 + r3)],
        [m * (c3 + r3), m * (c5 + r2_term), m * (c4 - r3), m * (-c6 + r4)],
        [m * (c2 - r1), m * (c4 - r3), m * (c1 + r1), m * (-c3 - r3)],
        [m * (-c4 + r3), m * (-c6 + r4), m * (-c3 - r3), m * (c5 + r2_term)],
    ];
}

export default {
    computeElementStiffness,
    computeElementMass,
};
