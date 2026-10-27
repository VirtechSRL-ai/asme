// ─────────────────────────────────────────────────────────────────────────────
// CONTENUTI DEL SITO
// Tutti i testi stanno qui: per cambiare una frase non serve toccare i
// componenti.
//
// I blocchi `cruscotto` e `flusso` alimentano le dashboard illustrative. Sono
// dati dimostrativi, non statistiche reali di Tracciamy: codici fittizi ed
// etichette qualitative, pensati per essere sostituiti con dati o screenshot
// veri. L'unico numero commerciale è il 90% della hero, riportato come claim
// senza prove a supporto.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  nome: "Tracciamy",
  azienda: "Virtech",
  payoff: "Tracciabilità dei materiali, dalla distinta al fascicolo tecnico",
  descrizione:
    "Tracciamy collega distinte, componenti e certificati, segnala ciò che manca e prepara la documentazione tecnica per chi produce apparecchiature in pressione.",
  url: "https://www.tracciamy.it",

  contatti: {
    email: "info@virtechsrl.com",
    telefono: "+39 333 866 5089",
    telefonoLink: "+393338665089",
    sede: "Erbusco, Brescia, Italia",
    sito: "https://www.virtechsrl.com/",
    sitoEtichetta: "virtechsrl.com",
  },

  nav: [
    { etichetta: "Ottieni", href: "#ottieni" },
    { etichetta: "Mantieni", href: "#mantieni" },
    { etichetta: "L'applicativo", href: "#applicativo" },
  ],

  azioni: {
    contatta: "Contattaci",
    cosaOttieni: "Cosa ottieni",
  },

  notaDemo: "Dati dimostrativi, non statistiche reali.",

  // ── 1. HERO ───────────────────────────────────────────────────────────────
  hero: {
    etichetta: "Per chi produce apparecchiature in pressione.",
    // Le due righe sono un unico titolo: stessa dimensione, stesso peso.
    titoloRiga1: "Tracciabilità dei materiali",
    titoloRiga2: "dalla distinta al fascicolo tecnico.",
    testo:
      "Riduciamo del 90% il tempo necessario a preparare la documentazione di tracciabilità.",
    // Dashboard sintetica: due sole tessere, come nella reference.
    cruscotto: {
      titolo: "Documenti",
      filtri: ["Tutti", "Distinte", "Certificati"],
      tessere: [
        { quota: 96, valore: "96", etichetta: "Collegati", tono: "verde" },
        { quota: 4, valore: "4", etichetta: "Da completare", tono: "neutro" },
      ],
    },
    // Seconda dashboard, più discreta: una sola unità.
    dettaglio: {
      titolo: "Unità",
      riferimento: "UN-0016",
      campi: [
        { etichetta: "Certificati", valore: "6 su 6" },
        { etichetta: "Distinta", valore: "Completa" },
      ],
      stato: "Pronta per la verifica",
    },
  },

  // ── 2. FASCIA DI TRANSIZIONE ──────────────────────────────────────────────
  fascia: {
    // Ripetuto nella banda scorrevole fra hero e sezione successiva.
    parole: [
      "Distinte",
      "Componenti",
      "Materiali",
      "Certificati",
      "Fascicolo tecnico",
      "Unità prodotte",
    ],
  },

  // ── 3. OTTIENI ────────────────────────────────────────────────────────────
  ottieni: {
    etichetta: "Ottieni",
    titolo: "Ottieni il certificato in pochissimi minuti.",
    testo:
      "L'applicativo collega distinte, componenti e certificati, segnala ciò che manca e prepara la documentazione per la verifica finale.",
    cruscotto: {
      titolo: "Certificato tecnico",
      riferimento: "UN-0016",
      passi: [
        { numero: "01", nome: "Distinte e componenti", stato: "fatto" },
        { numero: "02", nome: "Certificati", stato: "fatto" },
        {
          numero: "03",
          nome: "Preparazione della documentazione",
          stato: "corso",
          avanzamento: 60,
        },
        { numero: "04", nome: "Verifica finale", stato: "attesa" },
      ],
    },
  },

  // ── 4. MANTIENI ───────────────────────────────────────────────────────────
  mantieni: {
    etichetta: "Mantieni",
    titolo: "Ogni componente e certificato sotto controllo.",
    testo:
      "Distinte, componenti e certificati restano collegati alle singole unità: il tuo team vede quali documenti sono disponibili e quali informazioni mancano.",
    // Un solo messaggio: materiali e documenti → Tracciamy → controllo del team
    flusso: {
      ingresso: { titolo: "Materiali e documenti", voci: ["Distinte", "Componenti", "Certificati"] },
      centro: { titolo: "Tracciamy", dettaglio: "Collega tutto all'unità" },
      uscita: {
        titolo: "Controllo finale del team",
        disponibili: "5 su 6 disponibili",
        mancanti: "1 da completare",
      },
    },
  },

  // ── 5. L'APPLICATIVO TRACCIAMY ────────────────────────────────────────────
  applicativo: {
    etichetta: "L'applicativo Tracciamy",
    // "expertise" in italiano è femminile: "la nostra", non "il nostro".
    // È l'unico errore grammaticale trovato nei testi approvati.
    titolo: "La nostra expertise in una piattaforma.",
    testoRiga1: "In pochi minuti la piattaforma prepara il certificato.",
    testoRiga2: "Nel frattempo tu monitori ogni passo in tempo reale.",
    cruscotto: {
      titolo: "Tracciamy",
      riferimento: "CM-0042",
      voci: ["Unità", "Componenti", "Certificati"],
      attiva: "Componenti",
      barra: { etichetta: "Fascicolo tecnico", quota: 72 },
      colonne: ["Componente", "Certificato", "Stato"],
      righe: [
        { componente: "CP-0231", certificato: "CERT-0016", stato: "ok" },
        { componente: "CP-0232", certificato: "CERT-0017", stato: "ok" },
        { componente: "CP-0233", certificato: "Da associare", stato: "attesa" },
      ],
    },
  },

  // ── 6. PER CHI PRODUCE APPARECCHIATURE IN PRESSIONE ───────────────────────
  pubblico: {
    etichetta: "Per chi produce apparecchiature in pressione",
    titolo: "La soluzione ideale per tracciare ogni unità prodotta.",
    testo:
      "Tracciamy è studiata per chi gestisce distinte, materiali e certificati di fornitori. Aiuta il team di qualità, produzione e ufficio tecnico a ritrovare ciò che serve per ogni unità e a preparare la documentazione.",
  },

  // ── 7. CONTATTI ───────────────────────────────────────────────────────────
  contattiSezione: {
    titolo: "Richiedi informazioni.",
    testo: "Ti aiutiamo a certificare velocemente.",
  },

  footer: {
    claim: "Tracciabilità dei materiali per chi produce apparecchiature in pressione.",
    legale: "Virtech S.r.l.",
  },
} as const;
