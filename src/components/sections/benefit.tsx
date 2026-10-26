import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Dossier, Eyebrow, Inspect, Trace } from "../ui";

const { beneficio } = site;
const { diagramma } = beneficio;

const icone = { trace: Trace, inspect: Inspect, dossier: Dossier };

/**
 * Schema editoriale: da una singola unità si apre il ventaglio dei componenti
 * e, da questi, dei materiali e dei certificati. I codici sono fittizi e
 * dichiarati come tali nella nota.
 */
function Diagramma() {
  const colonne = [diagramma.componenti, diagramma.documenti];

  return (
    <div className="card rounded-panel overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,1fr)]">
        {/* Unità di partenza */}
        {/* on-ink, non solo bg-ink: serve ad attivare le varianti per fondo
            scuro di .eyebrow, che altrimenti resterebbe verde su verde. */}
        <div className="on-ink p-7 sm:p-8">
          <span className="eyebrow">{diagramma.unita.etichetta}</span>
          <p className="mt-5 text-[1.5rem] font-extrabold tracking-[-0.03em]">
            {diagramma.unita.esempio}
          </p>
          <p className="mt-2 text-[0.9375rem] text-muted-on-ink">
            Una singola apparecchiatura prodotta.
          </p>
        </div>

        {/* Ventagli collegati */}
        {colonne.map((colonna) => (
          <div
            key={colonna.etichetta}
            className="border-t border-line p-7 sm:p-8 lg:border-l lg:border-t-0"
          >
            <span className="eyebrow">{colonna.etichetta}</span>
            <ul className="mt-5 flex flex-col gap-2.5">
              {colonna.voci.map((voce) => (
                <li
                  key={voce}
                  className="relative rounded-[14px] border border-line bg-paper-alt px-4 py-3 text-[0.9375rem]"
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

      <p className="border-t border-line px-7 py-4 text-[0.8125rem] text-muted sm:px-8">
        {diagramma.nota}
      </p>
    </div>
  );
}

export function Benefit() {
  return (
    <section id="beneficio" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{beneficio.eyebrow}</Eyebrow>
            <h2 className="h2 mt-5">{beneficio.titolo}</h2>
            <p className="lede mt-6">{beneficio.testo}</p>
          </div>
        </Reveal>

        <Reveal as="dl" cascata className="mt-14 grid gap-6 sm:grid-cols-3">
          {beneficio.microMessaggi.map((voce) => {
            const Icona = icone[voce.icona];
            return (
              <div key={voce.titolo} className="border-t-2 border-ink pt-6">
                <dt className="flex items-center gap-3">
                  <Icona className="h-5 w-5 text-accent-text" />
                  <span className="text-[1.1875rem] font-bold tracking-[-0.02em]">
                    {voce.titolo}
                  </span>
                </dt>
                <dd className="mt-3 text-[1rem] leading-relaxed text-muted">{voce.testo}</dd>
              </div>
            );
          })}
        </Reveal>

        <Reveal ritardo={100} className="mt-14">
          <Diagramma />
        </Reveal>

        <Reveal ritardo={60}>
          <a href={beneficio.cta.href} className="btn btn-ink mt-10">
            {beneficio.cta.etichetta}
            <ArrowRight />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
