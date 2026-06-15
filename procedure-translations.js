window.localizedProcedurePacks = {
  de: {
    pearson: {
      jamovi: "Analysen > Regression > Korrelationsmatrix\nVerschieben Sie beide metrischen Variablen in Variablen.\nWählen Sie Pearson und aktivieren Sie ein Streudiagramm, wenn Sie eine visuelle Prüfung möchten."
    },
    spearman: {
      jamovi: "Analysen > Regression > Korrelationsmatrix\nVerschieben Sie die Variablen in Variablen.\nWählen Sie Spearman für ordinale oder monotone Zusammenhänge."
    },
    kendall: {
      jamovi: "Analysen > Regression > Korrelationsmatrix\nVerschieben Sie die Variablen in Variablen.\nWählen Sie Kendall's Tau für ordinale oder monotone Zusammenhänge, besonders bei kleinen Stichproben oder vielen Bindungen."
    },
    chiSquareAssociation: {
      jamovi: "Analysen > Häufigkeiten > Kontingenztabellen > Unabhängige Stichproben\nLegen Sie eine kategoriale Variable in Zeilen und die andere in Spalten.\nAktivieren Sie den Chi-Quadrat-Test und erwartete Häufigkeiten."
    },
    logLinearModel: {
      jamovi: "Jamovi bietet nur begrenzte direkte Unterstützung für vollständige log-lineare Modelle.\nNutzen Sie Häufigkeiten > Kontingenztabellen, um mehrwegige nominale Tabellen zu prüfen, und führen Sie das log-lineare Modell anschließend in R aus.\nVergleichen Sie Modelle mit und ohne Interaktionsterme."
    },
    pathAnalysis: {
      jamovi: "Installieren und öffnen Sie das SEMLj-Modul in jamovi.\nSpezifizieren Sie nur beobachtete Variablen und zeichnen Sie gerichtete Pfade für das angenommene Mediationsmodell.\nFordern Sie standardisierte Schätzungen, indirekte Effekte, Konfidenzintervalle und Modellfit-Indizes an."
    },
    structuralEquationModeling: {
      jamovi: "Installieren und öffnen Sie das SEMLj-Modul in jamovi.\nDefinieren Sie latente Variablen über ihre Indikatoren und fügen Sie anschließend die angenommenen Strukturpfade hinzu.\nPrüfen Sie standardisierte Ladungen, Pfadkoeffizienten, gegebenenfalls indirekte Effekte und globale Fit-Indizes."
    },
    discriminantAnalysis: {
      jamovi: "Jamovi bietet nur begrenzte direkte Unterstützung für klassische Diskriminanzanalyse in den Kernmenüs.\nNutzen Sie das Rj-Editor-Modul oder exportieren Sie die Daten nach R.\nLegen Sie die nominale Gruppenvariable als abhängige Variable und die intervallskalierten Variablen als Prädiktoren fest; prüfen Sie Diskriminanzfunktionen und Klassifikationsgenauigkeit."
    },
    oneSampleT: {
      jamovi: "Analysen > T-Tests > Einstichproben-t-Test\nVerschieben Sie die metrische Variable in Abhängige Variablen.\nGeben Sie den Testwert ein und aktivieren Sie Deskriptivstatistiken sowie Normalitätsprüfungen."
    },
    oneSampleWilcoxon: {
      jamovi: "Analysen > T-Tests > Einstichproben-t-Test\nVerschieben Sie die Variable in Abhängige Variablen.\nNutzen Sie, sofern verfügbar, die nichtparametrische Option bzw. den Wilcoxon-Vorzeichen-Rang-Test."
    },
    independentT: {
      jamovi: "Analysen > T-Tests > t-Test für unabhängige Stichproben\nLegen Sie die metrische Zielvariable in Abhängige Variablen und die Gruppenvariable in Gruppierungsvariable.\nAktivieren Sie die Welch-Korrektur, wenn die Varianzen ungleich sind."
    },
    mannWhitney: {
      jamovi: "Analysen > T-Tests > t-Test für unabhängige Stichproben\nLegen Sie die Zielvariable in Abhängige Variablen und die Gruppenvariable in Gruppierungsvariable.\nAktivieren Sie Mann-Whitney U unter den nichtparametrischen Tests."
    },
    pairedT: {
      jamovi: "Analysen > T-Tests > t-Test für verbundene Stichproben\nFügen Sie die zwei verbundenen Variablen als gepaarte Zeile hinzu.\nAktivieren Sie Deskriptivstatistiken und die Normalitätsprüfung der Differenzen."
    },
    wilcoxon: {
      jamovi: "Analysen > T-Tests > t-Test für verbundene Stichproben\nFügen Sie die zwei verbundenen Variablen als gepaarte Zeile hinzu.\nAktivieren Sie den Wilcoxon-Vorzeichen-Rang-Test unter den nichtparametrischen Tests."
    },
    anova: {
      jamovi: "Analysen > ANOVA > Einfaktorielle ANOVA\nLegen Sie die metrische Zielvariable in Abhängige Variable und den Faktor in Fester Faktor.\nAktivieren Sie Annahmenprüfungen und bei Bedarf Post-hoc-Tests."
    },
    repeatedAnova: {
      jamovi: "Analysen > ANOVA > ANOVA mit Messwiederholung\nDefinieren Sie den Messwiederholungsfaktor und seine Stufen.\nOrdnen Sie die Messwiederholungsspalten zu und aktivieren Sie Sphärizitätskorrekturen."
    },
    linearMixedModel: {
      jamovi: "Installieren und öffnen Sie das GAMLj-Modul in jamovi.\nWählen Sie Mixed Models > Linear Model, legen Sie die metrische Zielvariable als abhängige Variable fest und fügen Sie feste Prädiktoren sowie Person, Team oder Klasse als zufällige Effekte hinzu.\nBeginnen Sie mit zufälligen Interzepten und ergänzen Sie zufällige Steigungen nur bei theoretischer Begründung."
    },
    generalizedLinearMixedModel: {
      jamovi: "Installieren und öffnen Sie das GAMLj-Modul in jamovi.\nWählen Sie Mixed Models > Generalized Linear Model, bestimmen Sie Verteilung und Linkfunktion und fügen Sie feste Prädiktoren sowie zufällige Effekte hinzu.\nFür dichotome Zielvariablen nutzen Sie eine Binomialverteilung mit Logit-Link."
    },
    ordinalMixedModel: {
      jamovi: "Jamovi bietet nur begrenzte direkte Unterstützung für ordinale Mixed Models in den Kernmenüs.\nNutzen Sie das Rj-Editor-Modul oder exportieren Sie die Daten nach R.\nModellieren Sie die ordinale Zielvariable mit festen Prädiktoren und zufälligen Effekten für Person, Team, Klasse oder einen anderen Cluster."
    },
    kruskalWallis: {
      jamovi: "Analysen > ANOVA > Einfaktorielle ANOVA\nLegen Sie die ordinale oder metrische Zielvariable in Abhängige Variable und die Gruppenvariable in Fester Faktor.\nAktivieren Sie Kruskal-Wallis unter den nichtparametrischen Tests."
    },
    friedman: {
      jamovi: "Analysen > ANOVA > ANOVA mit Messwiederholung\nDefinieren Sie den Messwiederholungsfaktor und ordnen Sie die Messwiederholungsspalten zu.\nAktivieren Sie Friedman unter den nichtparametrischen Tests."
    },
    fisher: {
      jamovi: "Analysen > Häufigkeiten > Kontingenztabellen > Unabhängige Stichproben\nLegen Sie die Variablen in Zeilen und Spalten.\nAktivieren Sie den exakten Fisher-Test für eine 2x2-Tabelle."
    },
    mcnemar: {
      jamovi: "Analysen > Häufigkeiten > Kontingenztabellen > Verbundene Stichproben\nFügen Sie die zwei verbundenen dichotomen Variablen hinzu.\nAktivieren Sie den McNemar-Test."
    },
    binomialTest: {
      jamovi: "Analysen > Häufigkeiten > Einstichproben-Anteiltests\nWählen Sie die zweistufige kategoriale Variable aus.\nGeben Sie den erwarteten Anteil für die Zielkategorie ein und fordern Sie exakte/binomiale Konfidenzintervalle an."
    },
    chiSquareGoodness: {
      jamovi: "Analysen > Häufigkeiten > Einstichproben-Anteiltests\nWählen Sie die kategoriale Variable aus.\nGeben Sie erwartete Anteile ein oder vergleichen Sie gegen gleiche Anteile."
    },
    linearRegression: {
      jamovi: "Analysen > Regression > Lineare Regression\nLegen Sie die metrische Zielvariable in Abhängige Variable.\nFügen Sie Prädiktoren zu Kovariaten oder Faktoren hinzu und prüfen Sie die Residualdiagnostik.\nInterpretieren Sie Koeffizienten als Vorhersage/Zusammenhang, sofern das Studiendesign keine kausale Inferenz erlaubt."
    },
    logisticRegression: {
      jamovi: "Analysen > Regression > Logistische Regression > 2 Ausprägungen\nLegen Sie die dichotome Zielvariable in Abhängige Variable.\nFügen Sie Prädiktoren zu Kovariaten oder Faktoren hinzu und prüfen Sie die Odds Ratios."
    },
    multinomialRegression: {
      jamovi: "Analysen > Regression > Logistische Regression > N Ausprägungen\nLegen Sie die mehrkategoriale Zielvariable in Abhängige Variable.\nFügen Sie Prädiktoren zu Kovariaten oder Faktoren hinzu und wählen Sie die Referenzkategorie."
    },
    factorAnalysis: {
      jamovi: "Analysen > Faktoren > Explorative Faktorenanalyse\nVerschieben Sie die zusammengehörigen Variablen in Variablen.\nWählen Sie Extraktionsmethode, Rotation und Faktorenzahl und prüfen Sie Ladungen sowie Modellpassung."
    },
    clusterAnalysis: {
      jamovi: "Installieren Sie das SnowCluster-Modul aus der jamovi-Bibliothek und öffnen Sie es über das Analysen-Menü.\nVerschieben Sie die Variablen, die Personen oder Objekte beschreiben, in das Feld für Clustering-Variablen.\nStandardisieren Sie die Variablen bei Bedarf, wählen Sie Clustering-Methode/Distanzoption, legen Sie die Clusterzahl fest oder vergleichen Sie Lösungen und prüfen Sie die Clusterqualität."
    },
    multidimensionalScaling: {
      jamovi: "Jamovi bietet nur begrenzte direkte Unterstützung für multidimensionale Skalierung.\nNutzen Sie eine Distanz- oder Unähnlichkeitsmatrix, wenn ein geeignetes Modul installiert ist, oder exportieren Sie die Daten nach R.\nPrüfen Sie Stress, Konfigurationsplot und Interpretierbarkeit der Dimensionen."
    },
    chiSquareVariance: {
      jamovi: "Jamovi bietet nur begrenzte direkte Unterstützung für den exakten Chi-Quadrat-Test einer Varianz.\nNutzen Sie Exploration > Deskriptivstatistiken, um n und die Stichprobenvarianz zu erhalten, und führen Sie den exakten Test in R aus.\nBerichten Sie die angenommene Populationsvarianz und die Chi-Quadrat-Statistik."
    },
    varianceFTest: {
      jamovi: "Jamovi kann Gruppenvarianzen unter Exploration > Deskriptivstatistiken anzeigen.\nFür den klassischen F-Test zweier Varianzen exportieren Sie die Daten oder nutzen Sie ein R-Modul und führen var.test() aus.\nPrüfen Sie Levene als robustere Alternative, wenn Normalität fraglich ist."
    }
  },
  fr: {
    pearson: {
      jamovi: "Analyses > Régression > Matrice de corrélation\nPlacez les deux variables métriques dans Variables.\nSélectionnez Pearson et activez un nuage de points si vous voulez une vérification visuelle."
    },
    spearman: {
      jamovi: "Analyses > Régression > Matrice de corrélation\nPlacez les variables dans Variables.\nSélectionnez Spearman pour des variables ordinales ou des relations monotones."
    },
    kendall: {
      jamovi: "Analyses > Régression > Matrice de corrélation\nPlacez les variables dans Variables.\nSélectionnez le tau de Kendall pour des variables ordinales ou des relations monotones, surtout avec de petits échantillons ou de nombreux ex aequo."
    },
    chiSquareAssociation: {
      jamovi: "Analyses > Fréquences > Tableaux de contingence > Échantillons indépendants\nPlacez une variable catégorielle dans Lignes et l'autre dans Colonnes.\nActivez le test du khi carré et les effectifs attendus."
    },
    logLinearModel: {
      jamovi: "Jamovi offre une prise en charge directe limitée des modèles log-linéaires complets.\nUtilisez Fréquences > Tableaux de contingence pour inspecter les tableaux nominaux à plusieurs entrées, puis exécutez le modèle log-linéaire dans R.\nComparez les modèles avec et sans termes d'interaction."
    },
    pathAnalysis: {
      jamovi: "Installez et ouvrez le module SEMLj dans jamovi.\nSpécifiez uniquement des variables observées et tracez les chemins dirigés du modèle de médiation hypothétique.\nDemandez les estimations standardisées, les effets indirects, les intervalles de confiance et les indices d'ajustement du modèle."
    },
    structuralEquationModeling: {
      jamovi: "Installez et ouvrez le module SEMLj dans jamovi.\nDéfinissez les variables latentes avec leurs indicateurs, puis ajoutez les chemins structurels hypothétiques.\nExaminez les charges standardisées, les coefficients de chemin, les effets indirects si nécessaire et les indices d'ajustement globaux."
    },
    discriminantAnalysis: {
      jamovi: "jamovi offre une prise en charge directe limitée de l'analyse discriminante classique dans les menus de base.\nUtilisez le module Rj Editor ou exportez les données vers R.\nDéfinissez la variable de groupe nominale comme variable dépendante et les variables à échelle d'intervalle comme prédicteurs ; examinez les fonctions discriminantes et l'exactitude de classification."
    },
    oneSampleT: {
      jamovi: "Analyses > Tests t > Test t à un échantillon\nPlacez la variable métrique dans Variables dépendantes.\nSaisissez la valeur de test et activez les descriptifs ainsi que les contrôles de normalité."
    },
    oneSampleWilcoxon: {
      jamovi: "Analyses > Tests t > Test t à un échantillon\nPlacez la variable dans Variables dépendantes.\nUtilisez l'option non paramétrique ou le test des rangs signés de Wilcoxon lorsque disponible."
    },
    independentT: {
      jamovi: "Analyses > Tests t > Test t pour échantillons indépendants\nPlacez la variable cible métrique dans Variables dépendantes et la variable de groupe dans Variable de groupement.\nActivez la correction de Welch si les variances sont inégales."
    },
    mannWhitney: {
      jamovi: "Analyses > Tests t > Test t pour échantillons indépendants\nPlacez la variable cible dans Variables dépendantes et la variable de groupe dans Variable de groupement.\nActivez Mann-Whitney U dans les tests non paramétriques."
    },
    pairedT: {
      jamovi: "Analyses > Tests t > Test t pour échantillons appariés\nAjoutez les deux variables appariées sur une même ligne appariée.\nActivez les descriptifs et le contrôle de normalité des différences."
    },
    wilcoxon: {
      jamovi: "Analyses > Tests t > Test t pour échantillons appariés\nAjoutez les deux variables appariées sur une même ligne appariée.\nActivez le test des rangs signés de Wilcoxon dans les tests non paramétriques."
    },
    anova: {
      jamovi: "Analyses > ANOVA > ANOVA à un facteur\nPlacez la variable cible métrique dans Variable dépendante et le facteur dans Facteur fixe.\nActivez les vérifications des conditions et les tests post-hoc si nécessaire."
    },
    repeatedAnova: {
      jamovi: "Analyses > ANOVA > ANOVA à mesures répétées\nDéfinissez le facteur à mesures répétées et ses niveaux.\nAssignez les colonnes de mesures répétées et activez les corrections de sphéricité."
    },
    linearMixedModel: {
      jamovi: "Installez et ouvrez le module GAMLj dans jamovi.\nChoisissez Mixed Models > Linear Model, placez la variable cible métrique comme variable dépendante et ajoutez les prédicteurs fixes ainsi que personne, équipe ou classe comme effets aléatoires.\nCommencez par des intercepts aléatoires et ajoutez des pentes aléatoires seulement si elles sont justifiées théoriquement."
    },
    generalizedLinearMixedModel: {
      jamovi: "Installez et ouvrez le module GAMLj dans jamovi.\nChoisissez Mixed Models > Generalized Linear Model, sélectionnez la distribution et la fonction de lien, puis ajoutez les prédicteurs fixes et les effets aléatoires.\nPour une variable dichotomique, utilisez une distribution binomiale avec lien logit."
    },
    ordinalMixedModel: {
      jamovi: "jamovi offre une prise en charge directe limitée des modèles mixtes ordinaux dans les menus de base.\nUtilisez le module Rj Editor ou exportez les données vers R.\nModélisez la variable ordinale avec des prédicteurs fixes et des effets aléatoires pour personne, équipe, classe ou autre cluster."
    },
    kruskalWallis: {
      jamovi: "Analyses > ANOVA > ANOVA à un facteur\nPlacez la variable cible ordinale ou métrique dans Variable dépendante et la variable de groupe dans Facteur fixe.\nActivez Kruskal-Wallis dans les tests non paramétriques."
    },
    friedman: {
      jamovi: "Analyses > ANOVA > ANOVA à mesures répétées\nDéfinissez le facteur à mesures répétées et assignez les colonnes de mesures répétées.\nActivez Friedman dans les tests non paramétriques."
    },
    fisher: {
      jamovi: "Analyses > Fréquences > Tableaux de contingence > Échantillons indépendants\nPlacez les variables dans Lignes et Colonnes.\nActivez le test exact de Fisher pour un tableau 2x2."
    },
    mcnemar: {
      jamovi: "Analyses > Fréquences > Tableaux de contingence > Échantillons appariés\nAjoutez les deux variables dichotomiques appariées.\nActivez le test de McNemar."
    },
    binomialTest: {
      jamovi: "Analyses > Fréquences > Tests de proportion à un échantillon\nSélectionnez la variable catégorielle à deux modalités.\nSaisissez la proportion attendue pour la catégorie cible et demandez les intervalles de confiance exacts/binomiaux."
    },
    chiSquareGoodness: {
      jamovi: "Analyses > Fréquences > Tests de proportion à un échantillon\nSélectionnez la variable catégorielle.\nSaisissez les proportions attendues ou comparez à des proportions égales."
    },
    linearRegression: {
      jamovi: "Analyses > Régression > Régression linéaire\nPlacez la variable cible métrique dans Variable dépendante.\nAjoutez les prédicteurs dans Covariables ou Facteurs et examinez le diagnostic des résidus.\nInterprétez les coefficients comme prédiction/association sauf si le plan d'étude permet une inférence causale."
    },
    logisticRegression: {
      jamovi: "Analyses > Régression > Régression logistique > 2 modalités\nPlacez la variable cible dichotomique dans Variable dépendante.\nAjoutez les prédicteurs dans Covariables ou Facteurs et examinez les odds ratios."
    },
    multinomialRegression: {
      jamovi: "Analyses > Régression > Régression logistique > N modalités\nPlacez la variable cible multicatégorielle dans Variable dépendante.\nAjoutez les prédicteurs dans Covariables ou Facteurs et choisissez la catégorie de référence."
    },
    factorAnalysis: {
      jamovi: "Analyses > Facteurs > Analyse factorielle exploratoire\nPlacez les variables liées dans Variables.\nChoisissez la méthode d'extraction, la rotation et le nombre de facteurs, puis examinez les charges et l'ajustement du modèle."
    },
    clusterAnalysis: {
      jamovi: "Installez le module SnowCluster depuis la bibliothèque jamovi et ouvrez-le dans le menu Analyses.\nPlacez les variables décrivant les personnes ou objets dans le champ des variables de clustering.\nStandardisez les variables si nécessaire, choisissez la méthode de clustering/l'option de distance, fixez ou comparez le nombre de clusters et examinez la qualité de la solution."
    },
    multidimensionalScaling: {
      jamovi: "Jamovi offre une prise en charge directe limitée du positionnement multidimensionnel.\nUtilisez une matrice de distances ou de dissimilarités si un module adapté est installé, ou exportez les données vers R.\nExaminez le stress, le graphique de configuration et l'interprétabilité des dimensions."
    },
    chiSquareVariance: {
      jamovi: "Jamovi offre une prise en charge directe limitée du test exact du khi carré pour une variance.\nUtilisez Exploration > Descriptifs pour obtenir n et la variance d'échantillon, puis exécutez le test exact dans R.\nRapportez la variance de population hypothétique et la statistique du khi carré."
    },
    varianceFTest: {
      jamovi: "Jamovi peut afficher les variances par groupe dans Exploration > Descriptifs.\nPour le test F classique de deux variances, exportez les données ou utilisez un module R et exécutez var.test().\nEnvisagez le test de Levene comme alternative plus robuste si la normalité est douteuse."
    }
  },
  es: {
    pearson: {
      jamovi: "Análisis > Regresión > Matriz de correlaciones\nMueva ambas variables métricas a Variables.\nSeleccione Pearson y active un diagrama de dispersión si desea una comprobación visual."
    },
    spearman: {
      jamovi: "Análisis > Regresión > Matriz de correlaciones\nMueva las variables a Variables.\nSeleccione Spearman para variables ordinales o relaciones monótonas."
    },
    kendall: {
      jamovi: "Análisis > Regresión > Matriz de correlaciones\nMueva las variables a Variables.\nSeleccione tau de Kendall para variables ordinales o relaciones monótonas, especialmente con muestras pequeñas o muchos empates."
    },
    chiSquareAssociation: {
      jamovi: "Análisis > Frecuencias > Tablas de contingencia > Muestras independientes\nColoque una variable categórica en Filas y la otra en Columnas.\nActive la prueba chi-cuadrado y las frecuencias esperadas."
    },
    logLinearModel: {
      jamovi: "Jamovi tiene soporte directo limitado para modelos log-lineales completos.\nUse Frecuencias > Tablas de contingencia para inspeccionar tablas nominales multidimensionales, y después ejecute el modelo log-lineal en R.\nCompare modelos con y sin términos de interacción."
    },
    pathAnalysis: {
      jamovi: "Instale y abra el módulo SEMLj en jamovi.\nEspecifique solo variables observadas y dibuje rutas dirigidas para el modelo de mediación hipotetizado.\nSolicite estimaciones estandarizadas, efectos indirectos, intervalos de confianza e índices de ajuste del modelo."
    },
    structuralEquationModeling: {
      jamovi: "Instale y abra el módulo SEMLj en jamovi.\nDefina variables latentes con sus indicadores y añada después las rutas estructurales hipotetizadas.\nRevise cargas estandarizadas, coeficientes de ruta, efectos indirectos si corresponde e índices globales de ajuste."
    },
    discriminantAnalysis: {
      jamovi: "jamovi tiene soporte directo limitado para el análisis discriminante clásico en los menús principales.\nUse el módulo Rj Editor o exporte los datos a R.\nDefina la variable nominal de grupo como variable dependiente y las variables de escala de intervalo como predictores; revise funciones discriminantes y exactitud de clasificación."
    },
    oneSampleT: {
      jamovi: "Análisis > Pruebas t > Prueba t para una muestra\nMueva la variable métrica a Variables dependientes.\nIntroduzca el valor de prueba y active descriptivos y comprobaciones de normalidad."
    },
    oneSampleWilcoxon: {
      jamovi: "Análisis > Pruebas t > Prueba t para una muestra\nMueva la variable a Variables dependientes.\nUse la opción no paramétrica o Wilcoxon de rangos con signo cuando esté disponible."
    },
    independentT: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras independientes\nColoque la variable objetivo métrica en Variables dependientes y la variable de grupo en Variable de agrupación.\nActive la corrección de Welch si las varianzas son desiguales."
    },
    mannWhitney: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras independientes\nColoque la variable objetivo en Variables dependientes y la variable de grupo en Variable de agrupación.\nActive Mann-Whitney U en las pruebas no paramétricas."
    },
    pairedT: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras relacionadas\nAñada las dos variables relacionadas como una fila emparejada.\nActive descriptivos y la comprobación de normalidad de las diferencias."
    },
    wilcoxon: {
      jamovi: "Análisis > Pruebas t > Prueba t para muestras relacionadas\nAñada las dos variables relacionadas como una fila emparejada.\nActive Wilcoxon de rangos con signo en las pruebas no paramétricas."
    },
    anova: {
      jamovi: "Análisis > ANOVA > ANOVA de un factor\nColoque la variable objetivo métrica en Variable dependiente y el factor en Factor fijo.\nActive las comprobaciones de supuestos y pruebas post-hoc si es necesario."
    },
    repeatedAnova: {
      jamovi: "Análisis > ANOVA > ANOVA de medidas repetidas\nDefina el factor de medidas repetidas y sus niveles.\nAsigne las columnas de medición repetida y active correcciones de esfericidad."
    },
    linearMixedModel: {
      jamovi: "Instale y abra el módulo GAMLj en jamovi.\nElija Mixed Models > Linear Model, coloque la variable objetivo métrica como variable dependiente y añada predictores fijos y persona, equipo o clase como efectos aleatorios.\nEmpiece con interceptos aleatorios y añada pendientes aleatorias solo si están justificadas teóricamente."
    },
    generalizedLinearMixedModel: {
      jamovi: "Instale y abra el módulo GAMLj en jamovi.\nElija Mixed Models > Generalized Linear Model, seleccione la distribución y función de enlace, y añada predictores fijos y efectos aleatorios.\nPara variables dicotómicas, use distribución binomial con enlace logit."
    },
    ordinalMixedModel: {
      jamovi: "jamovi tiene soporte directo limitado para modelos mixtos ordinales en los menús principales.\nUse el módulo Rj Editor o exporte los datos a R.\nModele la variable ordinal con predictores fijos y efectos aleatorios para persona, equipo, clase u otro cluster."
    },
    kruskalWallis: {
      jamovi: "Análisis > ANOVA > ANOVA de un factor\nColoque la variable objetivo ordinal o métrica en Variable dependiente y la variable de grupo en Factor fijo.\nActive Kruskal-Wallis en las pruebas no paramétricas."
    },
    friedman: {
      jamovi: "Análisis > ANOVA > ANOVA de medidas repetidas\nDefina el factor de medidas repetidas y asigne las columnas de medición repetida.\nActive Friedman en las pruebas no paramétricas."
    },
    fisher: {
      jamovi: "Análisis > Frecuencias > Tablas de contingencia > Muestras independientes\nColoque las variables en Filas y Columnas.\nActive la prueba exacta de Fisher para una tabla 2x2."
    },
    mcnemar: {
      jamovi: "Análisis > Frecuencias > Tablas de contingencia > Muestras relacionadas\nAñada las dos variables dicotómicas relacionadas.\nActive la prueba de McNemar."
    },
    binomialTest: {
      jamovi: "Análisis > Frecuencias > Pruebas de proporción para una muestra\nSeleccione la variable categórica de dos niveles.\nIntroduzca la proporción esperada para la categoría focal y solicite intervalos de confianza exactos/binomiales."
    },
    chiSquareGoodness: {
      jamovi: "Análisis > Frecuencias > Pruebas de proporción para una muestra\nSeleccione la variable categórica.\nIntroduzca proporciones esperadas o compare con proporciones iguales."
    },
    linearRegression: {
      jamovi: "Análisis > Regresión > Regresión lineal\nColoque la variable objetivo métrica en Variable dependiente.\nAñada predictores a Covariables o Factores e inspeccione los diagnósticos de residuos.\nInterprete los coeficientes como predicción/asociación salvo que el diseño del estudio permita inferencia causal."
    },
    logisticRegression: {
      jamovi: "Análisis > Regresión > Regresión logística > 2 resultados\nColoque la variable objetivo dicotómica en Variable dependiente.\nAñada predictores a Covariables o Factores e inspeccione los odds ratios."
    },
    multinomialRegression: {
      jamovi: "Análisis > Regresión > Regresión logística > N resultados\nColoque la variable objetivo multicategórica en Variable dependiente.\nAñada predictores a Covariables o Factores y elija la categoría de referencia."
    },
    factorAnalysis: {
      jamovi: "Análisis > Factores > Análisis factorial exploratorio\nMueva las variables relacionadas a Variables.\nElija el método de extracción, la rotación y el número de factores, e inspeccione cargas y ajuste del modelo."
    },
    clusterAnalysis: {
      jamovi: "Instale el módulo SnowCluster desde la biblioteca de jamovi y ábralo desde el menú Análisis.\nMueva las variables que describen personas u objetos al campo de variables de clustering.\nEstandarice las variables si es necesario, elija el método de clustering/opción de distancia, fije o compare el número de conglomerados y revise la calidad de la solución."
    },
    multidimensionalScaling: {
      jamovi: "Jamovi tiene soporte directo limitado para el escalamiento multidimensional.\nUse una matriz de distancias o disimilitudes si hay un módulo adecuado instalado, o exporte los datos a R.\nInspeccione el estrés, el gráfico de configuración y la interpretabilidad de las dimensiones."
    },
    chiSquareVariance: {
      jamovi: "Jamovi tiene soporte directo limitado para la prueba chi-cuadrado exacta de una varianza.\nUse Exploración > Descriptivos para obtener n y la varianza muestral, y después ejecute la prueba exacta en R.\nReporte la varianza poblacional hipotética y el estadístico chi-cuadrado."
    },
    varianceFTest: {
      jamovi: "Jamovi puede mostrar varianzas por grupo en Exploración > Descriptivos.\nPara la prueba F clásica de dos varianzas, exporte los datos o use un módulo de R y ejecute var.test().\nConsidere la prueba de Levene como alternativa más robusta cuando la normalidad sea dudosa."
    }
  }
};

