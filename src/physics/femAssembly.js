/**
 * Finite Element Assembly and Eigenvalue Solving
 * 
 * Implements global matrix assembly from element matrices and
 * generalized eigenvalue solving for natural frequencies.
 */

import { computeElementStiffness, computeElementMass } from './timoshenko.js';

/**
 * Assemble global stiffness and mass matrices from element matrices.
 * 
 * @param {Array<number>} elementHeights - Height of each element (m)
 * @param {number} le - Element length (m)
 * @param {number} b - Bar width (m)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} rho - Density (kg/m^3)
 * @param {number} nu - Poisson's ratio
 * @returns {Object} Object with K_global and M_global matrices
 */
export function assembleGlobalMatrices(elementHeights, le, b, E, rho, nu) {
    const Ne = elementHeights.length;
    const numDof = 2 * (Ne + 1);

    const K_global = Array.from({ length: numDof }, () => new Array(numDof).fill(0));
    const M_global = Array.from({ length: numDof }, () => new Array(numDof).fill(0));

    const G = E / (2.0 * (1.0 + nu)); // Shear modulus

    for (let e = 0; e < Ne; e++) {
        const h = elementHeights[e];
        const A = b * h; // Cross-sectional area
        const I = (b * h * h * h) / 12.0; // Second moment of area

        const Ke = computeElementStiffness(le, E, I, G, A);
        const Me = computeElementMass(le, rho, A, I, E, G);

        // DOF mapping: element DOFs [0,1,2,3] -> global DOFs [2e, 2e+1, 2e+2, 2e+3]
        const dofMap = [2 * e, 2 * e + 1, 2 * (e + 1), 2 * (e + 1) + 1];

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const gi = dofMap[i];
                const gj = dofMap[j];
                K_global[gi][gj] += Ke[i][j];
                M_global[gi][gj] += Me[i][j];
            }
        }
    }

    return { K_global, M_global };
}

/**
 * Perform Cholesky decomposition: A = L * L^T
 * 
 * @param {Array<Array<number>>} A - Symmetric positive definite matrix
 * @returns {Array<Array<number>>} Lower triangular matrix L
 */
function choleskyDecomposition(A) {
    const n = A.length;
    const L = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            let sum = 0;
            for (let k = 0; k < j; k++) {
                sum += L[i][k] * L[j][k];
            }

            if (i === j) {
                const val = A[i][i] - sum;
                if (val <= 0) {
                    throw new Error('Matrix is not positive definite');
                }
                L[i][j] = Math.sqrt(val);
            } else {
                L[i][j] = (A[i][j] - sum) / L[j][j];
            }
        }
    }

    return L;
}

/**
 * Solve triangular system Lx = b
 * 
 * @param {Array<Array<number>>} L - Lower triangular matrix
 * @param {Array<number>} b - Right-hand side vector
 * @returns {Array<number>} Solution vector x
 */
function forwardSubstitution(L, b) {
    const n = L.length;
    const x = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += L[i][j] * x[j];
        }
        x[i] = (b[i] - sum) / L[i][i];
    }

    return x;
}

/**
 * Solve triangular system L^T x = b
 * 
 * @param {Array<Array<number>>} L - Lower triangular matrix (we use its transpose)
 * @param {Array<number>} b - Right-hand side vector
 * @returns {Array<number>} Solution vector x
 */
function backwardSubstitution(L, b) {
    const n = L.length;
    const x = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
            sum += L[j][i] * x[j]; // L[j][i] = L^T[i][j]
        }
        x[i] = (b[i] - sum) / L[i][i];
    }

    return x;
}

/**
 * Compute L^{-1} from lower triangular L
 * 
 * @param {Array<Array<number>>} L - Lower triangular matrix
 * @returns {Array<Array<number>>} Inverse of L
 */
function invertLowerTriangular(L) {
    const n = L.length;
    const Linv = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        // Solve L * col_j = e_j
        const ej = new Array(n).fill(0);
        ej[j] = 1;
        const col = forwardSubstitution(L, ej);
        for (let i = 0; i < n; i++) {
            Linv[i][j] = col[i];
        }
    }

    return Linv;
}

/**
 * Matrix multiplication C = A * B
 * 
 * @param {Array<Array<number>>} A - First matrix
 * @param {Array<Array<number>>} B - Second matrix
 * @returns {Array<Array<number>>} Product matrix
 */
