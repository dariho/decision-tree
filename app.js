const tree = {
  goal: {
    area: "Ausgangspunkt",
    question: "Welche Art von Forschungsfrage möchten Sie beantworten?",
    hint: "Beginnen Sie mit dem Ziel der Analyse. Der Baum führt Sie anschließend über Skalenniveau, Gruppendesign und Verteilungsannahmen.",
    step: "Fragestellung",
    answers: [
      { label: "Zusammenhang zwischen Variablen prüfen", next: "associationScale" },
      { label: "Unterschiede oder Mittelwerte vergleichen", next: "comparisonOutcome" },
      { label: "Eine Zielvariable vorhersagen", next: "predictionOutcome" },
      { label: "Häufigkeiten oder Kategorien vergleichen", next: "categoricalDesign" }
    ]
  },
  associationScale: {
    area: "Skalenniveau",
    question: "Wie sind die beiden Variablen skaliert?",
    hint: "Für Korrelationen ist besonders wichtig, ob die Variablen metrisch oder ordinal/kategorial sind.",
    step: "Skalenniveau",
    answers: [
      { label: "Beide Variablen metrisch", next: "normalAssociation" },
      { label: "Mindestens eine Variable ordinal", result: "spearman" },
      { label: "Beide Variablen kategorial", result: "chiSquareAssociation" }
    ]
  },
  normalAssociation: {
    area: "Voraussetzung",
    question: "Ist ein linearer Zusammenhang plausibel und sind starke Ausreißer ausgeschlossen?",
    hint: "Ein Streudiagramm ist hier oft hilfreicher als ein einzelner Kennwert.",
    step: "Annahmen",
    answers: [
      { label: "Ja, lineare Beziehung ist plausibel", result: "pearson" },
      { label: "Nein oder unsicher", result: "spearman" }
    ]
  },
  comparisonOutcome: {
    area: "Skalenniveau",
    question: "Welche Art von abhängiger Variable liegt vor?",
    hint: "Metrische Zielgrößen führen meist zu t-Tests oder Varianzanalysen. Ordinale Zielgrößen benötigen robuste Alternativen.",
    step: "Skalenniveau",
    answers: [
      { label: "Metrische abhängige Variable", next: "metricGroups" },
      { label: "Ordinale abhängige Variable", next: "ordinalGroups" },
      { label: "Kategoriale abhängige Variable", next: "categoricalDesign" }
    ]
  },
  metricGroups: {
    area: "Gruppendesign",
    question: "Wie viele Gruppen oder Messzeitpunkte vergleichen Sie?",
    hint: "Unterscheiden Sie unabhängige Gruppen von verbundenen Messungen, etwa Vorher-Nachher-Daten.",
    step: "Gruppen",
    answers: [
      { label: "Eine Stichprobe gegen einen Sollwert", next: "oneSampleNormal" },
      { label: "Zwei unabhängige Gruppen", next: "twoIndependentNormal" },
      { label: "Zwei verbundene Messungen", next: "twoPairedNormal" },
      { label: "Mehr als zwei Gruppen oder Zeitpunkte", next: "manyGroupsDesign" }
    ]
  },
  oneSampleNormal: {
    area: "Voraussetzung",
    question: "Ist die metrische Variable ungefähr normalverteilt?",
    hint: "Bei kleinen Stichproben ist die Annahme wichtiger. Bei großen Stichproben hilft zusätzlich die grafische Prüfung.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "oneSampleT" },
      { label: "Nein oder deutlich schief", result: "oneSampleWilcoxon" }
    ]
  },
  twoIndependentNormal: {
    area: "Voraussetzung",
    question: "Sind Normalverteilung und Varianzhomogenität ausreichend plausibel?",
    hint: "Prüfen Sie Verteilung je Gruppe und betrachten Sie die Gruppengrößen.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "independentT" },
      { label: "Nein oder unsicher", result: "mannWhitney" }
    ]
  },
  twoPairedNormal: {
    area: "Voraussetzung",
    question: "Sind die Differenzen der verbundenen Messungen ungefähr normalverteilt?",
    hint: "Bei Paarvergleichen zählt die Verteilung der Differenzwerte, nicht nur jede Messung einzeln.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "pairedT" },
      { label: "Nein oder ordinal", result: "wilcoxon" }
    ]
  },
  manyGroupsDesign: {
    area: "Gruppendesign",
    question: "Sind die Gruppen unabhängig oder handelt es sich um wiederholte Messungen?",
    hint: "Das Design entscheidet, ob eine klassische oder messwiederholte Varianzanalyse passt.",
    step: "Gruppen",
    answers: [
      { label: "Unabhängige Gruppen", next: "anovaAssumptions" },
      { label: "Wiederholte Messungen", next: "repeatedAssumptions" }
    ]
  },
  anovaAssumptions: {
    area: "Voraussetzung",
    question: "Sind Normalverteilung je Gruppe und Varianzhomogenität vertretbar?",
    hint: "Bei verletzten Annahmen ist eine nichtparametrische Alternative oft robuster.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "anova" },
      { label: "Nein oder ordinal", result: "kruskalWallis" }
    ]
  },
  repeatedAssumptions: {
    area: "Voraussetzung",
    question: "Sind metrische Messwerte und Sphärizität ausreichend plausibel?",
    hint: "Bei wiederholten Messungen können Korrekturen wie Greenhouse-Geisser nötig werden.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "repeatedAnova" },
      { label: "Nein oder ordinal", result: "friedman" }
    ]
  },
  ordinalGroups: {
    area: "Gruppendesign",
    question: "Wie sind die ordinalen Messungen angeordnet?",
    hint: "Die robusten Alternativen unterscheiden ebenfalls zwischen unabhängigen und verbundenen Daten.",
    step: "Gruppen",
    answers: [
      { label: "Zwei unabhängige Gruppen", result: "mannWhitney" },
      { label: "Zwei verbundene Messungen", result: "wilcoxon" },
      { label: "Mehrere unabhängige Gruppen", result: "kruskalWallis" },
      { label: "Mehrere verbundene Messungen", result: "friedman" }
    ]
  },
  categoricalDesign: {
    area: "Kategorien",
    question: "Wie ist die kategoriale Fragestellung aufgebaut?",
    hint: "Für Häufigkeiten zählen Anzahl Variablen, erwartete Zellhäufigkeiten und ob die Beobachtungen verbunden sind.",
    step: "Kategorien",
    answers: [
      { label: "Zwei unabhängige kategoriale Variablen", result: "chiSquareAssociation" },
      { label: "Kleine erwartete Häufigkeiten in einer 2x2-Tabelle", result: "fisher" },
      { label: "Zwei verbundene dichotome Messungen", result: "mcnemar" },
      { label: "Eine kategoriale Verteilung gegen Erwartungswerte", result: "chiSquareGoodness" }
    ]
  },
  predictionOutcome: {
    area: "Zielvariable",
    question: "Welches Skalenniveau hat die vorherzusagende Zielvariable?",
    hint: "Die Zielvariable bestimmt die Modellfamilie. Die Prädiktoren können metrisch oder kategorial codiert sein.",
    step: "Zielvariable",
    answers: [
      { label: "Metrische Zielvariable", result: "linearRegression" },
      { label: "Dichotome Zielvariable", result: "logisticRegression" },
      { label: "Mehrstufige kategoriale Zielvariable", result: "multinomialRegression" }
    ]
  },
};

