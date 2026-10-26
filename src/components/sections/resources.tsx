import { site } from "@/content/site";
import { ArrowRight, Container, SectionIntro } from "../ui";

const { risorse } = site;

export function Resources() {
  return (
    <section className="border-t border-line bg-paper-alt py-24 sm:py-28">
      <Container>
        <SectionIntro
          eyebrow={risorse.eyebrow}
          titolo={risorse.titolo}
          testo={risorse.testo}
          azione={
            <a href={risorse.cta.href} className="btn btn-outline">
              {risorse.cta.etichetta}
              <ArrowRight />
            </a>
          }
        />

        <ul className="mt-16 grid gap-5 lg:grid-cols-3">
          {risorse.voci.map((voce, i) => (
            <li key={i}>
              <a
                href="#contatti"
                className="card group flex h-full flex-col p-7 transition-colors hover:border-ink"
              >
                <span className="chip self-start">{voce.tag}</span>
                <span className="mt-5 block text-[1.1875rem] font-semibold leading-snug tracking-[-0.03em]">
                  {voce.titolo}
                </span>
                <span className="mt-3 block flex-1 text-[0.9375rem] leading-relaxed text-muted">
                  {voce.testo}
                </span>
                <span className="link-arrow mt-6 text-[0.875rem]">
                  Leggi
                  <ArrowRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
