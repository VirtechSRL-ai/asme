// ─────────────────────────────────────────────────────────────────────────────
// CONTENUTI DEL SITO
// Tutti i testi stanno qui. Le sezioni leggono da questo file: sostituendo
// questi valori con i contenuti reali si aggiorna tutto il sito.
// I testi attuali sono segnaposto.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  nome: "ASME",
  payoff: "Titolo principale del sito",
  descrizione:
    "Descrizione breve dell'azienda, usata per il tag description e per le anteprime sui social.",
  url: "https://www.asme.it",

  contatti: {
    email: "info@asme.it",
    emailSecondaria: "hello@asme.it",
    telefono: "+39 000 000 0000",
    linkedin: "#",
  },

  nav: [
    { etichetta: "Servizi", href: "#servizi" },
    { etichetta: "Piattaforma", href: "#piattaforma" },
    { etichetta: "Casi studio", href: "#casi-studio" },
    { etichetta: "Chi siamo", href: "#team" },
    { etichetta: "Prezzi", href: "#prezzi" },
  ],
  ctaNav: { etichetta: "Contattaci", href: "#contatti" },

  hero: {
    titolo: "Il titolo principale, breve, diretto e in tre parti.",
    sottotitolo:
      "Una frase di supporto che spiega in concreto cosa fate e per chi, senza giri di parole. Due righe sono la lunghezza giusta.",
    ctaPrimaria: { etichetta: "Azione principale", href: "#contatti" },
    ctaSecondaria: { etichetta: "Azione secondaria", href: "#catalogo" },
    valutazione: { punteggio: "4,9", fonte: "su 120 recensioni" },
    // Dati del pannello illustrativo accanto al titolo
    pannello: {
      titolo: "Avanzamento",
      percentuale: 88,
      completati: { valore: "129", etichetta: "Completati", quota: "88%" },
      inCorso: { valore: "9", etichetta: "In corso", quota: "12%" },
      filtri: ["Tutti", "Categoria A", "Categoria B", "Categoria C"],
      elenco: {
        titolo: "Prossime attività",
        voci: [
          { nome: "Prima voce dell'elenco", stato: "Da pianificare", data: "31/07/26" },
          { nome: "Seconda voce dell'elenco", stato: "In corso", data: "12/08/26" },
          { nome: "Terza voce dell'elenco", stato: "Completata", data: "04/09/26" },
        ],
        link: "Vedi tutte",
      },
      messaggio: { testo: "«Tutto pronto, ci vediamo mercoledì.»", autore: "Sara" },
    },
  },

  trustBar: {
    titolo: "Più di 1000 aziende hanno già scelto ASME",
    loghi: ["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5", "Cliente 6"],
  },

  pilastri: {
    eyebrow: "Primo, secondo, terzo",
    titolo: "La frase che riassume il percorso. A ogni passo, ci siamo.",
    testo:
      "Una riga che chiarisce la promessa principale, quella che distingue il vostro approccio.",
    blocchi: [
      {
        tag: "PRIMO",
        titolo: "Il beneficio del primo pilastro, in una frase.",
        testo:
          "Due o tre righe che spiegano come ci si arriva, cosa fate voi e cosa resta al cliente. Il tono è concreto: niente promesse generiche, solo passaggi riconoscibili.",
        cta: { etichetta: "Scopri di più", href: "#contatti" },
        punti: [
          "Prima fase del processo",
          "Seconda fase del processo",
          "Terza fase del processo",
          "Quarta fase del processo",
          "Verifica finale",
          "Risultato",
        ],
      },
      {
        tag: "SECONDO",
        titolo: "Il beneficio del secondo pilastro, in una frase.",
        testo:
          "Due o tre righe sul mantenimento nel tempo: cosa viene monitorato, cosa non va più seguito a mano e perché il cliente sa sempre a che punto è.",
        cta: { etichetta: "Scopri di più", href: "#piattaforma" },
        punti: [
          "Scadenza entro 7 giorni",
          "Verifica periodica",
          "Rinnovo annuale",
        ],
      },
      {
        tag: "TERZO",
        titolo: "Il beneficio del terzo pilastro, in una frase.",
        testo:
          "Due o tre righe sul valore che si sblocca alla fine: nuovi mercati, contratti più semplici, accesso a opportunità prima precluse.",
        cta: { etichetta: "Scopri di più", href: "#contatti" },
        punti: ["Categoria A", "Categoria B", "Categoria C"],
      },
    ],
  },

  team: {
    eyebrow: "Il team",
    titolo: "Siamo un gruppo di persone che sa come lavora un'azienda come la tua.",
    testo:
      "Una frase sul vostro approccio: da dove partite e perché questo cambia il risultato.",
    persone: [
      {
        nome: "Nome Cognome",
        ruolo: "Ruolo in azienda",
        esperienza: "+4 anni di esperienza",
        numero: "90+ progetti",
        badge: "Specializzazione",
      },
      {
        nome: "Nome Cognome",
        ruolo: "Ruolo in azienda",
        esperienza: "+4 anni di esperienza",
        numero: "80+ progetti",
        badge: "Specializzazione",
      },
      {
        nome: "Nome Cognome",
        ruolo: "Ruolo in azienda",
        esperienza: "2 anni di esperienza",
        numero: "40+ progetti",
        badge: "Specializzazione",
      },
    ],
    cta: { etichetta: "Conosci tutto il team", href: "#contatti" },
  },

  piattaforma: {
    eyebrow: "La piattaforma",
    titolo: "Tutta la nostra esperienza in un unico strumento.",
    testo:
      "Una frase su cosa automatizza lo strumento e cosa resta in mano a voi, più il vantaggio per il cliente.",
    cta: { etichetta: "Scopri la piattaforma", href: "#contatti" },
    menu: [
      {
        gruppo: "PANORAMICA",
        voci: ["Dashboard", "Documenti"],
      },
      {
        gruppo: "AREA DI LAVORO",
        voci: ["Procedure", "Registro", "Verifiche"],
      },
      {
        gruppo: "ORGANIZZAZIONE",
        voci: ["Risorse", "Fornitori", "Persone"],
      },
    ],
    saluto: "Ciao!",
    ricerca: "Cerca documenti, procedure, persone…",
    criticita: { valore: "3", etichetta: "Criticità", azione: "Risolvi" },
    attivita: {
      titolo: "Da completare",
      colonne: ["Attività", "Scadenza", "Azione"],
      voci: [
        { nome: "Prima attività da completare", scadenza: "Scade in 7 giorni", stato: "aperta" },
        { nome: "Seconda attività da completare", scadenza: "Scade in 3 giorni", stato: "aperta" },
        { nome: "Terza attività, già conclusa", scadenza: "2 giorni fa", stato: "chiusa" },
      ],
    },
  },

  pubblico: {
    eyebrow: "Per chi è",
    titolo: "La soluzione pensata per le aziende come la tua.",
    testo:
      "Due righe che descrivono con precisione il cliente ideale: dimensione, situazione di partenza e problema che sente davvero.",
    cta: { etichetta: "Scopri i piani", href: "#prezzi" },
  },

  metriche: {
    eyebrow: "Il metodo",
    titolo: "Così arriviamo al risultato.",
    voci: [
      {
        valore: "80%",
        etichetta: "automatizzato",
        testo:
          "Una riga che spiega cosa viene generato automaticamente e perché non si perde il controllo.",
      },
      {
        valore: "5×",
        etichetta: "più veloce",
        testo:
          "Una riga su tempi e burocrazia, a parità di rigore dall'inizio alla fine.",
      },
      {
        valore: "100%",
        etichetta: "successo",
        testo:
          "Una riga sulla preparazione: nessuna sorpresa il giorno della verifica.",
      },
    ],
  },

  catalogo: {
    eyebrow: "Per servizio",
    titolo: "Tutto quello che ti serve, in un unico posto.",
    testo:
      "Due righe che inquadrano l'ampiezza dell'offerta, dal primo all'ultimo ambito coperto.",
    voci: [
      { categoria: "Categoria A", codice: "Servizio 01", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria B", codice: "Servizio 02", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria C", codice: "Servizio 03", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria B", codice: "Servizio 04", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria C", codice: "Servizio 05", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria B", codice: "Servizio 06", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria C", codice: "Servizio 07", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria A", codice: "Servizio 08", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria A", codice: "Servizio 09", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria A", codice: "Servizio 10", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria B", codice: "Servizio 11", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
      { categoria: "Categoria C", codice: "Servizio 12", testo: "Una o due righe che descrivono il servizio e a cosa serve." },
    ],
    azione: "Scopri",
  },

  settori: {
    eyebrow: "Per settore",
    titolo: "Il tuo settore. Le tue regole.",
    voci: [
      { nome: "Manifatturiero", testo: "PMI manifatturiere e produzione industriale." },
      { nome: "Energia", testo: "Impianti, utility e produzione di energia." },
      { nome: "Edilizia", testo: "Imprese edili, general contractor, impiantisti." },
      { nome: "Logistica e trasporti", testo: "Spedizionieri, magazzini e ultimo miglio." },
      { nome: "Servizi professionali", testo: "Studi, agenzie, consulenza e BPO." },
      { nome: "Alimentare", testo: "Produzione, trasformazione e distribuzione." },
    ],
  },

  percorso: {
    eyebrow: "Il tuo team dedicato",
    titolo: "Un percorso che non riparte mai da zero.",
    testo: "Dalla prima chiamata fino al rinnovo: sai sempre chi hai davanti.",
    fasi: [
      {
        persona: "Nome",
        titolo: "Ascoltiamo e ti guidiamo verso la scelta giusta",
        testo:
          "Due righe sulla prima fase: chi incontra il cliente, cosa si capisce in quella chiamata e come si decide la direzione.",
      },
      {
        persona: "Nome",
        titolo: "Ci occupiamo di tutti gli aspetti tecnici",
        testo:
          "Due righe sulla fase centrale: cosa gestisce il team, quali passaggi segue e fino a dove vi spingete.",
      },
      {
        persona: "Nome",
        titolo: "Ti seguiamo anche dopo la consegna",
        testo:
          "Due righe sulla fase finale: mantenimento, aggiornamenti e come il risultato diventa un vantaggio nel tempo.",
      },
    ],
    cta: { etichetta: "Conosci il team", href: "#team" },
  },

  partner: {
    eyebrow: "Partner",
    titolo: "Non scegliamo i nostri partner. Li selezioniamo.",
    testo:
      "Una frase sul criterio con cui selezionate i partner e su cosa portano nei progetti.",
    voci: [
      { titolo: "Prima categoria di partner", testo: "Una riga su cosa portano nei progetti." },
      { titolo: "Seconda categoria di partner", testo: "Una riga su cosa portano nei progetti." },
      { titolo: "Terza categoria di partner", testo: "Una riga su cosa portano nei progetti." },
    ],
    cta: { etichetta: "Diventa partner", href: "#contatti" },
  },

  casiStudio: {
    eyebrow: "Casi studio",
    titolo: "La prossima storia potrebbe essere la tua.",
    testo: "Leggi le esperienze delle aziende che hanno lavorato con noi.",
    voci: [
      { cliente: "Nome cliente", settore: "Settore", risultato: "Il risultato in una riga, con un numero se possibile." },
      { cliente: "Nome cliente", settore: "Settore", risultato: "Il risultato in una riga, con un numero se possibile." },
      { cliente: "Nome cliente", settore: "Settore", risultato: "Il risultato in una riga, con un numero se possibile." },
    ],
    cta: { etichetta: "Tutte le storie", href: "#contatti" },
  },

  recensioni: {
    eyebrow: "Recensioni verificate",
    titolo: "Soddisfatti, e si vede.",
    testo:
      "Due righe che introducono le recensioni e rimandano alla pagina dove si possono leggere tutte.",
    voci: [
      {
        testo:
          "La citazione del cliente, tre o quattro righe. Funziona meglio se racconta un ostacolo concreto e come è stato superato, invece di fare un complimento generico.",
        iniziali: "MS",
        nome: "Nome Cognome",
        ruolo: "Ruolo, Azienda",
      },
      {
        testo:
          "La citazione del cliente, tre o quattro righe. Funziona meglio se racconta un ostacolo concreto e come è stato superato, invece di fare un complimento generico.",
        iniziali: "RF",
        nome: "Nome Cognome",
        ruolo: "Ruolo, Azienda",
      },
      {
        testo:
          "La citazione del cliente, tre o quattro righe. Funziona meglio se racconta un ostacolo concreto e come è stato superato, invece di fare un complimento generico.",
        iniziali: "AT",
        nome: "Nome Cognome",
        ruolo: "Ruolo, Azienda",
      },
    ],
  },

  banda: {
    eyebrow: "Inizia da qui",
    titolo: "Basta perdere tempo. Parliamo del tuo progetto.",
    testo:
      "Due righe che rimuovono l'ultimo attrito e dicono esattamente cosa succede dopo il clic.",
    ctaPrimaria: { etichetta: "Azione principale", href: "#contatti" },
    ctaSecondaria: { etichetta: "Richiedi una consulenza", href: "#contatti" },
  },

  risorse: {
    eyebrow: "Risorse",
    titolo: "Proviamo a spiegare le cose in modo chiaro.",
    testo: "Guide scritte e aggiornate da noi.",
    voci: [
      {
        tag: "Categoria",
        titolo: "Il titolo dell'articolo, specifico e con una promessa chiara",
        testo: "Due righe di anteprima che dicono cosa impara chi legge.",
      },
      {
        tag: "Categoria",
        titolo: "Il titolo dell'articolo, specifico e con una promessa chiara",
        testo: "Due righe di anteprima che dicono cosa impara chi legge.",
      },
      {
        tag: "Categoria",
        titolo: "Il titolo dell'articolo, specifico e con una promessa chiara",
        testo: "Due righe di anteprima che dicono cosa impara chi legge.",
      },
    ],
    cta: { etichetta: "Scopri altre risorse", href: "#contatti" },
  },

  footer: {
    claim:
      "La frase di chiusura che riassume il sito in una riga e mezza, con il beneficio principale.",
    colonne: [
      {
        titolo: "SERVIZI",
        voci: ["Servizio 01", "Servizio 02", "Servizio 03", "Servizio 04", "Tutti"],
      },
      {
        titolo: "SETTORI",
        voci: [
          "Manifatturiero",
          "Energia",
          "Edilizia",
          "Logistica e trasporti",
          "Servizi professionali",
          "Alimentare",
        ],
      },
      {
        titolo: "AZIENDA",
        voci: ["Team", "Chi siamo", "Lavora con noi", "Press", "Partnership"],
      },
      {
        titolo: "RISORSE",
        voci: ["Guide", "Casi studio", "Webinar"],
      },
    ],
    ctaTitolo: "RICHIEDI INFORMAZIONI",
    ctaTesto: "Ti rispondiamo entro un giorno lavorativo.",
    cta: { etichetta: "Scopri i prezzi", href: "#prezzi" },
    legale:
      "ASME S.r.l., P. IVA 00000000000, Via Esempio 1, Milano — PEC: asme@pec.it, Capitale sociale: €10.000,00",
    link: ["Privacy", "Cookie", "Contattaci"],
  },
} as const;
