/**
 * 3D Finite Element Analysis for Bar Vibration
 * 
 * Implements 3D solid element (8-node hexahedral) formulation for
 * more accurate frequency analysis of undercut bars.
 * 
 * This provides higher accuracy than the 2D Timoshenko beam model,
 * especially for complex undercut geometries and wide bars where
 * 3D effects become significant.
 */

import { Matrix, inverse as matrixInverse } from 'ml-matrix';
import { LilMatrix as lil_matrix } from '../../reference/lil_matrix.js';
import { CsrMatrix as csr_matrix } from '../../reference/csr_matrix.js';
import { eigsh } from '../../reference/sparse_linalg.js';

/**
 * Return 2x2x2 Gauss quadrature points and weights for hexahedral element.
 * 
 * @returns {Object} Object with points (8x3 array) and weights (8-element array)
 */
export function gauss_points_3d() {
    const g = 1.0 / Math.sqrt(3.0);
    const points = [
        [-g, -g, -g],
        [+g, -g, -g],
        [+g, +g, -g],
        [-g, +g, -g],
        [-g, -g, +g],
        [+g, -g, +g],
        [+g, +g, +g],
        [-g, +g, +g],
    ];
    const weights = new Array(8).fill(1.0);
    return { points, weights };
}

/**
 * Compute shape functions for 8-node hexahedral element.
 * 
 * Node numbering (natural coordinates):
 *     Node 0: (-1, -1, -1)
 *     Node 1: (+1, -1, -1)
 *     Node 2: (+1, +1, -1)
 *     Node 3: (-1, +1, -1)
 *     Node 4: (-1, -1, +1)
 *     Node 5: (+1, -1, +1)
 *     Node 6: (+1, +1, +1)
 *     Node 7: (-1, +1, +1)
 * 
 * @param {number} xi - Natural coordinate (-1 to +1)
 * @param {number} eta - Natural coordinate (-1 to +1)
 * @param {number} zeta - Natural coordinate (-1 to +1)
 * @returns {Array<number>} Array of 8 shape function values
 */
export function shape_functions_hex8(xi, eta, zeta) {
    return [
        0.125 * (1 - xi) * (1 - eta) * (1 - zeta),
        0.125 * (1 + xi) * (1 - eta) * (1 - zeta),
        0.125 * (1 + xi) * (1 + eta) * (1 - zeta),
        0.125 * (1 - xi) * (1 + eta) * (1 - zeta),
        0.125 * (1 - xi) * (1 - eta) * (1 + zeta),
        0.125 * (1 + xi) * (1 - eta) * (1 + zeta),
        0.125 * (1 + xi) * (1 + eta) * (1 + zeta),
        0.125 * (1 - xi) * (1 + eta) * (1 + zeta),
    ];
}

/**
 * Compute shape function derivatives w.r.t. natural coordinates.
 * 
 * @param {number} xi - Natural coordinate
 * @param {number} eta - Natural coordinate
 * @param {number} zeta - Natural coordinate
 * @returns {Array<Array<number>>} (3x8) array of derivatives [dN/dxi, dN/deta, dN/dzeta]
 */
export function shape_function_derivatives_hex8(xi, eta, zeta) {
    const dN = Array.from({ length: 3 }, () => new Array(8).fill(0));

    // dN/dxi
    dN[0][0] = -0.125 * (1 - eta) * (1 - zeta);
    dN[0][1] = +0.125 * (1 - eta) * (1 - zeta);
    dN[0][2] = +0.125 * (1 + eta) * (1 - zeta);
    dN[0][3] = -0.125 * (1 + eta) * (1 - zeta);
    dN[0][4] = -0.125 * (1 - eta) * (1 + zeta);
    dN[0][5] = +0.125 * (1 - eta) * (1 + zeta);
    dN[0][6] = +0.125 * (1 + eta) * (1 + zeta);
    dN[0][7] = -0.125 * (1 + eta) * (1 + zeta);

    // dN/deta
    dN[1][0] = -0.125 * (1 - xi) * (1 - zeta);
    dN[1][1] = -0.125 * (1 + xi) * (1 - zeta);
    dN[1][2] = +0.125 * (1 + xi) * (1 - zeta);
    dN[1][3] = +0.125 * (1 - xi) * (1 - zeta);
    dN[1][4] = -0.125 * (1 - xi) * (1 + zeta);
    dN[1][5] = -0.125 * (1 + xi) * (1 + zeta);
    dN[1][6] = +0.125 * (1 + xi) * (1 + zeta);
    dN[1][7] = +0.125 * (1 - xi) * (1 + zeta);

    // dN/dzeta
    dN[2][0] = -0.125 * (1 - xi) * (1 - eta);
    dN[2][1] = -0.125 * (1 + xi) * (1 - eta);
    dN[2][2] = -0.125 * (1 + xi) * (1 + eta);
    dN[2][3] = -0.125 * (1 - xi) * (1 + eta);
    dN[2][4] = +0.125 * (1 - xi) * (1 - eta);
    dN[2][5] = +0.125 * (1 + xi) * (1 - eta);
    dN[2][6] = +0.125 * (1 + xi) * (1 + eta);
    dN[2][7] = +0.125 * (1 - xi) * (1 + eta);

    return dN;
}