const results = {
  pearson: {
    title: "Pearson-Korrelation",
    summary: "Geeignet, wenn zwei metrische Variablen auf einen linearen Zusammenhang geprüft werden.",
    assumptions: ["Metrische Variablen", "Lineare Beziehung", "Keine dominanten Ausreißer", "Bei Inferenz: annähernde bivariate Normalität"]
  },
  spearman: {
    title: "Spearman-Rangkorrelation",
    summary: "Robuste Wahl für ordinale Variablen oder monotone Zusammenhänge ohne strenge Linearitätsannahme.",
    assumptions: ["Mindestens ordinales Skalenniveau", "Monotone Beziehung", "Unabhängige Beobachtungen"]
  },
  chiSquareAssociation: {
    title: "Chi-Quadrat-Test auf Unabhängigkeit",
    summary: "Prüft, ob zwei kategoriale Variablen statistisch voneinander abhängig sind.",
    assumptions: ["Kategoriale Variablen", "Unabhängige Beobachtungen", "Ausreichend erwartete Zellhäufigkeiten"]
  },
  oneSampleT: {
    title: "Einstichproben-t-Test",
    summary: "Vergleicht den Mittelwert einer metrischen Stichprobe mit einem vorgegebenen Referenzwert.",
    assumptions: ["Metrische Variable", "Unabhängige Beobachtungen", "Annähernde Normalverteilung"]
  },
  oneSampleWilcoxon: {
    title: "Wilcoxon-Vorzeichenrangtest für eine Stichprobe",
    summary: "Nichtparametrische Alternative, wenn ein Median oder Rangmuster gegen einen Referenzwert geprüft wird.",
    assumptions: ["Mindestens ordinale Daten", "Symmetrische Differenzen hilfreich", "Unabhängige Beobachtungen"]
  },
  independentT: {
    title: "t-Test für unabhängige Stichproben",
    summary: "Vergleicht die Mittelwerte zweier unabhängiger Gruppen bei metrischer Zielvariable.",
    assumptions: ["Zwei unabhängige Gruppen", "Metrische Zielvariable", "Annähernde Normalverteilung", "Varianzhomogenität oder Welch-Korrektur"]
  },
  mannWhitney: {
    title: "Mann-Whitney-U-Test",
    summary: "Nichtparametrische Alternative zum unabhängigen t-Test für zwei unabhängige Gruppen.",
    assumptions: ["Zwei unabhängige Gruppen", "Mindestens ordinale Zielvariable", "Ähnliche Verteilungsform bei Lageinterpretation"]
  },
  pairedT: {
    title: "t-Test für verbundene Stichproben",
    summary: "Vergleicht zwei verbundene Mittelwerte, zum Beispiel Vorher-Nachher-Messungen.",
    assumptions: ["Zwei verbundene Messungen", "Metrische Differenzwerte", "Annähernde Normalverteilung der Differenzen"]
  },
  wilcoxon: {
    title: "Wilcoxon-Vorzeichenrangtest",
    summary: "Nichtparametrische Wahl für zwei verbundene Messungen oder ordinale Paarvergleiche.",
    assumptions: ["Zwei verbundene Messungen", "Mindestens ordinale Werte", "Paarweise Zuordnung vorhanden"]
  },
  anova: {
    title: "Einfaktorielle ANOVA",
    summary: "Vergleicht Mittelwerte von mehr als zwei unabhängigen Gruppen.",
    assumptions: ["Unabhängige Gruppen", "Metrische Zielvariable", "Normalverteilung je Gruppe", "Varianzhomogenität"]
  },
  repeatedAnova: {
    title: "ANOVA mit Messwiederholung",
    summary: "Prüft Mittelwertunterschiede über mehrere verbundene Messzeitpunkte oder Bedingungen.",
    assumptions: ["Verbundene Messungen", "Metrische Zielvariable", "Sphärizität oder geeignete Korrektur"]
  },
  kruskalWallis: {
    title: "Kruskal-Wallis-Test",
    summary: "Nichtparametrische Alternative zur einfaktoriellen ANOVA für mehrere unabhängige Gruppen.",
    assumptions: ["Mehrere unabhängige Gruppen", "Mindestens ordinale Zielvariable", "Unabhängige Beobachtungen"]
  },
  friedman: {
    title: "Friedman-Test",
    summary: "Nichtparametrische Alternative zur ANOVA mit Messwiederholung für mehrere verbundene Bedingungen.",
    assumptions: ["Mehrere verbundene Messungen", "Mindestens ordinale Werte", "Gleiche Fälle in allen Bedingungen"]
  },
  fisher: {
    title: "Exakter Test nach Fisher",
    summary: "Prüft Zusammenhänge in kleinen 2x2-Kreuztabellen, wenn Chi-Quadrat-Annahmen nicht halten.",
    assumptions: ["Dichotome kategoriale Variablen", "Unabhängige Beobachtungen", "Kleine erwartete Häufigkeiten"]
  },
  mcnemar: {
    title: "McNemar-Test",
    summary: "Vergleicht zwei verbundene dichotome Messungen, etwa Vorher-Nachher-Kategorien.",
    assumptions: ["Zwei verbundene dichotome Messungen", "Paarweise Daten", "Diskordante Paare sind relevant"]
  },
  chiSquareGoodness: {
    title: "Chi-Quadrat-Anpassungstest",
    summary: "Prüft, ob beobachtete Häufigkeiten zu einer erwarteten kategorialen Verteilung passen.",
    assumptions: ["Eine kategoriale Variable", "Erwartete Häufigkeiten definiert", "Unabhängige Beobachtungen"]
  },
  linearRegression: {
    title: "Lineare Regression",
    summary: "Modelliert eine metrische Zielvariable mithilfe eines oder mehrerer Prädiktoren.",
    assumptions: ["Metrische Zielvariable", "Lineare Zusammenhänge", "Unabhängige Residuen", "Homoskedastizität und Residualdiagnostik"]
  },
  logisticRegression: {
    title: "Binäre logistische Regression",
    summary: "Modelliert die Wahrscheinlichkeit einer dichotomen Zielvariable.",
    assumptions: ["Dichotome Zielvariable", "Unabhängige Beobachtungen", "Keine starke Multikollinearität", "Ausreichende Ereigniszahl"]
  },
  multinomialRegression: {
    title: "Multinomiale logistische Regression",
    summary: "Modelliert eine kategoriale Zielvariable mit mehr als zwei Ausprägungen.",
    assumptions: ["Mehrstufige kategoriale Zielvariable", "Unabhängige Beobachtungen", "Referenzkategorie sinnvoll definiert"]
  }
};

