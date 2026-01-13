/**
 * Bar Profile Generation
 * 
 * Implements the symmetric rectangular undercut model.
 * The undercut is defined by N cuts, each with a length (lambda) and height (h).
 * 
 * Key equations from paper:
 * - Profile H(x) defined by Eq. 3
 * - Quadratic interpolation for discontinuities (Eq. 6)
 */

import { Cut } from '../types.js';

/**
 * Compute the bar profile H(x) for a given x position.
 * Based on Eq. 3 from the paper.
 * 
 * The profile is symmetric about x = L/2 (center of bar).
 * Cuts are nested: lambda_1 > lambda_2 > ... > lambda_N > 0.
 * The innermost cut (smallest lambda) that contains the point determines the height.
 * 
 * @param {number} x - Position along bar (m), 0 <= x <= L
 * @param {Array<Cut>} cuts - Array of cuts (will be sorted internally)
 * @param {number} L - Bar length (m)
 * @param {number} h0 - Original bar height (m)
 * @returns {number} Height H(x) at position x
 */
export function computeHeight(x, cuts, L, h0) {
    // Distance from center
    const distFromCenter = Math.abs(x - L / 2);

    // Sort cuts by lambda descending (largest first = outermost)
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);

    // Find all cuts that contain this point, then return the innermost one's height
    const containingCuts = sortedCuts.filter(
        cut => cut.lambda_ > 0 && distFromCenter <= cut.lambda_
    );

    if (containingCuts.length === 0) {
        // Outside all cuts - return original height
        return h0;
    }

    // Return innermost (smallest lambda) containing cut
    return containingCuts[containingCuts.length - 1].h;
}

/**
 * Generate element heights for FEM discretization with quadratic interpolation
 * at discontinuities (Eq. 6 from paper).
 * 
 * The quadratic weighting: H_i = sqrt((h_{n-1}^2 * dx1 + h_n^2 * dx2) / (dx1 + dx2))
 * 
 * @param {Array<Cut>} cuts - Array of cuts
 * @param {number} L - Bar length (m)
 * @param {number} h0 - Original height (m)
 * @param {number} Ne - Number of finite elements
 * @returns {Array<number>} Array of element heights (length Ne)
 */
export function generateElementHeights(cuts, L, h0, Ne) {
    const Le = L / Ne; // Element length
    const heights = [];
    const centerX = L / 2;

    // Sort cuts by lambda (descending - largest/outermost first)
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);

    // Build list of discontinuity positions with heights on each side
    const discontinuities = [];

    for (const cut of sortedCuts) {
        if (cut.lambda_ <= 0) {
            continue;
        }

        const leftBoundary = centerX - cut.lambda_;
        const rightBoundary = centerX + cut.lambda_;

        // At left boundary: compute heights just before and after
        const hOutsideLeft = computeHeight(leftBoundary - 0.0001, sortedCuts, L, h0);
        const hInsideLeft = computeHeight(leftBoundary + 0.0001, sortedCuts, L, h0);
        if (Math.abs(hOutsideLeft - hInsideLeft) > 1e-9) {
            discontinuities.push({
                pos: leftBoundary,
                hBefore: hOutsideLeft,
                hAfter: hInsideLeft
            });
        }

        // At right boundary: compute heights just before and after
        const hInsideRight = computeHeight(rightBoundary - 0.0001, sortedCuts, L, h0);
        const hOutsideRight = computeHeight(rightBoundary + 0.0001, sortedCuts, L, h0);
        if (Math.abs(hInsideRight - hOutsideRight) > 1e-9) {
            discontinuities.push({
                pos: rightBoundary,
                hBefore: hInsideRight,
                hAfter: hOutsideRight
            });
        }
    }

    // Sort discontinuities by position
    discontinuities.sort((a, b) => a.pos - b.pos);

    // For each element, compute the appropriate height
    for (let i = 0; i < Ne; i++) {
        const xStart = i * Le;
        const xEnd = (i + 1) * Le;
        const xMid = (xStart + xEnd) / 2;

        // Check if element contains a discontinuity
        let foundDiscontinuity = false;
        for (const disc of discontinuities) {
            if (disc.pos > xStart && disc.pos < xEnd) {
                // Element contains a discontinuity - use quadratic interpolation (Eq. 6)
                const dx1 = disc.pos - xStart;
                const dx2 = xEnd - disc.pos;
                const h1 = disc.hBefore;
                const h2 = disc.hAfter;

                // Quadratic weighting from Eq. 6
                heights.push(Math.sqrt((h1 * h1 * dx1 + h2 * h2 * dx2) / (dx1 + dx2)));
                foundDiscontinuity = true;
                break;
            }
        }

        if (!foundDiscontinuity) {
            // No discontinuity in this element - use height at midpoint
            heights.push(computeHeight(xMid, sortedCuts, L, h0));
        }
    }

    return heights;
}

