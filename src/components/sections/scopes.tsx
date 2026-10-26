import { site } from "@/content/site";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { ambiti } = site;

/**
 * 06 — Ambiti: due colonne simmetriche ASME / PED collegate da una fascia.
 * Niente bollini o icone che possano sembrare certificazioni rilasciate.
 */
export function Scopes() {
  return (
    <section id="ambiti" className="on-ink py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{ambiti.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{ambiti.titolo}</h2>
        </div>

        {/* Fascia di collegamento fra le due colonne */}
        <div className="mt-14 flex items-center justify-center gap-3 sm:gap-5">
          {ambiti.fascia.map((voce, i) => (
            <span key={voce} className="flex items-center gap-3 sm:gap-5">
              {i > 0 ? (
                <span aria-hidden="true" className="h-px w-6 bg-line-on-ink sm:w-12" />
              ) : null}
              <span className="rounded-pill border border-line-on-ink px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted-on-ink">
                {voce}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {ambiti.colonne.map((colonna) => (
            <div key={colonna.sigla} className="card rounded-panel flex flex-col p-8">
              <p className="font-mono text-[1.75rem] font-medium tracking-[-0.02em] text-accent">
                {colonna.sigla}
              </p>
              <p className="mt-5 flex-1 text-[1.0625rem] leading-relaxed text-muted-on-ink">
                {colonna.testo}
              </p>
              <p className="mt-7 rounded-[16px] border border-dashed border-line-on-ink px-4 py-4 text-[0.8125rem] leading-relaxed text-muted-on-ink">
                {colonna.nota}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href={ambiti.cta.href} className="btn btn-accent">
            {ambiti.cta.etichetta}
            <ArrowRight />
          </a>
        </div>
      </Container>
    </section>
  );
}
