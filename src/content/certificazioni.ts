export type Certificazione = {
  /** Nome breve, composto in tipografia quando manca il logo ufficiale */
  sigla: string;
  /** Scioglimento della sigla, sotto il marchio tipografico */
  estesa?: string;
  tipo: string;
  /** Denominazione completa del documento o della normativa */
  nome: string;
  descrizione: string;
  /** Percorso del logo ufficiale dentro `public/`, quando disponibile */
  logo: string | null;
  /** Fa parte della raccolta principale della pagina */
  evidenza?: true;
};

export const certificazioni: readonly Certificazione[] = [
  {
    sigla: "ASME",
    estesa: "American Society of Mechanical Engineers",
    tipo: "Codici",
    nome: "ASME",
    descrizione:
      "Automatizza la raccolta, l'associazione e la verifica dei certificati dei materiali, semplificando la preparazione dei fascicoli tecnici secondo i codici ASME applicabili.",
    // Logo rimosso su richiesta: la voce si presenta con la sigla, come le
    // altre. I file in public/certificazioni/ restano disponibili.
    logo: null,
    evidenza: true,
  },
  {
    sigla: "PED",
    estesa: "Pressure Equipment Directive",
    tipo: "Direttiva",
    nome: "PED",
    descrizione:
      "Organizza la documentazione tecnica e i certificati dei materiali, facilitando la tracciabilità dei componenti e la preparazione dei fascicoli di conformità PED.",
    logo: null,
    evidenza: true,
  },
  {
    sigla: "PQR",
    estesa: "Procedure Qualification Record",
    tipo: "Qualifica",
    nome: "PQR – Procedure Qualification Record",
    descrizione:
      "Analizza i parametri di saldatura e individua le qualifiche esistenti compatibili, evidenziando eventuali requisiti non soddisfatti.",
    logo: null,
    evidenza: true,
  },
  {
    sigla: "WPS",
    estesa: "Welding Procedure Specification",
    tipo: "Specifica",
    nome: "WPS – Welding Procedure Specification",
    descrizione:
      "Semplifica la preparazione delle specifiche di saldatura, utilizzando i parametri tecnici e le qualifiche PQR disponibili.",
    logo: null,
    evidenza: true,
  },
  {
    sigla: "Welding Book",
    tipo: "Fascicolo",
    nome: "Welding Book",
    descrizione:
      "Automatizza la raccolta e l'organizzazione della documentazione relativa alle saldature, collegando giunti, WPS, qualifiche, materiali e controlli in un unico fascicolo.",
    logo: null,
    evidenza: true,
  },
  {
    sigla: "MRB",
    estesa: "Manufacturing Record Book",
    tipo: "Fascicolo",
    nome: "MRB – Manufacturing Record Book",
    descrizione:
      "Raccolta e organizzazione automatica della documentazione di fabbricazione, inclusi certificati, saldature, controlli e collaudi, in un unico fascicolo tecnico.",
    logo: null,
  },
  {
    sigla: "Quality Data Book",
    tipo: "Dossier",
    nome: "Quality Data Book",
    descrizione:
      "Creazione di dossier qualità completi, collegando i documenti di commessa e verificando la presenza delle informazioni richieste.",
    logo: null,
  },
  {
    sigla: "MTR",
    estesa: "Material Traceability Report",
    tipo: "Report",
    nome: "Material Traceability Report (MTR)",
    descrizione:
      "Generazione dei report di tracciabilità, collegando automaticamente materiali, componenti, Heat Number e relativi certificati.",
    logo: null,
  },
  {
    sigla: "Weld Log",
    tipo: "Registro",
    nome: "Weld Log",
    descrizione:
      "Gestione del registro delle saldature, associando ogni giunto a saldatori, procedure WPS, materiali e controlli eseguiti.",
    logo: null,
  },
  {
    sigla: "Weld Map",
    tipo: "Disegno",
    nome: "Weld Map",
    descrizione:
      "Collegamento delle saldature ai relativi disegni tecnici, con identificazione dei giunti e associazione della documentazione di riferimento.",
    logo: null,
  },
  {
    sigla: "WPQ",
    estesa: "Welder Performance Qualification",
    tipo: "Qualifica",
    nome: "WPQ – Welder Performance Qualification",
    descrizione:
      "Gestione delle qualifiche dei saldatori, con verifica dei parametri di validità, collegamento alle procedure e monitoraggio delle scadenze.",
    logo: null,
  },
  {
    sigla: "NDT",
    estesa: "Controlli non distruttivi",
    tipo: "Controlli",
    nome: "NDT Reports – Controlli non distruttivi",
    descrizione:
      "Raccolta e associazione dei rapporti di controllo alle singole saldature, con verifica della completezza documentale.",
    logo: null,
  },
  {
    sigla: "Pressure Test",
    tipo: "Collaudo",
    nome: "Pressure Test Reports",
    descrizione:
      "Gestione dei rapporti delle prove di pressione, collegandoli alle apparecchiature e ai relativi fascicoli tecnici.",
    logo: null,
  },
] as const;

/** Ancora della carta sulla pagina /certificazioni */
export const ancora = (c: Certificazione) => c.sigla.toLowerCase().replace(/\s+/g, "-");

export const inEvidenza = certificazioni.filter((c) => c.evidenza);
export const fascicoli = certificazioni.filter((c) => !c.evidenza);