const mlProcedureGuides = {
  de: {
    decisionTreeRegression: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Entscheidungsbaum-Regression.\nNutzen Sie ein Machine-Learning-Modul, falls installiert, oder exportieren Sie die Daten nach R.\nValidieren Sie mit Train/Test-Split oder Kreuzvalidierung und prüfen Sie Pruning bzw. Baumtiefe.",
    randomForestRegression: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Random Forests.\nNutzen Sie ein geeignetes Machine-Learning-Modul, falls verfügbar, oder exportieren Sie die Daten nach R.\nBerichten Sie RMSE/R2 auf Validierungsdaten und variable importance.",
    knnRegression: "Jamovi bietet nur begrenzte direkte Unterstützung für k-Nearest-Neighbors-Regression.\nStandardisieren Sie die Prädiktoren und nutzen Sie ein Machine-Learning-Modul oder R.\nWählen Sie k per Kreuzvalidierung und berichten Sie Vorhersagefehler auf Validierungsdaten.",
    decisionTreeClassifier: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Entscheidungsbaum-Klassifikation.\nNutzen Sie ein Machine-Learning-Modul, falls installiert, oder exportieren Sie die Daten nach R.\nValidieren Sie mit Train/Test-Split oder Kreuzvalidierung und prüfen Sie die Konfusionsmatrix.",
    randomForestClassifier: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Random-Forest-Klassifikation.\nNutzen Sie ein geeignetes Machine-Learning-Modul oder R.\nBerichten Sie Validierungsgenauigkeit, bei unbalancierten Klassen balanced accuracy/F1 und variable importance.",
    knnClassifier: "Jamovi bietet nur begrenzte direkte Unterstützung für k-Nearest-Neighbors-Klassifikation.\nStandardisieren Sie die Prädiktoren und nutzen Sie ein Machine-Learning-Modul oder R.\nWählen Sie k per Kreuzvalidierung und berichten Sie eine Konfusionsmatrix.",
    naiveBayes: "Jamovi bietet in den Kernmenüs nur begrenzte Unterstützung für Naive Bayes.\nNutzen Sie ein Machine-Learning-Modul, falls installiert, oder exportieren Sie die Daten nach R.\nPrüfen Sie vorhergesagte Wahrscheinlichkeiten und die Konfusionsmatrix auf Validierungsdaten.",
    principalComponentAnalysis: "Analysen > Faktoren > Hauptkomponentenanalyse\nVerschieben Sie die metrischen Variablen in Variablen.\nWählen Sie die Anzahl der Komponenten und prüfen Sie Ladungen, Scree-Plot, erklärte Varianz und gegebenenfalls Komponentenscores."
  },
  fr: {
    decisionTreeRegression: "Jamovi offre un support intégré limité pour la régression par arbre de décision.\nUtilisez un module d'apprentissage automatique si disponible, ou exportez les données vers R.\nValidez avec un découpage entraînement/test ou une validation croisée et vérifiez l'élagage ou la profondeur.",
    randomForestRegression: "Jamovi offre un support intégré limité pour les forêts aléatoires.\nUtilisez un module adapté si disponible, ou exportez les données vers R.\nRapportez RMSE/R2 hors échantillon et l'importance des variables.",
    knnRegression: "Jamovi offre un support direct limité pour la régression k plus proches voisins.\nStandardisez les prédicteurs et utilisez un module d'apprentissage automatique ou R.\nChoisissez k par validation croisée et rapportez l'erreur de prédiction.",
    decisionTreeClassifier: "Jamovi offre un support intégré limité pour la classification par arbre de décision.\nUtilisez un module d'apprentissage automatique si disponible, ou exportez les données vers R.\nValidez avec un découpage entraînement/test ou une validation croisée et inspectez la matrice de confusion.",
    randomForestClassifier: "Jamovi offre un support intégré limité pour la classification par forêt aléatoire.\nUtilisez un module adapté ou R.\nRapportez l'exactitude de validation, l'exactitude équilibrée/F1 si les classes sont déséquilibrées, et l'importance des variables.",
    knnClassifier: "Jamovi offre un support direct limité pour la classification k plus proches voisins.\nStandardisez les prédicteurs et utilisez un module d'apprentissage automatique ou R.\nChoisissez k par validation croisée et rapportez une matrice de confusion.",
    naiveBayes: "Jamovi offre un support intégré limité pour naïf bayésien.\nUtilisez un module d'apprentissage automatique si disponible, ou exportez les données vers R.\nInspectez les probabilités prédites et la matrice de confusion sur données de validation.",
    principalComponentAnalysis: "Analyses > Facteurs > Analyse en composantes principales\nDéplacez les variables métriques dans Variables.\nChoisissez le nombre de composantes et inspectez les charges, le scree plot, la variance expliquée et les scores de composantes si nécessaire."
  },
  es: {
    decisionTreeRegression: "Jamovi ofrece soporte integrado limitado para regresión con árbol de decisión.\nUse un módulo de machine learning si está instalado, o exporte los datos a R.\nValide con división entrenamiento/prueba o validación cruzada y revise la poda o profundidad.",
    randomForestRegression: "Jamovi ofrece soporte integrado limitado para bosques aleatorios.\nUse un módulo adecuado si está disponible, o exporte los datos a R.\nReporte RMSE/R2 fuera de muestra e importancia de variables.",
    knnRegression: "Jamovi ofrece soporte directo limitado para regresión k vecinos más cercanos.\nEstandarice los predictores y use un módulo de machine learning o R.\nElija k mediante validación cruzada y reporte error predictivo.",
    decisionTreeClassifier: "Jamovi ofrece soporte integrado limitado para clasificación con árbol de decisión.\nUse un módulo de machine learning si está instalado, o exporte los datos a R.\nValide con división entrenamiento/prueba o validación cruzada y revise la matriz de confusión.",
    randomForestClassifier: "Jamovi ofrece soporte integrado limitado para clasificación con bosque aleatorio.\nUse un módulo adecuado o R.\nReporte exactitud de validación, exactitud balanceada/F1 si las clases están desbalanceadas, e importancia de variables.",
    knnClassifier: "Jamovi ofrece soporte directo limitado para clasificación k vecinos más cercanos.\nEstandarice los predictores y use un módulo de machine learning o R.\nElija k mediante validación cruzada y reporte una matriz de confusión.",
    naiveBayes: "Jamovi ofrece soporte integrado limitado para naive Bayes.\nUse un módulo de machine learning si está instalado, o exporte los datos a R.\nRevise probabilidades predichas y matriz de confusión en datos de validación.",
    principalComponentAnalysis: "Análisis > Factores > Análisis de componentes principales\nMueva las variables métricas a Variables.\nElija el número de componentes y revise cargas, scree plot, varianza explicada y puntuaciones de componentes si procede."
  },
  it: {
    decisionTreeRegression: "Jamovi offre supporto integrato limitato per la regressione con albero decisionale.\nUsa un modulo di machine learning se installato, oppure esporta i dati in R.\nValida con split training/test o validazione incrociata e controlla potatura o profondità.",
    randomForestRegression: "Jamovi offre supporto integrato limitato per random forest.\nUsa un modulo adatto se disponibile, oppure esporta i dati in R.\nRiporta RMSE/R2 fuori campione e importanza delle variabili.",
    knnRegression: "Jamovi offre supporto diretto limitato per la regressione k-nearest neighbors.\nStandardizza i predittori e usa un modulo di machine learning o R.\nScegli k con validazione incrociata e riporta errore predittivo.",
    decisionTreeClassifier: "Jamovi offre supporto integrato limitato per la classificazione con albero decisionale.\nUsa un modulo di machine learning se installato, oppure esporta i dati in R.\nValida con split training/test o validazione incrociata e controlla la matrice di confusione.",
    randomForestClassifier: "Jamovi offre supporto integrato limitato per la classificazione random forest.\nUsa un modulo adatto o R.\nRiporta accuratezza di validazione, balanced accuracy/F1 se le classi sono sbilanciate, e importanza delle variabili.",
    knnClassifier: "Jamovi offre supporto diretto limitato per la classificazione k-nearest neighbors.\nStandardizza i predittori e usa un modulo di machine learning o R.\nScegli k con validazione incrociata e riporta una matrice di confusione.",
    naiveBayes: "Jamovi offre supporto integrato limitato per naive Bayes.\nUsa un modulo di machine learning se installato, oppure esporta i dati in R.\nControlla probabilità predette e matrice di confusione su dati di validazione.",
    principalComponentAnalysis: "Analisi > Fattori > Analisi delle componenti principali\nSposta le variabili metriche in Variabili.\nScegli il numero di componenti e controlla carichi, scree plot, varianza spiegata ed eventualmente punteggi delle componenti."
  }
};