/**
 * Convert genes array to cuts array.
 * Genes format: [lambda_1, h_1, lambda_2, h_2, ..., length_adjust?]
 * Note: genes may have an optional trailing length_adjust value that should be ignored.
 * 
 * @param {Array<number>} genes - Flat array of optimization variables
 * @returns {Array<Cut>} Array of Cut objects
 */
export function genesToCuts(genes) {
    const cuts = [];
    // Process pairs of genes (lambda, h) - stop before incomplete pair
    let i = 0;
    while (i + 1 < genes.length) {
        const lambda_ = genes[i];
        const h = genes[i + 1];
        // Only add valid cuts
        if (typeof lambda_ === 'number' && typeof h === 'number') {
            if (!isNaN(lambda_) && !isNaN(h)) {
                cuts.push(new Cut(lambda_, h));
            }
        }
        i += 2;
    }

    // Sort by lambda descending (largest first)
    return cuts.sort((a, b) => b.lambda_ - a.lambda_);
}

/**
 * Convert cuts array to genes array.
 * Cuts are sorted by lambda (descending) before conversion.
 * 
 * @param {Array<Cut>} cuts - Array of Cut objects
 * @returns {Array<number>} Flat array of genes [lambda_1, h_1, lambda_2, h_2, ...]
 */
export function cutsToGenes(cuts) {
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);
    const genes = [];
    for (const cut of sortedCuts) {
        genes.push(cut.lambda_, cut.h);
    }
    return genes;
}

/**
 * Compute the effective number of cuts (ignoring cuts that are inside others).
 * If lambda_n >= lambda_{n-1}, the outer cut becomes inconsequential.
 * 
 * @param {Array<Cut>} cuts - Array of cuts
 * @returns {number} Number of effective cuts
 */
export function countEffectiveCuts(cuts) {
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);

    let effectiveCount = 0;
    let lastLambda = Infinity;

    for (const cut of sortedCuts) {
        if (cut.lambda_ < lastLambda && cut.lambda_ > 0) {
            effectiveCount += 1;
            lastLambda = cut.lambda_;
        }
    }

    return effectiveCount;
}

/**
 * Validate cuts are within bounds.
 * 
 * @param {Array<Cut>} cuts - Array of cuts
 * @param {Object} bar - Bar parameters with L, h0, hMin
 * @returns {Object} Object with valid (boolean) and message (string or null)
 */
export function validateCuts(cuts, bar) {
    for (let i = 0; i < cuts.length; i++) {
        const cut = cuts[i];
        if (cut.lambda_ < 0 || cut.lambda_ > bar.L / 2) {
            return { 
                valid: false, 
                message: `Cut ${i + 1} lambda (${cut.lambda_}) out of bounds [0, ${bar.L / 2}]` 
            };
        }

        if (cut.h < bar.hMin || cut.h > bar.h0) {
            return { 
                valid: false, 
                message: `Cut ${i + 1} height (${cut.h}) out of bounds [${bar.hMin}, ${bar.h0}]` 
            };
        }
    }

    return { valid: true, message: null };
}