/**
 * Compute 3D elasticity matrix (6x6) for isotropic material.
 * 
 * @param {number} E - Young's modulus (Pa)
 * @param {number} nu - Poisson's ratio
 * @returns {Array<Array<number>>} 6x6 elasticity matrix [sigma] = [D][epsilon]
 *     Stress/strain order: [xx, yy, zz, xy, yz, xz]
 */
export function elasticity_matrix_3d(E, nu) {
    const factor = E / ((1 + nu) * (1 - 2 * nu));
    const D = Array.from({ length: 6 }, () => new Array(6).fill(0));

    // Normal stress-strain
    D[0][0] = D[1][1] = D[2][2] = factor * (1 - nu);
    D[0][1] = D[1][0] = factor * nu;
    D[0][2] = D[2][0] = factor * nu;
    D[1][2] = D[2][1] = factor * nu;

    // Shear stress-strain
    D[3][3] = D[4][4] = D[5][5] = factor * (1 - 2 * nu) / 2;

    return D;
}

/**
 * Compute element stiffness and mass matrices for 8-node hexahedral.
 * 
 * @param {Array<Array<number>>} node_coords - (8x3) array of node coordinates
 * @param {number} E - Young's modulus (Pa)
 * @param {number} nu - Poisson's ratio
 * @param {number} rho - Density (kg/m^3)
 * @returns {Object} Object with Ke and Me - 24x24 stiffness and mass matrices
 */
export function compute_hex8_matrices(node_coords, E, nu, rho) {
    const D = elasticity_matrix_3d(E, nu);

    const Ke = Array.from({ length: 24 }, () => new Array(24).fill(0));
    const Me = Array.from({ length: 24 }, () => new Array(24).fill(0));

    const { points: gauss_pts, weights: gauss_wts } = gauss_points_3d();

    for (let gp = 0; gp < 8; gp++) {
        const [xi, eta, zeta] = gauss_pts[gp];
        const w = gauss_wts[gp];

        // Shape functions and derivatives
        const N = shape_functions_hex8(xi, eta, zeta);
        const dN_nat = shape_function_derivatives_hex8(xi, eta, zeta);

        // Jacobian matrix: J = dN/d(xi,eta,zeta) @ coords
        // J is 3x3
        const J = Array.from({ length: 3 }, () => new Array(3).fill(0));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 8; k++) {
                    J[i][j] += dN_nat[i][k] * node_coords[k][j];
                }
            }
        }

        const J_matrix = new Matrix(J);
        const detJ = J_matrix.det();

        if (detJ <= 0) {
            // Degenerate element, skip
            continue;
        }

        const J_inv = matrixInverse(J_matrix).to2DArray();

        // Shape function derivatives w.r.t. physical coordinates
        // dN_phys = J_inv @ dN_nat (3x8)
        const dN_phys = Array.from({ length: 3 }, () => new Array(8).fill(0));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 8; j++) {
                for (let k = 0; k < 3; k++) {
                    dN_phys[i][j] += J_inv[i][k] * dN_nat[k][j];
                }
            }
        }

        // Build strain-displacement matrix B (6x24)
        const B = Array.from({ length: 6 }, () => new Array(24).fill(0));
        for (let i = 0; i < 8; i++) {
            const col = 3 * i;
            const dNdx = dN_phys[0][i];
            const dNdy = dN_phys[1][i];
            const dNdz = dN_phys[2][i];

            // epsilon_xx = du/dx
            B[0][col] = dNdx;
            // epsilon_yy = dv/dy
            B[1][col + 1] = dNdy;
            // epsilon_zz = dw/dz
            B[2][col + 2] = dNdz;
            // gamma_xy = du/dy + dv/dx
            B[3][col] = dNdy;
            B[3][col + 1] = dNdx;
            // gamma_yz = dv/dz + dw/dy
            B[4][col + 1] = dNdz;
            B[4][col + 2] = dNdy;
            // gamma_xz = du/dz + dw/dx
            B[5][col] = dNdz;
            B[5][col + 2] = dNdx;
        }

        // Stiffness contribution: Ke += w * detJ * (B.T @ D @ B)
        // First compute D @ B (6x24)
        const DB = Array.from({ length: 6 }, () => new Array(24).fill(0));
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 24; j++) {
                for (let k = 0; k < 6; k++) {
                    DB[i][j] += D[i][k] * B[k][j];
                }
            }
        }

        // Then compute B.T @ DB (24x24)
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 24; j++) {
                for (let k = 0; k < 6; k++) {
                    Ke[i][j] += w * detJ * B[k][i] * DB[k][j];
                }
            }
        }

        // Mass matrix - build N matrix (3x24)
        const N_mat = Array.from({ length: 3 }, () => new Array(24).fill(0));
        for (let i = 0; i < 8; i++) {
            const col = 3 * i;
            N_mat[0][col] = N[i];
            N_mat[1][col + 1] = N[i];
            N_mat[2][col + 2] = N[i];
        }

        // Me += w * detJ * rho * (N_mat.T @ N_mat) (24x24)
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 24; j++) {
                for (let k = 0; k < 3; k++) {
                    Me[i][j] += w * detJ * rho * N_mat[k][i] * N_mat[k][j];
                }
            }
        }
    }

    return { Ke, Me };
}

