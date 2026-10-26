import { site } from "@/content/site";
import { ArrowRight, Check, Container, Eyebrow } from "../ui";

const { pilastri } = site;

/** Visuale del primo blocco: i passaggi del percorso, come uno stepper. */
function VisualeStepper({ punti }: { punti: readonly string[] }) {
  return (
    <div className="card rounded-panel p-6">
      <p className="eyebrow">Percorso</p>
      <ol className="mt-5 flex flex-col">
        {punti.map((punto, i) => {
          const fatto = i < punti.length - 2;
          const ultimo = i === punti.length - 1;
          return (
            <li key={punto} className="flex gap-4">
              <span className="flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-pill border ${
                    fatto
                      ? "border-ink bg-ink text-paper"
                      : ultimo
                        ? "border-accent bg-accent text-accent-ink"
                        : "border-line bg-paper text-muted"
                  }`}
                >
                  {fatto ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <span className="font-mono text-[0.625rem]">{i + 1}</span>
                  )}
                </span>
                {!ultimo ? <span className="w-px flex-1 bg-line" /> : null}
              </span>
              <span className={`text-[0.9375rem] ${ultimo ? "font-semibold" : ""} ${fatto ? "text-muted" : ""} pb-5`}>
                {punto}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Visuale del secondo blocco: scadenze in arrivo. */
function VisualeScadenze({ punti }: { punti: readonly string[] }) {
  return (
    <div className="card rounded-panel p-6">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Scadenze</p>
        <span className="chip">Prossimi 12 mesi</span>
      </div>
      <ul className="mt-5 flex flex-col gap-2.5">
        {punti.map((punto, i) => (
          <li
            key={punto}
            className="flex items-center justify-between gap-3 rounded-[16px] bg-paper px-4 py-3.5"
          >
            <span className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`h-2 w-2 shrink-0 rounded-pill ${i === 0 ? "bg-accent" : "bg-line"}`}
              />
              <span className="text-[0.875rem] font-medium">{punto}</span>
            </span>
            <span className="font-mono text-[0.6875rem] text-muted">0{i + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Visuale del terzo blocco: le categorie come griglia di badge. */
function VisualeCategorie({ punti }: { punti: readonly string[] }) {
  return (
    <div className="card rounded-panel p-6">
      <p className="eyebrow">Ambiti</p>
      <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
        {punti.map((punto) => (
          <div
            key={punto}
            className="rounded-[16px] bg-paper px-4 py-5 text-center"
          >
            <span
              aria-hidden="true"
              className="mx-auto grid h-9 w-9 place-items-center rounded-pill bg-ink text-paper"
            >
              <Check className="h-4 w-4" />
            </span>
            <p className="mt-3 text-[0.875rem] font-medium">{punto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuali = [VisualeStepper, VisualeScadenze, VisualeCategorie];

export function Pillars() {
  return (
    <section id="servizi" className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{pilastri.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{pilastri.titolo}</h2>
          <p className="lede mt-5">{pilastri.testo}</p>
        </div>

        <div className="mt-20 flex flex-col gap-24">
          {pilastri.blocchi.map((blocco, i) => {
            const Visuale = visuali[i] ?? VisualeCategorie;
            const invertito = i % 2 === 1;
            return (
              <div
                key={blocco.tag}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={invertito ? "lg:order-2" : undefined}>
                  <span className="rounded-pill bg-accent px-3 py-1.5 font-mono text-[0.6875rem] font-medium tracking-[0.1em] text-accent-ink">
                    {blocco.tag}
                  </span>
                  <h3 className="h3 mt-6">{blocco.titolo}</h3>
                  <p className="lede mt-5">{blocco.testo}</p>
                  <a href={blocco.cta.href} className="link-arrow mt-7">
                    {blocco.cta.etichetta}
                    <ArrowRight />
                  </a>
                </div>
                <div className={invertito ? "lg:order-1" : undefined}>
                  <Visuale punti={blocco.punti} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
