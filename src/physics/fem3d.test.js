/**
 * Tests for fem3d.js
 */

import { test } from 'node:test';
import assert from 'node:assert';
import {
    gauss_points_3d,
    shape_functions_hex8,
    shape_function_derivatives_hex8,
    elasticity_matrix_3d,
    compute_hex8_matrices,
    generate_bar_mesh_3d,
    find_corner_nodes,
} from './fem3d.js';

test('gauss_points_3d - returns 8 points and weights', () => {
    const { points, weights } = gauss_points_3d();
    
    assert.strictEqual(points.length, 8);
    assert.strictEqual(weights.length, 8);
    assert.strictEqual(points[0].length, 3);
    
    // All weights should be 1.0 for 2x2x2 Gauss quadrature
    weights.forEach(w => assert.strictEqual(w, 1.0));
});

test('shape_functions_hex8 - sum to 1 at any point', () => {
    const N = shape_functions_hex8(0.5, 0.3, -0.2);
    
    assert.strictEqual(N.length, 8);
    
    // Shape functions should sum to 1
    const sum = N.reduce((a, b) => a + b, 0);
    assert.ok(Math.abs(sum - 1.0) < 1e-10);
});

test('shape_functions_hex8 - values at corners', () => {
    // At corner (-1, -1, -1), N0 should be 1 and others 0
    const N0 = shape_functions_hex8(-1, -1, -1);
    assert.ok(Math.abs(N0[0] - 1.0) < 1e-10);
    for (let i = 1; i < 8; i++) {
        assert.ok(Math.abs(N0[i]) < 1e-10);
    }
    
    // At corner (1, -1, -1), N1 should be 1
    const N1 = shape_functions_hex8(1, -1, -1);
    assert.ok(Math.abs(N1[1] - 1.0) < 1e-10);
    for (let i = 0; i < 8; i++) {
        if (i !== 1) assert.ok(Math.abs(N1[i]) < 1e-10);
    }
});

test('shape_function_derivatives_hex8 - returns 3x8 array', () => {
    const dN = shape_function_derivatives_hex8(0, 0, 0);
    
    assert.strictEqual(dN.length, 3);
    assert.strictEqual(dN[0].length, 8);
    assert.strictEqual(dN[1].length, 8);
    assert.strictEqual(dN[2].length, 8);
});

test('elasticity_matrix_3d - creates 6x6 matrix', () => {
    const E = 200e9; // Steel
    const nu = 0.3;
    
    const D = elasticity_matrix_3d(E, nu);
    
    assert.strictEqual(D.length, 6);
    assert.strictEqual(D[0].length, 6);
    
    // Check symmetry
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            assert.ok(Math.abs(D[i][j] - D[j][i]) < 1e-10);
        }
    }
});

test('elasticity_matrix_3d - diagonal elements are positive', () => {
    const E = 200e9;
    const nu = 0.3;
    
    const D = elasticity_matrix_3d(E, nu);
    
    for (let i = 0; i < 6; i++) {
        assert.ok(D[i][i] > 0);
    }
});

test('compute_hex8_matrices - creates 24x24 matrices', () => {
    // Simple unit cube
    const node_coords = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 1, 1],
    ];
    
    const E = 200e9;
    const nu = 0.3;
    const rho = 7850;
    
    const { Ke, Me } = compute_hex8_matrices(node_coords, E, nu, rho);
    
    assert.strictEqual(Ke.length, 24);
    assert.strictEqual(Ke[0].length, 24);
    assert.strictEqual(Me.length, 24);
    assert.strictEqual(Me[0].length, 24);
    
    // Check symmetry of stiffness matrix (with reasonable tolerance for numerical errors)
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 24; j++) {
            const diffK = Math.abs(Ke[i][j] - Ke[j][i]);
            const magnitudeK = Math.max(Math.abs(Ke[i][j]), Math.abs(Ke[j][i]));
            const relativeDiffK = magnitudeK > 0 ? diffK / magnitudeK : diffK;
            assert.ok(diffK < 1e-6 || relativeDiffK < 1e-10, 
                `Ke[${i}][${j}]=${Ke[i][j]} != Ke[${j}][${i}]=${Ke[j][i]}, diff=${diffK}, rel=${relativeDiffK}`);
            
            const diffM = Math.abs(Me[i][j] - Me[j][i]);
            const magnitudeM = Math.max(Math.abs(Me[i][j]), Math.abs(Me[j][i]));
            const relativeDiffM = magnitudeM > 0 ? diffM / magnitudeM : diffM;
            assert.ok(diffM < 1e-6 || relativeDiffM < 1e-10,
                `Me[${i}][${j}]=${Me[i][j]} != Me[${j}][${i}]=${Me[j][i]}, diff=${diffM}, rel=${relativeDiffM}`);
        }
    }
});

test('generate_bar_mesh_3d - creates mesh with correct node count', () => {
    const length = 1.0;
    const width = 0.1;
    const element_heights = [0.05, 0.05, 0.05, 0.05]; // 4 elements
    const nx = 4;
    const ny = 2;
    const nz = 2;
    
    const { nodes, elements, heights_per_element } = generate_bar_mesh_3d(
        length, width, element_heights, nx, ny, nz
    );
    
    // Number of nodes: (nx+1) * (ny+1) * (nz+1)
    const expected_nodes = (nx + 1) * (ny + 1) * (nz + 1);
    assert.strictEqual(nodes.length, expected_nodes);
    
    // Number of elements: nx * ny * nz
    const expected_elements = nx * ny * nz;
    assert.strictEqual(elements.length, expected_elements);
    assert.strictEqual(heights_per_element.length, expected_elements);
    
    // Each element should have 8 nodes
    elements.forEach(elem => {
        assert.strictEqual(elem.length, 8);
    });
});

test('generate_bar_mesh_3d - nodes are within bounds', () => {
    const length = 1.0;
    const width = 0.1;
    const element_heights = [0.05, 0.04, 0.03];
    const nx = 3;
    
    const { nodes } = generate_bar_mesh_3d(length, width, element_heights, nx, 2, 2);
    
    nodes.forEach(node => {
        const [x, y, z] = node;
        assert.ok(x >= 0 && x <= length);
        assert.ok(y >= 0 && y <= width);
        assert.ok(z >= 0); // z should be non-negative
    });
});

test('find_corner_nodes - finds two different nodes', () => {
    const length = 1.0;
    const width = 0.1;
    const element_heights = [0.05, 0.05];
    
    const { nodes } = generate_bar_mesh_3d(length, width, element_heights, 2, 2, 2);
    
    const { s1_idx, s2_idx } = find_corner_nodes(nodes);
    
    assert.ok(typeof s1_idx === 'number');
    assert.ok(typeof s2_idx === 'number');
    assert.notStrictEqual(s1_idx, s2_idx);
    
    // Both should be valid node indices
    assert.ok(s1_idx >= 0 && s1_idx < nodes.length);
    assert.ok(s2_idx >= 0 && s2_idx < nodes.length);
});