/**
 * Generate 3D mesh for an undercut bar.
 * 
 * The bar is oriented with:
 * - X axis along length
 * - Y axis along width
 * - Z axis along height (thickness)
 * 
 * The undercut is symmetric about the center (x = L/2).
 * 
 * @param {number} length - Bar length (m)
 * @param {number} width - Bar width (m)
 * @param {Array<number>} element_heights - Height at each x-position (from 2D discretization)
 * @param {number} nx - Number of elements in x-direction (should match len(element_heights))
 * @param {number} ny - Number of elements in y-direction (default: 2)
 * @param {number} nz - Number of elements in z-direction (default: 2)
 * @returns {Object} Object with nodes, elements, and heights_per_element
 */
export function generate_bar_mesh_3d(length, width, element_heights, nx, ny = 2, nz = 2) {
    // Ensure nx matches element_heights
    nx = element_heights.length;

    // Element sizes
    const dx = length / nx;
    const dy = width / ny;

    // Node grid dimensions
    const nnx = nx + 1;
    const nny = ny + 1;
    const nnz = nz + 1;

    const nodes_list = [];
    const node_index = {}; // (ix, iy, iz) -> node index

    // Generate nodes - the z coordinates vary based on the undercut profile
    for (let ix = 0; ix < nnx; ix++) {
        const x = ix * dx;

        // Determine height at this x position
        let h;
        if (ix === 0) {
            h = element_heights[0];
        } else if (ix === nx) {
            h = element_heights[element_heights.length - 1];
        } else {
            // Average of adjacent elements
            h = (element_heights[ix - 1] + element_heights[ix]) / 2;
        }

        const dz = h / nz;

        for (let iy = 0; iy < nny; iy++) {
            const y = iy * dy;

            for (let iz = 0; iz < nnz; iz++) {
                // z goes from 0 to h (undercut is from bottom)
                const z = iz * dz;

                const node_idx = nodes_list.length;
                node_index[`${ix},${iy},${iz}`] = node_idx;
                nodes_list.push([x, y, z]);
            }
        }
    }

    const nodes = nodes_list;

    // Generate elements
    const elements_list = [];
    const heights_list = [];

    for (let ix = 0; ix < nx; ix++) {
        const h = element_heights[ix];

        for (let iy = 0; iy < ny; iy++) {
            for (let iz = 0; iz < nz; iz++) {
                // 8 nodes of hexahedron (following standard numbering)
                const n0 = node_index[`${ix},${iy},${iz}`];
                const n1 = node_index[`${ix + 1},${iy},${iz}`];
                const n2 = node_index[`${ix + 1},${iy + 1},${iz}`];
                const n3 = node_index[`${ix},${iy + 1},${iz}`];
                const n4 = node_index[`${ix},${iy},${iz + 1}`];
                const n5 = node_index[`${ix + 1},${iy},${iz + 1}`];
                const n6 = node_index[`${ix + 1},${iy + 1},${iz + 1}`];
                const n7 = node_index[`${ix},${iy + 1},${iz + 1}`];

                elements_list.push([n0, n1, n2, n3, n4, n5, n6, n7]);
                heights_list.push(h);
            }
        }
    }

    const elements = elements_list;
    const heights_per_element = heights_list;

    return { nodes, elements, heights_per_element };
}

/**
 * Generate 3D mesh for an undercut bar with adaptive x-spacing.
 * 
 * Unlike generate_bar_mesh_3d which uses uniform spacing, this function
 * accepts pre-computed x-positions allowing for refined mesh at cut boundaries.
 * 
 * @param {number} length - Bar length (m)
 * @param {number} width - Bar width (m)
 * @param {Array<number>} x_positions - X coordinates of element boundaries (length nx+1)
 * @param {Array<number>} element_heights - Height at each x-element (length nx)
 * @param {number} ny - Number of elements in y-direction (default: 2)
 * @param {number} nz - Number of elements in z-direction (default: 2)
 * @returns {Object} Object with nodes, elements, and heights_per_element
 */
export function generate_bar_mesh_3d_adaptive(length, width, x_positions, element_heights, ny = 2, nz = 2) {
    const nx = element_heights.length;
    if (x_positions.length !== nx + 1) {
        throw new Error('x_positions must have length len(element_heights) + 1');
    }

    const dy = width / ny;

    // Node grid dimensions
    const nnx = nx + 1;
    const nny = ny + 1;
    const nnz = nz + 1;

    const nodes_list = [];
    const node_index = {}; // (ix, iy, iz) -> node index

    // Generate nodes - x coordinates from x_positions, z varies based on height
    for (let ix = 0; ix < nnx; ix++) {
        const x = x_positions[ix];

        // Determine height at this x position
        let h;
        if (ix === 0) {
            h = element_heights[0];
        } else if (ix === nx) {
            h = element_heights[element_heights.length - 1];
        } else {
            // Average of adjacent elements
            h = (element_heights[ix - 1] + element_heights[ix]) / 2;
        }

        const dz = h / nz;

        for (let iy = 0; iy < nny; iy++) {
            const y = iy * dy;

            for (let iz = 0; iz < nnz; iz++) {
                const z = iz * dz;

                const node_idx = nodes_list.length;
                node_index[`${ix},${iy},${iz}`] = node_idx;
                nodes_list.push([x, y, z]);
            }
        }
    }

    const nodes = nodes_list;

    // Generate elements
    const elements_list = [];
    const heights_list = [];

    for (let ix = 0; ix < nx; ix++) {
        const h = element_heights[ix];

        for (let iy = 0; iy < ny; iy++) {
            for (let iz = 0; iz < nz; iz++) {
                // 8 nodes of hexahedron
                const n0 = node_index[`${ix},${iy},${iz}`];
                const n1 = node_index[`${ix + 1},${iy},${iz}`];
                const n2 = node_index[`${ix + 1},${iy + 1},${iz}`];
                const n3 = node_index[`${ix},${iy + 1},${iz}`];
                const n4 = node_index[`${ix},${iy},${iz + 1}`];
                const n5 = node_index[`${ix + 1},${iy},${iz + 1}`];
                const n6 = node_index[`${ix + 1},${iy + 1},${iz + 1}`];
                const n7 = node_index[`${ix},${iy + 1},${iz + 1}`];

                elements_list.push([n0, n1, n2, n3, n4, n5, n6, n7]);
                heights_list.push(h);
            }
        }
    }

    const elements = elements_list;
    const heights_per_element = heights_list;

    return { nodes, elements, heights_per_element };
}

