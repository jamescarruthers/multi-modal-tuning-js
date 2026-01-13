/**
 * Type definitions for the multi-modal bar tuning optimization.
 * 
 * Uses classes and factory functions to mirror the Python dataclasses.
 */

/**
 * FEM analysis mode selection.
 */
export const AnalysisMode = {
    BEAM_2D: '2d',    // Timoshenko beam elements (fast, good for slender bars)
    SOLID_3D: '3d'    // 3D hexahedral elements (accurate, slower)
};

/**
 * Material properties for bar tuning.
 */
export class Material {
    constructor(name, E, rho, nu, category) {
        this.name = name;        // Material name
        this.E = E;              // Young's modulus (Pa)
        this.rho = rho;          // Density (kg/m^3)
        this.nu = nu;            // Poisson's ratio
        this.category = category; // 'metal' or 'wood'
    }
}

/**
 * Bar geometry parameters.
 */
export class BarParameters {
    constructor(L, b, h0, hMin) {
        this.L = L;          // Length (m)
        this.b = b;          // Width (m)
        this.h0 = h0;        // Original thickness (m)
        this.hMin = hMin;    // Minimum thickness (m) - typically 10% of h0
    }
}

/**
 * Single rectangular cut.
 */
export class Cut {
    constructor(lambda_, h) {
        this.lambda_ = lambda_;  // Length from center (m)
        this.h = h;              // Height at cut (m)
    }
}

/**
 * Tuning preset with frequency ratios.
 */
export class TuningPreset {
    constructor(name, ratios, description, instrument) {
        this.name = name;
        this.ratios = ratios;
        this.description = description;
        this.instrument = instrument;
    }
}

/**
 * Evolutionary algorithm parameters.
 */
export class EAParameters {
    constructor(config = {}) {
        this.population_size = config.population_size ?? 50;
        this.elitism_percent = config.elitism_percent ?? 10.0;
        this.crossover_percent = config.crossover_percent ?? 30.0;
        this.mutation_percent = config.mutation_percent ?? 60.0;
        this.mutation_strength = config.mutation_strength ?? 0.1;
        this.max_generations = config.max_generations ?? 100;
        this.target_error = config.target_error ?? 0.01;
        this.num_elements = config.num_elements ?? 150;
        this.f1_priority = config.f1_priority ?? 1.0;
        this.min_cut_width = config.min_cut_width ?? 0.0;
        this.max_cut_width = config.max_cut_width ?? 0.0;
        this.min_cut_depth = config.min_cut_depth ?? 0.0;
        this.max_cut_depth = config.max_cut_depth ?? 0.0;
        this.max_length_trim = config.max_length_trim ?? 0.0;
        this.max_length_extend = config.max_length_extend ?? 0.0;
        this.max_workers = config.max_workers ?? 0;
        this.analysis_mode = config.analysis_mode ?? AnalysisMode.BEAM_2D;
        this.num_elements_y = config.num_elements_y ?? 2;
        this.num_elements_z = config.num_elements_z ?? 2;
        this.frequency_offset = config.frequency_offset ?? 0.0;
    }
}

/**
 * Individual in EA population.
 */
export class Individual {
    constructor(genes, fitness = Infinity, sigmas = null) {
        this.genes = genes;      // [lambda_1, h_1, lambda_2, h_2, ..., length_adjust?]
        this.fitness = fitness;
        this.sigmas = sigmas;    // For self-adaptive Gaussian mutation
    }
}

/**
 * Result of optimization.
 */
export class OptimizationResult {
    constructor(config = {}) {
        this.best_individual = config.best_individual;
        this.cuts = config.cuts;
        this.computed_frequencies = config.computed_frequencies;
        this.target_frequencies = config.target_frequencies;
        this.tuning_error = config.tuning_error;
        this.max_error_cents = config.max_error_cents;
        this.errors_in_cents = config.errors_in_cents;
        this.volume_percent = config.volume_percent;
        this.roughness_percent = config.roughness_percent;
        this.generations = config.generations;
        this.length_trim = config.length_trim ?? 0.0;
        this.effective_length = config.effective_length ?? 0.0;
    }
}

/**
 * Progress update during optimization.
 */
export class ProgressUpdate {
    constructor(config = {}) {
        this.generation = config.generation;
        this.best_fitness = config.best_fitness;
        this.best_individual = config.best_individual;
        this.average_fitness = config.average_fitness;
        this.computed_frequencies = config.computed_frequencies ?? null;
        this.errors_in_cents = config.errors_in_cents ?? null;
        this.length_trim = config.length_trim ?? 0.0;
    }
}

/**
 * Bounds for optimization variables.
 */
export class VariableBounds {
    constructor(config = {}) {
        this.lambda_min = config.lambda_min;
        this.lambda_max = config.lambda_max;
        this.h_min = config.h_min;
        this.h_max = config.h_max;
        this.min_cut_width = config.min_cut_width ?? 0.0;
        this.max_cut_width = config.max_cut_width ?? 0.0;
        this.min_cut_depth = config.min_cut_depth ?? 0.0;
        this.max_cut_depth = config.max_cut_depth ?? 0.0;
        this.max_length_trim = config.max_length_trim ?? 0.0;
        this.max_length_extend = config.max_length_extend ?? 0.0;
    }
}

/**
 * Detailed evaluation results for an individual.
 */
export class DetailedEvaluation {
    constructor(config = {}) {
        this.computed_frequencies = config.computed_frequencies;
        this.target_frequencies = config.target_frequencies;
        this.tuning_error = config.tuning_error;
        this.volume_penalty = config.volume_penalty;
        this.roughness_penalty = config.roughness_penalty;
        this.combined_fitness = config.combined_fitness;
        this.cents_errors = config.cents_errors;
        this.max_cents_error = config.max_cents_error;
    }
}

/**
 * EA Configuration.
 */
export class EAConfig {
    constructor(config = {}) {
        this.bar = config.bar;
        this.material = config.material;
        this.target_frequencies = config.target_frequencies;
        this.num_cuts = config.num_cuts;
        this.penalty_type = config.penalty_type ?? 'none';
        this.penalty_weight = config.penalty_weight ?? 0.0;
        this.ea_params = config.ea_params;
        this.on_progress = config.on_progress ?? null;
    }
}
