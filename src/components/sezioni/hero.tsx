import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Spunta } from "../ui";

const { hero, azioni, notaDemo } = site;
const { cruscotto, dettaglio } = hero;

/** Anello percentuale: comunica la quota senza bisogno di un grafico intero. */
function Anello({ quota, tono }: { quota: number; tono: "verde" | "neutro" }) {
  const r = 20;
  const circonferenza = 2 * Math.PI * r;
  const colore = tono === "verde" ? "var(--verde)" : "var(--testo-secondario)";

  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        strokeWidth="5"
        stroke="color-mix(in srgb, var(--scuro) 10%, var(--chiaro))"
      />
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        strokeWidth="5"
        stroke={colore}
        strokeLinecap="round"
        strokeDasharray={`${(circonferenza * quota) / 100} ${circonferenza}`}
        transform="rotate(-90 24 24)"
      />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-[var(--scuro)] text-[0.6875rem] font-extrabold"
        style={{ fontSize: "11px" }}
      >
        {quota}%
      </text>
    </svg>
  );
}

/**
 * Dashboard della hero, volutamente essenziale: titolo, filtri e due sole
 * tessere. Deve far capire l'argomento in un colpo d'occhio, non mostrare
 * l'applicativo intero. Dati dimostrativi.
 */
function Cruscotto() {
  return (
    <div className="pannello pannello-vivo">
      <div className="pannello-testa">
        <span>{cruscotto.titolo}</span>
        <span className="flex gap-1.5">
          {cruscotto.filtri.map((filtro, i) => (
            <span
              key={filtro}
              className={`rounded-pill px-2.5 py-1 text-[0.6875rem] font-bold normal-case tracking-normal ${
                i === 0
                  ? "bg-scuro text-chiaro"
                  : "border border-bordo text-secondario"
              }`}
            >
              {filtro}
            </span>
          ))}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4 pb-9">
        {cruscotto.tessere.map((tessera) => (
          <div
            key={tessera.etichetta}
            className="flex items-center gap-3 rounded-[14px] border border-bordo bg-chiaro px-3 py-3"
          >
            <Anello quota={tessera.quota} tono={tessera.tono} />
            <span className="min-w-0">
              <span className="block text-[1.625rem] font-extrabold leading-none tabular-nums">
                {tessera.valore}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-[0.8125rem] text-secondario">
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    tessera.tono === "verde" ? "bg-verde" : "bg-[var(--testo-secondario)]"
                  }`}
                />
                <span className="leading-tight">{tessera.etichetta}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Seconda dashboard, più piccola e discreta: una singola unità. */
function Dettaglio() {
  return (
    <div className="pannello pannello-vivo">
      <div className="pannello-testa">
        <span>{dettaglio.titolo}</span>
        <span className="codice">{dettaglio.riferimento}</span>
      </div>
      <dl className="flex">
        {dettaglio.campi.map((campo) => (
          <div
            key={campo.etichetta}
            className="flex-1 border-r border-bordo px-4 py-3 last:border-r-0"
          >
            <dt className="etichetta-dato">{campo.etichetta}</dt>
            <dd className="mt-1 text-[0.9375rem] font-bold tabular-nums">{campo.valore}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-bordo px-4 py-2.5">
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
    <section className="alone-chiaro relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div aria-hidden="true" className="trama pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="respiro pointer-events-none absolute -top-72 left-1/2 h-[36rem] w-full max-w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_28%,transparent),transparent_68%)]"
      />

      <Contenitore className="relative">
        <Entra className="mx-auto max-w-[66rem] text-center">
          <p className="occhiello">{hero.etichetta}</p>

          {/* Un unico titolo su due righe, stessa dimensione e stesso peso */}
          <h1 className="titolo-hero mt-7">
            <span className="block">{hero.titoloRiga1}</span>
            <span className="block">{hero.titoloRiga2}</span>
          </h1>

          <p className="descrizione mx-auto mt-6 max-w-lg">{hero.testo}</p>

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

        {/* Due dashboard compatte, centrate: la seconda più stretta e sfalsata,
            così suggerisce la profondità senza occupare la schermata. */}
        <Entra ritardo={200} className="relative mx-auto mt-14 w-full max-w-[26rem]">
          <Cruscotto />
          <div className="relative z-10 mx-auto -mt-5 w-[86%] translate-x-3">
            <Dettaglio />
          </div>
          <p className="nota-dimostrativa mt-5 text-center">{notaDemo}</p>
        </Entra>
      </Contenitore>
    </section>
  );
}