/**
 * Assemble global stiffness and mass matrices from 3D mesh.
 * 
 * @param {Array<Array<number>>} nodes - (num_nodes x 3) array of node coordinates
 * @param {Array<Array<number>>} elements - (num_elements x 8) array of node indices
 * @param {number} E - Young's modulus (Pa)
 * @param {number} nu - Poisson's ratio
 * @param {number} rho - Density (kg/m^3)
 * @param {boolean} use_sparse - Whether to use sparse matrices (default: true)
 * @returns {Object} Object with K_global and M_global matrices
 */
export function assemble_global_matrices_3d(nodes, elements, E, nu, rho, use_sparse = true) {
    const num_nodes = nodes.length;
    const num_dof = 3 * num_nodes;
    const num_elements = elements.length;

    let K_global, M_global;

    if (use_sparse) {
        K_global = new lil_matrix([num_dof, num_dof]);
        M_global = new lil_matrix([num_dof, num_dof]);
    } else {
        K_global = Array.from({ length: num_dof }, () => new Array(num_dof).fill(0));
        M_global = Array.from({ length: num_dof }, () => new Array(num_dof).fill(0));
    }

    for (let e = 0; e < num_elements; e++) {
        const elem_nodes = elements[e];
        const node_coords = elem_nodes.map(n => nodes[n]);

        const { Ke, Me } = compute_hex8_matrices(node_coords, E, nu, rho);

        // DOF mapping
        const dof_map = [];
        for (const n of elem_nodes) {
            dof_map.push(3 * n, 3 * n + 1, 3 * n + 2);
        }

        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 24; j++) {
                const gi = dof_map[i];
                const gj = dof_map[j];
                
                if (use_sparse) {
                    const currentK = K_global.get(gi, gj);
                    const currentM = M_global.get(gi, gj);
                    K_global.set(gi, gj, currentK + Ke[i][j]);
                    M_global.set(gi, gj, currentM + Me[i][j]);
                } else {
                    K_global[gi][gj] += Ke[i][j];
                    M_global[gi][gj] += Me[i][j];
                }
            }
        }
    }

    if (use_sparse) {
        K_global = await K_global.tocsr();
        M_global = await M_global.tocsr();
    }

    return { K_global, M_global };
}

/**
 * Solve generalized eigenvalue problem for 3D FEM.
 * 
 * For 3D analysis of a free-free bar, we look for transverse
 * bending modes (primarily Z-direction motion).
 * 
 * @param {*} K - Global stiffness matrix
 * @param {*} M - Global mass matrix
 * @param {number} num_modes - Number of modes to extract
 * @param {boolean} use_sparse - Whether matrices are sparse (default: true)
 * @returns {Array<number>} List of natural frequencies in Hz
 */