const languagePacks = {
  de: {
    lang: "de",
    ui: {
      appTitle: "Entscheidungsbaum statistischer Testverfahren",
      institutionLabel: "Unidistance Suisse",
      toolBadge: "Research Lab Tool",
      languageLabel: "Sprache",
      helpShort: "Hilfe",
      closeHelp: "Hilfe schließen",
      back: "Zurück",
      reset: "Neu starten",
      pathLabel: "Pfad",
      historyHeading: "Ihr Entscheidungspfad",
      previousDecisionsLabel: "Bisherige Entscheidungen",
      stageCurrent: "Aktuell",
      stageDone: "Erledigt",
      stageOpen: "Noch offen",
      pathProgressOf: "von",
      emptyHistory: "Beantworten Sie die erste Frage, um Ihren Analysepfad aufzubauen.",
      currentQuestionLabel: "Aktuelle Frage",
      requiredBadge: "Pflichtangabe",
      answerInstruction: "Wählen Sie die Antwort, die am besten zu Ihrem Analyseziel passt:",
      previewHeading: "Ergebnisvorschau",
      selectedTestLabel: "Ausgewählter Test",
      reasonLabel: "Begründung",
      previewPlaceholder: "Noch nicht ausgewählt",
      screenshotPreviewPlaceholder: "Screenshot wird hier angezeigt",
      recommendedLabel: "Empfohlenes Verfahren",
      assumptionsHeading: "Voraussetzungen",
      scenarioHeading: "Beispielsituationen",
      psychologyScenarioLabel: "Psychologie",
      sportScenarioLabel: "Sportwissenschaft",
      procedureHeading: "Umsetzung",
      procedureToolLabel: "Ausgabe",
      jamoviScreenshotCaption: "Jamovi-GUI-Screenshot für dieses Verfahren.",
      jamoviScreenshotAlt: "Jamovi-Fenster mit Daten und Ergebnistabelle für dieses Verfahren",
      copyResult: "Ergebnis kopieren",
      exploreAlternatives: "Alternativen ansehen",
      orientationLabel: "Orientierung",
      orientationHeading: "Was wird geprüft?",
      matrixGoal: "Fragestellung",
      matrixScale: "Skalenniveau",
      matrixGroups: "Gruppen",
      matrixResult: "Testwahl",
      noteHeading: "Hinweis",
      noteText: "Der Baum unterstützt bei der Auswahl eines üblichen statistischen Tests. Fachliche Annahmen und Studiendesign sollten anschließend geprüft werden.",
      abbreviationsHeading: "Abkürzungen",
      abbrIndependent: "Unabhängige Variable(n)",
      abbrDependent: "Abhängige Variable",
      abbrInstrument: "Instrument(e)/Messung(en)",
      abbrSample: "Stichprobengröße",
      footerNote: "Diese Entscheidungshilfe ersetzt nicht die inhaltliche Prüfung durch Fachliteratur und Methodenlehre.",
      helpTitle: "So verwenden Sie den Entscheidungsbaum",
      helpIntro: "Wählen Sie jeweils die Antwort, die zu Ihrer Forschungsfrage passt. Der Pfad links bleibt sichtbar, damit Sie nachvollziehen können, warum ein Test vorgeschlagen wird.",
      helpGoodHeading: "Gute Eingaben",
      helpGoodText: "Klären Sie vorab abhängige Variable, Skalenniveau, Anzahl Gruppen und ob Messungen verbunden sind.",
      helpLimitsHeading: "Grenzen",
      helpLimitsText: "Der Baum ersetzt keine Prüfung von Verteilung, Stichprobengröße, Ausreißern oder Modellannahmen.",
      questionStep: "Frage",
      resultStep: "Ergebnis",
      resultMode: "Testwahl",
      nextQuestion: "Nächste Frage",
      resultBranch: "Ergebnis",
      noResult: "Noch kein Ergebnis vorhanden",
      copied: "Ergebnis wurde kopiert",
      copyBlocked: "Kopieren im Browser blockiert",
      chooseAnotherPath: "Wählen Sie einen anderen Pfad",
      sectionLocked: "Dieser Bereich wird durch Ihre Antworten erreicht",
      pathLabelInCopy: "Pfad",
      procedureLabelInCopy: "Umsetzung"
    },
    tree,
    results
  },
  en: {
    lang: "en",
    ui: {
      appTitle: "Decision Tree for Statistical Tests",
      institutionLabel: "Unidistance Suisse",
      toolBadge: "Research Lab Tool",
      languageLabel: "Language",
      helpShort: "Help",
      closeHelp: "Close help",
      back: "Back",
      reset: "Restart",
      pathLabel: "Path",
      historyHeading: "Your decision path",
      previousDecisionsLabel: "Previous decisions",
      stageCurrent: "Current",
      stageDone: "Done",
      stageOpen: "Open",
      pathProgressOf: "of",
      emptyHistory: "Answer the first question to build your analysis path.",
      currentQuestionLabel: "Current question",
      requiredBadge: "Required",
      answerInstruction: "Choose the answer that best matches your analysis goal:",
      previewHeading: "Result preview",
      selectedTestLabel: "Selected test",
      reasonLabel: "Rationale",
      previewPlaceholder: "Not selected yet",
      screenshotPreviewPlaceholder: "Screenshot will appear here",
      recommendedLabel: "Recommended procedure",
      assumptionsHeading: "Assumptions",
      scenarioHeading: "Example situations",
      psychologyScenarioLabel: "Psychology",
      sportScenarioLabel: "Sport science",
      procedureHeading: "Procedure",
      procedureToolLabel: "Output",
      jamoviScreenshotCaption: "Jamovi GUI screenshot for this procedure.",
      jamoviScreenshotAlt: "Jamovi window with data and results table for this procedure",
      copyResult: "Copy result",
      exploreAlternatives: "View alternatives",
      orientationLabel: "Orientation",
      orientationHeading: "What is being checked?",
      matrixGoal: "Research question",
      matrixScale: "Scale level",
      matrixGroups: "Groups",
      matrixResult: "Test choice",
      noteHeading: "Note",
      noteText: "The tree helps you choose a common statistical test. Substantive assumptions and study design should still be checked afterwards.",
      abbreviationsHeading: "Abbreviations",
      abbrIndependent: "Independent variable(s)",
      abbrDependent: "Dependent variable",
      abbrInstrument: "Instrument(s)/measurement(s)",
      abbrSample: "Sample size",
      footerNote: "This decision aid does not replace substantive checking with the literature and methods guidance.",
      helpTitle: "How to use the decision tree",
      helpIntro: "Choose the answer that matches your research question. The path on the left stays visible so you can see why a test is suggested.",
      helpGoodHeading: "Good inputs",
      helpGoodText: "Clarify the dependent variable, scale level, number of groups, and whether measurements are paired.",
      helpLimitsHeading: "Limits",
      helpLimitsText: "The tree does not replace checks of distribution, sample size, outliers, or model assumptions.",
      questionStep: "Question",
      resultStep: "Result",
      resultMode: "Test choice",
      nextQuestion: "Next question",
      resultBranch: "Result",
      noResult: "No result yet",
      copied: "Result copied",
      copyBlocked: "Copying was blocked by the browser",
      chooseAnotherPath: "Choose another path",
      sectionLocked: "This section is reached through your answers",
      pathLabelInCopy: "Path",
      procedureLabelInCopy: "Procedure"
    },
    tree: {
      goal: {
        area: "Starting point",
        question: "What kind of research question do you want to answer?",
        hint: "Start with the goal of the analysis. The tree then guides you through scale level, group design, and distribution assumptions.",
        step: "Research question",
        answers: [
          { label: "Test association between variables", next: "associationScale" },
          { label: "Compare differences or means", next: "comparisonOutcome" },
          { label: "Predict an outcome variable", next: "predictionOutcome" },
          { label: "Compare frequencies or categories", next: "categoricalDesign" }
        ]
      },
      associationScale: {
        area: "Scale level",
        question: "How are the two variables measured?",
        hint: "For correlations, it matters especially whether variables are metric, ordinal, or categorical.",
        step: "Scale level",
        answers: [
          { label: "Both variables are metric", next: "normalAssociation" },
          { label: "At least one variable is ordinal", result: "spearman" },
          { label: "Both variables are categorical", result: "chiSquareAssociation" }
        ]
      },
      normalAssociation: {
        area: "Assumption",
        question: "Is a linear relationship plausible and are strong outliers ruled out?",
        hint: "A scatterplot is often more useful here than a single coefficient.",
        step: "Assumptions",
        answers: [
          { label: "Yes, a linear relationship is plausible", result: "pearson" },
          { label: "No or unsure", result: "spearman" }
        ]
      },
      comparisonOutcome: {
        area: "Scale level",
        question: "What type of dependent variable do you have?",
        hint: "Metric outcomes usually lead to t-tests or ANOVA. Ordinal outcomes need robust alternatives.",
        step: "Scale level",
        answers: [
          { label: "Metric dependent variable", next: "metricGroups" },
          { label: "Ordinal dependent variable", next: "ordinalGroups" },
          { label: "Categorical dependent variable", next: "categoricalDesign" }
        ]
      },
      metricGroups: {
        area: "Group design",
        question: "How many groups or measurement times are you comparing?",
        hint: "Distinguish independent groups from paired measurements, such as pre-post data.",
        step: "Groups",
        answers: [
          { label: "One sample against a target value", next: "oneSampleNormal" },
          { label: "Two independent groups", next: "twoIndependentNormal" },
          { label: "Two paired measurements", next: "twoPairedNormal" },
          { label: "More than two groups or time points", next: "manyGroupsDesign" }
        ]
      },
      oneSampleNormal: {
        area: "Assumption",
        question: "Is the metric variable approximately normally distributed?",
        hint: "For small samples this assumption matters more. For large samples, graphical checks also help.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "oneSampleT" },
          { label: "No or clearly skewed", result: "oneSampleWilcoxon" }
        ]
      },
      twoIndependentNormal: {
        area: "Assumption",
        question: "Are normality and homogeneity of variances sufficiently plausible?",
        hint: "Check the distribution within each group and consider the group sizes.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "independentT" },
          { label: "No or unsure", result: "mannWhitney" }
        ]
      },
      twoPairedNormal: {
        area: "Assumption",
        question: "Are the differences between paired measurements approximately normal?",
        hint: "For paired comparisons, the distribution of the difference scores is what counts.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "pairedT" },
          { label: "No or ordinal", result: "wilcoxon" }
        ]
      },
      manyGroupsDesign: {
        area: "Group design",
        question: "Are the groups independent or are these repeated measurements?",
        hint: "The design determines whether a classical or repeated-measures ANOVA fits.",
        step: "Groups",
        answers: [
          { label: "Independent groups", next: "anovaAssumptions" },
          { label: "Repeated measurements", next: "repeatedAssumptions" }
        ]
      },
      anovaAssumptions: {
        area: "Assumption",
        question: "Are normality within groups and equal variances acceptable?",
        hint: "If assumptions are violated, a nonparametric alternative is often more robust.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "anova" },
          { label: "No or ordinal", result: "kruskalWallis" }
        ]
      },
      repeatedAssumptions: {
        area: "Assumption",
        question: "Are metric measurements and sphericity sufficiently plausible?",
        hint: "With repeated measurements, corrections such as Greenhouse-Geisser may be needed.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "repeatedAnova" },
          { label: "No or ordinal", result: "friedman" }
        ]
      },
      ordinalGroups: {
        area: "Group design",
        question: "How are the ordinal measurements arranged?",
        hint: "Robust alternatives also differ between independent and paired data.",
        step: "Groups",
        answers: [
          { label: "Two independent groups", result: "mannWhitney" },
          { label: "Two paired measurements", result: "wilcoxon" },
          { label: "Several independent groups", result: "kruskalWallis" },
          { label: "Several paired measurements", result: "friedman" }
        ]
      },
      categoricalDesign: {
        area: "Categories",
        question: "How is the categorical question structured?",
        hint: "For frequencies, the number of variables, expected cell counts, and pairedness matter.",
        step: "Categories",
        answers: [
          { label: "Two independent categorical variables", result: "chiSquareAssociation" },
          { label: "Small expected counts in a 2x2 table", result: "fisher" },
          { label: "Two paired dichotomous measurements", result: "mcnemar" },
          { label: "One categorical distribution against expected values", result: "chiSquareGoodness" }
        ]
      },
      predictionOutcome: {
        area: "Outcome variable",
        question: "What scale level does the outcome variable have?",
        hint: "The outcome variable determines the model family. Predictors can be metric or categorically coded.",
        step: "Outcome variable",
        answers: [
          { label: "Metric outcome variable", result: "linearRegression" },
          { label: "Dichotomous outcome variable", result: "logisticRegression" },
          { label: "Multicategory categorical outcome", result: "multinomialRegression" }
        ]
      }
    },
    results: {
      pearson: { title: "Pearson correlation", summary: "Suitable when two metric variables are tested for a linear relationship.", assumptions: ["Metric variables", "Linear relationship", "No dominant outliers", "For inference: approximate bivariate normality"] },
      spearman: { title: "Spearman rank correlation", summary: "A robust choice for ordinal variables or monotonic relationships without strict linearity.", assumptions: ["At least ordinal scale level", "Monotonic relationship", "Independent observations"] },
      chiSquareAssociation: { title: "Chi-square test of independence", summary: "Tests whether two categorical variables are statistically associated.", assumptions: ["Categorical variables", "Independent observations", "Sufficient expected cell counts"] },
      oneSampleT: { title: "One-sample t-test", summary: "Compares the mean of one metric sample with a specified reference value.", assumptions: ["Metric variable", "Independent observations", "Approximate normal distribution"] },
      oneSampleWilcoxon: { title: "One-sample Wilcoxon signed-rank test", summary: "Nonparametric alternative when a median or rank pattern is tested against a reference value.", assumptions: ["At least ordinal data", "Symmetric differences helpful", "Independent observations"] },
      independentT: { title: "Independent-samples t-test", summary: "Compares the means of two independent groups with a metric outcome.", assumptions: ["Two independent groups", "Metric outcome variable", "Approximate normality", "Equal variances or Welch correction"] },
      mannWhitney: { title: "Mann-Whitney U test", summary: "Nonparametric alternative to the independent t-test for two independent groups.", assumptions: ["Two independent groups", "At least ordinal outcome", "Similar distribution shapes for location interpretation"] },
      pairedT: { title: "Paired-samples t-test", summary: "Compares two paired means, for example pre-post measurements.", assumptions: ["Two paired measurements", "Metric difference scores", "Approximate normality of differences"] },
      wilcoxon: { title: "Wilcoxon signed-rank test", summary: "Nonparametric choice for two paired measurements or ordinal paired comparisons.", assumptions: ["Two paired measurements", "At least ordinal values", "Pairing is present"] },
      anova: { title: "One-way ANOVA", summary: "Compares means across more than two independent groups.", assumptions: ["Independent groups", "Metric outcome variable", "Normality within groups", "Homogeneity of variances"] },
      repeatedAnova: { title: "Repeated-measures ANOVA", summary: "Tests mean differences across several paired time points or conditions.", assumptions: ["Repeated measurements", "Metric outcome variable", "Sphericity or suitable correction"] },
      kruskalWallis: { title: "Kruskal-Wallis test", summary: "Nonparametric alternative to one-way ANOVA for several independent groups.", assumptions: ["Several independent groups", "At least ordinal outcome", "Independent observations"] },
      friedman: { title: "Friedman test", summary: "Nonparametric alternative to repeated-measures ANOVA for several paired conditions.", assumptions: ["Several paired measurements", "At least ordinal values", "Same cases in all conditions"] },
      fisher: { title: "Fisher's exact test", summary: "Tests associations in small 2x2 tables when chi-square assumptions are not met.", assumptions: ["Dichotomous categorical variables", "Independent observations", "Small expected counts"] },
      mcnemar: { title: "McNemar test", summary: "Compares two paired dichotomous measurements, such as pre-post categories.", assumptions: ["Two paired dichotomous measurements", "Paired data", "Discordant pairs are relevant"] },
      chiSquareGoodness: { title: "Chi-square goodness-of-fit test", summary: "Tests whether observed frequencies match an expected categorical distribution.", assumptions: ["One categorical variable", "Expected frequencies defined", "Independent observations"] },
      linearRegression: { title: "Linear regression", summary: "Models a metric outcome variable using one or more predictors.", assumptions: ["Metric outcome variable", "Linear relationships", "Independent residuals", "Homoscedasticity and residual diagnostics"] },
      logisticRegression: { title: "Binary logistic regression", summary: "Models the probability of a dichotomous outcome variable.", assumptions: ["Dichotomous outcome variable", "Independent observations", "No strong multicollinearity", "Sufficient number of events"] },
      multinomialRegression: { title: "Multinomial logistic regression", summary: "Models a categorical outcome variable with more than two categories.", assumptions: ["Multicategory categorical outcome", "Independent observations", "Meaningful reference category"] }
    }
  }
};

