window.assumptionDetails = {
  "ancova": [
    {
      "id": "ancova.one_metric_dependent_variable",
      "label": "One metric dependent variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ancova.one_or_more_categorical_independent_variables",
      "label": "One or more categorical independent variables",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ancova.one_or_more_metric_covariates",
      "label": "One or more metric covariates",
      "detail": "Covariates should be quantitative predictors measured before or independently of the grouping variable. Check their scale, missingness, outliers, and whether they are conceptually appropriate controls.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ancova.linear_relation_between_covariates_and_the_dependent_varia",
      "label": "Linear relation between covariates and the dependent variable",
      "detail": "The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ancova.homogeneity_of_regression_slopes",
      "label": "Homogeneity of regression slopes",
      "detail": "The relation between each covariate and the dependent variable should be similar across groups. Check covariate-by-group interactions",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ancova.normally_distributed_residuals_and_homogeneity_of_variance",
      "label": "Normally distributed residuals and homogeneity of variance",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "logisticRegression": [
    {
      "id": "logisticRegression.dichotomous_outcome_variable",
      "label": "Dichotomous outcome variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "logisticRegression.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "logisticRegression.no_strong_multicollinearity",
      "label": "No strong multicollinearity",
      "detail": "Predictors should not be nearly redundant. Inspect correlations, variance inflation factors, condition indices, or unstable coefficients that change markedly when other predictors are added.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "logisticRegression.sufficient_number_of_events",
      "label": "Sufficient number of events",
      "detail": "There should be enough outcome events in each modeled category for stable estimation. Sparse outcomes can produce wide confidence intervals, separation, or unstable odds ratios.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "binomialTest": [
    {
      "id": "binomialTest.two_level_categorical_variable",
      "label": "Two-level categorical variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "binomialTest.theoretically_expected_proportion_is_defined",
      "label": "Theoretically expected proportion is defined",
      "detail": "The model structure or hypothesis should be motivated before looking at the result. Document why paths, or expected proportions were chosen.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "binomialTest.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "binomialTest.fixed_number_of_trials_or_cases",
      "label": "Fixed number of trials or cases",
      "detail": "The number of observations or trials should be determined by the design rather than by stopping after seeing the result. The expected probability should be defined before the observed count is evaluated.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "chiSquareVariance": [
    {
      "id": "chiSquareVariance.one_metric_variable",
      "label": "One metric variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareVariance.known_or_theoretically_justified_population_variance",
      "label": "Known or theoretically justified population variance",
      "detail": "The model structure or hypothesis should be motivated before looking at the result. Document why population variance was chosen.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareVariance.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareVariance.normality_in_the_population",
      "label": "Normality in the population",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "chiSquareAssociation": [
    {
      "id": "chiSquareAssociation.categorical_variables",
      "label": "Categorical variables",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareAssociation.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareAssociation.sufficient_expected_cell_counts",
      "label": "Sufficient expected cell counts",
      "detail": "Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "clusterAnalysis": [
    {
      "id": "clusterAnalysis.features_describing_people_or_objects",
      "label": "Features describing people or objects",
      "detail": "The variables used to define similarity should be relevant to the grouping goal. Remove identifiers, outcomes that should not define clusters, duplicate measures, and variables whose scale would dominate the solution.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "clusterAnalysis.appropriate_scaling_or_standardisation",
      "label": "Appropriate scaling or standardisation",
      "detail": "Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "clusterAnalysis.meaningful_distance_or_similarity_measure",
      "label": "Meaningful distance or similarity measure",
      "detail": "The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "clusterAnalysis.cluster_solution_is_substantively_interpretable",
      "label": "Cluster solution is substantively interpretable",
      "detail": "The chosen grouping should make substantive sense, not merely optimize an algorithmic criterion. Compare alternative numbers of clusters and inspect whether clusters are stable, interpretable, and useful for the research question.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "confirmatoryFactorAnalysis": [
    {
      "id": "confirmatoryFactorAnalysis.latent_constructs_are_predefined",
      "label": "Latent constructs are predefined",
      "detail": "The model structure or hypothesis should be motivated before looking at the result. Document why paths and components were chosen.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "confirmatoryFactorAnalysis.multiple_indicators_per_factor",
      "label": "Multiple indicators per factor",
      "detail": "For Confirmatory factor analysis (CFA), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "confirmatoryFactorAnalysis.the_item_factor_assignment_is_theoretically_justified",
      "label": "The item-factor assignment is theoretically justified",
      "detail": "The model structure or hypothesis should be motivated before looking at the result. Document why the item were chosen.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "confirmatoryFactorAnalysis.adequate_sample_size",
      "label": "Adequate sample size",
      "detail": "There should be enough information for the model or test to estimate effects reliably.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "confirmatoryFactorAnalysis.model_fit_and_local_misfit_should_be_evaluated",
      "label": "Model fit and local misfit should be evaluated",
      "detail": "Evaluate global fit, local residuals, parameter estimates, and theoretically plausible alternatives. A statistically acceptable fit does not by itself make the model substantively correct.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "metaCorrelationAnalysis": [
    {
      "id": "metaCorrelationAnalysis.correlation_and_sample_size_available_for_each_study",
      "label": "Correlation and sample size available for each study",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, and studies rather than only the total N.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaCorrelationAnalysis.studies_measure_comparable_constructs",
      "label": "Studies measure comparable constructs",
      "detail": "For Correlation-coefficient meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaCorrelationAnalysis.moderator_and_study_label_can_be_added",
      "label": "Moderator and Study Label can be added",
      "detail": "For Correlation-coefficient meta-analysis, this condition should be checked against the research design and variable coding, before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaCorrelationAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
      "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
      "detail": "The data contain grouping structures such as repeated measures within participants or athletes within teams could be suitable for fixed effect. The random-effect structure should match the design question when heterogenity is expected. Publication bias should be examined with several methods. Moderator should be theorically justified",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "decisionTreeClassifier": [
    {
      "id": "decisionTreeClassifier.categorical_outcome_variable",
      "label": "Categorical outcome variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "decisionTreeClassifier.training_test_split_or_cross_validation",
      "label": "Training/test split or cross-validation",
      "detail": "Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "decisionTreeClassifier.pruning_or_depth_control_to_reduce_overfitting",
      "label": "Pruning or depth control to reduce overfitting",
      "detail": "Flexible models can learn noise. Limit tree depth, prune, tune hyperparameters, or use validation data to check whether performance generalizes beyond the training sample.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "decisionTreeClassifier.inspect_class_distribution",
      "label": "Inspect class distribution",
      "detail": "The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "decisionTreeRegression": [
    {
      "id": "decisionTreeRegression.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "decisionTreeRegression.training_test_split_or_cross_validation",
      "label": "Training/test split or cross-validation",
      "detail": "Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "decisionTreeRegression.pruning_or_depth_control_to_reduce_overfitting",
      "label": "Pruning or depth control to reduce overfitting",
      "detail": "Flexible models can learn noise. Limit tree depth, prune, tune hyperparameters, or use validation data to check whether performance generalizes beyond the training sample.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "decisionTreeRegression.predictors_are_meaningfully_coded",
      "label": "Predictors are meaningfully coded",
      "detail": "Variable coding should match the analysis: categories, contrasts, missing values, dummy variables, and direction of scales should be checked before interpretation.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "discriminantAnalysis": [
    {
      "id": "discriminantAnalysis.nominal_dependent_variable_with_known_groups",
      "label": "Nominal dependent variable with known groups",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "discriminantAnalysis.interval_scaled_independent_variables",
      "label": "Interval-scaled independent variables",
      "detail": "For Discriminant analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "discriminantAnalysis.multivariate_normality_within_groups",
      "label": "Multivariate normality within groups",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "discriminantAnalysis.similar_covariance_matrices",
      "label": "Similar covariance matrices",
      "detail": "Groups should have broadly similar covariance matrices among the dependent variables or predictors. Large differences can make multivariate tests or discriminant functions unstable, especially with small or unequal group sizes.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "discriminantAnalysis.adequate_group_sizes",
      "label": "Adequate group sizes",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "metaEffectSizeAnalysis": [
    {
      "id": "metaEffectSizeAnalysis.effect_size_available_for_each_study",
      "label": "Effect size available for each study",
      "detail": "Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaEffectSizeAnalysis.variance_or_standard_error_available_for_each_effect_size",
      "label": "Variance or standard error available for each effect size",
      "detail": "Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaEffectSizeAnalysis.moderator_and_study_label_can_be_added",
      "label": "Moderator and Study Label can be added",
      "detail": "For Effect-size meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaEffectSizeAnalysis.effect_size_type",
      "label": "Effect size type for each study",
      "detail": "Effects size for studies with within and between participants design should not interchangable. Transform according to pre-registered decision.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaEffectSizeAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
      "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
      "detail": "The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "varianceFTest": [
    {
      "id": "varianceFTest.two_independent_samples",
      "label": "Two independent samples",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "varianceFTest.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "varianceFTest.normality_in_both_populations",
      "label": "Normality in both populations",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "varianceFTest.sensitive_to_outliers_and_skew",
      "label": "Sensitive to outliers and skew",
      "detail": "A few extreme or influential observations should not dominate the result. Inspect raw data, scatterplots, standardized residuals, leverage, and influence diagnostics before deciding whether values are errors, legitimate extremes, or reasons to use robust methods.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "factorAnalysis": [
    {
      "id": "factorAnalysis.several_metric_or_approximately_metric_variables",
      "label": "Several metric or approximately metric variables",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "factorAnalysis.meaningful_correlations_among_variables",
      "label": "Meaningful correlations among variables",
      "detail": "Variables should share enough common information for dimension reduction or latent structure to be meaningful. Very weak correlations suggest little shared structure",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "factorAnalysis.adequate_sample_size",
      "label": "Adequate sample size",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of predictors, or parameters rather than only the total N.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "factorAnalysis.interpretable_factor_structure",
      "label": "Interpretable factor structure",
      "detail": "The result should be explainable in the context of the construct, measurement scale, and research design. Avoid treating purely algorithmic groupings or dimensions as meaningful without substantive validation.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "factorAnalysis.no_a_priori_hypothesis_about_the_relationships_among_the_f",
      "label": "No a priori hypothesis about the relationships among the factors",
      "detail": "The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "twoWayAnova": [
    {
      "id": "twoWayAnova.two_or_more_categorical_independent_factors",
      "label": "Two or more categorical independent factors",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "twoWayAnova.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "twoWayAnova.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "twoWayAnova.normality_within_cells",
      "label": "Normality within cells",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "twoWayAnova.homogeneity_of_variances",
      "label": "Homogeneity of variances",
      "detail": "Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "twoWayRepeatedAnova": [
    {
      "id": "twoWayRepeatedAnova.at_least_one_repeated_measures_factor",
      "label": "At least one repeated-measures factor",
      "detail": "For Factorial repeated-measures ANOVA (two or more factors), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "twoWayRepeatedAnova.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "twoWayRepeatedAnova.sphericity_or_suitable_correction",
      "label": "Sphericity or suitable correction",
      "detail": "For repeated-measures factors with more than two levels, the variances of the pairwise differences should be similar. If this is doubtful, report a correction such as Greenhouse-Geisser or use a mixed-model approach.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "twoWayRepeatedAnova.balanced_assignment_of_time_points_or_conditions",
      "label": "Balanced assignment of time points or conditions",
      "detail": "For Factorial repeated-measures ANOVA (two or more factors), this condition should be checked against the research design, variable coding. Ensures that every articipant, or item experiences different conditions or time points equally",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "fisher": [
    {
      "id": "fisher.dichotomous_categorical_variables",
      "label": "Dichotomous categorical variables",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "fisher.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "fisher.small_expected_counts",
      "label": "Small expected counts",
      "detail": "Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "fixedEffectMetaAnalysis": [
    {
      "id": "fixedEffectMetaAnalysis.several_independent_studies_or_effect_sizes",
      "label": "Several independent studies or effect sizes",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "fixedEffectMetaAnalysis.common_effect_size_and_standard_error_variance_available",
      "label": "Common effect size and standard error/variance available",
      "detail": "Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "fixedEffectMetaAnalysis.studies_are_substantively_very_similar",
      "label": "Studies are substantively very similar",
      "detail": "For Fixed-effect meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "fixedEffectMetaAnalysis.heterogeneity_is_low",
      "label": "Heterogeneity is low",
      "detail": "Effects may still differ across studies or subgroups. Report heterogeneity statistics and interpret them together with study design, populations, measures, and interventions.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "friedman": [
    {
      "id": "friedman.several_paired_measurements",
      "label": "Several paired measurements",
      "detail": "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "friedman.at_least_ordinal_values",
      "label": "At least ordinal values",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "friedman.same_cases_in_all_conditions",
      "label": "Same cases in all conditions",
      "detail": "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "generalizedLinearMixedModel": [
    {
      "id": "generalizedLinearMixedModel.dichotomous_categorical_or_count_dependent_variable",
      "label": "Dichotomous, categorical, or count dependent variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "generalizedLinearMixedModel.appropriate_link_function_and_distribution",
      "label": "Appropriate link function and distribution",
      "detail": "The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "generalizedLinearMixedModel.clusters_or_persons_entered_as_random_effects",
      "label": "Clusters or persons entered as random effects",
      "detail": "The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "generalizedLinearMixedModel.adequate_events_per_parameter",
      "label": "Adequate events per parameter",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors and parameters rather than only the total N.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "independentT": [
    {
      "id": "independentT.two_independent_groups",
      "label": "Two independent groups",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "independentT.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "independentT.approximate_normality",
      "label": "Approximate normality",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, normality test, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "independentT.equal_variances_or_welch_correction",
      "label": "Equal variances or Welch correction",
      "detail": "Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "knnClassifier": [
    {
      "id": "knnClassifier.categorical_outcome_variable",
      "label": "Categorical outcome variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "knnClassifier.scaled_standardised_predictors",
      "label": "Scaled/standardised predictors",
      "detail": "Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "knnClassifier.meaningful_distance_metric",
      "label": "Meaningful distance metric",
      "detail": "The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "knnClassifier.choose_k_and_weighting_using_validation",
      "label": "Choose k and weighting using validation",
      "detail": "Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "knnRegression": [
    {
      "id": "knnRegression.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "knnRegression.scaled_standardised_predictors",
      "label": "Scaled/standardised predictors",
      "detail": "Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "knnRegression.meaningful_distance_metric",
      "label": "Meaningful distance metric",
      "detail": "The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "knnRegression.choose_k_using_validation",
      "label": "Choose k using validation",
      "detail": "Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "kendall": [
    {
      "id": "kendall.at_least_ordinal_scale_level",
      "label": "At least ordinal scale level",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "kendall.monotonic_relationship",
      "label": "Monotonic relationship",
      "detail": "As one variable increases, the other should tend to move consistently upward or downward, even if the relation is not linear. A scatterplot or rank plot is usually the clearest check.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "kendall.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "kendall.useful_with_ties_or_smaller_samples",
      "label": "Useful with ties or smaller samples",
      "detail": "For Kendall's rank correlation, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "kruskalWallis": [
    {
      "id": "kruskalWallis.several_independent_groups",
      "label": "Several independent groups",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "kruskalWallis.at_least_ordinal_outcome",
      "label": "At least ordinal outcome",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "kruskalWallis.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "linearMixedModel": [
    {
      "id": "linearMixedModel.metric_dependent_variable",
      "label": "Metric dependent variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "linearMixedModel.observations_nested_within_people_teams_or_measurement_occ",
      "label": "Observations nested within people, teams, or measurement occasions",
      "detail": "The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "linearMixedModel.random_effects_are_theoretically_justified",
      "label": "Random effects are theoretically justified",
      "detail": "The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "linearMixedModel.check_residual_diagnostics_and_variance_structure",
      "label": "Check residual diagnostics and variance structure",
      "detail": "Inspect residual plots, Q-Q plots, fitted-vs-residual patterns, and the estimated variance components. For mixed models, check whether the random-effect structure is plausible and whether residual variance differs across groups or time points.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "linearRegression": [
    {
      "id": "linearRegression.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "linearRegression.linear_relationships",
      "label": "Linear relationships",
      "detail": "The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "linearRegression.independent_residuals",
      "label": "Independent residuals",
      "detail": "Model errors should not show systematic dependence across time, persons, groups, or measurement order. Check the study design first, then inspect residual plots or autocorrelation if observations are ordered.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "linearRegression.homoscedasticity_and_residual_diagnostics",
      "label": "Homoscedasticity and residual diagnostics",
      "detail": "Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "linearRegression.prediction_or_association_not_causality_by_itself",
      "label": "Prediction or association, not causality by itself",
      "detail": "The statistical model alone does not establish causality. Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "logLinearModel": [
    {
      "id": "logLinearModel.several_nominal_variables",
      "label": "Several nominal variables",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "logLinearModel.frequency_data_in_a_contingency_table",
      "label": "Frequency data in a contingency table",
      "detail": "For Log-linear model, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "logLinearModel.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "logLinearModel.sufficient_expected_cell_counts",
      "label": "Sufficient expected cell counts",
      "detail": "Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "mancova": [
    {
      "id": "mancova.two_or_more_metric_dependent_variables",
      "label": "Two or more metric dependent variables",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mancova.one_or_more_categorical_independent_variables",
      "label": "One or more categorical independent variables",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mancova.one_or_more_metric_covariates",
      "label": "One or more metric covariates",
      "detail": "Covariates should be quantitative predictors measured before or independently of the grouping variable. Check their scale, missingness, outliers, and whether they are conceptually appropriate controls.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mancova.linear_relation_between_covariates_and_dependent_variables",
      "label": "Linear relation between covariates and dependent variables",
      "detail": "The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mancova.homogeneity_of_regression_slopes",
      "label": "Homogeneity of regression slopes",
      "detail": "The relation between each covariate and the dependent variable should be similar across groups. Check covariate-by-group interactions",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mancova.multivariate_normality_and_homogeneity_of_covariance_matri",
      "label": "Multivariate normality and homogeneity of covariance matrices",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "mannWhitney": [
    {
      "id": "mannWhitney.two_independent_groups",
      "label": "Two independent groups",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mannWhitney.at_least_ordinal_outcome",
      "label": "At least ordinal outcome",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mannWhitney.similar_distribution_shapes_for_location_interpretation",
      "label": "Similar distribution shapes for location interpretation",
      "detail": "The model family should match the outcome scale and data-generating process, such as cumulative links for ordinal outcomes.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "manova": [
    {
      "id": "manova.two_or_more_metric_dependent_variables",
      "label": "Two or more metric dependent variables",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "manova.one_or_more_categorical_independent_variables",
      "label": "One or more categorical independent variables",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "manova.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "manova.multivariate_normality_within_groups",
      "label": "Multivariate normality within groups",
      "detail": "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "manova.homogeneity_of_covariance_matrices",
      "label": "Homogeneity of covariance matrices",
      "detail": "Groups should have broadly similar covariance matrices among the dependent variables or predictors. Large differences can make multivariate tests or discriminant functions unstable, especially with small or unequal group sizes. Use Box's M test to evaluate the null hypothesis that the variance-covariance matrices of the dependent variables are equal across all groups.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "manova.meaningful_correlations_among_dependent_variables",
      "label": "Meaningful correlations among dependent variables",
      "detail": "Variables should share enough common information for dimension reduction or latent structure to be meaningful. The dependent variables should be moderately correlated (typically between 0.3 and 0.8). Very weak correlations suggest little shared structure. If dependent variables are too highly correlated, they become redundant and violate MANOVA’s multicollinearity assumption.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "mcnemar": [
    {
      "id": "mcnemar.two_paired_dichotomous_measurements",
      "label": "Two paired dichotomous measurements",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mcnemar.paired_data",
      "label": "Paired data",
      "detail": "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "mcnemar.discordant_pairs_are_relevant",
      "label": "Discordant pairs are relevant",
      "detail": "For McNemar test, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result. McNemar's Test focuses exclusively on the discordant pairs, those participants who changed their response. Use those values to calculate the Odds ratio.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "metaMeanDifferenceAnalysis": [
    {
      "id": "metaMeanDifferenceAnalysis.n_m_and_sd_available_for_each_group",
      "label": "n, M, and SD available for each group",
      "detail": "For Mean-difference meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaMeanDifferenceAnalysis.groups_and_measurement_scales_are_comparable",
      "label": "Groups and measurement scales are comparable",
      "detail": "For Mean-difference meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, before relying on the result. Be sure if the study design is within or between participants before combining different studies into the meta analysis.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaMeanDifferenceAnalysis.moderator_and_study_label_can_be_added",
      "label": "Moderator and Study Label can be added",
      "detail": "For Mean-difference meta-analysis, moderators should be a-priori justified.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaMeanDifferenceAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
      "label": "Select fixed/random effects (depeding on the heterogenity expected), moderator analyses, and publication-bias checks in the model options",
      "detail": "The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "majorMetaAnalysis": [
    {
      "id": "majorMetaAnalysis.several_independent_studies_or_effect_sizes",
      "label": "Several independent studies or effect sizes",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. If several outcomes are obtained from the same sample size, consider to run a multivariate meta-analysis, or combine outcomes in a compositive score (if possible) or choose the main dependant variable of interest.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "majorMetaAnalysis.input_data_match_the_selected_option",
      "label": "Input data match the selected option",
      "detail": "For Meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "majorMetaAnalysis.justify_fixed_vs_random_effects_from_study_design_and_hete",
      "label": "Justify fixed vs. random effects from study design and heterogeneity",
      "detail": "If data contain grouping structures such as repeated measures within participants or athletes within teams, a fixed-effect meta-analysis could be appropiated. The random-effect structure should match the design question and should be supported by enough observations and heterogenity.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "majorMetaAnalysis.report_moderator_analyses_and_publication_bias_checks_as_o",
      "label": "Report moderator analyses and publication-bias checks as optional follow-up analyses",
      "detail": "Publication-bias diagnostics require enough comparable studies and are not definitive. Funnel asymmetry can reflect bias and small study effect, heterogeneity, study quality, or chance. Consider multiple publication bias methods before reaching a conclusion.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "metaRegression": [
    {
      "id": "metaRegression.enough_studies",
      "label": "Enough studies",
      "detail": "For Meta-regression, this condition should be checked against the research design and objetive of the research before relying on the result. Formally, a meta-analysis can be conducted with as few as two empirical studies. From a practical perspective, however, you may wish to consider broadening its scope—and thereby increasing the number of included studies—to make the analysis more informative and compelling.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaRegression.moderator_measured_at_study_level",
      "label": "Moderator measured at study level",
      "detail": "For Meta-regression, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaRegression.same_effect_metric",
      "label": "Same effect metric",
      "detail": "For Meta-regression, this condition should be checked against the research design and variable coding.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaRegression.ecological_interpretation_considered",
      "label": "Ecological interpretation considered",
      "detail": "For Meta-regression, this condition should be checked against the research design before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "multidimensionalScaling": [
    {
      "id": "multidimensionalScaling.distance_or_dissimilarity_matrix",
      "label": "Distance or dissimilarity matrix",
      "detail": "The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible. Manhattan distance measures the path along grid lines (like city blocks), Euclidean distance measures the straight-line distance between two points. Manhattan distance might be more suitable for grid-based systems or high-dimensional data, while Euclidean distance might be better for open spaces or continuous data.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "multidimensionalScaling.people_or_objects_are_comparable",
      "label": "People or objects are comparable",
      "detail": "For Multidimensional scaling, this condition should be checked against the research design, variable coding, and descriptive statistics before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "multidimensionalScaling.number_of_dimensions_chosen_using_stress_and_interpretabil",
      "label": "Number of dimensions chosen using stress and interpretability",
      "detail": "For Multidimensional scaling, the goal is to find the simplest configuration that accurately represents the data structure. Use a Shepard diagram to evaluate the accuracy of dimension and the \"elbow method\" to chose the optimal number of dimensions (a scatter plot with stress on the y-axis and the number of dimensions on the x-axis).",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "multidimensionalScaling.primarily_an_exploratory_representation",
      "label": "Primarily an exploratory representation",
      "detail": "For Multidimensional scaling, helps identify hidden clusters, gradients, and outliers without assuming a normal distribution and MDS can be applied to any arbitrary distance, similarity, or confusion matrix",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "multinomialRegression": [
    {
      "id": "multinomialRegression.multicategory_categorical_outcome",
      "label": "Multicategory categorical outcome",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "multinomialRegression.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "multinomialRegression.Independence of Irrelevant Alternatives.",
      "label": "Independence of Irrelevant Alternatives (IIA)",
      "detail": "The odds of preferring one category over another must not change if a third category is added or removed",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "multinomialRegression.no_Multicolinearity",
      "label": "No Multicollinearity",
      "detail": "Independent variables should not be highly correlated with one another.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "multinomialRegression.meaningful_reference_category",
      "label": "Meaningful reference category",
      "detail": "The baseline category should be substantively meaningful because model coefficients are interpreted relative to it. Record the chosen reference category before reporting odds ratios or contrasts.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "naiveBayes": [
    {
      "id": "naiveBayes.categorical_outcome_variable",
      "label": "Categorical outcome variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "naiveBayes.predictors_are_treated_as_approximately_conditionally_inde",
      "label": "Predictors are treated as approximately conditionally independent",
      "detail": "For Naive Bayes classifier, this condition should be checked against the research design and variable coding. The algorithm assumes the presence or value of one feature does not influence any other feature, allowing the joint probability to be calculated as the simple product of individual probabilities",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "naiveBayes.suitable_distribution_for_metric_features",
      "label": "Suitable distribution for metric features",
      "detail": "The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes. It assumes that the continuous values associated with each class are distributed according to a bell curve.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "naiveBayes.check_predicted_probabilities_with_validation_data",
      "label": "Check predicted probabilities with validation data",
      "detail": "Evaluate predictive models on data not used to fit them. The generated probabilities act as relative rankings rather than perfectly calibrated true probabilities.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "networkAnalysis": [
    {
      "id": "networkAnalysis.several_metric_or_ordinal_variables",
      "label": "Several metric or ordinal variables",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "networkAnalysis.edges_are_interpreted_as_conditional_associations",
      "label": "Edges are interpreted as conditional associations",
      "detail": "For Network analysis, this condition should be checked against the research design, and variable coding, The connection between two nodes indicates a relationship that exists after controlling for all other variables in the network.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "networkAnalysis.adequate_sample_size",
      "label": "Adequate sample size",
      "detail": "There should be enough information for the model or test to estimate effects reliably. A higher ratio between sample size (n) and number of variables (k) significantly improves the estimation of true edges and reduces bias.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "networkAnalysis.network_stability_and_robustness_should_be_checked",
      "label": "Network stability and robustness should be checked",
      "detail": "For Network analysis, this condition should be checked against the research design and variable coding. The sample must be large enough so that metric stays stable under resampling. This is typically evaluated using the case-dropping subset bootstrap (retained correlation > 0.50, ideally ≥ 0.70)",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "networkAnalysis.no_causal_interpretation_without_a_suitable_design",
      "label": "No causal interpretation without a suitable design",
      "detail": "The statistical model alone does not establish causality. Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "nonparametricTwoWayAnova": [
    {
      "id": "nonparametricTwoWayAnova.two_or_more_categorical_independent_factors",
      "label": "Two or more categorical independent factors",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "nonparametricTwoWayAnova.at_least_ordinal_outcome",
      "label": "At least ordinal outcome",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "nonparametricTwoWayAnova.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "nonparametricTwoWayAnova.interactions_tested_on_rank_transformed_data",
      "label": "Interactions tested on rank-transformed data",
      "detail": "For Nonparametric factorial ANOVA (ART), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "nonparametricTwoWayRepeatedAnova": [
    {
      "id": "nonparametricTwoWayRepeatedAnova.at_least_one_repeated_measures_factor",
      "label": "At least one repeated-measures factor",
      "detail": "For Nonparametric factorial repeated-measures ANOVA (ART), this condition should be checked against the research design and variable coding.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "nonparametricTwoWayRepeatedAnova.at_least_ordinal_outcome",
      "label": "At least ordinal outcome",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal,",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "nonparametricTwoWayRepeatedAnova.same_cases_in_paired_conditions",
      "label": "Same cases in paired conditions",
      "detail": "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "nonparametricTwoWayRepeatedAnova.interactions_tested_on_rank_transformed_data",
      "label": "Interactions tested on rank-transformed data",
      "detail": "For Nonparametric factorial repeated-measures ANOVA (ART), Aligned Rank Transform isolate the interaction effect before ranking.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "metaOddsRatioAnalysis": [
    {
      "id": "metaOddsRatioAnalysis.several_independent_studies",
      "label": "Several independent studies",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Several dependant variables from the same study can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaOddsRatioAnalysis.events_and_total_sample_size_available_for_each_group",
      "label": "Events and total sample size available for each group",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N. Determine how many effect sizes are adequate according to the research objective.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaOddsRatioAnalysis.moderator_and_study_label_can_be_added",
      "label": "Moderator and Study Label can be added",
      "detail": "For Odds-ratio meta-analysis, this condition should be checked against the research design and variable coding. Define beforehand the moderatos and comparisons of interest.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaOddsRatioAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
      "label": "Select fixed or random effects, moderator analyses, and publication-bias checks in the model options",
      "detail": "Select fixed effect if the data contain grouping structures such as repeated measures within participants or athletes within teams. Select random-effect if heterogenity in the studies is expected. Always report heterogenity indices and several publications bias methods.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "oneSampleT": [
    {
      "id": "oneSampleT.metric_variable",
      "label": "Metric variable",
      "detail": "The variable should be quantitative enough that means are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "oneSampleT.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "oneSampleT.approximate_normal_distribution",
      "label": "Approximate normal distribution",
      "detail": "The relevant distribution should be approximately normal.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "oneSampleWilcoxon": [
    {
      "id": "oneSampleWilcoxon.at_least_ordinal_data",
      "label": "At least ordinal data",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "oneSampleWilcoxon.symmetric_differences_helpful",
      "label": "Symmetric differences helpful",
      "detail": "For One-sample Wilcoxon signed-rank test, this condition should be checked against diagnostic plots before relying on the result. If the data is skewed, positive and negative deviations will not cancel each other out properly, invalidating the test statistic's distribution",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "oneSampleWilcoxon.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "oneSampleZ": [
    {
      "id": "oneSampleZ.metric_variable",
      "label": "Metric variable",
      "detail": "The variable should be quantitative enough. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "oneSampleZ.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "oneSampleZ.known_population_standard_deviation_or_variance",
      "label": "Known population standard deviation or variance",
      "detail": "Each group should provide a comparable effect estimate and a valid measure of uncertainty.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "oneSampleZ.normal_population_or_sufficiently_large_sample",
      "label": "Normal population or sufficiently large sample",
      "detail": "The relevant distribution should be approximately normal, usually within groups. Inspect histograms, Q-Q plots, and outliers",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "anova": [
    {
      "id": "anova.independent_groups",
      "label": "Independent groups",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "anova.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "anova.normality_within_groups",
      "label": "Normality within groups",
      "detail": "The relevant distribution should be approximately normal, usually within groups. Inspect histograms, Q-Q plots, and outliers. Perform normality test",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "anova.homogeneity_of_variances",
      "label": "Homogeneity of variances",
      "detail": "Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "ordinalMixedModel": [
    {
      "id": "ordinalMixedModel.ordinal_dependent_variable",
      "label": "Ordinal dependent variable",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ordinalMixedModel.repeated_or_clustered_observations",
      "label": "Repeated or clustered observations",
      "detail": "The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough observations per groups.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ordinalMixedModel.check_proportional_odds_assumption",
      "label": "Check proportional-odds assumption",
      "detail": "The relation between predictors and the cumulative odds should be approximately constant across thresholds. If this is not plausible, consider partial proportional-odds or multinomial models.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "ordinalMixedModel.random_effects_are_theoretically_justified",
      "label": "Random effects are theoretically justified",
      "detail": "The data contain grouping structures such as repeated measures within participants, groups or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "pairedT": [
    {
      "id": "pairedT.two_paired_measurements",
      "label": "Two paired measurements",
      "detail": "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pairedT.metric_difference_scores",
      "label": "Metric difference scores",
      "detail": "For Paired-samples t-test, It converts paired data into a single column of difference scores and tests whether the mean of these differences is significantly different from zero.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pairedT.approximate_normality_of_differences",
      "label": "Approximate normality of differences",
      "detail": "The relevant distribution should be approximately normal, usually within groups. Inspect histograms, Q-Q plots, and perform normality tests.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "pathAnalysis": [
    {
      "id": "pathAnalysis.all_variables_are_observed_measurable",
      "label": "All variables are observed/measurable",
      "detail": "For Path analysis (mediation), this condition should be checked against the research design and variable coding. All variables are manifest (directly measurable items)",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pathAnalysis.theoretically_justified_path_direction",
      "label": "Theoretically justified path direction",
      "detail": "The model structure or hypothesis should be motivated before looking at the result. Document why paths were chosen.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pathAnalysis.linear_relationships",
      "label": "Linear relationships",
      "detail": "The association should be adequately described by a straight-line relation on the model scale.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pathAnalysis.adequate_sample_size",
      "label": "Adequate sample size",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of predictors and parameters.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pathAnalysis.causal_interpretation_only_with_a_suitable_design",
      "label": "Causal interpretation only with a suitable design",
      "detail": "The statistical model alone does not establish causality. Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "chiSquareGoodness": [
    {
      "id": "chiSquareGoodness.multilevel_categorical_variable",
      "label": "Multilevel categorical variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareGoodness.expected_frequencies_or_proportions_are_defined",
      "label": "Expected frequencies or proportions are defined",
      "detail": "Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareGoodness.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "chiSquareGoodness.sufficient_expected_counts_per_category",
      "label": "Sufficient expected counts per category",
      "detail": "If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "pearson": [
    {
      "id": "pearson.metric_variables",
      "label": "Metric variables",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pearson.linear_relationship",
      "label": "Linear relationship",
      "detail": "The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pearson.no_dominant_outliers",
      "label": "No dominant outliers",
      "detail": "A few extreme or influential observations should not dominate the result. Inspect raw data, scatterplots, standardized residuals, leverage, and influence diagnostics before deciding whether values are errors, legitimate extremes, or reasons to use robust methods.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "pearson.for_inference_approximate_bivariate_normality",
      "label": "For inference: approximate bivariate normality",
      "detail": "It does not assume that the data are normally distributed for its calculation, but the assumption of bivariate normality is necessary to make statistical inferences",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "principalComponentAnalysis": [
    {
      "id": "principalComponentAnalysis.several_metric_or_approximately_metric_variables",
      "label": "Several metric or approximately metric variables",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "principalComponentAnalysis.meaningful_correlations_among_variables",
      "label": "Meaningful correlations among variables",
      "detail": "Variables should share enough common information for dimension reduction or latent structure to be meaningful. Very weak correlations suggest little shared structure Bartlett's test of sphericity evaluates if your correlation matrix is an identity matrix",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "principalComponentAnalysis.standardise_variables_on_different_scales",
      "label": "Standardise variables on different scales",
      "detail": "Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "principalComponentAnalysis.common_variance",
      "label": "Common variance among variables",
      "detail": "The Kaiser-Meyer-Olkin (KMO) measure evaluates if your data is suited for Factor Analysis. It computes the proportion of common variance among variables. Scores range from 0 to 1: values above 0.80 are meritorious, while scores below 0.50 mean the data is unacceptable for dimension reduction.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "principalComponentAnalysis.choose_components_by_explained_variance_and_interpretabili",
      "label": "Choose components by explained variance and interpretability",
      "detail": "Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "metaProportionAnalysis": [
    {
      "id": "metaProportionAnalysis.event_frequency_count_available_for_each_study",
      "label": "Event frequency/count available for each study",
      "detail": "For Proportion meta-analysis, this condition should be checked against the research design and variable coding. Formally, with only two studies is already possible to perform the analysis, but consider the total amount of studies on the field and their relevance for the research question.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaProportionAnalysis.total_sample_size_available_for_each_study",
      "label": "Total sample size available for each study",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, and parameters rather than only the total N.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaProportionAnalysis.moderator_and_study_label_can_be_added",
      "label": "Moderator and Study Label can be added.",
      "detail": "For Proportion meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, before relying on the result. Justify in advance the moderators included in the analysis. The should be theoretically justified.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "metaProportionAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
      "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options.",
      "detail": "Select fixed effect if the data contain grouping structures such as repeated measures within participants or athletes within teams. Select random-effect if heterogenity in the studies is expected. Always report heterogenity indices and several publications bias methods, as they rely on different assumptions.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "randomForestClassifier": [
    {
      "id": "randomForestClassifier.categorical_outcome_variable",
      "label": "Categorical outcome variable",
      "detail": "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomForestClassifier.adequate_sample_size",
      "label": "Adequate sample size",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of predictors, parameters, events, clusters rather than only the total N. When in doubt, select the appropriate sample size (and other model parameters) using cross-validation.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomForestClassifier.validation_on_unseen_data",
      "label": "Validation on unseen data",
      "detail": "Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomForestClassifier.handle_class_imbalance",
      "label": "Handle class imbalance",
      "detail": "Check whether outcome classes are rare or unevenly distributed. Accuracy alone can be misleading",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "randomForestRegression": [
    {
      "id": "randomForestRegression.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomForestRegression.enough_cases_for_training_and_validation",
      "label": "Enough cases for training and validation",
      "detail": "Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomForestRegression.tune_number_of_trees_and_variables_per_split",
      "label": "Tune number of trees and variables per split",
      "detail": "For Random forest regression, limits how many random features each tree can evaluate at any given node. Limiting the options forces the individual trees to be different from one another, which lowers the overall variance of your mode",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomForestRegression.interpret_with_variable_importance_or_partial_effects",
      "label": "Interpret with variable importance or partial effects",
      "detail": "For Random forest regression, Permutation Featurewe can use Importance / Mean Decrease in Accuracy to estimate how much each input variable contributes to the model's overall predictive performance.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "randomEffectsMetaAnalysis": [
    {
      "id": "randomEffectsMetaAnalysis.several_independent_studies_or_effect_sizes",
      "label": "Several independent studies or effect sizes",
      "detail": "One observation should not determine or duplicate another unless the method explicitly models that dependence (Multivariate meta-analysis). Several outcomes from the same sample size can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomEffectsMetaAnalysis.effect_size_and_precision_measure_available",
      "label": "Effect size and precision measure available",
      "detail": "Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomEffectsMetaAnalysis.between_study_variance_is_estimated",
      "label": "Between-study variance is estimated",
      "detail": "Each study should provide a comparable effect estimate and a valid measure of uncertainty.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "randomEffectsMetaAnalysis.heterogeneity_is_reported_with_tau2_i2",
      "label": "Heterogeneity is reported with tau2/I2",
      "detail": "Effects may differ across studies or subgroups. Report heterogeneity statistics and interpret them together with study design. Heterogenity can be assessed with Cochran’s Q to test whether the true effect size differs between the studies, Thompson’s I2 to assess the proportion of total variability due to between-study heterogeneity, and tau-squared (τ2) as estimate of the variance of the underlying distribution of true effect sizes",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "repeatedAnova": [
    {
      "id": "repeatedAnova.repeated_measurements",
      "label": "Repeated measurements",
      "detail": "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "repeatedAnova.metric_outcome_variable",
      "label": "Metric outcome variable",
      "detail": "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "repeatedAnova.sphericity_or_suitable_correction",
      "label": "Sphericity or suitable correction",
      "detail": "For repeated-measures factors with more than two levels, the variances of the pairwise differences should be similar. If this is doubtful, report a correction such as Greenhouse-Geisser or use a mixed-model approach.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "spearman": [
    {
      "id": "spearman.at_least_ordinal_scale_level",
      "label": "At least ordinal scale level",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "spearman.monotonic_relationship",
      "label": "Monotonic relationship",
      "detail": "As one variable increases, the other should tend to move consistently upward or downward, even if the relation is not linear. A scatterplot or rank plot is usually the clearest check.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "spearman.independent_observations",
      "label": "Independent observations",
      "detail": "One observation should not determine or duplicate another. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "structuralEquationModeling": [
    {
      "id": "structuralEquationModeling.latent_constructs_measured_by_multiple_indicators",
      "label": "Latent constructs measured by multiple indicators",
      "detail": "For Structural equation modeling (SEM), this condition should be checked against the research design and variable coding, before relying on the result. For example, concepts that cannot be directly measured (e.g., depression, fatigue) are captured accurately by combining several imperfect indicators.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "structuralEquationModeling.theoretically_justified_measurement_and_structural_model",
      "label": "Theoretically justified measurement and structural model",
      "detail": "The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "structuralEquationModeling.adequate_sample_size",
      "label": "Adequate sample size",
      "detail": "There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N. Common guidelines suggest 5 to 20 observations per estimated parameter, or 10 cases per indicator variable, althought it depends on the model complexity.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "structuralEquationModeling.model_fit_and_alternative_models_should_be_evaluated",
      "label": "Model fit and alternative models should be evaluated",
      "detail": "Evaluate global fit, local residuals, parameter estimates, and theoretically plausible alternatives. A statistically acceptable fit does not by itself make the model substantively correct.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ],
  "wilcoxon": [
    {
      "id": "wilcoxon.two_paired_measurements",
      "label": "Two paired measurements",
      "detail": "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.",
      "howToCheck": "",
      "whatToReport": ""
    },
    {
      "id": "wilcoxon.at_least_ordinal_values",
      "label": "At least ordinal values",
      "detail": "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.",
      "howToCheck": "",
      "whatToReport": ""
    }
  ]
};