export function solve_eigenvalue_3d(K, M, num_modes, use_sparse = true) {
    let eigenvalues;

    if (use_sparse) {
        // Use sparse eigenvalue solver
        // Request more eigenvalues to filter rigid body modes
        const num_request = Math.min(num_modes + 10, K.shape[0] - 2);

        // Add small shift to avoid singularity issues
        const sigma = 1.0; // Small shift

        try {
            const result = eigsh(K, num_request, { M, sigma, which: 'LM' });
            eigenvalues = result.values;
        } catch (e) {
            // Fallback: add regularization
            const n = K.shape[0];
            const M_reg_data = [];
            const M_reg_indices = [];
            const M_reg_indptr = [0];
            
            // Copy M and add regularization
            for (let i = 0; i < n; i++) {
                const start = M.indptr[i];
                const end = M.indptr[i + 1];
                
                let diag_added = false;
                for (let idx = start; idx < end; idx++) {
                    const j = M.indices[idx];
                    if (j === i) {
                        M_reg_data.push(M.data[idx] + 1e-10);
                        M_reg_indices.push(j);
                        diag_added = true;
                    } else if (j < i && !diag_added) {
                        M_reg_data.push(1e-10);
                        M_reg_indices.push(i);
                        diag_added = true;
                        M_reg_data.push(M.data[idx]);
                        M_reg_indices.push(j);
                    } else {
                        M_reg_data.push(M.data[idx]);
                        M_reg_indices.push(j);
                    }
                }
                
                if (!diag_added) {
                    M_reg_data.push(1e-10);
                    M_reg_indices.push(i);
                }
                
                M_reg_indptr.push(M_reg_data.length);
            }
            
            const M_reg = new csr_matrix({ data: M_reg_data, indices: M_reg_indices, indptr: M_reg_indptr, shape: M.shape });
            const result = eigsh(K, num_request, { M: M_reg, sigma, which: 'LM' });
            eigenvalues = result.values;
        }
    } else {
        // Dense solver
        const n = K.length;

        // Regularize M
        const M_reg = M.map(row => row.slice());
        for (let i = 0; i < n; i++) {
            M_reg[i][i] += 1e-12 * Math.max(Math.abs(M[i][i]), 1e-20);
        }

        try {
            // Cholesky decomposition using ml-matrix
            const M_matrix = new Matrix(M_reg);
            const L = M_matrix.cholesky();
            
            // Solve L * L_inv = I to get L_inv
            const L_inv = matrixInverse(L).to2DArray();
            
            // K_tilde = L_inv @ K @ L_inv.T
            const K_matrix = new Matrix(K);
            const L_inv_matrix = new Matrix(L_inv);
            const K_tilde_matrix = L_inv_matrix.mmul(K_matrix).mmul(L_inv_matrix.transpose());
            
            // Make symmetric
            const K_tilde = K_tilde_matrix.to2DArray();
            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    const avg = (K_tilde[i][j] + K_tilde[j][i]) / 2;
                    K_tilde[i][j] = avg;
                    K_tilde[j][i] = avg;
                }
            }
            
            // Eigenvalue decomposition
            const K_tilde_final = new Matrix(K_tilde);
            const evd = K_tilde_final.eig();
            eigenvalues = evd.realEigenvalues;
        } catch (e) {
            // Fallback with more regularization
            for (let i = 0; i < n; i++) {
                M_reg[i][i] += 1e-8;
            }
            
            const M_matrix = new Matrix(M_reg);
            const L = M_matrix.cholesky();
            const L_inv = matrixInverse(L).to2DArray();
            const K_matrix = new Matrix(K);
            const L_inv_matrix = new Matrix(L_inv);
            const K_tilde_matrix = L_inv_matrix.mmul(K_matrix).mmul(L_inv_matrix.transpose());
            const K_tilde = K_tilde_matrix.to2DArray();
            
            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    const avg = (K_tilde[i][j] + K_tilde[j][i]) / 2;
                    K_tilde[i][j] = avg;
                    K_tilde[j][i] = avg;
                }
            }
            
            const K_tilde_final = new Matrix(K_tilde);
            const evd = K_tilde_final.eig();
            eigenvalues = evd.realEigenvalues;
        }
    }

    // Sort and filter
    eigenvalues = eigenvalues.slice().sort((a, b) => a - b);

    // Filter rigid body modes (6 for 3D: 3 translations + 3 rotations)
    const threshold = 100.0; // omega^2 threshold
    const elastic_modes = eigenvalues.filter(ev => ev > threshold);

    // Convert to frequencies
    const frequencies = elastic_modes.slice(0, num_modes).map(ev => 
        Math.sqrt(Math.abs(ev)) / (2.0 * Math.PI)
    );

    return frequencies;
}

/**
 * Compute natural frequencies using 3D FEM analysis.
 * 
 * This is the main entry point for 3D frequency computation.
 * 
 * @param {Array<number>} element_heights - Height of each element along bar length (m)
 * @param {number} length - Bar length (m)
 * @param {number} width - Bar width (m)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} rho - Density (kg/m^3)
 * @param {number} nu - Poisson's ratio
 * @param {number} num_modes - Number of modes to extract
 * @param {number} ny - Number of elements in width direction (default: 2)
 * @param {number} nz - Number of elements in thickness direction (default: 2)
 * @returns {Array<number>} List of natural frequencies in Hz
 */
export async function compute_frequencies_3d(
    element_heights,
    length,
    width,
    E,
    rho,
    nu,
    num_modes,
    ny = 2,
    nz = 2
) {
    const nx = element_heights.length;

    // Generate mesh
    const { nodes, elements } = generate_bar_mesh_3d(
        length, width, element_heights, nx, ny, nz
    );

    // Determine if we should use sparse matrices
    const num_dof = 3 * nodes.length;
    const use_sparse = num_dof > 1000;

    // Assemble matrices
    const { K_global, M_global } = await assemble_global_matrices_3d(
        nodes, elements, E, nu, rho, use_sparse
    );

    // Solve eigenvalue problem
    const frequencies = solve_eigenvalue_3d(K_global, M_global, num_modes, use_sparse);

    return frequencies;
}

/**
 * Find the two corner nodes at x=0 end of bar.
 * 
 * Assumes bar is oriented with length along x-axis,
 * width along y-axis, height along z-axis.
 * 
 * @param {Array<Array<number>>} nodes - (num_nodes x 3) array of node coordinates
 * @param {number} tol - Tolerance for coordinate comparison (default: 1e-6)
 * @returns {Object} Object with s1_idx and s2_idx of corner node indices at x=0 end
 */
