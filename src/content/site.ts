// ─────────────────────────────────────────────────────────────────────────────
// CONTENUTI DEL SITO
// Tutti i testi stanno qui: per cambiare una frase non serve toccare i
// componenti.
//
// I blocchi `mock` descrivono le grafiche illustrative delle sezioni. Sono
// esempi, non schermate reali del prodotto: i codici sono fittizi e le
// etichette di stato sono qualitative. Nessun dato numerico, percentuale o
// indicatore di performance viene inventato.
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

  notaEsempio: "Esempio illustrativo. Codici e contenuti sono fittizi.",

  // 01 — HERO
  hero: {
    eyebrow: "Tracciabilità dei materiali",
    titoloPrima: "Sai quali materiali sono entrati in",
    titoloSpicca: "ogni unità",
    titoloDopo: "che hai prodotto?",
    testo:
      "Tracciamy collega ogni unità ai suoi componenti, materiali e certificati. In un posto solo.",
    ctaSecondaria: { etichetta: "Come funziona", href: "#metodo" },
    // Composizione che emerge dal bordo inferiore della prima schermata.
    mock: {
      unita: {
        titolo: "Unità",
        codice: "UN-0000",
        commessa: "Commessa di esempio",
        righe: [
          { nome: "Componente A", materiale: "MAT-001", stato: "ok" },
          { nome: "Componente B", materiale: "MAT-002", stato: "ok" },
          { nome: "Componente C", materiale: "MAT-003", stato: "attesa" },
        ],
      },
      documenti: {
        titolo: "Documenti collegati",
        righe: [
          { nome: "Certificato materiale", stato: "ok" },
          { nome: "Riferimento di fornitura", stato: "ok" },
          { nome: "Documento di produzione", stato: "attesa" },
        ],
      },
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
    // Le fonti oggi scollegate fra loro.
    mock: {
      titolo: "Dove stanno oggi le informazioni",
      fonti: [
        { nome: "Distinta base", formato: "Foglio di calcolo" },
        { nome: "Numeri seriali", formato: "Gestionale" },
        { nome: "Certificati dei materiali", formato: "PDF dei fornitori" },
        { nome: "Documenti di produzione", formato: "Cartelle condivise" },
      ],
      domanda: "Quali materiali sono entrati in UN-0000?",
      risposta: "Da ricostruire a mano",
    },
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
        mock: {
          tipo: "tabella",
          colonne: ["Unità", "Componente", "Materiale"],
          righe: [
            ["UN-0000", "Componente A", "MAT-001"],
            ["UN-0000", "Componente B", "MAT-002"],
            ["UN-0001", "Componente A", "MAT-001"],
          ],
        },
      },
      {
        numero: "02",
        icona: "link",
        titolo: "Collega",
        testo: "Certificati e riferimenti di fornitura si agganciano ai componenti.",
        mock: {
          tipo: "relazione",
          da: { etichetta: "Componente B", dettaglio: "MAT-002" },
          a: { etichetta: "Certificato", dettaglio: "CERT-0000" },
        },
      },
      {
        numero: "03",
        icona: "check",
        titolo: "Verifica",
        testo: "Il sistema segnala le lacune prima che produciate i documenti.",
        mock: {
          tipo: "controllo",
          voci: [
            { nome: "Certificato materiale", stato: "ok" },
            { nome: "Riferimento di fornitura", stato: "ok" },
            { nome: "Documento di produzione", stato: "attesa" },
          ],
        },
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
    // La vista per apparecchiatura: è la grafica principale del sito.
    mock: {
      unita: {
        titolo: "Vista apparecchiatura",
        codice: "UN-0000",
        meta: ["Commessa di esempio", "Linea di esempio"],
      },
      componenti: {
        titolo: "Componenti",
        righe: [
          { nome: "Componente A", materiale: "MAT-001", marcatura: "Presente", stato: "ok" },
          { nome: "Componente B", materiale: "MAT-002", marcatura: "Presente", stato: "ok" },
          { nome: "Componente C", materiale: "MAT-003", marcatura: "Da verificare", stato: "attesa" },
        ],
        colonne: ["Componente", "Materiale", "Marcatura"],
      },
      certificato: {
        titolo: "Certificato",
        codice: "CERT-0000",
        campi: [
          { etichetta: "Materiale", valore: "MAT-002" },
          { etichetta: "Fornitore", valore: "Fornitore di esempio" },
        ],
        usoTitolo: "Dove è usato",
        uso: ["UN-0000 · Componente B", "UN-0001 · Componente B"],
        avviso: "Dati estratti dal PDF: da confermare a mano.",
      },
    },
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
        passi: [
          { nome: "Lotti e unità", fatto: true },
          { nome: "Componenti", fatto: true },
          { nome: "Certificati dei materiali", fatto: true },
          { nome: "Controlli di completezza", fatto: true },
        ],
      },
      {
        sigla: "PED",
        stato: "Percorso da configurare",
        testo:
          "Si parte da una commessa reale per definire dati, controlli e documenti, sui requisiti applicabili al tuo prodotto.",
        passi: [
          { nome: "Commessa di partenza", fatto: false },
          { nome: "Dati da gestire", fatto: false },
          { nome: "Controlli applicabili", fatto: false },
          { nome: "Documenti previsti", fatto: false },
        ],
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