Object.assign(languagePacks, window.extraLanguagePacks || {});

const procedureCatalog = {
  pearson: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove both metric variables into Variables.\nSelect Pearson and enable a scatterplot if you want a visual check.",
    r: "cor.test(data$x, data$y, method = \"pearson\")\nplot(data$x, data$y)"
  },
  spearman: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove the variables into Variables.\nSelect Spearman for ordinal or monotonic relationships.",
    r: "cor.test(data$x, data$y, method = \"spearman\", exact = FALSE)"
  },
  chiSquareAssociation: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Independent Samples\nPut one categorical variable in Rows and the other in Columns.\nEnable Chi-square test and expected counts.",
    r: "tab <- table(data$group, data$outcome)\nchisq.test(tab)"
  },
  oneSampleT: {
    jamovi: "Analyses > T-Tests > One Sample T-Test\nMove the metric variable into Dependent Variables.\nEnter the test value and enable descriptives/normality checks.",
    r: "t.test(data$score, mu = 0)"
  },
  oneSampleWilcoxon: {
    jamovi: "Analyses > T-Tests > One Sample T-Test\nMove the variable into Dependent Variables.\nUse the non-parametric option / Wilcoxon signed-rank where available.",
    r: "wilcox.test(data$score, mu = 0)"
  },
  independentT: {
    jamovi: "Analyses > T-Tests > Independent Samples T-Test\nPut the metric outcome in Dependent Variables and the group variable in Grouping Variable.\nEnable Welch's correction if variances are unequal.",
    r: "t.test(score ~ group, data = data, var.equal = FALSE)"
  },
  mannWhitney: {
    jamovi: "Analyses > T-Tests > Independent Samples T-Test\nPut the outcome in Dependent Variables and the group variable in Grouping Variable.\nEnable Mann-Whitney U under non-parametric tests.",
    r: "wilcox.test(score ~ group, data = data)"
  },
  pairedT: {
    jamovi: "Analyses > T-Tests > Paired Samples T-Test\nAdd the two paired variables as a paired row.\nEnable descriptives and normality check for the differences.",
    r: "t.test(data$before, data$after, paired = TRUE)"
  },
  wilcoxon: {
    jamovi: "Analyses > T-Tests > Paired Samples T-Test\nAdd the two paired variables as a paired row.\nEnable Wilcoxon signed-rank under non-parametric tests.",
    r: "wilcox.test(data$before, data$after, paired = TRUE)"
  },
  anova: {
    jamovi: "Analyses > ANOVA > One-Way ANOVA\nPut the metric outcome in Dependent Variable and the factor in Fixed Factor.\nEnable assumption checks and post-hoc tests if needed.",
    r: "fit <- aov(score ~ group, data = data)\nsummary(fit)\nTukeyHSD(fit)"
  },
  repeatedAnova: {
    jamovi: "Analyses > ANOVA > Repeated Measures ANOVA\nDefine the repeated-measures factor and levels.\nAssign the repeated measurement columns and enable sphericity corrections.",
    r: "fit <- aov(score ~ condition + Error(id / condition), data = long_data)\nsummary(fit)"
  },
  kruskalWallis: {
    jamovi: "Analyses > ANOVA > One-Way ANOVA\nPut the ordinal/metric outcome in Dependent Variable and the group variable in Fixed Factor.\nEnable Kruskal-Wallis under non-parametric tests.",
    r: "kruskal.test(score ~ group, data = data)"
  },
  friedman: {
    jamovi: "Analyses > ANOVA > Repeated Measures ANOVA\nDefine the repeated-measures factor and assign the repeated measurement columns.\nEnable Friedman under non-parametric tests.",
    r: "friedman.test(as.matrix(data[, c(\"time1\", \"time2\", \"time3\")]))"
  },
  fisher: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Independent Samples\nPut variables in Rows and Columns.\nEnable Fisher's exact test for a 2x2 table.",
    r: "tab <- table(data$group, data$outcome)\nfisher.test(tab)"
  },
  mcnemar: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Paired Samples\nAdd the two paired dichotomous variables.\nEnable McNemar test.",
    r: "tab <- table(data$before, data$after)\nmcnemar.test(tab)"
  },
  chiSquareGoodness: {
    jamovi: "Analyses > Frequencies > One Sample Proportion Tests\nSelect the categorical variable.\nEnter expected proportions or compare against equal proportions.",
    r: "observed <- c(20, 30, 50)\nexpected <- c(1/3, 1/3, 1/3)\nchisq.test(observed, p = expected)"
  },
  linearRegression: {
    jamovi: "Analyses > Regression > Linear Regression\nPut the metric target in Dependent Variable.\nAdd predictors to Covariates or Factors and inspect residual diagnostics.",
    r: "fit <- lm(y ~ x1 + x2, data = data)\nsummary(fit)\nplot(fit)"
  },
  logisticRegression: {
    jamovi: "Analyses > Regression > Logistic Regression > 2 Outcomes\nPut the dichotomous target in Dependent Variable.\nAdd predictors to Covariates or Factors and inspect odds ratios.",
    r: "fit <- glm(y ~ x1 + x2, data = data, family = binomial)\nsummary(fit)\nexp(coef(fit))"
  },
  multinomialRegression: {
    jamovi: "Analyses > Regression > Logistic Regression > N Outcomes\nPut the multicategory target in Dependent Variable.\nAdd predictors to Covariates or Factors and choose the reference level.",
    r: "library(nnet)\nfit <- multinom(y ~ x1 + x2, data = data)\nsummary(fit)"
  }
};