/**
 * Generate adaptive 1D mesh with refinement at cut boundaries.
 * 
 * Uses finer elements near discontinuities (cut boundaries) and coarser
 * elements in uniform regions for better accuracy with fewer total elements.
 * 
 * @param {Array<Cut>} cuts - Array of cuts
 * @param {number} L - Bar length (m)
 * @param {number} h0 - Original height (m)
 * @param {number} baseElements - Number of elements if mesh were uniform (default: 60)
 * @param {number} refinementFactor - How many times finer the mesh is at boundaries (default: 4)
 * @param {number} transitionWidth - Width of transition zone as fraction of L (default: 0.02)
 * @returns {Object} Object with xPositions and elementHeights arrays
 */
export function generateAdaptiveMesh1d(
    cuts,
    L,
    h0,
    baseElements = 60,
    refinementFactor = 4,
    transitionWidth = 0.02
) {
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);
    const centerX = L / 2;

    // Find all discontinuity positions
    const discontinuities = [];
    for (const cut of sortedCuts) {
        if (cut.lambda_ <= 0) {
            continue;
        }
        const leftBoundary = centerX - cut.lambda_;
        const rightBoundary = centerX + cut.lambda_;
        discontinuities.push(leftBoundary);
        discontinuities.push(rightBoundary);
    }

    discontinuities.sort((a, b) => a - b);

    // Define refinement zones around each discontinuity
    const transitionDist = transitionWidth * L;

    const isNearDiscontinuity = (x) => {
        for (const disc of discontinuities) {
            if (Math.abs(x - disc) < transitionDist) {
                return true;
            }
        }
        return false;
    };

    // Generate adaptive element positions
    // Base element size
    const baseDx = L / baseElements;
    const fineDx = baseDx / refinementFactor;

    const xPositions = [0.0];
    let currentX = 0.0;

    while (currentX < L - 1e-10) {
        // Determine element size based on proximity to discontinuity
        let dx;
        if (isNearDiscontinuity(currentX) || isNearDiscontinuity(currentX + baseDx)) {
            dx = fineDx;
        } else {
            dx = baseDx;
        }

        // Don't overshoot the bar length
        if (currentX + dx > L) {
            dx = L - currentX;
        }

        currentX += dx;
        if (currentX <= L) {
            xPositions.push(currentX);
        }
    }

    // Ensure last position is exactly L
    if (Math.abs(xPositions[xPositions.length - 1] - L) > 1e-10) {
        xPositions[xPositions.length - 1] = L;
    }

    // Generate heights for each element
    const numElements = xPositions.length - 1;
    const elementHeights = [];

    for (let i = 0; i < numElements; i++) {
        const xStart = xPositions[i];
        const xEnd = xPositions[i + 1];
        const xMid = (xStart + xEnd) / 2;

        // Check if element contains a discontinuity
        let foundDiscontinuity = false;
        for (const discX of discontinuities) {
            if (discX > xStart && discX < xEnd) {
                // Element contains a discontinuity - use quadratic interpolation
                const dx1 = discX - xStart;
                const dx2 = xEnd - discX;
                const h1 = computeHeight(discX - 0.0001, sortedCuts, L, h0);
                const h2 = computeHeight(discX + 0.0001, sortedCuts, L, h0);

                // Quadratic weighting from Eq. 6
                elementHeights.push(Math.sqrt((h1 * h1 * dx1 + h2 * h2 * dx2) / (dx1 + dx2)));
                foundDiscontinuity = true;
                break;
            }
        }

        if (!foundDiscontinuity) {
            // No discontinuity - use height at midpoint
            elementHeights.push(computeHeight(xMid, sortedCuts, L, h0));
        }
    }

    return { xPositions, elementHeights };
}

/**
 * Mesh resolution warning.
 */
export class MeshResolutionWarning {
    constructor(featureType, featureSizeMm, elementSizeMm, ratio, message) {
        this.featureType = featureType; // 'cut_width', 'cut_spacing', 'boundary_region'
        this.featureSizeMm = featureSizeMm; // Size of the geometric feature in mm
        this.elementSizeMm = elementSizeMm; // Size of the mesh element in mm
        this.ratio = ratio; // element_size / feature_size (>1 means under-resolved)
        this.message = message;
    }
}

