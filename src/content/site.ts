// ─────────────────────────────────────────────────────────────────────────────
// CONTENUTI DELLA LANDING
// Testi presi dal brief "Landing monopagina ASME / PED" (Virtech).
// Le sezioni leggono da qui: per modificare un testo basta cambiarlo in questo
// file, senza toccare i componenti.
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

  // 01 — HERO / PRIMA SCHERMATA
  hero: {
    eyebrow: "Tracciabilità materiali · ASME / PED",
    titolo: "La tracciabilità dei materiali, dalla distinta al fascicolo tecnico.",
    testo:
      "Virtech collega le unità prodotte ai componenti, ai materiali e ai certificati dei fornitori. Evidenzia le informazioni da completare e aiuta il tuo team a preparare la documentazione di commessa per processi ASME e, dopo la definizione dei requisiti, PED.",
    ctaPrimaria: { etichetta: "Richiedi una demo", href: "#demo" },
    ctaSecondaria: { etichetta: "Scopri come funziona", href: "#metodo" },
    screenshot: {
      titolo: "Screenshot reale da inserire",
      testo:
        "Dashboard W&H, oppure vista di una camera con componenti e stato dei documenti. Evitare numeri di commessa, clienti o fornitori leggibili.",
    },
  },

  // 02 — PROVA / ESPERIENZA REALE
  esperienza: {
    eyebrow: "Prova · Esperienza reale",
    titolo: "L'esperienza W&H: tracciabilità per camere di sterilizzatori.",
    testo:
      "Virtech ha sviluppato per W&H Sterilization Italia un flusso dedicato alle camere degli sterilizzatori. Il sistema organizza dati di lotto e unità, componenti, certificati dei materiali, controlli di completezza e documenti da sottoporre a revisione. È un esempio concreto del metodo che possiamo studiare per altri processi produttivi.",
    didascalia:
      "Esempio di flusso applicativo W&H. Dati mostrati a scopo dimostrativo, previa autorizzazione.",
    cta: { etichetta: "Mostraci una tua commessa", href: "#demo" },
    screenshot: {
      titolo: "Screenshot reale da inserire",
      testo:
        "Schermata del lotto demo W&H: percorso guidato, certificati e controllo di completezza. Oscurare identificativi e dati riservati.",
    },
  },

  // 03 — BENEFICIO / CONTESTO
  beneficio: {
    eyebrow: "Beneficio · Contesto",
    titolo: "Ogni componente ha una storia. Ora puoi seguirla.",
    testo:
      "Distinte, numeri seriali, certificati dei fornitori e documenti di produzione spesso vivono in file e passaggi diversi. Quando serve verificare una specifica unità, il team deve ricostruire i collegamenti e capire che cosa manca.",
    microMessaggi: [
      { titolo: "Risalire", testo: "Dalla macchina al componente e al certificato." },
      { titolo: "Controllare", testo: "Individuare dati o allegati ancora da verificare." },
      { titolo: "Preparare", testo: "Raccogliere evidenze per la revisione del fascicolo." },
    ],
    // Diagramma editoriale: unità → componenti → materiali/certificati.
    diagramma: {
      unita: { etichetta: "Unità", esempio: "UN-0000 (codice di esempio)" },
      componenti: {
        etichetta: "Componenti",
        voci: ["Componente A", "Componente B", "Componente C"],
      },
      documenti: {
        etichetta: "Materiali e certificati",
        voci: ["Certificato materiale", "Riferimento di fornitura", "Documento di produzione"],
      },
    },
    cta: { etichetta: "Parliamo del tuo processo", href: "#demo" },
  },

  // 04 — PRODOTTO / PROVA VISIVA
  prodotto: {
    eyebrow: "Prodotto · Prova visiva",
    titolo: "Da ogni unità, risali ai suoi materiali.",
    testo:
      "Una vista per la singola apparecchiatura riunisce componenti, riferimenti di materiale, marcature e certificati disponibili. La libreria documentale permette di ritrovare un certificato e vedere dove viene utilizzato. Le informazioni estratte dai PDF restano da confrontare con l'originale e confermare.",
    card: [
      { titolo: "Unità e componenti", testo: "Il contesto della produzione." },
      { titolo: "Certificati consultabili", testo: "Documento e utilizzo." },
      { titolo: "Verifica umana", testo: "Dati estratti confrontati con il PDF." },
    ],
    cta: { etichetta: "Esplora una demo guidata", href: "#demo" },
    screenshot: {
      titolo: "Screenshot reale da inserire",
      testo:
        "Vista produzione W&H di una camera più il dettaglio della libreria certificati, anonimizzati.",
      callout: ["Unità", "Riga componente", "Certificato"],
    },
  },

  // 05 — METODO / PERCORSO
  metodo: {
    eyebrow: "Metodo · Percorso",
    titolo: "Importa. Collega. Verifica.",
    passaggi: [
      {
        numero: "01",
        titolo: "Parti dai dati di produzione",
        testo: "La distinta e gli identificativi delle unità danno struttura al lavoro.",
        screenshot: "Import Excel / anteprima.",
      },
      {
        numero: "02",
        titolo: "Associa le evidenze",
        testo:
          "Certificati dei materiali e riferimenti di fornitura vengono collegati ai componenti pertinenti.",
        screenshot: "Vista componente e certificato associato.",
      },
      {
        numero: "03",
        titolo: "Controlla prima di produrre i documenti",
        testo:
          "Il sistema segnala le lacune e supporta la preparazione dei report per la verifica del team.",
        screenshot: "Controllo di completezza.",
      },
    ],
    cta: { etichetta: "Vedi il flusso in demo", href: "#demo" },
  },

  // 06 — AMBITI / CHIAREZZA NORMATIVA
  ambiti: {
    eyebrow: "Ambiti · Chiarezza normativa",
    titolo: "La tracciabilità segue il tuo percorso di conformità.",
    fascia: ["Dati", "Materiali", "Evidenze"],
    colonne: [
      {
        sigla: "ASME",
        testo:
          "L'esperienza W&H mostra come organizzare il legame fra singola unità, componenti e documenti nel proprio flusso ASME.",
        nota: "Screenshot reale W&H da inserire.",
      },
      {
        sigla: "PED",
        testo:
          "Per chi opera nell'ambito della direttiva europea, partiamo da una commessa reale per definire dati, controlli e documenti da gestire. Il percorso va configurato sui requisiti applicabili al prodotto e al fabbricante.",
        nota: "Placeholder illustrativo «flusso da validare», senza schermate fittizie.",
      },
    ],
    cta: { etichetta: "Valutiamo il tuo caso", href: "#demo" },
  },

  // 07 — CONVERSIONE / CHIUSURA
  demo: {
    eyebrow: "Conversione",
    titolo: "Vediamo insieme come tracciate oggi materiali e documenti.",
    testo:
      "In una breve demo ti mostriamo il flusso realizzato da Virtech e ragioniamo su una tua commessa: quali componenti tracciare, quali certificati raccogliere e quali verifiche servono prima del fascicolo.",
    microcopy: "Senza impegno.",
    invia: "Richiedi una demo",
    campi: {
      nome: { etichetta: "Nome e cognome", richiesto: true },
      azienda: { etichetta: "Azienda", richiesto: true },
      email: { etichetta: "Email di lavoro", richiesto: true },
      produzione: {
        etichetta: "Tipo di produzione",
        richiesto: true,
        opzioni: [
          "Apparecchiature in pressione",
          "Sterilizzatori e dispositivi medici",
          "Carpenteria e saldature",
          "Altro",
        ],
      },
      messaggio: { etichetta: "Messaggio (facoltativo)", richiesto: false },
    },
    privacy:
      "Inviando il modulo accetti il trattamento dei dati secondo l'informativa privacy di Virtech.",
    privacyLink: { etichetta: "Informativa privacy", href: "#" },
  },

  footer: {
    claim:
      "Tracciabilità dei materiali e preparazione della documentazione tecnica per produttori di apparecchiature in pressione.",
    legale: "Virtech S.r.l. — P. IVA 00000000000",
    link: [
      { etichetta: "Informativa privacy", href: "#" },
      { etichetta: "Cookie", href: "#" },
      { etichetta: "Contatti", href: "#demo" },
    ],
  },
} as const;
