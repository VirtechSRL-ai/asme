"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import posthog from "posthog-js";
import { posthogAnalyticsLogger } from "@/lib/posthog-log";
import { site } from "@/content/site";
import { Entra } from "../entra";
import { glifi } from "../glifi";
import { Contenitore, Freccia } from "../ui";

const { settori } = site;

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
    process.env.NEXT_PUBLIC_POSTHOG_HOST
);

/**
 * I sei ambiti industriali, come selettore invece che come griglia.
 *
 * A sinistra l'elenco dei settori, a destra il settore scelto in grande. Il
 * visitatore cerca il proprio ambito in una colonna corta e lo vede aprirsi
 * accanto: è più veloce che leggere sei card uguali, e dà alla sezione una
 * gerarchia che una griglia non può avere.
 *
 * È un vero `tablist`: si naviga con le frecce, Home e Fine, un solo elemento
 * resta raggiungibile con Tab, e la selezione segue il fuoco. Sui dispositivi
 * touch funziona come un normale elenco di pulsanti, senza dipendere da un
 * hover che lì non esiste.
 *
 * I testi sono quelli approvati: nessun vantaggio inventato per settore.
 */
export function Settori() {
  const [attivo, setAttivo] = useState(0);
  const bottoni = useRef<(HTMLButtonElement | null)[]>([]);
  const voce = settori.voci[attivo];
  const Glifo = glifi[voce.glifo];

  function selezionaSettore(indice: number) {
    setAttivo(indice);
    if (isPostHogConfigured) {
      const sector = settori.voci[indice].nome;
      posthog.capture("sector_selected", { sector });
      posthogAnalyticsLogger.info("sector selected", { sector });
    }
  }

  function suTasto(evento: KeyboardEvent<HTMLButtonElement>, indice: number) {
    const totale = settori.voci.length;
    const mappa: Record<string, number> = {
      ArrowDown: (indice + 1) % totale,
      ArrowRight: (indice + 1) % totale,
      ArrowUp: (indice - 1 + totale) % totale,
      ArrowLeft: (indice - 1 + totale) % totale,
      Home: 0,
      End: totale - 1,
    };
    const prossimo = mappa[evento.key];
    if (prossimo === undefined) return;
    evento.preventDefault();
    selezionaSettore(prossimo);
    bottoni.current[prossimo]?.focus();
  }

  return (
    <section id="settori" className="relative py-20 sm:py-28">
      <Contenitore>
        <Entra className="max-w-3xl">
          <h2 className="titolo-sezione">
            Progettato per il <span className="spicca">tuo settore</span>
          </h2>
        </Entra>

        <Entra ritardo={120} className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,21rem)_1fr] lg:gap-8">
          {/* L'elenco: colonna stretta, righe compatte */}
          <div role="tablist" aria-label="Settori industriali" className="flex flex-col gap-1.5">
            {settori.voci.map((v, i) => {
              const scelto = i === attivo;
              const Segno = glifi[v.glifo];
              return (
                <button
                  key={v.nome}
                  ref={(nodo) => {
                    bottoni.current[i] = nodo;
                  }}
                  type="button"
                  role="tab"
                  id={`settore-${i}`}
                  aria-selected={scelto}
                  aria-controls="settore-scheda"
                  tabIndex={scelto ? 0 : -1}
                  onClick={() => selezionaSettore(i)}
                  onKeyDown={(e) => suTasto(e, i)}
                  className={`riga-settore group ${scelto ? "riga-settore-scelta" : ""}`}
                >
                  <span aria-hidden="true" className="piastra h-10 w-10 shrink-0 [&_svg]:h-[1.375rem] [&_svg]:w-[1.375rem]">
                    <Segno />
                  </span>
                  <span className="min-w-0 flex-1 text-left text-[0.9375rem] font-bold leading-snug">
                    {v.nome}
                  </span>
                  <Freccia
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      scelto ? "translate-x-0 text-verde-testo" : "-translate-x-1 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Il settore scelto, in grande */}
          <div
            role="tabpanel"
            id="settore-scheda"
            aria-labelledby={`settore-${attivo}`}
            tabIndex={-1}
            className="scena relative flex min-h-[20rem] flex-col justify-between overflow-hidden p-7 sm:p-10"
          >
            {/* La chiave cambia a ogni selezione: il contenuto rientra invece
                di sostituirsi di colpo. */}
            <div key={voce.nome} className="scheda-entra">
              <div className="flex items-start justify-between gap-6">
                <span
                  aria-hidden="true"
                  className="piastra h-[4.5rem] w-[4.5rem] shrink-0 [&_svg]:h-10 [&_svg]:w-10"
                >
                  <Glifo />
                </span>
                <span aria-hidden="true" className="indice-carta">
                  {String(attivo + 1).padStart(2, "0")} / {String(settori.voci.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 max-w-[16ch] text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.032em] sm:text-[2.125rem]">
                {voce.nome}
              </h3>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-secondario">
                {voce.testo}
              </p>
            </div>

            {/* Indicatore di posizione: dice quanti sono e a quale sei */}
            <div aria-hidden="true" className="mt-10 flex gap-1.5">
              {settori.voci.map((v, i) => (
                <span
                  key={v.nome}
                  className={`h-1 rounded-pill transition-all duration-500 ${
                    i === attivo
                      ? "w-9 bg-verde-testo"
                      : "w-4 bg-[color-mix(in_srgb,var(--verde-testo)_22%,transparent)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </Entra>
      </Contenitore>
    </section>
  );
}
