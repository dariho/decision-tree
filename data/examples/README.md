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
| `kruskalWallis` | `kruskalWallis.csv` | Outcome `rank_score`, grouping variable `group`. |
| `friedman` | `friedman.csv` | Repeated measures columns: `condition_a`, `condition_b`, `condition_c`; subject id: `id`. |
| `fisher` | `fisher.csv` | 2x2 table: `treatment` by `response`; enable Fisher's exact test. |
| `mcnemar` | `mcnemar.csv` | Paired categorical variables: `before`, `after`. |
| `chiSquareGoodness` | `chiSquareGoodness.csv` | One categorical variable: `preference`; compare to expected proportions. |
| `linearRegression` | `linearRegression.csv` | Dependent variable `y`; predictors `x1` and `x2`. |
| `logisticRegression` | `logisticRegression.csv` | Dichotomous dependent variable `y`; predictors `age` and `hours`. |
| `multinomialRegression` | `multinomialRegression.csv` | Multicategory dependent variable `choice`; predictors `study_hours` and `motivation`. |
| `pathAnalysis` | `pathAnalysis.csv` | Observed-variable mediation model: `predictor` -> `mediator` -> `outcome`. |
| `structuralEquationModeling` | `structuralEquationModeling.csv` | Latent `stress` and `sleep` indicators plus observed `performance`. |
| `factorAnalysis` | `factorAnalysis.csv` | Explore factors among the stress, mood, and sleep item columns. |
| `clusterAnalysis` | `clusterAnalysis.csv` | Cluster athletes using training load, recovery, sprint, jump, and injury variables. |
| `multidimensionalScaling` | `multidimensionalScaling.csv` | Use the symmetric distance matrix among emotions for MDS. |
| `chiSquareVariance` | `chiSquareVariance.csv` | Test the variance of `score` against a hypothesised population variance, e.g. `100`. |
| `varianceFTest` | `varianceFTest.csv` | Compare the variance of `score` between the two levels of `group`. |

For clean screenshots, avoid extra ID columns unless Jamovi needs them for the specific analysis. Extra variables can accidentally be selected during manual setup.
