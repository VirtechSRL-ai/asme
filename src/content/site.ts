// ─────────────────────────────────────────────────────────────────────────────
// CONTENUTI DEL SITO
// Tutti i testi stanno qui: per cambiare una frase non serve toccare i
// componenti.
//
// I blocchi `mock` descrivono le anteprime dell'applicativo. Sono
// rappresentazioni illustrative: i codici sono fittizi e le etichette di stato
// sono qualitative. L'unico dato numerico è il claim del 90%, dichiarato come
// tale nel testo e non sostenuto da studi.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  nome: "Tracciamy",
  azienda: "Virtech",
  payoff: "Tracciabilità dei materiali, dalla distinta al fascicolo tecnico",
  descrizione:
    "Tracciamy collega distinte, componenti e certificati, segnala ciò che manca e prepara la documentazione di tracciabilità per chi produce apparecchiature in pressione.",
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
  ],
  ctaPrincipale: { etichetta: "Ottieni informazioni" },

  // 01 — HERO
  hero: {
    badge: "PER CHI PRODUCE APPARECCHIATURE IN PRESSIONE",
    titolo: "Tracciabilità dei materiali",
    sottotitolo: "dalla distinta al fascicolo tecnico",
    testo:
      "Riduciamo del 90% il tempo necessario a preparare la documentazione di tracciabilità.",
    // Dashboard centrale sotto il titolo.
    cruscotto: {
      titolo: "Dati in lavorazione",
      totale: 20,
      unita: "elementi",
      stati: [
        { chiave: "ok", numero: 14, quota: 70, etichetta: "Completati" },
        { chiave: "attenzione", numero: 4, quota: 20, etichetta: "Richiedono attenzione" },
        { chiave: "pronti", numero: 2, quota: 10, etichetta: "Pronti alla chiusura" },
      ],
      colonne: ["Unità", "Distinta", "Certificati", "Stato"],
      righe: [
        { unita: "UN-0014", distinta: "Completa", certificati: "6 su 6", stato: "ok" },
        { unita: "UN-0015", distinta: "Completa", certificati: "5 su 6", stato: "attenzione" },
        { unita: "UN-0016", distinta: "Completa", certificati: "6 su 6", stato: "pronti" },
      ],
    },
  },

  // 02 — OTTIENI
  ottieni: {
    eyebrow: "Ottieni",
    titolo: "Ottieni il certificato in pochissimi minuti.",
    testo:
      "L'applicativo collega distinte, componenti e certificati, segnala ciò che manca e prepara la documentazione per la verifica finale.",
    cta: "Ottieni informazioni",
    // Percorso verticale dentro la card principale.
    percorso: {
      titolo: "Certificato tecnico",
      riferimento: "UN-0016",
      passi: [
        { nome: "Distinte e componenti", stato: "fatto", dettaglio: "12 componenti collegati" },
        { nome: "Certificati", stato: "fatto", dettaglio: "6 documenti associati" },
        {
          nome: "Preparazione documentazione",
          stato: "corso",
          dettaglio: "Raccolta evidenze",
          avanzamento: 60,
        },
        { nome: "Verifica finale", stato: "attesa", dettaglio: "A cura del team" },
      ],
    },
    // Documento sovrapposto, in primo piano.
    documento: {
      titolo: "Certificato",
      riferimento: "CERT-0016",
      righe: [
        { etichetta: "Unità", valore: "UN-0016" },
        { etichetta: "Componenti", valore: "12" },
        { etichetta: "Certificati", valore: "6" },
      ],
      stato: "Pronto per la verifica",
    },
  },

  // 03 — MANTIENI
  mantieni: {
    eyebrow: "Mantieni",
    titolo: "Mantieni ogni componente e certificato sotto controllo",
    testo:
      "Distinte, componenti e certificati restano collegati alle singole unità: il tuo team vede quali documenti sono disponibili e quali informazioni mancano.",
    cta: "Ottieni informazioni",
    fasi: [
      {
        icona: "dossier",
        titolo: "Materiali e documenti",
        dettaglio: "Distinte, componenti e certificati dei fornitori",
        stato: "ok",
      },
      {
        icona: "trace",
        titolo: "Traccia",
        dettaglio: "Ogni documento resta legato alla sua unità",
        stato: "ok",
      },
      {
        icona: "inspect",
        titolo: "Controllo finale del team",
        dettaglio: "Le informazioni mancanti restano in evidenza",
        stato: "attesa",
      },
    ],
  },

  footer: {
    claim: "Tracciabilità dei materiali per chi produce apparecchiature in pressione. Un prodotto Virtech.",
    legale: "Virtech S.r.l.",
  },
} as const;
