import { site } from "@/content/site";
import { ArrowRight, Container, SectionIntro } from "../ui";

const { catalogo } = site;

export function Catalog() {
  return (
    <section id="catalogo" className="py-24 sm:py-28">
      <Container>
        <SectionIntro eyebrow={catalogo.eyebrow} titolo={catalogo.titolo} testo={catalogo.testo} />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalogo.voci.map((voce) => (
            <li key={voce.codice}>
              <a
                href="#contatti"
                className="card group flex h-full flex-col p-6 transition-colors hover:border-ink"
              >
                <span className="chip self-start">{voce.categoria}</span>
                <span className="mt-5 block text-[1.25rem] font-semibold tracking-[-0.03em]">
                  {voce.codice}
                </span>
                <span className="mt-2 block flex-1 text-[0.9375rem] leading-relaxed text-muted">
                  {voce.testo}
                </span>
                <span className="link-arrow mt-6 text-[0.875rem]">
                  {catalogo.azione} {voce.codice}
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
