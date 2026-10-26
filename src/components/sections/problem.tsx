import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { Container, Dossier, Eyebrow, Inspect, Trace } from "../ui";

const { problema } = site;
const icone = { trace: Trace, inspect: Inspect, dossier: Dossier };

/** 02 — Il problema, su fondo scuro: il momento di contrasto dopo la hero. */
export function Problem() {
  return (
    <section id="problema" className="on-dark py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <Eyebrow>{problema.eyebrow}</Eyebrow>
              <h2 className="h2 mt-5">{problema.titolo}</h2>
            </div>
            <p className="lede">{problema.testo}</p>
          </div>
        </Reveal>

        <Reveal as="dl" cascata className="mt-14 grid gap-px overflow-hidden sm:grid-cols-3">
          {problema.punti.map((punto) => {
            const Icona = icone[punto.icona];
            return (
              <div key={punto.titolo} className="py-7 sm:px-7 sm:first:pl-0 sm:last:pr-0">
                {/* Filetto verde che si disegna quando la sezione entra in vista */}
                <span
                  aria-hidden="true"
                  className="traccia block h-[3px] w-14 rounded-full bg-green"
                />
                <dt className="mt-6 flex items-center gap-3">
                  <Icona className="h-6 w-6 text-green" />
                  <span className="text-[1.3125rem] font-extrabold tracking-[-0.025em]">
                    {punto.titolo}
                  </span>
                </dt>
                <dd className="mt-2.5 text-[1rem] leading-relaxed text-on-dark-soft">
                  {punto.testo}
                </dd>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