Object.entries(mlProcedureGuides).forEach(([language, entries]) => {
  if (!window.localizedProcedurePacks[language]) window.localizedProcedurePacks[language] = {};
  Object.entries(entries).forEach(([resultId, jamovi]) => {
    window.localizedProcedurePacks[language][resultId] = { jamovi };
  });
});

window.localizedProcedurePacks.it = {
  pearson: {
    jamovi: "Analisi > Regressione > Matrice di correlazione\nSposta entrambe le variabili metriche in Variabili.\nSeleziona Pearson e attiva un diagramma di dispersione se vuoi un controllo visivo."
  },
  spearman: {
    jamovi: "Analisi > Regressione > Matrice di correlazione\nSposta le variabili in Variabili.\nSeleziona Spearman per variabili ordinali o relazioni monotone."
  },
  kendall: {
    jamovi: "Analisi > Regressione > Matrice di correlazione\nSposta le variabili in Variabili.\nSeleziona il tau di Kendall per variabili ordinali o relazioni monotone, specialmente con campioni piccoli o molti pareggi."
  },
  chiSquareAssociation: {
    jamovi: "Analisi > Frequenze > Tabelle di contingenza > Campioni indipendenti\nInserisci una variabile categoriale in Righe e l'altra in Colonne.\nAttiva il test chi-quadrato e le frequenze attese."
  },
  logLinearModel: {
    jamovi: "Jamovi offre un supporto diretto limitato per modelli log-lineari completi.\nUsa Frequenze > Tabelle di contingenza per ispezionare tabelle nominali multidimensionali, poi esegui il modello log-lineare in R.\nConfronta modelli con e senza termini di interazione."
  },
  pathAnalysis: {
    jamovi: "Installa e apri il modulo SEMLj in jamovi.\nSpecifica solo variabili osservate e disegna i percorsi diretti per il modello di mediazione ipotizzato.\nRichiedi stime standardizzate, effetti indiretti, intervalli di confidenza e indici di adattamento del modello."
  },
  structuralEquationModeling: {
    jamovi: "Installa e apri il modulo SEMLj in jamovi.\nDefinisci le variabili latenti con i rispettivi indicatori, poi aggiungi i percorsi strutturali ipotizzati.\nControlla carichi standardizzati, coefficienti di percorso, eventuali effetti indiretti e indici globali di adattamento."
  },
  discriminantAnalysis: {
    jamovi: "jamovi offre un supporto diretto limitato per l'analisi discriminante classica nei menu principali.\nUsa il modulo Rj Editor o esporta i dati in R.\nImposta la variabile nominale di gruppo come variabile dipendente e le variabili a scala di intervallo come predittori; controlla funzioni discriminanti e accuratezza di classificazione."
  },
  oneSampleT: {
    jamovi: "Analisi > Test t > Test t a un campione\nSposta la variabile metrica in Variabili dipendenti.\nInserisci il valore di test e attiva descrittive e controlli di normalità."
  },
  oneSampleWilcoxon: {
    jamovi: "Analisi > Test t > Test t a un campione\nSposta la variabile in Variabili dipendenti.\nUsa l'opzione non parametrica o il test di Wilcoxon per ranghi con segno quando disponibile."
  },
  independentT: {
    jamovi: "Analisi > Test t > Test t per campioni indipendenti\nInserisci l'esito metrico in Variabili dipendenti e la variabile di gruppo in Variabile di raggruppamento.\nAttiva la correzione di Welch se le varianze sono disuguali."
  },
  mannWhitney: {
    jamovi: "Analisi > Test t > Test t per campioni indipendenti\nInserisci l'esito in Variabili dipendenti e la variabile di gruppo in Variabile di raggruppamento.\nAttiva Mann-Whitney U nei test non parametrici."
  },
  pairedT: {
    jamovi: "Analisi > Test t > Test t per campioni appaiati\nAggiungi le due variabili appaiate nella stessa riga appaiata.\nAttiva descrittive e controllo di normalità delle differenze."
  },
  wilcoxon: {
    jamovi: "Analisi > Test t > Test t per campioni appaiati\nAggiungi le due variabili appaiate nella stessa riga appaiata.\nAttiva il test di Wilcoxon per ranghi con segno nei test non parametrici."
  },
  anova: {
    jamovi: "Analisi > ANOVA > ANOVA a una via\nInserisci l'esito metrico in Variabile dipendente e il fattore in Fattore fisso.\nAttiva i controlli delle assunzioni e i test post-hoc se necessari."
  },
  repeatedAnova: {
    jamovi: "Analisi > ANOVA > ANOVA a misure ripetute\nDefinisci il fattore a misure ripetute e i suoi livelli.\nAssegna le colonne delle misure ripetute e attiva le correzioni di sfericità."
  },
  linearMixedModel: {
    jamovi: "Installa e apri il modulo GAMLj in jamovi.\nScegli Mixed Models > Linear Model, inserisci l'esito metrico come variabile dipendente e aggiungi predittori fissi e persona, squadra o classe come effetti casuali.\nInizia con intercette casuali e aggiungi pendenze casuali solo se giustificate teoricamente."
  },
  generalizedLinearMixedModel: {
    jamovi: "Installa e apri il modulo GAMLj in jamovi.\nScegli Mixed Models > Generalized Linear Model, seleziona distribuzione e funzione di link, poi aggiungi predittori fissi ed effetti casuali.\nPer esiti dicotomici usa una distribuzione binomiale con link logit."
  },
  ordinalMixedModel: {
    jamovi: "jamovi offre un supporto diretto limitato per modelli misti ordinali nei menu principali.\nUsa il modulo Rj Editor o esporta i dati in R.\nModella l'esito ordinale con predittori fissi ed effetti casuali per persona, squadra, classe o altro cluster."
  },
  kruskalWallis: {
    jamovi: "Analisi > ANOVA > ANOVA a una via\nInserisci l'esito ordinale o metrico in Variabile dipendente e la variabile di gruppo in Fattore fisso.\nAttiva Kruskal-Wallis nei test non parametrici."
  },
  friedman: {
    jamovi: "Analisi > ANOVA > ANOVA a misure ripetute\nDefinisci il fattore a misure ripetute e assegna le colonne delle misure ripetute.\nAttiva Friedman nei test non parametrici."
  },
  fisher: {
    jamovi: "Analisi > Frequenze > Tabelle di contingenza > Campioni indipendenti\nInserisci le variabili in Righe e Colonne.\nAttiva il test esatto di Fisher per una tabella 2x2."
  },
  mcnemar: {
    jamovi: "Analisi > Frequenze > Tabelle di contingenza > Campioni appaiati\nAggiungi le due variabili dicotomiche appaiate.\nAttiva il test di McNemar."
  },
  binomialTest: {
    jamovi: "Analisi > Frequenze > Test di proporzione a un campione\nSeleziona la variabile categoriale a due livelli.\nInserisci la proporzione attesa per la categoria focale e richiedi intervalli di confidenza esatti/binomiali."
  },
  chiSquareGoodness: {
    jamovi: "Analisi > Frequenze > Test di proporzione a un campione\nSeleziona la variabile categoriale.\nInserisci le proporzioni attese o confronta con proporzioni uguali."
  },
  linearRegression: {
    jamovi: "Analisi > Regressione > Regressione lineare\nInserisci l'esito metrico in Variabile dipendente.\nAggiungi i predittori in Covariate o Fattori e controlla la diagnostica dei residui.\nInterpreta i coefficienti come predizione/associazione salvo che il disegno dello studio supporti inferenza causale."
  },
  logisticRegression: {
    jamovi: "Analisi > Regressione > Regressione logistica > 2 esiti\nInserisci l'esito dicotomico in Variabile dipendente.\nAggiungi i predittori in Covariate o Fattori e controlla gli odds ratio."
  },
  multinomialRegression: {
    jamovi: "Analisi > Regressione > Regressione logistica > N esiti\nInserisci l'esito multicategoriale in Variabile dipendente.\nAggiungi i predittori in Covariate o Fattori e scegli la categoria di riferimento."
  },
  factorAnalysis: {
    jamovi: "Analisi > Fattori > Analisi fattoriale esplorativa\nSposta le variabili correlate in Variabili.\nScegli metodo di estrazione, rotazione e numero di fattori, poi controlla carichi e adattamento del modello."
  },
  clusterAnalysis: {
    jamovi: "Installa il modulo SnowCluster dalla libreria jamovi e aprilo dal menu Analisi.\nSposta le variabili che descrivono persone o oggetti nel campo delle variabili di clustering.\nStandardizza le variabili se necessario, scegli il metodo di clustering/opzione di distanza, imposta o confronta il numero di cluster e controlla la qualità della soluzione."
  },
  multidimensionalScaling: {
    jamovi: "Jamovi offre un supporto diretto limitato per lo scaling multidimensionale.\nUsa una matrice di distanze o dissimilarità se è installato un modulo adatto, oppure esporta i dati in R.\nControlla stress, grafico di configurazione e interpretabilità delle dimensioni."
  },
  chiSquareVariance: {
    jamovi: "Jamovi offre un supporto diretto limitato per il test chi-quadrato esatto di una varianza.\nUsa Esplorazione > Descrittive per ottenere n e la varianza campionaria, poi esegui il test esatto in R.\nRiporta la varianza di popolazione ipotizzata e la statistica chi-quadrato."
  },
  varianceFTest: {
    jamovi: "Jamovi può mostrare le varianze per gruppo in Esplorazione > Descrittive.\nPer il classico test F di due varianze, esporta i dati o usa un modulo R ed esegui var.test().\nConsidera il test di Levene come alternativa più robusta quando la normalità è dubbia."
  }
};
