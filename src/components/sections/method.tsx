import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Check, Container, Import, Link, SectionIntro } from "../ui";

const { metodo } = site;

const icone = { import: Import, link: Link, check: Check };

/**
 * 05 — Metodo: tre passaggi numerati, in sequenza orizzontale su desktop e
 * impilati su mobile mantenendo l'ordine.
 */
export function Method() {
  return (
    <section id="metodo" className="surface-alt py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow={metodo.eyebrow}
            titolo={metodo.titolo}
            testo={metodo.testo}
            allineamento="centro"
          />
        </Reveal>

        <Reveal as="ol" cascata className="relative mt-16 grid gap-5 lg:grid-cols-3">
          {metodo.passaggi.map((passaggio) => {
            const Icona = icone[passaggio.icona];
            return (
              <li key={passaggio.numero} className="card card-hover flex flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 place-items-center rounded-[16px] bg-accent-soft text-accent-text"
                  >
                    <Icona className="h-6 w-6" />
                  </span>
                  <span className="text-[2rem] font-extrabold leading-none tracking-[-0.04em] text-muted-soft">
                    {passaggio.numero}
                  </span>
                </div>

                <h3 className="h3 mt-7">{passaggio.titolo}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-muted">{passaggio.testo}</p>
              </li>
            );
          })}
        </Reveal>

        <Reveal ritardo={60} className="mt-12 flex justify-center">
          <a href={metodo.cta.href} className="btn btn-ink">
            {metodo.cta.etichetta}
            <ArrowRight />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