const procedureScreenshots = {
  independentT: {
    jamovi: {
      default: "assets/jamovi/independentT.png"
    }
  }
};

const state = {
  currentNode: "goal",
  history: [],
  language: "de",
  procedureTool: "jamovi"
};

const elements = {
  questionPanel: document.querySelector("#questionPanel"),
  resultPanel: document.querySelector("#resultPanel"),
  methodPreview: document.querySelector("#methodPreview"),
  questionText: document.querySelector("#questionText"),
  questionHint: document.querySelector("#questionHint"),
  questionArea: document.querySelector("#questionArea"),
  answers: document.querySelector("#answers"),
  historyList: document.querySelector("#historyList"),
  emptyHistory: document.querySelector("#emptyHistory"),
  pathProgressLabel: document.querySelector("#pathProgressLabel"),
  pathProgressPercent: document.querySelector("#pathProgressPercent"),
  pathProgressFill: document.querySelector("#pathProgressFill"),
  stepLabel: document.querySelector("#stepLabel"),
  modeLabel: document.querySelector("#modeLabel"),
  progressFill: document.querySelector("#progressFill"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  assumptionsList: document.querySelector("#assumptionsList"),
  scenarioSection: document.querySelector("#scenarioSection"),
  scenarioList: document.querySelector("#scenarioList"),
  apaSection: document.querySelector("#apaSection"),
  apaHeading: document.querySelector("#apaHeading"),
  apaReportList: document.querySelector("#apaReportList"),
  procedureSelect: document.querySelector("#procedureSelect"),
  procedureOutput: document.querySelector("#procedureOutput"),
  jamoviScreenshot: document.querySelector("#jamoviScreenshot"),
  jamoviScreenshotImage: document.querySelector("#jamoviScreenshotImage"),
  jamoviScreenshotCaption: document.querySelector("#jamoviScreenshotCaption"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton"),
  copyButton: document.querySelector("#copyButton"),
  exploreButton: document.querySelector("#exploreButton"),
  helpButton: document.querySelector("#helpButton"),
  helpDialog: document.querySelector("#helpDialog"),
  closeHelpButton: document.querySelector("#closeHelpButton"),
  languageSelect: document.querySelector("#languageSelect"),
  toast: document.querySelector("#toast"),
  matrixCells: [...document.querySelectorAll(".matrix-cell")],
  labPathSteps: [...document.querySelectorAll(".lab-path-step")],
  translatedText: [...document.querySelectorAll("[data-i18n]")]
};

function getPack() {
  return languagePacks[state.language] || languagePacks.de;
}

function applyStaticText() {
  const pack = getPack();
  document.documentElement.lang = pack.lang;
  document.title = pack.ui.appTitle;
  elements.translatedText.forEach((element) => {
    const key = element.dataset.i18n;
    if (pack.ui[key]) element.textContent = pack.ui[key];
  });
  elements.helpButton.setAttribute("aria-label", pack.ui.helpTitle);
  elements.helpButton.title = pack.ui.helpTitle;
  elements.closeHelpButton.setAttribute("aria-label", pack.ui.closeHelp);
  elements.closeHelpButton.title = pack.ui.closeHelp;
  elements.languageSelect.value = state.language;
}

function render() {
  const pack = getPack();
  const currentTree = pack.tree;
  const node = currentTree[state.currentNode];
  if (!node) {
    renderResult(state.currentNode);
    return;
  }

  applyStaticText();
  elements.resultPanel.hidden = true;
  elements.methodPreview.hidden = false;
  elements.questionPanel.hidden = false;
  elements.questionArea.textContent = node.area;
  elements.questionText.textContent = node.question;
  elements.questionHint.textContent = node.hint;
  elements.stepLabel.textContent = `${pack.ui.questionStep} ${state.history.length + 1}`;
  elements.modeLabel.textContent = node.step;
  updateProgressDisplay(pack, false);

  elements.answers.replaceChildren(
    ...node.answers.map((answer, answerIndex) => {
      const button = document.createElement("button");
      const targetType = answer.result ? pack.ui.resultBranch : pack.ui.nextQuestion;
      button.className = `answer-button ${answer.result ? "branch-result" : "branch-question"}`;
      button.type = "button";
      const copy = document.createElement("span");
      const type = document.createElement("span");
      const label = document.createElement("span");
      const arrow = document.createElement("span");
      copy.className = "branch-copy";
      type.className = "branch-type";
      label.className = "branch-label";
      arrow.className = "branch-arrow";
      type.textContent = targetType;
      label.textContent = answer.label;
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "›";
      copy.append(type, label);
      button.append(copy, arrow);
      button.addEventListener("click", () => chooseAnswer(answer, answerIndex));
      return button;
    })
  );
  elements.answers.style.setProperty("--branch-count", node.answers.length);

  renderHistory();
  setActiveMatrix(getStageForNode(state.currentNode));
  elements.backButton.disabled = state.history.length === 0;
}

function chooseAnswer(answer, answerIndex) {
  state.history.push({
    nodeId: state.currentNode,
    answerIndex
  });

  state.currentNode = answer.result || answer.next;
  render();
}

function updateProgressDisplay(pack, isResult) {
  const step = isResult ? 12 : Math.min(state.history.length + 1, 12);
  const percent = isResult ? 100 : Math.min(Math.round((step / 12) * 100), 92);
  elements.stepLabel.textContent = isResult ? pack.ui.resultStep : `${pack.ui.questionStep} ${state.history.length + 1}`;
  elements.progressFill.style.width = `${percent}%`;
  elements.pathProgressLabel.textContent = isResult
    ? pack.ui.resultStep
    : `${pack.ui.questionStep} ${step} ${pack.ui.pathProgressOf} 12`;
  elements.pathProgressPercent.textContent = `${percent}%`;
  elements.pathProgressFill.style.width = `${percent}%`;
}

function renderResult(resultId) {
  const pack = getPack();
  const result = pack.results[resultId];
  if (!result) return;

  applyStaticText();
  elements.questionPanel.hidden = true;
  elements.methodPreview.hidden = true;
  elements.resultPanel.hidden = false;
  elements.resultTitle.textContent = result.title;
  elements.resultSummary.textContent = result.summary;
  elements.procedureSelect.value = state.procedureTool;
  renderProcedure(resultId);
  renderScenarios(resultId, pack);
  renderApaReport(resultId, pack);
  elements.assumptionsList.replaceChildren(
    ...result.assumptions.map((assumption) => {
      const li = document.createElement("li");
      li.textContent = assumption;
      return li;
    })
  );
  elements.stepLabel.textContent = pack.ui.resultStep;
  elements.modeLabel.textContent = pack.ui.resultMode;
  updateProgressDisplay(pack, true);
  elements.backButton.disabled = false;
  renderHistory();
  setActiveMatrix("result");
}

function renderScenarios(resultId, pack) {
  const scenarios = getResultScenarios(resultId, pack.lang);
  elements.scenarioSection.hidden = !scenarios;
  elements.scenarioList.replaceChildren();
  if (!scenarios) return;

  elements.scenarioList.replaceChildren(
    createScenarioItem(pack.ui.psychologyScenarioLabel, scenarios.psychology),
    createScenarioItem(pack.ui.sportScenarioLabel, scenarios.sport)
  );
}

function createScenarioItem(label, text) {
  const item = document.createElement("article");
  const title = document.createElement("h3");
  const copy = document.createElement("p");
  item.className = "scenario-item";
  title.textContent = label;
  copy.textContent = text;
  item.append(title, copy);
  return item;
}

function getResultScenarios(resultId, language) {
  const packs = window.resultScenarioPacks || {};
  return packs[language]?.[resultId] || packs.en?.[resultId] || null;
}

function renderApaReport(resultId, pack) {
  const reportPack = getApaReportPack(pack.lang);
  const report = reportPack?.tests?.[resultId];
  elements.apaSection.hidden = !report;
  elements.apaReportList.replaceChildren();
  if (!report) return;

  elements.apaHeading.textContent = reportPack.heading;
  elements.apaReportList.replaceChildren(
    createApaReportItem(reportPack.templateLabel, report.template, true),
    createApaReportItem(reportPack.valuesLabel, report.metrics.join(", ")),
    createApaReportItem(reportPack.noteLabel, reportPack.note)
  );
}

function createApaReportItem(label, text, isTemplate = false) {
  const item = document.createElement("article");
  const title = document.createElement("h3");
  const copy = isTemplate ? document.createElement("code") : document.createElement("p");
  item.className = "apa-item";
  title.textContent = label;
  copy.textContent = text;
  item.append(title, copy);
  return item;
}

function getApaReportPack(language) {
  const packs = window.apaReportingPacks || {};
  return packs[language] || packs.en || null;
}

function renderProcedure(resultId) {
  const pack = getPack();
  const procedure = getProcedureText(resultId, pack.lang, state.procedureTool);
  const screenshot = getProcedureScreenshot(resultId, pack.lang);
  elements.procedureOutput.textContent = procedure;
  elements.jamoviScreenshot.hidden = !screenshot;
  if (!screenshot) {
    elements.jamoviScreenshotImage.removeAttribute("src");
    return;
  }
  elements.jamoviScreenshotImage.src = screenshot;
  elements.jamoviScreenshotImage.alt = pack.ui.jamoviScreenshotAlt;
  elements.jamoviScreenshotCaption.textContent = pack.ui.jamoviScreenshotCaption;
}

function getProcedureText(resultId, language, tool) {
  const localized = window.localizedProcedurePacks?.[language]?.[resultId]?.[tool];
  return localized || procedureCatalog[resultId]?.[tool] || "";
}

function getProcedureScreenshot(resultId, language) {
  const screenshot = procedureScreenshots[resultId]?.[state.procedureTool];
  if (!screenshot) return "";
  if (typeof screenshot === "string") return screenshot;
  return screenshot[language] || screenshot.default || "";
}

function renderHistory() {
  const pack = getPack();
  elements.emptyHistory.hidden = state.history.length > 0;
  elements.historyList.replaceChildren(
    ...state.history.map((entry) => {
      const historicalNode = pack.tree[entry.nodeId];
      const historicalAnswer = historicalNode?.answers[entry.answerIndex];
      const item = document.createElement("li");
      const question = document.createElement("div");
      const answer = document.createElement("div");
      question.className = "history-question";
      answer.className = "history-answer";
      question.textContent = historicalNode?.question || "";
      answer.textContent = historicalAnswer?.label || "";
      item.append(question, answer);
      return item;
    })
  );
}

function goBack() {
  const previous = state.history.pop();
  if (!previous) return;
  state.currentNode = previous.nodeId;
  render();
}

function resetTree() {
  state.currentNode = "goal";
  state.history = [];
  render();
}

function getStageForNode(nodeId) {
  const scaleNodes = ["associationScale", "comparisonOutcome", "predictionOutcome"];
  const groupNodes = ["metricGroups", "ordinalGroups", "categoricalDesign", "oneSampleNormal", "twoIndependentNormal", "twoPairedNormal", "manyGroupsDesign", "anovaAssumptions", "repeatedAssumptions", "normalAssociation"];
  if (nodeId === "goal") return "goal";
  if (scaleNodes.includes(nodeId)) return "scale";
  if (groupNodes.includes(nodeId)) return "groups";
  return "result";
}

function setActiveMatrix(active) {
  const pack = getPack();
  const stageOrder = ["goal", "scale", "groups", "result"];
  const activeIndex = stageOrder.indexOf(active);
  elements.matrixCells.forEach((cell) => {
    cell.classList.toggle("active", cell.dataset.jump === active);
  });
  elements.labPathSteps.forEach((step) => {
    const stepIndex = stageOrder.indexOf(step.dataset.stage);
    const status = step.querySelector("small");
    step.classList.toggle("active", step.dataset.stage === active);
    step.classList.toggle("complete", stepIndex > -1 && stepIndex < activeIndex);
    if (!status) return;
    if (step.dataset.stage === active) status.textContent = pack.ui.stageCurrent;
    else if (stepIndex > -1 && stepIndex < activeIndex) status.textContent = pack.ui.stageDone;
    else status.textContent = pack.ui.stageOpen;
  });
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    elements.toast.classList.remove("visible");
  }, 1800);
}

