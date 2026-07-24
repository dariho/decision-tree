import fs from "node:fs";

const sourcePath = "docs/assumptions-review-table_revised.csv";
const outputPath = "assumptions-details.js";

function parseDelimited(text, delimiter = ";") {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];

    if (character === "\"") {
      if (quoted && next === "\"") {
        cell += "\"";
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (!quoted && character === delimiter) {
      row.push(cell);
      cell = "";
      continue;
    }

    if (!quoted && (character === "\n" || character === "\r")) {
      if (character === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += character;
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function clean(text) {
  return String(text || "").replace(/^\uFEFF/, "").replace(/\s+/g, " ").trim();
}

const targetLanguages = ["en", "de", "fr", "es", "it"];

const t = (de, fr, es, it) => ({ de, fr, es, it });

const sentenceTranslations = {
  "One observation should not determine or duplicate another unless the method explicitly models that dependence.": t(
    "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren, es sei denn, die Methode modelliert diese Abhängigkeit ausdrücklich.",
    "Une observation ne doit pas déterminer ni dupliquer une autre observation, sauf si la méthode modélise explicitement cette dépendance.",
    "Una observación no debe determinar ni duplicar otra, salvo que el método modele explícitamente esa dependencia.",
    "Una osservazione non deve determinare o duplicare un'altra osservazione, a meno che il metodo modelli esplicitamente tale dipendenza."
  ),
  "Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.": t(
    "Wiederholte Messungen, gepaarte Fälle, Teamzugehörigkeit, Klassenräume, Kliniken, Studien aus demselben Labor oder mehrere Zeilen pro Person können diese Voraussetzung verletzen.",
    "Les mesures répétées, les paires appariées, l'appartenance à une équipe, les classes, les cliniques, les études issues du même laboratoire ou plusieurs lignes par personne peuvent violer cette condition.",
    "Las medidas repetidas, los pares emparejados, la pertenencia a equipos, aulas, clínicas, estudios del mismo laboratorio o varias filas por persona pueden vulnerar este supuesto.",
    "Misure ripetute, coppie appaiate, appartenenza a team, classi, cliniche, studi dello stesso laboratorio o più righe per persona possono violare questa assunzione."
  ),
  "One observation should not determine or duplicate another.": t(
    "Eine einzelne Beobachtung sollte keine andere Beobachtung bestimmen oder duplizieren.",
    "Une observation ne doit pas déterminer ni dupliquer une autre observation.",
    "Una observación no debe determinar ni duplicar otra.",
    "Una osservazione non deve determinare o duplicare un'altra osservazione."
  ),
  "One observation should not determine or duplicate.": t(
    "Eine einzelne Beobachtung sollte nicht bestimmen oder duplizieren.",
    "Une observation ne doit pas déterminer ni dupliquer.",
    "Una observación no debe determinar ni duplicar.",
    "Una osservazione non deve determinare né duplicare."
  ),
  "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful.": t(
    "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte, Varianzen, Distanzen oder Koeffizienten linearer Modelle sinnvoll sind.",
    "La variable doit être suffisamment quantitative pour que les moyennes, les variances, les distances ou les coefficients de modèles linéaires aient un sens.",
    "La variable debe ser suficientemente cuantitativa para que las medias, varianzas, distancias o coeficientes de modelos lineales sean interpretables.",
    "La variabile deve essere sufficientemente quantitativa perché medie, varianze, distanze o coefficienti dei modelli lineari siano significativi."
  ),
  "The variable should be quantitative enough that means are meaningful.": t(
    "Die Variable sollte ausreichend quantitativ sein, damit Mittelwerte sinnvoll interpretierbar sind.",
    "La variable doit être suffisamment quantitative pour que les moyennes aient un sens.",
    "La variable debe ser suficientemente cuantitativa para que las medias sean interpretables.",
    "La variabile deve essere sufficientemente quantitativa perché le medie siano interpretabili."
  ),
  "The variable should be quantitative enough.": t(
    "Die Variable sollte ausreichend quantitativ sein.",
    "La variable doit être suffisamment quantitative.",
    "La variable debe ser suficientemente cuantitativa.",
    "La variabile deve essere sufficientemente quantitativa."
  ),
  "Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.": t(
    "Prüfen Sie Skala, Einheiten, plausiblen Wertebereich und ob starke Boden- oder Deckeneffekte eine metrische Interpretation fraglich machen.",
    "Vérifiez l'échelle, les unités, l'étendue plausible et si de forts effets plancher ou plafond rendent l'interprétation métrique discutable.",
    "Compruebe la escala, las unidades, el rango plausible y si fuertes efectos suelo o techo cuestionan una interpretación métrica.",
    "Controllare scala, unità, intervallo plausibile e se forti effetti pavimento o soffitto rendono discutibile un'interpretazione metrica."
  ),
  "Categories should be mutually exclusive and coded consistently.": t(
    "Die Kategorien sollten sich gegenseitig ausschließen und konsistent codiert sein.",
    "Les catégories doivent être mutuellement exclusives et codées de manière cohérente.",
    "Las categorías deben ser mutuamente excluyentes y estar codificadas de forma coherente.",
    "Le categorie devono essere mutuamente esclusive e codificate in modo coerente."
  ),
  "Check that each case belongs to the intended category.": t(
    "Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört.",
    "Vérifiez que chaque cas appartient à la catégorie prévue.",
    "Compruebe que cada caso pertenece a la categoría prevista.",
    "Verificare che ogni caso appartenga alla categoria prevista."
  ),
  "Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.": t(
    "Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört, ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind und ob dünn besetzte Kategorien keine instabilen Schätzungen verursachen.",
    "Vérifiez que chaque cas appartient à la catégorie prévue, que les catégories de référence sont pertinentes lorsque les modèles les exigent et que les catégories peu fréquentes ne produisent pas d'estimations instables.",
    "Compruebe que cada caso pertenece a la categoría prevista, que las categorías de referencia son significativas cuando el modelo las requiere y que las categorías escasas no producen estimaciones inestables.",
    "Verificare che ogni caso appartenga alla categoria prevista, che le categorie di riferimento siano significative quando i modelli le richiedono e che categorie rare non producano stime instabili."
  ),
  "Check that each case belongs to the intended category, that reference categories are meaningful when models require them.": t(
    "Prüfen Sie, ob jeder Fall zur vorgesehenen Kategorie gehört und ob Referenzkategorien bei entsprechenden Modellen sinnvoll sind.",
    "Vérifiez que chaque cas appartient à la catégorie prévue et que les catégories de référence sont pertinentes lorsque les modèles les exigent.",
    "Compruebe que cada caso pertenece a la categoría prevista y que las categorías de referencia son significativas cuando el modelo las requiere.",
    "Verificare che ogni caso appartenga alla categoria prevista e che le categorie di riferimento siano significative quando i modelli le richiedono."
  ),
  "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data.": t(
    "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen oder für die Residuen statt für die zusammengefassten Rohdaten.",
    "La distribution pertinente doit être approximativement normale, généralement au sein des groupes ou pour les résidus plutôt que pour les données brutes regroupées.",
    "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos o en los residuos, no en los datos brutos agrupados.",
    "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi o per i residui piuttosto che sui dati grezzi aggregati."
  ),
  "The relevant distribution should be approximately normal, usually within groups.": t(
    "Die relevante Verteilung sollte annähernd normal sein, meist innerhalb der Gruppen.",
    "La distribution pertinente doit être approximativement normale, généralement au sein des groupes.",
    "La distribución relevante debe ser aproximadamente normal, normalmente dentro de los grupos.",
    "La distribuzione rilevante dovrebbe essere approssimativamente normale, di solito all'interno dei gruppi."
  ),
  "The relevant distribution should be approximately normal.": t(
    "Die relevante Verteilung sollte annähernd normal sein.",
    "La distribution pertinente doit être approximativement normale.",
    "La distribución relevante debe ser aproximadamente normal.",
    "La distribuzione rilevante dovrebbe essere approssimativamente normale."
  ),
  "Inspect histograms, Q-Q plots, residual plots, and outliers": t(
    "Prüfen Sie Histogramme, Q-Q-Plots, Residuenplots und Ausreißer.",
    "Examinez les histogrammes, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
    "Inspeccione histogramas, gráficos Q-Q, gráficos de residuos y valores atípicos.",
    "Esaminare istogrammi, grafici Q-Q, grafici dei residui e valori anomali."
  ),
  "Inspect histograms, normality test, Q-Q plots, residual plots, and outliers": t(
    "Prüfen Sie Histogramme, Normalitätstests, Q-Q-Plots, Residuenplots und Ausreißer.",
    "Examinez les histogrammes, les tests de normalité, les graphiques Q-Q, les graphiques des résidus et les valeurs aberrantes.",
    "Inspeccione histogramas, pruebas de normalidad, gráficos Q-Q, gráficos de residuos y valores atípicos.",
    "Esaminare istogrammi, test di normalità, grafici Q-Q, grafici dei residui e valori anomali."
  ),
  "Inspect histograms, Q-Q plots, and outliers": t(
    "Prüfen Sie Histogramme, Q-Q-Plots und Ausreißer.",
    "Examinez les histogrammes, les graphiques Q-Q et les valeurs aberrantes.",
    "Inspeccione histogramas, gráficos Q-Q y valores atípicos.",
    "Esaminare istogrammi, grafici Q-Q e valori anomali."
  ),
  "Inspect histograms, Q-Q plots, and outliers.": t(
    "Prüfen Sie Histogramme, Q-Q-Plots und Ausreißer.",
    "Examinez les histogrammes, les graphiques Q-Q et les valeurs aberrantes.",
    "Inspeccione histogramas, gráficos Q-Q y valores atípicos.",
    "Esaminare istogrammi, grafici Q-Q e valori anomali."
  ),
  "Perform normality test": t(
    "Führen Sie einen Normalitätstest durch.",
    "Réalisez un test de normalité.",
    "Realice una prueba de normalidad.",
    "Eseguire un test di normalità."
  ),
  "There should be enough information for the model or test to estimate effects reliably.": t(
    "Es sollte genügend Information vorhanden sein, damit das Modell oder der Test Effekte zuverlässig schätzen kann.",
    "Il doit y avoir suffisamment d'information pour que le modèle ou le test estime les effets de manière fiable.",
    "Debe haber suficiente información para que el modelo o la prueba estime los efectos de forma fiable.",
    "Devono esserci informazioni sufficienti perché il modello o il test stimi gli effetti in modo affidabile."
  ),
  "The values must at least have a meaningful order.": t(
    "Die Werte müssen mindestens eine sinnvolle Ordnung besitzen.",
    "Les valeurs doivent au moins présenter un ordre significatif.",
    "Los valores deben tener al menos un orden significativo.",
    "I valori devono avere almeno un ordine significativo."
  ),
  "The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.": t(
    "Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein; daher können rangbasierte oder ordinale Modelle geeigneter sein als mittelwertbasierte Tests.",
    "La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale; les modèles fondés sur les rangs ou ordinaux peuvent donc être plus appropriés que les tests fondés sur les moyennes.",
    "La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual; por eso los modelos basados en rangos u ordinales pueden ser más adecuados que las pruebas basadas en medias.",
    "La distanza esatta tra categorie di risposta adiacenti non deve essere uguale; per questo modelli basati sui ranghi o ordinali possono essere più appropriati dei test basati sulle medie."
  ),
  "The exact distance between adjacent response categories does not need to be equal.": t(
    "Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein.",
    "La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale.",
    "La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual.",
    "La distanza esatta tra categorie di risposta adiacenti non deve essere uguale."
  ),
  "The exact distance between adjacent response categories does not need to be equal,": t(
    "Der exakte Abstand zwischen benachbarten Antwortkategorien muss nicht gleich sein.",
    "La distance exacte entre catégories de réponse adjacentes n'a pas besoin d'être égale.",
    "La distancia exacta entre categorías de respuesta adyacentes no tiene que ser igual.",
    "La distanza esatta tra categorie di risposta adiacenti non deve essere uguale."
  ),
  "Evaluate predictive models on data not used to fit them.": t(
    "Bewerten Sie Vorhersagemodelle mit Daten, die nicht zur Anpassung des Modells verwendet wurden.",
    "Évaluez les modèles prédictifs sur des données qui n'ont pas servi à les ajuster.",
    "Evalúe los modelos predictivos con datos que no se usaron para ajustarlos.",
    "Valutare i modelli predittivi su dati non utilizzati per stimarli."
  ),
  "Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.": t(
    "Verwenden Sie Train/Test-Aufteilungen, Kreuzvalidierung oder externe Validierung und berichten Sie Kennwerte, die zum Outcome und zur Klassenbalance passen.",
    "Utilisez des séparations entraînement/test, la validation croisée ou une validation externe et rapportez des métriques adaptées au critère et à l'équilibre des classes.",
    "Use divisiones entrenamiento/prueba, validación cruzada o validación externa e informe métricas adecuadas al resultado y al equilibrio de clases.",
    "Usare suddivisioni training/test, validazione incrociata o validazione esterna e riportare metriche adeguate all'esito e al bilanciamento delle classi."
  ),
  "Measurements must be correctly linked within the same person, object, team, study, or matched pair.": t(
    "Messungen müssen korrekt derselben Person, demselben Objekt, Team, derselben Studie oder demselben gepaarten Fall zugeordnet sein.",
    "Les mesures doivent être correctement reliées à la même personne, au même objet, à la même équipe, à la même étude ou à la même paire appariée.",
    "Las mediciones deben estar correctamente vinculadas a la misma persona, objeto, equipo, estudio o par emparejado.",
    "Le misurazioni devono essere correttamente collegate alla stessa persona, oggetto, squadra, studio o coppia appaiata."
  ),
  "The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.": t(
    "Die Analyse nutzt diese Zuordnungen; fehlende oder falsch gepaarte Zeilen können daher sowohl die Schätzung als auch den Standardfehler verändern.",
    "L'analyse utilise ces liens; des lignes manquantes ou mal appariées peuvent donc modifier à la fois l'estimation et l'erreur standard.",
    "El análisis utiliza esos vínculos; por tanto, filas ausentes o mal emparejadas pueden cambiar tanto la estimación como el error estándar.",
    "L'analisi utilizza questi collegamenti; righe mancanti o abbinate in modo errato possono quindi modificare sia la stima sia l'errore standard."
  ),
  "Each study should provide a comparable effect estimate and a valid measure of uncertainty.": t(
    "Jede Studie sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern.",
    "Chaque étude doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude.",
    "Cada estudio debe aportar una estimación del efecto comparable y una medida válida de incertidumbre.",
    "Ogni studio deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza."
  ),
  "Each group should provide a comparable effect estimate and a valid measure of uncertainty.": t(
    "Jede Gruppe sollte eine vergleichbare Effektschätzung und ein gültiges Maß der Unsicherheit liefern.",
    "Chaque groupe doit fournir une estimation d'effet comparable et une mesure valide de l'incertitude.",
    "Cada grupo debe aportar una estimación del efecto comparable y una medida válida de incertidumbre.",
    "Ogni gruppo deve fornire una stima dell'effetto comparabile e una misura valida dell'incertezza."
  ),
  "Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.": t(
    "Prüfen Sie Codierungsrichtung, Skala, Transformation und ob alle Studien dasselbe Effektgrößenmaß verwenden.",
    "Vérifiez le sens du codage, l'échelle, la transformation et si toutes les études utilisent la même métrique d'effet.",
    "Compruebe la dirección de codificación, la escala, la transformación y si todos los estudios usan la misma métrica de tamaño del efecto.",
    "Controllare direzione della codifica, scala, trasformazione e se tutti gli studi usano la stessa metrica di dimensione dell'effetto."
  ),
  "The data contain grouping structures such as repeated measures within participants or athletes within teams.": t(
    "Die Daten enthalten Gruppierungsstrukturen, etwa wiederholte Messungen innerhalb von Personen oder Athletinnen und Athleten innerhalb von Teams.",
    "Les données contiennent des structures de regroupement, comme des mesures répétées chez les participants ou des athlètes au sein d'équipes.",
    "Los datos contienen estructuras de agrupación, como medidas repetidas dentro de participantes o deportistas dentro de equipos.",
    "I dati contengono strutture di raggruppamento, come misure ripetute entro partecipanti o atleti entro squadre."
  ),
  "The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.": t(
    "Die Random-Effects-Struktur sollte zur Designfrage passen und durch genügend Cluster sowie Beobachtungen pro Cluster gestützt sein.",
    "La structure des effets aléatoires doit correspondre à la question de design et être soutenue par suffisamment de clusters et d'observations par cluster.",
    "La estructura de efectos aleatorios debe corresponder a la pregunta de diseño y estar respaldada por suficientes clústeres y observaciones por clúster.",
    "La struttura degli effetti casuali deve corrispondere alla domanda di disegno ed essere supportata da un numero sufficiente di cluster e osservazioni per cluster."
  ),
  "The association should be adequately described by a straight-line relation on the model scale.": t(
    "Der Zusammenhang sollte auf der Modellskala angemessen durch eine lineare Beziehung beschrieben werden.",
    "L'association doit être correctement décrite par une relation linéaire à l'échelle du modèle.",
    "La asociación debe describirse adecuadamente mediante una relación lineal en la escala del modelo.",
    "L'associazione dovrebbe essere descritta adeguatamente da una relazione lineare sulla scala del modello."
  ),
  "Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.": t(
    "Streudiagramme, partielle Residuenplots und Plots von vorhergesagten Werten gegen Residuen helfen, Krümmungen oder Schwellenmuster zu erkennen.",
    "Les nuages de points, les graphiques des résidus partiels et les graphiques ajusté-versus-résidus aident à détecter des courbures ou des effets de seuil.",
    "Los diagramas de dispersión, los gráficos de residuos parciales y los gráficos ajustado-residuo ayudan a detectar curvaturas o patrones de umbral.",
    "Diagrammi di dispersione, grafici dei residui parziali e grafici valori stimati-residui aiutano a rilevare curvature o pattern soglia."
  ),
  "Expected frequencies should be large enough for asymptotic approximations to work.": t(
    "Die erwarteten Häufigkeiten sollten groß genug sein, damit asymptotische Approximationen funktionieren.",
    "Les fréquences attendues doivent être suffisamment élevées pour que les approximations asymptotiques soient valables.",
    "Las frecuencias esperadas deben ser suficientemente grandes para que funcionen las aproximaciones asintóticas.",
    "Le frequenze attese devono essere abbastanza grandi perché le approssimazioni asintotiche siano valide."
  ),
  "If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.": t(
    "Wenn viele erwartete Zellen klein sind, fassen Sie inhaltlich ähnliche Kategorien zusammen, verwenden Sie falls möglich einen exakten Test oder wählen Sie ein Modell für dünn besetzte Zähldaten.",
    "Si de nombreuses cellules attendues sont petites, regroupez les catégories substantiellement similaires, utilisez un test exact lorsque c'est possible ou choisissez un modèle conçu pour les effectifs rares.",
    "Si muchas celdas esperadas son pequeñas, combine categorías sustantivamente similares, use una prueba exacta cuando esté disponible o elija un modelo diseñado para recuentos escasos.",
    "Se molte celle attese sono piccole, combinare categorie sostanzialmente simili, usare un test esatto quando disponibile o scegliere un modello per conteggi sparsi."
  ),
  "If many expected cells are small, combine substantively similar categories, use an exact test where available.": t(
    "Wenn viele erwartete Zellen klein sind, fassen Sie inhaltlich ähnliche Kategorien zusammen oder verwenden Sie falls möglich einen exakten Test.",
    "Si de nombreuses cellules attendues sont petites, regroupez les catégories substantiellement similaires ou utilisez un test exact lorsque c'est possible.",
    "Si muchas celdas esperadas son pequeñas, combine categorías sustantivamente similares o use una prueba exacta cuando esté disponible.",
    "Se molte celle attese sono piccole, combinare categorie sostanzialmente simili o usare un test esatto quando disponibile."
  ),
  "Put predictors on comparable scales before distance-based or component-based methods when units differ.": t(
    "Bringen Sie Prädiktoren vor distanz- oder komponentenbasierten Methoden auf vergleichbare Skalen, wenn sich die Einheiten unterscheiden.",
    "Placez les prédicteurs sur des échelles comparables avant les méthodes fondées sur les distances ou les composantes lorsque les unités diffèrent.",
    "Ponga los predictores en escalas comparables antes de métodos basados en distancias o componentes cuando las unidades difieran.",
    "Portare i predittori su scale comparabili prima di metodi basati su distanze o componenti quando le unità differiscono."
  ),
  "Otherwise variables with larger numeric ranges can dominate the result.": t(
    "Andernfalls können Variablen mit größeren numerischen Wertebereichen das Ergebnis dominieren.",
    "Sinon, les variables avec de plus grandes étendues numériques peuvent dominer le résultat.",
    "De lo contrario, las variables con rangos numéricos mayores pueden dominar el resultado.",
    "Altrimenti le variabili con intervalli numerici più ampi possono dominare il risultato."
  ),
  "The chosen distance or similarity measure should match the meaning of the variables and the research question.": t(
    "Das gewählte Distanz- oder Ähnlichkeitsmaß sollte zur Bedeutung der Variablen und zur Forschungsfrage passen.",
    "La mesure de distance ou de similarité choisie doit correspondre au sens des variables et à la question de recherche.",
    "La medida de distancia o similitud elegida debe ajustarse al significado de las variables y a la pregunta de investigación.",
    "La misura di distanza o similarità scelta deve corrispondere al significato delle variabili e alla domanda di ricerca."
  ),
  "Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.": t(
    "Prüfen Sie, ob euklidische, Manhattan-, korrelationsbasierte oder andere Distanzen am besten begründbar sind.",
    "Vérifiez si les distances euclidiennes, de Manhattan, fondées sur la corrélation ou d'autres distances sont les plus défendables.",
    "Compruebe si las distancias euclídeas, Manhattan, basadas en correlación u otras son las más defendibles.",
    "Verificare se distanze euclidee, Manhattan, basate sulla correlazione o altre sono le più difendibili."
  ),
  "Groups or fitted values should show roughly comparable variability.": t(
    "Gruppen oder vorhergesagte Werte sollten ungefähr vergleichbare Streuung zeigen.",
    "Les groupes ou les valeurs ajustées doivent présenter une variabilité approximativement comparable.",
    "Los grupos o valores ajustados deben mostrar una variabilidad aproximadamente comparable.",
    "I gruppi o i valori stimati dovrebbero mostrare una variabilità approssimativamente comparabile."
  ),
  "Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.": t(
    "Nutzen Sie Residuenplots, Gruppenstandardabweichungen, Levene-ähnliche Prüfungen oder robuste/Welch-Alternativen, wenn sich die Streuung stark unterscheidet.",
    "Utilisez les graphiques des résidus, les écarts-types par groupe, des tests de type Levene ou des alternatives robustes/Welch lorsque la variabilité diffère fortement.",
    "Use gráficos de residuos, desviaciones estándar por grupo, pruebas tipo Levene o alternativas robustas/Welch cuando la variabilidad difiera mucho.",
    "Usare grafici dei residui, deviazioni standard di gruppo, controlli di tipo Levene o alternative robuste/Welch quando la variabilità differisce molto."
  ),
  "The statistical model alone does not establish causality.": t(
    "Das statistische Modell allein belegt keine Kausalität.",
    "Le modèle statistique seul n'établit pas la causalité.",
    "El modelo estadístico por sí solo no establece causalidad.",
    "Il modello statistico da solo non dimostra causalità."
  ),
  "Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.": t(
    "Eine kausale Interpretation erfordert Designunterstützung wie Randomisierung, zeitliche Reihenfolge, starke Theorie, sorgfältige Kontrolle von Confoundern und Sensitivitätsanalysen.",
    "Une interprétation causale nécessite un appui du design, comme la randomisation, l'ordre temporel, une théorie solide, un contrôle rigoureux des facteurs de confusion et des analyses de sensibilité.",
    "La interpretación causal requiere apoyo del diseño, como aleatorización, orden temporal, teoría sólida, control cuidadoso de confusores y análisis de sensibilidad.",
    "Un'interpretazione causale richiede supporto del disegno, come randomizzazione, ordine temporale, teoria solida, controllo accurato dei confondenti e analisi di sensibilità."
  ),
  "The model structure or hypothesis should be motivated before looking at the result.": t(
    "Die Modellstruktur oder Hypothese sollte vor der Betrachtung des Ergebnisses begründet werden.",
    "La structure du modèle ou l'hypothèse doit être motivée avant d'examiner le résultat.",
    "La estructura del modelo o la hipótesis debe justificarse antes de mirar el resultado.",
    "La struttura del modello o l'ipotesi deve essere motivata prima di esaminare il risultato."
  ),
  "Document why paths, factors, covariates, subgroups, or expected proportions were chosen.": t(
    "Dokumentieren Sie, warum Pfade, Faktoren, Kovariaten, Subgruppen oder erwartete Anteile gewählt wurden.",
    "Documentez pourquoi les chemins, facteurs, covariables, sous-groupes ou proportions attendues ont été choisis.",
    "Documente por qué se eligieron rutas, factores, covariables, subgrupos o proporciones esperadas.",
    "Documentare perché sono stati scelti percorsi, fattori, covariate, sottogruppi o proporzioni attese."
  ),
  "Flexible models can learn noise.": t(
    "Flexible Modelle können Rauschen lernen.",
    "Les modèles flexibles peuvent apprendre le bruit.",
    "Los modelos flexibles pueden aprender ruido.",
    "I modelli flessibili possono apprendere rumore."
  ),
  "Limit tree depth, prune, tune hyperparameters, or use validation data to check whether performance generalizes beyond the training sample.": t(
    "Begrenzen Sie die Baumtiefe, schneiden Sie den Baum zurück, optimieren Sie Hyperparameter oder nutzen Sie Validierungsdaten, um zu prüfen, ob die Leistung über die Trainingsstichprobe hinaus generalisiert.",
    "Limitez la profondeur de l'arbre, élaguez, ajustez les hyperparamètres ou utilisez des données de validation pour vérifier si la performance se généralise au-delà de l'échantillon d'entraînement.",
    "Limite la profundidad del árbol, pode, ajuste hiperparámetros o use datos de validación para comprobar si el rendimiento generaliza más allá de la muestra de entrenamiento.",
    "Limitare la profondità dell'albero, potare, ottimizzare gli iperparametri o usare dati di validazione per verificare se la prestazione generalizza oltre il campione di training."
  ),
  "The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.": t(
    "Die Modellfamilie sollte zur Skala des Outcomes und zum datenerzeugenden Prozess passen, etwa Gaussian für kontinuierliche Outcomes, Binomial/Logit für binäre Outcomes, Poisson oder Negativ-Binomial für Zähldaten und kumulative Links für ordinale Outcomes.",
    "La famille de modèles doit correspondre à l'échelle du critère et au processus générateur des données, par exemple gaussienne pour les critères continus, binomiale/logit pour les critères binaires, Poisson ou binomiale négative pour les comptages et liens cumulatifs pour les critères ordinaux.",
    "La familia del modelo debe corresponder a la escala del resultado y al proceso generador de datos, por ejemplo gaussiana para resultados continuos, binomial/logit para resultados binarios, Poisson o binomial negativa para recuentos y enlaces acumulativos para resultados ordinales.",
    "La famiglia del modello deve corrispondere alla scala dell'esito e al processo generatore dei dati, ad esempio gaussiana per esiti continui, binomiale/logit per esiti binari, Poisson o binomiale negativa per conteggi e link cumulativi per esiti ordinali."
  ),
  "The model family should match the outcome scale and data-generating process, such as cumulative links for ordinal outcomes.": t(
    "Die Modellfamilie sollte zur Skala des Outcomes und zum datenerzeugenden Prozess passen, etwa kumulative Links für ordinale Outcomes.",
    "La famille de modèles doit correspondre à l'échelle du critère et au processus générateur des données, par exemple des liens cumulatifs pour les critères ordinaux.",
    "La familia del modelo debe corresponder a la escala del resultado y al proceso generador de datos, por ejemplo enlaces acumulativos para resultados ordinales.",
    "La famiglia del modello deve corrispondere alla scala dell'esito e al processo generatore dei dati, ad esempio link cumulativi per esiti ordinali."
  ),
  "The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes.": t(
    "Die Modellfamilie sollte zur Skala des Outcomes und zum datenerzeugenden Prozess passen, etwa Gaussian für kontinuierliche Outcomes.",
    "La famille de modèles doit correspondre à l'échelle du critère et au processus générateur des données, par exemple gaussienne pour les critères continus.",
    "La familia del modelo debe corresponder a la escala del resultado y al proceso generador de datos, por ejemplo gaussiana para resultados continuos.",
    "La famiglia del modello deve corrispondere alla scala dell'esito e al processo generatore dei dati, ad esempio gaussiana per esiti continui."
  ),
  "A few extreme or influential observations should not dominate the result.": t(
    "Einige extreme oder einflussreiche Beobachtungen sollten das Ergebnis nicht dominieren.",
    "Quelques observations extrêmes ou influentes ne doivent pas dominer le résultat.",
    "Unas pocas observaciones extremas o influyentes no deben dominar el resultado.",
    "Poche osservazioni estreme o influenti non dovrebbero dominare il risultato."
  ),
  "Inspect raw data, scatterplots, standardized residuals, leverage, and influence diagnostics before deciding whether values are errors, legitimate extremes, or reasons to use robust methods.": t(
    "Prüfen Sie Rohdaten, Streudiagramme, standardisierte Residuen, Leverage und Einflussdiagnostiken, bevor Sie entscheiden, ob Werte Fehler, legitime Extreme oder Gründe für robuste Methoden sind.",
    "Examinez les données brutes, les nuages de points, les résidus standardisés, le levier et les diagnostics d'influence avant de décider si les valeurs sont des erreurs, des extrêmes légitimes ou des raisons d'utiliser des méthodes robustes.",
    "Inspeccione datos brutos, diagramas de dispersión, residuos estandarizados, leverage y diagnósticos de influencia antes de decidir si los valores son errores, extremos legítimos o razones para usar métodos robustos.",
    "Esaminare dati grezzi, diagrammi di dispersione, residui standardizzati, leverage e diagnostiche di influenza prima di decidere se i valori siano errori, estremi legittimi o motivi per usare metodi robusti."
  ),
  "Predictors should not be nearly redundant.": t(
    "Prädiktoren sollten nicht nahezu redundant sein.",
    "Les prédicteurs ne doivent pas être presque redondants.",
    "Los predictores no deben ser casi redundantes.",
    "I predittori non dovrebbero essere quasi ridondanti."
  ),
  "Inspect correlations, variance inflation factors, condition indices, or unstable coefficients that change markedly when other predictors are added.": t(
    "Prüfen Sie Korrelationen, Varianzinflationsfaktoren, Konditionsindizes oder instabile Koeffizienten, die sich stark ändern, wenn andere Prädiktoren hinzugefügt werden.",
    "Examinez les corrélations, les facteurs d'inflation de variance, les indices de condition ou les coefficients instables qui changent fortement lorsque d'autres prédicteurs sont ajoutés.",
    "Inspeccione correlaciones, factores de inflación de la varianza, índices de condición o coeficientes inestables que cambian mucho al añadir otros predictores.",
    "Esaminare correlazioni, fattori di inflazione della varianza, indici di condizione o coefficienti instabili che cambiano molto quando si aggiungono altri predittori."
  ),
  "The relation between each covariate and the dependent variable should be similar across groups.": t(
    "Die Beziehung zwischen jeder Kovariate und der abhängigen Variable sollte über Gruppen hinweg ähnlich sein.",
    "La relation entre chaque covariable et la variable dépendante doit être similaire entre les groupes.",
    "La relación entre cada covariable y la variable dependiente debe ser similar entre grupos.",
    "La relazione tra ciascuna covariata e la variabile dipendente dovrebbe essere simile tra i gruppi."
  ),
  "Check covariate-by-group interactions": t(
    "Prüfen Sie Kovariate-mal-Gruppe-Interaktionen.",
    "Vérifiez les interactions covariable par groupe.",
    "Compruebe las interacciones covariable por grupo.",
    "Controllare le interazioni covariata per gruppo."
  ),
  "Groups should have broadly similar covariance matrices among the dependent variables or predictors.": t(
    "Die Gruppen sollten für die abhängigen Variablen oder Prädiktoren weitgehend ähnliche Kovarianzmatrizen aufweisen.",
    "Les groupes doivent présenter des matrices de covariance globalement similaires entre les variables dépendantes ou les prédicteurs.",
    "Los grupos deben tener matrices de covarianza ampliamente similares entre las variables dependientes o los predictores.",
    "I gruppi dovrebbero avere matrici di covarianza ampiamente simili tra variabili dipendenti o predittori."
  ),
  "Large differences can make multivariate tests or discriminant functions unstable, especially with small or unequal group sizes.": t(
    "Große Unterschiede können multivariate Tests oder Diskriminanzfunktionen instabil machen, insbesondere bei kleinen oder ungleichen Gruppengrößen.",
    "De grandes différences peuvent rendre les tests multivariés ou les fonctions discriminantes instables, surtout avec des groupes petits ou de tailles inégales.",
    "Grandes diferencias pueden hacer inestables las pruebas multivariadas o las funciones discriminantes, especialmente con tamaños de grupo pequeños o desiguales.",
    "Grandi differenze possono rendere instabili i test multivariati o le funzioni discriminanti, soprattutto con gruppi piccoli o di dimensioni disuguali."
  ),
  "For repeated-measures factors with more than two levels, the variances of the pairwise differences should be similar.": t(
    "Bei Messwiederholungsfaktoren mit mehr als zwei Stufen sollten die Varianzen der paarweisen Differenzen ähnlich sein.",
    "Pour les facteurs à mesures répétées comportant plus de deux niveaux, les variances des différences par paires doivent être similaires.",
    "Para factores de medidas repetidas con más de dos niveles, las varianzas de las diferencias por pares deben ser similares.",
    "Per fattori a misure ripetute con più di due livelli, le varianze delle differenze a coppie dovrebbero essere simili."
  ),
  "If this is doubtful, report a correction such as Greenhouse-Geisser or use a mixed-model approach.": t(
    "Wenn dies zweifelhaft ist, berichten Sie eine Korrektur wie Greenhouse-Geisser oder verwenden Sie einen Mixed-Model-Ansatz.",
    "Si cela est douteux, rapportez une correction comme Greenhouse-Geisser ou utilisez une approche de modèle mixte.",
    "Si esto es dudoso, informe una corrección como Greenhouse-Geisser o use un enfoque de modelo mixto.",
    "Se questo è dubbio, riportare una correzione come Greenhouse-Geisser o usare un approccio a modello misto."
  ),
  "As one variable increases, the other should tend to move consistently upward or downward, even if the relation is not linear.": t(
    "Wenn eine Variable zunimmt, sollte die andere tendenziell konsistent steigen oder fallen, auch wenn die Beziehung nicht linear ist.",
    "Lorsqu'une variable augmente, l'autre doit tendre à augmenter ou diminuer de manière cohérente, même si la relation n'est pas linéaire.",
    "A medida que una variable aumenta, la otra debe tender a subir o bajar de forma consistente, aunque la relación no sea lineal.",
    "Quando una variabile aumenta, l'altra dovrebbe tendere a salire o scendere in modo coerente, anche se la relazione non è lineare."
  ),
  "A scatterplot or rank plot is usually the clearest check.": t(
    "Ein Streudiagramm oder Rangplot ist meist die klarste Prüfung.",
    "Un nuage de points ou un graphique des rangs est généralement la vérification la plus claire.",
    "Un diagrama de dispersión o de rangos suele ser la comprobación más clara.",
    "Un diagramma di dispersione o dei ranghi è di solito il controllo più chiaro."
  ),
  "Evaluate global fit, local residuals, parameter estimates, and theoretically plausible alternatives.": t(
    "Bewerten Sie globale Modellpassung, lokale Residuen, Parameterschätzungen und theoretisch plausible Alternativen.",
    "Évaluez l'ajustement global, les résidus locaux, les estimations des paramètres et les alternatives théoriquement plausibles.",
    "Evalúe el ajuste global, los residuos locales, las estimaciones de parámetros y alternativas teóricamente plausibles.",
    "Valutare adattamento globale, residui locali, stime dei parametri e alternative teoricamente plausibili."
  ),
  "A statistically acceptable fit does not by itself make the model substantively correct.": t(
    "Eine statistisch akzeptable Modellpassung macht das Modell allein noch nicht inhaltlich korrekt.",
    "Un ajustement statistiquement acceptable ne rend pas à lui seul le modèle substantiellement correct.",
    "Un ajuste estadísticamente aceptable no hace por sí solo que el modelo sea sustantivamente correcto.",
    "Un adattamento statisticamente accettabile non rende da solo il modello sostanzialmente corretto."
  )
};

const fallbackDetail = {
  de: (record) => `Diese Voraussetzung sollte für ${record.result_name || "die Analyse"} vor der Interpretation anhand des Studiendesigns, der Variablencodierung, der deskriptiven Statistiken und geeigneter Diagnostik geprüft werden.`,
  fr: (record) => `Cette condition doit être vérifiée pour ${record.result_name || "l'analyse"} avant l'interprétation, à partir du plan d'étude, du codage des variables, des statistiques descriptives et des diagnostics appropriés.`,
  es: (record) => `Este supuesto debe comprobarse para ${record.result_name || "el análisis"} antes de interpretar el resultado, a partir del diseño del estudio, la codificación de variables, los descriptivos y los diagnósticos apropiados.`,
  it: (record) => `Questa assunzione deve essere verificata per ${record.result_name || "l'analisi"} prima dell'interpretazione, sulla base del disegno di studio, della codifica delle variabili, delle statistiche descrittive e delle diagnostiche appropriate.`
};

function translateForPattern(sentence, language) {
  let match = sentence.match(/^For (.+), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result\.$/);
  if (match) {
    return {
      de: `Für ${match[1]} sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung, der deskriptiven Statistiken und diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.`,
      fr: `Pour ${match[1]}, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables, des statistiques descriptives et des graphiques diagnostiques avant de s'appuyer sur le résultat.`,
      es: `Para ${match[1]}, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables, los descriptivos y los gráficos diagnósticos antes de confiar en el resultado.`,
      it: `Per ${match[1]}, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili, alle statistiche descrittive e ai grafici diagnostici prima di affidarsi al risultato.`
    }[language];
  }

  match = sentence.match(/^For (.+), this condition should be checked against the research design and variable coding,? before relying on the result\.$/);
  if (match) {
    return {
      de: `Für ${match[1]} sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden, bevor das Ergebnis verwendet wird.`,
      fr: `Pour ${match[1]}, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables avant de s'appuyer sur le résultat.`,
      es: `Para ${match[1]}, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables antes de confiar en el resultado.`,
      it: `Per ${match[1]}, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili prima di affidarsi al risultato.`
    }[language];
  }

  match = sentence.match(/^For (.+), this condition should be checked against the research design and variable coding\.?$/);
  if (match) {
    return {
      de: `Für ${match[1]} sollte diese Voraussetzung anhand des Forschungsdesigns und der Variablencodierung geprüft werden.`,
      fr: `Pour ${match[1]}, cette condition doit être vérifiée à partir du plan de recherche et du codage des variables.`,
      es: `Para ${match[1]}, este supuesto debe comprobarse con el diseño de investigación y la codificación de variables.`,
      it: `Per ${match[1]}, questa assunzione deve essere verificata rispetto al disegno di ricerca e alla codifica delle variabili.`
    }[language];
  }

  match = sentence.match(/^For (.+), this condition should be checked against the research design, variable coding, descriptive statistics, before relying on the result\.$/);
  if (match) {
    return {
      de: `Für ${match[1]} sollte diese Voraussetzung anhand des Forschungsdesigns, der Variablencodierung und der deskriptiven Statistiken geprüft werden, bevor das Ergebnis verwendet wird.`,
      fr: `Pour ${match[1]}, cette condition doit être vérifiée à partir du plan de recherche, du codage des variables et des statistiques descriptives avant de s'appuyer sur le résultat.`,
      es: `Para ${match[1]}, este supuesto debe comprobarse con el diseño de investigación, la codificación de variables y los descriptivos antes de confiar en el resultado.`,
      it: `Per ${match[1]}, questa assunzione deve essere verificata rispetto al disegno di ricerca, alla codifica delle variabili e alle statistiche descrittive prima di affidarsi al risultato.`
    }[language];
  }

  match = sentence.match(/^For (.+), this condition should be checked against diagnostic plots before relying on the result\.$/);
  if (match) {
    return {
      de: `Für ${match[1]} sollte diese Voraussetzung anhand diagnostischer Plots geprüft werden, bevor das Ergebnis verwendet wird.`,
      fr: `Pour ${match[1]}, cette condition doit être vérifiée à partir des graphiques diagnostiques avant de s'appuyer sur le résultat.`,
      es: `Para ${match[1]}, este supuesto debe comprobarse con gráficos diagnósticos antes de confiar en el resultado.`,
      it: `Per ${match[1]}, questa assunzione deve essere verificata con grafici diagnostici prima di affidarsi al risultato.`
    }[language];
  }

  match = sentence.match(/^Consider the number of (.+) rather than only the total N\.$/);
  if (match) {
    return {
      de: `Berücksichtigen Sie die Anzahl von ${match[1]} statt nur das gesamte N.`,
      fr: `Tenez compte du nombre de ${match[1]} plutôt que du N total seulement.`,
      es: `Considere el número de ${match[1]} en lugar de solo el N total.`,
      it: `Considerare il numero di ${match[1]} invece del solo N totale.`
    }[language];
  }

  match = sentence.match(/^Document why (.+) were chosen\.$/);
  if (match) {
    return {
      de: `Dokumentieren Sie, warum ${match[1]} gewählt wurden.`,
      fr: `Documentez pourquoi ${match[1]} ont été choisis.`,
      es: `Documente por qué se eligieron ${match[1]}.`,
      it: `Documentare perché sono stati scelti ${match[1]}.`
    }[language];
  }

  return "";
}

function splitSentences(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function translateDetail(text, language, record) {
  if (language === "en" || !text) return text;

  const translatedSentences = splitSentences(text).map((sentence) => (
    sentenceTranslations[sentence]?.[language]
    || translateForPattern(sentence, language)
    || fallbackDetail[language](record)
  ));

  return [...new Set(translatedSentences)].join(" ");
}

const source = fs.readFileSync(sourcePath, "utf8");
const rows = parseDelimited(source);
const headers = rows.shift().map(clean);
const details = Object.fromEntries(targetLanguages.map((language) => [language, {}]));

for (const row of rows) {
  const record = Object.fromEntries(headers.map((header, index) => [header, clean(row[index])]));
  const status = clean(record.review_status).toLowerCase();
  if (!record.result_id || !record.assumption_id || !status.startsWith("ok")) continue;

  const detail = clean(record.proposed_revision) || clean(record.current_detail);
  if (!detail) continue;

  for (const language of targetLanguages) {
    if (!details[language][record.result_id]) details[language][record.result_id] = [];
    details[language][record.result_id].push({
      id: record.assumption_id,
      label: record.short_assumption,
      detail: translateDetail(detail, language, record),
      howToCheck: translateDetail(clean(record.how_to_check), language, record),
      whatToReport: translateDetail(clean(record.what_to_report), language, record)
    });
  }
}

const output = `window.assumptionDetails = ${JSON.stringify(details, null, 2)};\n`;
fs.writeFileSync(outputPath, output);

const assumptionCount = Object.values(details.en).reduce((total, items) => total + items.length, 0);
console.log(`Wrote ${assumptionCount} assumption details in ${targetLanguages.length} languages to ${outputPath}.`);