/**
 * Analyze whether mesh resolution is adequate for the cut geometry.
 * 
 * Checks if element sizes are small enough to accurately capture:
 * - Narrow cuts (small lambda values)
 * - Spacing between adjacent cut boundaries
 * - Sharp transitions at cut edges
 * 
 * @param {Array<Cut>} cuts - List of cuts
 * @param {number} L - Bar length (m)
 * @param {number} h0 - Original height (m)
 * @param {number} numElements - Number of elements for uniform mesh
 * @param {boolean} adaptive - Whether adaptive meshing is used (default: false)
 * @param {number} refinementFactor - Refinement factor for adaptive mesh (default: 4)
 * @param {number} transitionWidth - Transition width for adaptive mesh (default: 0.02)
 * @returns {Object} Object with warnings array and stats object
 */
export function analyzeMeshResolution(
    cuts,
    L,
    h0,
    numElements,
    adaptive = false,
    refinementFactor = 4,
    transitionWidth = 0.02
) {
    const warnings = [];
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);

    // Calculate element sizes
    const L_mm = L * 1000;
    const baseElementSizeMm = L_mm / numElements;

    let minElementSizeMm;
    if (adaptive) {
        const fineElementSizeMm = baseElementSizeMm / refinementFactor;
        minElementSizeMm = fineElementSizeMm;
    } else {
        minElementSizeMm = baseElementSizeMm;
    }

    // Collect all boundary positions (in mm from center)
    const boundariesMm = [];
    for (const cut of sortedCuts) {
        if (cut.lambda_ > 0) {
            boundariesMm.push(cut.lambda_ * 1000);
        }
    }

    boundariesMm.sort((a, b) => a - b);

    const stats = {
        numElements: numElements,
        baseElementSizeMm: baseElementSizeMm,
        minElementSizeMm: minElementSizeMm,
        adaptive: adaptive,
        numCuts: sortedCuts.filter(c => c.lambda_ > 0).length,
        boundariesMm: boundariesMm,
        smallestFeatureMm: Infinity,
        resolutionAdequate: true
    };

    if (boundariesMm.length === 0) {
        return { warnings, stats };
    }

    // Check 1: Smallest cut region (innermost cut width = 2 * smallest lambda)
    const smallestCutWidthMm = 2 * boundariesMm[0];
    stats.smallestFeatureMm = Math.min(stats.smallestFeatureMm, smallestCutWidthMm);

    if (smallestCutWidthMm < minElementSizeMm * 2) {
        const ratio = minElementSizeMm / (smallestCutWidthMm / 2);
        warnings.push(new MeshResolutionWarning(
            'cut_width',
            smallestCutWidthMm,
            minElementSizeMm,
            ratio,
            `Innermost cut region (${smallestCutWidthMm.toFixed(1)}mm wide) may be under-resolved. ` +
            `Element size ${minElementSizeMm.toFixed(1)}mm should be <${(smallestCutWidthMm / 2).toFixed(1)}mm for accuracy.`
        ));
        stats.resolutionAdequate = false;
    }

    // Check 2: Spacing between adjacent cut boundaries
    for (let i = 1; i < boundariesMm.length; i++) {
        const spacingMm = boundariesMm[i] - boundariesMm[i - 1];
        stats.smallestFeatureMm = Math.min(stats.smallestFeatureMm, spacingMm);

        if (spacingMm < minElementSizeMm * 2) {
            const ratio = minElementSizeMm / (spacingMm / 2);
            warnings.push(new MeshResolutionWarning(
                'cut_spacing',
                spacingMm,
                minElementSizeMm,
                ratio,
                `Cut boundary spacing (${spacingMm.toFixed(1)}mm) may be under-resolved. ` +
                `Element size ${minElementSizeMm.toFixed(1)}mm should be <${(spacingMm / 2).toFixed(1)}mm.`
            ));
            stats.resolutionAdequate = false;
        }
    }

    // Check 3: Recommend minimum elements based on geometry
    const minFeatureMm = stats.smallestFeatureMm;
    if (minFeatureMm < Infinity) {
        const recommendedElementSize = minFeatureMm / 3; // At least 3 elements per feature
        const recommendedNumElements = Math.ceil(L_mm / recommendedElementSize);

        stats.recommendedElementSizeMm = recommendedElementSize;
        stats.recommendedNumElements = recommendedNumElements;

        if (recommendedNumElements > numElements) {
            if (adaptive) {
                // For adaptive, recommend higher refinement
                const neededRefinement = Math.ceil(baseElementSizeMm / recommendedElementSize) + 1;
                stats.recommendedRefinement = neededRefinement;
            } else {
                stats.recommendedNumElements = recommendedNumElements;
            }
        }
    }

    return { warnings, stats };
}

