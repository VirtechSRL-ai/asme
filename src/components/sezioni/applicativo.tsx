import { site } from "@/content/site";
import { Entra } from "../entra";
import { Inclina } from "../inclina";
import { Simbolo } from "../logo";
import { Contenitore, Freccia, Spunta } from "../ui";

const { applicativo, azioni, notaDemo } = site;
const { cruscotto } = applicativo;

/**
 * La dashboard protagonista della sezione: barra laterale, avanzamento del
 * fascicolo, elenco dei componenti con i certificati associati e riepilogo
 * delle informazioni mancanti.
 *
 * È una rappresentazione illustrativa, non uno screenshot: niente funzioni
 * non confermate, nessun dato reale. I contenuti vengono da `site.ts`, così
 * sostituirli con dati veri o con un'immagine non tocca la grafica.
 */
function Cruscotto() {
  return (
    <div className="pannello">
      {/* Barra superiore dell'applicativo */}
      <div className="pannello-testa">
        <span className="flex items-center gap-2 normal-case tracking-normal">
          <Simbolo lato={18} />
          <span className="text-[0.9375rem] font-extrabold text-chiaro">{cruscotto.titolo}</span>
        </span>
        <span className="codice">{site.hero.cruscotto.riferimento}</span>
      </div>

      <div className="grid sm:grid-cols-[11rem_1fr]">
        {/* Barra laterale */}
        <nav
          aria-hidden="true"
          className="hidden border-r border-bordo-scuro p-4 sm:block"
        >
          {cruscotto.sezioni.map((sezione) => (
            <div key={sezione.gruppo} className="mb-5 last:mb-0">
              <p className="etichetta-dato">{sezione.gruppo}</p>
              <ul className="mt-2 flex flex-col gap-0.5">
                {sezione.voci.map((voce) => (
                  <li
                    key={voce}
                    className={`rounded-[9px] px-2.5 py-1.5 text-[0.8125rem] ${
                      voce === cruscotto.attiva
                        ? "bg-[color-mix(in_srgb,var(--verde)_18%,transparent)] font-bold text-verde"
                        : "text-su-scuro"
                    }`}
                  >
                    {voce}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Area di lavoro */}
        <div className="p-4 sm:p-5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="etichetta-dato">{cruscotto.barra.etichetta}</span>
            <span className="text-[1.0625rem] font-extrabold tabular-nums">
              {cruscotto.barra.quota}%
            </span>
          </div>
          <div
            aria-hidden="true"
            className="mt-2 h-2 overflow-hidden rounded-pill bg-[color-mix(in_srgb,var(--chiaro)_12%,transparent)]"
          >
            <span
              className="block h-full rounded-pill bg-verde"
              style={{ width: `${cruscotto.barra.quota}%` }}
            />
          </div>

          {/* Componenti e certificati associati */}
          <div className="mt-5 overflow-hidden rounded-[14px] border border-bordo-scuro">
            <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)_auto] gap-3 border-b border-bordo-scuro px-3.5 py-2.5 sm:grid">
              {cruscotto.colonne.map((colonna) => (
                <span key={colonna} className="etichetta-dato min-w-0 truncate">
                  {colonna}
                </span>
              ))}
            </div>

            {cruscotto.righe.map((riga) => (
              <div
                key={riga.componente}
                className="flex flex-col gap-1.5 border-b border-bordo-scuro px-3.5 py-3 last:border-b-0 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)_auto] sm:items-center sm:gap-3"
              >
                <span className="flex items-center justify-between gap-3 sm:block sm:min-w-0">
                  <span className="truncate text-[0.875rem] font-bold tabular-nums">
                    {riga.componente}
                  </span>
                  <span className="sm:hidden">
                    <Stato stato={riga.stato} />
                  </span>
                </span>
                <span className="min-w-0 truncate text-[0.8125rem] tabular-nums text-su-scuro">
                  <span className="sm:hidden">Materiale: </span>
                  {riga.materiale}
                </span>
                <span className="min-w-0 truncate text-[0.8125rem] tabular-nums text-su-scuro">
                  <span className="sm:hidden">Certificato: </span>
                  {riga.certificato}
                </span>
                <span className="hidden sm:block">
                  <Stato stato={riga.stato} />
                </span>
              </div>
            ))}
          </div>

          {/* Riepilogo */}
          <dl className="mt-4 grid grid-cols-2 gap-3">
            {cruscotto.riepilogo.map((voce) => (
              <div
                key={voce.etichetta}
                className="rounded-[12px] border border-bordo-scuro px-3.5 py-3"
              >
                <dt className="etichetta-dato">{voce.etichetta}</dt>
                <dd className="mt-1 text-[1.125rem] font-extrabold tabular-nums">{voce.valore}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Stato({ stato }: { stato: "ok" | "attesa" }) {
  return stato === "ok" ? (
    <span className="stato stato-ok">
      <Spunta className="h-3 w-3" />
      Collegato
    </span>
  ) : (
    <span className="stato stato-attesa">Manca</span>
  );
}

export function Applicativo() {
  return (
    <section id="applicativo" className="alone-scuro relative overflow-hidden py-20 sm:py-28">
      <Contenitore className="relative">
        <Entra className="mx-auto max-w-2xl text-center">
          <p className="occhiello">{applicativo.etichetta}</p>
          <h2 className="titolo-sezione mt-5">{applicativo.titolo}</h2>
          <p className="descrizione mt-6">
            {applicativo.testoRiga1}
            <br className="hidden sm:block" /> {applicativo.testoRiga2}
          </p>
          <div className="mt-9 flex justify-center">
            <a href="#contatti" className="bottone bottone-verde">
              {azioni.contatta}
              <Freccia />
            </a>
          </div>
        </Entra>

        {/* La dashboard sospesa: alone dietro, inclinazione che segue il mouse */}
        <Entra ritardo={180} className="relative mt-16">
          <div
            aria-hidden="true"
            className="respiro pointer-events-none absolute -inset-x-10 -top-10 bottom-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_18%,transparent),transparent_70%)]"
          />
          <Inclina className="relative mx-auto max-w-4xl">
            <Cruscotto />
          </Inclina>
          <p className="nota-dimostrativa mt-6 text-center">{notaDemo}</p>
        </Entra>
      </Contenitore>
    </section>
  );
}
