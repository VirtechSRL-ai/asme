import { site } from "@/content/site";
import { ArrowRight, Container } from "../ui";

const { hero } = site;
const { pannello } = hero;

function Stelle() {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-accent">
          <path d="M8 1l2.06 4.42 4.84.62-3.56 3.3.92 4.8L8 11.8l-4.26 2.34.92-4.8L1.1 6.04l4.84-.62L8 1z" />
        </svg>
      ))}
    </span>
  );
}

/** Pannello illustrativo: non è un prodotto reale, è un mock di interfaccia. */
function PannelloProdotto() {
  return (
    <div className="relative">
      <div className="card rounded-panel p-5 shadow-[0_24px_60px_-28px_rgba(18,28,43,0.28)] sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-[0.9375rem] font-semibold tracking-[-0.02em]">{pannello.titolo}</p>
          <span className="chip">Live</span>
        </div>

        {/* Barra di avanzamento con i due blocchi di numeri */}
        <div className="mt-5">
          <div className="flex h-2 overflow-hidden rounded-pill bg-paper-alt">
            <span
              className="h-full rounded-pill bg-ink"
              style={{ width: `${pannello.percentuale}%` }}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[pannello.completati, pannello.inCorso].map((blocco) => (
              <div key={blocco.etichetta} className="rounded-[14px] bg-paper px-4 py-3">
                <p className="font-mono text-[0.6875rem] text-muted">{blocco.quota}</p>
                <p className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{blocco.valore}</p>
                <p className="text-[0.8125rem] text-muted">{blocco.etichetta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filtri */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {pannello.filtri.map((filtro, i) => (
            <span
              key={filtro}
              className={
                i === 0
                  ? "rounded-pill bg-ink px-3 py-1.5 text-xs font-medium text-paper"
                  : "chip"
              }
            >
              {filtro}
            </span>
          ))}
        </div>

        {/* Elenco attività */}
        <div className="mt-6 border-t border-line pt-5">
          <div className="flex items-center justify-between">
            <p className="text-[0.9375rem] font-semibold tracking-[-0.02em]">
              {pannello.elenco.titolo}
            </p>
            <span className="font-mono text-[0.6875rem] text-muted">{pannello.elenco.link}</span>
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            {pannello.elenco.voci.map((voce) => (
              <li
                key={voce.nome}
                className="flex items-center justify-between gap-3 rounded-[14px] bg-paper px-4 py-3"
              >
                <span className="min-w-0">
                  <span className="block truncate text-[0.875rem] font-medium">{voce.nome}</span>
                  <span className="block text-[0.75rem] text-muted">{voce.stato}</span>
                </span>
                <span className="shrink-0 font-mono text-[0.6875rem] text-muted">{voce.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fumetto sovrapposto */}
      <div className="card -mt-4 ml-4 flex w-[min(20rem,90%)] items-start gap-3 rounded-[20px] p-4 shadow-[0_18px_40px_-20px_rgba(18,28,43,0.3)] sm:-mt-6 sm:ml-8">
        <span
          aria-hidden="true"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-pill bg-accent text-[0.6875rem] font-semibold text-accent-ink"
        >
          {pannello.messaggio.autore.slice(0, 1)}
        </span>
        <span>
          <span className="block text-[0.8125rem] leading-snug">{pannello.messaggio.testo}</span>
          <span className="mt-1 block font-mono text-[0.6875rem] text-muted">
            {pannello.messaggio.autore}
          </span>
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
      {/* Alone morbido dietro al titolo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,193,77,0.22),transparent_65%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <h1 className="display">{hero.titolo}</h1>
            <p className="lede mt-7 max-w-xl">{hero.sottotitolo}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={hero.ctaPrimaria.href} className="btn btn-ink">
                {hero.ctaPrimaria.etichetta}
                <ArrowRight />
              </a>
              <a href={hero.ctaSecondaria.href} className="btn btn-outline">
                {hero.ctaSecondaria.etichetta}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Stelle />
              <p className="text-[0.875rem] text-muted">
                <span className="font-semibold text-text">{hero.valutazione.punteggio}</span>{" "}
                {hero.valutazione.fonte}
              </p>
            </div>
          </div>

          <PannelloProdotto />
        </div>
      </Container>
    </section>
  );
}