async function copyResult() {
  const pack = getPack();
  const isResult = elements.questionPanel.hidden;
  if (!isResult) {
    showToast(pack.ui.noResult);
    return;
  }

  const path = state.history
    .map((entry) => {
      const node = pack.tree[entry.nodeId];
      const answer = node?.answers[entry.answerIndex];
      return `${node?.question || ""} ${answer?.label || ""}`;
    })
    .join("\n");
  const toolName = state.procedureTool === "r" ? "R" : "Jamovi";
  const apaText = elements.apaSection.hidden
    ? ""
    : `\n\n${elements.apaHeading.textContent}:\n${[...elements.apaReportList.querySelectorAll(".apa-item")]
        .map((item) => `${item.querySelector("h3")?.textContent || ""}: ${item.querySelector("p, code")?.textContent || ""}`)
        .join("\n")}`;
  const text = `${elements.resultTitle.textContent}\n${elements.resultSummary.textContent}\n\n${pack.ui.pathLabelInCopy}:\n${path}\n\n${pack.ui.procedureLabelInCopy} (${toolName}):\n${elements.procedureOutput.textContent}${apaText}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast(pack.ui.copied);
  } catch {
    showToast(pack.ui.copyBlocked);
  }
}

function showAlternatives() {
  resetTree();
  showToast(getPack().ui.chooseAnotherPath);
}

function changeLanguage(event) {
  state.language = event.target.value;
  render();
}

function changeProcedureTool(event) {
  state.procedureTool = event.target.value;
  if (elements.resultPanel.hidden) return;
  renderProcedure(state.currentNode);
}

elements.backButton.addEventListener("click", goBack);
elements.resetButton.addEventListener("click", resetTree);
elements.copyButton.addEventListener("click", copyResult);
elements.exploreButton.addEventListener("click", showAlternatives);
elements.helpButton.addEventListener("click", () => elements.helpDialog.showModal());
elements.closeHelpButton.addEventListener("click", () => elements.helpDialog.close());
elements.languageSelect.addEventListener("change", changeLanguage);
elements.procedureSelect.addEventListener("change", changeProcedureTool);
elements.matrixCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.dataset.jump === "goal") resetTree();
    if (cell.dataset.jump !== "goal") showToast(getPack().ui.sectionLocked);
  });
});

render();
