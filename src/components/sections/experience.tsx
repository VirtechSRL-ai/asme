import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { esperienza } = site;
const { lotto } = esperienza;

const evidenziate = new Set<number>(lotto.evidenziate);

/**
 * Rappresentazione di un lotto: molte unità, alcune messe in evidenza, e i
 * dati che vi restano collegati. Schema concettuale, non una schermata.
 */
function Lotto() {
  return (
    <div className="card rounded-panel p-7 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <Eyebrow>{lotto.etichetta}</Eyebrow>
        <span className="text-[0.875rem] text-muted">{lotto.totale} unità</span>
      </div>

      <div className="mt-6 grid grid-cols-8 gap-2" aria-hidden="true">
        {Array.from({ length: lotto.totale }).map((_, i) => (
          <span
            key={i}
            className={`aspect-square rounded-[6px] ${
              evidenziate.has(i)
                ? "bg-accent ring-2 ring-accent/35 ring-offset-2 ring-offset-card"
                : "bg-paper-alt"
            }`}
          />
        ))}
      </div>

      <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-6">
        {lotto.collegamenti.map((voce) => (
          <li key={voce} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-6 shrink-0 bg-accent-text/40" />
            <span className="text-[0.9375rem] font-medium">{voce}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="esperienza" className="surface-mint py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
          <Reveal>
            <Eyebrow>{esperienza.eyebrow}</Eyebrow>
            <h2 className="h2 mt-5 max-w-[16ch]">{esperienza.titolo}</h2>
            <p className="lede mt-6 max-w-xl">{esperienza.testo}</p>

            <a href={esperienza.cta.href} className="btn btn-ink mt-9">
              {esperienza.cta.etichetta}
              <ArrowRight />
            </a>

            <p className="mt-8 max-w-md border-l-2 border-accent-text/30 pl-4 text-[0.875rem] leading-relaxed text-muted">
              {esperienza.didascalia}
            </p>
          </Reveal>

          <Reveal ritardo={120}>
            <Lotto />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