export function find_corner_nodes(nodes, tol = 1e-6) {
    // Find nodes at x ≈ 0 (one end of bar)
    const x_min = Math.min(...nodes.map(n => n[0]));
    const end_nodes = nodes
        .map((n, idx) => ({ node: n, idx }))
        .filter(({ node }) => Math.abs(node[0] - x_min) < tol);

    // Find corners at top surface (max z)
    const z_vals = end_nodes.map(({ node }) => node[2]);
    const z_max = Math.max(...z_vals);
    const top_nodes = end_nodes.filter(({ node }) => Math.abs(node[2] - z_max) < tol);
    
    // Find max and min y
    const top_y = top_nodes.map(({ node }) => node[1]);
    const max_y_idx = top_y.indexOf(Math.max(...top_y));
    const min_y_idx = top_y.indexOf(Math.min(...top_y));

    const s1_idx = top_nodes[max_y_idx].idx; // max y
    const s2_idx = top_nodes[min_y_idx].idx; // min y

    return { s1_idx, s2_idx };
}

/**
 * Classify mode using Soares' corner displacement method.
 * 
 * @param {Array<number>} mode_shape - Eigenvector (n_nodes * 3) with [ux1,uy1,uz1, ux2,uy2,uz2, ...]
 * @param {Array<Array<number>>} nodes - Node coordinates (n_nodes x 3)
 * @param {Object} corner_indices - Object with s1_idx and s2_idx of corner node indices at x=0 end
 * @returns {string} mode_type: 'vertical_bending', 'torsional', 'lateral', or 'axial'
 */
export function classify_mode_soares(mode_shape, nodes, corner_indices) {
    const { s1_idx, s2_idx } = corner_indices;

    // Extract 3D displacement at each corner
    const psi_s1 = [
        mode_shape[s1_idx * 3],
        mode_shape[s1_idx * 3 + 1],
        mode_shape[s1_idx * 3 + 2]
    ];
    const psi_s2 = [
        mode_shape[s2_idx * 3],
        mode_shape[s2_idx * 3 + 1],
        mode_shape[s2_idx * 3 + 2]
    ];

    // Find direction of maximum displacement at s1
    const abs_psi = psi_s1.map(Math.abs);
    const max_dir = abs_psi.indexOf(Math.max(...abs_psi)); // 0=x, 1=y, 2=z

    if (max_dir === 1) { // y-direction dominant
        return 'lateral';
    } else if (max_dir === 0) { // x-direction dominant
        return 'axial';
    } else { // z-direction dominant (max_dir === 2)
        // Disambiguate vertical bending vs torsional
        if (Math.sign(psi_s1[2]) === Math.sign(psi_s2[2])) {
            return 'vertical_bending';
        } else {
            return 'torsional';
        }
    }
}

/**
 * Classify all modes and organize by family.
 * 
 * @param {Array<number>} frequencies - List of frequencies in Hz
 * @param {Array<Array<number>>} mode_shapes - (n_dof x n_modes) array of eigenvectors
 * @param {Array<Array<number>>} nodes - (n_nodes x 3) array of node coordinates
 * @returns {Object} Dict with frequencies organized by mode type
 */
export function classify_all_modes(frequencies, mode_shapes, nodes) {
    const corner_indices = find_corner_nodes(nodes);

    const classified = {
        vertical_bending: [],
        torsional: [],
        lateral: [],
        axial: []
    };

    for (let i = 0; i < frequencies.length; i++) {
        if (i < mode_shapes.length) {
            const shape = mode_shapes[i];
            const mode_type = classify_mode_soares(shape, nodes, corner_indices);
            classified[mode_type].push({
                frequency: frequencies[i],
                mode_index: i,
            });
        }
    }

    // Sort each family by frequency and assign mode numbers
    for (const family in classified) {
        classified[family].sort((a, b) => a.frequency - b.frequency);
        classified[family].forEach((mode, j) => {
            mode.mode_number = j + 1; // V1, V2, V3... or T1, T2...
        });
    }

    return classified;
}

/**
 * Solve generalized eigenvalue problem and return both frequencies and mode shapes.
 * 
 * @param {*} K - Global stiffness matrix
 * @param {*} M - Global mass matrix
 * @param {number} num_modes - Number of modes to extract
 * @param {boolean} use_sparse - Whether matrices are sparse (default: true)
 * @returns {Object} Object with frequencies in Hz and mode_shapes array
 */
