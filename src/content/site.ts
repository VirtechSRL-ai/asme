// ─────────────────────────────────────────────────────────────────────────────
// CONTENUTI DELLA LANDING
// Testi dal brief "Landing monopagina ASME / PED" (Virtech).
// Le sezioni leggono da qui: per modificare un testo basta cambiarlo in questo
// file, senza toccare i componenti.
//
// Le note di produzione del brief (quali screenshot inserire, cosa validare
// prima del go-live) non stanno qui perché non sono testo da pubblicare:
// si trovano nel README.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  nome: "Virtech",
  payoff: "Tracciabilità dei materiali per processi ASME e PED",
  descrizione:
    "Virtech collega le unità prodotte ai componenti, ai materiali e ai certificati dei fornitori, evidenzia le informazioni da completare e aiuta a preparare la documentazione di commessa.",
  url: "https://www.virtech.it",

  contatti: {
    email: "info@virtech.it",
    telefono: "+39 000 000 0000",
    linkedin: "#",
  },

  nav: [
    { etichetta: "Esperienza", href: "#esperienza" },
    { etichetta: "Perché serve", href: "#beneficio" },
    { etichetta: "Prodotto", href: "#prodotto" },
    { etichetta: "Metodo", href: "#metodo" },
    { etichetta: "ASME e PED", href: "#ambiti" },
  ],
  ctaNav: { etichetta: "Richiedi una demo", href: "#demo" },

  // 01 — HERO
  hero: {
    eyebrow: "Tracciabilità materiali",
    titolo: "La tracciabilità dei materiali, dalla distinta al fascicolo tecnico.",
    testo:
      "Virtech collega le unità prodotte ai componenti, ai materiali e ai certificati dei fornitori. Evidenzia le informazioni da completare e aiuta il tuo team a preparare la documentazione di commessa per processi ASME e, dopo la definizione dei requisiti, PED.",
    ctaPrimaria: { etichetta: "Richiedi una demo", href: "#demo" },
    ctaSecondaria: { etichetta: "Scopri come funziona", href: "#metodo" },
    // Catena di tracciabilità mostrata accanto al titolo.
    catena: {
      etichetta: "Il percorso di una singola unità",
      livelli: [
        { nome: "Unità prodotta", voci: ["Identificativo", "Commessa"] },
        { nome: "Componenti", voci: ["Distinta", "Numeri seriali"] },
        { nome: "Materiali e certificati", voci: ["Certificato", "Fornitura", "Marcatura"] },
      ],
    },
  },

  // 02 — PROVA / ESPERIENZA REALE
  esperienza: {
    eyebrow: "Esperienza reale",
    titolo: "L'esperienza W&H: tracciabilità per camere di sterilizzatori.",
    testo:
      "Virtech ha sviluppato per W&H Sterilization Italia un flusso dedicato alle camere degli sterilizzatori. Il sistema organizza dati di lotto e unità, componenti, certificati dei materiali, controlli di completezza e documenti da sottoporre a revisione. È un esempio concreto del metodo che possiamo studiare per altri processi produttivi.",
    didascalia:
      "Esempio di flusso applicativo W&H. Dati mostrati a scopo dimostrativo, previa autorizzazione.",
    cta: { etichetta: "Mostraci una tua commessa", href: "#demo" },
    // Rappresentazione del lotto: tante unità, alcune messe in evidenza.
    lotto: {
      etichetta: "Lotto",
      totale: 24,
      evidenziate: [4, 11, 18],
      collegamenti: ["Componenti", "Certificati dei materiali", "Controlli di completezza"],
    },
  },

  // 03 — BENEFICIO / CONTESTO
  beneficio: {
    eyebrow: "Perché serve",
    titolo: "Ogni componente ha una storia. Ora puoi seguirla.",
    testo:
      "Distinte, numeri seriali, certificati dei fornitori e documenti di produzione spesso vivono in file e passaggi diversi. Quando serve verificare una specifica unità, il team deve ricostruire i collegamenti e capire che cosa manca.",
    microMessaggi: [
      { icona: "trace", titolo: "Risalire", testo: "Dalla macchina al componente e al certificato." },
      { icona: "inspect", titolo: "Controllare", testo: "Individuare dati o allegati ancora da verificare." },
      { icona: "dossier", titolo: "Preparare", testo: "Raccogliere evidenze per la revisione del fascicolo." },
    ],
    diagramma: {
      unita: { etichetta: "Unità", esempio: "UN-0000" },
      componenti: {
        etichetta: "Componenti",
        voci: ["Componente A", "Componente B", "Componente C"],
      },
      documenti: {
        etichetta: "Materiali e certificati",
        voci: ["Certificato materiale", "Riferimento di fornitura", "Documento di produzione"],
      },
      nota: "Schema di esempio. I codici mostrati sono fittizi.",
    },
    cta: { etichetta: "Parliamo del tuo processo", href: "#demo" },
  },

  // 04 — PRODOTTO
  prodotto: {
    eyebrow: "Il prodotto",
    titolo: "Da ogni unità, risali ai suoi materiali.",
    testo:
      "Una vista per la singola apparecchiatura riunisce componenti, riferimenti di materiale, marcature e certificati disponibili. La libreria documentale permette di ritrovare un certificato e vedere dove viene utilizzato. Le informazioni estratte dai PDF restano da confrontare con l'originale e confermare.",
    // I tre punti del percorso, dall'apparecchiatura al documento.
    percorso: [
      { etichetta: "Unità", dettagli: ["Apparecchiatura", "Commessa"] },
      { etichetta: "Riga componente", dettagli: ["Materiale", "Marcatura"] },
      { etichetta: "Certificato", dettagli: ["Documento", "Dove è usato"] },
    ],
    card: [
      { titolo: "Unità e componenti", testo: "Il contesto della produzione." },
      { titolo: "Certificati consultabili", testo: "Documento e utilizzo." },
      { titolo: "Verifica umana", testo: "Dati estratti confrontati con il PDF." },
    ],
    cta: { etichetta: "Esplora una demo guidata", href: "#demo" },
  },

  // 05 — METODO
  metodo: {
    eyebrow: "Il metodo",
    titolo: "Importa. Collega. Verifica.",
    testo:
      "Tre passaggi, sempre nello stesso ordine, per arrivare ai documenti con le evidenze già a posto.",
    passaggi: [
      {
        numero: "01",
        icona: "import",
        titolo: "Parti dai dati di produzione",
        testo: "La distinta e gli identificativi delle unità danno struttura al lavoro.",
      },
      {
        numero: "02",
        icona: "link",
        titolo: "Associa le evidenze",
        testo:
          "Certificati dei materiali e riferimenti di fornitura vengono collegati ai componenti pertinenti.",
      },
      {
        numero: "03",
        icona: "check",
        titolo: "Controlla prima di produrre i documenti",
        testo:
          "Il sistema segnala le lacune e supporta la preparazione dei report per la verifica del team.",
      },
    ],
    cta: { etichetta: "Vedi il flusso in demo", href: "#demo" },
  },

  // 06 — AMBITI
  ambiti: {
    eyebrow: "ASME e PED",
    titolo: "La tracciabilità segue il tuo percorso di conformità.",
    fascia: ["Dati", "Materiali", "Evidenze"],
    colonne: [
      {
        sigla: "ASME",
        titolo: "Un flusso già realizzato",
        testo:
          "L'esperienza W&H mostra come organizzare il legame fra singola unità, componenti e documenti nel proprio flusso ASME.",
      },
      {
        sigla: "PED",
        titolo: "Un percorso da configurare",
        testo:
          "Per chi opera nell'ambito della direttiva europea, partiamo da una commessa reale per definire dati, controlli e documenti da gestire. Il percorso va configurato sui requisiti applicabili al prodotto e al fabbricante.",
      },
    ],
    cta: { etichetta: "Valutiamo il tuo caso", href: "#demo" },
  },

  // 07 — CONVERSIONE
  demo: {
    eyebrow: "Parliamone",
    titolo: "Vediamo insieme come tracciate oggi materiali e documenti.",
    testo:
      "In una breve demo ti mostriamo il flusso realizzato da Virtech e ragioniamo su una tua commessa: quali componenti tracciare, quali certificati raccogliere e quali verifiche servono prima del fascicolo.",
    microcopy: "Senza impegno",
    punti: [
      "Partiamo da una tua commessa reale",
      "Nessuna preparazione richiesta da parte tua",
      "Ti diciamo con chiarezza cosa è già possibile e cosa no",
    ],
    invia: "Richiedi una demo",
    campi: {
      nome: { etichetta: "Nome e cognome" },
      azienda: { etichetta: "Azienda" },
      email: { etichetta: "Email di lavoro" },
      produzione: {
        etichetta: "Tipo di produzione",
        opzioni: [
          "Apparecchiature in pressione",
          "Sterilizzatori e dispositivi medici",
          "Carpenteria e saldature",
          "Altro",
        ],
      },
      messaggio: { etichetta: "Messaggio (facoltativo)" },
    },
    privacy:
      "Inviando il modulo accetti il trattamento dei dati secondo l'informativa privacy di Virtech.",
    privacyLink: { etichetta: "Informativa privacy", href: "#" },
  },

  footer: {
    claim:
      "Tracciabilità dei materiali e preparazione della documentazione tecnica per produttori di apparecchiature in pressione.",
    legale: "Virtech S.r.l. — P. IVA 00000000000",
    colonne: [
      {
        titolo: "Il sito",
        voci: [
          { etichetta: "Esperienza", href: "#esperienza" },
          { etichetta: "Perché serve", href: "#beneficio" },
          { etichetta: "Prodotto", href: "#prodotto" },
          { etichetta: "Metodo", href: "#metodo" },
          { etichetta: "ASME e PED", href: "#ambiti" },
        ],
      },
    ],
    link: [
      { etichetta: "Informativa privacy", href: "#" },
      { etichetta: "Cookie", href: "#" },
    ],
  },
} as const;
