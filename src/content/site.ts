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
    etichetta: "Per chi produce apparecchiature in pressione",
    titolo: "Tracciabilità dei materiali",
    sottotitolo: "dalla distinta al fascicolo tecnico.",
    testo:
      "Riduciamo del 90% il tempo necessario a preparare la documentazione di tracciabilità.",
    // Dashboard principale: stato di avanzamento della commessa.
    cruscotto: {
      titolo: "Commessa in lavorazione",
      riferimento: "CM-0042",
      avanzamento: { etichetta: "Fascicolo tecnico", quota: 72 },
      contatori: [
        { etichetta: "Unità", valore: "20" },
        { etichetta: "Componenti", valore: "148" },
        { etichetta: "Certificati", valore: "96" },
      ],
      colonne: ["Unità", "Distinta", "Certificati", "Stato"],
      righe: [
        { unita: "UN-0014", distinta: "Completa", certificati: "6 su 6", stato: "ok" },
        { unita: "UN-0015", distinta: "Completa", certificati: "5 su 6", stato: "attesa" },
        { unita: "UN-0016", distinta: "Completa", certificati: "6 su 6", stato: "ok" },
      ],
    },
    // Seconda dashboard, sovrapposta: il dettaglio di un singolo componente.
    dettaglio: {
      titolo: "Componente",
      riferimento: "CP-0231",
      campi: [
        { etichetta: "Materiale", valore: "MAT-002" },
        { etichetta: "Marcatura", valore: "Presente" },
        { etichetta: "Certificato", valore: "CERT-0016" },
      ],
      stato: "Collegato alla sua unità",
    },
  },

  // ── 2. OTTIENI ────────────────────────────────────────────────────────────
  ottieni: {
    etichetta: "Ottieni",
    titolo: "Ottieni il certificato in pochissimi minuti.",
    testo:
      "L'applicativo collega distinte, componenti e certificati, segnala ciò che manca e prepara la documentazione per la verifica finale.",
    cruscotto: {
      titolo: "Certificato tecnico",
      riferimento: "UN-0016",
      passi: [
        {
          numero: "01",
          nome: "Distinte e componenti",
          dettaglio: "12 componenti collegati",
          stato: "fatto",
        },
        {
          numero: "02",
          nome: "Certificati",
          dettaglio: "6 documenti associati",
          stato: "fatto",
        },
        {
          numero: "03",
          nome: "Preparazione della documentazione",
          dettaglio: "Raccolta delle evidenze",
          stato: "corso",
          avanzamento: 60,
        },
        {
          numero: "04",
          nome: "Verifica finale",
          dettaglio: "A cura del team",
          stato: "attesa",
        },
      ],
    },
  },

  // ── 3. MANTIENI ───────────────────────────────────────────────────────────
  mantieni: {
    etichetta: "Mantieni",
    titolo: "Ogni componente e certificato sotto controllo.",
    testo:
      "Distinte, componenti e certificati restano collegati alle singole unità: il tuo team vede quali documenti sono disponibili e quali informazioni mancano.",
    // Il flusso: materiali e documenti → Tracciamy → controllo finale del team
    flusso: {
      ingresso: {
        titolo: "Materiali e documenti",
        voci: [
          { nome: "Distinte", dettaglio: "Struttura delle unità" },
          { nome: "Componenti", dettaglio: "Materiale e marcatura" },
          { nome: "Certificati", dettaglio: "Documenti dei fornitori" },
        ],
      },
      centro: {
        titolo: "Tracciamy",
        dettaglio: "Collega ogni documento alla sua unità",
        legami: [
          { da: "CP-0231", a: "CERT-0016", stato: "ok" },
          { da: "CP-0232", a: "CERT-0017", stato: "ok" },
          { da: "CP-0233", a: "Da associare", stato: "attesa" },
        ],
      },
      uscita: {
        titolo: "Controllo finale del team",
        disponibili: { etichetta: "Documenti disponibili", valore: "5 su 6" },
        mancanti: { etichetta: "Da completare", valore: "1" },
        nota: "La verifica resta in capo al team.",
      },
    },
  },

  // ── 4. L'APPLICATIVO TRACCIAMY ────────────────────────────────────────────
  applicativo: {
    etichetta: "L'applicativo Tracciamy",
    titolo: "Il nostro expertise in una piattaforma.",
    testoRiga1: "In pochi minuti la piattaforma prepara il certificato.",
    testoRiga2: "Nel frattempo tu monitori ogni passo in tempo reale.",
    cruscotto: {
      titolo: "Tracciamy",
      sezioni: [
        { gruppo: "Commessa", voci: ["Unità", "Distinte", "Componenti"] },
        { gruppo: "Documenti", voci: ["Certificati", "Fascicolo"] },
      ],
      attiva: "Componenti",
      barra: { etichetta: "Fascicolo tecnico", quota: 72 },
      colonne: ["Componente", "Materiale", "Certificato", "Stato"],
      righe: [
        { componente: "CP-0231", materiale: "MAT-002", certificato: "CERT-0016", stato: "ok" },
        { componente: "CP-0232", materiale: "MAT-004", certificato: "CERT-0017", stato: "ok" },
        { componente: "CP-0233", materiale: "MAT-007", certificato: "Da associare", stato: "attesa" },
        { componente: "CP-0234", materiale: "MAT-002", certificato: "CERT-0016", stato: "ok" },
      ],
      riepilogo: [
        { etichetta: "Componenti collegati", valore: "3 su 4" },
        { etichetta: "Informazioni mancanti", valore: "1" },
      ],
    },
  },

  // ── 5. PER CHI PRODUCE APPARECCHIATURE IN PRESSIONE ───────────────────────
  pubblico: {
    etichetta: "Per chi produce apparecchiature in pressione",
    titolo: "La soluzione ideale per tracciare ogni unità prodotta.",
    testo:
      "Tracciamy è studiata per chi gestisce distinte, materiali e certificati di fornitori. Aiuta il team di qualità, produzione e ufficio tecnico a ritrovare ciò che serve per ogni unità e a preparare la documentazione.",
  },

  // ── 6. CONTATTI ───────────────────────────────────────────────────────────
  contattiSezione: {
    titolo: "Richiedi informazioni.",
    testo: "Ti aiutiamo a certificare velocemente.",
  },

  footer: {
    claim: "Tracciabilità dei materiali per chi produce apparecchiature in pressione.",
    legale: "Virtech S.r.l.",
  },
} as const;
