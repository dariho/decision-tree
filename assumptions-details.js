window.assumptionDetails = {
  "en": {
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
  },
  "de": {
    "ancova": [
      {
        "id": "ancova.one_metric_dependent_variable",
        "label": "One metric dependent variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Diese Voraussetzung sollte für ANCOVA vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.linear_relation_between_covariates_and_the_dependent_varia",
        "label": "Linear relation between covariates and the dependent variable",
        "detail": "Der Zusammenhang sollte auf der Modellskala angemessen durch eine lineare Beziehung beschrieben werden. Streudiagramme, partielle Residuenplots und Plots von vorhergesagten Werten gegen Residuen helfen, Krümmungen oder Schwellenmuster zu erkennen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "Die Beziehung zwischen jeder Kovariate und der abhängigen Variable sollte über Gruppen hinweg ähnlich sein. Prüfen Sie Kovariate-mal-Gruppe-Interaktionen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.normally_distributed_residuals_and_homogeneity_of_variance",
        "label": "Normally distributed residuals and homogeneity of variance",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logisticRegression": [
      {
        "id": "logisticRegression.dichotomous_outcome_variable",
        "label": "Dichotomous outcome variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört und ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.no_strong_multicollinearity",
        "label": "No strong multicollinearity",
        "detail": "Prädiktoren sollten nicht nahezu redundant sein. Prüfen Sie Korrelationen, Varianzinflationsfaktoren, Konditionsindizes oder instabile Koeffizienten, die sich stark ändern, wenn andere Prädiktoren hinzugefügt werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.sufficient_number_of_events",
        "label": "Sufficient number of events",
        "detail": "Diese Voraussetzung sollte für Binary logistic regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "binomialTest": [
      {
        "id": "binomialTest.two_level_categorical_variable",
        "label": "Two-level categorical variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört und ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.theoretically_expected_proportion_is_defined",
        "label": "Theoretically expected proportion is defined",
        "detail": "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden. Dokumentieren Sie, warum paths, or expected proportions gewählt wurden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.fixed_number_of_trials_or_cases",
        "label": "Fixed number of trials or cases",
        "detail": "Diese Voraussetzung sollte für Binomial test vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareVariance": [
      {
        "id": "chiSquareVariance.one_metric_variable",
        "label": "One metric variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.known_or_theoretically_justified_population_variance",
        "label": "Known or theoretically justified population variance",
        "detail": "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden. Diese Voraussetzung sollte für Chi-square test for one variance vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.normality_in_the_population",
        "label": "Normality in the population",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareAssociation": [
      {
        "id": "chiSquareAssociation.categorical_variables",
        "label": "Categorical variables",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Die erwarteten Häufigkeiten sollten groß genug sein, damit asymptotische Approximationen funktionieren. Wenn viele erwartete Zellen klein sind, fassen Sie inhaltlich ähnliche Kategorien zusammen, verwenden Sie falls möglich einen exakten Test oder wählen Sie ein Modell für dünn besetzte Zähldaten.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "clusterAnalysis": [
      {
        "id": "clusterAnalysis.features_describing_people_or_objects",
        "label": "Features describing people or objects",
        "detail": "Diese Voraussetzung sollte für Cluster analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.appropriate_scaling_or_standardisation",
        "label": "Appropriate scaling or standardisation",
        "detail": "Bringen Sie Prädiktoren vor distanz- oder komponentenbasierten Methoden auf vergleichbare Skalen, wenn sich die Einheiten unterscheiden. Andernfalls können Variablen mit größeren numerischen Wertebereichen das Ergebnis dominieren.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.meaningful_distance_or_similarity_measure",
        "label": "Meaningful distance or similarity measure",
        "detail": "Das gewählte Distanz- oder Ähnlichkeitsmaß sollte zur Bedeutung der Variablen und zur Forschungsfrage passen. Prüfen Sie, ob euklidische, Manhattan-, korrelationsbasierte oder andere Distanzen am besten begründbar sind.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.cluster_solution_is_substantively_interpretable",
        "label": "Cluster solution is substantively interpretable",
        "detail": "Diese Voraussetzung sollte für Cluster analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "confirmatoryFactorAnalysis": [
      {
        "id": "confirmatoryFactorAnalysis.latent_constructs_are_predefined",
        "label": "Latent constructs are predefined",
        "detail": "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden. Dokumentieren Sie, warum paths and components gewählt wurden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.multiple_indicators_per_factor",
        "label": "Multiple indicators per factor",
        "detail": "Für Confirmatory factor analysis (CFA) sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.the_item_factor_assignment_is_theoretically_justified",
        "label": "The item-factor assignment is theoretically justified",
        "detail": "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden. Dokumentieren Sie, warum the item gewählt wurden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.model_fit_and_local_misfit_should_be_evaluated",
        "label": "Model fit and local misfit should be evaluated",
        "detail": "Bewerten Sie globale Modellpassung, lokale Residuen, Parameterschätzungen und theoretisch plausible Alternativen. Eine statistisch akzeptable Modellpassung macht das Modell allein noch nicht inhaltlich korrekt.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaCorrelationAnalysis": [
      {
        "id": "metaCorrelationAnalysis.correlation_and_sample_size_available_for_each_study",
        "label": "Correlation and sample size available for each study",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von groups, predictors, parameters, and studies statt nur das gesamte N.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.studies_measure_comparable_constructs",
        "label": "Studies measure comparable constructs",
        "detail": "Für Correlation-coefficient meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Für Correlation-coefficient meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Diese Voraussetzung sollte für Correlation-coefficient meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeClassifier": [
      {
        "id": "decisionTreeClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden. Verwenden Sie Train/Test-Aufteilungen, Kreuzvalidierung oder externe Validierung und berichten Sie Kennwerte, die zum Outcome und zur Klassenbalance passen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "Flexible Modelle können Rauschen lernen. Begrenzen Sie die Baumtiefe, schneiden Sie den Baum zurück, optimieren Sie Hyperparameter oder nutzen Sie Validierungsdaten, um zu prüfen, ob die Leistung über die Trainingsstichprobe hinaus generalisiert.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.inspect_class_distribution",
        "label": "Inspect class distribution",
        "detail": "Die Modellfamilie sollte zur Skala des Outcomes und zum datenerzeugenden Prozess passen, etwa Gaussian für kontinuierliche Outcomes, Binomial/Logit für binäre Outcomes, Poisson oder Negativ-Binomial für Zähldaten und kumulative Links für ordinale Outcomes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeRegression": [
      {
        "id": "decisionTreeRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden. Verwenden Sie Train/Test-Aufteilungen, Kreuzvalidierung oder externe Validierung und berichten Sie Kennwerte, die zum Outcome und zur Klassenbalance passen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "Flexible Modelle können Rauschen lernen. Begrenzen Sie die Baumtiefe, schneiden Sie den Baum zurück, optimieren Sie Hyperparameter oder nutzen Sie Validierungsdaten, um zu prüfen, ob die Leistung über die Trainingsstichprobe hinaus generalisiert.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.predictors_are_meaningfully_coded",
        "label": "Predictors are meaningfully coded",
        "detail": "Diese Voraussetzung sollte für Decision tree regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "discriminantAnalysis": [
      {
        "id": "discriminantAnalysis.nominal_dependent_variable_with_known_groups",
        "label": "Nominal dependent variable with known groups",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.interval_scaled_independent_variables",
        "label": "Interval-scaled independent variables",
        "detail": "Für Discriminant analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.similar_covariance_matrices",
        "label": "Similar covariance matrices",
        "detail": "Die Gruppen sollten für die abhängigen Variablen oder Prädiktoren weitgehend ähnliche Kovarianzmatrizen aufweisen. Große Unterschiede können multivariate Tests oder Diskriminanzfunktionen instabil machen, insbesondere bei kleinen oder ungleichen Gruppengrößen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.adequate_group_sizes",
        "label": "Adequate group sizes",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von groups, predictors, parameters, events, clusters, and studies statt nur das gesamte N.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaEffectSizeAnalysis": [
      {
        "id": "metaEffectSizeAnalysis.effect_size_available_for_each_study",
        "label": "Effect size available for each study",
        "detail": "Jede Studie sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern. Prüfen Sie Codierungsrichtung, Skala, Transformation und ob alle Studien dasselbe Effektgrößenmaß verwenden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.variance_or_standard_error_available_for_each_effect_size",
        "label": "Variance or standard error available for each effect size",
        "detail": "Jede Studie sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern. Prüfen Sie Codierungsrichtung, Skala, Transformation und ob alle Studien dasselbe Effektgrößenmaß verwenden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Für Effect-size meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.effect_size_type",
        "label": "Effect size type for each study",
        "detail": "Diese Voraussetzung sollte für Effect-size meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Die Daten enthalten Gruppierungsstrukturen, etwa wiederholte Messungen innerhalb von Personen oder Athletinnen und Athleten innerhalb von Teams. Die Random-Effects-Struktur sollte zur Designfrage passen und durch genügend Cluster sowie Beobachtungen pro Cluster gestützt sein.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "varianceFTest": [
      {
        "id": "varianceFTest.two_independent_samples",
        "label": "Two independent samples",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.normality_in_both_populations",
        "label": "Normality in both populations",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.sensitive_to_outliers_and_skew",
        "label": "Sensitive to outliers and skew",
        "detail": "Einige extreme oder einflussreiche Beobachtungen sollten das Ergebnis nicht dominieren. Prüfen Sie Rohdaten, Streudiagramme, standardisierte Residuen, Leverage und Einflussdiagnostiken, bevor Sie entscheiden, ob Werte Fehler, legitime Extreme oder Gründe für robuste Methoden sind.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "factorAnalysis": [
      {
        "id": "factorAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Diese Voraussetzung sollte für Factor analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von predictors, or parameters statt nur das gesamte N.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.interpretable_factor_structure",
        "label": "Interpretable factor structure",
        "detail": "Diese Voraussetzung sollte für Factor analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.no_a_priori_hypothesis_about_the_relationships_among_the_f",
        "label": "No a priori hypothesis about the relationships among the factors",
        "detail": "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden. Dokumentieren Sie, warum Pfade, Faktoren, Kovariaten, Subgruppen oder erwartete Anteile gewählt wurden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayAnova": [
      {
        "id": "twoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.normality_within_cells",
        "label": "Normality within cells",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "Gruppen oder vorhergesagte Werte sollten ungefähr vergleichbare Streuung zeigen. Nutzen Sie Residuenplots, Gruppenstandardabweichungen, Levene-ähnliche Prüfungen oder robuste/Welch-Alternativen, wenn sich die Streuung stark unterscheidet.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayRepeatedAnova": [
      {
        "id": "twoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Für Factorial repeated-measures ANOVA (two or more factors) sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Bei Messwiederholungsfaktoren mit mehr als zwei Stufen sollten die Varianzen der paarweisen Differenzen ähnlich sein. Wenn dies zweifelhaft ist, berichten Sie eine Korrektur wie Greenhouse-Geisser oder verwenden Sie einen Mixed-Model-Ansatz.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.balanced_assignment_of_time_points_or_conditions",
        "label": "Balanced assignment of time points or conditions",
        "detail": "Diese Voraussetzung sollte für Factorial repeated-measures ANOVA (two or more factors) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fisher": [
      {
        "id": "fisher.dichotomous_categorical_variables",
        "label": "Dichotomous categorical variables",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.small_expected_counts",
        "label": "Small expected counts",
        "detail": "Die erwarteten Häufigkeiten sollten groß genug sein, damit asymptotische Approximationen funktionieren. Wenn viele erwartete Zellen klein sind, fassen Sie inhaltlich ähnliche Kategorien zusammen, verwenden Sie falls möglich einen exakten Test oder wählen Sie ein Modell für dünn besetzte Zähldaten.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fixedEffectMetaAnalysis": [
      {
        "id": "fixedEffectMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.common_effect_size_and_standard_error_variance_available",
        "label": "Common effect size and standard error/variance available",
        "detail": "Jede Studie sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern. Prüfen Sie Codierungsrichtung, Skala, Transformation und ob alle Studien dasselbe Effektgrößenmaß verwenden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.studies_are_substantively_very_similar",
        "label": "Studies are substantively very similar",
        "detail": "Für Fixed-effect meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.heterogeneity_is_low",
        "label": "Heterogeneity is low",
        "detail": "Diese Voraussetzung sollte für Fixed-effect meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "friedman": [
      {
        "id": "friedman.several_paired_measurements",
        "label": "Several paired measurements",
        "detail": "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein. Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.same_cases_in_all_conditions",
        "label": "Same cases in all conditions",
        "detail": "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein. Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "generalizedLinearMixedModel": [
      {
        "id": "generalizedLinearMixedModel.dichotomous_categorical_or_count_dependent_variable",
        "label": "Dichotomous, categorical, or count dependent variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.appropriate_link_function_and_distribution",
        "label": "Appropriate link function and distribution",
        "detail": "Die Modellfamilie sollte zur Skala des Outcomes und zum datenerzeugenden Prozess passen, etwa Gaussian für kontinuierliche Outcomes, Binomial/Logit für binäre Outcomes, Poisson oder Negativ-Binomial für Zähldaten und kumulative Links für ordinale Outcomes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.clusters_or_persons_entered_as_random_effects",
        "label": "Clusters or persons entered as random effects",
        "detail": "Die Daten enthalten Gruppierungsstrukturen, etwa wiederholte Messungen innerhalb von Personen oder Athletinnen und Athleten innerhalb von Teams. Die Random-Effects-Struktur sollte zur Designfrage passen und durch genügend Cluster sowie Beobachtungen pro Cluster gestützt sein.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.adequate_events_per_parameter",
        "label": "Adequate events per parameter",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von groups, predictors and parameters statt nur das gesamte N.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "independentT": [
      {
        "id": "independentT.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.approximate_normality",
        "label": "Approximate normality",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Normalitätstests, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.equal_variances_or_welch_correction",
        "label": "Equal variances or Welch correction",
        "detail": "Gruppen oder vorhergesagte Werte sollten ungefähr vergleichbare Streuung zeigen. Nutzen Sie Residuenplots, Gruppenstandardabweichungen, Levene-ähnliche Prüfungen oder robuste/Welch-Alternativen, wenn sich die Streuung stark unterscheidet.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnClassifier": [
      {
        "id": "knnClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Bringen Sie Prädiktoren vor distanz- oder komponentenbasierten Methoden auf vergleichbare Skalen, wenn sich die Einheiten unterscheiden. Andernfalls können Variablen mit größeren numerischen Wertebereichen das Ergebnis dominieren.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "Das gewählte Distanz- oder Ähnlichkeitsmaß sollte zur Bedeutung der Variablen und zur Forschungsfrage passen. Prüfen Sie, ob euklidische, Manhattan-, korrelationsbasierte oder andere Distanzen am besten begründbar sind.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.choose_k_and_weighting_using_validation",
        "label": "Choose k and weighting using validation",
        "detail": "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden. Verwenden Sie Train/Test-Aufteilungen, Kreuzvalidierung oder externe Validierung und berichten Sie Kennwerte, die zum Outcome und zur Klassenbalance passen.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnRegression": [
      {
        "id": "knnRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Bringen Sie Prädiktoren vor distanz- oder komponentenbasierten Methoden auf vergleichbare Skalen, wenn sich die Einheiten unterscheiden. Andernfalls können Variablen mit größeren numerischen Wertebereichen das Ergebnis dominieren.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "Das gewählte Distanz- oder Ähnlichkeitsmaß sollte zur Bedeutung der Variablen und zur Forschungsfrage passen. Prüfen Sie, ob euklidische, Manhattan-, korrelationsbasierte oder andere Distanzen am besten begründbar sind.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.choose_k_using_validation",
        "label": "Choose k using validation",
        "detail": "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden. Verwenden Sie Train/Test-Aufteilungen, Kreuzvalidierung oder externe Validierung und berichten Sie Kennwerte, die zum Outcome und zur Klassenbalance passen.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kendall": [
      {
        "id": "kendall.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "Wenn eine Variable zunimmt, sollte die andere tendenziell konsistent steigen oder fallen, auch wenn die Beziehung nicht linear ist. Ein Streudiagramm oder Rangplot ist meist die klarste Prüfung.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.useful_with_ties_or_smaller_samples",
        "label": "Useful with ties or smaller samples",
        "detail": "Für Kendall's rank correlation sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kruskalWallis": [
      {
        "id": "kruskalWallis.several_independent_groups",
        "label": "Several independent groups",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearMixedModel": [
      {
        "id": "linearMixedModel.metric_dependent_variable",
        "label": "Metric dependent variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.observations_nested_within_people_teams_or_measurement_occ",
        "label": "Observations nested within people, teams, or measurement occasions",
        "detail": "Die Daten enthalten Gruppierungsstrukturen, etwa wiederholte Messungen innerhalb von Personen oder Athletinnen und Athleten innerhalb von Teams. Die Random-Effects-Struktur sollte zur Designfrage passen und durch genügend Cluster sowie Beobachtungen pro Cluster gestützt sein.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "Die Daten enthalten Gruppierungsstrukturen, etwa wiederholte Messungen innerhalb von Personen oder Athletinnen und Athleten innerhalb von Teams. Die Random-Effects-Struktur sollte zur Designfrage passen und durch genügend Cluster sowie Beobachtungen pro Cluster gestützt sein.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.check_residual_diagnostics_and_variance_structure",
        "label": "Check residual diagnostics and variance structure",
        "detail": "Diese Voraussetzung sollte für Linear mixed model vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearRegression": [
      {
        "id": "linearRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.linear_relationships",
        "label": "Linear relationships",
        "detail": "Der Zusammenhang sollte auf der Modellskala angemessen durch eine lineare Beziehung beschrieben werden. Streudiagramme, partielle Residuenplots und Plots von vorhergesagten Werten gegen Residuen helfen, Krümmungen oder Schwellenmuster zu erkennen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.independent_residuals",
        "label": "Independent residuals",
        "detail": "Diese Voraussetzung sollte für Linear regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.homoscedasticity_and_residual_diagnostics",
        "label": "Homoscedasticity and residual diagnostics",
        "detail": "Gruppen oder vorhergesagte Werte sollten ungefähr vergleichbare Streuung zeigen. Nutzen Sie Residuenplots, Gruppenstandardabweichungen, Levene-ähnliche Prüfungen oder robuste/Welch-Alternativen, wenn sich die Streuung stark unterscheidet.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.prediction_or_association_not_causality_by_itself",
        "label": "Prediction or association, not causality by itself",
        "detail": "Das statistische Modell allein belegt keine Kausalität. Eine kausale Interpretation erfordert Designunterstützung wie Randomisierung, zeitliche Reihenfolge, starke Theorie, sorgfältige Kontrolle von Confoundern und Sensitivitätsanalysen.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logLinearModel": [
      {
        "id": "logLinearModel.several_nominal_variables",
        "label": "Several nominal variables",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.frequency_data_in_a_contingency_table",
        "label": "Frequency data in a contingency table",
        "detail": "Für Log-linear model sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Die erwarteten Häufigkeiten sollten groß genug sein, damit asymptotische Approximationen funktionieren. Wenn viele erwartete Zellen klein sind, fassen Sie inhaltlich ähnliche Kategorien zusammen, verwenden Sie falls möglich einen exakten Test oder wählen Sie ein Modell für dünn besetzte Zähldaten.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mancova": [
      {
        "id": "mancova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Diese Voraussetzung sollte für MANCOVA vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.linear_relation_between_covariates_and_dependent_variables",
        "label": "Linear relation between covariates and dependent variables",
        "detail": "Der Zusammenhang sollte auf der Modellskala angemessen durch eine lineare Beziehung beschrieben werden. Streudiagramme, partielle Residuenplots und Plots von vorhergesagten Werten gegen Residuen helfen, Krümmungen oder Schwellenmuster zu erkennen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "Die Beziehung zwischen jeder Kovariate und der abhängigen Variable sollte über Gruppen hinweg ähnlich sein. Prüfen Sie Kovariate-mal-Gruppe-Interaktionen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.multivariate_normality_and_homogeneity_of_covariance_matri",
        "label": "Multivariate normality and homogeneity of covariance matrices",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mannWhitney": [
      {
        "id": "mannWhitney.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.similar_distribution_shapes_for_location_interpretation",
        "label": "Similar distribution shapes for location interpretation",
        "detail": "Die Modellfamilie sollte zur Skala des Outcomes und zum datenerzeugenden Prozess passen, etwa kumulative Links für ordinale Outcomes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "manova": [
      {
        "id": "manova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten. Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.homogeneity_of_covariance_matrices",
        "label": "Homogeneity of covariance matrices",
        "detail": "Die Gruppen sollten für die abhängigen Variablen oder Prädiktoren weitgehend ähnliche Kovarianzmatrizen aufweisen. Große Unterschiede können multivariate Tests oder Diskriminanzfunktionen instabil machen, insbesondere bei kleinen oder ungleichen Gruppengrößen. Diese Voraussetzung sollte für MANOVA vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.meaningful_correlations_among_dependent_variables",
        "label": "Meaningful correlations among dependent variables",
        "detail": "Diese Voraussetzung sollte für MANOVA vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mcnemar": [
      {
        "id": "mcnemar.two_paired_dichotomous_measurements",
        "label": "Two paired dichotomous measurements",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.paired_data",
        "label": "Paired data",
        "detail": "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein. Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.discordant_pairs_are_relevant",
        "label": "Discordant pairs are relevant",
        "detail": "Für McNemar test sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird. Diese Voraussetzung sollte für McNemar test vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaMeanDifferenceAnalysis": [
      {
        "id": "metaMeanDifferenceAnalysis.n_m_and_sd_available_for_each_group",
        "label": "n, M, and SD available for each group",
        "detail": "Für Mean-difference meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.groups_and_measurement_scales_are_comparable",
        "label": "Groups and measurement scales are comparable",
        "detail": "Für Mean-difference meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung und der deskriptiven Statistiken geprüft werden, bevor das Ergebnis verwendet wird. Diese Voraussetzung sollte für Mean-difference meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Diese Voraussetzung sollte für Mean-difference meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects (depeding on the heterogenity expected), moderator analyses, and publication-bias checks in the model options",
        "detail": "Die Daten enthalten Gruppierungsstrukturen, etwa wiederholte Messungen innerhalb von Personen oder Athletinnen und Athleten innerhalb von Teams. Die Random-Effects-Struktur sollte zur Designfrage passen und durch genügend Cluster sowie Beobachtungen pro Cluster gestützt sein.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "majorMetaAnalysis": [
      {
        "id": "majorMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Diese Voraussetzung sollte für Meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.input_data_match_the_selected_option",
        "label": "Input data match the selected option",
        "detail": "Für Meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.justify_fixed_vs_random_effects_from_study_design_and_hete",
        "label": "Justify fixed vs. random effects from study design and heterogeneity",
        "detail": "Diese Voraussetzung sollte für Meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.report_moderator_analyses_and_publication_bias_checks_as_o",
        "label": "Report moderator analyses and publication-bias checks as optional follow-up analyses",
        "detail": "Diese Voraussetzung sollte für Meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaRegression": [
      {
        "id": "metaRegression.enough_studies",
        "label": "Enough studies",
        "detail": "Diese Voraussetzung sollte für Meta-regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.moderator_measured_at_study_level",
        "label": "Moderator measured at study level",
        "detail": "Für Meta-regression sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.same_effect_metric",
        "label": "Same effect metric",
        "detail": "Für Meta-regression sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.ecological_interpretation_considered",
        "label": "Ecological interpretation considered",
        "detail": "Diese Voraussetzung sollte für Meta-regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multidimensionalScaling": [
      {
        "id": "multidimensionalScaling.distance_or_dissimilarity_matrix",
        "label": "Distance or dissimilarity matrix",
        "detail": "Das gewählte Distanz- oder Ähnlichkeitsmaß sollte zur Bedeutung der Variablen und zur Forschungsfrage passen. Prüfen Sie, ob euklidische, Manhattan-, korrelationsbasierte oder andere Distanzen am besten begründbar sind. Diese Voraussetzung sollte für Multidimensional scaling vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.people_or_objects_are_comparable",
        "label": "People or objects are comparable",
        "detail": "Diese Voraussetzung sollte für Multidimensional scaling vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.number_of_dimensions_chosen_using_stress_and_interpretabil",
        "label": "Number of dimensions chosen using stress and interpretability",
        "detail": "Diese Voraussetzung sollte für Multidimensional scaling vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.primarily_an_exploratory_representation",
        "label": "Primarily an exploratory representation",
        "detail": "Diese Voraussetzung sollte für Multidimensional scaling vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multinomialRegression": [
      {
        "id": "multinomialRegression.multicategory_categorical_outcome",
        "label": "Multicategory categorical outcome",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.Independence of Irrelevant Alternatives.",
        "label": "Independence of Irrelevant Alternatives (IIA)",
        "detail": "Diese Voraussetzung sollte für Multinomial logistic regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.no_Multicolinearity",
        "label": "No Multicollinearity",
        "detail": "Diese Voraussetzung sollte für Multinomial logistic regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.meaningful_reference_category",
        "label": "Meaningful reference category",
        "detail": "Diese Voraussetzung sollte für Multinomial logistic regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "naiveBayes": [
      {
        "id": "naiveBayes.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.predictors_are_treated_as_approximately_conditionally_inde",
        "label": "Predictors are treated as approximately conditionally independent",
        "detail": "Für Naive Bayes classifier sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden. Diese Voraussetzung sollte für Naive Bayes classifier vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.suitable_distribution_for_metric_features",
        "label": "Suitable distribution for metric features",
        "detail": "Die Modellfamilie sollte zur Skala des Outcomes und zum datenerzeugenden Prozess passen, etwa Gaussian für kontinuierliche Outcomes. Diese Voraussetzung sollte für Naive Bayes classifier vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.check_predicted_probabilities_with_validation_data",
        "label": "Check predicted probabilities with validation data",
        "detail": "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden. Diese Voraussetzung sollte für Naive Bayes classifier vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "networkAnalysis": [
      {
        "id": "networkAnalysis.several_metric_or_ordinal_variables",
        "label": "Several metric or ordinal variables",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.edges_are_interpreted_as_conditional_associations",
        "label": "Edges are interpreted as conditional associations",
        "detail": "Diese Voraussetzung sollte für Network analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Diese Voraussetzung sollte für Network analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.network_stability_and_robustness_should_be_checked",
        "label": "Network stability and robustness should be checked",
        "detail": "Für Network analysis sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden. Diese Voraussetzung sollte für Network analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.no_causal_interpretation_without_a_suitable_design",
        "label": "No causal interpretation without a suitable design",
        "detail": "Das statistische Modell allein belegt keine Kausalität. Eine kausale Interpretation erfordert Designunterstützung wie Randomisierung, zeitliche Reihenfolge, starke Theorie, sorgfältige Kontrolle von Confoundern und Sensitivitätsanalysen.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayAnova": [
      {
        "id": "nonparametricTwoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Für Nonparametric factorial ANOVA (ART) sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayRepeatedAnova": [
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Für Nonparametric factorial repeated-measures ANOVA (ART) sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.same_cases_in_paired_conditions",
        "label": "Same cases in paired conditions",
        "detail": "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein. Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Diese Voraussetzung sollte für Nonparametric factorial repeated-measures ANOVA (ART) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaOddsRatioAnalysis": [
      {
        "id": "metaOddsRatioAnalysis.several_independent_studies",
        "label": "Several independent studies",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Diese Voraussetzung sollte für Odds-ratio meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.events_and_total_sample_size_available_for_each_group",
        "label": "Events and total sample size available for each group",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von groups, predictors, parameters, events, clusters, and studies statt nur das gesamte N. Diese Voraussetzung sollte für Odds-ratio meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Für Odds-ratio meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden. Diese Voraussetzung sollte für Odds-ratio meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed or random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Diese Voraussetzung sollte für Odds-ratio meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleT": [
      {
        "id": "oneSampleT.metric_variable",
        "label": "Metric variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte sinnvoll interpretierbar sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.approximate_normal_distribution",
        "label": "Approximate normal distribution",
        "detail": "Die relevante Verteilung sollte annähernd normal sein.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleWilcoxon": [
      {
        "id": "oneSampleWilcoxon.at_least_ordinal_data",
        "label": "At least ordinal data",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.symmetric_differences_helpful",
        "label": "Symmetric differences helpful",
        "detail": "Für One-sample Wilcoxon signed-rank test sollte diese Voraussetzung anhand diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird. Diese Voraussetzung sollte für One-sample Wilcoxon signed-rank test vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleZ": [
      {
        "id": "oneSampleZ.metric_variable",
        "label": "Metric variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte nicht bestimmen oder duplizieren.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.known_population_standard_deviation_or_variance",
        "label": "Known population standard deviation or variance",
        "detail": "Jede Gruppe sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.normal_population_or_sufficiently_large_sample",
        "label": "Normal population or sufficiently large sample",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen. Prüfen Sie Histogramme, Q-Q-Plots und Ausreißer.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "anova": [
      {
        "id": "anova.independent_groups",
        "label": "Independent groups",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte sinnvoll interpretierbar sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.normality_within_groups",
        "label": "Normality within groups",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen. Prüfen Sie Histogramme, Q-Q-Plots und Ausreißer. Führen Sie einen Normalitätstest durch.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "Gruppen oder vorhergesagte Werte sollten ungefähr vergleichbare Streuung zeigen. Nutzen Sie Residuenplots, Gruppenstandardabweichungen, Levene-ähnliche Prüfungen oder robuste/Welch-Alternativen, wenn sich die Streuung stark unterscheidet.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "ordinalMixedModel": [
      {
        "id": "ordinalMixedModel.ordinal_dependent_variable",
        "label": "Ordinal dependent variable",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.repeated_or_clustered_observations",
        "label": "Repeated or clustered observations",
        "detail": "Die Daten enthalten Gruppierungsstrukturen, etwa wiederholte Messungen innerhalb von Personen oder Athletinnen und Athleten innerhalb von Teams. Diese Voraussetzung sollte für Ordinal mixed model vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.check_proportional_odds_assumption",
        "label": "Check proportional-odds assumption",
        "detail": "Diese Voraussetzung sollte für Ordinal mixed model vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "Diese Voraussetzung sollte für Ordinal mixed model vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden. Die Random-Effects-Struktur sollte zur Designfrage passen und durch genügend Cluster sowie Beobachtungen pro Cluster gestützt sein.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pairedT": [
      {
        "id": "pairedT.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein. Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.metric_difference_scores",
        "label": "Metric difference scores",
        "detail": "Diese Voraussetzung sollte für Paired-samples t-test vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.approximate_normality_of_differences",
        "label": "Approximate normality of differences",
        "detail": "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen. Diese Voraussetzung sollte für Paired-samples t-test vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pathAnalysis": [
      {
        "id": "pathAnalysis.all_variables_are_observed_measurable",
        "label": "All variables are observed/measurable",
        "detail": "Für Path analysis (mediation) sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden. Diese Voraussetzung sollte für Path analysis (mediation) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.theoretically_justified_path_direction",
        "label": "Theoretically justified path direction",
        "detail": "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden. Dokumentieren Sie, warum paths gewählt wurden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.linear_relationships",
        "label": "Linear relationships",
        "detail": "Der Zusammenhang sollte auf der Modellskala angemessen durch eine lineare Beziehung beschrieben werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Diese Voraussetzung sollte für Path analysis (mediation) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.causal_interpretation_only_with_a_suitable_design",
        "label": "Causal interpretation only with a suitable design",
        "detail": "Das statistische Modell allein belegt keine Kausalität. Eine kausale Interpretation erfordert Designunterstützung wie Randomisierung, zeitliche Reihenfolge, starke Theorie, sorgfältige Kontrolle von Confoundern und Sensitivitätsanalysen.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareGoodness": [
      {
        "id": "chiSquareGoodness.multilevel_categorical_variable",
        "label": "Multilevel categorical variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.expected_frequencies_or_proportions_are_defined",
        "label": "Expected frequencies or proportions are defined",
        "detail": "Die erwarteten Häufigkeiten sollten groß genug sein, damit asymptotische Approximationen funktionieren. Wenn viele erwartete Zellen klein sind, fassen Sie inhaltlich ähnliche Kategorien zusammen oder verwenden Sie falls möglich einen exakten Test.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.sufficient_expected_counts_per_category",
        "label": "Sufficient expected counts per category",
        "detail": "Wenn viele erwartete Zellen klein sind, fassen Sie inhaltlich ähnliche Kategorien zusammen, verwenden Sie falls möglich einen exakten Test oder wählen Sie ein Modell für dünn besetzte Zähldaten.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pearson": [
      {
        "id": "pearson.metric_variables",
        "label": "Metric variables",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.linear_relationship",
        "label": "Linear relationship",
        "detail": "Der Zusammenhang sollte auf der Modellskala angemessen durch eine lineare Beziehung beschrieben werden. Streudiagramme, partielle Residuenplots und Plots von vorhergesagten Werten gegen Residuen helfen, Krümmungen oder Schwellenmuster zu erkennen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.no_dominant_outliers",
        "label": "No dominant outliers",
        "detail": "Einige extreme oder einflussreiche Beobachtungen sollten das Ergebnis nicht dominieren. Prüfen Sie Rohdaten, Streudiagramme, standardisierte Residuen, Leverage und Einflussdiagnostiken, bevor Sie entscheiden, ob Werte Fehler, legitime Extreme oder Gründe für robuste Methoden sind.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.for_inference_approximate_bivariate_normality",
        "label": "For inference: approximate bivariate normality",
        "detail": "Diese Voraussetzung sollte für Pearson correlation vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "principalComponentAnalysis": [
      {
        "id": "principalComponentAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Diese Voraussetzung sollte für Principal component analysis (PCA) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.standardise_variables_on_different_scales",
        "label": "Standardise variables on different scales",
        "detail": "Bringen Sie Prädiktoren vor distanz- oder komponentenbasierten Methoden auf vergleichbare Skalen, wenn sich die Einheiten unterscheiden. Andernfalls können Variablen mit größeren numerischen Wertebereichen das Ergebnis dominieren.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.common_variance",
        "label": "Common variance among variables",
        "detail": "Diese Voraussetzung sollte für Principal component analysis (PCA) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.choose_components_by_explained_variance_and_interpretabili",
        "label": "Choose components by explained variance and interpretability",
        "detail": "Jede Studie sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern. Prüfen Sie Codierungsrichtung, Skala, Transformation und ob alle Studien dasselbe Effektgrößenmaß verwenden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaProportionAnalysis": [
      {
        "id": "metaProportionAnalysis.event_frequency_count_available_for_each_study",
        "label": "Event frequency/count available for each study",
        "detail": "Für Proportion meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden. Diese Voraussetzung sollte für Proportion meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.total_sample_size_available_for_each_study",
        "label": "Total sample size available for each study",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von groups, and parameters statt nur das gesamte N.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added.",
        "detail": "Für Proportion meta-analysis sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung und der deskriptiven Statistiken geprüft werden, bevor das Ergebnis verwendet wird. Diese Voraussetzung sollte für Proportion meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options.",
        "detail": "Diese Voraussetzung sollte für Proportion meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestClassifier": [
      {
        "id": "randomForestClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein. Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von predictors, parameters, events, clusters statt nur das gesamte N. Diese Voraussetzung sollte für Random forest classifier vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.validation_on_unseen_data",
        "label": "Validation on unseen data",
        "detail": "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden. Verwenden Sie Train/Test-Aufteilungen, Kreuzvalidierung oder externe Validierung und berichten Sie Kennwerte, die zum Outcome und zur Klassenbalance passen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.handle_class_imbalance",
        "label": "Handle class imbalance",
        "detail": "Diese Voraussetzung sollte für Random forest classifier vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestRegression": [
      {
        "id": "randomForestRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.enough_cases_for_training_and_validation",
        "label": "Enough cases for training and validation",
        "detail": "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden. Verwenden Sie Train/Test-Aufteilungen, Kreuzvalidierung oder externe Validierung und berichten Sie Kennwerte, die zum Outcome und zur Klassenbalance passen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.tune_number_of_trees_and_variables_per_split",
        "label": "Tune number of trees and variables per split",
        "detail": "Diese Voraussetzung sollte für Random forest regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.interpret_with_variable_importance_or_partial_effects",
        "label": "Interpret with variable importance or partial effects",
        "detail": "Diese Voraussetzung sollte für Random forest regression vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomEffectsMetaAnalysis": [
      {
        "id": "randomEffectsMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Diese Voraussetzung sollte für Random-effects meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.effect_size_and_precision_measure_available",
        "label": "Effect size and precision measure available",
        "detail": "Jede Studie sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern. Prüfen Sie Codierungsrichtung, Skala, Transformation und ob alle Studien dasselbe Effektgrößenmaß verwenden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.between_study_variance_is_estimated",
        "label": "Between-study variance is estimated",
        "detail": "Jede Studie sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.heterogeneity_is_reported_with_tau2_i2",
        "label": "Heterogeneity is reported with tau2/I2",
        "detail": "Diese Voraussetzung sollte für Random-effects meta-analysis vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "repeatedAnova": [
      {
        "id": "repeatedAnova.repeated_measurements",
        "label": "Repeated measurements",
        "detail": "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein. Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind. Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Bei Messwiederholungsfaktoren mit mehr als zwei Stufen sollten die Varianzen der paarweisen Differenzen ähnlich sein. Wenn dies zweifelhaft ist, berichten Sie eine Korrektur wie Greenhouse-Geisser oder verwenden Sie einen Mixed-Model-Ansatz.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "spearman": [
      {
        "id": "spearman.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "Wenn eine Variable zunimmt, sollte die andere tendenziell konsistent steigen oder fallen, auch wenn die Beziehung nicht linear ist. Ein Streudiagramm oder Rangplot ist meist die klarste Prüfung.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.independent_observations",
        "label": "Independent observations",
        "detail": "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren. Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "structuralEquationModeling": [
      {
        "id": "structuralEquationModeling.latent_constructs_measured_by_multiple_indicators",
        "label": "Latent constructs measured by multiple indicators",
        "detail": "Für Structural equation modeling (SEM) sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden, bevor das Ergebnis verwendet wird. Diese Voraussetzung sollte für Structural equation modeling (SEM) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.theoretically_justified_measurement_and_structural_model",
        "label": "Theoretically justified measurement and structural model",
        "detail": "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden. Dokumentieren Sie, warum Pfade, Faktoren, Kovariaten, Subgruppen oder erwartete Anteile gewählt wurden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann. Berücksichtigen Sie die Anzahl von groups, predictors, parameters, events, clusters, and studies statt nur das gesamte N. Diese Voraussetzung sollte für Structural equation modeling (SEM) vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.model_fit_and_alternative_models_should_be_evaluated",
        "label": "Model fit and alternative models should be evaluated",
        "detail": "Bewerten Sie globale Modellpassung, lokale Residuen, Parameterschätzungen und theoretisch plausible Alternativen. Eine statistisch akzeptable Modellpassung macht das Modell allein noch nicht inhaltlich korrekt.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "wilcoxon": [
      {
        "id": "wilcoxon.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein. Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "wilcoxon.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen. Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ]
  },
  "fr": {
    "ancova": [
      {
        "id": "ancova.one_metric_dependent_variable",
        "label": "One metric dependent variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Cette condition doit être vérifiée pour ANCOVA avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.linear_relation_between_covariates_and_the_dependent_varia",
        "label": "Linear relation between covariates and the dependent variable",
        "detail": "L'association doit être correctement décrite par une relation linéaire à l'échelle du modèle. Les nuages de points, les graphiques des résidus partiels et les graphiques ajusté-versus-résidus aident à détecter des courbures ou des effets de seuil.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "La relation entre chaque covariable et la variable dépendante doit être similaire entre les groupes. Vérifiez les interactions covariable par groupe.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.normally_distributed_residuals_and_homogeneity_of_variance",
        "label": "Normally distributed residuals and homogeneity of variance",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logisticRegression": [
      {
        "id": "logisticRegression.dichotomous_outcome_variable",
        "label": "Dichotomous outcome variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue et que les catégories de référence sont pertinentes lorsque les modèles les exigent.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.no_strong_multicollinearity",
        "label": "No strong multicollinearity",
        "detail": "Les prédicteurs ne doivent pas être presque redondants. Examinez les corrélations, les facteurs d'inflation de variance, les indices de condition ou les coefficients instables qui changent fortement lorsque d'autres prédicteurs sont ajoutés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.sufficient_number_of_events",
        "label": "Sufficient number of events",
        "detail": "Cette condition doit être vérifiée pour Binary logistic regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "binomialTest": [
      {
        "id": "binomialTest.two_level_categorical_variable",
        "label": "Two-level categorical variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue et que les catégories de référence sont pertinentes lorsque les modèles les exigent.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.theoretically_expected_proportion_is_defined",
        "label": "Theoretically expected proportion is defined",
        "detail": "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat. Documentez pourquoi paths, or expected proportions ont été choisis.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.fixed_number_of_trials_or_cases",
        "label": "Fixed number of trials or cases",
        "detail": "Cette condition doit être vérifiée pour Binomial test avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareVariance": [
      {
        "id": "chiSquareVariance.one_metric_variable",
        "label": "One metric variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.known_or_theoretically_justified_population_variance",
        "label": "Known or theoretically justified population variance",
        "detail": "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat. Cette condition doit être vérifiée pour Chi-square test for one variance avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.normality_in_the_population",
        "label": "Normality in the population",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareAssociation": [
      {
        "id": "chiSquareAssociation.categorical_variables",
        "label": "Categorical variables",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Les fréquences attendues doivent être suffisamment élevées pour que les approximations asymptotiques soient valables. Si de nombreuses cellules attendues sont petites, regroupez les catégories substantiellement similaires, utilisez un test exact lorsque c'est possible ou choisissez un modèle conçu pour les effectifs rares.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "clusterAnalysis": [
      {
        "id": "clusterAnalysis.features_describing_people_or_objects",
        "label": "Features describing people or objects",
        "detail": "Cette condition doit être vérifiée pour Cluster analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.appropriate_scaling_or_standardisation",
        "label": "Appropriate scaling or standardisation",
        "detail": "Placez les prédicteurs sur des échelles comparables avant les méthodes fondées sur les distances ou les composantes lorsque les unités diffèrent. Sinon, les variables avec de plus grandes étendues numériques peuvent dominer le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.meaningful_distance_or_similarity_measure",
        "label": "Meaningful distance or similarity measure",
        "detail": "La mesure de distance ou de similarité choisie doit correspondre au sens des variables et à la question de recherche. Vérifiez si les distances euclidiennes, de Manhattan, fondées sur la corrélation ou d'autres distances sont les plus défendables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.cluster_solution_is_substantively_interpretable",
        "label": "Cluster solution is substantively interpretable",
        "detail": "Cette condition doit être vérifiée pour Cluster analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "confirmatoryFactorAnalysis": [
      {
        "id": "confirmatoryFactorAnalysis.latent_constructs_are_predefined",
        "label": "Latent constructs are predefined",
        "detail": "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat. Documentez pourquoi paths and components ont été choisis.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.multiple_indicators_per_factor",
        "label": "Multiple indicators per factor",
        "detail": "Pour Confirmatory factor analysis (CFA), cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.the_item_factor_assignment_is_theoretically_justified",
        "label": "The item-factor assignment is theoretically justified",
        "detail": "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat. Documentez pourquoi the item ont été choisis.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.model_fit_and_local_misfit_should_be_evaluated",
        "label": "Model fit and local misfit should be evaluated",
        "detail": "Évaluez l'ajustement global, les résidus locaux, les estimations des paramètres et les alternatives théoriquement plausibles. Un ajustement statistiquement acceptable ne rend pas à lui seul le modèle substantiellement correct.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaCorrelationAnalysis": [
      {
        "id": "metaCorrelationAnalysis.correlation_and_sample_size_available_for_each_study",
        "label": "Correlation and sample size available for each study",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de groups, predictors, parameters, and studies plutôt que du N total seulement.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.studies_measure_comparable_constructs",
        "label": "Studies measure comparable constructs",
        "detail": "Pour Correlation-coefficient meta-analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Pour Correlation-coefficient meta-analysis, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Cette condition doit être vérifiée pour Correlation-coefficient meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeClassifier": [
      {
        "id": "decisionTreeClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster. Utilisez des séparations entraînement/test, la validation croisée ou une validation externe et rapportez des métriques adaptées au critère et à l'équilibre des classes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "Les modèles flexibles peuvent apprendre le bruit. Limitez la profondeur de l'arbre, élaguez, ajustez les hyperparamètres ou utilisez des données de validation pour vérifier si la performance se généralise au-delà de l'échantillon d'entraînement.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.inspect_class_distribution",
        "label": "Inspect class distribution",
        "detail": "La famille de modèles doit correspondre à l'échelle du critère et au processus générateur des données, par exemple gaussienne pour les critères continus, binomiale/logit pour les critères binaires, Poisson ou binomiale négative pour les comptages et liens cumulatifs pour les critères ordinaux.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeRegression": [
      {
        "id": "decisionTreeRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster. Utilisez des séparations entraînement/test, la validation croisée ou une validation externe et rapportez des métriques adaptées au critère et à l'équilibre des classes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "Les modèles flexibles peuvent apprendre le bruit. Limitez la profondeur de l'arbre, élaguez, ajustez les hyperparamètres ou utilisez des données de validation pour vérifier si la performance se généralise au-delà de l'échantillon d'entraînement.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.predictors_are_meaningfully_coded",
        "label": "Predictors are meaningfully coded",
        "detail": "Cette condition doit être vérifiée pour Decision tree regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "discriminantAnalysis": [
      {
        "id": "discriminantAnalysis.nominal_dependent_variable_with_known_groups",
        "label": "Nominal dependent variable with known groups",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.interval_scaled_independent_variables",
        "label": "Interval-scaled independent variables",
        "detail": "Pour Discriminant analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.similar_covariance_matrices",
        "label": "Similar covariance matrices",
        "detail": "Les groupes doivent présenter des matrices de covariance globalement similaires entre les variables dépendantes ou les prédicteurs. De grandes différences peuvent rendre les tests multivariés ou les fonctions discriminantes instables, surtout avec des groupes petits ou de tailles inégales.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.adequate_group_sizes",
        "label": "Adequate group sizes",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de groups, predictors, parameters, events, clusters, and studies plutôt que du N total seulement.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaEffectSizeAnalysis": [
      {
        "id": "metaEffectSizeAnalysis.effect_size_available_for_each_study",
        "label": "Effect size available for each study",
        "detail": "Chaque étude doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude. Vérifiez le sens du codage, l'échelle, la transformation et si toutes les études utilisent la même métrique d'effet.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.variance_or_standard_error_available_for_each_effect_size",
        "label": "Variance or standard error available for each effect size",
        "detail": "Chaque étude doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude. Vérifiez le sens du codage, l'échelle, la transformation et si toutes les études utilisent la même métrique d'effet.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Pour Effect-size meta-analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.effect_size_type",
        "label": "Effect size type for each study",
        "detail": "Cette condition doit être vérifiée pour Effect-size meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Les données contiennent des structures de regroupement, comme des mesures répétées chez les participants ou des athlètes au sein d'équipes. La structure des effets aléatoires doit correspondre à la question de design et être soutenue par suffisamment de clusters et d'observations par cluster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "varianceFTest": [
      {
        "id": "varianceFTest.two_independent_samples",
        "label": "Two independent samples",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.normality_in_both_populations",
        "label": "Normality in both populations",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.sensitive_to_outliers_and_skew",
        "label": "Sensitive to outliers and skew",
        "detail": "Quelques observations extrêmes ou influentes ne doivent pas dominer le résultat. Examinez les données brutes, les nuages de points, les résidus standardisés, le levier et les diagnostics d'influence avant de décider si les valeurs sont des erreurs, des extrêmes légitimes ou des raisons d'utiliser des méthodes robustes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "factorAnalysis": [
      {
        "id": "factorAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Cette condition doit être vérifiée pour Factor analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de predictors, or parameters plutôt que du N total seulement.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.interpretable_factor_structure",
        "label": "Interpretable factor structure",
        "detail": "Cette condition doit être vérifiée pour Factor analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.no_a_priori_hypothesis_about_the_relationships_among_the_f",
        "label": "No a priori hypothesis about the relationships among the factors",
        "detail": "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat. Documentez pourquoi les chemins, facteurs, covariables, sous-groupes ou proportions attendues ont été choisis.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayAnova": [
      {
        "id": "twoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.normality_within_cells",
        "label": "Normality within cells",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "Les groupes ou les valeurs ajustées doivent présenter une variabilité approximativement comparable. Utilisez les graphiques des résidus, les écarts-types par groupe, des tests de type Levene ou des alternatives robustes/Welch lorsque la variabilité diffère fortement.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayRepeatedAnova": [
      {
        "id": "twoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Pour Factorial repeated-measures ANOVA (two or more factors), cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Pour les facteurs à mesures répétées comportant plus de deux niveaux, les variances des différences par paires doivent être similaires. Si cela est douteux, rapportez une correction comme Greenhouse-Geisser ou utilisez une approche de modèle mixte.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.balanced_assignment_of_time_points_or_conditions",
        "label": "Balanced assignment of time points or conditions",
        "detail": "Cette condition doit être vérifiée pour Factorial repeated-measures ANOVA (two or more factors) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fisher": [
      {
        "id": "fisher.dichotomous_categorical_variables",
        "label": "Dichotomous categorical variables",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.small_expected_counts",
        "label": "Small expected counts",
        "detail": "Les fréquences attendues doivent être suffisamment élevées pour que les approximations asymptotiques soient valables. Si de nombreuses cellules attendues sont petites, regroupez les catégories substantiellement similaires, utilisez un test exact lorsque c'est possible ou choisissez un modèle conçu pour les effectifs rares.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fixedEffectMetaAnalysis": [
      {
        "id": "fixedEffectMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.common_effect_size_and_standard_error_variance_available",
        "label": "Common effect size and standard error/variance available",
        "detail": "Chaque étude doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude. Vérifiez le sens du codage, l'échelle, la transformation et si toutes les études utilisent la même métrique d'effet.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.studies_are_substantively_very_similar",
        "label": "Studies are substantively very similar",
        "detail": "Pour Fixed-effect meta-analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.heterogeneity_is_low",
        "label": "Heterogeneity is low",
        "detail": "Cette condition doit être vérifiée pour Fixed-effect meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "friedman": [
      {
        "id": "friedman.several_paired_measurements",
        "label": "Several paired measurements",
        "detail": "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée. L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.same_cases_in_all_conditions",
        "label": "Same cases in all conditions",
        "detail": "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée. L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "generalizedLinearMixedModel": [
      {
        "id": "generalizedLinearMixedModel.dichotomous_categorical_or_count_dependent_variable",
        "label": "Dichotomous, categorical, or count dependent variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.appropriate_link_function_and_distribution",
        "label": "Appropriate link function and distribution",
        "detail": "La famille de modèles doit correspondre à l'échelle du critère et au processus générateur des données, par exemple gaussienne pour les critères continus, binomiale/logit pour les critères binaires, Poisson ou binomiale négative pour les comptages et liens cumulatifs pour les critères ordinaux.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.clusters_or_persons_entered_as_random_effects",
        "label": "Clusters or persons entered as random effects",
        "detail": "Les données contiennent des structures de regroupement, comme des mesures répétées chez les participants ou des athlètes au sein d'équipes. La structure des effets aléatoires doit correspondre à la question de design et être soutenue par suffisamment de clusters et d'observations par cluster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.adequate_events_per_parameter",
        "label": "Adequate events per parameter",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de groups, predictors and parameters plutôt que du N total seulement.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "independentT": [
      {
        "id": "independentT.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.approximate_normality",
        "label": "Approximate normality",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les tests de normalité, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.equal_variances_or_welch_correction",
        "label": "Equal variances or Welch correction",
        "detail": "Les groupes ou les valeurs ajustées doivent présenter une variabilité approximativement comparable. Utilisez les graphiques des résidus, les écarts-types par groupe, des tests de type Levene ou des alternatives robustes/Welch lorsque la variabilité diffère fortement.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnClassifier": [
      {
        "id": "knnClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Placez les prédicteurs sur des échelles comparables avant les méthodes fondées sur les distances ou les composantes lorsque les unités diffèrent. Sinon, les variables avec de plus grandes étendues numériques peuvent dominer le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "La mesure de distance ou de similarité choisie doit correspondre au sens des variables et à la question de recherche. Vérifiez si les distances euclidiennes, de Manhattan, fondées sur la corrélation ou d'autres distances sont les plus défendables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.choose_k_and_weighting_using_validation",
        "label": "Choose k and weighting using validation",
        "detail": "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster. Utilisez des séparations entraînement/test, la validation croisée ou une validation externe et rapportez des métriques adaptées au critère et à l'équilibre des classes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnRegression": [
      {
        "id": "knnRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Placez les prédicteurs sur des échelles comparables avant les méthodes fondées sur les distances ou les composantes lorsque les unités diffèrent. Sinon, les variables avec de plus grandes étendues numériques peuvent dominer le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "La mesure de distance ou de similarité choisie doit correspondre au sens des variables et à la question de recherche. Vérifiez si les distances euclidiennes, de Manhattan, fondées sur la corrélation ou d'autres distances sont les plus défendables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.choose_k_using_validation",
        "label": "Choose k using validation",
        "detail": "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster. Utilisez des séparations entraînement/test, la validation croisée ou une validation externe et rapportez des métriques adaptées au critère et à l'équilibre des classes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kendall": [
      {
        "id": "kendall.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "Lorsqu'une variable augmente, l'autre doit tendre à augmenter ou diminuer de manière cohérente, même si la relation n'est pas linéaire. Un nuage de points ou un graphique des rangs est généralement la vérification la plus claire.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.useful_with_ties_or_smaller_samples",
        "label": "Useful with ties or smaller samples",
        "detail": "Pour Kendall's rank correlation, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kruskalWallis": [
      {
        "id": "kruskalWallis.several_independent_groups",
        "label": "Several independent groups",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearMixedModel": [
      {
        "id": "linearMixedModel.metric_dependent_variable",
        "label": "Metric dependent variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.observations_nested_within_people_teams_or_measurement_occ",
        "label": "Observations nested within people, teams, or measurement occasions",
        "detail": "Les données contiennent des structures de regroupement, comme des mesures répétées chez les participants ou des athlètes au sein d'équipes. La structure des effets aléatoires doit correspondre à la question de design et être soutenue par suffisamment de clusters et d'observations par cluster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "Les données contiennent des structures de regroupement, comme des mesures répétées chez les participants ou des athlètes au sein d'équipes. La structure des effets aléatoires doit correspondre à la question de design et être soutenue par suffisamment de clusters et d'observations par cluster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.check_residual_diagnostics_and_variance_structure",
        "label": "Check residual diagnostics and variance structure",
        "detail": "Cette condition doit être vérifiée pour Linear mixed model avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearRegression": [
      {
        "id": "linearRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.linear_relationships",
        "label": "Linear relationships",
        "detail": "L'association doit être correctement décrite par une relation linéaire à l'échelle du modèle. Les nuages de points, les graphiques des résidus partiels et les graphiques ajusté-versus-résidus aident à détecter des courbures ou des effets de seuil.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.independent_residuals",
        "label": "Independent residuals",
        "detail": "Cette condition doit être vérifiée pour Linear regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.homoscedasticity_and_residual_diagnostics",
        "label": "Homoscedasticity and residual diagnostics",
        "detail": "Les groupes ou les valeurs ajustées doivent présenter une variabilité approximativement comparable. Utilisez les graphiques des résidus, les écarts-types par groupe, des tests de type Levene ou des alternatives robustes/Welch lorsque la variabilité diffère fortement.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.prediction_or_association_not_causality_by_itself",
        "label": "Prediction or association, not causality by itself",
        "detail": "Le modèle statistique seul n'établit pas la causalité. Une interprétation causale nécessite un appui du design, comme la randomisation, l'ordre temporel, une théorie solide, un contrôle rigoureux des facteurs de confusion et des analyses de sensibilité.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logLinearModel": [
      {
        "id": "logLinearModel.several_nominal_variables",
        "label": "Several nominal variables",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.frequency_data_in_a_contingency_table",
        "label": "Frequency data in a contingency table",
        "detail": "Pour Log-linear model, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Les fréquences attendues doivent être suffisamment élevées pour que les approximations asymptotiques soient valables. Si de nombreuses cellules attendues sont petites, regroupez les catégories substantiellement similaires, utilisez un test exact lorsque c'est possible ou choisissez un modèle conçu pour les effectifs rares.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mancova": [
      {
        "id": "mancova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Cette condition doit être vérifiée pour MANCOVA avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.linear_relation_between_covariates_and_dependent_variables",
        "label": "Linear relation between covariates and dependent variables",
        "detail": "L'association doit être correctement décrite par une relation linéaire à l'échelle du modèle. Les nuages de points, les graphiques des résidus partiels et les graphiques ajusté-versus-résidus aident à détecter des courbures ou des effets de seuil.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "La relation entre chaque covariable et la variable dépendante doit être similaire entre les groupes. Vérifiez les interactions covariable par groupe.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.multivariate_normality_and_homogeneity_of_covariance_matri",
        "label": "Multivariate normality and homogeneity of covariance matrices",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mannWhitney": [
      {
        "id": "mannWhitney.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.similar_distribution_shapes_for_location_interpretation",
        "label": "Similar distribution shapes for location interpretation",
        "detail": "La famille de modèles doit correspondre à l'échelle du critère et au processus générateur des données, par exemple des liens cumulatifs pour les critères ordinaux.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "manova": [
      {
        "id": "manova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées. Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.homogeneity_of_covariance_matrices",
        "label": "Homogeneity of covariance matrices",
        "detail": "Les groupes doivent présenter des matrices de covariance globalement similaires entre les variables dépendantes ou les prédicteurs. De grandes différences peuvent rendre les tests multivariés ou les fonctions discriminantes instables, surtout avec des groupes petits ou de tailles inégales. Cette condition doit être vérifiée pour MANOVA avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.meaningful_correlations_among_dependent_variables",
        "label": "Meaningful correlations among dependent variables",
        "detail": "Cette condition doit être vérifiée pour MANOVA avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mcnemar": [
      {
        "id": "mcnemar.two_paired_dichotomous_measurements",
        "label": "Two paired dichotomous measurements",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.paired_data",
        "label": "Paired data",
        "detail": "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée. L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.discordant_pairs_are_relevant",
        "label": "Discordant pairs are relevant",
        "detail": "Pour McNemar test, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat. Cette condition doit être vérifiée pour McNemar test avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaMeanDifferenceAnalysis": [
      {
        "id": "metaMeanDifferenceAnalysis.n_m_and_sd_available_for_each_group",
        "label": "n, M, and SD available for each group",
        "detail": "Pour Mean-difference meta-analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.groups_and_measurement_scales_are_comparable",
        "label": "Groups and measurement scales are comparable",
        "detail": "Pour Mean-difference meta-analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables et des statistiques descriptives avant de s'appuyer sur le résultat. Cette condition doit être vérifiée pour Mean-difference meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Cette condition doit être vérifiée pour Mean-difference meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects (depeding on the heterogenity expected), moderator analyses, and publication-bias checks in the model options",
        "detail": "Les données contiennent des structures de regroupement, comme des mesures répétées chez les participants ou des athlètes au sein d'équipes. La structure des effets aléatoires doit correspondre à la question de design et être soutenue par suffisamment de clusters et d'observations par cluster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "majorMetaAnalysis": [
      {
        "id": "majorMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Cette condition doit être vérifiée pour Meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.input_data_match_the_selected_option",
        "label": "Input data match the selected option",
        "detail": "Pour Meta-analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.justify_fixed_vs_random_effects_from_study_design_and_hete",
        "label": "Justify fixed vs. random effects from study design and heterogeneity",
        "detail": "Cette condition doit être vérifiée pour Meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.report_moderator_analyses_and_publication_bias_checks_as_o",
        "label": "Report moderator analyses and publication-bias checks as optional follow-up analyses",
        "detail": "Cette condition doit être vérifiée pour Meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaRegression": [
      {
        "id": "metaRegression.enough_studies",
        "label": "Enough studies",
        "detail": "Cette condition doit être vérifiée pour Meta-regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.moderator_measured_at_study_level",
        "label": "Moderator measured at study level",
        "detail": "Pour Meta-regression, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.same_effect_metric",
        "label": "Same effect metric",
        "detail": "Pour Meta-regression, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.ecological_interpretation_considered",
        "label": "Ecological interpretation considered",
        "detail": "Cette condition doit être vérifiée pour Meta-regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multidimensionalScaling": [
      {
        "id": "multidimensionalScaling.distance_or_dissimilarity_matrix",
        "label": "Distance or dissimilarity matrix",
        "detail": "La mesure de distance ou de similarité choisie doit correspondre au sens des variables et à la question de recherche. Vérifiez si les distances euclidiennes, de Manhattan, fondées sur la corrélation ou d'autres distances sont les plus défendables. Cette condition doit être vérifiée pour Multidimensional scaling avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.people_or_objects_are_comparable",
        "label": "People or objects are comparable",
        "detail": "Cette condition doit être vérifiée pour Multidimensional scaling avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.number_of_dimensions_chosen_using_stress_and_interpretabil",
        "label": "Number of dimensions chosen using stress and interpretability",
        "detail": "Cette condition doit être vérifiée pour Multidimensional scaling avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.primarily_an_exploratory_representation",
        "label": "Primarily an exploratory representation",
        "detail": "Cette condition doit être vérifiée pour Multidimensional scaling avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multinomialRegression": [
      {
        "id": "multinomialRegression.multicategory_categorical_outcome",
        "label": "Multicategory categorical outcome",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.Independence of Irrelevant Alternatives.",
        "label": "Independence of Irrelevant Alternatives (IIA)",
        "detail": "Cette condition doit être vérifiée pour Multinomial logistic regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.no_Multicolinearity",
        "label": "No Multicollinearity",
        "detail": "Cette condition doit être vérifiée pour Multinomial logistic regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.meaningful_reference_category",
        "label": "Meaningful reference category",
        "detail": "Cette condition doit être vérifiée pour Multinomial logistic regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "naiveBayes": [
      {
        "id": "naiveBayes.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.predictors_are_treated_as_approximately_conditionally_inde",
        "label": "Predictors are treated as approximately conditionally independent",
        "detail": "Pour Naive Bayes classifier, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables. Cette condition doit être vérifiée pour Naive Bayes classifier avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.suitable_distribution_for_metric_features",
        "label": "Suitable distribution for metric features",
        "detail": "La famille de modèles doit correspondre à l'échelle du critère et au processus générateur des données, par exemple gaussienne pour les critères continus. Cette condition doit être vérifiée pour Naive Bayes classifier avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.check_predicted_probabilities_with_validation_data",
        "label": "Check predicted probabilities with validation data",
        "detail": "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster. Cette condition doit être vérifiée pour Naive Bayes classifier avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "networkAnalysis": [
      {
        "id": "networkAnalysis.several_metric_or_ordinal_variables",
        "label": "Several metric or ordinal variables",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.edges_are_interpreted_as_conditional_associations",
        "label": "Edges are interpreted as conditional associations",
        "detail": "Cette condition doit être vérifiée pour Network analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Cette condition doit être vérifiée pour Network analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.network_stability_and_robustness_should_be_checked",
        "label": "Network stability and robustness should be checked",
        "detail": "Pour Network analysis, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables. Cette condition doit être vérifiée pour Network analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.no_causal_interpretation_without_a_suitable_design",
        "label": "No causal interpretation without a suitable design",
        "detail": "Le modèle statistique seul n'établit pas la causalité. Une interprétation causale nécessite un appui du design, comme la randomisation, l'ordre temporel, une théorie solide, un contrôle rigoureux des facteurs de confusion et des analyses de sensibilité.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayAnova": [
      {
        "id": "nonparametricTwoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Pour Nonparametric factorial ANOVA (ART), cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayRepeatedAnova": [
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Pour Nonparametric factorial repeated-measures ANOVA (ART), cette condition doit être vérifiée à partir du plan de recherche et du codage des variables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.same_cases_in_paired_conditions",
        "label": "Same cases in paired conditions",
        "detail": "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée. L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Cette condition doit être vérifiée pour Nonparametric factorial repeated-measures ANOVA (ART) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaOddsRatioAnalysis": [
      {
        "id": "metaOddsRatioAnalysis.several_independent_studies",
        "label": "Several independent studies",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Cette condition doit être vérifiée pour Odds-ratio meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.events_and_total_sample_size_available_for_each_group",
        "label": "Events and total sample size available for each group",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de groups, predictors, parameters, events, clusters, and studies plutôt que du N total seulement. Cette condition doit être vérifiée pour Odds-ratio meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Pour Odds-ratio meta-analysis, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables. Cette condition doit être vérifiée pour Odds-ratio meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed or random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Cette condition doit être vérifiée pour Odds-ratio meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleT": [
      {
        "id": "oneSampleT.metric_variable",
        "label": "Metric variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.approximate_normal_distribution",
        "label": "Approximate normal distribution",
        "detail": "La distribution pertinente doit être approximativement normale.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleWilcoxon": [
      {
        "id": "oneSampleWilcoxon.at_least_ordinal_data",
        "label": "At least ordinal data",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.symmetric_differences_helpful",
        "label": "Symmetric differences helpful",
        "detail": "Pour One-sample Wilcoxon signed-rank test, cette condition doit être vérifiée à partir des graphiques diagnostiques avant de s'appuyer sur le résultat. Cette condition doit être vérifiée pour One-sample Wilcoxon signed-rank test avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleZ": [
      {
        "id": "oneSampleZ.metric_variable",
        "label": "Metric variable",
        "detail": "La variable doit être suffisamment quantitative. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.known_population_standard_deviation_or_variance",
        "label": "Known population standard deviation or variance",
        "detail": "Chaque groupe doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.normal_population_or_sufficiently_large_sample",
        "label": "Normal population or sufficiently large sample",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes. Examinez les histogrammes, les graphiques Q-Q et les valeurs aberrantes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "anova": [
      {
        "id": "anova.independent_groups",
        "label": "Independent groups",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.normality_within_groups",
        "label": "Normality within groups",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes. Examinez les histogrammes, les graphiques Q-Q et les valeurs aberrantes. Réalisez un test de normalité.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "Les groupes ou les valeurs ajustées doivent présenter une variabilité approximativement comparable. Utilisez les graphiques des résidus, les écarts-types par groupe, des tests de type Levene ou des alternatives robustes/Welch lorsque la variabilité diffère fortement.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "ordinalMixedModel": [
      {
        "id": "ordinalMixedModel.ordinal_dependent_variable",
        "label": "Ordinal dependent variable",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.repeated_or_clustered_observations",
        "label": "Repeated or clustered observations",
        "detail": "Les données contiennent des structures de regroupement, comme des mesures répétées chez les participants ou des athlètes au sein d'équipes. Cette condition doit être vérifiée pour Ordinal mixed model avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.check_proportional_odds_assumption",
        "label": "Check proportional-odds assumption",
        "detail": "Cette condition doit être vérifiée pour Ordinal mixed model avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "Cette condition doit être vérifiée pour Ordinal mixed model avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés. La structure des effets aléatoires doit correspondre à la question de design et être soutenue par suffisamment de clusters et d'observations par cluster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pairedT": [
      {
        "id": "pairedT.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée. L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.metric_difference_scores",
        "label": "Metric difference scores",
        "detail": "Cette condition doit être vérifiée pour Paired-samples t-test avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.approximate_normality_of_differences",
        "label": "Approximate normality of differences",
        "detail": "La distribution pertinente doit être approximativement normale, généralement au sein des groupes. Cette condition doit être vérifiée pour Paired-samples t-test avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pathAnalysis": [
      {
        "id": "pathAnalysis.all_variables_are_observed_measurable",
        "label": "All variables are observed/measurable",
        "detail": "Pour Path analysis (mediation), cette condition doit être vérifiée à partir du plan de recherche et du codage des variables. Cette condition doit être vérifiée pour Path analysis (mediation) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.theoretically_justified_path_direction",
        "label": "Theoretically justified path direction",
        "detail": "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat. Documentez pourquoi paths ont été choisis.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.linear_relationships",
        "label": "Linear relationships",
        "detail": "L'association doit être correctement décrite par une relation linéaire à l'échelle du modèle.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Cette condition doit être vérifiée pour Path analysis (mediation) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.causal_interpretation_only_with_a_suitable_design",
        "label": "Causal interpretation only with a suitable design",
        "detail": "Le modèle statistique seul n'établit pas la causalité. Une interprétation causale nécessite un appui du design, comme la randomisation, l'ordre temporel, une théorie solide, un contrôle rigoureux des facteurs de confusion et des analyses de sensibilité.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareGoodness": [
      {
        "id": "chiSquareGoodness.multilevel_categorical_variable",
        "label": "Multilevel categorical variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.expected_frequencies_or_proportions_are_defined",
        "label": "Expected frequencies or proportions are defined",
        "detail": "Les fréquences attendues doivent être suffisamment élevées pour que les approximations asymptotiques soient valables. Si de nombreuses cellules attendues sont petites, regroupez les catégories substantiellement similaires ou utilisez un test exact lorsque c'est possible.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.sufficient_expected_counts_per_category",
        "label": "Sufficient expected counts per category",
        "detail": "Si de nombreuses cellules attendues sont petites, regroupez les catégories substantiellement similaires, utilisez un test exact lorsque c'est possible ou choisissez un modèle conçu pour les effectifs rares.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pearson": [
      {
        "id": "pearson.metric_variables",
        "label": "Metric variables",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.linear_relationship",
        "label": "Linear relationship",
        "detail": "L'association doit être correctement décrite par une relation linéaire à l'échelle du modèle. Les nuages de points, les graphiques des résidus partiels et les graphiques ajusté-versus-résidus aident à détecter des courbures ou des effets de seuil.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.no_dominant_outliers",
        "label": "No dominant outliers",
        "detail": "Quelques observations extrêmes ou influentes ne doivent pas dominer le résultat. Examinez les données brutes, les nuages de points, les résidus standardisés, le levier et les diagnostics d'influence avant de décider si les valeurs sont des erreurs, des extrêmes légitimes ou des raisons d'utiliser des méthodes robustes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.for_inference_approximate_bivariate_normality",
        "label": "For inference: approximate bivariate normality",
        "detail": "Cette condition doit être vérifiée pour Pearson correlation avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "principalComponentAnalysis": [
      {
        "id": "principalComponentAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Cette condition doit être vérifiée pour Principal component analysis (PCA) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.standardise_variables_on_different_scales",
        "label": "Standardise variables on different scales",
        "detail": "Placez les prédicteurs sur des échelles comparables avant les méthodes fondées sur les distances ou les composantes lorsque les unités diffèrent. Sinon, les variables avec de plus grandes étendues numériques peuvent dominer le résultat.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.common_variance",
        "label": "Common variance among variables",
        "detail": "Cette condition doit être vérifiée pour Principal component analysis (PCA) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.choose_components_by_explained_variance_and_interpretabili",
        "label": "Choose components by explained variance and interpretability",
        "detail": "Chaque étude doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude. Vérifiez le sens du codage, l'échelle, la transformation et si toutes les études utilisent la même métrique d'effet.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaProportionAnalysis": [
      {
        "id": "metaProportionAnalysis.event_frequency_count_available_for_each_study",
        "label": "Event frequency/count available for each study",
        "detail": "Pour Proportion meta-analysis, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables. Cette condition doit être vérifiée pour Proportion meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.total_sample_size_available_for_each_study",
        "label": "Total sample size available for each study",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de groups, and parameters plutôt que du N total seulement.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added.",
        "detail": "Pour Proportion meta-analysis, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables et des statistiques descriptives avant de s'appuyer sur le résultat. Cette condition doit être vérifiée pour Proportion meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options.",
        "detail": "Cette condition doit être vérifiée pour Proportion meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestClassifier": [
      {
        "id": "randomForestClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Les catégories doivent être mutuellement exclusives et codées de manière cohérente. Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de predictors, parameters, events, clusters plutôt que du N total seulement. Cette condition doit être vérifiée pour Random forest classifier avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.validation_on_unseen_data",
        "label": "Validation on unseen data",
        "detail": "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster. Utilisez des séparations entraînement/test, la validation croisée ou une validation externe et rapportez des métriques adaptées au critère et à l'équilibre des classes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.handle_class_imbalance",
        "label": "Handle class imbalance",
        "detail": "Cette condition doit être vérifiée pour Random forest classifier avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestRegression": [
      {
        "id": "randomForestRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.enough_cases_for_training_and_validation",
        "label": "Enough cases for training and validation",
        "detail": "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster. Utilisez des séparations entraînement/test, la validation croisée ou une validation externe et rapportez des métriques adaptées au critère et à l'équilibre des classes.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.tune_number_of_trees_and_variables_per_split",
        "label": "Tune number of trees and variables per split",
        "detail": "Cette condition doit être vérifiée pour Random forest regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.interpret_with_variable_importance_or_partial_effects",
        "label": "Interpret with variable importance or partial effects",
        "detail": "Cette condition doit être vérifiée pour Random forest regression avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomEffectsMetaAnalysis": [
      {
        "id": "randomEffectsMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Cette condition doit être vérifiée pour Random-effects meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.effect_size_and_precision_measure_available",
        "label": "Effect size and precision measure available",
        "detail": "Chaque étude doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude. Vérifiez le sens du codage, l'échelle, la transformation et si toutes les études utilisent la même métrique d'effet.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.between_study_variance_is_estimated",
        "label": "Between-study variance is estimated",
        "detail": "Chaque étude doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.heterogeneity_is_reported_with_tau2_i2",
        "label": "Heterogeneity is reported with tau2/I2",
        "detail": "Cette condition doit être vérifiée pour Random-effects meta-analysis avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "repeatedAnova": [
      {
        "id": "repeatedAnova.repeated_measurements",
        "label": "Repeated measurements",
        "detail": "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée. L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens. Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Pour les facteurs à mesures répétées comportant plus de deux niveaux, les variances des différences par paires doivent être similaires. Si cela est douteux, rapportez une correction comme Greenhouse-Geisser ou utilisez une approche de modèle mixte.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "spearman": [
      {
        "id": "spearman.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "Lorsqu'une variable augmente, l'autre doit tendre à augmenter ou diminuer de manière cohérente, même si la relation n'est pas linéaire. Un nuage de points ou un graphique des rangs est généralement la vérification la plus claire.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.independent_observations",
        "label": "Independent observations",
        "detail": "Une observation ne doit pas déterminer ni dupliquer une autre observation. Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "structuralEquationModeling": [
      {
        "id": "structuralEquationModeling.latent_constructs_measured_by_multiple_indicators",
        "label": "Latent constructs measured by multiple indicators",
        "detail": "Pour Structural equation modeling (SEM), cette condition doit être vérifiée à partir du plan de recherche et du codage des variables avant de s'appuyer sur le résultat. Cette condition doit être vérifiée pour Structural equation modeling (SEM) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.theoretically_justified_measurement_and_structural_model",
        "label": "Theoretically justified measurement and structural model",
        "detail": "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat. Documentez pourquoi les chemins, facteurs, covariables, sous-groupes ou proportions attendues ont été choisis.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable. Tenez compte du nombre de groups, predictors, parameters, events, clusters, and studies plutôt que du N total seulement. Cette condition doit être vérifiée pour Structural equation modeling (SEM) avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.model_fit_and_alternative_models_should_be_evaluated",
        "label": "Model fit and alternative models should be evaluated",
        "detail": "Évaluez l'ajustement global, les résidus locaux, les estimations des paramètres et les alternatives théoriquement plausibles. Un ajustement statistiquement acceptable ne rend pas à lui seul le modèle substantiellement correct.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "wilcoxon": [
      {
        "id": "wilcoxon.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée. L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "wilcoxon.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "Les valeurs doivent au moins présenter un ordre significatif. La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ]
  },
  "es": {
    "ancova": [
      {
        "id": "ancova.one_metric_dependent_variable",
        "label": "One metric dependent variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Este supuesto debe comprobarse para ANCOVA antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.linear_relation_between_covariates_and_the_dependent_varia",
        "label": "Linear relation between covariates and the dependent variable",
        "detail": "La asociación debe describirse adecuadamente mediante una relación lineal en la escala del modelo. Los diagramas de dispersión, los gráficos de residuos parciales y los gráficos ajustado-residuo ayudan a detectar curvaturas o patrones de umbral.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "La relación entre cada covariable y la variable dependiente debe ser similar entre grupos. Compruebe las interacciones covariable por grupo.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.normally_distributed_residuals_and_homogeneity_of_variance",
        "label": "Normally distributed residuals and homogeneity of variance",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logisticRegression": [
      {
        "id": "logisticRegression.dichotomous_outcome_variable",
        "label": "Dichotomous outcome variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista y que las categorías de referencia son significativas cuando el modelo las requiere.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.no_strong_multicollinearity",
        "label": "No strong multicollinearity",
        "detail": "Los predictores no deben ser casi redundantes. Inspeccione correlaciones, factores de inflación de la varianza, índices de condición o coeficientes inestables que cambian mucho al añadir otros predictores.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.sufficient_number_of_events",
        "label": "Sufficient number of events",
        "detail": "Este supuesto debe comprobarse para Binary logistic regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "binomialTest": [
      {
        "id": "binomialTest.two_level_categorical_variable",
        "label": "Two-level categorical variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista y que las categorías de referencia son significativas cuando el modelo las requiere.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.theoretically_expected_proportion_is_defined",
        "label": "Theoretically expected proportion is defined",
        "detail": "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado. Documente por qué se eligieron paths, or expected proportions.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.fixed_number_of_trials_or_cases",
        "label": "Fixed number of trials or cases",
        "detail": "Este supuesto debe comprobarse para Binomial test antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareVariance": [
      {
        "id": "chiSquareVariance.one_metric_variable",
        "label": "One metric variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.known_or_theoretically_justified_population_variance",
        "label": "Known or theoretically justified population variance",
        "detail": "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado. Este supuesto debe comprobarse para Chi-square test for one variance antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.normality_in_the_population",
        "label": "Normality in the population",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareAssociation": [
      {
        "id": "chiSquareAssociation.categorical_variables",
        "label": "Categorical variables",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Las frecuencias esperadas deben ser suficientemente grandes para que funcionen las aproximaciones asintóticas. Si muchas celdas esperadas son pequeñas, combine categorías sustantivamente similares, use una prueba exacta cuando esté disponible o elija un modelo diseñado para recuentos escasos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "clusterAnalysis": [
      {
        "id": "clusterAnalysis.features_describing_people_or_objects",
        "label": "Features describing people or objects",
        "detail": "Este supuesto debe comprobarse para Cluster analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.appropriate_scaling_or_standardisation",
        "label": "Appropriate scaling or standardisation",
        "detail": "Ponga los predictores en escalas comparables antes de métodos basados en distancias o componentes cuando las unidades difieran. De lo contrario, las variables con rangos numéricos mayores pueden dominar el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.meaningful_distance_or_similarity_measure",
        "label": "Meaningful distance or similarity measure",
        "detail": "La medida de distancia o similitud elegida debe ajustarse al significado de las variables y a la pregunta de investigación. Compruebe si las distancias euclídeas, Manhattan, basadas en correlación u otras son las más defendibles.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.cluster_solution_is_substantively_interpretable",
        "label": "Cluster solution is substantively interpretable",
        "detail": "Este supuesto debe comprobarse para Cluster analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "confirmatoryFactorAnalysis": [
      {
        "id": "confirmatoryFactorAnalysis.latent_constructs_are_predefined",
        "label": "Latent constructs are predefined",
        "detail": "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado. Documente por qué se eligieron paths and components.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.multiple_indicators_per_factor",
        "label": "Multiple indicators per factor",
        "detail": "Para Confirmatory factor analysis (CFA), este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.the_item_factor_assignment_is_theoretically_justified",
        "label": "The item-factor assignment is theoretically justified",
        "detail": "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado. Documente por qué se eligieron the item.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.model_fit_and_local_misfit_should_be_evaluated",
        "label": "Model fit and local misfit should be evaluated",
        "detail": "Evalúe el ajuste global, los residuos locales, las estimaciones de parámetros y alternativas teóricamente plausibles. Un ajuste estadísticamente aceptable no hace por sí solo que el modelo sea sustantivamente correcto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaCorrelationAnalysis": [
      {
        "id": "metaCorrelationAnalysis.correlation_and_sample_size_available_for_each_study",
        "label": "Correlation and sample size available for each study",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de groups, predictors, parameters, and studies en lugar de solo el N total.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.studies_measure_comparable_constructs",
        "label": "Studies measure comparable constructs",
        "detail": "Para Correlation-coefficient meta-analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Para Correlation-coefficient meta-analysis, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Este supuesto debe comprobarse para Correlation-coefficient meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeClassifier": [
      {
        "id": "decisionTreeClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos. Use divisiones entrenamiento/prueba, validación cruzada o validación externa e informe métricas adecuadas al resultado y al equilibrio de clases.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "Los modelos flexibles pueden aprender ruido. Limite la profundidad del árbol, pode, ajuste hiperparámetros o use datos de validación para comprobar si el rendimiento generaliza más allá de la muestra de entrenamiento.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.inspect_class_distribution",
        "label": "Inspect class distribution",
        "detail": "La familia del modelo debe corresponder a la escala del resultado y al proceso generador de datos, por ejemplo gaussiana para resultados continuos, binomial/logit para resultados binarios, Poisson o binomial negativa para recuentos y enlaces acumulativos para resultados ordinales.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeRegression": [
      {
        "id": "decisionTreeRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos. Use divisiones entrenamiento/prueba, validación cruzada o validación externa e informe métricas adecuadas al resultado y al equilibrio de clases.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "Los modelos flexibles pueden aprender ruido. Limite la profundidad del árbol, pode, ajuste hiperparámetros o use datos de validación para comprobar si el rendimiento generaliza más allá de la muestra de entrenamiento.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.predictors_are_meaningfully_coded",
        "label": "Predictors are meaningfully coded",
        "detail": "Este supuesto debe comprobarse para Decision tree regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "discriminantAnalysis": [
      {
        "id": "discriminantAnalysis.nominal_dependent_variable_with_known_groups",
        "label": "Nominal dependent variable with known groups",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.interval_scaled_independent_variables",
        "label": "Interval-scaled independent variables",
        "detail": "Para Discriminant analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.similar_covariance_matrices",
        "label": "Similar covariance matrices",
        "detail": "Los grupos deben tener matrices de covarianza ampliamente similares entre las variables dependientes o los predictores. Grandes diferencias pueden hacer inestables las pruebas multivariadas o las funciones discriminantes, especialmente con tamaños de grupo pequeños o desiguales.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.adequate_group_sizes",
        "label": "Adequate group sizes",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de groups, predictors, parameters, events, clusters, and studies en lugar de solo el N total.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaEffectSizeAnalysis": [
      {
        "id": "metaEffectSizeAnalysis.effect_size_available_for_each_study",
        "label": "Effect size available for each study",
        "detail": "Cada estudio debe aportar una estimación del efecto comparable y una medida válida de incertidumbre. Compruebe la dirección de codificación, la escala, la transformación y si todos los estudios usan la misma métrica de tamaño del efecto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.variance_or_standard_error_available_for_each_effect_size",
        "label": "Variance or standard error available for each effect size",
        "detail": "Cada estudio debe aportar una estimación del efecto comparable y una medida válida de incertidumbre. Compruebe la dirección de codificación, la escala, la transformación y si todos los estudios usan la misma métrica de tamaño del efecto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Para Effect-size meta-analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.effect_size_type",
        "label": "Effect size type for each study",
        "detail": "Este supuesto debe comprobarse para Effect-size meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Los datos contienen estructuras de agrupación, como medidas repetidas dentro de participantes o deportistas dentro de equipos. La estructura de efectos aleatorios debe corresponder a la pregunta de diseño y estar respaldada por suficientes clústeres y observaciones por clúster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "varianceFTest": [
      {
        "id": "varianceFTest.two_independent_samples",
        "label": "Two independent samples",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.normality_in_both_populations",
        "label": "Normality in both populations",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.sensitive_to_outliers_and_skew",
        "label": "Sensitive to outliers and skew",
        "detail": "Unas pocas observaciones extremas o influyentes no deben dominar el resultado. Inspeccione datos brutos, diagramas de dispersión, residuos estandarizados, leverage y diagnósticos de influencia antes de decidir si los valores son errores, extremos legítimos o razones para usar métodos robustos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "factorAnalysis": [
      {
        "id": "factorAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Este supuesto debe comprobarse para Factor analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de predictors, or parameters en lugar de solo el N total.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.interpretable_factor_structure",
        "label": "Interpretable factor structure",
        "detail": "Este supuesto debe comprobarse para Factor analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.no_a_priori_hypothesis_about_the_relationships_among_the_f",
        "label": "No a priori hypothesis about the relationships among the factors",
        "detail": "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado. Documente por qué se eligieron rutas, factores, covariables, subgrupos o proporciones esperadas.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayAnova": [
      {
        "id": "twoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.normality_within_cells",
        "label": "Normality within cells",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "Los grupos o valores ajustados deben mostrar una variabilidad aproximadamente comparable. Use gráficos de residuos, desviaciones estándar por grupo, pruebas tipo Levene o alternativas robustas/Welch cuando la variabilidad difiera mucho.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayRepeatedAnova": [
      {
        "id": "twoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Para Factorial repeated-measures ANOVA (two or more factors), este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Para factores de medidas repetidas con más de dos niveles, las varianzas de las diferencias por pares deben ser similares. Si esto es dudoso, informe una corrección como Greenhouse-Geisser o use un enfoque de modelo mixto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.balanced_assignment_of_time_points_or_conditions",
        "label": "Balanced assignment of time points or conditions",
        "detail": "Este supuesto debe comprobarse para Factorial repeated-measures ANOVA (two or more factors) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fisher": [
      {
        "id": "fisher.dichotomous_categorical_variables",
        "label": "Dichotomous categorical variables",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.small_expected_counts",
        "label": "Small expected counts",
        "detail": "Las frecuencias esperadas deben ser suficientemente grandes para que funcionen las aproximaciones asintóticas. Si muchas celdas esperadas son pequeñas, combine categorías sustantivamente similares, use una prueba exacta cuando esté disponible o elija un modelo diseñado para recuentos escasos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fixedEffectMetaAnalysis": [
      {
        "id": "fixedEffectMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.common_effect_size_and_standard_error_variance_available",
        "label": "Common effect size and standard error/variance available",
        "detail": "Cada estudio debe aportar una estimación del efecto comparable y una medida válida de incertidumbre. Compruebe la dirección de codificación, la escala, la transformación y si todos los estudios usan la misma métrica de tamaño del efecto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.studies_are_substantively_very_similar",
        "label": "Studies are substantively very similar",
        "detail": "Para Fixed-effect meta-analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.heterogeneity_is_low",
        "label": "Heterogeneity is low",
        "detail": "Este supuesto debe comprobarse para Fixed-effect meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "friedman": [
      {
        "id": "friedman.several_paired_measurements",
        "label": "Several paired measurements",
        "detail": "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado. El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.same_cases_in_all_conditions",
        "label": "Same cases in all conditions",
        "detail": "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado. El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "generalizedLinearMixedModel": [
      {
        "id": "generalizedLinearMixedModel.dichotomous_categorical_or_count_dependent_variable",
        "label": "Dichotomous, categorical, or count dependent variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.appropriate_link_function_and_distribution",
        "label": "Appropriate link function and distribution",
        "detail": "La familia del modelo debe corresponder a la escala del resultado y al proceso generador de datos, por ejemplo gaussiana para resultados continuos, binomial/logit para resultados binarios, Poisson o binomial negativa para recuentos y enlaces acumulativos para resultados ordinales.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.clusters_or_persons_entered_as_random_effects",
        "label": "Clusters or persons entered as random effects",
        "detail": "Los datos contienen estructuras de agrupación, como medidas repetidas dentro de participantes o deportistas dentro de equipos. La estructura de efectos aleatorios debe corresponder a la pregunta de diseño y estar respaldada por suficientes clústeres y observaciones por clúster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.adequate_events_per_parameter",
        "label": "Adequate events per parameter",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de groups, predictors and parameters en lugar de solo el N total.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "independentT": [
      {
        "id": "independentT.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.approximate_normality",
        "label": "Approximate normality",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, pruebas de normalidad, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.equal_variances_or_welch_correction",
        "label": "Equal variances or Welch correction",
        "detail": "Los grupos o valores ajustados deben mostrar una variabilidad aproximadamente comparable. Use gráficos de residuos, desviaciones estándar por grupo, pruebas tipo Levene o alternativas robustas/Welch cuando la variabilidad difiera mucho.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnClassifier": [
      {
        "id": "knnClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Ponga los predictores en escalas comparables antes de métodos basados en distancias o componentes cuando las unidades difieran. De lo contrario, las variables con rangos numéricos mayores pueden dominar el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "La medida de distancia o similitud elegida debe ajustarse al significado de las variables y a la pregunta de investigación. Compruebe si las distancias euclídeas, Manhattan, basadas en correlación u otras son las más defendibles.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.choose_k_and_weighting_using_validation",
        "label": "Choose k and weighting using validation",
        "detail": "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos. Use divisiones entrenamiento/prueba, validación cruzada o validación externa e informe métricas adecuadas al resultado y al equilibrio de clases.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnRegression": [
      {
        "id": "knnRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Ponga los predictores en escalas comparables antes de métodos basados en distancias o componentes cuando las unidades difieran. De lo contrario, las variables con rangos numéricos mayores pueden dominar el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "La medida de distancia o similitud elegida debe ajustarse al significado de las variables y a la pregunta de investigación. Compruebe si las distancias euclídeas, Manhattan, basadas en correlación u otras son las más defendibles.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.choose_k_using_validation",
        "label": "Choose k using validation",
        "detail": "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos. Use divisiones entrenamiento/prueba, validación cruzada o validación externa e informe métricas adecuadas al resultado y al equilibrio de clases.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kendall": [
      {
        "id": "kendall.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "A medida que una variable aumenta, la otra debe tender a subir o bajar de forma consistente, aunque la relación no sea lineal. Un diagrama de dispersión o de rangos suele ser la comprobación más clara.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.useful_with_ties_or_smaller_samples",
        "label": "Useful with ties or smaller samples",
        "detail": "Para Kendall's rank correlation, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kruskalWallis": [
      {
        "id": "kruskalWallis.several_independent_groups",
        "label": "Several independent groups",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearMixedModel": [
      {
        "id": "linearMixedModel.metric_dependent_variable",
        "label": "Metric dependent variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.observations_nested_within_people_teams_or_measurement_occ",
        "label": "Observations nested within people, teams, or measurement occasions",
        "detail": "Los datos contienen estructuras de agrupación, como medidas repetidas dentro de participantes o deportistas dentro de equipos. La estructura de efectos aleatorios debe corresponder a la pregunta de diseño y estar respaldada por suficientes clústeres y observaciones por clúster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "Los datos contienen estructuras de agrupación, como medidas repetidas dentro de participantes o deportistas dentro de equipos. La estructura de efectos aleatorios debe corresponder a la pregunta de diseño y estar respaldada por suficientes clústeres y observaciones por clúster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.check_residual_diagnostics_and_variance_structure",
        "label": "Check residual diagnostics and variance structure",
        "detail": "Este supuesto debe comprobarse para Linear mixed model antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearRegression": [
      {
        "id": "linearRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.linear_relationships",
        "label": "Linear relationships",
        "detail": "La asociación debe describirse adecuadamente mediante una relación lineal en la escala del modelo. Los diagramas de dispersión, los gráficos de residuos parciales y los gráficos ajustado-residuo ayudan a detectar curvaturas o patrones de umbral.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.independent_residuals",
        "label": "Independent residuals",
        "detail": "Este supuesto debe comprobarse para Linear regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.homoscedasticity_and_residual_diagnostics",
        "label": "Homoscedasticity and residual diagnostics",
        "detail": "Los grupos o valores ajustados deben mostrar una variabilidad aproximadamente comparable. Use gráficos de residuos, desviaciones estándar por grupo, pruebas tipo Levene o alternativas robustas/Welch cuando la variabilidad difiera mucho.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.prediction_or_association_not_causality_by_itself",
        "label": "Prediction or association, not causality by itself",
        "detail": "El modelo estadístico por sí solo no establece causalidad. La interpretación causal requiere apoyo del diseño, como aleatorización, orden temporal, teoría sólida, control cuidadoso de confusores y análisis de sensibilidad.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logLinearModel": [
      {
        "id": "logLinearModel.several_nominal_variables",
        "label": "Several nominal variables",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.frequency_data_in_a_contingency_table",
        "label": "Frequency data in a contingency table",
        "detail": "Para Log-linear model, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Las frecuencias esperadas deben ser suficientemente grandes para que funcionen las aproximaciones asintóticas. Si muchas celdas esperadas son pequeñas, combine categorías sustantivamente similares, use una prueba exacta cuando esté disponible o elija un modelo diseñado para recuentos escasos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mancova": [
      {
        "id": "mancova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Este supuesto debe comprobarse para MANCOVA antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.linear_relation_between_covariates_and_dependent_variables",
        "label": "Linear relation between covariates and dependent variables",
        "detail": "La asociación debe describirse adecuadamente mediante una relación lineal en la escala del modelo. Los diagramas de dispersión, los gráficos de residuos parciales y los gráficos ajustado-residuo ayudan a detectar curvaturas o patrones de umbral.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "La relación entre cada covariable y la variable dependiente debe ser similar entre grupos. Compruebe las interacciones covariable por grupo.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.multivariate_normality_and_homogeneity_of_covariance_matri",
        "label": "Multivariate normality and homogeneity of covariance matrices",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mannWhitney": [
      {
        "id": "mannWhitney.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.similar_distribution_shapes_for_location_interpretation",
        "label": "Similar distribution shapes for location interpretation",
        "detail": "La familia del modelo debe corresponder a la escala del resultado y al proceso generador de datos, por ejemplo enlaces acumulativos para resultados ordinales.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "manova": [
      {
        "id": "manova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados. Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.homogeneity_of_covariance_matrices",
        "label": "Homogeneity of covariance matrices",
        "detail": "Los grupos deben tener matrices de covarianza ampliamente similares entre las variables dependientes o los predictores. Grandes diferencias pueden hacer inestables las pruebas multivariadas o las funciones discriminantes, especialmente con tamaños de grupo pequeños o desiguales. Este supuesto debe comprobarse para MANOVA antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.meaningful_correlations_among_dependent_variables",
        "label": "Meaningful correlations among dependent variables",
        "detail": "Este supuesto debe comprobarse para MANOVA antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mcnemar": [
      {
        "id": "mcnemar.two_paired_dichotomous_measurements",
        "label": "Two paired dichotomous measurements",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.paired_data",
        "label": "Paired data",
        "detail": "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado. El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.discordant_pairs_are_relevant",
        "label": "Discordant pairs are relevant",
        "detail": "Para McNemar test, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado. Este supuesto debe comprobarse para McNemar test antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaMeanDifferenceAnalysis": [
      {
        "id": "metaMeanDifferenceAnalysis.n_m_and_sd_available_for_each_group",
        "label": "n, M, and SD available for each group",
        "detail": "Para Mean-difference meta-analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.groups_and_measurement_scales_are_comparable",
        "label": "Groups and measurement scales are comparable",
        "detail": "Para Mean-difference meta-analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables y los descriptivos antes de confiar en el resultado. Este supuesto debe comprobarse para Mean-difference meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Este supuesto debe comprobarse para Mean-difference meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects (depeding on the heterogenity expected), moderator analyses, and publication-bias checks in the model options",
        "detail": "Los datos contienen estructuras de agrupación, como medidas repetidas dentro de participantes o deportistas dentro de equipos. La estructura de efectos aleatorios debe corresponder a la pregunta de diseño y estar respaldada por suficientes clústeres y observaciones por clúster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "majorMetaAnalysis": [
      {
        "id": "majorMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Este supuesto debe comprobarse para Meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.input_data_match_the_selected_option",
        "label": "Input data match the selected option",
        "detail": "Para Meta-analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.justify_fixed_vs_random_effects_from_study_design_and_hete",
        "label": "Justify fixed vs. random effects from study design and heterogeneity",
        "detail": "Este supuesto debe comprobarse para Meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.report_moderator_analyses_and_publication_bias_checks_as_o",
        "label": "Report moderator analyses and publication-bias checks as optional follow-up analyses",
        "detail": "Este supuesto debe comprobarse para Meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaRegression": [
      {
        "id": "metaRegression.enough_studies",
        "label": "Enough studies",
        "detail": "Este supuesto debe comprobarse para Meta-regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.moderator_measured_at_study_level",
        "label": "Moderator measured at study level",
        "detail": "Para Meta-regression, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.same_effect_metric",
        "label": "Same effect metric",
        "detail": "Para Meta-regression, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.ecological_interpretation_considered",
        "label": "Ecological interpretation considered",
        "detail": "Este supuesto debe comprobarse para Meta-regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multidimensionalScaling": [
      {
        "id": "multidimensionalScaling.distance_or_dissimilarity_matrix",
        "label": "Distance or dissimilarity matrix",
        "detail": "La medida de distancia o similitud elegida debe ajustarse al significado de las variables y a la pregunta de investigación. Compruebe si las distancias euclídeas, Manhattan, basadas en correlación u otras son las más defendibles. Este supuesto debe comprobarse para Multidimensional scaling antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.people_or_objects_are_comparable",
        "label": "People or objects are comparable",
        "detail": "Este supuesto debe comprobarse para Multidimensional scaling antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.number_of_dimensions_chosen_using_stress_and_interpretabil",
        "label": "Number of dimensions chosen using stress and interpretability",
        "detail": "Este supuesto debe comprobarse para Multidimensional scaling antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.primarily_an_exploratory_representation",
        "label": "Primarily an exploratory representation",
        "detail": "Este supuesto debe comprobarse para Multidimensional scaling antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multinomialRegression": [
      {
        "id": "multinomialRegression.multicategory_categorical_outcome",
        "label": "Multicategory categorical outcome",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.Independence of Irrelevant Alternatives.",
        "label": "Independence of Irrelevant Alternatives (IIA)",
        "detail": "Este supuesto debe comprobarse para Multinomial logistic regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.no_Multicolinearity",
        "label": "No Multicollinearity",
        "detail": "Este supuesto debe comprobarse para Multinomial logistic regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.meaningful_reference_category",
        "label": "Meaningful reference category",
        "detail": "Este supuesto debe comprobarse para Multinomial logistic regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "naiveBayes": [
      {
        "id": "naiveBayes.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.predictors_are_treated_as_approximately_conditionally_inde",
        "label": "Predictors are treated as approximately conditionally independent",
        "detail": "Para Naive Bayes classifier, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables. Este supuesto debe comprobarse para Naive Bayes classifier antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.suitable_distribution_for_metric_features",
        "label": "Suitable distribution for metric features",
        "detail": "La familia del modelo debe corresponder a la escala del resultado y al proceso generador de datos, por ejemplo gaussiana para resultados continuos. Este supuesto debe comprobarse para Naive Bayes classifier antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.check_predicted_probabilities_with_validation_data",
        "label": "Check predicted probabilities with validation data",
        "detail": "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos. Este supuesto debe comprobarse para Naive Bayes classifier antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "networkAnalysis": [
      {
        "id": "networkAnalysis.several_metric_or_ordinal_variables",
        "label": "Several metric or ordinal variables",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.edges_are_interpreted_as_conditional_associations",
        "label": "Edges are interpreted as conditional associations",
        "detail": "Este supuesto debe comprobarse para Network analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Este supuesto debe comprobarse para Network analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.network_stability_and_robustness_should_be_checked",
        "label": "Network stability and robustness should be checked",
        "detail": "Para Network analysis, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables. Este supuesto debe comprobarse para Network analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.no_causal_interpretation_without_a_suitable_design",
        "label": "No causal interpretation without a suitable design",
        "detail": "El modelo estadístico por sí solo no establece causalidad. La interpretación causal requiere apoyo del diseño, como aleatorización, orden temporal, teoría sólida, control cuidadoso de confusores y análisis de sensibilidad.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayAnova": [
      {
        "id": "nonparametricTwoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Para Nonparametric factorial ANOVA (ART), este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayRepeatedAnova": [
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Para Nonparametric factorial repeated-measures ANOVA (ART), este supuesto debe comprobarse con el diseño de investigación y la codificación de variables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.same_cases_in_paired_conditions",
        "label": "Same cases in paired conditions",
        "detail": "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado. El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Este supuesto debe comprobarse para Nonparametric factorial repeated-measures ANOVA (ART) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaOddsRatioAnalysis": [
      {
        "id": "metaOddsRatioAnalysis.several_independent_studies",
        "label": "Several independent studies",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Este supuesto debe comprobarse para Odds-ratio meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.events_and_total_sample_size_available_for_each_group",
        "label": "Events and total sample size available for each group",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de groups, predictors, parameters, events, clusters, and studies en lugar de solo el N total. Este supuesto debe comprobarse para Odds-ratio meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Para Odds-ratio meta-analysis, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables. Este supuesto debe comprobarse para Odds-ratio meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed or random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Este supuesto debe comprobarse para Odds-ratio meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleT": [
      {
        "id": "oneSampleT.metric_variable",
        "label": "Metric variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.approximate_normal_distribution",
        "label": "Approximate normal distribution",
        "detail": "La distribución relevante debe ser aproximadamente normal.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleWilcoxon": [
      {
        "id": "oneSampleWilcoxon.at_least_ordinal_data",
        "label": "At least ordinal data",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.symmetric_differences_helpful",
        "label": "Symmetric differences helpful",
        "detail": "Para One-sample Wilcoxon signed-rank test, este supuesto debe comprobarse con gráficos diagnósticos antes de confiar en el resultado. Este supuesto debe comprobarse para One-sample Wilcoxon signed-rank test antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleZ": [
      {
        "id": "oneSampleZ.metric_variable",
        "label": "Metric variable",
        "detail": "La variable debe ser suficientemente cuantitativa. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.known_population_standard_deviation_or_variance",
        "label": "Known population standard deviation or variance",
        "detail": "Cada grupo debe aportar una estimación del efecto comparable y una medida válida de incertidumbre.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.normal_population_or_sufficiently_large_sample",
        "label": "Normal population or sufficiently large sample",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos. Inspeccione histogramas, gráficos Q-Q y valores atípicos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "anova": [
      {
        "id": "anova.independent_groups",
        "label": "Independent groups",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.normality_within_groups",
        "label": "Normality within groups",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos. Inspeccione histogramas, gráficos Q-Q y valores atípicos. Realice una prueba de normalidad.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "Los grupos o valores ajustados deben mostrar una variabilidad aproximadamente comparable. Use gráficos de residuos, desviaciones estándar por grupo, pruebas tipo Levene o alternativas robustas/Welch cuando la variabilidad difiera mucho.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "ordinalMixedModel": [
      {
        "id": "ordinalMixedModel.ordinal_dependent_variable",
        "label": "Ordinal dependent variable",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.repeated_or_clustered_observations",
        "label": "Repeated or clustered observations",
        "detail": "Los datos contienen estructuras de agrupación, como medidas repetidas dentro de participantes o deportistas dentro de equipos. Este supuesto debe comprobarse para Ordinal mixed model antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.check_proportional_odds_assumption",
        "label": "Check proportional-odds assumption",
        "detail": "Este supuesto debe comprobarse para Ordinal mixed model antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "Este supuesto debe comprobarse para Ordinal mixed model antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados. La estructura de efectos aleatorios debe corresponder a la pregunta de diseño y estar respaldada por suficientes clústeres y observaciones por clúster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pairedT": [
      {
        "id": "pairedT.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado. El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.metric_difference_scores",
        "label": "Metric difference scores",
        "detail": "Este supuesto debe comprobarse para Paired-samples t-test antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.approximate_normality_of_differences",
        "label": "Approximate normality of differences",
        "detail": "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos. Este supuesto debe comprobarse para Paired-samples t-test antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pathAnalysis": [
      {
        "id": "pathAnalysis.all_variables_are_observed_measurable",
        "label": "All variables are observed/measurable",
        "detail": "Para Path analysis (mediation), este supuesto debe comprobarse con el diseño de investigación y la codificación de variables. Este supuesto debe comprobarse para Path analysis (mediation) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.theoretically_justified_path_direction",
        "label": "Theoretically justified path direction",
        "detail": "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado. Documente por qué se eligieron paths.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.linear_relationships",
        "label": "Linear relationships",
        "detail": "La asociación debe describirse adecuadamente mediante una relación lineal en la escala del modelo.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Este supuesto debe comprobarse para Path analysis (mediation) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.causal_interpretation_only_with_a_suitable_design",
        "label": "Causal interpretation only with a suitable design",
        "detail": "El modelo estadístico por sí solo no establece causalidad. La interpretación causal requiere apoyo del diseño, como aleatorización, orden temporal, teoría sólida, control cuidadoso de confusores y análisis de sensibilidad.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareGoodness": [
      {
        "id": "chiSquareGoodness.multilevel_categorical_variable",
        "label": "Multilevel categorical variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.expected_frequencies_or_proportions_are_defined",
        "label": "Expected frequencies or proportions are defined",
        "detail": "Las frecuencias esperadas deben ser suficientemente grandes para que funcionen las aproximaciones asintóticas. Si muchas celdas esperadas son pequeñas, combine categorías sustantivamente similares o use una prueba exacta cuando esté disponible.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.sufficient_expected_counts_per_category",
        "label": "Sufficient expected counts per category",
        "detail": "Si muchas celdas esperadas son pequeñas, combine categorías sustantivamente similares, use una prueba exacta cuando esté disponible o elija un modelo diseñado para recuentos escasos.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pearson": [
      {
        "id": "pearson.metric_variables",
        "label": "Metric variables",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.linear_relationship",
        "label": "Linear relationship",
        "detail": "La asociación debe describirse adecuadamente mediante una relación lineal en la escala del modelo. Los diagramas de dispersión, los gráficos de residuos parciales y los gráficos ajustado-residuo ayudan a detectar curvaturas o patrones de umbral.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.no_dominant_outliers",
        "label": "No dominant outliers",
        "detail": "Unas pocas observaciones extremas o influyentes no deben dominar el resultado. Inspeccione datos brutos, diagramas de dispersión, residuos estandarizados, leverage y diagnósticos de influencia antes de decidir si los valores son errores, extremos legítimos o razones para usar métodos robustos.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.for_inference_approximate_bivariate_normality",
        "label": "For inference: approximate bivariate normality",
        "detail": "Este supuesto debe comprobarse para Pearson correlation antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "principalComponentAnalysis": [
      {
        "id": "principalComponentAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Este supuesto debe comprobarse para Principal component analysis (PCA) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.standardise_variables_on_different_scales",
        "label": "Standardise variables on different scales",
        "detail": "Ponga los predictores en escalas comparables antes de métodos basados en distancias o componentes cuando las unidades difieran. De lo contrario, las variables con rangos numéricos mayores pueden dominar el resultado.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.common_variance",
        "label": "Common variance among variables",
        "detail": "Este supuesto debe comprobarse para Principal component analysis (PCA) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.choose_components_by_explained_variance_and_interpretabili",
        "label": "Choose components by explained variance and interpretability",
        "detail": "Cada estudio debe aportar una estimación del efecto comparable y una medida válida de incertidumbre. Compruebe la dirección de codificación, la escala, la transformación y si todos los estudios usan la misma métrica de tamaño del efecto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaProportionAnalysis": [
      {
        "id": "metaProportionAnalysis.event_frequency_count_available_for_each_study",
        "label": "Event frequency/count available for each study",
        "detail": "Para Proportion meta-analysis, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables. Este supuesto debe comprobarse para Proportion meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.total_sample_size_available_for_each_study",
        "label": "Total sample size available for each study",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de groups, and parameters en lugar de solo el N total.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added.",
        "detail": "Para Proportion meta-analysis, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables y los descriptivos antes de confiar en el resultado. Este supuesto debe comprobarse para Proportion meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options.",
        "detail": "Este supuesto debe comprobarse para Proportion meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestClassifier": [
      {
        "id": "randomForestClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente. Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de predictors, parameters, events, clusters en lugar de solo el N total. Este supuesto debe comprobarse para Random forest classifier antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.validation_on_unseen_data",
        "label": "Validation on unseen data",
        "detail": "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos. Use divisiones entrenamiento/prueba, validación cruzada o validación externa e informe métricas adecuadas al resultado y al equilibrio de clases.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.handle_class_imbalance",
        "label": "Handle class imbalance",
        "detail": "Este supuesto debe comprobarse para Random forest classifier antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestRegression": [
      {
        "id": "randomForestRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.enough_cases_for_training_and_validation",
        "label": "Enough cases for training and validation",
        "detail": "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos. Use divisiones entrenamiento/prueba, validación cruzada o validación externa e informe métricas adecuadas al resultado y al equilibrio de clases.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.tune_number_of_trees_and_variables_per_split",
        "label": "Tune number of trees and variables per split",
        "detail": "Este supuesto debe comprobarse para Random forest regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.interpret_with_variable_importance_or_partial_effects",
        "label": "Interpret with variable importance or partial effects",
        "detail": "Este supuesto debe comprobarse para Random forest regression antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomEffectsMetaAnalysis": [
      {
        "id": "randomEffectsMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Este supuesto debe comprobarse para Random-effects meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.effect_size_and_precision_measure_available",
        "label": "Effect size and precision measure available",
        "detail": "Cada estudio debe aportar una estimación del efecto comparable y una medida válida de incertidumbre. Compruebe la dirección de codificación, la escala, la transformación y si todos los estudios usan la misma métrica de tamaño del efecto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.between_study_variance_is_estimated",
        "label": "Between-study variance is estimated",
        "detail": "Cada estudio debe aportar una estimación del efecto comparable y una medida válida de incertidumbre.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.heterogeneity_is_reported_with_tau2_i2",
        "label": "Heterogeneity is reported with tau2/I2",
        "detail": "Este supuesto debe comprobarse para Random-effects meta-analysis antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "repeatedAnova": [
      {
        "id": "repeatedAnova.repeated_measurements",
        "label": "Repeated measurements",
        "detail": "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado. El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables. Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Para factores de medidas repetidas con más de dos niveles, las varianzas de las diferencias por pares deben ser similares. Si esto es dudoso, informe una corrección como Greenhouse-Geisser o use un enfoque de modelo mixto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "spearman": [
      {
        "id": "spearman.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "A medida que una variable aumenta, la otra debe tender a subir o bajar de forma consistente, aunque la relación no sea lineal. Un diagrama de dispersión o de rangos suele ser la comprobación más clara.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.independent_observations",
        "label": "Independent observations",
        "detail": "Una observación no debe determinar ni duplicar otra. Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "structuralEquationModeling": [
      {
        "id": "structuralEquationModeling.latent_constructs_measured_by_multiple_indicators",
        "label": "Latent constructs measured by multiple indicators",
        "detail": "Para Structural equation modeling (SEM), este supuesto debe comprobarse con el diseño de investigación y la codificación de variables antes de confiar en el resultado. Este supuesto debe comprobarse para Structural equation modeling (SEM) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.theoretically_justified_measurement_and_structural_model",
        "label": "Theoretically justified measurement and structural model",
        "detail": "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado. Documente por qué se eligieron rutas, factores, covariables, subgrupos o proporciones esperadas.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable. Considere el número de groups, predictors, parameters, events, clusters, and studies en lugar de solo el N total. Este supuesto debe comprobarse para Structural equation modeling (SEM) antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.model_fit_and_alternative_models_should_be_evaluated",
        "label": "Model fit and alternative models should be evaluated",
        "detail": "Evalúe el ajuste global, los residuos locales, las estimaciones de parámetros y alternativas teóricamente plausibles. Un ajuste estadísticamente aceptable no hace por sí solo que el modelo sea sustantivamente correcto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "wilcoxon": [
      {
        "id": "wilcoxon.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado. El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "wilcoxon.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "Los valores deben tener al menos un orden significativo. La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ]
  },
  "it": {
    "ancova": [
      {
        "id": "ancova.one_metric_dependent_variable",
        "label": "One metric dependent variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Questa assunzione deve essere verificata per ANCOVA prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.linear_relation_between_covariates_and_the_dependent_varia",
        "label": "Linear relation between covariates and the dependent variable",
        "detail": "L'associazione dovrebbe essere descritta adeguatamente da una relazione lineare sulla scala del modello. Diagrammi di dispersione, grafici dei residui parziali e grafici valori stimati-residui aiutano a rilevare curvature o pattern soglia.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "La relazione tra ciascuna covariata e la variabile dipendente dovrebbe essere simile tra i gruppi. Controllare le interazioni covariata per gruppo.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ancova.normally_distributed_residuals_and_homogeneity_of_variance",
        "label": "Normally distributed residuals and homogeneity of variance",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logisticRegression": [
      {
        "id": "logisticRegression.dichotomous_outcome_variable",
        "label": "Dichotomous outcome variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista e che le categorie di riferimento siano significative quando i modelli le richiedono.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.no_strong_multicollinearity",
        "label": "No strong multicollinearity",
        "detail": "I predittori non dovrebbero essere quasi ridondanti. Esaminare correlazioni, fattori di inflazione della varianza, indici di condizione o coefficienti instabili che cambiano molto quando si aggiungono altri predittori.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logisticRegression.sufficient_number_of_events",
        "label": "Sufficient number of events",
        "detail": "Questa assunzione deve essere verificata per Binary logistic regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "binomialTest": [
      {
        "id": "binomialTest.two_level_categorical_variable",
        "label": "Two-level categorical variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista e che le categorie di riferimento siano significative quando i modelli le richiedono.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.theoretically_expected_proportion_is_defined",
        "label": "Theoretically expected proportion is defined",
        "detail": "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato. Documentare perché sono stati scelti paths, or expected proportions.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "binomialTest.fixed_number_of_trials_or_cases",
        "label": "Fixed number of trials or cases",
        "detail": "Questa assunzione deve essere verificata per Binomial test prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareVariance": [
      {
        "id": "chiSquareVariance.one_metric_variable",
        "label": "One metric variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.known_or_theoretically_justified_population_variance",
        "label": "Known or theoretically justified population variance",
        "detail": "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato. Questa assunzione deve essere verificata per Chi-square test for one variance prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareVariance.normality_in_the_population",
        "label": "Normality in the population",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareAssociation": [
      {
        "id": "chiSquareAssociation.categorical_variables",
        "label": "Categorical variables",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareAssociation.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Le frequenze attese devono essere abbastanza grandi perché le approssimazioni asintotiche siano valide. Se molte celle attese sono piccole, combinare categorie sostanzialmente simili, usare un test esatto quando disponibile o scegliere un modello per conteggi sparsi.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "clusterAnalysis": [
      {
        "id": "clusterAnalysis.features_describing_people_or_objects",
        "label": "Features describing people or objects",
        "detail": "Questa assunzione deve essere verificata per Cluster analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.appropriate_scaling_or_standardisation",
        "label": "Appropriate scaling or standardisation",
        "detail": "Portare i predittori su scale comparabili prima di metodi basati su distanze o componenti quando le unità differiscono. Altrimenti le variabili con intervalli numerici più ampi possono dominare il risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.meaningful_distance_or_similarity_measure",
        "label": "Meaningful distance or similarity measure",
        "detail": "La misura di distanza o similarità scelta deve corrispondere al significato delle variabili e alla domanda di ricerca. Verificare se distanze euclidee, Manhattan, basate sulla correlazione o altre sono le più difendibili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "clusterAnalysis.cluster_solution_is_substantively_interpretable",
        "label": "Cluster solution is substantively interpretable",
        "detail": "Questa assunzione deve essere verificata per Cluster analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "confirmatoryFactorAnalysis": [
      {
        "id": "confirmatoryFactorAnalysis.latent_constructs_are_predefined",
        "label": "Latent constructs are predefined",
        "detail": "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato. Documentare perché sono stati scelti paths and components.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.multiple_indicators_per_factor",
        "label": "Multiple indicators per factor",
        "detail": "Per Confirmatory factor analysis (CFA), questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.the_item_factor_assignment_is_theoretically_justified",
        "label": "The item-factor assignment is theoretically justified",
        "detail": "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato. Documentare perché sono stati scelti the item.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "confirmatoryFactorAnalysis.model_fit_and_local_misfit_should_be_evaluated",
        "label": "Model fit and local misfit should be evaluated",
        "detail": "Valutare adattamento globale, residui locali, stime dei parametri e alternative teoricamente plausibili. Un adattamento statisticamente accettabile non rende da solo il modello sostanzialmente corretto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaCorrelationAnalysis": [
      {
        "id": "metaCorrelationAnalysis.correlation_and_sample_size_available_for_each_study",
        "label": "Correlation and sample size available for each study",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di groups, predictors, parameters, and studies invece del solo N totale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.studies_measure_comparable_constructs",
        "label": "Studies measure comparable constructs",
        "detail": "Per Correlation-coefficient meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Per Correlation-coefficient meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaCorrelationAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Questa assunzione deve essere verificata per Correlation-coefficient meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeClassifier": [
      {
        "id": "decisionTreeClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Valutare i modelli predittivi su dati non utilizzati per stimarli. Usare suddivisioni training/test, validazione incrociata o validazione esterna e riportare metriche adeguate all'esito e al bilanciamento delle classi.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "I modelli flessibili possono apprendere rumore. Limitare la profondità dell'albero, potare, ottimizzare gli iperparametri o usare dati di validazione per verificare se la prestazione generalizza oltre il campione di training.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeClassifier.inspect_class_distribution",
        "label": "Inspect class distribution",
        "detail": "La famiglia del modello deve corrispondere alla scala dell'esito e al processo generatore dei dati, ad esempio gaussiana per esiti continui, binomiale/logit per esiti binari, Poisson o binomiale negativa per conteggi e link cumulativi per esiti ordinali.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "decisionTreeRegression": [
      {
        "id": "decisionTreeRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.training_test_split_or_cross_validation",
        "label": "Training/test split or cross-validation",
        "detail": "Valutare i modelli predittivi su dati non utilizzati per stimarli. Usare suddivisioni training/test, validazione incrociata o validazione esterna e riportare metriche adeguate all'esito e al bilanciamento delle classi.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.pruning_or_depth_control_to_reduce_overfitting",
        "label": "Pruning or depth control to reduce overfitting",
        "detail": "I modelli flessibili possono apprendere rumore. Limitare la profondità dell'albero, potare, ottimizzare gli iperparametri o usare dati di validazione per verificare se la prestazione generalizza oltre il campione di training.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "decisionTreeRegression.predictors_are_meaningfully_coded",
        "label": "Predictors are meaningfully coded",
        "detail": "Questa assunzione deve essere verificata per Decision tree regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "discriminantAnalysis": [
      {
        "id": "discriminantAnalysis.nominal_dependent_variable_with_known_groups",
        "label": "Nominal dependent variable with known groups",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.interval_scaled_independent_variables",
        "label": "Interval-scaled independent variables",
        "detail": "Per Discriminant analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.similar_covariance_matrices",
        "label": "Similar covariance matrices",
        "detail": "I gruppi dovrebbero avere matrici di covarianza ampiamente simili tra variabili dipendenti o predittori. Grandi differenze possono rendere instabili i test multivariati o le funzioni discriminanti, soprattutto con gruppi piccoli o di dimensioni disuguali.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "discriminantAnalysis.adequate_group_sizes",
        "label": "Adequate group sizes",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di groups, predictors, parameters, events, clusters, and studies invece del solo N totale.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaEffectSizeAnalysis": [
      {
        "id": "metaEffectSizeAnalysis.effect_size_available_for_each_study",
        "label": "Effect size available for each study",
        "detail": "Ogni studio deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza. Controllare direzione della codifica, scala, trasformazione e se tutti gli studi usano la stessa metrica di dimensione dell'effetto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.variance_or_standard_error_available_for_each_effect_size",
        "label": "Variance or standard error available for each effect size",
        "detail": "Ogni studio deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza. Controllare direzione della codifica, scala, trasformazione e se tutti gli studi usano la stessa metrica di dimensione dell'effetto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Per Effect-size meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.effect_size_type",
        "label": "Effect size type for each study",
        "detail": "Questa assunzione deve essere verificata per Effect-size meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaEffectSizeAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "I dati contengono strutture di raggruppamento, come misure ripetute entro partecipanti o atleti entro squadre. La struttura degli effetti casuali deve corrispondere alla domanda di disegno ed essere supportata da un numero sufficiente di cluster e osservazioni per cluster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "varianceFTest": [
      {
        "id": "varianceFTest.two_independent_samples",
        "label": "Two independent samples",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.normality_in_both_populations",
        "label": "Normality in both populations",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "varianceFTest.sensitive_to_outliers_and_skew",
        "label": "Sensitive to outliers and skew",
        "detail": "Poche osservazioni estreme o influenti non dovrebbero dominare il risultato. Esaminare dati grezzi, diagrammi di dispersione, residui standardizzati, leverage e diagnostiche di influenza prima di decidere se i valori siano errori, estremi legittimi o motivi per usare metodi robusti.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "factorAnalysis": [
      {
        "id": "factorAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Questa assunzione deve essere verificata per Factor analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di predictors, or parameters invece del solo N totale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.interpretable_factor_structure",
        "label": "Interpretable factor structure",
        "detail": "Questa assunzione deve essere verificata per Factor analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "factorAnalysis.no_a_priori_hypothesis_about_the_relationships_among_the_f",
        "label": "No a priori hypothesis about the relationships among the factors",
        "detail": "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato. Documentare perché sono stati scelti percorsi, fattori, covariate, sottogruppi o proporzioni attese.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayAnova": [
      {
        "id": "twoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.normality_within_cells",
        "label": "Normality within cells",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayAnova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "I gruppi o i valori stimati dovrebbero mostrare una variabilità approssimativamente comparabile. Usare grafici dei residui, deviazioni standard di gruppo, controlli di tipo Levene o alternative robuste/Welch quando la variabilità differisce molto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "twoWayRepeatedAnova": [
      {
        "id": "twoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Per Factorial repeated-measures ANOVA (two or more factors), questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Per fattori a misure ripetute con più di due livelli, le varianze delle differenze a coppie dovrebbero essere simili. Se questo è dubbio, riportare una correzione come Greenhouse-Geisser o usare un approccio a modello misto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "twoWayRepeatedAnova.balanced_assignment_of_time_points_or_conditions",
        "label": "Balanced assignment of time points or conditions",
        "detail": "Questa assunzione deve essere verificata per Factorial repeated-measures ANOVA (two or more factors) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fisher": [
      {
        "id": "fisher.dichotomous_categorical_variables",
        "label": "Dichotomous categorical variables",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fisher.small_expected_counts",
        "label": "Small expected counts",
        "detail": "Le frequenze attese devono essere abbastanza grandi perché le approssimazioni asintotiche siano valide. Se molte celle attese sono piccole, combinare categorie sostanzialmente simili, usare un test esatto quando disponibile o scegliere un modello per conteggi sparsi.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "fixedEffectMetaAnalysis": [
      {
        "id": "fixedEffectMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.common_effect_size_and_standard_error_variance_available",
        "label": "Common effect size and standard error/variance available",
        "detail": "Ogni studio deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza. Controllare direzione della codifica, scala, trasformazione e se tutti gli studi usano la stessa metrica di dimensione dell'effetto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.studies_are_substantively_very_similar",
        "label": "Studies are substantively very similar",
        "detail": "Per Fixed-effect meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "fixedEffectMetaAnalysis.heterogeneity_is_low",
        "label": "Heterogeneity is low",
        "detail": "Questa assunzione deve essere verificata per Fixed-effect meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "friedman": [
      {
        "id": "friedman.several_paired_measurements",
        "label": "Several paired measurements",
        "detail": "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata. L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "friedman.same_cases_in_all_conditions",
        "label": "Same cases in all conditions",
        "detail": "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata. L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "generalizedLinearMixedModel": [
      {
        "id": "generalizedLinearMixedModel.dichotomous_categorical_or_count_dependent_variable",
        "label": "Dichotomous, categorical, or count dependent variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.appropriate_link_function_and_distribution",
        "label": "Appropriate link function and distribution",
        "detail": "La famiglia del modello deve corrispondere alla scala dell'esito e al processo generatore dei dati, ad esempio gaussiana per esiti continui, binomiale/logit per esiti binari, Poisson o binomiale negativa per conteggi e link cumulativi per esiti ordinali.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.clusters_or_persons_entered_as_random_effects",
        "label": "Clusters or persons entered as random effects",
        "detail": "I dati contengono strutture di raggruppamento, come misure ripetute entro partecipanti o atleti entro squadre. La struttura degli effetti casuali deve corrispondere alla domanda di disegno ed essere supportata da un numero sufficiente di cluster e osservazioni per cluster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "generalizedLinearMixedModel.adequate_events_per_parameter",
        "label": "Adequate events per parameter",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di groups, predictors and parameters invece del solo N totale.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "independentT": [
      {
        "id": "independentT.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.approximate_normality",
        "label": "Approximate normality",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, test di normalità, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "independentT.equal_variances_or_welch_correction",
        "label": "Equal variances or Welch correction",
        "detail": "I gruppi o i valori stimati dovrebbero mostrare una variabilità approssimativamente comparabile. Usare grafici dei residui, deviazioni standard di gruppo, controlli di tipo Levene o alternative robuste/Welch quando la variabilità differisce molto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnClassifier": [
      {
        "id": "knnClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Portare i predittori su scale comparabili prima di metodi basati su distanze o componenti quando le unità differiscono. Altrimenti le variabili con intervalli numerici più ampi possono dominare il risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "La misura di distanza o similarità scelta deve corrispondere al significato delle variabili e alla domanda di ricerca. Verificare se distanze euclidee, Manhattan, basate sulla correlazione o altre sono le più difendibili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnClassifier.choose_k_and_weighting_using_validation",
        "label": "Choose k and weighting using validation",
        "detail": "Valutare i modelli predittivi su dati non utilizzati per stimarli. Usare suddivisioni training/test, validazione incrociata o validazione esterna e riportare metriche adeguate all'esito e al bilanciamento delle classi.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "knnRegression": [
      {
        "id": "knnRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.scaled_standardised_predictors",
        "label": "Scaled/standardised predictors",
        "detail": "Portare i predittori su scale comparabili prima di metodi basati su distanze o componenti quando le unità differiscono. Altrimenti le variabili con intervalli numerici più ampi possono dominare il risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.meaningful_distance_metric",
        "label": "Meaningful distance metric",
        "detail": "La misura di distanza o similarità scelta deve corrispondere al significato delle variabili e alla domanda di ricerca. Verificare se distanze euclidee, Manhattan, basate sulla correlazione o altre sono le più difendibili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "knnRegression.choose_k_using_validation",
        "label": "Choose k using validation",
        "detail": "Valutare i modelli predittivi su dati non utilizzati per stimarli. Usare suddivisioni training/test, validazione incrociata o validazione esterna e riportare metriche adeguate all'esito e al bilanciamento delle classi.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kendall": [
      {
        "id": "kendall.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "Quando una variabile aumenta, l'altra dovrebbe tendere a salire o scendere in modo coerente, anche se la relazione non è lineare. Un diagramma di dispersione o dei ranghi è di solito il controllo più chiaro.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kendall.useful_with_ties_or_smaller_samples",
        "label": "Useful with ties or smaller samples",
        "detail": "Per Kendall's rank correlation, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "kruskalWallis": [
      {
        "id": "kruskalWallis.several_independent_groups",
        "label": "Several independent groups",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "kruskalWallis.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearMixedModel": [
      {
        "id": "linearMixedModel.metric_dependent_variable",
        "label": "Metric dependent variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.observations_nested_within_people_teams_or_measurement_occ",
        "label": "Observations nested within people, teams, or measurement occasions",
        "detail": "I dati contengono strutture di raggruppamento, come misure ripetute entro partecipanti o atleti entro squadre. La struttura degli effetti casuali deve corrispondere alla domanda di disegno ed essere supportata da un numero sufficiente di cluster e osservazioni per cluster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "I dati contengono strutture di raggruppamento, come misure ripetute entro partecipanti o atleti entro squadre. La struttura degli effetti casuali deve corrispondere alla domanda di disegno ed essere supportata da un numero sufficiente di cluster e osservazioni per cluster.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearMixedModel.check_residual_diagnostics_and_variance_structure",
        "label": "Check residual diagnostics and variance structure",
        "detail": "Questa assunzione deve essere verificata per Linear mixed model prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "linearRegression": [
      {
        "id": "linearRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.linear_relationships",
        "label": "Linear relationships",
        "detail": "L'associazione dovrebbe essere descritta adeguatamente da una relazione lineare sulla scala del modello. Diagrammi di dispersione, grafici dei residui parziali e grafici valori stimati-residui aiutano a rilevare curvature o pattern soglia.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.independent_residuals",
        "label": "Independent residuals",
        "detail": "Questa assunzione deve essere verificata per Linear regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.homoscedasticity_and_residual_diagnostics",
        "label": "Homoscedasticity and residual diagnostics",
        "detail": "I gruppi o i valori stimati dovrebbero mostrare una variabilità approssimativamente comparabile. Usare grafici dei residui, deviazioni standard di gruppo, controlli di tipo Levene o alternative robuste/Welch quando la variabilità differisce molto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "linearRegression.prediction_or_association_not_causality_by_itself",
        "label": "Prediction or association, not causality by itself",
        "detail": "Il modello statistico da solo non dimostra causalità. Un'interpretazione causale richiede supporto del disegno, come randomizzazione, ordine temporale, teoria solida, controllo accurato dei confondenti e analisi di sensibilità.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "logLinearModel": [
      {
        "id": "logLinearModel.several_nominal_variables",
        "label": "Several nominal variables",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.frequency_data_in_a_contingency_table",
        "label": "Frequency data in a contingency table",
        "detail": "Per Log-linear model, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "logLinearModel.sufficient_expected_cell_counts",
        "label": "Sufficient expected cell counts",
        "detail": "Le frequenze attese devono essere abbastanza grandi perché le approssimazioni asintotiche siano valide. Se molte celle attese sono piccole, combinare categorie sostanzialmente simili, usare un test esatto quando disponibile o scegliere un modello per conteggi sparsi.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mancova": [
      {
        "id": "mancova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.one_or_more_metric_covariates",
        "label": "One or more metric covariates",
        "detail": "Questa assunzione deve essere verificata per MANCOVA prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.linear_relation_between_covariates_and_dependent_variables",
        "label": "Linear relation between covariates and dependent variables",
        "detail": "L'associazione dovrebbe essere descritta adeguatamente da una relazione lineare sulla scala del modello. Diagrammi di dispersione, grafici dei residui parziali e grafici valori stimati-residui aiutano a rilevare curvature o pattern soglia.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.homogeneity_of_regression_slopes",
        "label": "Homogeneity of regression slopes",
        "detail": "La relazione tra ciascuna covariata e la variabile dipendente dovrebbe essere simile tra i gruppi. Controllare le interazioni covariata per gruppo.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mancova.multivariate_normality_and_homogeneity_of_covariance_matri",
        "label": "Multivariate normality and homogeneity of covariance matrices",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mannWhitney": [
      {
        "id": "mannWhitney.two_independent_groups",
        "label": "Two independent groups",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mannWhitney.similar_distribution_shapes_for_location_interpretation",
        "label": "Similar distribution shapes for location interpretation",
        "detail": "La famiglia del modello deve corrispondere alla scala dell'esito e al processo generatore dei dati, ad esempio link cumulativi per esiti ordinali.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "manova": [
      {
        "id": "manova.two_or_more_metric_dependent_variables",
        "label": "Two or more metric dependent variables",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.one_or_more_categorical_independent_variables",
        "label": "One or more categorical independent variables",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.multivariate_normality_within_groups",
        "label": "Multivariate normality within groups",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati. Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.homogeneity_of_covariance_matrices",
        "label": "Homogeneity of covariance matrices",
        "detail": "I gruppi dovrebbero avere matrici di covarianza ampiamente simili tra variabili dipendenti o predittori. Grandi differenze possono rendere instabili i test multivariati o le funzioni discriminanti, soprattutto con gruppi piccoli o di dimensioni disuguali. Questa assunzione deve essere verificata per MANOVA prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "manova.meaningful_correlations_among_dependent_variables",
        "label": "Meaningful correlations among dependent variables",
        "detail": "Questa assunzione deve essere verificata per MANOVA prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "mcnemar": [
      {
        "id": "mcnemar.two_paired_dichotomous_measurements",
        "label": "Two paired dichotomous measurements",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.paired_data",
        "label": "Paired data",
        "detail": "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata. L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "mcnemar.discordant_pairs_are_relevant",
        "label": "Discordant pairs are relevant",
        "detail": "Per McNemar test, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato. Questa assunzione deve essere verificata per McNemar test prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaMeanDifferenceAnalysis": [
      {
        "id": "metaMeanDifferenceAnalysis.n_m_and_sd_available_for_each_group",
        "label": "n, M, and SD available for each group",
        "detail": "Per Mean-difference meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.groups_and_measurement_scales_are_comparable",
        "label": "Groups and measurement scales are comparable",
        "detail": "Per Mean-difference meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili e alle statistiche descrittive prima di affidarsi al risultato. Questa assunzione deve essere verificata per Mean-difference meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Questa assunzione deve essere verificata per Mean-difference meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaMeanDifferenceAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects (depeding on the heterogenity expected), moderator analyses, and publication-bias checks in the model options",
        "detail": "I dati contengono strutture di raggruppamento, come misure ripetute entro partecipanti o atleti entro squadre. La struttura degli effetti casuali deve corrispondere alla domanda di disegno ed essere supportata da un numero sufficiente di cluster e osservazioni per cluster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "majorMetaAnalysis": [
      {
        "id": "majorMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Questa assunzione deve essere verificata per Meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.input_data_match_the_selected_option",
        "label": "Input data match the selected option",
        "detail": "Per Meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.justify_fixed_vs_random_effects_from_study_design_and_hete",
        "label": "Justify fixed vs. random effects from study design and heterogeneity",
        "detail": "Questa assunzione deve essere verificata per Meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "majorMetaAnalysis.report_moderator_analyses_and_publication_bias_checks_as_o",
        "label": "Report moderator analyses and publication-bias checks as optional follow-up analyses",
        "detail": "Questa assunzione deve essere verificata per Meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaRegression": [
      {
        "id": "metaRegression.enough_studies",
        "label": "Enough studies",
        "detail": "Questa assunzione deve essere verificata per Meta-regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.moderator_measured_at_study_level",
        "label": "Moderator measured at study level",
        "detail": "Per Meta-regression, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.same_effect_metric",
        "label": "Same effect metric",
        "detail": "Per Meta-regression, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaRegression.ecological_interpretation_considered",
        "label": "Ecological interpretation considered",
        "detail": "Questa assunzione deve essere verificata per Meta-regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multidimensionalScaling": [
      {
        "id": "multidimensionalScaling.distance_or_dissimilarity_matrix",
        "label": "Distance or dissimilarity matrix",
        "detail": "La misura di distanza o similarità scelta deve corrispondere al significato delle variabili e alla domanda di ricerca. Verificare se distanze euclidee, Manhattan, basate sulla correlazione o altre sono le più difendibili. Questa assunzione deve essere verificata per Multidimensional scaling prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.people_or_objects_are_comparable",
        "label": "People or objects are comparable",
        "detail": "Questa assunzione deve essere verificata per Multidimensional scaling prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.number_of_dimensions_chosen_using_stress_and_interpretabil",
        "label": "Number of dimensions chosen using stress and interpretability",
        "detail": "Questa assunzione deve essere verificata per Multidimensional scaling prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multidimensionalScaling.primarily_an_exploratory_representation",
        "label": "Primarily an exploratory representation",
        "detail": "Questa assunzione deve essere verificata per Multidimensional scaling prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "multinomialRegression": [
      {
        "id": "multinomialRegression.multicategory_categorical_outcome",
        "label": "Multicategory categorical outcome",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.Independence of Irrelevant Alternatives.",
        "label": "Independence of Irrelevant Alternatives (IIA)",
        "detail": "Questa assunzione deve essere verificata per Multinomial logistic regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.no_Multicolinearity",
        "label": "No Multicollinearity",
        "detail": "Questa assunzione deve essere verificata per Multinomial logistic regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "multinomialRegression.meaningful_reference_category",
        "label": "Meaningful reference category",
        "detail": "Questa assunzione deve essere verificata per Multinomial logistic regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "naiveBayes": [
      {
        "id": "naiveBayes.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.predictors_are_treated_as_approximately_conditionally_inde",
        "label": "Predictors are treated as approximately conditionally independent",
        "detail": "Per Naive Bayes classifier, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili. Questa assunzione deve essere verificata per Naive Bayes classifier prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.suitable_distribution_for_metric_features",
        "label": "Suitable distribution for metric features",
        "detail": "La famiglia del modello deve corrispondere alla scala dell'esito e al processo generatore dei dati, ad esempio gaussiana per esiti continui. Questa assunzione deve essere verificata per Naive Bayes classifier prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "naiveBayes.check_predicted_probabilities_with_validation_data",
        "label": "Check predicted probabilities with validation data",
        "detail": "Valutare i modelli predittivi su dati non utilizzati per stimarli. Questa assunzione deve essere verificata per Naive Bayes classifier prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "networkAnalysis": [
      {
        "id": "networkAnalysis.several_metric_or_ordinal_variables",
        "label": "Several metric or ordinal variables",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.edges_are_interpreted_as_conditional_associations",
        "label": "Edges are interpreted as conditional associations",
        "detail": "Questa assunzione deve essere verificata per Network analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Questa assunzione deve essere verificata per Network analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.network_stability_and_robustness_should_be_checked",
        "label": "Network stability and robustness should be checked",
        "detail": "Per Network analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili. Questa assunzione deve essere verificata per Network analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "networkAnalysis.no_causal_interpretation_without_a_suitable_design",
        "label": "No causal interpretation without a suitable design",
        "detail": "Il modello statistico da solo non dimostra causalità. Un'interpretazione causale richiede supporto del disegno, come randomizzazione, ordine temporale, teoria solida, controllo accurato dei confondenti e analisi di sensibilità.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayAnova": [
      {
        "id": "nonparametricTwoWayAnova.two_or_more_categorical_independent_factors",
        "label": "Two or more categorical independent factors",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Per Nonparametric factorial ANOVA (ART), questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "nonparametricTwoWayRepeatedAnova": [
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_one_repeated_measures_factor",
        "label": "At least one repeated-measures factor",
        "detail": "Per Nonparametric factorial repeated-measures ANOVA (ART), questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.at_least_ordinal_outcome",
        "label": "At least ordinal outcome",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.same_cases_in_paired_conditions",
        "label": "Same cases in paired conditions",
        "detail": "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata. L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "nonparametricTwoWayRepeatedAnova.interactions_tested_on_rank_transformed_data",
        "label": "Interactions tested on rank-transformed data",
        "detail": "Questa assunzione deve essere verificata per Nonparametric factorial repeated-measures ANOVA (ART) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaOddsRatioAnalysis": [
      {
        "id": "metaOddsRatioAnalysis.several_independent_studies",
        "label": "Several independent studies",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Questa assunzione deve essere verificata per Odds-ratio meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.events_and_total_sample_size_available_for_each_group",
        "label": "Events and total sample size available for each group",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di groups, predictors, parameters, events, clusters, and studies invece del solo N totale. Questa assunzione deve essere verificata per Odds-ratio meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added",
        "detail": "Per Odds-ratio meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili. Questa assunzione deve essere verificata per Odds-ratio meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaOddsRatioAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed or random effects, moderator analyses, and publication-bias checks in the model options",
        "detail": "Questa assunzione deve essere verificata per Odds-ratio meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleT": [
      {
        "id": "oneSampleT.metric_variable",
        "label": "Metric variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché le medie siano interpretabili. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleT.approximate_normal_distribution",
        "label": "Approximate normal distribution",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleWilcoxon": [
      {
        "id": "oneSampleWilcoxon.at_least_ordinal_data",
        "label": "At least ordinal data",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.symmetric_differences_helpful",
        "label": "Symmetric differences helpful",
        "detail": "Per One-sample Wilcoxon signed-rank test, questa assunzione deve essere verificata con grafici diagnostici prima di affidarsi al risultato. Questa assunzione deve essere verificata per One-sample Wilcoxon signed-rank test prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleWilcoxon.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "oneSampleZ": [
      {
        "id": "oneSampleZ.metric_variable",
        "label": "Metric variable",
        "detail": "La variabile deve essere sufficientemente quantitativa. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare né duplicare.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.known_population_standard_deviation_or_variance",
        "label": "Known population standard deviation or variance",
        "detail": "Ogni gruppo deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "oneSampleZ.normal_population_or_sufficiently_large_sample",
        "label": "Normal population or sufficiently large sample",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi. Esaminare istogrammi, grafici Q-Q e valori anomali.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "anova": [
      {
        "id": "anova.independent_groups",
        "label": "Independent groups",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché le medie siano interpretabili. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.normality_within_groups",
        "label": "Normality within groups",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi. Esaminare istogrammi, grafici Q-Q e valori anomali. Eseguire un test di normalità.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "anova.homogeneity_of_variances",
        "label": "Homogeneity of variances",
        "detail": "I gruppi o i valori stimati dovrebbero mostrare una variabilità approssimativamente comparabile. Usare grafici dei residui, deviazioni standard di gruppo, controlli di tipo Levene o alternative robuste/Welch quando la variabilità differisce molto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "ordinalMixedModel": [
      {
        "id": "ordinalMixedModel.ordinal_dependent_variable",
        "label": "Ordinal dependent variable",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.repeated_or_clustered_observations",
        "label": "Repeated or clustered observations",
        "detail": "I dati contengono strutture di raggruppamento, come misure ripetute entro partecipanti o atleti entro squadre. Questa assunzione deve essere verificata per Ordinal mixed model prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.check_proportional_odds_assumption",
        "label": "Check proportional-odds assumption",
        "detail": "Questa assunzione deve essere verificata per Ordinal mixed model prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "ordinalMixedModel.random_effects_are_theoretically_justified",
        "label": "Random effects are theoretically justified",
        "detail": "Questa assunzione deve essere verificata per Ordinal mixed model prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate. La struttura degli effetti casuali deve corrispondere alla domanda di disegno ed essere supportata da un numero sufficiente di cluster e osservazioni per cluster.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pairedT": [
      {
        "id": "pairedT.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata. L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.metric_difference_scores",
        "label": "Metric difference scores",
        "detail": "Questa assunzione deve essere verificata per Paired-samples t-test prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pairedT.approximate_normality_of_differences",
        "label": "Approximate normality of differences",
        "detail": "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi. Questa assunzione deve essere verificata per Paired-samples t-test prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pathAnalysis": [
      {
        "id": "pathAnalysis.all_variables_are_observed_measurable",
        "label": "All variables are observed/measurable",
        "detail": "Per Path analysis (mediation), questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili. Questa assunzione deve essere verificata per Path analysis (mediation) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.theoretically_justified_path_direction",
        "label": "Theoretically justified path direction",
        "detail": "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato. Documentare perché sono stati scelti paths.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.linear_relationships",
        "label": "Linear relationships",
        "detail": "L'associazione dovrebbe essere descritta adeguatamente da una relazione lineare sulla scala del modello.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Questa assunzione deve essere verificata per Path analysis (mediation) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pathAnalysis.causal_interpretation_only_with_a_suitable_design",
        "label": "Causal interpretation only with a suitable design",
        "detail": "Il modello statistico da solo non dimostra causalità. Un'interpretazione causale richiede supporto del disegno, come randomizzazione, ordine temporale, teoria solida, controllo accurato dei confondenti e analisi di sensibilità.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "chiSquareGoodness": [
      {
        "id": "chiSquareGoodness.multilevel_categorical_variable",
        "label": "Multilevel categorical variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.expected_frequencies_or_proportions_are_defined",
        "label": "Expected frequencies or proportions are defined",
        "detail": "Le frequenze attese devono essere abbastanza grandi perché le approssimazioni asintotiche siano valide. Se molte celle attese sono piccole, combinare categorie sostanzialmente simili o usare un test esatto quando disponibile.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "chiSquareGoodness.sufficient_expected_counts_per_category",
        "label": "Sufficient expected counts per category",
        "detail": "Se molte celle attese sono piccole, combinare categorie sostanzialmente simili, usare un test esatto quando disponibile o scegliere un modello per conteggi sparsi.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "pearson": [
      {
        "id": "pearson.metric_variables",
        "label": "Metric variables",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.linear_relationship",
        "label": "Linear relationship",
        "detail": "L'associazione dovrebbe essere descritta adeguatamente da una relazione lineare sulla scala del modello. Diagrammi di dispersione, grafici dei residui parziali e grafici valori stimati-residui aiutano a rilevare curvature o pattern soglia.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.no_dominant_outliers",
        "label": "No dominant outliers",
        "detail": "Poche osservazioni estreme o influenti non dovrebbero dominare il risultato. Esaminare dati grezzi, diagrammi di dispersione, residui standardizzati, leverage e diagnostiche di influenza prima di decidere se i valori siano errori, estremi legittimi o motivi per usare metodi robusti.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "pearson.for_inference_approximate_bivariate_normality",
        "label": "For inference: approximate bivariate normality",
        "detail": "Questa assunzione deve essere verificata per Pearson correlation prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "principalComponentAnalysis": [
      {
        "id": "principalComponentAnalysis.several_metric_or_approximately_metric_variables",
        "label": "Several metric or approximately metric variables",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.meaningful_correlations_among_variables",
        "label": "Meaningful correlations among variables",
        "detail": "Questa assunzione deve essere verificata per Principal component analysis (PCA) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.standardise_variables_on_different_scales",
        "label": "Standardise variables on different scales",
        "detail": "Portare i predittori su scale comparabili prima di metodi basati su distanze o componenti quando le unità differiscono. Altrimenti le variabili con intervalli numerici più ampi possono dominare il risultato.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.common_variance",
        "label": "Common variance among variables",
        "detail": "Questa assunzione deve essere verificata per Principal component analysis (PCA) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "principalComponentAnalysis.choose_components_by_explained_variance_and_interpretabili",
        "label": "Choose components by explained variance and interpretability",
        "detail": "Ogni studio deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza. Controllare direzione della codifica, scala, trasformazione e se tutti gli studi usano la stessa metrica di dimensione dell'effetto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "metaProportionAnalysis": [
      {
        "id": "metaProportionAnalysis.event_frequency_count_available_for_each_study",
        "label": "Event frequency/count available for each study",
        "detail": "Per Proportion meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili. Questa assunzione deve essere verificata per Proportion meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.total_sample_size_available_for_each_study",
        "label": "Total sample size available for each study",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di groups, and parameters invece del solo N totale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.moderator_and_study_label_can_be_added",
        "label": "Moderator and Study Label can be added.",
        "detail": "Per Proportion meta-analysis, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili e alle statistiche descrittive prima di affidarsi al risultato. Questa assunzione deve essere verificata per Proportion meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "metaProportionAnalysis.select_fixed_random_effects_moderator_analyses_and_publica",
        "label": "Select fixed/random effects, moderator analyses, and publication-bias checks in the model options.",
        "detail": "Questa assunzione deve essere verificata per Proportion meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestClassifier": [
      {
        "id": "randomForestClassifier.categorical_outcome_variable",
        "label": "Categorical outcome variable",
        "detail": "Le categorie devono essere mutuamente esclusive e codificate in modo coerente. Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di predictors, parameters, events, clusters invece del solo N totale. Questa assunzione deve essere verificata per Random forest classifier prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.validation_on_unseen_data",
        "label": "Validation on unseen data",
        "detail": "Valutare i modelli predittivi su dati non utilizzati per stimarli. Usare suddivisioni training/test, validazione incrociata o validazione esterna e riportare metriche adeguate all'esito e al bilanciamento delle classi.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestClassifier.handle_class_imbalance",
        "label": "Handle class imbalance",
        "detail": "Questa assunzione deve essere verificata per Random forest classifier prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomForestRegression": [
      {
        "id": "randomForestRegression.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.enough_cases_for_training_and_validation",
        "label": "Enough cases for training and validation",
        "detail": "Valutare i modelli predittivi su dati non utilizzati per stimarli. Usare suddivisioni training/test, validazione incrociata o validazione esterna e riportare metriche adeguate all'esito e al bilanciamento delle classi.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.tune_number_of_trees_and_variables_per_split",
        "label": "Tune number of trees and variables per split",
        "detail": "Questa assunzione deve essere verificata per Random forest regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomForestRegression.interpret_with_variable_importance_or_partial_effects",
        "label": "Interpret with variable importance or partial effects",
        "detail": "Questa assunzione deve essere verificata per Random forest regression prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "randomEffectsMetaAnalysis": [
      {
        "id": "randomEffectsMetaAnalysis.several_independent_studies_or_effect_sizes",
        "label": "Several independent studies or effect sizes",
        "detail": "Questa assunzione deve essere verificata per Random-effects meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.effect_size_and_precision_measure_available",
        "label": "Effect size and precision measure available",
        "detail": "Ogni studio deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza. Controllare direzione della codifica, scala, trasformazione e se tutti gli studi usano la stessa metrica di dimensione dell'effetto.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.between_study_variance_is_estimated",
        "label": "Between-study variance is estimated",
        "detail": "Ogni studio deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "randomEffectsMetaAnalysis.heterogeneity_is_reported_with_tau2_i2",
        "label": "Heterogeneity is reported with tau2/I2",
        "detail": "Questa assunzione deve essere verificata per Random-effects meta-analysis prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "repeatedAnova": [
      {
        "id": "repeatedAnova.repeated_measurements",
        "label": "Repeated measurements",
        "detail": "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata. L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.metric_outcome_variable",
        "label": "Metric outcome variable",
        "detail": "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi. Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "repeatedAnova.sphericity_or_suitable_correction",
        "label": "Sphericity or suitable correction",
        "detail": "Per fattori a misure ripetute con più di due livelli, le varianze delle differenze a coppie dovrebbero essere simili. Se questo è dubbio, riportare una correzione come Greenhouse-Geisser o usare un approccio a modello misto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "spearman": [
      {
        "id": "spearman.at_least_ordinal_scale_level",
        "label": "At least ordinal scale level",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.monotonic_relationship",
        "label": "Monotonic relationship",
        "detail": "Quando una variabile aumenta, l'altra dovrebbe tendere a salire o scendere in modo coerente, anche se la relazione non è lineare. Un diagramma di dispersione o dei ranghi è di solito il controllo più chiaro.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "spearman.independent_observations",
        "label": "Independent observations",
        "detail": "Una osservazione non deve determinare o duplicare un'altra osservazione. Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "structuralEquationModeling": [
      {
        "id": "structuralEquationModeling.latent_constructs_measured_by_multiple_indicators",
        "label": "Latent constructs measured by multiple indicators",
        "detail": "Per Structural equation modeling (SEM), questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili prima di affidarsi al risultato. Questa assunzione deve essere verificata per Structural equation modeling (SEM) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.theoretically_justified_measurement_and_structural_model",
        "label": "Theoretically justified measurement and structural model",
        "detail": "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato. Documentare perché sono stati scelti percorsi, fattori, covariate, sottogruppi o proporzioni attese.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.adequate_sample_size",
        "label": "Adequate sample size",
        "detail": "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile. Considerare il numero di groups, predictors, parameters, events, clusters, and studies invece del solo N totale. Questa assunzione deve essere verificata per Structural equation modeling (SEM) prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "structuralEquationModeling.model_fit_and_alternative_models_should_be_evaluated",
        "label": "Model fit and alternative models should be evaluated",
        "detail": "Valutare adattamento globale, residui locali, stime dei parametri e alternative teoricamente plausibili. Un adattamento statisticamente accettabile non rende da solo il modello sostanzialmente corretto.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ],
    "wilcoxon": [
      {
        "id": "wilcoxon.two_paired_measurements",
        "label": "Two paired measurements",
        "detail": "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata. L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard.",
        "howToCheck": "",
        "whatToReport": ""
      },
      {
        "id": "wilcoxon.at_least_ordinal_values",
        "label": "At least ordinal values",
        "detail": "I valori devono avere almeno un ordine significativo. La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie.",
        "howToCheck": "",
        "whatToReport": ""
      }
    ]
  }
};
