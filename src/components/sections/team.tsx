import { site } from "@/content/site";
import { ArrowRight, Container, SectionIntro } from "../ui";

const { team } = site;

export function Team() {
  return (
    <section id="team" className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <Container>
        <SectionIntro
          eyebrow={team.eyebrow}
          titolo={team.titolo}
          testo={team.testo}
          azione={
            <a href={team.cta.href} className="btn btn-outline">
              {team.cta.etichetta}
              <ArrowRight />
            </a>
          }
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.persone.map((persona, i) => (
            <li key={i} className="card rounded-panel overflow-hidden">
              {/* Riquadro ritratto: sostituire con la foto reale */}
              <div className="relative flex h-56 items-end justify-start bg-ink p-5">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,193,77,0.28),transparent_60%)]"
                />
                <span className="relative rounded-pill bg-paper/95 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.08em] text-ink">
                  {persona.badge}
                </span>
              </div>

              <div className="p-5">
                <p className="text-[1.0625rem] font-semibold tracking-[-0.025em]">{persona.nome}</p>
                <p className="mt-1 text-[0.875rem] leading-snug text-muted">{persona.ruolo}</p>

                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-5">
                  <div>
                    <dt className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted">
                      Esperienza
                    </dt>
                    <dd className="mt-1 text-[0.875rem] font-medium">{persona.esperienza}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted">
                      Progetti
                    </dt>
                    <dd className="mt-1 text-[0.875rem] font-medium">{persona.numero}</dd>
                  </div>
                </dl>

                <a href={team.cta.href} className="link-arrow mt-5 text-muted hover:text-text">
                  Apri scheda
                  <ArrowRight />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