/**
 * Quick check if mesh resolution is adequate. Returns boolean.
 * 
 * @param {Array<Cut>} cuts - List of cuts
 * @param {number} L - Bar length (m)
 * @param {number} numElements - Number of elements
 * @param {boolean} adaptive - Whether adaptive meshing is used (default: false)
 * @param {number} refinementFactor - Refinement factor for adaptive mesh (default: 4)
 * @param {boolean} verbose - Print warnings (default: true)
 * @returns {boolean} True if resolution is adequate, false if there are warnings
 */
export function checkMeshResolution(
    cuts,
    L,
    numElements,
    adaptive = false,
    refinementFactor = 4,
    verbose = true
) {
    const { warnings, stats } = analyzeMeshResolution(
        cuts, L, 0.024, // h0 doesn't matter for resolution check
        numElements, adaptive, refinementFactor
    );

    if (verbose && warnings.length > 0) {
        console.log('\n⚠️  Mesh Resolution Warnings:');
        for (const w of warnings) {
            console.log(`  - ${w.message}`);
        }

        if (stats.recommendedNumElements && !adaptive) {
            console.log(`\n  Recommendation: Use ${stats.recommendedNumElements} elements ` +
                `(currently ${numElements})`);
        } else if (stats.recommendedRefinement && adaptive) {
            console.log(`\n  Recommendation: Use refinement_factor=${stats.recommendedRefinement} ` +
                `(currently ${refinementFactor})`);
        }
        console.log();
    }

    return warnings.length === 0;
}

/**
 * Generate profile points for visualization.
 * Returns an array of (x, h) pairs representing the profile shape.
 * 
 * @param {Array<Cut>} cuts - Array of cuts
 * @param {number} L - Bar length (m)
 * @param {number} h0 - Original height (m)
 * @param {number} numPoints - Number of points for smooth visualization (default: 200)
 * @returns {Array<Array<number>>} Array of [x, h] coordinate pairs
 */
export function generateProfilePoints(cuts, L, h0, numPoints = 200) {
    const points = [];
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);

    // Generate points from left to right
    for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * L;
        const h = computeHeight(x, sortedCuts, L, h0);
        points.push([x, h]);
    }

    // Add extra points at discontinuities for crisp edges
    const extraPoints = [];
    for (const cut of sortedCuts) {
        const leftEdge = L / 2 - cut.lambda_;
        const rightEdge = L / 2 + cut.lambda_;

        const epsilon = L / 10000;

        if (0 < leftEdge && leftEdge < L) {
            extraPoints.push([leftEdge - epsilon, computeHeight(leftEdge - epsilon, sortedCuts, L, h0)]);
            extraPoints.push([leftEdge + epsilon, computeHeight(leftEdge + epsilon, sortedCuts, L, h0)]);
        }

        if (0 < rightEdge && rightEdge < L) {
            extraPoints.push([rightEdge - epsilon, computeHeight(rightEdge - epsilon, sortedCuts, L, h0)]);
            extraPoints.push([rightEdge + epsilon, computeHeight(rightEdge + epsilon, sortedCuts, L, h0)]);
        }
    }

    // Merge and sort all points by x
    const allPoints = [...points, ...extraPoints];
    allPoints.sort((a, b) => a[0] - b[0]);

    return allPoints;
}

export default {
    computeHeight,
    generateElementHeights,
    genesToCuts,
    cutsToGenes,
    countEffectiveCuts,
    validateCuts,
    generateAdaptiveMesh1d,
    MeshResolutionWarning,
    analyzeMeshResolution,
    checkMeshResolution,
    generateProfilePoints,
};
