# Example Datasets

Each CSV matches one result id in the decision tree. Use these files to create Jamovi screenshots and to test the R snippets.

| Result id | CSV | Variables to use |
| --- | --- | --- |
| `pearson` | `pearson.csv` | Correlate `x` and `y` with Pearson. |
| `spearman` | `spearman.csv` | Correlate `stress_rank` and `wellbeing_rank` with Spearman. |
| `kendall` | `kendall.csv` | Correlate `adherence_rank` and `wellbeing_rank` with Kendall's tau. |
| `chiSquareAssociation` | `chiSquareAssociation.csv` | Contingency table: `group` by `outcome`. |
| `logLinearModel` | `logLinearModel.csv` | Multiway nominal table using `therapy`, `outcome`, `gender`, and frequency `count`. |
| `oneSampleT` | `oneSampleT.csv` | Test `score` against a reference value, e.g. `50`. |
| `oneSampleWilcoxon` | `oneSampleWilcoxon.csv` | Test `rating` against a reference value, e.g. `3`. |
| `independentT` | `independentT.csv` | Dependent variable `score`, grouping variable `group`. |
| `mannWhitney` | `mannWhitney.csv` | Outcome `pain_score`, grouping variable `group`. |
| `pairedT` | `pairedT.csv` | Pair `before` with `after`. |
| `wilcoxon` | `wilcoxon.csv` | Pair `before` with `after`, use Wilcoxon signed-rank. |
| `anova` | `anova.csv` | Dependent variable `score`, factor `group`. |
| `repeatedAnova` | `repeatedAnova.csv` | Repeated measures columns: `baseline`, `week4`, `week8`; subject id: `id`. |
| `twoWayAnova` | `twoWayAnova.csv` | Dependent variable `stress_score`; fixed factors `therapy` and `age_group`. |
| `twoWayRepeatedAnova` | `twoWayRepeatedAnova.csv` | Repeated measures cells from two within-subject factors: intensity (`low`, `high`) by time (`pre`, `post`, `followup`). |
| `linearMixedModel` | `linearMixedModel.csv` | Metric outcome `score`; fixed effects `condition` and `week`; random intercept for `participant`. |
| `generalizedLinearMixedModel` | `generalizedLinearMixedModel.csv` | Binary nominal outcome `success` (`no`/`yes`); fixed effects `condition` and `week`; random intercept for `participant`; use binomial/logit, not a linear mixed model. |
| `ordinalMixedModel` | `ordinalMixedModel.csv` | Ordinal outcome `rating`; fixed effects `condition` and `day`; random intercept for `participant` or `team`. |
| `kruskalWallis` | `kruskalWallis.csv` | Outcome `rank_score`, grouping variable `group`. |
| `friedman` | `friedman.csv` | Repeated measures columns: `condition_a`, `condition_b`, `condition_c`; subject id: `id`. |
| `nonparametricTwoWayAnova` | `nonparametricTwoWayAnova.csv` | Ordinal outcome `stress_rating`; fixed factors `therapy` and `age_group`; use ART in R/Rj Editor. |
| `nonparametricTwoWayRepeatedAnova` | `nonparametricTwoWayRepeatedAnova.csv` | Ordinal repeated cells from intensity (`low`, `high`) by time (`pre`, `post`, `followup`); use ART in R/Rj Editor. |
| `fisher` | `fisher.csv` | 2x2 table: `treatment` by `response`; enable Fisher's exact test. |
| `mcnemar` | `mcnemar.csv` | Paired categorical variables: `before`, `after`. |
| `binomialTest` | `binomialTest.csv` | Two-level variable `response`; compare the observed `yes` proportion to an expected value, e.g. `0.50`. |
| `chiSquareGoodness` | `chiSquareGoodness.csv` | Multilevel categorical variable `preference`; compare observed frequencies to expected proportions. |
| `linearRegression` | `linearRegression.csv` | Dependent variable `race_time_min`; predictors `training_volume_km_week`, `vo2max_ml_kg_min`, and `age_years`. |
| `decisionTreeRegression` | `decisionTreeRegression.csv` | Dependent variable `race_time_min`; predictors `training_volume_km_week`, `vo2max_ml_kg_min`, `recovery_score`, `sleep_hours`, `age_years`, and `previous_injury`. |
| `randomForestRegression` | `randomForestRegression.csv` | Dependent variable `race_time_min`; predictors `training_volume_km_week`, `vo2max_ml_kg_min`, `tempo_pace_min_km`, `long_run_km`, `recovery_score`, `sleep_hours`, `age_years`, and `injury_days_last_month`. |
| `logisticRegression` | `logisticRegression.csv` | Binary outcome `injury`; predictors `training_load_au`, `previous_injury`, `recovery_score`, and `age_years`. |
| `multinomialRegression` | `multinomialRegression.csv` | Multicategory outcome `treatment_outcome`; predictors `baseline_symptom_score`, `motivation_score`, `previous_therapy`, and `age_years`. |
| `pathAnalysis` | `pathAnalysis.csv` | Observed-variable mediation model: `predictor` -> `mediator` -> `outcome`. |
| `structuralEquationModeling` | `structuralEquationModeling.csv` | Latent `stress` and `sleep` indicators plus observed `performance`. |
| `discriminantAnalysis` | `discriminantAnalysis.csv` | Nominal dependent variable `group`; interval-scaled predictors `anxiety`, `motivation`, and `reaction_time`. |
| `factorAnalysis` | `factorAnalysis.csv` | Explore factors among the stress, mood, and sleep item columns. |
| `clusterAnalysis` | `clusterAnalysis.csv` | Cluster athletes using training load, recovery, sprint, jump, and injury variables. |
| `multidimensionalScaling` | `multidimensionalScaling.csv` | Use the symmetric distance matrix among emotions for MDS. |
| `chiSquareVariance` | `chiSquareVariance.csv` | Test the variance of `score` against a hypothesised population variance, e.g. `100`. |
| `varianceFTest` | `varianceFTest.csv` | Compare the variance of `score` between the two levels of `group`. |

For clean screenshots, avoid extra ID columns unless Jamovi needs them for the specific analysis. Extra variables can accidentally be selected during manual setup.
