import { ViewTransition, type ReactNode } from "react";

/*
 * Il cambio di scena fra la home e la pagina delle certificazioni.
 *
 * Due versi, dichiarati sui link: "apri-certificazioni" quando si entra
 * nell'area delle certificazioni, "torna-home" quando se ne esce. Le classi
 * di animazione stanno in globals.css (CAMBIO DI SCENA). Le navigazioni
 * senza verso — il tasto Indietro del browser, un refresh — non fanno
 * scorrere la pagina: lì restano solo la dissolvenza e i sigilli condivisi.
 */

export const APRI_CERTIFICAZIONI = ["apri-certificazioni"];
export const TORNA_HOME = ["torna-home"];

/** Il verso di un link interno, dedotto dalla destinazione */
export function versoDi(href: string) {
  return href.startsWith("/certificazioni") ? APRI_CERTIFICAZIONI : TORNA_HOME;
}

/** Avvolge il contenuto di ogni pagina che partecipa al cambio di scena */
export function Scena({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "apri-certificazioni": "scena-entra",
        "torna-home": "scena-rientra",
        default: "none",
      }}
      exit={{
        "apri-certificazioni": "scena-esce",
        "torna-home": "scena-arretra",
        default: "none",
      }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
