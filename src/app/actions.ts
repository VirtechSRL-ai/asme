"use server";

import { site } from "@/content/site";

export type StatoInvio = {
  stato: "iniziale" | "ok" | "errore";
  messaggio: string;
  /** Campi che l'utente deve correggere, per evidenziarli nel form. */
  campiMancanti?: string[];
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Invia la richiesta di demo.
 *
 * La destinazione reale (CRM, casella commerciale o webhook) è ancora da
 * definire: finché CONTACT_WEBHOOK_URL non è configurata, il form non finge di
 * aver inviato e rimanda all'indirizzo email, così nessun contatto va perso.
 */
export async function inviaRichiestaDemo(
  _precedente: StatoInvio,
  formData: FormData,
): Promise<StatoInvio> {
  const valore = (campo: string) => String(formData.get(campo) ?? "").trim();

  const dati = {
    nome: valore("nome"),
    azienda: valore("azienda"),
    email: valore("email"),
    produzione: valore("produzione"),
    messaggio: valore("messaggio"),
  };

  const campiMancanti = (["nome", "azienda", "email", "produzione"] as const).filter(
    (campo) => !dati[campo],
  );

  if (campiMancanti.length > 0) {
    return {
      stato: "errore",
      messaggio: "Compila i campi obbligatori per inviare la richiesta.",
      campiMancanti,
    };
  }

  if (!EMAIL.test(dati.email)) {
    return {
      stato: "errore",
      messaggio: "Controlla l'indirizzo email: non sembra valido.",
      campiMancanti: ["email"],
    };
  }

  const destinazione = process.env.CONTACT_WEBHOOK_URL;

  if (!destinazione) {
    console.warn(
      "[demo] CONTACT_WEBHOOK_URL non configurata: la richiesta non è stata inoltrata.",
    );
    return {
      stato: "errore",
      messaggio: `Il modulo non è ancora collegato. Scrivici a ${site.contatti.email} e ti rispondiamo subito.`,
    };
  }

  try {
    const risposta = await fetch(destinazione, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...dati, origine: "landing ASME/PED" }),
    });

    if (!risposta.ok) {
      throw new Error(`destinazione ha risposto ${risposta.status}`);
    }
  } catch (errore) {
    console.error("[demo] invio non riuscito:", errore);
    return {
      stato: "errore",
      messaggio: `Non siamo riusciti a inviare la richiesta. Scrivici a ${site.contatti.email}.`,
    };
  }

  return {
    stato: "ok",
    messaggio: "Richiesta inviata. Ti ricontattiamo per fissare la demo.",
  };
}