export function solve_eigenvalue_3d_with_vectors(K, M, num_modes, use_sparse = true) {
    let eigenvalues, eigenvectors;

    if (use_sparse) {
        const num_request = Math.min(num_modes + 12, K.shape[0] - 2);
        const sigma = 1.0;

        try {
            const result = eigsh(K, num_request, { M, sigma, which: 'LM' });
            eigenvalues = result.values;
            eigenvectors = result.vectors;
        } catch (e) {
            const n = K.shape[0];
            const M_reg_data = [];
            const M_reg_indices = [];
            const M_reg_indptr = [0];
            
            for (let i = 0; i < n; i++) {
                const start = M.indptr[i];
                const end = M.indptr[i + 1];
                
                let diag_added = false;
                for (let idx = start; idx < end; idx++) {
                    const j = M.indices[idx];
                    if (j === i) {
                        M_reg_data.push(M.data[idx] + 1e-10);
                        M_reg_indices.push(j);
                        diag_added = true;
                    } else if (j < i && !diag_added) {
                        M_reg_data.push(1e-10);
                        M_reg_indices.push(i);
                        diag_added = true;
                        M_reg_data.push(M.data[idx]);
                        M_reg_indices.push(j);
                    } else {
                        M_reg_data.push(M.data[idx]);
                        M_reg_indices.push(j);
                    }
                }
                
                if (!diag_added) {
                    M_reg_data.push(1e-10);
                    M_reg_indices.push(i);
                }
                
                M_reg_indptr.push(M_reg_data.length);
            }
            
            const M_reg = new csr_matrix({ data: M_reg_data, indices: M_reg_indices, indptr: M_reg_indptr, shape: M.shape });
            const result = eigsh(K, num_request, { M: M_reg, sigma, which: 'LM' });
            eigenvalues = result.values;
            eigenvectors = result.vectors;
        }
    } else {
        const n = K.length;
        const M_reg = M.map(row => row.slice());
        for (let i = 0; i < n; i++) {
            M_reg[i][i] += 1e-12 * Math.max(Math.abs(M[i][i]), 1e-20);
        }

        try {
            const M_matrix = new Matrix(M_reg);
            const L = M_matrix.cholesky();
            const L_inv = matrixInverse(L).to2DArray();
            const K_matrix = new Matrix(K);
            const L_inv_matrix = new Matrix(L_inv);
            const K_tilde_matrix = L_inv_matrix.mmul(K_matrix).mmul(L_inv_matrix.transpose());
            const K_tilde = K_tilde_matrix.to2DArray();
            
            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    const avg = (K_tilde[i][j] + K_tilde[j][i]) / 2;
                    K_tilde[i][j] = avg;
                    K_tilde[j][i] = avg;
                }
            }
            
            const K_tilde_final = new Matrix(K_tilde);
            const evd = K_tilde_final.eig();
            eigenvalues = evd.realEigenvalues;
            
            // Transform eigenvectors back
            const eigenvectors_tilde = evd.eigenvectorMatrix.to2DArray();
            const L_inv_T = new Matrix(L_inv).transpose().to2DArray();
            eigenvectors = [];
            for (let j = 0; j < eigenvectors_tilde[0].length; j++) {
                const col = [];
                for (let i = 0; i < n; i++) {
                    let sum = 0;
                    for (let k = 0; k < n; k++) {
                        sum += L_inv_T[i][k] * eigenvectors_tilde[k][j];
                    }
                    col.push(sum);
                }
                eigenvectors.push(col);
            }
        } catch (e) {
            for (let i = 0; i < n; i++) {
                M_reg[i][i] += 1e-8;
            }
            
            const M_matrix = new Matrix(M_reg);
            const L = M_matrix.cholesky();
            const L_inv = matrixInverse(L).to2DArray();
            const K_matrix = new Matrix(K);
            const L_inv_matrix = new Matrix(L_inv);
            const K_tilde_matrix = L_inv_matrix.mmul(K_matrix).mmul(L_inv_matrix.transpose());
            const K_tilde = K_tilde_matrix.to2DArray();
            
            for (let i = 0; i < n; i++) {
                for (let j = i + 1; j < n; j++) {
                    const avg = (K_tilde[i][j] + K_tilde[j][i]) / 2;
                    K_tilde[i][j] = avg;
                    K_tilde[j][i] = avg;
                }
            }
            
            const K_tilde_final = new Matrix(K_tilde);
            const evd = K_tilde_final.eig();
            eigenvalues = evd.realEigenvalues;
            
            const eigenvectors_tilde = evd.eigenvectorMatrix.to2DArray();
            const L_inv_T = new Matrix(L_inv).transpose().to2DArray();
            eigenvectors = [];
            for (let j = 0; j < eigenvectors_tilde[0].length; j++) {
                const col = [];
                for (let i = 0; i < n; i++) {
                    let sum = 0;
                    for (let k = 0; k < n; k++) {
                        sum += L_inv_T[i][k] * eigenvectors_tilde[k][j];
                    }
                    col.push(sum);
                }
                eigenvectors.push(col);
            }
        }
    }

    // Sort by eigenvalue
    const indices = eigenvalues.map((val, idx) => ({ val, idx }));
    indices.sort((a, b) => a.val - b.val);
    
    eigenvalues = indices.map(({ val }) => val);
    if (use_sparse) {
        eigenvectors = indices.map(({ idx }) => eigenvectors[idx]);
    } else {
        const sorted_eigenvectors = indices.map(({ idx }) => eigenvectors[idx]);
        eigenvectors = sorted_eigenvectors;
    }

    // Filter rigid body modes
    const threshold = 100.0;
    const elastic_mask = eigenvalues.map(ev => ev > threshold);
    const elastic_eigenvalues = eigenvalues.filter((_, i) => elastic_mask[i]);
    const elastic_eigenvectors = eigenvectors.filter((_, i) => elastic_mask[i]);

    // Convert to frequencies
    const frequencies = elastic_eigenvalues.slice(0, num_modes).map(ev =>
        Math.sqrt(Math.abs(ev)) / (2.0 * Math.PI)
    );
    const mode_shapes = elastic_eigenvectors.slice(0, num_modes);

    return { frequencies, mode_shapes };
}

