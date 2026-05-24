# Jamovi Screenshot Workflow

Use this workflow when creating Jamovi GUI screenshots manually. The website can load a different screenshot for each interface language, so translated images should be saved as separate files.

## Capture Setup

1. Open the matching demo CSV in Jamovi.
2. Set up the analysis exactly as described in the website's Jamovi procedure text.
3. Keep the Jamovi window at a consistent size, ideally around 1280 x 800 px.
4. Make the result table visible on the right side.
5. Capture the Jamovi window only, not the whole desktop.
6. Save the file using the language-specific pattern below.

## Language-Specific Screenshots

Use one screenshot per language when the screenshot text should be translated directly inside the image:

| Language | File pattern |
| --- | --- |
| German | `assets/jamovi/de/<resultId>.png` |
| English | `assets/jamovi/en/<resultId>.png` |
| French | `assets/jamovi/fr/<resultId>.png` |
| Spanish | `assets/jamovi/es/<resultId>.png` |

If a language-specific screenshot is missing, the website can fall back to the default image defined in `app.js`.

There are two good ways to translate the screenshot image:

1. Set Jamovi itself to the target language, recreate the analysis, and capture the window again.
2. Edit the screenshot in an image editor and replace only the visible labels/titles while keeping the table values unchanged.

The first option is preferred because it avoids alignment and typography problems.

On macOS, the easiest manual capture is:

1. Press `Shift + Command + 5`.
2. Choose `Capture Selected Window`.
3. Click the Jamovi window.
4. Rename the screenshot to the expected filename.

## Add The Screenshot To The Website

In `app.js`, add the screenshot path to `procedureScreenshots`:

```js
const procedureScreenshots = {
  independentT: {
    jamovi: {
      de: "assets/jamovi/de/independentT.png",
      en: "assets/jamovi/en/independentT.png",
      fr: "assets/jamovi/fr/independentT.png",
      es: "assets/jamovi/es/independentT.png",
      default: "assets/jamovi/independentT.png"
    }
  },
  pairedT: {
    jamovi: {
      de: "assets/jamovi/de/pairedT.png",
      en: "assets/jamovi/en/pairedT.png",
      fr: "assets/jamovi/fr/pairedT.png",
      es: "assets/jamovi/es/pairedT.png",
      default: "assets/jamovi/pairedT.png"
    }
  }
};
```

## Screenshot Queue

| Result id | Website result | File name |
| --- | --- | --- |
| `pearson` | Pearson correlation | `assets/jamovi/<lang>/pearson.png` |
| `spearman` | Spearman rank correlation | `assets/jamovi/<lang>/spearman.png` |
| `chiSquareAssociation` | Chi-square test of independence | `assets/jamovi/<lang>/chiSquareAssociation.png` |
| `oneSampleT` | One-sample t-test | `assets/jamovi/<lang>/oneSampleT.png` |
| `oneSampleWilcoxon` | One-sample Wilcoxon signed-rank test | `assets/jamovi/<lang>/oneSampleWilcoxon.png` |
| `independentT` | Independent-samples t-test | `assets/jamovi/<lang>/independentT.png` |
| `mannWhitney` | Mann-Whitney U test | `assets/jamovi/<lang>/mannWhitney.png` |
| `pairedT` | Paired-samples t-test | `assets/jamovi/<lang>/pairedT.png` |
| `wilcoxon` | Wilcoxon signed-rank test | `assets/jamovi/<lang>/wilcoxon.png` |
| `anova` | One-way ANOVA | `assets/jamovi/<lang>/anova.png` |
| `repeatedAnova` | Repeated-measures ANOVA | `assets/jamovi/<lang>/repeatedAnova.png` |
| `kruskalWallis` | Kruskal-Wallis test | `assets/jamovi/<lang>/kruskalWallis.png` |
| `friedman` | Friedman test | `assets/jamovi/<lang>/friedman.png` |
| `fisher` | Fisher's exact test | `assets/jamovi/<lang>/fisher.png` |
| `mcnemar` | McNemar test | `assets/jamovi/<lang>/mcnemar.png` |
| `chiSquareGoodness` | Chi-square goodness-of-fit test | `assets/jamovi/<lang>/chiSquareGoodness.png` |
| `linearRegression` | Linear regression | `assets/jamovi/<lang>/linearRegression.png` |
| `logisticRegression` | Binary logistic regression | `assets/jamovi/<lang>/logisticRegression.png` |
| `multinomialRegression` | Multinomial logistic regression | `assets/jamovi/<lang>/multinomialRegression.png` |

## Quality Checklist

Before adding a screenshot:

- The result table is visible and readable.
- The variables shown match the procedure.
- No wrong or duplicate variables are selected.
- The screenshot file name matches the result id exactly.
- A translated screenshot is created for every target language, or a deliberate fallback image is configured.
- The page is checked with Jamovi selected and again after switching to R.

## Current Pilot

`independentT` is the validated pilot screenshot. The paired t-test automation attempt was intentionally stopped because coordinate-based variable assignment was unreliable; manual screenshots are the preferred workflow from here.
