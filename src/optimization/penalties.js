/**
 * Geometric Penalties for Optimization
 * 
 * Implements volumetric and roughness penalties from the paper
 * to generate more manufacture-friendly geometries.
 */

/**
 * Compute the volumetric penalty (Eq. 10 from paper).
 * 
 * V = 100 * (2 / h0*L) * integral(h0 - H(x)) dx
 * 
 * This represents the percentage of volume extracted from the bar.
 * For rectangular cuts, this simplifies to sum of cut volumes.
 * 
 * @param {Array<Object>} cuts - Array of rectangular cuts with lambda_ and h
 * @param {number} L - Bar length (m)
 * @param {number} h0 - Original bar height (m)
 * @returns {number} Volume penalty as percentage (0-100)
 */
export function computeVolumePenalty(cuts, L, h0) {
    if (!cuts || cuts.length === 0) {
        return 0.0;
    }

    // Sort cuts by lambda (descending - largest first)
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);

    // Original volume (half bar, since symmetric)
    const halfBarVolume = (L / 2) * h0;

    // Calculate extracted volume from symmetric undercuts
    let extractedVolume = 0.0;
    let prevLambda = 0.0;

    // Process cuts from innermost (smallest lambda) to outermost (largest lambda)
    for (const cut of [...sortedCuts].reverse()) {
        if (cut.lambda_ > prevLambda && cut.lambda_ > 0) {
            // Width of this cut region
            const width = cut.lambda_ - prevLambda;

            // Height removed in this region
            const heightRemoved = h0 - cut.h;

            // Volume removed (just one side, will account for symmetry later)
            extractedVolume += width * heightRemoved;

            prevLambda = cut.lambda_;
        }
    }

    // Calculate percentage (divide by half-bar volume)
    const volumePercent = 100.0 * (extractedVolume / halfBarVolume);

    return Math.max(0.0, Math.min(100.0, volumePercent));
}

/**
 * Compute the roughness penalty (Eq. 12 from paper).
 * 
 * S = 100 * (1/N) * sum(|h_{n-1} - h_n| / h0)
 * 
 * This represents the average height change per discontinuity,
 * normalized to the original height.
 * 
 * @param {Array<Object>} cuts - Array of rectangular cuts
 * @param {number} h0 - Original bar height (m)
 * @returns {number} Roughness penalty as percentage
 */
export function computeRoughnessPenalty(cuts, h0) {
    if (!cuts || cuts.length === 0) {
        return 0.0;
    }

    // Sort cuts by lambda (descending - largest first)
    const sortedCuts = [...cuts].sort((a, b) => b.lambda_ - a.lambda_);

    // Calculate sum of height changes
    let sumHeightChanges = 0.0;
    let numDiscontinuities = 0;

    // First discontinuity: from h0 to first (outermost) cut
    if (sortedCuts.length > 0) {
        sumHeightChanges += Math.abs(h0 - sortedCuts[0].h);
        numDiscontinuities += 1;
    }

    // Discontinuities between consecutive cuts
    for (let i = 1; i < sortedCuts.length; i++) {
        // Only count if this cut is actually visible
        if (sortedCuts[i].lambda_ < sortedCuts[i - 1].lambda_) {
            sumHeightChanges += Math.abs(sortedCuts[i - 1].h - sortedCuts[i].h);
            numDiscontinuities += 1;
        }
    }

    if (numDiscontinuities === 0) {
        return 0.0;
    }

    // Calculate average roughness as percentage
    const roughnessPercent = 100.0 * (sumHeightChanges / (numDiscontinuities * h0));

    return roughnessPercent;
}

/**
 * Compute both penalties at once for efficiency.
 * 
 * @param {Array<Object>} cuts - Array of cuts
 * @param {number} L - Bar length (m)
 * @param {number} h0 - Original bar height (m)
 * @returns {Object} Object with volume and roughness penalties
 */
export function computeBothPenalties(cuts, L, h0) {
    return {
        volume: computeVolumePenalty(cuts, L, h0),
        roughness: computeRoughnessPenalty(cuts, h0)
    };
}

/**
 * Estimate the minimum volume needed to achieve a tuning target.
 * Based on empirical observations from the paper.
 * 
 * This is just a rough estimate - actual minimum depends on target ratio.
 * 
 * @param {Array<number>} targetRatios - Target frequency ratios
 * @param {number} numCuts - Number of cuts
 * @returns {number} Estimated minimum volume percentage
 */
export function estimateMinimumVolume(targetRatios, numCuts) {
    // Uniform bar ratios (approximately)
    const uniformRatios = [1, 2.76, 5.40, 8.93, 13.34];

    let deviationSum = 0.0;
    for (let i = 0; i < Math.min(targetRatios.length, uniformRatios.length); i++) {
        deviationSum += Math.abs(targetRatios[i] - uniformRatios[i]) / uniformRatios[i];
    }

    // Rough estimate: 5-50% volume based on deviation
    const baseVolume = 5.0;
    const deviationFactor = Math.min(deviationSum * 10, 45.0);

    return baseVolume + deviationFactor;
}

export default {
    computeVolumePenalty,
    computeRoughnessPenalty,
    computeBothPenalties,
    estimateMinimumVolume,
};
