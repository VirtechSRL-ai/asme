// Tutti i testi e i dati del sito. Modifica qui: le pagine leggono da questo file.

export const site = {
  nome: "ASME",
  payoff: "Soluzioni su misura, realizzate con metodo",
  descrizione:
    "Progettiamo e realizziamo soluzioni tecniche su misura, dalla prima analisi fino alla messa in opera.",
  url: "https://asme.example.com",

  contatti: {
    email: "info@asme.example.com",
    telefono: "+39 000 000 0000",
    indirizzo: "Via Esempio 1, 00000 Città (XX)",
  },

  menu: [
    { etichetta: "Servizi", href: "#servizi" },
    { etichetta: "Metodo", href: "#metodo" },
    { etichetta: "Chi siamo", href: "#chi-siamo" },
    { etichetta: "Contatti", href: "#contatti" },
  ],

  numeri: [
    { valore: "15+", etichetta: "anni di attività" },
    { valore: "200+", etichetta: "progetti consegnati" },
    { valore: "98%", etichetta: "clienti che tornano" },
  ],

  servizi: [
    {
      titolo: "Consulenza e analisi",
      testo:
        "Analizziamo requisiti, vincoli e budget per definire la soluzione più adatta prima di scrivere una riga di preventivo.",
    },
    {
      titolo: "Progettazione",
      testo:
        "Dal concept al progetto esecutivo, con documentazione chiara e scelte tecniche sempre motivate.",
    },
    {
      titolo: "Realizzazione",
      testo:
        "Seguiamo la produzione e l'installazione con fornitori selezionati e controlli in ogni fase.",
    },
    {
      titolo: "Assistenza",
      testo:
        "Manutenzione programmata e supporto continuativo, con tempi di risposta concordati.",
    },
  ],

  metodo: [
    {
      titolo: "Ascolto",
      testo: "Un primo incontro per capire obiettivi, tempi e priorità reali.",
    },
    {
      titolo: "Proposta",
      testo: "Soluzione, costi e tempi in un documento unico, senza sorprese.",
    },
    {
      titolo: "Esecuzione",
      testo: "Un referente unico per tutta la durata del progetto.",
    },
    {
      titolo: "Verifica",
      testo: "Collaudo condiviso e consegna della documentazione completa.",
    },
  ],

  chiSiamo: [
    "ASME nasce dall'esperienza di un gruppo di tecnici che ha scelto di lavorare in modo diverso: pochi progetti alla volta, seguiti davvero, con un referente unico dall'inizio alla fine.",
    "Lavoriamo con aziende che hanno bisogno di risposte precise e tempi rispettati, più che di promesse generiche.",
  ],
} as const;
