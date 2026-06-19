const tree = {
  goal: {
    area: "Analysestrategie",
    question: "Möchten Sie eine Hypothese prüfen oder Hypothesen explorativ entdecken?",
    hint: "Starten Sie mit der Rolle Ihrer Analyse: Soll eine vorab formulierte Annahme geprüft werden, oder möchten Sie Muster, Dimensionen oder Gruppen in den Daten entdecken?",
    step: "Strategie",
    answers: [
      { label: "Eine Hypothese prüfen", next: "researchGoal" },
      { label: "Hypothesen explorativ entdecken", next: "discoveryStructure" }
    ]
  },
  researchGoal: {
    area: "Ausgangspunkt",
    question: "Welche Art von Forschungsfrage möchten Sie beantworten?",
    hint: "Beginnen Sie mit dem Ziel der Analyse. Der Baum führt Sie anschließend über Skalenniveau, Gruppendesign und Verteilungsannahmen.",
    step: "Fragestellung",
    answers: [
      { label: "Zusammenhang zwischen Variablen prüfen", next: "associationScale" },
      { label: "Unterschiede oder Mittelwerte vergleichen", next: "comparisonOutcome" },
      { label: "Eine Zielvariable vorhersagen", next: "predictionOutcome" },
      { label: "Häufigkeiten, Kategorien oder Anteile vergleichen", next: "categoricalDesign" }
    ]
  },
  discoveryStructure: {
    area: "Exploration",
    question: "Welche Struktur möchten Sie in den Daten explorativ entdecken?",
    hint: "Explorative Verfahren helfen, Variablen zu bündeln, Personen oder Objekte zu gruppieren oder Distanzen in wenigen Dimensionen darzustellen.",
    step: "Exploration",
    answers: [
      { label: "Mehrere Variablen anhand einer Korrelationsmatrix bündeln oder reduzieren", result: "factorAnalysis" },
      { label: "Ähnliche Personen oder Objekte zu Gruppen zusammenfassen", result: "clusterAnalysis" },
      { label: "Distanzen zwischen Personen oder Objekten mit möglichst wenigen Dimensionen darstellen", result: "multidimensionalScaling" }
    ]
  },
  associationScale: {
    area: "Skalenniveau",
    question: "Wie sind die Variablen skaliert?",
    hint: "Für Zusammenhänge ist besonders wichtig, ob die Variablen metrisch, ordinal oder nominal/kategorial sind.",
    step: "Skalenniveau",
    answers: [
      { label: "Beide Variablen metrisch", next: "normalAssociation" },
      { label: "Mindestens eine Variable ordinal", next: "rankCorrelationChoice" },
      { label: "Zwei kategoriale Variablen", result: "chiSquareAssociation" },
      { label: "Alle Variablen sind nominal (mehrwegige Tabelle)", result: "logLinearModel" },
      { label: "Mehr als zwei Variablen in einem Pfad- oder Klassifikationsmodell", next: "causalModelVariables" }
    ]
  },
  causalModelVariables: {
    area: "Pfad- oder Klassifikationsmodell",
    question: "Welche Art von multivariablem Modell möchten Sie prüfen?",
    hint: "Diese Verfahren modellieren gerichtete Pfade oder klassifizieren eine nominale Zielvariable. Kausale Evidenz entsteht nur, wenn Theorie, Design und Messung dies unterstützen.",
    step: "Modelltyp",
    answers: [
      { label: "Alle Variablen sind messbar / beobachtet", result: "pathAnalysis" },
      { label: "Messbare Variablen und latente Variablen", result: "structuralEquationModeling" },
      { label: "Nominale abhängige Variable und intervallskalierte unabhängige Variablen", result: "discriminantAnalysis" }
    ]
  },
  normalAssociation: {
    area: "Voraussetzung",
    question: "Ist ein linearer Zusammenhang plausibel und sind starke Ausreißer ausgeschlossen?",
    hint: "Ein Streudiagramm ist hier oft hilfreicher als ein einzelner Kennwert.",
    step: "Annahmen",
    answers: [
      { label: "Ja, lineare Beziehung ist plausibel", result: "pearson" },
      { label: "Nein oder unsicher", next: "rankCorrelationChoice" }
    ]
  },
  rankCorrelationChoice: {
    area: "Rangkorrelation",
    question: "Welche Rangkorrelation möchten Sie berichten?",
    hint: "Spearman ist verbreitet und gut interpretierbar. Kendall's Tau ist oft stabiler bei kleinen Stichproben oder vielen Bindungen.",
    step: "Testwahl",
    answers: [
      { label: "Spearman-Rangkorrelation", result: "spearman" },
      { label: "Kendall's Rangkorrelation", result: "kendall" }
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
      { label: "Kategoriale abhängige Variable", next: "categoricalDesign" },
      { label: "Wiederholte oder geclusterte Beobachtungen", next: "mixedModelOutcome" },
      { label: "Varianzen vergleichen", next: "varianceComparison" }
    ]
  },
  mixedModelOutcome: {
    area: "Mehrebenen-/Mixed-Design",
    question: "Welches Skalenniveau hat die abhängige Variable im Mixed Model?",
    hint: "Mixed Models sind sinnvoll, wenn Beobachtungen in Personen, Teams, Klassen, Kliniken oder Messzeitpunkten verschachtelt sind oder wenn wiederholte Messungen unbalanciert sind.",
    step: "Mixed Model",
    answers: [
      { label: "Metrische abhängige Variable", result: "linearMixedModel" },
      { label: "Dichotome oder kategoriale abhängige Variable", result: "generalizedLinearMixedModel" },
      { label: "Ordinale abhängige Variable", result: "ordinalMixedModel" }
    ]
  },
  varianceComparison: {
    area: "Varianzen",
    question: "Welche Varianz möchten Sie prüfen oder vergleichen?",
    hint: "Varianztests sind empfindlich gegenüber Verletzungen der Normalverteilung. Prüfen Sie daher immer zusätzlich Verteilung und Ausreißer.",
    step: "Varianzen",
    answers: [
      { label: "Stichprobenvarianz gegen bekannte Populationsvarianz prüfen", result: "chiSquareVariance" },
      { label: "Zwei Stichprobenvarianzen miteinander vergleichen", result: "varianceFTest" }
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
    question: "Wie viele Faktoren vergleichen Sie und gibt es Messwiederholungen?",
    hint: "Bei mehr als einem Faktor können Haupteffekte und Interaktionen geprüft werden. Messwiederholungen ändern das Modell und die Annahmen.",
    step: "Gruppen",
    answers: [
      { label: "Ein Faktor: unabhängige Gruppen", next: "anovaAssumptions" },
      { label: "Ein Faktor: wiederholte Messungen", next: "repeatedAssumptions" },
      { label: "Zwei oder mehr Faktoren: keine Messwiederholung", next: "twoWayAnovaAssumptions" },
      { label: "Zwei oder mehr Faktoren: mit Messwiederholung", next: "twoWayRepeatedAssumptions" }
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
  twoWayAnovaAssumptions: {
    area: "Voraussetzung",
    question: "Sind Normalverteilung je Zelle, Varianzhomogenität und unabhängige Beobachtungen plausibel?",
    hint: "Eine faktorielle ANOVA prüft Haupteffekte und Interaktionen für zwei oder mehr Faktoren.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "twoWayAnova" },
      { label: "Nein oder ordinal", result: "nonparametricTwoWayAnova" }
    ]
  },
  twoWayRepeatedAssumptions: {
    area: "Voraussetzung",
    question: "Sind metrische Messwerte, passende Sphärizitätsannahmen und ein balanciertes Messwiederholungsdesign plausibel?",
    hint: "Bei zwei oder mehr Faktoren mit Messwiederholung können Haupteffekte, Interaktionen und Korrekturen für Sphärizität relevant sein.",
    step: "Annahmen",
    answers: [
      { label: "Ja", result: "twoWayRepeatedAnova" },
      { label: "Nein oder ordinal", result: "nonparametricTwoWayRepeatedAnova" }
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
    hint: "Für Häufigkeiten und Anteile zählen Anzahl Variablen, erwartete Zellhäufigkeiten und ob die Beobachtungen verbunden sind.",
    step: "Kategorien",
    answers: [
      { label: "Zwei unabhängige kategoriale Variablen", result: "chiSquareAssociation" },
      { label: "Kleine erwartete Häufigkeiten in einer 2x2-Tabelle", result: "fisher" },
      { label: "Zwei verbundene dichotome Messungen", result: "mcnemar" },
      { label: "Theoretische und empirische Verteilung bei zweistufiger Variable vergleichen", result: "binomialTest" },
      { label: "Theoretische und empirische Verteilung bei mehrstufiger Variable vergleichen", result: "chiSquareGoodness" }
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
  kendall: {
    title: "Kendall's Rangkorrelation",
    summary: "Rangbasierte Korrelation für ordinale Variablen oder monotone Zusammenhänge, besonders hilfreich bei kleinen Stichproben oder vielen Bindungen.",
    assumptions: ["Mindestens ordinales Skalenniveau", "Monotone Beziehung", "Unabhängige Beobachtungen", "Geeignet bei Bindungen oder kleineren Stichproben"]
  },
  chiSquareAssociation: {
    title: "Chi-Quadrat-Test auf Unabhängigkeit",
    summary: "Prüft, ob zwei kategoriale Variablen statistisch voneinander abhängig sind.",
    assumptions: ["Kategoriale Variablen", "Unabhängige Beobachtungen", "Ausreichend erwartete Zellhäufigkeiten"]
  },
  logLinearModel: {
    title: "Log-lineares Modell",
    summary: "Modelliert Zusammenhänge und Interaktionen zwischen mehreren nominalen Variablen in einer Kontingenztabelle.",
    assumptions: ["Mehrere nominale Variablen", "Häufigkeitsdaten in einer Kontingenztabelle", "Unabhängige Beobachtungen", "Ausreichende erwartete Zellhäufigkeiten"]
  },
  pathAnalysis: {
    title: "Pfadanalyse (Mediation)",
    summary: "Modelliert gerichtete Beziehungen zwischen mehreren beobachteten Variablen, häufig zur Prüfung direkter, indirekter oder mediierter Effekte.",
    assumptions: ["Alle Variablen sind beobachtet/messbar", "Theoretisch begründete Pfadrichtung", "Lineare Beziehungen", "Ausreichende Stichprobengröße", "Kausale Interpretation nur bei geeignetem Design"]
  },
  structuralEquationModeling: {
    title: "Strukturgleichungsmodellierung (SEM)",
    summary: "Kombiniert Messmodelle für latente Variablen mit gerichteten Strukturpfaden zwischen latenten und beobachteten Variablen.",
    assumptions: ["Latente Konstrukte werden durch mehrere Indikatoren gemessen", "Theoretisch begründetes Mess- und Strukturmodell", "Ausreichende Stichprobengröße", "Modellfit und alternative Modelle prüfen"]
  },
  discriminantAnalysis: {
    title: "Diskriminanzanalyse",
    summary: "Klassifiziert Fälle in nominale Gruppen anhand mehrerer intervallskalierter Prädiktoren und beschreibt, welche Variablen die Gruppen trennen.",
    assumptions: ["Nominale abhängige Variable mit bekannten Gruppen", "Intervallskalierte unabhängige Variablen", "Multivariate Normalität innerhalb der Gruppen", "Ähnliche Kovarianzmatrizen", "Ausreichende Gruppengrößen"]
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
  twoWayAnova: {
    title: "Faktorielle ANOVA (zwei oder mehr Faktoren)",
    summary: "Prüft Haupteffekte und Interaktionen von zwei oder mehr unabhängigen Faktoren auf eine metrische Zielvariable.",
    assumptions: ["Zwei oder mehr kategoriale unabhängige Faktoren", "Metrische Zielvariable", "Unabhängige Beobachtungen", "Normalität innerhalb der Zellen", "Homogenität der Varianzen"]
  },
  twoWayRepeatedAnova: {
    title: "Faktorielle ANOVA mit Messwiederholung (zwei oder mehr Faktoren)",
    summary: "Prüft Haupteffekte und Interaktionen von zwei oder mehr Faktoren, wenn mindestens ein Faktor innerhalb derselben Personen gemessen wird.",
    assumptions: ["Mindestens ein Messwiederholungsfaktor", "Metrische Zielvariable", "Sphärizität oder geeignete Korrektur", "Balancierte Zuordnung der Messzeitpunkte/Bedingungen"]
  },
  linearMixedModel: {
    title: "Lineares Mixed Model",
    summary: "Modelliert metrische Zielvariablen bei wiederholten, verschachtelten oder geclusterten Beobachtungen mit festen und zufälligen Effekten.",
    assumptions: ["Metrische abhängige Variable", "Beobachtungen sind in Personen, Teams oder Messzeitpunkten verschachtelt", "Zufällige Effekte fachlich begründet", "Residualdiagnostik und Varianzstruktur prüfen"]
  },
  generalizedLinearMixedModel: {
    title: "Generalisiertes lineares Mixed Model",
    summary: "Erweitert logistische oder andere generalisierte Modelle auf wiederholte, verschachtelte oder geclusterte Daten.",
    assumptions: ["Dichotome, kategoriale oder Zähldaten als abhängige Variable", "Geeignete Linkfunktion und Verteilung", "Cluster oder Personen als zufällige Effekte", "Ausreichende Ereignisse pro Parameter"]
  },
  ordinalMixedModel: {
    title: "Ordinales Mixed Model",
    summary: "Modelliert ordinale Zielvariablen mit wiederholten oder geclusterten Beobachtungen, häufig über kumulative Link-Modelle.",
    assumptions: ["Ordinale abhängige Variable", "Wiederholte oder geclusterte Beobachtungen", "Proportional-Odds-Annahme prüfen", "Zufällige Effekte fachlich begründet"]
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
  nonparametricTwoWayAnova: {
    title: "Nichtparametrische faktorielle ANOVA (ART)",
    summary: "Robuste Alternative für faktorielle Designs mit zwei oder mehr unabhängigen Faktoren, häufig über die Aligned-Rank-Transform-Methode.",
    assumptions: ["Zwei oder mehr kategoriale unabhängige Faktoren", "Mindestens ordinale Zielvariable", "Unabhängige Beobachtungen", "Interaktionen werden über rangtransformierte Daten geprüft"]
  },
  nonparametricTwoWayRepeatedAnova: {
    title: "Nichtparametrische faktorielle ANOVA mit Messwiederholung (ART)",
    summary: "Robuste Alternative für faktorielle Designs mit zwei oder mehr Faktoren und Messwiederholung, wenn parametrische Annahmen nicht tragfähig sind.",
    assumptions: ["Mindestens ein Messwiederholungsfaktor", "Mindestens ordinale Zielvariable", "Gleiche Fälle in den verbundenen Bedingungen", "Interaktionen werden über rangtransformierte Daten geprüft"]
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
  binomialTest: {
    title: "Binomial-Test",
    summary: "Prüft, ob die empirische Häufigkeit oder der Anteil einer zweistufigen Variable von einer theoretisch erwarteten Wahrscheinlichkeit abweicht.",
    assumptions: ["Zweistufige kategoriale Variable", "Theoretisch erwarteter Anteil definiert", "Unabhängige Beobachtungen", "Feste Anzahl von Versuchen oder Fällen"]
  },
  chiSquareGoodness: {
    title: "Pearson-Chi-Quadrat-Anpassungstest",
    summary: "Prüft, ob die empirische Häufigkeitsverteilung einer mehrstufigen kategorialen Variable zu einer theoretisch erwarteten Verteilung passt.",
    assumptions: ["Mehrstufige kategoriale Variable", "Erwartete Häufigkeiten oder Anteile definiert", "Unabhängige Beobachtungen", "Ausreichend erwartete Häufigkeiten je Kategorie"]
  },
  linearRegression: {
    title: "Lineare Regression",
    summary: "Modelliert eine metrische Zielvariable mithilfe eines oder mehrerer Prädiktoren; das Modell liefert ohne geeignetes Design keine Evidenz für Kausalität.",
    assumptions: ["Metrische Zielvariable", "Lineare Zusammenhänge", "Unabhängige Residuen", "Homoskedastizität und Residualdiagnostik", "Vorhersage oder Zusammenhang, nicht automatisch Kausalität"]
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
  },
  factorAnalysis: {
    title: "Faktorenanalyse",
    summary: "Exploratives Verfahren, um mehrere korrelierte Variablen auf wenige zugrunde liegende Faktoren oder Dimensionen zu reduzieren.",
    assumptions: ["Mehrere metrische oder annähernd metrische Variablen", "Sinnvolle Korrelationen zwischen Variablen", "Ausreichende Stichprobengröße", "Interpretierbare Faktorstruktur", "Keine A-priori-Hypothese zu den Beziehungen zwischen den Faktoren"]
  },
  clusterAnalysis: {
    title: "Clusteranalyse",
    summary: "Exploratives Verfahren, um Personen oder Objekte anhand ihrer Ähnlichkeit in Gruppen zu ordnen.",
    assumptions: ["Merkmale zur Beschreibung von Personen oder Objekten", "Geeignete Skalierung oder Standardisierung", "Sinnvolles Distanz- oder Ähnlichkeitsmaß", "Clusterlösung fachlich interpretierbar"]
  },
  multidimensionalScaling: {
    title: "Multidimensionale Skalierung",
    summary: "Exploratives Verfahren, um Distanzen oder Unähnlichkeiten zwischen Personen oder Objekten in wenigen Dimensionen darzustellen.",
    assumptions: ["Distanz- oder Unähnlichkeitsmatrix", "Objekte oder Personen sind vergleichbar", "Zahl der Dimensionen wird anhand von Stress und Interpretierbarkeit gewählt", "Darstellung dient primär der Exploration"]
  },
  chiSquareVariance: {
    title: "Chi-Quadrat-Test für eine Varianz",
    summary: "Prüft, ob eine Stichprobenvarianz von einer bekannten oder theoretischen Populationsvarianz abweicht.",
    assumptions: ["Eine metrische Variable", "Bekannte oder theoretisch begründete Populationsvarianz", "Unabhängige Beobachtungen", "Normalverteilung in der Population"]
  },
  varianceFTest: {
    title: "F-Test zum Vergleich zweier Varianzen",
    summary: "Vergleicht, ob sich die Varianzen zweier unabhängiger Stichproben unterscheiden.",
    assumptions: ["Zwei unabhängige Stichproben", "Metrische Zielvariable", "Normalverteilung in beiden Populationen", "Empfindlich gegenüber Ausreißern und Schiefe"]
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
      screenshotPreviewPlaceholder: "Das Ergebnis wird hier angezeigt",
      recommendedLabel: "Empfohlenes Verfahren",
      assumptionsHeading: "Voraussetzungen",
      scenarioHeading: "Beispielsituationen",
      psychologyScenarioLabel: "Psychologie",
      sportScenarioLabel: "Sportwissenschaft",
      procedureHeading: "Umsetzung",
      procedureToolLabel: "Ausgabe",
      jamoviScreenshotCaption: "Jamovi-Oberfläche für dieses Verfahren.",
      jamoviScreenshotAlt: "Jamovi-Fenster mit Daten und Ergebnistabelle für dieses Verfahren",
      copyResult: "Ergebnis kopieren",
      exploreAlternatives: "Alternativen ansehen",
      orientationLabel: "Orientierung",
      orientationHeading: "Was wird geprüft?",
      matrixGoal: "Strategie",
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
      screenshotPreviewPlaceholder: "The result will appear here",
      recommendedLabel: "Recommended procedure",
      assumptionsHeading: "Assumptions",
      scenarioHeading: "Example situations",
      psychologyScenarioLabel: "Psychology",
      sportScenarioLabel: "Sport science",
      procedureHeading: "Procedure",
      procedureToolLabel: "Output",
      jamoviScreenshotCaption: "Jamovi interface for this procedure.",
      jamoviScreenshotAlt: "Jamovi window with data and results table for this procedure",
      copyResult: "Copy result",
      exploreAlternatives: "View alternatives",
      orientationLabel: "Orientation",
      orientationHeading: "What is being checked?",
      matrixGoal: "Strategy",
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
        area: "Analysis strategy",
        question: "Do you want to test a hypothesis or discover hypotheses exploratively?",
        hint: "Start with the role of your analysis: are you testing a predefined assumption, or are you trying to discover patterns, dimensions, or groups in the data?",
        step: "Strategy",
        answers: [
          { label: "Test a hypothesis", next: "researchGoal" },
          { label: "Discover hypotheses exploratively", next: "discoveryStructure" }
        ]
      },
      researchGoal: {
        area: "Starting point",
        question: "What kind of research question do you want to answer?",
        hint: "Start with the goal of the analysis. The tree then guides you through scale level, group design, and distribution assumptions.",
        step: "Research question",
        answers: [
          { label: "Test association between variables", next: "associationScale" },
          { label: "Compare differences or means", next: "comparisonOutcome" },
          { label: "Predict an outcome variable", next: "predictionOutcome" },
          { label: "Compare frequencies, categories, or proportions", next: "categoricalDesign" }
        ]
      },
      discoveryStructure: {
        area: "Exploration",
        question: "What kind of structure do you want to discover in the data?",
        hint: "Exploratory procedures can group variables, group people or objects, or represent distances in a small number of dimensions.",
        step: "Exploration",
        answers: [
          { label: "Group or reduce several variables using a correlation matrix", result: "factorAnalysis" },
          { label: "Group similar people or objects", result: "clusterAnalysis" },
          { label: "Represent distances between people or objects with the minimum number of dimensions", result: "multidimensionalScaling" }
        ]
      },
      associationScale: {
        area: "Scale level",
        question: "How are the variables measured?",
        hint: "For associations, it matters whether variables are metric, ordinal, or nominal/categorical.",
        step: "Scale level",
        answers: [
          { label: "Both variables are metric", next: "normalAssociation" },
          { label: "At least one variable is ordinal", next: "rankCorrelationChoice" },
          { label: "Two categorical variables", result: "chiSquareAssociation" },
          { label: "All variables are nominal (multiway table)", result: "logLinearModel" },
          { label: "More than two variables in a path or classification model", next: "causalModelVariables" }
        ]
      },
      causalModelVariables: {
        area: "Path or classification model",
        question: "What kind of multivariable model do you want to test?",
        hint: "These procedures model directed paths or classify a nominal outcome. They support causal claims only when theory, design, and measurement justify that interpretation.",
        step: "Model type",
        answers: [
          { label: "All variables are measurable / observed", result: "pathAnalysis" },
          { label: "Measurable variables and latent variables", result: "structuralEquationModeling" },
          { label: "Nominal dependent variable and interval-scaled independent variables", result: "discriminantAnalysis" }
        ]
      },
      normalAssociation: {
        area: "Assumption",
        question: "Is a linear relationship plausible and are strong outliers ruled out?",
        hint: "A scatterplot is often more useful here than a single coefficient.",
        step: "Assumptions",
        answers: [
          { label: "Yes, a linear relationship is plausible", result: "pearson" },
          { label: "No or unsure", next: "rankCorrelationChoice" }
        ]
      },
      rankCorrelationChoice: {
        area: "Rank correlation",
        question: "Which rank correlation do you want to report?",
        hint: "Spearman is common and easy to interpret. Kendall's tau is often more stable with small samples or many ties.",
        step: "Test choice",
        answers: [
          { label: "Spearman rank correlation", result: "spearman" },
          { label: "Kendall's rank correlation", result: "kendall" }
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
          { label: "Categorical dependent variable", next: "categoricalDesign" },
          { label: "Repeated or clustered observations", next: "mixedModelOutcome" },
          { label: "Compare variances", next: "varianceComparison" }
        ]
      },
      mixedModelOutcome: {
        area: "Multilevel / mixed design",
        question: "What scale level does the dependent variable have in the mixed model?",
        hint: "Mixed models are useful when observations are nested within people, teams, classes, clinics, or measurement occasions, or when repeated measurements are unbalanced.",
        step: "Mixed model",
        answers: [
          { label: "Metric dependent variable", result: "linearMixedModel" },
          { label: "Dichotomous or categorical dependent variable", result: "generalizedLinearMixedModel" },
          { label: "Ordinal dependent variable", result: "ordinalMixedModel" }
        ]
      },
      varianceComparison: {
        area: "Variances",
        question: "Which variance do you want to test or compare?",
        hint: "Variance tests are sensitive to violations of normality, so always inspect distributions and outliers as well.",
        step: "Variances",
        answers: [
          { label: "Test a sample variance against a known population variance", result: "chiSquareVariance" },
          { label: "Compare two sample variances", result: "varianceFTest" }
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
        question: "How many factors are you comparing, and are there repeated measurements?",
        hint: "With more than one factor, you can test main effects and interactions. Repeated measurements change the model and assumptions.",
        step: "Groups",
        answers: [
          { label: "One factor: independent groups", next: "anovaAssumptions" },
          { label: "One factor: repeated measurements", next: "repeatedAssumptions" },
          { label: "Two or more factors: no repeated measurements", next: "twoWayAnovaAssumptions" },
          { label: "Two or more factors: with repeated measurements", next: "twoWayRepeatedAssumptions" }
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
      twoWayAnovaAssumptions: {
        area: "Assumption",
        question: "Are normality within cells, homogeneity of variances, and independent observations plausible?",
        hint: "A factorial ANOVA tests main effects and interactions for two or more factors.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "twoWayAnova" },
          { label: "No or ordinal", result: "nonparametricTwoWayAnova" }
        ]
      },
      twoWayRepeatedAssumptions: {
        area: "Assumption",
        question: "Are metric measurements, suitable sphericity assumptions, and a balanced repeated-measures design plausible?",
        hint: "With two or more factors and repeated measurements, main effects, interactions, and sphericity corrections may matter.",
        step: "Assumptions",
        answers: [
          { label: "Yes", result: "twoWayRepeatedAnova" },
          { label: "No or ordinal", result: "nonparametricTwoWayRepeatedAnova" }
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
        hint: "For frequencies and proportions, the number of variables, expected cell counts, and pairedness matter.",
        step: "Categories",
        answers: [
          { label: "Two independent categorical variables", result: "chiSquareAssociation" },
          { label: "Small expected counts in a 2x2 table", result: "fisher" },
          { label: "Two paired dichotomous measurements", result: "mcnemar" },
          { label: "Compare theoretical and empirical distribution for a two-level variable", result: "binomialTest" },
          { label: "Compare theoretical and empirical distribution for a multilevel variable", result: "chiSquareGoodness" }
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
      kendall: { title: "Kendall's rank correlation", summary: "Rank-based correlation for ordinal variables or monotonic relationships, especially useful with small samples or many ties.", assumptions: ["At least ordinal scale level", "Monotonic relationship", "Independent observations", "Useful with ties or smaller samples"] },
      chiSquareAssociation: { title: "Chi-square test of independence", summary: "Tests whether two categorical variables are statistically associated.", assumptions: ["Categorical variables", "Independent observations", "Sufficient expected cell counts"] },
      logLinearModel: { title: "Log-linear model", summary: "Models associations and interactions among several nominal variables in a contingency table.", assumptions: ["Several nominal variables", "Frequency data in a contingency table", "Independent observations", "Sufficient expected cell counts"] },
      pathAnalysis: { title: "Path analysis (mediation)", summary: "Models directed relations among several observed variables, often to test direct, indirect, or mediated effects.", assumptions: ["All variables are observed/measurable", "Theoretically justified path direction", "Linear relationships", "Adequate sample size", "Causal interpretation only with a suitable design"] },
      structuralEquationModeling: { title: "Structural equation modeling (SEM)", summary: "Combines measurement models for latent variables with directed structural paths among latent and observed variables.", assumptions: ["Latent constructs measured by multiple indicators", "Theoretically justified measurement and structural model", "Adequate sample size", "Model fit and alternative models should be evaluated"] },
      discriminantAnalysis: { title: "Discriminant analysis", summary: "Classifies cases into nominal groups from several interval-scaled predictors and describes which variables separate the groups.", assumptions: ["Nominal dependent variable with known groups", "Interval-scaled independent variables", "Multivariate normality within groups", "Similar covariance matrices", "Adequate group sizes"] },
      oneSampleT: { title: "One-sample t-test", summary: "Compares the mean of one metric sample with a specified reference value.", assumptions: ["Metric variable", "Independent observations", "Approximate normal distribution"] },
      oneSampleWilcoxon: { title: "One-sample Wilcoxon signed-rank test", summary: "Nonparametric alternative when a median or rank pattern is tested against a reference value.", assumptions: ["At least ordinal data", "Symmetric differences helpful", "Independent observations"] },
      independentT: { title: "Independent-samples t-test", summary: "Compares the means of two independent groups with a metric outcome.", assumptions: ["Two independent groups", "Metric outcome variable", "Approximate normality", "Equal variances or Welch correction"] },
      mannWhitney: { title: "Mann-Whitney U test", summary: "Nonparametric alternative to the independent t-test for two independent groups.", assumptions: ["Two independent groups", "At least ordinal outcome", "Similar distribution shapes for location interpretation"] },
      pairedT: { title: "Paired-samples t-test", summary: "Compares two paired means, for example pre-post measurements.", assumptions: ["Two paired measurements", "Metric difference scores", "Approximate normality of differences"] },
      wilcoxon: { title: "Wilcoxon signed-rank test", summary: "Nonparametric choice for two paired measurements or ordinal paired comparisons.", assumptions: ["Two paired measurements", "At least ordinal values", "Pairing is present"] },
      anova: { title: "One-way ANOVA", summary: "Compares means across more than two independent groups.", assumptions: ["Independent groups", "Metric outcome variable", "Normality within groups", "Homogeneity of variances"] },
      repeatedAnova: { title: "Repeated-measures ANOVA", summary: "Tests mean differences across several paired time points or conditions.", assumptions: ["Repeated measurements", "Metric outcome variable", "Sphericity or suitable correction"] },
      twoWayAnova: { title: "Factorial ANOVA (two or more factors)", summary: "Tests the main effects and interactions of two or more independent factors on a metric outcome variable.", assumptions: ["Two or more categorical independent factors", "Metric outcome variable", "Independent observations", "Normality within cells", "Homogeneity of variances"] },
      twoWayRepeatedAnova: { title: "Factorial repeated-measures ANOVA (two or more factors)", summary: "Tests main effects and interactions for two or more factors when at least one factor is measured within the same participants.", assumptions: ["At least one repeated-measures factor", "Metric outcome variable", "Sphericity or suitable correction", "Balanced assignment of time points or conditions"] },
      linearMixedModel: { title: "Linear mixed model", summary: "Models metric outcomes for repeated, nested, or clustered observations using fixed and random effects.", assumptions: ["Metric dependent variable", "Observations nested within people, teams, or measurement occasions", "Random effects are theoretically justified", "Check residual diagnostics and variance structure"] },
      generalizedLinearMixedModel: { title: "Generalized linear mixed model", summary: "Extends logistic or other generalized models to repeated, nested, or clustered data.", assumptions: ["Dichotomous, categorical, or count dependent variable", "Appropriate link function and distribution", "Clusters or persons entered as random effects", "Adequate events per parameter"] },
      ordinalMixedModel: { title: "Ordinal mixed model", summary: "Models ordinal outcomes with repeated or clustered observations, often using cumulative link models.", assumptions: ["Ordinal dependent variable", "Repeated or clustered observations", "Check proportional-odds assumption", "Random effects are theoretically justified"] },
      kruskalWallis: { title: "Kruskal-Wallis test", summary: "Nonparametric alternative to one-way ANOVA for several independent groups.", assumptions: ["Several independent groups", "At least ordinal outcome", "Independent observations"] },
      friedman: { title: "Friedman test", summary: "Nonparametric alternative to repeated-measures ANOVA for several paired conditions.", assumptions: ["Several paired measurements", "At least ordinal values", "Same cases in all conditions"] },
      nonparametricTwoWayAnova: { title: "Nonparametric factorial ANOVA (ART)", summary: "Robust alternative for factorial designs with two or more independent factors, commonly using the aligned-rank-transform approach.", assumptions: ["Two or more categorical independent factors", "At least ordinal outcome", "Independent observations", "Interactions tested on rank-transformed data"] },
      nonparametricTwoWayRepeatedAnova: { title: "Nonparametric factorial repeated-measures ANOVA (ART)", summary: "Robust alternative for factorial repeated-measures designs with two or more factors when parametric assumptions are not tenable.", assumptions: ["At least one repeated-measures factor", "At least ordinal outcome", "Same cases in paired conditions", "Interactions tested on rank-transformed data"] },
      fisher: { title: "Fisher's exact test", summary: "Tests associations in small 2x2 tables when chi-square assumptions are not met.", assumptions: ["Dichotomous categorical variables", "Independent observations", "Small expected counts"] },
      mcnemar: { title: "McNemar test", summary: "Compares two paired dichotomous measurements, such as pre-post categories.", assumptions: ["Two paired dichotomous measurements", "Paired data", "Discordant pairs are relevant"] },
      binomialTest: { title: "Binomial test", summary: "Tests whether the empirical frequency or proportion of a two-level variable differs from a theoretically expected probability.", assumptions: ["Two-level categorical variable", "Theoretically expected proportion is defined", "Independent observations", "Fixed number of trials or cases"] },
      chiSquareGoodness: { title: "Pearson chi-square goodness-of-fit test", summary: "Tests whether the empirical frequency distribution of a multilevel categorical variable matches a theoretically expected distribution.", assumptions: ["Multilevel categorical variable", "Expected frequencies or proportions are defined", "Independent observations", "Sufficient expected counts per category"] },
      linearRegression: { title: "Linear regression", summary: "Models a metric outcome variable using one or more predictors; without a suitable design, it does not provide evidence of causality.", assumptions: ["Metric outcome variable", "Linear relationships", "Independent residuals", "Homoscedasticity and residual diagnostics", "Prediction or association, not causality by itself"] },
      logisticRegression: { title: "Binary logistic regression", summary: "Models the probability of a dichotomous outcome variable.", assumptions: ["Dichotomous outcome variable", "Independent observations", "No strong multicollinearity", "Sufficient number of events"] },
      multinomialRegression: { title: "Multinomial logistic regression", summary: "Models a categorical outcome variable with more than two categories.", assumptions: ["Multicategory categorical outcome", "Independent observations", "Meaningful reference category"] },
      factorAnalysis: { title: "Factor analysis", summary: "Exploratory procedure for reducing several correlated variables to a smaller set of latent factors or dimensions.", assumptions: ["Several metric or approximately metric variables", "Meaningful correlations among variables", "Adequate sample size", "Interpretable factor structure", "No a priori hypothesis about the relationships among the factors"] },
      clusterAnalysis: { title: "Cluster analysis", summary: "Exploratory procedure for grouping people or objects based on similarity.", assumptions: ["Features describing people or objects", "Appropriate scaling or standardisation", "Meaningful distance or similarity measure", "Cluster solution is substantively interpretable"] },
      multidimensionalScaling: { title: "Multidimensional scaling", summary: "Exploratory procedure for representing distances or dissimilarities among people or objects in a small number of dimensions.", assumptions: ["Distance or dissimilarity matrix", "People or objects are comparable", "Number of dimensions chosen using stress and interpretability", "Primarily an exploratory representation"] },
      chiSquareVariance: { title: "Chi-square test for one variance", summary: "Tests whether a sample variance differs from a known or theoretical population variance.", assumptions: ["One metric variable", "Known or theoretically justified population variance", "Independent observations", "Normality in the population"] },
      varianceFTest: { title: "F-test for comparing two variances", summary: "Compares whether the variances of two independent samples differ.", assumptions: ["Two independent samples", "Metric outcome variable", "Normality in both populations", "Sensitive to outliers and skew"] }
    }
  }
};

Object.assign(languagePacks, window.extraLanguagePacks || {});

const mlLanguageAdditions = {
  de: {
    goalUpdate: {
      question: "Was möchten Sie mit Ihren Daten tun?",
      hint: "Wählen Sie, ob Sie eine vorab formulierte Hypothese prüfen, explorativ Struktur entdecken oder ein Modell zur Vorhersage bzw. Klassifikation neuer Fälle trainieren möchten."
    },
    goalAnswer: { label: "Neue Fälle vorhersagen oder klassifizieren", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: {
        area: "Machine Learning",
        question: "Haben Sie eine bekannte Zielvariable in einem Trainingsdatensatz?",
        hint: "Supervised Learning benötigt bekannte Zielwerte. Ohne Zielvariable geht es eher um Dimensionsreduktion, Gruppierung oder Visualisierung von Strukturen.",
        step: "Lernziel",
        answers: [
          { label: "Ja, die Zielvariable ist bekannt", next: "mlOutcomeType" },
          { label: "Nein, ich möchte Muster ohne Zielvariable entdecken", next: "mlUnsupervisedGoal" }
        ]
      },
      mlOutcomeType: {
        area: "Zielvariable",
        question: "Welche Art von Zielvariable soll vorhergesagt werden?",
        hint: "Bei metrischen Zielvariablen geht es um Regression. Bei kategorialen Zielvariablen geht es um Klassifikation.",
        step: "Zielvariable",
        answers: [
          { label: "Metrische Zielvariable", next: "mlNumericModel" },
          { label: "Kategoriale Zielvariable", next: "mlClassificationModel" }
        ]
      },
      mlNumericModel: {
        area: "Regressionsmodell",
        question: "Welche Art von Vorhersagemodell passt am besten?",
        hint: "Starten Sie oft mit einem interpretierbaren Basismodell und vergleichen Sie flexiblere Modelle per Kreuzvalidierung.",
        step: "Modellwahl",
        answers: [
          { label: "Interpretierbares lineares Basismodell", result: "linearRegression" },
          { label: "Einfache nichtlineare Entscheidungsregeln", result: "decisionTreeRegression" },
          { label: "Stärkere Vorhersage mit vielen Prädiktoren", result: "randomForestRegression" },
          { label: "Vorhersage anhand ähnlicher Fälle", result: "knnRegression" }
        ]
      },
      mlClassificationModel: {
        area: "Klassifikationsmodell",
        question: "Welche Klassifikationslogik passt am besten?",
        hint: "Berichten Sie neben der Treffergenauigkeit immer auch Validierungsstrategie, Klassenverteilung und bei unbalancierten Klassen geeignete Kennwerte.",
        step: "Modellwahl",
        answers: [
          { label: "Dichotome Zielvariable mit interpretierbaren Odds Ratios", result: "logisticRegression" },
          { label: "Mehrstufige Zielvariable mit interpretierbarem Regressionsmodell", result: "multinomialRegression" },
          { label: "Transparente Wenn-dann-Regeln", result: "decisionTreeClassifier" },
          { label: "Robustes Modell mit besserer Vorhersageleistung", result: "randomForestClassifier" },
          { label: "Klassifikation anhand ähnlicher Fälle", result: "knnClassifier" },
          { label: "Schnelles Basismodell für viele einfache Merkmale", result: "naiveBayes" }
        ]
      },
      mlUnsupervisedGoal: {
        area: "Unsupervised Learning",
        question: "Welches explorative Ziel verfolgen Sie ohne bekannte Zielvariable?",
        hint: "Diese Verfahren suchen Struktur in Prädiktoren, ohne eine zuvor bekannte Zielvariable zu trainieren.",
        step: "Exploration",
        answers: [
          { label: "Viele Variablen auf wenige Komponenten reduzieren", result: "principalComponentAnalysis" },
          { label: "Ähnliche Personen oder Objekte gruppieren", result: "clusterAnalysis" },
          { label: "Distanzen zwischen Personen oder Objekten visualisieren", result: "multidimensionalScaling" }
        ]
      }
    },
    results: {
      decisionTreeRegression: { title: "Entscheidungsbaum-Regression", summary: "Sagt eine metrische Zielvariable mit interpretierbaren Wenn-dann-Regeln vorher.", assumptions: ["Metrische Zielvariable", "Trainings- und Testdaten oder Kreuzvalidierung", "Pruning oder Tiefenbegrenzung gegen Overfitting", "Prädiktoren sollten sinnvoll codiert sein"] },
      randomForestRegression: { title: "Random-Forest-Regression", summary: "Kombiniert viele Regressionsbäume, um robuste nichtlineare Vorhersagen für metrische Zielvariablen zu erzeugen.", assumptions: ["Metrische Zielvariable", "Genügend Fälle für Training und Validierung", "Tuning der Anzahl von Bäumen und Variablen pro Split", "Interpretation über variable importance oder partielle Effekte"] },
      knnRegression: { title: "k-Nearest-Neighbors-Regression", summary: "Sagt metrische Werte aus den ähnlichsten Fällen im Merkmalsraum vorher.", assumptions: ["Metrische Zielvariable", "Skalierte/standardisierte Prädiktoren", "Sinnvolle Distanzmetrik", "k per Validierung wählen"] },
      decisionTreeClassifier: { title: "Entscheidungsbaum-Klassifikation", summary: "Klassifiziert Fälle mit transparenten Entscheidungsregeln und eignet sich als gut erklärbares ML-Modell.", assumptions: ["Kategoriale Zielvariable", "Trainings- und Testdaten oder Kreuzvalidierung", "Pruning oder Tiefenbegrenzung gegen Overfitting", "Klassenverteilung prüfen"] },
      randomForestClassifier: { title: "Random-Forest-Klassifikation", summary: "Kombiniert viele Entscheidungsbäume für robuste Klassifikation, oft mit höherer Vorhersageleistung als ein einzelner Baum.", assumptions: ["Kategoriale Zielvariable", "Ausreichende Stichprobe", "Validierung an ungesehenen Daten", "Klassenungleichgewicht berücksichtigen"] },
      knnClassifier: { title: "k-Nearest-Neighbors-Klassifikation", summary: "Klassifiziert Fälle nach den Klassen der ähnlichsten Nachbarn.", assumptions: ["Kategoriale Zielvariable", "Skalierte/standardisierte Prädiktoren", "Sinnvolle Distanzmetrik", "k und Gewichtung per Validierung wählen"] },
      naiveBayes: { title: "Naive-Bayes-Klassifikation", summary: "Schnelles probabilistisches Basismodell für kategoriale Vorhersagen, besonders bei vielen einfachen Merkmalen.", assumptions: ["Kategoriale Zielvariable", "Prädiktoren werden bedingt unabhängig angenähert", "Geeignete Verteilung für metrische Merkmale", "Wahrscheinlichkeiten mit Validierungsdaten prüfen"] },
      principalComponentAnalysis: { title: "Hauptkomponentenanalyse (PCA)", summary: "Reduziert viele korrelierte metrische Variablen auf wenige Komponenten, die möglichst viel Varianz erklären.", assumptions: ["Mehrere metrische oder annähernd metrische Variablen", "Sinnvolle Korrelationen zwischen Variablen", "Standardisierung bei unterschiedlichen Skalen", "Komponenten nach Varianz und Interpretierbarkeit wählen"] }
    }
  },
  en: {
    goalUpdate: {
      question: "What do you want to do with your data?",
      hint: "Choose whether you want to test a predefined hypothesis, discover structure exploratively, or train a model to predict or classify new cases."
    },
    goalAnswer: { label: "Predict or classify new cases", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: {
        area: "Machine learning",
        question: "Do you have a known outcome variable in a training dataset?",
        hint: "Supervised learning needs known target values. Without an outcome variable, the goal is usually dimension reduction, grouping, or visualising structure.",
        step: "Learning goal",
        answers: [
          { label: "Yes, the outcome variable is known", next: "mlOutcomeType" },
          { label: "No, I want to discover patterns without an outcome variable", next: "mlUnsupervisedGoal" }
        ]
      },
      mlOutcomeType: {
        area: "Outcome variable",
        question: "What kind of outcome variable do you want to predict?",
        hint: "Metric outcomes lead to regression. Categorical outcomes lead to classification.",
        step: "Outcome variable",
        answers: [
          { label: "Metric outcome variable", next: "mlNumericModel" },
          { label: "Categorical outcome variable", next: "mlClassificationModel" }
        ]
      },
      mlNumericModel: {
        area: "Regression model",
        question: "Which kind of prediction model fits best?",
        hint: "A good workflow often starts with an interpretable baseline and compares flexible models using cross-validation.",
        step: "Model choice",
        answers: [
          { label: "Interpretable linear baseline", result: "linearRegression" },
          { label: "Simple nonlinear decision rules", result: "decisionTreeRegression" },
          { label: "Stronger prediction with many predictors", result: "randomForestRegression" },
          { label: "Prediction from similar cases", result: "knnRegression" }
        ]
      },
      mlClassificationModel: {
        area: "Classification model",
        question: "Which classification logic fits best?",
        hint: "Alongside accuracy, report the validation strategy, class distribution, and suitable metrics for imbalanced classes.",
        step: "Model choice",
        answers: [
          { label: "Binary outcome with interpretable odds ratios", result: "logisticRegression" },
          { label: "Multicategory outcome with an interpretable regression model", result: "multinomialRegression" },
          { label: "Transparent if-then rules", result: "decisionTreeClassifier" },
          { label: "Robust model with stronger predictive performance", result: "randomForestClassifier" },
          { label: "Classification from similar cases", result: "knnClassifier" },
          { label: "Fast baseline for many simple features", result: "naiveBayes" }
        ]
      },
      mlUnsupervisedGoal: {
        area: "Unsupervised learning",
        question: "What exploratory goal do you have without a known outcome variable?",
        hint: "These procedures search for structure in predictors without training against a known target.",
        step: "Exploration",
        answers: [
          { label: "Reduce many variables to a few components", result: "principalComponentAnalysis" },
          { label: "Group similar people or objects", result: "clusterAnalysis" },
          { label: "Visualise distances between people or objects", result: "multidimensionalScaling" }
        ]
      }
    },
    results: {
      decisionTreeRegression: { title: "Decision tree regression", summary: "Predicts a metric outcome using interpretable if-then decision rules.", assumptions: ["Metric outcome variable", "Training/test split or cross-validation", "Pruning or depth control to reduce overfitting", "Predictors are meaningfully coded"] },
      randomForestRegression: { title: "Random forest regression", summary: "Combines many regression trees to produce robust nonlinear predictions for metric outcomes.", assumptions: ["Metric outcome variable", "Enough cases for training and validation", "Tune number of trees and variables per split", "Interpret with variable importance or partial effects"] },
      knnRegression: { title: "k-nearest neighbors regression", summary: "Predicts metric values from the most similar cases in the feature space.", assumptions: ["Metric outcome variable", "Scaled/standardised predictors", "Meaningful distance metric", "Choose k using validation"] },
      decisionTreeClassifier: { title: "Decision tree classifier", summary: "Classifies cases with transparent decision rules and is useful when interpretability matters.", assumptions: ["Categorical outcome variable", "Training/test split or cross-validation", "Pruning or depth control to reduce overfitting", "Inspect class distribution"] },
      randomForestClassifier: { title: "Random forest classifier", summary: "Combines many decision trees for robust classification, often with stronger prediction than a single tree.", assumptions: ["Categorical outcome variable", "Adequate sample size", "Validation on unseen data", "Handle class imbalance"] },
      knnClassifier: { title: "k-nearest neighbors classifier", summary: "Classifies cases according to the classes of their most similar neighbors.", assumptions: ["Categorical outcome variable", "Scaled/standardised predictors", "Meaningful distance metric", "Choose k and weighting using validation"] },
      naiveBayes: { title: "Naive Bayes classifier", summary: "Fast probabilistic baseline for categorical prediction, especially with many simple features.", assumptions: ["Categorical outcome variable", "Predictors are treated as approximately conditionally independent", "Suitable distribution for metric features", "Check predicted probabilities with validation data"] },
      principalComponentAnalysis: { title: "Principal component analysis (PCA)", summary: "Reduces many correlated metric variables to a smaller set of components that explain as much variance as possible.", assumptions: ["Several metric or approximately metric variables", "Meaningful correlations among variables", "Standardise variables on different scales", "Choose components by explained variance and interpretability"] }
    }
  },
  fr: {
    goalUpdate: {
      question: "Que voulez-vous faire avec vos données ?",
      hint: "Choisissez si vous voulez tester une hypothèse prédéfinie, découvrir une structure de façon exploratoire ou entraîner un modèle pour prédire ou classer de nouveaux cas."
    },
    goalAnswer: { label: "Prédire ou classer de nouveaux cas", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: { area: "Apprentissage automatique", question: "Avez-vous une variable cible connue dans un jeu d'entraînement ?", hint: "L'apprentissage supervisé nécessite des valeurs cibles connues. Sans variable cible, l'objectif est plutôt de réduire les dimensions, regrouper ou visualiser une structure.", step: "Objectif d'apprentissage", answers: [{ label: "Oui, la variable cible est connue", next: "mlOutcomeType" }, { label: "Non, je veux découvrir des motifs sans variable cible", next: "mlUnsupervisedGoal" }] },
      mlOutcomeType: { area: "Variable cible", question: "Quel type de variable cible voulez-vous prédire ?", hint: "Les variables cibles métriques mènent à la régression. Les variables cibles catégorielles mènent à la classification.", step: "Variable cible", answers: [{ label: "Variable cible métrique", next: "mlNumericModel" }, { label: "Variable cible catégorielle", next: "mlClassificationModel" }] },
      mlNumericModel: { area: "Modèle de régression", question: "Quel type de modèle de prédiction convient le mieux ?", hint: "Un bon flux commence souvent par un modèle de base interprétable et compare des modèles plus flexibles par validation croisée.", step: "Choix du modèle", answers: [{ label: "Modèle linéaire de base interprétable", result: "linearRegression" }, { label: "Règles de décision non linéaires simples", result: "decisionTreeRegression" }, { label: "Prédiction plus forte avec de nombreux prédicteurs", result: "randomForestRegression" }, { label: "Prédiction à partir de cas similaires", result: "knnRegression" }] },
      mlClassificationModel: { area: "Modèle de classification", question: "Quelle logique de classification convient le mieux ?", hint: "En plus de l'exactitude, rapportez la stratégie de validation, la distribution des classes et des métriques adaptées aux classes déséquilibrées.", step: "Choix du modèle", answers: [{ label: "Variable binaire avec odds ratios interprétables", result: "logisticRegression" }, { label: "Variable multicatégorielle avec modèle de régression interprétable", result: "multinomialRegression" }, { label: "Règles si-alors transparentes", result: "decisionTreeClassifier" }, { label: "Modèle robuste avec meilleure performance prédictive", result: "randomForestClassifier" }, { label: "Classification à partir de cas similaires", result: "knnClassifier" }, { label: "Modèle de base rapide pour de nombreuses caractéristiques simples", result: "naiveBayes" }] },
      mlUnsupervisedGoal: { area: "Apprentissage non supervisé", question: "Quel objectif exploratoire avez-vous sans variable cible connue ?", hint: "Ces procédures cherchent une structure dans les prédicteurs sans entraînement sur une cible connue.", step: "Exploration", answers: [{ label: "Réduire de nombreuses variables à quelques composantes", result: "principalComponentAnalysis" }, { label: "Regrouper des personnes ou des objets similaires", result: "clusterAnalysis" }, { label: "Visualiser les distances entre personnes ou objets", result: "multidimensionalScaling" }] }
    },
    results: {
      decisionTreeRegression: { title: "Régression par arbre de décision", summary: "Prédit une variable cible métrique avec des règles de décision si-alors interprétables.", assumptions: ["Variable cible métrique", "Découpage entraînement/test ou validation croisée", "Élagage ou limitation de profondeur pour réduire le surapprentissage", "Prédicteurs codés de manière pertinente"] },
      randomForestRegression: { title: "Régression par forêt aléatoire", summary: "Combine de nombreux arbres de régression pour produire des prédictions non linéaires robustes.", assumptions: ["Variable cible métrique", "Nombre de cas suffisant pour entraînement et validation", "Régler le nombre d'arbres et de variables par division", "Interpréter avec importance des variables ou effets partiels"] },
      knnRegression: { title: "Régression k plus proches voisins", summary: "Prédit des valeurs métriques à partir des cas les plus similaires dans l'espace des caractéristiques.", assumptions: ["Variable cible métrique", "Prédicteurs mis à l'échelle/standardisés", "Mesure de distance pertinente", "Choisir k par validation"] },
      decisionTreeClassifier: { title: "Classificateur par arbre de décision", summary: "Classe les cas avec des règles transparentes lorsque l'interprétabilité est importante.", assumptions: ["Variable cible catégorielle", "Découpage entraînement/test ou validation croisée", "Élagage ou limitation de profondeur", "Examiner la distribution des classes"] },
      randomForestClassifier: { title: "Classificateur par forêt aléatoire", summary: "Combine de nombreux arbres pour une classification robuste, souvent plus performante qu'un seul arbre.", assumptions: ["Variable cible catégorielle", "Taille d'échantillon suffisante", "Validation sur des données non vues", "Tenir compte du déséquilibre des classes"] },
      knnClassifier: { title: "Classificateur k plus proches voisins", summary: "Classe les cas selon les classes de leurs voisins les plus similaires.", assumptions: ["Variable cible catégorielle", "Prédicteurs mis à l'échelle/standardisés", "Mesure de distance pertinente", "Choisir k et la pondération par validation"] },
      naiveBayes: { title: "Classificateur naïf bayésien", summary: "Modèle probabiliste rapide pour la prédiction catégorielle, surtout avec de nombreuses caractéristiques simples.", assumptions: ["Variable cible catégorielle", "Indépendance conditionnelle approximative des prédicteurs", "Distribution adaptée pour les variables métriques", "Vérifier les probabilités prédites avec des données de validation"] },
      principalComponentAnalysis: { title: "Analyse en composantes principales (ACP)", summary: "Réduit de nombreuses variables métriques corrélées à quelques composantes expliquant un maximum de variance.", assumptions: ["Plusieurs variables métriques ou approximativement métriques", "Corrélations pertinentes entre variables", "Standardiser les variables sur des échelles différentes", "Choisir les composantes selon variance expliquée et interprétabilité"] }
    }
  },
  es: {
    goalUpdate: {
      question: "¿Qué desea hacer con sus datos?",
      hint: "Elija si quiere probar una hipótesis predefinida, descubrir estructura de forma exploratoria o entrenar un modelo para predecir o clasificar nuevos casos."
    },
    goalAnswer: { label: "Predecir o clasificar nuevos casos", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: { area: "Aprendizaje automático", question: "¿Tiene una variable objetivo conocida en un conjunto de entrenamiento?", hint: "El aprendizaje supervisado necesita valores objetivo conocidos. Sin variable objetivo, el objetivo suele ser reducir dimensiones, agrupar o visualizar estructura.", step: "Objetivo de aprendizaje", answers: [{ label: "Sí, la variable objetivo es conocida", next: "mlOutcomeType" }, { label: "No, quiero descubrir patrones sin variable objetivo", next: "mlUnsupervisedGoal" }] },
      mlOutcomeType: { area: "Variable objetivo", question: "¿Qué tipo de variable objetivo quiere predecir?", hint: "Los objetivos métricos conducen a regresión. Los objetivos categóricos conducen a clasificación.", step: "Variable objetivo", answers: [{ label: "Variable objetivo métrica", next: "mlNumericModel" }, { label: "Variable objetivo categórica", next: "mlClassificationModel" }] },
      mlNumericModel: { area: "Modelo de regresión", question: "¿Qué tipo de modelo predictivo encaja mejor?", hint: "Un buen flujo suele empezar con una línea base interpretable y comparar modelos flexibles mediante validación cruzada.", step: "Elección del modelo", answers: [{ label: "Línea base lineal interpretable", result: "linearRegression" }, { label: "Reglas de decisión no lineales simples", result: "decisionTreeRegression" }, { label: "Predicción más fuerte con muchos predictores", result: "randomForestRegression" }, { label: "Predicción a partir de casos similares", result: "knnRegression" }] },
      mlClassificationModel: { area: "Modelo de clasificación", question: "¿Qué lógica de clasificación encaja mejor?", hint: "Además de la exactitud, reporte la estrategia de validación, la distribución de clases y métricas adecuadas para clases desbalanceadas.", step: "Elección del modelo", answers: [{ label: "Variable binaria con odds ratios interpretables", result: "logisticRegression" }, { label: "Variable multicategórica con modelo de regresión interpretable", result: "multinomialRegression" }, { label: "Reglas transparentes si-entonces", result: "decisionTreeClassifier" }, { label: "Modelo robusto con mayor rendimiento predictivo", result: "randomForestClassifier" }, { label: "Clasificación a partir de casos similares", result: "knnClassifier" }, { label: "Línea base rápida para muchas características simples", result: "naiveBayes" }] },
      mlUnsupervisedGoal: { area: "Aprendizaje no supervisado", question: "¿Qué objetivo exploratorio tiene sin una variable objetivo conocida?", hint: "Estos procedimientos buscan estructura en los predictores sin entrenar contra un objetivo conocido.", step: "Exploración", answers: [{ label: "Reducir muchas variables a pocos componentes", result: "principalComponentAnalysis" }, { label: "Agrupar personas u objetos similares", result: "clusterAnalysis" }, { label: "Visualizar distancias entre personas u objetos", result: "multidimensionalScaling" }] }
    },
    results: {
      decisionTreeRegression: { title: "Regresión con árbol de decisión", summary: "Predice una variable objetivo métrica mediante reglas si-entonces interpretables.", assumptions: ["Variable objetivo métrica", "División entrenamiento/prueba o validación cruzada", "Poda o control de profundidad contra sobreajuste", "Predictores codificados de forma significativa"] },
      randomForestRegression: { title: "Regresión con bosque aleatorio", summary: "Combina muchos árboles de regresión para predicciones no lineales robustas.", assumptions: ["Variable objetivo métrica", "Casos suficientes para entrenamiento y validación", "Ajustar número de árboles y variables por división", "Interpretar con importancia de variables o efectos parciales"] },
      knnRegression: { title: "Regresión k vecinos más cercanos", summary: "Predice valores métricos a partir de los casos más similares en el espacio de características.", assumptions: ["Variable objetivo métrica", "Predictores escalados/estandarizados", "Métrica de distancia significativa", "Elegir k mediante validación"] },
      decisionTreeClassifier: { title: "Clasificador con árbol de decisión", summary: "Clasifica casos con reglas transparentes cuando la interpretabilidad importa.", assumptions: ["Variable objetivo categórica", "División entrenamiento/prueba o validación cruzada", "Poda o control de profundidad", "Revisar distribución de clases"] },
      randomForestClassifier: { title: "Clasificador con bosque aleatorio", summary: "Combina muchos árboles para una clasificación robusta, a menudo más predictiva que un solo árbol.", assumptions: ["Variable objetivo categórica", "Tamaño muestral adecuado", "Validación en datos no vistos", "Manejar desbalance de clases"] },
      knnClassifier: { title: "Clasificador k vecinos más cercanos", summary: "Clasifica casos según las clases de sus vecinos más similares.", assumptions: ["Variable objetivo categórica", "Predictores escalados/estandarizados", "Métrica de distancia significativa", "Elegir k y ponderación mediante validación"] },
      naiveBayes: { title: "Clasificador naive Bayes", summary: "Línea base probabilística rápida para predicción categórica, especialmente con muchas características simples.", assumptions: ["Variable objetivo categórica", "Independencia condicional aproximada entre predictores", "Distribución adecuada para variables métricas", "Comprobar probabilidades predichas con datos de validación"] },
      principalComponentAnalysis: { title: "Análisis de componentes principales (PCA)", summary: "Reduce muchas variables métricas correlacionadas a pocos componentes que explican la mayor varianza posible.", assumptions: ["Varias variables métricas o aproximadamente métricas", "Correlaciones significativas entre variables", "Estandarizar variables con escalas distintas", "Elegir componentes por varianza explicada e interpretabilidad"] }
    }
  },
  it: {
    goalUpdate: {
      question: "Che cosa vuoi fare con i tuoi dati?",
      hint: "Scegli se vuoi testare un'ipotesi predefinita, scoprire strutture in modo esplorativo oppure addestrare un modello per predire o classificare nuovi casi."
    },
    goalAnswer: { label: "Predire o classificare nuovi casi", next: "mlOutcomeKnown" },
    tree: {
      mlOutcomeKnown: { area: "Machine learning", question: "Hai una variabile esito nota in un dataset di training?", hint: "L'apprendimento supervisionato richiede valori esito noti. Senza variabile esito, l'obiettivo è di solito ridurre dimensioni, raggruppare o visualizzare strutture.", step: "Obiettivo di apprendimento", answers: [{ label: "Sì, la variabile esito è nota", next: "mlOutcomeType" }, { label: "No, voglio scoprire pattern senza variabile esito", next: "mlUnsupervisedGoal" }] },
      mlOutcomeType: { area: "Variabile esito", question: "Che tipo di variabile esito vuoi predire?", hint: "Gli esiti metrici portano alla regressione. Gli esiti categoriali portano alla classificazione.", step: "Variabile esito", answers: [{ label: "Variabile esito metrica", next: "mlNumericModel" }, { label: "Variabile esito categoriale", next: "mlClassificationModel" }] },
      mlNumericModel: { area: "Modello di regressione", question: "Quale tipo di modello predittivo è più adatto?", hint: "Un buon flusso inizia spesso con una baseline interpretabile e confronta modelli flessibili con validazione incrociata.", step: "Scelta del modello", answers: [{ label: "Baseline lineare interpretabile", result: "linearRegression" }, { label: "Regole decisionali non lineari semplici", result: "decisionTreeRegression" }, { label: "Predizione più forte con molti predittori", result: "randomForestRegression" }, { label: "Predizione da casi simili", result: "knnRegression" }] },
      mlClassificationModel: { area: "Modello di classificazione", question: "Quale logica di classificazione è più adatta?", hint: "Oltre all'accuratezza, riporta strategia di validazione, distribuzione delle classi e metriche adatte per classi sbilanciate.", step: "Scelta del modello", answers: [{ label: "Esito binario con odds ratio interpretabili", result: "logisticRegression" }, { label: "Esito multicategoriale con modello di regressione interpretabile", result: "multinomialRegression" }, { label: "Regole trasparenti se-allora", result: "decisionTreeClassifier" }, { label: "Modello robusto con prestazione predittiva più forte", result: "randomForestClassifier" }, { label: "Classificazione da casi simili", result: "knnClassifier" }, { label: "Baseline rapida per molte caratteristiche semplici", result: "naiveBayes" }] },
      mlUnsupervisedGoal: { area: "Apprendimento non supervisionato", question: "Quale obiettivo esplorativo hai senza una variabile esito nota?", hint: "Queste procedure cercano struttura nei predittori senza training su un esito noto.", step: "Esplorazione", answers: [{ label: "Ridurre molte variabili a poche componenti", result: "principalComponentAnalysis" }, { label: "Raggruppare persone o oggetti simili", result: "clusterAnalysis" }, { label: "Visualizzare distanze tra persone o oggetti", result: "multidimensionalScaling" }] }
    },
    results: {
      decisionTreeRegression: { title: "Regressione con albero decisionale", summary: "Predice una variabile esito metrica usando regole decisionali se-allora interpretabili.", assumptions: ["Variabile esito metrica", "Split training/test o validazione incrociata", "Potatura o controllo della profondità contro overfitting", "Predittori codificati in modo significativo"] },
      randomForestRegression: { title: "Regressione random forest", summary: "Combina molti alberi di regressione per produrre predizioni non lineari robuste.", assumptions: ["Variabile esito metrica", "Casi sufficienti per training e validazione", "Regolare numero di alberi e variabili per split", "Interpretare con importanza delle variabili o effetti parziali"] },
      knnRegression: { title: "Regressione k-nearest neighbors", summary: "Predice valori metrici dai casi più simili nello spazio delle caratteristiche.", assumptions: ["Variabile esito metrica", "Predittori scalati/standardizzati", "Metrica di distanza significativa", "Scegliere k con validazione"] },
      decisionTreeClassifier: { title: "Classificatore ad albero decisionale", summary: "Classifica casi con regole trasparenti quando l'interpretabilità è importante.", assumptions: ["Variabile esito categoriale", "Split training/test o validazione incrociata", "Potatura o controllo della profondità", "Controllare distribuzione delle classi"] },
      randomForestClassifier: { title: "Classificatore random forest", summary: "Combina molti alberi per una classificazione robusta, spesso più predittiva di un singolo albero.", assumptions: ["Variabile esito categoriale", "Dimensione campionaria adeguata", "Validazione su dati non visti", "Gestire classi sbilanciate"] },
      knnClassifier: { title: "Classificatore k-nearest neighbors", summary: "Classifica casi secondo le classi dei vicini più simili.", assumptions: ["Variabile esito categoriale", "Predittori scalati/standardizzati", "Metrica di distanza significativa", "Scegliere k e pesatura con validazione"] },
      naiveBayes: { title: "Classificatore naive Bayes", summary: "Baseline probabilistica rapida per predizione categoriale, soprattutto con molte caratteristiche semplici.", assumptions: ["Variabile esito categoriale", "Indipendenza condizionale approssimata tra predittori", "Distribuzione adatta per caratteristiche metriche", "Controllare probabilità predette con dati di validazione"] },
      principalComponentAnalysis: { title: "Analisi delle componenti principali (PCA)", summary: "Riduce molte variabili metriche correlate a poche componenti che spiegano quanta più varianza possibile.", assumptions: ["Più variabili metriche o approssimativamente metriche", "Correlazioni significative tra variabili", "Standardizzare variabili su scale diverse", "Scegliere componenti per varianza spiegata e interpretabilità"] }
    }
  }
};

Object.entries(mlLanguageAdditions).forEach(([language, addition]) => {
  const pack = languagePacks[language];
  if (!pack) return;
  Object.assign(pack.tree.goal, addition.goalUpdate);
  if (!pack.tree.goal.answers.some((answer) => answer.next === addition.goalAnswer.next)) {
    pack.tree.goal.answers.push(addition.goalAnswer);
  }
  Object.assign(pack.tree, addition.tree);
  Object.assign(pack.results, addition.results);
});

const totalDecisionSteps = 13;

const procedureCatalog = {
  pearson: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove both metric variables into Variables.\nSelect Pearson and enable a scatterplot if you want a visual check.",
    r: "cor.test(data$x, data$y, method = \"pearson\")\nplot(data$x, data$y)"
  },
  spearman: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove the variables into Variables.\nSelect Spearman for ordinal or monotonic relationships.",
    r: "cor.test(data$x, data$y, method = \"spearman\", exact = FALSE)"
  },
  kendall: {
    jamovi: "Analyses > Regression > Correlation Matrix\nMove the variables into Variables.\nSelect Kendall's tau for ordinal or monotonic relationships, especially with small samples or ties.",
    r: "cor.test(data$x, data$y, method = \"kendall\", exact = FALSE)"
  },
  chiSquareAssociation: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Independent Samples\nPut one categorical variable in Rows and the other in Columns.\nEnable Chi-square test and expected counts.",
    r: "tab <- table(data$group, data$outcome)\nchisq.test(tab)"
  },
  logLinearModel: {
    jamovi: "Analyses > Frequencies > Log-Linear Model\nAdd the nominal variables that define the multiway contingency table.\nCompare models with and without interaction terms to understand which associations are needed.",
    r: "tab <- xtabs(count ~ therapy + outcome + gender, data = data)\nfit <- MASS::loglm(~ therapy * outcome + gender, data = tab)\nsummary(fit)"
  },
  pathAnalysis: {
    jamovi: "Install and open the medmod module in jamovi.\nSpecify the predictor, mediator, and outcome variables for the hypothesised mediation model.\nRequest standardized estimates, indirect effects, confidence intervals, and model fit information.",
    r: "library(lavaan)\nmodel <- '\n  mediator ~ a * predictor\n  outcome ~ b * mediator + c_prime * predictor\n  indirect := a * b\n  total := c_prime + indirect\n'\nfit <- sem(model, data = data, se = \"bootstrap\", bootstrap = 5000)\nsummary(fit, standardized = TRUE, fit.measures = TRUE, rsquare = TRUE)"
  },
  structuralEquationModeling: {
    jamovi: "Install and open the SEMLj module in jamovi.\nUse the SEM (syntax) option as the preferred way to specify the measurement and structural model, because it is clearer and more reproducible than the interactive builder.\nDefine latent variables with their indicators, add the hypothesised structural paths in syntax, and inspect standardized loadings, path coefficients, indirect effects if relevant, and global fit indices.",
    r: "library(lavaan)\nmodel <- '\n  stress =~ stress1 + stress2 + stress3\n  recovery =~ sleep1 + sleep2 + sleep3\n  recovery ~ stress\n  performance ~ recovery + stress\n'\nfit <- sem(model, data = data)\nsummary(fit, standardized = TRUE, fit.measures = TRUE, rsquare = TRUE)"
  },
  discriminantAnalysis: {
    jamovi: "Install and open the SnowCluster module in jamovi.\nChoose Classification > Linear Discriminant Analysis.\nSet the nominal group variable as the dependent variable and the interval-scaled variables as predictors; inspect discriminant functions and classification accuracy.",
    r: "library(MASS)\nfit <- lda(group ~ anxiety + motivation + reaction_time, data = data)\nfit\npred <- predict(fit)$class\ntable(Predicted = pred, Observed = data$group)\nmean(pred == data$group)"
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
    jamovi: "Analyses > ANOVA > ANOVA\nPut the metric outcome in Dependent Variable and the factor in Fixed Factor.\nEnable assumption checks and post-hoc tests if needed.",
    r: "fit <- aov(score ~ group, data = data)\nsummary(fit)\nTukeyHSD(fit)"
  },
  repeatedAnova: {
    jamovi: "Analyses > ANOVA > Repeated Measures ANOVA\nDefine the repeated-measures factor and levels.\nAssign the repeated measurement columns and enable sphericity corrections.",
    r: "fit <- aov(score ~ condition + Error(id / condition), data = long_data)\nsummary(fit)"
  },
  twoWayAnova: {
    jamovi: "Analyses > ANOVA > ANOVA\nPut the metric outcome in Dependent Variable and the two or more grouping factors in Fixed Factors.\nInspect main effects, interaction terms, assumption checks, and post-hoc/simple-effects comparisons if needed.",
    r: "fit <- aov(score ~ factor_a * factor_b, data = data)\nsummary(fit)\n# Effect sizes: effectsize::eta_squared(fit, partial = TRUE)"
  },
  twoWayRepeatedAnova: {
    jamovi: "Analyses > ANOVA > Repeated Measures ANOVA\nDefine the two or more repeated-measures factors and their levels, then assign the repeated measurement columns to the design cells.\nInspect main effects, interaction terms, and sphericity corrections such as Greenhouse-Geisser when needed.",
    r: "fit <- aov(score ~ factor_a * factor_b + Error(id / (factor_a * factor_b)), data = long_data)\nsummary(fit)"
  },
  linearMixedModel: {
    jamovi: "Install and open the GAMLj module in jamovi.\nChoose Mixed Models > Linear Model, place the metric outcome in Dependent Variable, fixed predictors in Fixed Effects, and participant/team/class in Random Effects.\nStart with random intercepts and add random slopes only when theoretically justified and supported by the data.",
    r: "library(lme4)\nlibrary(lmerTest)\nfit <- lmer(score ~ condition + week + (1 | participant), data = data)\nsummary(fit)\nperformance::r2_nakagawa(fit)"
  },
  generalizedLinearMixedModel: {
    jamovi: "Install and open the GAMLj module in jamovi.\nChoose the generalized/logistic mixed model option, not Mixed Models > Linear Model.\nUse success as the nominal dependent variable, choose a binomial distribution with a logit link, add condition and week as fixed effects, and add participant as a random intercept.\nIf jamovi says the linear model requires continuous data, you are in the linear mixed model menu.",
    r: "library(lme4)\ndata$success <- factor(data$success, levels = c(\"no\", \"yes\"))\nfit <- glmer(success ~ condition + week + (1 | participant), data = data, family = binomial)\nsummary(fit)\nexp(fixef(fit))"
  },
  ordinalMixedModel: {
    jamovi: "jamovi has limited direct support for ordinal mixed models in the core menus.\nUse the Rj Editor module or export the data to R.\nModel the ordinal outcome with fixed predictors and random effects for participant, team, class, or another cluster.",
    r: "library(ordinal)\nfit <- clmm(rating ~ condition + week + (1 | participant), data = data)\nsummary(fit)\nexp(coef(fit))"
  },
  kruskalWallis: {
    jamovi: "Analyses > Nonparametric Tests > Kruskal-Wallis\nPut the ordinal/metric outcome in the dependent variable field and the grouping variable in the group field.\nRequest descriptives and pairwise comparisons if needed.",
    r: "kruskal.test(score ~ group, data = data)"
  },
  friedman: {
    jamovi: "Analyses > Nonparametric Tests > Friedman\nAdd the repeated or paired measurement columns for the same participants.\nRequest descriptives and pairwise comparisons if needed.",
    r: "friedman.test(as.matrix(data[, c(\"time1\", \"time2\", \"time3\")]))"
  },
  nonparametricTwoWayAnova: {
    jamovi: "jamovi core menus do not provide a full nonparametric factorial ANOVA for two or more factors with interactions.\nUse the Rj Editor module or export the data to R and fit an aligned-rank-transform model.\nReport main effects and interactions from the ART ANOVA table.",
    r: "library(ARTool)\nfit <- art(score ~ factor_a * factor_b, data = data)\nanova(fit)"
  },
  nonparametricTwoWayRepeatedAnova: {
    jamovi: "jamovi core menus do not provide a full nonparametric factorial repeated-measures ANOVA for two or more factors with interactions.\nUse the Rj Editor module or export the data to R and fit an aligned-rank-transform model with participant as the repeated unit.\nReport main effects and interactions from the ART ANOVA table.",
    r: "library(ARTool)\nfit <- art(score ~ factor_a * factor_b + Error(id), data = long_data)\nanova(fit)"
  },
  fisher: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Independent Samples\nPut variables in Rows and Columns.\nEnable Fisher's exact test for a 2x2 table.",
    r: "tab <- table(data$group, data$outcome)\nfisher.test(tab)"
  },
  mcnemar: {
    jamovi: "Analyses > Frequencies > Contingency Tables > Paired Samples\nAdd the two paired dichotomous variables.\nEnable McNemar test.",
    r: "tab <- table(data$before, data$after)\nmcnemar.test(tab)"
  },
  binomialTest: {
    jamovi: "Analyses > Frequencies > One Sample Proportion Tests\nSelect the two-level categorical variable.\nEnter the expected proportion for the focal category and request exact/binomial confidence intervals.",
    r: "successes <- sum(data$response == \"yes\")\nn <- length(data$response)\nbinom.test(successes, n, p = 0.50)"
  },
  chiSquareGoodness: {
    jamovi: "Analyses > Frequencies > One Sample Proportion Tests\nSelect the categorical variable.\nEnter expected proportions or compare against equal proportions.",
    r: "observed <- c(20, 30, 50)\nexpected <- c(1/3, 1/3, 1/3)\nchisq.test(observed, p = expected)"
  },
  linearRegression: {
    jamovi: "Analyses > Regression > Linear Regression\nPut the metric target in Dependent Variable.\nAdd predictors to Covariates or Factors and inspect residual diagnostics.\nInterpret coefficients as prediction/association unless the study design supports causal inference.",
    r: "fit <- lm(y ~ x1 + x2, data = data)\nsummary(fit)\nplot(fit)"
  },
  logisticRegression: {
    jamovi: "Analyses > Regression > Logistic Regression > 2 Outcomes\nPut the dichotomous target in Dependent Variable.\nAdd predictors to Covariates or Factors and inspect odds ratios.",
    r: "fit <- glm(y ~ x1 + x2, data = data, family = binomial)\nsummary(fit)\nexp(coef(fit))"
  },
  multinomialRegression: {
    jamovi: "Analyses > Regression > Logistic Regression > N Outcomes\nPut the multicategory target in Dependent Variable.\nAdd predictors to Covariates or Factors and choose the reference level.",
    r: "library(nnet)\nfit <- multinom(y ~ x1 + x2, data = data)\nsummary(fit)"
  },
  factorAnalysis: {
    jamovi: "Analyses > Factor > Exploratory Factor Analysis\nMove the related variables into Variables.\nChoose the extraction method, rotation, number of factors, and inspect loadings and model fit.",
    r: "library(psych)\nfa.parallel(data[, items], fa = \"fa\")\nfit <- fa(data[, items], nfactors = 3, rotate = \"oblimin\")\nprint(fit$loadings, cutoff = .30)"
  },
  clusterAnalysis: {
    jamovi: "Install the SnowCluster module from the jamovi library and open it from the Analyses menu. Choose Hierarchical Clustering. \nMove the variables that describe people or objects into the clustering variables field.\nStandardise variables if needed, choose the clustering method/distance option, set or compare the number of clusters, and inspect the cluster quality output.",
    r: "scaled <- scale(data[, variables])\nd <- dist(scaled, method = \"euclidean\")\nfit <- hclust(d, method = \"ward.D2\")\nplot(fit)\nclusters <- cutree(fit, k = 3)"
  },
  multidimensionalScaling: {
    jamovi: "Install the jMDS module from the jamovi library and open it from the Analyses menu.\nProvide the distance/dissimilarity matrix or select the variables used to compute distances, depending on the module option.\nChoose the number of dimensions and inspect the stress value, configuration plot, and interpretability of the dimensions.",
    r: "d <- dist(scale(data[, variables]))\nfit <- cmdscale(d, k = 2, eig = TRUE)\nplot(fit$points, xlab = \"Dimension 1\", ylab = \"Dimension 2\")\n# Non-metric MDS: MASS::isoMDS(d, k = 2)"
  },
  chiSquareVariance: {
    jamovi: "Jamovi has limited direct support for the exact chi-square test of one variance.\nUse Exploration > Descriptives to obtain n and the sample variance, then run the exact test in R.\nReport the hypothesised population variance and the chi-square statistic.",
    r: "n <- length(data$score)\ns2 <- var(data$score)\nsigma2_0 <- 100\nchi2 <- (n - 1) * s2 / sigma2_0\np <- 2 * min(pchisq(chi2, df = n - 1), 1 - pchisq(chi2, df = n - 1))\nc(chi_square = chi2, df = n - 1, p = p)"
  },
  varianceFTest: {
    jamovi: "Jamovi can show group variances in Exploration > Descriptives.\nFor the classical F-test of two variances, export the data or use an R module and run var.test().\nConsider Levene's test as a more robust alternative when normality is doubtful.",
    r: "var.test(score ~ group, data = data)\n# Robust alternative:\n# car::leveneTest(score ~ group, data = data)"
  },
  decisionTreeRegression: {
    jamovi: "Jamovi has limited built-in support for decision tree regression.\nUse a machine-learning module if installed, or export the data and fit the tree in R.\nValidate the tree with a train/test split or cross-validation and inspect pruning/depth.",
    r: "library(rpart)\nlibrary(caret)\nset.seed(1)\ntrain_id <- createDataPartition(data$y, p = .70, list = FALSE)\nfit <- rpart(y ~ ., data = data[train_id, ], method = \"anova\")\npred <- predict(fit, newdata = data[-train_id, ])\npostResample(pred, data$y[-train_id])"
  },
  randomForestRegression: {
    jamovi: "Jamovi has limited built-in support for random forests in the core menus.\nUse a suitable machine-learning module if available, or export the data and fit the model in R.\nReport out-of-sample RMSE/R2 and variable importance rather than only training performance.",
    r: "library(randomForest)\nlibrary(caret)\nset.seed(1)\ntrain_id <- createDataPartition(data$y, p = .70, list = FALSE)\nfit <- randomForest(y ~ ., data = data[train_id, ], ntree = 500, importance = TRUE)\npred <- predict(fit, newdata = data[-train_id, ])\npostResample(pred, data$y[-train_id])\nimportance(fit)"
  },
  knnRegression: {
    jamovi: "Jamovi has limited built-in support for k-nearest-neighbors regression.\nStandardise predictors, then use a machine-learning module if installed or export the data to R.\nChoose k using cross-validation and report out-of-sample prediction error.",
    r: "library(caret)\nset.seed(1)\nctrl <- trainControl(method = \"cv\", number = 10)\nfit <- train(y ~ ., data = data, method = \"knn\", trControl = ctrl, preProcess = c(\"center\", \"scale\"), tuneLength = 10)\nfit"
  },
  decisionTreeClassifier: {
    jamovi: "Jamovi has limited built-in support for decision tree classification.\nUse a machine-learning module if installed, or export the data and fit the tree in R.\nValidate with a holdout set or cross-validation and inspect the confusion matrix.",
    r: "library(rpart)\nlibrary(caret)\nset.seed(1)\ntrain_id <- createDataPartition(data$class, p = .70, list = FALSE)\nfit <- rpart(class ~ ., data = data[train_id, ], method = \"class\")\npred <- predict(fit, newdata = data[-train_id, ], type = \"class\")\nconfusionMatrix(pred, data$class[-train_id])"
  },
  randomForestClassifier: {
    jamovi: "Jamovi has limited built-in support for random forests in the core menus.\nUse a suitable machine-learning module if available, or export the data and fit the model in R.\nReport validation accuracy, balanced accuracy/F1 when classes are imbalanced, and variable importance.",
    r: "library(randomForest)\nlibrary(caret)\nset.seed(1)\ntrain_id <- createDataPartition(data$class, p = .70, list = FALSE)\nfit <- randomForest(class ~ ., data = data[train_id, ], ntree = 500, importance = TRUE)\npred <- predict(fit, newdata = data[-train_id, ])\nconfusionMatrix(pred, data$class[-train_id])\nimportance(fit)"
  },
  knnClassifier: {
    jamovi: "Jamovi has limited built-in support for k-nearest-neighbors classification.\nStandardise predictors, then use a machine-learning module if installed or export the data to R.\nChoose k by cross-validation and report a confusion matrix on validation data.",
    r: "library(caret)\nset.seed(1)\nctrl <- trainControl(method = \"cv\", number = 10)\nfit <- train(class ~ ., data = data, method = \"knn\", trControl = ctrl, preProcess = c(\"center\", \"scale\"), tuneLength = 10)\nfit"
  },
  naiveBayes: {
    jamovi: "Jamovi has limited built-in support for naive Bayes in the core menus.\nUse a machine-learning module if installed, or export the data and fit the model in R.\nInspect predicted probabilities and a validation confusion matrix.",
    r: "library(e1071)\nlibrary(caret)\nset.seed(1)\ntrain_id <- createDataPartition(data$class, p = .70, list = FALSE)\nfit <- naiveBayes(class ~ ., data = data[train_id, ])\npred <- predict(fit, newdata = data[-train_id, ])\nconfusionMatrix(pred, data$class[-train_id])"
  },
  principalComponentAnalysis: {
    jamovi: "Analyses > Factor > Principal Component Analysis\nMove the metric variables into Variables.\nChoose the number of components, inspect loadings, scree plot, explained variance, and decide whether to save component scores.",
    r: "vars <- data[, variables]\nfit <- prcomp(vars, center = TRUE, scale. = TRUE)\nsummary(fit)\nloadings <- fit$rotation\nscores <- fit$x"
  }
};

const procedureScreenshots = {
  oneSampleT: {
    jamovi: {
      en: "assets/jamovi/oneSampleT_ENG.png"
    }
  },
  oneSampleWilcoxon: {
    jamovi: {
      en: "assets/jamovi/oneSampleWilcoxon_ENG.png"
    }
  },
  independentT: {
    jamovi: {
      en: "assets/jamovi/independentT_ENG.png"
    }
  },
  mannWhitney: {
    jamovi: {
      en: "assets/jamovi/mannWhitney_ENG.png"
    }
  },
  pairedT: {
    jamovi: {
      en: "assets/jamovi/pairedT_ENG.png"
    }
  },
  wilcoxon: {
    jamovi: {
      en: "assets/jamovi/wilcoxon_ENG.png"
    }
  },
  anova: {
    jamovi: {
      en: "assets/jamovi/anova_ENG.png"
    }
  },
  repeatedAnova: {
    jamovi: {
      en: "assets/jamovi/repeatedAnova_ENG.png"
    }
  },
  twoWayAnova: {
    jamovi: {
      en: "assets/jamovi/twoWayAnova_ENG.png"
    }
  },
  twoWayRepeatedAnova: {
    jamovi: {
      en: "assets/jamovi/twoWayRepeatedAnova_ENG.png"
    }
  },
  kruskalWallis: {
    jamovi: {
      en: "assets/jamovi/kruskalWallis_ENG.png"
    }
  },
  friedman: {
    jamovi: {
      en: "assets/jamovi/friedman_ENG.png"
    }
  },
  pearson: {
    jamovi: {
      en: "assets/jamovi/pearson_ENG.png"
    }
  },
  spearman: {
    jamovi: {
      en: "assets/jamovi/spearman_ENG.png"
    }
  },
  kendall: {
    jamovi: {
      en: "assets/jamovi/kendall_ENG.png"
    }
  },
  chiSquareAssociation: {
    jamovi: {
      en: "assets/jamovi/chiSquareAssociation_ENG.png"
    }
  },
  logLinearModel: {
    jamovi: {
      en: "assets/jamovi/logLinearModel_ENG.png"
    }
  },
  pathAnalysis: {
    jamovi: {
      en: "assets/jamovi/pathAnalysis_ENG.png"
    }
  },
  fisher: {
    jamovi: {
      en: "assets/jamovi/fisher_ENG.png"
    }
  },
  mcnemar: {
    jamovi: {
      en: "assets/jamovi/mcnemar_ENG.png"
    }
  },
  binomialTest: {
    jamovi: {
      en: "assets/jamovi/binomialTest_ENG.png"
    }
  },
  chiSquareGoodness: {
    jamovi: {
      en: "assets/jamovi/chiSquareGoodness_ENG.png"
    }
  },
  factorAnalysis: {
    jamovi: {
      en: "assets/jamovi/factorAnalysis_ENG.png"
    }
  },
  clusterAnalysis: {
    jamovi: {
      en: "assets/jamovi/clusterAnalysis_ENG.png"
    }
  },
  multidimensionalScaling: {
    jamovi: {
      en: "assets/jamovi/multidimensionalScaling_ENG.png"
    }
  },
  structuralEquationModeling: {
    jamovi: {
      en: "assets/jamovi/structuralEquationModeling_ENG.png"
    }
  },
  discriminantAnalysis: {
    jamovi: {
      en: "assets/jamovi/Linear%20Discriminant%20Analysis_ENG.png"
    }
  },
  linearMixedModel: {
    jamovi: {
      en: "assets/jamovi/linearMixedModel_ENG.png"
    }
  },
  generalizedLinearMixedModel: {
    jamovi: {
      en: "assets/jamovi/generalizedMixedModel_ENG.png"
    }
  }
};

const effectSizeDefinitions = {
  pearson: { measure: "Pearson's r", rangeType: "r" },
  spearman: { measure: "Spearman's rho", rangeType: "r" },
  kendall: { measure: "Kendall's tau", rangeType: "r" },
  chiSquareAssociation: { measure: "Cramer's V", rangeType: "v" },
  logLinearModel: { measure: "Odds ratios for interaction terms", rangeType: "or" },
  oneSampleT: { measure: "Cohen's d", rangeType: "d" },
  oneSampleWilcoxon: { measure: "Effect size r", rangeType: "r" },
  independentT: { measure: "Cohen's d / Hedges' g", rangeType: "d" },
  mannWhitney: { measure: "Rank-biserial correlation", rangeType: "r" },
  pairedT: { measure: "Cohen's dz", rangeType: "d" },
  wilcoxon: { measure: "Effect size r", rangeType: "r" },
  anova: { measure: "Partial eta squared", rangeType: "eta" },
  repeatedAnova: { measure: "Partial eta squared", rangeType: "eta" },
  twoWayAnova: { measure: "Partial eta squared for each main effect and interaction", rangeType: "eta" },
  twoWayRepeatedAnova: { measure: "Partial eta squared for each main effect and interaction", rangeType: "eta" },
  linearMixedModel: { measure: "Marginal and conditional R squared", rangeType: "mixedR2" },
  generalizedLinearMixedModel: { measure: "Odds ratio or incidence-rate ratio", rangeType: "or" },
  ordinalMixedModel: { measure: "Cumulative odds ratio", rangeType: "or" },
  kruskalWallis: { measure: "Epsilon squared", rangeType: "eta" },
  friedman: { measure: "Kendall's W", rangeType: "w" },
  nonparametricTwoWayAnova: { measure: "Partial eta squared or ART effect size by term", rangeType: "eta" },
  nonparametricTwoWayRepeatedAnova: { measure: "Partial eta squared or ART effect size by term", rangeType: "eta" },
  fisher: { measure: "Odds ratio", rangeType: "or" },
  mcnemar: { measure: "Matched-pairs odds ratio", rangeType: "or" },
  binomialTest: { measure: "Cohen's h", rangeType: "h" },
  chiSquareGoodness: { measure: "Cohen's w", rangeType: "w" },
  linearRegression: { measure: "R squared / adjusted R squared", rangeType: "r2" },
  logisticRegression: { measure: "Odds ratio", rangeType: "or" },
  multinomialRegression: { measure: "Odds ratios by outcome category", rangeType: "or" },
  pathAnalysis: { measure: "Standardized path coefficients and indirect effect", rangeType: "beta" },
  structuralEquationModeling: { measure: "Standardized loadings, path coefficients, and R squared", rangeType: "beta" },
  discriminantAnalysis: { measure: "Canonical correlation and classification accuracy", rangeType: "canonical" },
  factorAnalysis: { measure: "Factor loadings and variance explained", rangeType: "loading" },
  clusterAnalysis: { measure: "Silhouette width", rangeType: "silhouette" },
  multidimensionalScaling: { measure: "Stress value", rangeType: "stress" },
  chiSquareVariance: { measure: "Variance ratio s2 / sigma2", rangeType: "varianceRatio" },
  varianceFTest: { measure: "Variance ratio F", rangeType: "varianceRatio" },
  decisionTreeRegression: { measure: "Cross-validated RMSE and R squared", rangeType: "mlRegression" },
  randomForestRegression: { measure: "Out-of-sample RMSE and R squared", rangeType: "mlRegression" },
  knnRegression: { measure: "Cross-validated RMSE and R squared", rangeType: "mlRegression" },
  decisionTreeClassifier: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  randomForestClassifier: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  knnClassifier: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  naiveBayes: { measure: "Accuracy, balanced accuracy, F1, or AUC", rangeType: "mlClassification" },
  principalComponentAnalysis: { measure: "Explained variance and component loadings", rangeType: "pca" }
};

const effectSizeLabels = {
  de: {
    heading: "Effektgröße",
    measureLabel: "Häufige Effektgröße",
    rangeLabel: "Übliche Einordnung",
    noteLabel: "Hinweis",
    small: "klein",
    medium: "mittel",
    large: "groß",
    note: "Diese Schwellen sind verbreitete Faustregeln. Interpretation hängt immer von Fachgebiet, Messinstrument, Stichprobe und Studiendesign ab.",
    ranges: {
      d: "|d|: 0.20 klein, 0.50 mittel, 0.80 groß",
      r: "|r|: .10 klein, .30 mittel, .50 groß",
      v: "V: .10 klein, .30 mittel, .50 groß; bei größeren Tabellen nur als grobe Orientierung",
      eta: "eta2: .01 klein, .06 mittel, .14 groß",
      h: "h: 0.20 klein, 0.50 mittel, 0.80 groß",
      w: "w/W: .10 klein, .30 mittel, .50 groß",
      r2: "R2: .02 klein, .13 mittel, .26 groß",
      mixedR2: "Marginales R2 = erklärte Varianz durch feste Effekte; konditionales R2 = feste plus zufällige Effekte. Differenz fachlich interpretieren.",
      beta: "|standardisierte beta|: .10 klein, .30 mittel, .50 groß; indirekte Effekte zusätzlich mit Konfidenzintervall interpretieren",
      canonical: "Kanonische Korrelation: .10 klein, .30 mittel, .50 groß; Klassifikationsgenauigkeit immer gegen Zufall/Basisrate bewerten",
      or: "OR: 1.5 klein, 2.0 mittel, 3.0 groß; Werte unter 1 können zur Interpretation invertiert werden",
      loading: "Ladungen: .30 bedeutsam, .50 stark, .70 sehr stark; erklärte Varianz ist kontextabhängig",
      silhouette: "Silhouette: < .25 schwach, .26-.50 brauchbar, .51-.70 gut, > .70 stark",
      stress: "Stress: < .05 exzellent, < .10 gut, < .20 akzeptabel; kleinere Werte sind besser",
      varianceRatio: "Verhältnis nahe 1 = geringe Abweichung; 1.5 klein, 2.0 mittel, 3.0 groß als grobe Orientierung"
    }
  },
  en: {
    heading: "Effect size",
    measureLabel: "Common effect size",
    rangeLabel: "Common interpretation range",
    noteLabel: "Note",
    small: "small",
    medium: "medium",
    large: "large",
    note: "These thresholds are common rules of thumb. Interpretation always depends on the field, measurement instrument, sample, and study design.",
    ranges: {
      d: "|d|: 0.20 small, 0.50 medium, 0.80 large",
      r: "|r|: .10 small, .30 medium, .50 large",
      v: "V: .10 small, .30 medium, .50 large; only a rough guide for larger tables",
      eta: "eta2: .01 small, .06 medium, .14 large",
      h: "h: 0.20 small, 0.50 medium, 0.80 large",
      w: "w/W: .10 small, .30 medium, .50 large",
      r2: "R2: .02 small, .13 medium, .26 large",
      mixedR2: "Marginal R2 = variance explained by fixed effects; conditional R2 = fixed plus random effects. Interpret their difference substantively.",
      beta: "|standardized beta|: .10 small, .30 medium, .50 large; interpret indirect effects with confidence intervals",
      canonical: "Canonical correlation: .10 small, .30 medium, .50 large; always compare classification accuracy with chance/baseline accuracy",
      or: "OR: 1.5 small, 2.0 medium, 3.0 large; values below 1 can be inverted for interpretation",
      loading: "Loadings: .30 meaningful, .50 strong, .70 very strong; variance explained is context-dependent",
      silhouette: "Silhouette: < .25 weak, .26-.50 fair, .51-.70 good, > .70 strong",
      stress: "Stress: < .05 excellent, < .10 good, < .20 acceptable; lower values are better",
      varianceRatio: "Ratio near 1 = little deviation; 1.5 small, 2.0 medium, 3.0 large as a rough guide"
    }
  },
  fr: {
    heading: "Taille d'effet",
    measureLabel: "Taille d'effet fréquente",
    rangeLabel: "Repères d'interprétation courants",
    noteLabel: "Remarque",
    note: "Ces seuils sont des règles pratiques courantes. L'interprétation dépend toujours du domaine, de l'instrument, de l'échantillon et du plan d'étude.",
    ranges: {
      d: "|d| : 0.20 faible, 0.50 moyen, 0.80 fort",
      r: "|r| : .10 faible, .30 moyen, .50 fort",
      v: "V : .10 faible, .30 moyen, .50 fort ; seulement un repère approximatif pour les grands tableaux",
      eta: "eta2 : .01 faible, .06 moyen, .14 fort",
      h: "h : 0.20 faible, 0.50 moyen, 0.80 fort",
      w: "w/W : .10 faible, .30 moyen, .50 fort",
      r2: "R2 : .02 faible, .13 moyen, .26 fort",
      mixedR2: "R2 marginal = variance expliquée par les effets fixes ; R2 conditionnel = effets fixes plus aléatoires. Interpréter leur différence substantiellement.",
      beta: "|beta standardisé| : .10 faible, .30 moyen, .50 fort ; interpréter les effets indirects avec des intervalles de confiance",
      canonical: "Corrélation canonique : .10 faible, .30 moyen, .50 fort ; toujours comparer l'exactitude de classification au hasard/taux de base",
      or: "OR : 1.5 faible, 2.0 moyen, 3.0 fort ; les valeurs < 1 peuvent être inversées pour l'interprétation",
      loading: "Charges : .30 significatif, .50 fort, .70 très fort ; la variance expliquée dépend du contexte",
      silhouette: "Silhouette : < .25 faible, .26-.50 acceptable, .51-.70 bonne, > .70 forte",
      stress: "Stress : < .05 excellent, < .10 bon, < .20 acceptable ; les valeurs plus faibles sont meilleures",
      varianceRatio: "Rapport proche de 1 = faible écart ; 1.5 faible, 2.0 moyen, 3.0 fort comme repère approximatif"
    }
  },
  es: {
    heading: "Tamaño del efecto",
    measureLabel: "Tamaño del efecto habitual",
    rangeLabel: "Rango de interpretación habitual",
    noteLabel: "Nota",
    note: "Estos umbrales son reglas prácticas frecuentes. La interpretación depende siempre del área, el instrumento, la muestra y el diseño del estudio.",
    ranges: {
      d: "|d|: 0.20 pequeño, 0.50 medio, 0.80 grande",
      r: "|r|: .10 pequeño, .30 medio, .50 grande",
      v: "V: .10 pequeño, .30 medio, .50 grande; solo como guía aproximada en tablas grandes",
      eta: "eta2: .01 pequeño, .06 medio, .14 grande",
      h: "h: 0.20 pequeño, 0.50 medio, 0.80 grande",
      w: "w/W: .10 pequeño, .30 medio, .50 grande",
      r2: "R2: .02 pequeño, .13 medio, .26 grande",
      mixedR2: "R2 marginal = varianza explicada por efectos fijos; R2 condicional = efectos fijos más aleatorios. Interprete su diferencia sustantivamente.",
      beta: "|beta estandarizado|: .10 pequeño, .30 medio, .50 grande; interprete los efectos indirectos con intervalos de confianza",
      canonical: "Correlación canónica: .10 pequeña, .30 media, .50 grande; compare siempre la exactitud de clasificación con el azar/tasa base",
      or: "OR: 1.5 pequeño, 2.0 medio, 3.0 grande; los valores < 1 pueden invertirse para interpretarlos",
      loading: "Cargas: .30 significativa, .50 fuerte, .70 muy fuerte; la varianza explicada depende del contexto",
      silhouette: "Silueta: < .25 débil, .26-.50 aceptable, .51-.70 buena, > .70 fuerte",
      stress: "Estrés: < .05 excelente, < .10 bueno, < .20 aceptable; valores menores son mejores",
      varianceRatio: "Razón cercana a 1 = poca desviación; 1.5 pequeño, 2.0 medio, 3.0 grande como guía aproximada"
    }
  },
  it: {
    heading: "Dimensione dell'effetto",
    measureLabel: "Dimensione dell'effetto comune",
    rangeLabel: "Intervallo interpretativo comune",
    noteLabel: "Nota",
    note: "Queste soglie sono regole pratiche comuni. L'interpretazione dipende sempre dal settore, dallo strumento, dal campione e dal disegno dello studio.",
    ranges: {
      d: "|d|: 0.20 piccolo, 0.50 medio, 0.80 grande",
      r: "|r|: .10 piccolo, .30 medio, .50 grande",
      v: "V: .10 piccolo, .30 medio, .50 grande; solo come guida approssimativa per tabelle grandi",
      eta: "eta2: .01 piccolo, .06 medio, .14 grande",
      h: "h: 0.20 piccolo, 0.50 medio, 0.80 grande",
      w: "w/W: .10 piccolo, .30 medio, .50 grande",
      r2: "R2: .02 piccolo, .13 medio, .26 grande",
      mixedR2: "R2 marginale = varianza spiegata dagli effetti fissi; R2 condizionale = effetti fissi più casuali. Interpreta la differenza in modo sostanziale.",
      beta: "|beta standardizzato|: .10 piccolo, .30 medio, .50 grande; interpreta gli effetti indiretti con intervalli di confidenza",
      canonical: "Correlazione canonica: .10 piccola, .30 media, .50 grande; confronta sempre l'accuratezza di classificazione con il caso/tasso base",
      or: "OR: 1.5 piccolo, 2.0 medio, 3.0 grande; i valori < 1 possono essere invertiti per l'interpretazione",
      loading: "Carichi: .30 significativo, .50 forte, .70 molto forte; la varianza spiegata dipende dal contesto",
      silhouette: "Silhouette: < .25 debole, .26-.50 discreta, .51-.70 buona, > .70 forte",
      stress: "Stress: < .05 eccellente, < .10 buono, < .20 accettabile; valori più bassi sono migliori",
      varianceRatio: "Rapporto vicino a 1 = poca deviazione; 1.5 piccolo, 2.0 medio, 3.0 grande come guida approssimativa"
    }
  }
};

const mlEffectSizeRanges = {
  de: {
    mlRegression: "RMSE/MAE: niedriger ist besser; R2 nahe 1 zeigt bessere Vorhersage. Immer mit Testdaten, Kreuzvalidierung oder Baseline vergleichen.",
    mlClassification: "Accuracy nur bei balancierten Klassen interpretieren. Bei unbalancierten Klassen balanced accuracy, F1, Sensitivität/Spezifität oder AUC berichten.",
    pca: "Kumulierte erklärte Varianz und Ladungen gemeinsam interpretieren; häufig werden Komponenten mit Eigenwert > 1, Scree-Plot und inhaltlicher Interpretierbarkeit geprüft."
  },
  en: {
    mlRegression: "RMSE/MAE: lower is better; R2 closer to 1 indicates better prediction. Always compare with test data, cross-validation, or a baseline model.",
    mlClassification: "Interpret accuracy only when classes are balanced. For imbalanced classes report balanced accuracy, F1, sensitivity/specificity, or AUC.",
    pca: "Interpret cumulative explained variance together with loadings; common guides include eigenvalues > 1, the scree plot, and substantive interpretability."
  },
  fr: {
    mlRegression: "RMSE/MAE : plus faible est meilleur ; R2 proche de 1 indique une meilleure prédiction. Toujours comparer avec des données test, une validation croisée ou un modèle de base.",
    mlClassification: "Interprétez l'exactitude seulement si les classes sont équilibrées. Si les classes sont déséquilibrées, rapportez exactitude équilibrée, F1, sensibilité/spécificité ou AUC.",
    pca: "Interprétez la variance expliquée cumulée avec les charges ; repères fréquents : valeurs propres > 1, scree plot et interprétabilité substantielle."
  },
  es: {
    mlRegression: "RMSE/MAE: menor es mejor; R2 cercano a 1 indica mejor predicción. Compare siempre con datos de prueba, validación cruzada o un modelo base.",
    mlClassification: "Interprete la exactitud solo con clases balanceadas. Con clases desbalanceadas reporte exactitud balanceada, F1, sensibilidad/especificidad o AUC.",
    pca: "Interprete la varianza explicada acumulada junto con las cargas; guías habituales son autovalores > 1, scree plot e interpretabilidad sustantiva."
  },
  it: {
    mlRegression: "RMSE/MAE: più basso è meglio; R2 vicino a 1 indica migliore predizione. Confronta sempre con dati test, validazione incrociata o un modello baseline.",
    mlClassification: "Interpreta l'accuratezza solo con classi bilanciate. Con classi sbilanciate riporta balanced accuracy, F1, sensibilità/specificità o AUC.",
    pca: "Interpreta la varianza spiegata cumulata insieme ai carichi; guide comuni sono autovalori > 1, scree plot e interpretabilità sostanziale."
  }
};

Object.entries(mlEffectSizeRanges).forEach(([language, ranges]) => {
  if (effectSizeLabels[language]) Object.assign(effectSizeLabels[language].ranges, ranges);
});

const clusterAlgorithmGuides = {
  de: {
    heading: "Häufige Clustering-Algorithmen",
    familyLabel: "Methodenfamilie",
    family: "Clusteranalyse ist die übergeordnete Methodenfamilie. Sie beschreibt das Ziel, ähnliche Personen oder Objekte anhand mehrerer Merkmale zu gruppieren.",
    algorithms: [
      { name: "k-means-Clustering", text: "Sinnvoll, wenn die Anzahl der Cluster vorab festgelegt wird und eher kompakte Cluster um Zentren erwartet werden." },
      { name: "Hierarchisches Clustering", text: "Sinnvoll, wenn eine Baumstruktur oder ein Dendrogramm der Ähnlichkeiten interpretiert werden soll." },
      { name: "DBSCAN", text: "Sinnvoll, wenn Cluster unregelmäßige Formen haben können und Ausreißer oder Rauschen wichtig sind." },
      { name: "Gaussian-Mixture-Modelle", text: "Sinnvoll, wenn Cluster probabilistisch als überlappende Verteilungen modelliert werden sollen." }
    ],
    noteLabel: "Berichten",
    note: "Immer Skalierung/Standardisierung, Distanzmaß, Algorithmus, Anzahl der Cluster, Clustergrößen und inhaltliche Interpretation angeben."
  },
  en: {
    heading: "Common clustering algorithms",
    familyLabel: "Method family",
    family: "Cluster analysis is the broader methodological family. It describes the goal of grouping similar people or objects based on several features.",
    algorithms: [
      { name: "k-means clustering", text: "Useful when the number of clusters is set in advance and compact clusters around centroids are plausible." },
      { name: "Hierarchical clustering", text: "Useful when you want to inspect a tree structure or dendrogram of similarities." },
      { name: "DBSCAN", text: "Useful when clusters may have irregular shapes and outliers or noise are substantively important." },
      { name: "Gaussian mixture models", text: "Useful when clusters should be modelled probabilistically as possibly overlapping distributions." }
    ],
    noteLabel: "Report",
    note: "Always report scaling/standardisation, distance measure, algorithm, number of clusters, cluster sizes, and substantive interpretation."
  },
  fr: {
    heading: "Algorithmes de clustering courants",
    familyLabel: "Famille de méthodes",
    family: "L'analyse de clusters est la famille méthodologique générale. Elle décrit l'objectif de regrouper des personnes ou objets similaires à partir de plusieurs caractéristiques.",
    algorithms: [
      { name: "Clustering k-means", text: "Utile lorsque le nombre de clusters est fixé à l'avance et que des clusters compacts autour de centres sont plausibles." },
      { name: "Clustering hiérarchique", text: "Utile lorsque l'on souhaite examiner une structure arborescente ou un dendrogramme des similarités." },
      { name: "DBSCAN", text: "Utile lorsque les clusters peuvent avoir des formes irrégulières et que les valeurs aberrantes ou le bruit sont importants." },
      { name: "Modèles de mélanges gaussiens", text: "Utile lorsque les clusters doivent être modélisés de manière probabiliste comme des distributions éventuellement superposées." }
    ],
    noteLabel: "Rapporter",
    note: "Toujours rapporter la mise à l'échelle/standardisation, la mesure de distance, l'algorithme, le nombre de clusters, les tailles des clusters et l'interprétation substantielle."
  },
  es: {
    heading: "Algoritmos habituales de clusterización",
    familyLabel: "Familia de métodos",
    family: "El análisis de conglomerados es la familia metodológica general. Describe el objetivo de agrupar personas u objetos similares a partir de varias características.",
    algorithms: [
      { name: "k-medias", text: "Útil cuando el número de conglomerados se fija de antemano y son plausibles conglomerados compactos alrededor de centroides." },
      { name: "Clusterización jerárquica", text: "Útil cuando se desea inspeccionar una estructura en árbol o un dendrograma de similitudes." },
      { name: "DBSCAN", text: "Útil cuando los conglomerados pueden tener formas irregulares y los valores atípicos o el ruido son importantes." },
      { name: "Modelos de mezcla gaussiana", text: "Útil cuando los conglomerados deben modelarse probabilísticamente como distribuciones posiblemente solapadas." }
    ],
    noteLabel: "Informar",
    note: "Informe siempre la escalización/estandarización, la medida de distancia, el algoritmo, el número de conglomerados, los tamaños de los conglomerados y la interpretación sustantiva."
  },
  it: {
    heading: "Algoritmi di clustering comuni",
    familyLabel: "Famiglia di metodi",
    family: "L'analisi dei cluster è la famiglia metodologica più ampia. Descrive l'obiettivo di raggruppare persone o oggetti simili in base a più caratteristiche.",
    algorithms: [
      { name: "Clustering k-means", text: "Utile quando il numero di cluster è definito in anticipo e sono plausibili cluster compatti attorno ai centroidi." },
      { name: "Clustering gerarchico", text: "Utile quando si vuole esaminare una struttura ad albero o un dendrogramma delle somiglianze." },
      { name: "DBSCAN", text: "Utile quando i cluster possono avere forme irregolari e outlier o rumore sono importanti." },
      { name: "Modelli a mistura gaussiana", text: "Utile quando i cluster devono essere modellati probabilisticamente come distribuzioni eventualmente sovrapposte." }
    ],
    noteLabel: "Riportare",
    note: "Riportare sempre scaling/standardizzazione, misura di distanza, algoritmo, numero di cluster, dimensioni dei cluster e interpretazione sostanziale."
  }
};

const state = {
  currentNode: "goal",
  history: [],
  language: "en",
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
  clusterGuideSection: null,
  clusterGuideHeading: null,
  clusterGuideList: null,
  effectSizeSection: null,
  effectSizeHeading: null,
  effectSizeList: null,
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
  const step = isResult ? totalDecisionSteps : Math.min(state.history.length + 1, totalDecisionSteps);
  const percent = isResult ? 100 : Math.min(Math.round((step / totalDecisionSteps) * 100), 92);
  elements.stepLabel.textContent = isResult ? pack.ui.resultStep : `${pack.ui.questionStep} ${state.history.length + 1}`;
  elements.progressFill.style.width = `${percent}%`;
  elements.pathProgressLabel.textContent = isResult
    ? pack.ui.resultStep
    : `${pack.ui.questionStep} ${step} ${pack.ui.pathProgressOf} ${totalDecisionSteps}`;
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
  renderEffectSize(resultId, pack);
  renderClusterGuide(resultId, pack);
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

function ensureEffectSizeElements() {
  if (elements.effectSizeSection) return;
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const list = document.createElement("div");
  section.className = "effect-size-section apa-section";
  section.id = "effectSizeSection";
  heading.id = "effectSizeHeading";
  list.className = "apa-list";
  list.id = "effectSizeList";
  section.append(heading, list);
  elements.apaSection.before(section);
  elements.effectSizeSection = section;
  elements.effectSizeHeading = heading;
  elements.effectSizeList = list;
}

function renderEffectSize(resultId, pack) {
  ensureEffectSizeElements();
  const definition = effectSizeDefinitions[resultId];
  const labels = effectSizeLabels[pack.lang] || effectSizeLabels.en;
  elements.effectSizeSection.hidden = !definition;
  elements.effectSizeList.replaceChildren();
  if (!definition) return;

  elements.effectSizeHeading.textContent = labels.heading;
  elements.effectSizeList.replaceChildren(
    createApaReportItem(labels.measureLabel, definition.measure),
    createApaReportItem(labels.rangeLabel, labels.ranges[definition.rangeType] || ""),
    createApaReportItem(labels.noteLabel, labels.note)
  );
}

function ensureClusterGuideElements() {
  if (elements.clusterGuideSection) return;
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const list = document.createElement("div");
  section.className = "cluster-guide-section apa-section";
  section.id = "clusterGuideSection";
  heading.id = "clusterGuideHeading";
  list.className = "apa-list";
  list.id = "clusterGuideList";
  section.append(heading, list);
  elements.apaSection.before(section);
  elements.clusterGuideSection = section;
  elements.clusterGuideHeading = heading;
  elements.clusterGuideList = list;
}

function renderClusterGuide(resultId, pack) {
  ensureClusterGuideElements();
  const guide = resultId === "clusterAnalysis" ? (clusterAlgorithmGuides[pack.lang] || clusterAlgorithmGuides.en) : null;
  elements.clusterGuideSection.hidden = !guide;
  elements.clusterGuideList.replaceChildren();
  if (!guide) return;

  elements.clusterGuideHeading.textContent = guide.heading;
  elements.clusterGuideList.replaceChildren(
    createApaReportItem(guide.familyLabel, guide.family),
    ...guide.algorithms.map((algorithm) => createApaReportItem(algorithm.name, algorithm.text)),
    createApaReportItem(guide.noteLabel, guide.note)
  );
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
  const groupNodes = ["metricGroups", "ordinalGroups", "categoricalDesign", "varianceComparison", "causalModelVariables", "mixedModelOutcome", "oneSampleNormal", "twoIndependentNormal", "twoPairedNormal", "manyGroupsDesign", "anovaAssumptions", "repeatedAssumptions", "twoWayAnovaAssumptions", "twoWayRepeatedAssumptions", "normalAssociation", "rankCorrelationChoice"];
  if (nodeId === "goal" || nodeId === "researchGoal" || nodeId === "discoveryStructure") return "goal";
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
  const effectSizeText = !elements.effectSizeSection || elements.effectSizeSection.hidden
    ? ""
    : `\n\n${elements.effectSizeHeading.textContent}:\n${[...elements.effectSizeList.querySelectorAll(".apa-item")]
        .map((item) => `${item.querySelector("h3")?.textContent || ""}: ${item.querySelector("p, code")?.textContent || ""}`)
        .join("\n")}`;
  const text = `${elements.resultTitle.textContent}\n${elements.resultSummary.textContent}\n\n${pack.ui.pathLabelInCopy}:\n${path}\n\n${pack.ui.procedureLabelInCopy} (${toolName}):\n${elements.procedureOutput.textContent}${effectSizeText}${apaText}`;

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
