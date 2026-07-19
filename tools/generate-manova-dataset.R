set.seed(260718)

out_file <- "data/examples/manova.csv"
groups <- c("control", "mindfulness", "exercise")
n_per_group <- 45
vars <- c("stress_score", "wellbeing_score", "performance_score")

means <- list(
  control = c(61.0, 52.0, 69.0),
  mindfulness = c(55.0, 58.5, 74.0),
  exercise = c(57.0, 56.5, 77.0)
)

target_cov <- matrix(
  c(
    30.0, -13.0, -10.0,
    -13.0, 28.0,  11.0,
    -10.0, 11.0,  26.0
  ),
  nrow = 3,
  byrow = TRUE
)

box_m_test <- function(data, group_col, variable_cols) {
  group <- factor(data[[group_col]])
  split_data <- split(data[variable_cols], group)
  group_sizes <- vapply(split_data, nrow, numeric(1))
  group_covs <- lapply(split_data, cov)
  p <- length(variable_cols)
  g <- length(group_sizes)
  total_n <- sum(group_sizes)

  pooled <- Reduce(
    `+`,
    Map(function(s, n) (n - 1) * s, group_covs, group_sizes)
  ) / (total_n - g)

  m_value <- (total_n - g) * as.numeric(determinant(pooled, logarithm = TRUE)$modulus) -
    sum(unlist(Map(
      function(s, n) (n - 1) * as.numeric(determinant(s, logarithm = TRUE)$modulus),
      group_covs,
      group_sizes
    )))

  correction <- ((2 * p^2 + 3 * p - 1) / (6 * (p + 1) * (g - 1))) *
    (sum(1 / (group_sizes - 1)) - 1 / (total_n - g))
  chi_square <- m_value * (1 - correction)
  df <- (g - 1) * p * (p + 1) / 2

  list(
    statistic = chi_square,
    df = df,
    p_value = pchisq(chi_square, df = df, lower.tail = FALSE)
  )
}

make_data <- function(seed) {
  set.seed(seed)
  chol_cov <- chol(target_cov)
  rows <- list()
  participant <- 1

  for (group_name in groups) {
    z <- matrix(rnorm(n_per_group * length(vars)), ncol = length(vars))
    values <- sweep(z %*% chol_cov, 2, means[[group_name]], `+`)
    values <- round(values, 2)

    group_rows <- data.frame(
      participant = participant:(participant + n_per_group - 1),
      group = group_name,
      values,
      check.names = FALSE
    )
    names(group_rows)[3:5] <- vars
    rows[[group_name]] <- group_rows
    participant <- participant + n_per_group
  }

  do.call(rbind, rows)
}

passes_checks <- function(data) {
  shapiro_by_group <- unlist(lapply(vars, function(variable) {
    tapply(data[[variable]], data$group, function(x) shapiro.test(x)$p.value)
  }))
  shapiro_overall <- vapply(vars, function(variable) shapiro.test(data[[variable]])$p.value, numeric(1))
  box_m <- box_m_test(data, "group", vars)

  min(shapiro_by_group) > 0.10 &&
    min(shapiro_overall) > 0.10 &&
    box_m$p_value > 0.10
}

chosen_seed <- NA_integer_
dataset <- NULL

for (seed in 260718:(260718 + 5000)) {
  candidate <- make_data(seed)
  if (passes_checks(candidate)) {
    chosen_seed <- seed
    dataset <- candidate
    break
  }
}

if (is.null(dataset)) {
  stop("No dataset met the diagnostic thresholds. Increase the search range.")
}

write.csv(dataset, out_file, row.names = FALSE, quote = FALSE)

box_m <- box_m_test(dataset, "group", vars)
shapiro_by_group <- do.call(rbind, lapply(vars, function(variable) {
  data.frame(
    variable = variable,
    group = names(tapply(dataset[[variable]], dataset$group, function(x) shapiro.test(x)$p.value)),
    p_value = as.numeric(tapply(dataset[[variable]], dataset$group, function(x) shapiro.test(x)$p.value))
  )
}))
shapiro_overall <- data.frame(
  variable = vars,
  p_value = vapply(vars, function(variable) shapiro.test(dataset[[variable]])$p.value, numeric(1))
)

cat("MANOVA dataset written to", out_file, "\n")
cat("Seed:", chosen_seed, "\n")
cat("Rows:", nrow(dataset), "\n")
cat("Box's M approximation: chi-square =", round(box_m$statistic, 3), "df =", box_m$df, "p =", round(box_m$p_value, 3), "\n")
cat("Minimum Shapiro-Wilk p by group:", round(min(shapiro_by_group$p_value), 3), "\n")
cat("Minimum Shapiro-Wilk p overall:", round(min(shapiro_overall$p_value), 3), "\n")
