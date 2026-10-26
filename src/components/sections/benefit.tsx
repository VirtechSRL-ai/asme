import { site } from "@/content/site";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { beneficio } = site;
const { diagramma } = beneficio;

/**
 * Diagramma editoriale: unità → componenti → materiali/certificati.
 * Non è una schermata del prodotto, è uno schema: i codici sono fittizi e
 * dichiarati come esempio, come richiesto dal brief.
 */
function Diagramma() {
  const colonne = [diagramma.componenti, diagramma.documenti];

  return (
    <div className="card rounded-panel p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1.1fr)] lg:gap-0">
        {/* Unità */}
        <div className="lg:pr-8">
          <p className="eyebrow">{diagramma.unita.etichetta}</p>
          <div className="mt-3 rounded-[18px] bg-ink p-5 text-paper">
            <p className="text-[1.125rem] font-semibold tracking-[-0.025em]">
              {diagramma.unita.etichetta}
            </p>
            <p className="mt-1 font-mono text-[0.75rem] text-muted-on-ink">
              {diagramma.unita.esempio}
            </p>
          </div>
        </div>

        {/* Componenti e documenti, collegati da una guida verticale */}
        {colonne.map((colonna) => (
          <div key={colonna.etichetta} className="lg:border-l lg:border-line lg:pl-8">
            <p className="eyebrow">{colonna.etichetta}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {colonna.voci.map((voce) => (
                <li
                  key={voce}
                  className="relative rounded-[14px] border border-line bg-paper-alt px-4 py-3 text-[0.875rem]"
                >
                  {/* Trattino di collegamento verso la colonna precedente */}
                  <span
                    aria-hidden="true"
                    className="absolute right-full top-1/2 hidden h-px w-8 bg-line lg:block"
                  />
                  {voce}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-line pt-5 font-mono text-[0.6875rem] text-muted">
        Schema di esempio. I codici mostrati sono fittizi.
      </p>
    </div>
  );
}

/** 03 — Beneficio e contesto. */
export function Benefit() {
  return (
    <section id="beneficio" className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{beneficio.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{beneficio.titolo}</h2>
          <p className="lede mt-5">{beneficio.testo}</p>
        </div>

        <dl className="mt-14 grid gap-5 sm:grid-cols-3">
          {beneficio.microMessaggi.map((voce) => (
            <div key={voce.titolo} className="border-t-2 border-ink pt-5">
              <dt className="text-[1.125rem] font-semibold tracking-[-0.025em]">{voce.titolo}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{voce.testo}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14">
          <Diagramma />
        </div>

        <a href={beneficio.cta.href} className="btn btn-ink mt-10">
          {beneficio.cta.etichetta}
          <ArrowRight />
        </a>
      </Container>
    </section>
  );
}
