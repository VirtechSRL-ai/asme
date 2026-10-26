// ─────────────────────────────────────────────────────────────────────────────
// CONTENUTI DEL SITO
// Tutti i testi stanno qui: per cambiare una frase non serve toccare i
// componenti. I contenuti derivano dal brief "Landing monopagina ASME / PED",
// riscritti in forma più breve senza aggiungere promesse o dati non confermati.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  nome: "Tracciamy",
  azienda: "Virtech",
  payoff: "Tracciabilità dei materiali per chi produce apparecchiature in pressione",
  descrizione:
    "Tracciamy collega ogni unità prodotta ai suoi componenti, materiali e certificati, e segnala cosa manca prima di preparare la documentazione di commessa.",
  url: "https://www.tracciamy.it",

  contatti: {
    email: "info@virtechsrl.com",
    telefono: "+39 333 866 5089",
    telefonoLink: "+393338665089",
    sede: "Erbusco, Brescia, Italia",
  },

  nav: [
    { etichetta: "Il problema", href: "#problema" },
    { etichetta: "Come funziona", href: "#metodo" },
    { etichetta: "Cosa collega", href: "#collegamenti" },
    { etichetta: "ASME e PED", href: "#ambiti" },
  ],
  ctaPrincipale: { etichetta: "Richiedi informazioni", href: "#contatti" },

  // 01 — HERO
  hero: {
    eyebrow: "Tracciabilità dei materiali",
    titoloPrima: "Sai quali materiali sono entrati in",
    titoloSpicca: "ogni unità",
    titoloDopo: "che hai prodotto?",
    testo:
      "Tracciamy collega ogni unità ai suoi componenti, materiali e certificati. In un posto solo.",
    ctaSecondaria: { etichetta: "Come funziona", href: "#metodo" },
    catena: {
      etichetta: "Il percorso di una unità",
      livelli: [
        { nome: "Unità prodotta", voce: "Identificativo e commessa" },
        { nome: "Componenti", voce: "Distinta e numeri seriali" },
        { nome: "Materiali e certificati", voce: "Certificato e fornitura" },
      ],
    },
  },

  // 02 — PROBLEMA
  problema: {
    eyebrow: "Il problema",
    titolo: "Oggi quelle informazioni sono sparse.",
    testo:
      "Distinte, numeri seriali e certificati dei fornitori vivono in file e passaggi diversi. Per verificare una singola unità, il team ricostruisce tutto a mano.",
    punti: [
      { icona: "trace", titolo: "Risalire", testo: "Dalla macchina al componente al certificato." },
      { icona: "inspect", titolo: "Controllare", testo: "Vedere cosa manca ancora." },
      { icona: "dossier", titolo: "Preparare", testo: "Raccogliere le evidenze per il fascicolo." },
    ],
  },

  // 03 — METODO
  metodo: {
    eyebrow: "Come funziona",
    titoloPrima: "Importa. Collega.",
    titoloSpicca: "Verifica.",
    passaggi: [
      {
        numero: "01",
        icona: "import",
        titolo: "Importa",
        testo: "Parti dalla distinta e dagli identificativi delle unità.",
      },
      {
        numero: "02",
        icona: "link",
        titolo: "Collega",
        testo: "Certificati e riferimenti di fornitura si agganciano ai componenti.",
      },
      {
        numero: "03",
        icona: "check",
        titolo: "Verifica",
        testo: "Il sistema segnala le lacune prima che produciate i documenti.",
      },
    ],
  },

  // 04 — COSA COLLEGA
  collegamenti: {
    eyebrow: "Cosa collega",
    titolo: "Da ogni unità, risali ai suoi materiali.",
    testo:
      "Una vista per apparecchiatura riunisce componenti, marcature e certificati. I dati estratti dai PDF restano da confermare a mano.",
    percorso: [
      { etichetta: "Unità", dettaglio: "Apparecchiatura e commessa" },
      { etichetta: "Componente", dettaglio: "Materiale e marcatura" },
      { etichetta: "Certificato", dettaglio: "Documento e dove è usato" },
    ],
  },

  // 05 — AMBITI
  ambiti: {
    eyebrow: "ASME e PED",
    titolo: "Due percorsi, la stessa esigenza di evidenze.",
    colonne: [
      {
        sigla: "ASME",
        stato: "Flusso già realizzato",
        testo:
          "Sviluppato per W&H Sterilization Italia sulle camere degli sterilizzatori: lotti, componenti, certificati e controlli di completezza.",
      },
      {
        sigla: "PED",
        stato: "Percorso da configurare",
        testo:
          "Si parte da una commessa reale per definire dati, controlli e documenti, sui requisiti applicabili al tuo prodotto.",
      },
    ],
    nota: "Esempio di flusso applicativo W&H. Dati a scopo dimostrativo, previa autorizzazione.",
  },

  // 06 — CONTATTI
  contattiSezione: {
    eyebrow: "Parliamone",
    titoloPrima: "Raccontaci come tracciate",
    titoloSpicca: "oggi",
    titoloDopo: "materiali e documenti.",
    testo: "Ti rispondiamo noi di Virtech, senza impegno.",
  },

  footer: {
    claim: "Tracciabilità dei materiali per processi ASME e PED. Un prodotto Virtech.",
    legale: "Virtech S.r.l.",
  },
} as const;
