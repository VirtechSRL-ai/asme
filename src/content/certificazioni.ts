// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICAZIONI, NORMATIVE E FASCICOLI TECNICI
// L'elenco completo mostrato nella pagina /certificazioni; le voci con
// `evidenza` formano la raccolta principale, le altre la sezione dei
// fascicoli di fabbricazione.
//
// Per aggiungere, togliere o riordinare una voce basta modificare questo
// elenco: la pagina si aggiorna da sola.
//
// I loghi ufficiali vanno salvati in `public/certificazioni/` e collegati con
// il campo `logo`. Qui c'è solo il logo ASME, l'unico autentico fra i file
// forniti: gli altri tre appartenevano ad aziende estranee (WPS Office di
// Kingsoft, la società informatica PQR, il sito "Pressure Equipment
// Directory") e non vanno usati. PQR, WPS e simili sono tipologie di
// documenti tecnici, non enti: non esiste un loro logo ufficiale, quindi il
// sigillo mostra la sigla tipografica. Nessun marchio va inventato.
//
// `forma` sceglie la geometria del sigillo (direzione artistica della
// collezione): la varietà è voluta, ma controllata da qui.
//
// Nomi e descrizioni sono i testi forniti, riportati senza modifiche.
// ─────────────────────────────────────────────────────────────────────────────

export type FormaSigillo = "cerchio" | "esagono" | "ottagono" | "scudo";

export type Certificazione = {
  /** Nome breve, mostrato dentro il sigillo quando manca il logo */
  sigla: string;
  /** Denominazione completa del documento o della normativa */
  nome: string;
  descrizione: string;
  /** Percorso del logo ufficiale dentro `public/`, quando disponibile */
  logo: string | null;
  /** Geometria del sigillo grafico */
  forma: FormaSigillo;
  /** Fa parte della raccolta principale della pagina */
  evidenza?: true;
};

export const certificazioni: readonly Certificazione[] = [
  {
    sigla: "ASME",
    nome: "ASME",
    descrizione:
      "Automatizza la raccolta, l'associazione e la verifica dei certificati dei materiali, semplificando la preparazione dei fascicoli tecnici secondo i codici ASME applicabili.",
    logo: "/certificazioni/asme.jpg",
    forma: "cerchio",
    evidenza: true,
  },
  {
    sigla: "PED",
    nome: "PED",
    descrizione:
      "Organizza la documentazione tecnica e i certificati dei materiali, facilitando la tracciabilità dei componenti e la preparazione dei fascicoli di conformità PED.",
    logo: null,
    forma: "ottagono",
    evidenza: true,
  },
  {
    sigla: "PQR",
    nome: "PQR – Procedure Qualification Record",
    descrizione:
      "Analizza i parametri di saldatura e individua le qualifiche esistenti compatibili, evidenziando eventuali requisiti non soddisfatti.",
    logo: null,
    forma: "esagono",
    evidenza: true,
  },
  {
    sigla: "WPS",
    nome: "WPS – Welding Procedure Specification",
    descrizione:
      "Semplifica la preparazione delle specifiche di saldatura, utilizzando i parametri tecnici e le qualifiche PQR disponibili.",
    logo: null,
    forma: "cerchio",
    evidenza: true,
  },
  {
    sigla: "Welding Book",
    nome: "Welding Book",
    descrizione:
      "Automatizza la raccolta e l'organizzazione della documentazione relativa alle saldature, collegando giunti, WPS, qualifiche, materiali e controlli in un unico fascicolo.",
    logo: null,
    forma: "scudo",
    evidenza: true,
  },
  {
    sigla: "MRB",
    nome: "MRB – Manufacturing Record Book",
    descrizione:
      "Raccolta e organizzazione automatica della documentazione di fabbricazione, inclusi certificati, saldature, controlli e collaudi, in un unico fascicolo tecnico.",
    logo: null,
    forma: "scudo",
  },
  {
    sigla: "Quality Data Book",
    nome: "Quality Data Book",
    descrizione:
      "Creazione di dossier qualità completi, collegando i documenti di commessa e verificando la presenza delle informazioni richieste.",
    logo: null,
    forma: "cerchio",
  },
  {
    sigla: "MTR",
    nome: "Material Traceability Report (MTR)",
    descrizione:
      "Generazione dei report di tracciabilità, collegando automaticamente materiali, componenti, Heat Number e relativi certificati.",
    logo: null,
    forma: "esagono",
  },
  {
    sigla: "Weld Log",
    nome: "Weld Log",
    descrizione:
      "Gestione del registro delle saldature, associando ogni giunto a saldatori, procedure WPS, materiali e controlli eseguiti.",
    logo: null,
    forma: "ottagono",
  },
  {
    sigla: "Weld Map",
    nome: "Weld Map",
    descrizione:
      "Collegamento delle saldature ai relativi disegni tecnici, con identificazione dei giunti e associazione della documentazione di riferimento.",
    logo: null,
    forma: "esagono",
  },
  {
    sigla: "WPQ",
    nome: "WPQ – Welder Performance Qualification",
    descrizione:
      "Gestione delle qualifiche dei saldatori, con verifica dei parametri di validità, collegamento alle procedure e monitoraggio delle scadenze.",
    logo: null,
    forma: "cerchio",
  },
  {
    sigla: "NDT",
    nome: "NDT Reports – Controlli non distruttivi",
    descrizione:
      "Raccolta e associazione dei rapporti di controllo alle singole saldature, con verifica della completezza documentale.",
    logo: null,
    forma: "ottagono",
  },
  {
    sigla: "Pressure Test",
    nome: "Pressure Test Reports",
    descrizione:
      "Gestione dei rapporti delle prove di pressione, collegandoli alle apparecchiature e ai relativi fascicoli tecnici.",
    logo: null,
    forma: "scudo",
  },
] as const;

export const inEvidenza = certificazioni.filter((c) => c.evidenza);
export const fascicoli = certificazioni.filter((c) => !c.evidenza);