/**
 * Compute natural frequencies using 3D FEM with mode classification.
 * 
 * Returns frequencies, classified modes dict, and node coordinates.
 * 
 * @param {Array<number>} element_heights - Height of each element along bar length (m)
 * @param {number} length - Bar length (m)
 * @param {number} width - Bar width (m)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} rho - Density (kg/m^3)
 * @param {number} nu - Poisson's ratio
 * @param {number} num_modes - Number of modes to extract (default: 10)
 * @param {number} ny - Number of elements in width direction (default: 2)
 * @param {number} nz - Number of elements in thickness direction (default: 2)
 * @returns {Object} Object with all_frequencies, classified, and nodes
 */
export async function compute_frequencies_3d_classified(
    element_heights,
    length,
    width,
    E,
    rho,
    nu,
    num_modes = 10,
    ny = 2,
    nz = 2
) {
    const nx = element_heights.length;

    // Generate mesh
    const { nodes, elements } = generate_bar_mesh_3d(
        length, width, element_heights, nx, ny, nz
    );

    // Determine if we should use sparse matrices
    const num_dof = 3 * nodes.length;
    const use_sparse = num_dof > 1000;

    // Assemble matrices
    const { K_global, M_global } = await assemble_global_matrices_3d(
        nodes, elements, E, nu, rho, use_sparse
    );

    // Solve eigenvalue problem with mode shapes
    const { frequencies, mode_shapes } = solve_eigenvalue_3d_with_vectors(
        K_global, M_global, num_modes, use_sparse
    );

    // Classify modes
    const classified = classify_all_modes(frequencies, mode_shapes, nodes);

    return { frequencies, classified, nodes };
}

/**
 * Compute only vertical bending frequencies from 3D FEM analysis.
 * 
 * This filters out torsional, lateral, and axial modes to return
 * only the vertical bending modes comparable to 2D beam analysis.
 * 
 * @param {Array<number>} element_heights - Height of each element along bar length (m)
 * @param {number} length - Bar length (m)
 * @param {number} width - Bar width (m)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} rho - Density (kg/m^3)
 * @param {number} nu - Poisson's ratio
 * @param {number} num_bending_modes - Number of bending modes to return (default: 3)
 * @param {number} ny - Number of elements in width direction (default: 2)
 * @param {number} nz - Number of elements in thickness direction (default: 2)
 * @returns {Array<number>} List of vertical bending frequencies in Hz
 */
export async function get_bending_frequencies_3d(
    element_heights,
    length,
    width,
    E,
    rho,
    nu,
    num_bending_modes = 3,
    ny = 2,
    nz = 2
) {
    // Request more modes to ensure we find enough bending modes
    const num_request = num_bending_modes * 4 + 6;

    const { classified } = await compute_frequencies_3d_classified(
        element_heights, length, width, E, rho, nu,
        num_request, ny, nz
    );

    // Extract vertical bending frequencies
    const bending_modes = classified.vertical_bending;
    const bending_freqs = bending_modes
        .slice(0, num_bending_modes)
        .map(m => m.frequency);

    return bending_freqs;
}

/**
 * Compute natural frequencies using 3D FEM with adaptive mesh and mode classification.
 * 
 * This function uses pre-computed adaptive mesh positions for refined accuracy
 * at cut boundaries while keeping coarser elements in uniform regions.
 * 
 * @param {Array<number>} x_positions - X coordinates of element boundaries (from generate_adaptive_mesh_1d)
 * @param {Array<number>} element_heights - Height of each element along bar length (m)
 * @param {number} length - Bar length (m)
 * @param {number} width - Bar width (m)
 * @param {number} E - Young's modulus (Pa)
 * @param {number} rho - Density (kg/m^3)
 * @param {number} nu - Poisson's ratio
 * @param {number} num_modes - Number of modes to extract (default: 10)
 * @param {number} ny - Number of elements in width direction (default: 2)
 * @param {number} nz - Number of elements in thickness direction (default: 2)
 * @returns {Object} Object with frequencies, classified, nodes, and elements
 */
export async function compute_frequencies_3d_adaptive(
    x_positions,
    element_heights,
    length,
    width,
    E,
    rho,
    nu,
    num_modes = 10,
    ny = 2,
    nz = 2
) {
    // Generate adaptive mesh
    const { nodes, elements } = generate_bar_mesh_3d_adaptive(
        length, width, x_positions, element_heights, ny, nz
    );

    // Determine if we should use sparse matrices
    const num_dof = 3 * nodes.length;
    const use_sparse = num_dof > 1000;

    // Assemble matrices
    const { K_global, M_global } = await assemble_global_matrices_3d(
        nodes, elements, E, nu, rho, use_sparse
    );

    // Solve eigenvalue problem with mode shapes
    const { frequencies, mode_shapes } = solve_eigenvalue_3d_with_vectors(
        K_global, M_global, num_modes, use_sparse
    );

    // Classify modes
    const classified = classify_all_modes(frequencies, mode_shapes, nodes);

    return { frequencies, classified, nodes, elements };
}

export default {
    gauss_points_3d,
    shape_functions_hex8,
    shape_function_derivatives_hex8,
    elasticity_matrix_3d,
    compute_hex8_matrices,
    generate_bar_mesh_3d,
    generate_bar_mesh_3d_adaptive,
    assemble_global_matrices_3d,
    solve_eigenvalue_3d,
    compute_frequencies_3d,
    find_corner_nodes,
    classify_mode_soares,
    classify_all_modes,
    solve_eigenvalue_3d_with_vectors,
    compute_frequencies_3d_classified,
    get_bending_frequencies_3d,
    compute_frequencies_3d_adaptive,
};