function matmul(A, B) {
    const m = A.length;
    const p = A[0].length;
    const n = B[0].length;

    const C = Array.from({ length: m }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < p; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

/**
 * Transpose a matrix
 * 
 * @param {Array<Array<number>>} A - Matrix to transpose
 * @returns {Array<Array<number>>} Transposed matrix
 */
function transpose(A) {
    const m = A.length;
    const n = A[0].length;
    const T = Array.from({ length: n }, () => new Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            T[j][i] = A[i][j];
        }
    }

    return T;
}

/**
 * Simple QR iteration for symmetric eigenvalue problem.
 * 
 * @param {Array<Array<number>>} A - Symmetric matrix
 * @param {number} maxIter - Maximum iterations (default: 100)
 * @param {number} tol - Convergence tolerance (default: 1e-10)
 * @returns {Array<number>} Eigenvalues (diagonal of converged matrix)
 */
function qrEigenvalues(A, maxIter = 100, tol = 1e-10) {
    const n = A.length;
    let Ak = A.map(row => row.slice());

    for (let iter = 0; iter < maxIter; iter++) {
        // Compute QR decomposition using Gram-Schmidt
        const Q = Array.from({ length: n }, () => new Array(n).fill(0));
        const R = Array.from({ length: n }, () => new Array(n).fill(0));

        // Gram-Schmidt orthogonalization
        for (let j = 0; j < n; j++) {
            // Get column j of Ak
            const v = new Array(n);
            for (let i = 0; i < n; i++) {
                v[i] = Ak[i][j];
            }

            // Subtract projections onto previous columns
            for (let k = 0; k < j; k++) {
                // R[k][j] = Q[:, k]^T * v
                let dot = 0;
                for (let i = 0; i < n; i++) {
                    dot += Q[i][k] * v[i];
                }
                R[k][j] = dot;

                // v = v - R[k][j] * Q[:, k]
                for (let i = 0; i < n; i++) {
                    v[i] -= R[k][j] * Q[i][k];
                }
            }

            // Normalize
            let norm = 0;
            for (let i = 0; i < n; i++) {
                norm += v[i] * v[i];
            }
            norm = Math.sqrt(norm);

            R[j][j] = norm;

            if (norm > 1e-14) {
                for (let i = 0; i < n; i++) {
                    Q[i][j] = v[i] / norm;
                }
            } else {
                // Linearly dependent, set arbitrary orthogonal vector
                Q[j][j] = 1;
            }
        }

        // A_{k+1} = R * Q
        Ak = matmul(R, Q);

        // Check convergence (off-diagonal elements small)
        let offDiag = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    offDiag += Math.abs(Ak[i][j]);
                }
            }
        }

        if (offDiag < tol * n * n) {
            break;
        }
    }

    // Extract eigenvalues from diagonal
    const eigenvalues = new Array(n);
    for (let i = 0; i < n; i++) {
        eigenvalues[i] = Ak[i][i];
    }

    return eigenvalues;
}

/**
 * Solve generalized eigenvalue problem K*phi = lambda*M*phi.
 * Uses the standard form transformation via Cholesky decomposition.
 * 
 * @param {Array<Array<number>>} K - Global stiffness matrix
 * @param {Array<Array<number>>} M - Global mass matrix
 * @param {number} numModes - Number of modes to extract
 * @returns {Array<number>} List of natural frequencies in Hz
 */
export function solveGeneralizedEigenvalue(K, M, numModes) {
    const n = K.length;

    // Add small regularization to M for numerical stability
    const M_reg = M.map(row => row.slice());
    for (let i = 0; i < n; i++) {
        M_reg[i][i] += 1e-12 * Math.max(Math.abs(M[i][i]), 1e-20);
    }

    let eigenvalues;

    try {
        // Compute Cholesky decomposition: M = L @ L.T
        const L = choleskyDecomposition(M_reg);

        // Compute L^{-1}
        const Linv = invertLowerTriangular(L);

        // K_tilde = L^{-1} @ K @ L^{-T}
        const LinvT = transpose(Linv);
        const temp = matmul(Linv, K);
        const K_tilde = matmul(temp, LinvT);

        // Symmetrize to remove numerical errors
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const avg = (K_tilde[i][j] + K_tilde[j][i]) / 2;
                K_tilde[i][j] = avg;
                K_tilde[j][i] = avg;
            }
        }

        // Solve standard symmetric eigenvalue problem
        eigenvalues = qrEigenvalues(K_tilde);

    } catch (e) {
        // Fallback: add more regularization
        for (let i = 0; i < n; i++) {
            M_reg[i][i] += 1e-8;
        }

        const L = choleskyDecomposition(M_reg);
        const Linv = invertLowerTriangular(L);
        const LinvT = transpose(Linv);
        const temp = matmul(Linv, K);
        const K_tilde = matmul(temp, LinvT);

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const avg = (K_tilde[i][j] + K_tilde[j][i]) / 2;
                K_tilde[i][j] = avg;
                K_tilde[j][i] = avg;
            }
        }

        eigenvalues = qrEigenvalues(K_tilde);
    }

    // Sort eigenvalues
    eigenvalues.sort((a, b) => a - b);

    // Filter out rigid body modes (very small or negative eigenvalues)
    // For a free-free beam, there are 2 rigid body modes with ~zero eigenvalues
    const threshold = 1.0; // omega^2 = 1 rad^2/s^2 -> f = 0.16 Hz
    const elasticModes = eigenvalues.filter(ev => ev > threshold);

    // Convert eigenvalues to frequencies: f = sqrt(lambda) / (2*pi)
    const frequencies = elasticModes.slice(0, numModes).map(ev =>
        Math.sqrt(ev) / (2.0 * Math.PI)
    );

    return frequencies;
}

export default {
    assembleGlobalMatrices,
    solveGeneralizedEigenvalue,
};
