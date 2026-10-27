import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Spunta } from "../ui";

const { hero, azioni, notaDemo } = site;
const { cruscotto, dettaglio } = hero;

/**
 * Dashboard principale della hero: lo stato di una commessa, con avanzamento
 * del fascicolo, contatori e le prime unità. Dati dimostrativi.
 */
function Cruscotto() {
  return (
    <div className="pannello">
      <div className="pannello-testa">
        <span>{cruscotto.titolo}</span>
        <span className="codice">{cruscotto.riferimento}</span>
      </div>

      <div className="p-5 pb-12 sm:p-6 sm:pb-14">
        {/* Avanzamento del fascicolo */}
        <div className="flex items-baseline justify-between gap-3">
          <span className="etichetta-dato">{cruscotto.avanzamento.etichetta}</span>
          <span className="text-[1.125rem] font-extrabold tabular-nums">
            {cruscotto.avanzamento.quota}%
          </span>
        </div>
        <div
          aria-hidden="true"
          className="mt-2 h-2.5 overflow-hidden rounded-pill bg-[color-mix(in_srgb,var(--scuro)_9%,var(--chiaro))]"
        >
          <span
            className="block h-full rounded-pill bg-verde"
            style={{ width: `${cruscotto.avanzamento.quota}%` }}
          />
        </div>

        {/* Contatori */}
        <dl className="mt-5 grid grid-cols-3 gap-3">
          {cruscotto.contatori.map((c) => (
            <div
              key={c.etichetta}
              className="rounded-[14px] border border-bordo bg-chiaro px-3 py-3"
            >
              <dt className="etichetta-dato">{c.etichetta}</dt>
              <dd className="mt-1 text-[1.5rem] font-extrabold leading-none tabular-nums">
                {c.valore}
              </dd>
            </div>
          ))}
        </dl>

        {/* Prime unità della commessa */}
        <div className="mt-5 overflow-hidden rounded-[14px] border border-bordo">
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] gap-3 border-b border-bordo bg-verde-velo px-4 py-2.5 sm:grid">
            {cruscotto.colonne.map((colonna) => (
              <span key={colonna} className="etichetta-dato min-w-0 truncate">
                {colonna}
              </span>
            ))}
          </div>

          {cruscotto.righe.map((riga) => (
            <div
              key={riga.unita}
              className="flex flex-col gap-1.5 border-b border-bordo px-4 py-3 last:border-b-0 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-3"
            >
              <span className="flex items-center justify-between gap-3 sm:block sm:min-w-0">
                <span className="truncate text-[0.9375rem] font-extrabold tabular-nums">
                  {riga.unita}
                </span>
                <span className="sm:hidden">
                  <Stato stato={riga.stato} />
                </span>
              </span>
              <span className="min-w-0 truncate text-[0.875rem] text-secondario">
                <span className="sm:hidden">Distinta: </span>
                {riga.distinta}
              </span>
              <span className="min-w-0 truncate text-[0.875rem] tabular-nums text-secondario">
                <span className="sm:hidden">Certificati: </span>
                {riga.certificati}
              </span>
              <span className="hidden sm:block">
                <Stato stato={riga.stato} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stato({ stato }: { stato: "ok" | "attesa" }) {
  return stato === "ok" ? (
    <span className="stato stato-ok">
      <Spunta className="h-3 w-3" />
      Completa
    </span>
  ) : (
    <span className="stato stato-attesa">Da completare</span>
  );
}

/** Seconda dashboard, più piccola: il dettaglio di un singolo componente. */
function Dettaglio() {
  return (
    <div className="pannello">
      <div className="pannello-testa">
        <span>{dettaglio.titolo}</span>
        <span className="codice">{dettaglio.riferimento}</span>
      </div>
      <dl>
        {dettaglio.campi.map((campo) => (
          <div key={campo.etichetta} className="pannello-riga justify-between">
            <dt className="text-[0.875rem] text-secondario">{campo.etichetta}</dt>
            <dd className="text-[0.9375rem] font-bold tabular-nums">{campo.valore}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-bordo px-[1.125rem] py-3">
        <span className="stato stato-ok">
          <Spunta className="h-3 w-3" />
          {dettaglio.stato}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="alone-chiaro relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div aria-hidden="true" className="trama pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="respiro pointer-events-none absolute -top-72 left-1/2 h-[36rem] w-full max-w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_30%,transparent),transparent_68%)]"
      />

      <Contenitore className="relative">
        <Entra className="mx-auto max-w-3xl text-center">
          <p className="occhiello">{hero.etichetta}</p>

          <h1 className="titolo-hero mt-7">
            {hero.titolo}
            <span className="mt-1 block font-bold tracking-[-0.035em] text-secondario [font-size:0.72em]">
              {hero.sottotitolo}
            </span>
          </h1>

          <p className="descrizione mx-auto mt-7 max-w-xl">{hero.testo}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contatti" className="bottone bottone-verde w-full sm:w-auto">
              {azioni.contatta}
              <Freccia />
            </a>
            <a href="#ottieni" className="bottone bottone-contorno w-full sm:w-auto">
              {azioni.cosaOttieni}
              <Freccia />
            </a>
          </div>
        </Entra>

        {/* Due dashboard centrate: la seconda scala sotto la prima e la
            sovrappone leggermente, per dare l'idea di più livelli. */}
        <Entra ritardo={200} className="relative mx-auto mt-16 max-w-3xl">
          <Cruscotto />
          <div className="relative z-10 mx-auto -mt-10 w-[min(26rem,92%)] sm:-mt-12">
            <Dettaglio />
          </div>
          <p className="nota-dimostrativa mt-6 text-center">{notaDemo}</p>
        </Entra>
      </Contenitore>
    </section>
  );
}
