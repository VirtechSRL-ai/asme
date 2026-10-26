import { site } from "@/content/site";
import { ArrowRight, Container, SectionIntro } from "../ui";

const { casiStudio } = site;

export function CaseStudies() {
  return (
    <section id="casi-studio" className="py-24 sm:py-28">
      <Container>
        <SectionIntro
          eyebrow={casiStudio.eyebrow}
          titolo={casiStudio.titolo}
          testo={casiStudio.testo}
          azione={
            <a href={casiStudio.cta.href} className="btn btn-outline">
              {casiStudio.cta.etichetta}
              <ArrowRight />
            </a>
          }
        />

        <ul className="mt-16 grid gap-5 lg:grid-cols-3">
          {casiStudio.voci.map((voce, i) => (
            <li key={i}>
              <a href="#contatti" className="card rounded-panel group block overflow-hidden">
                {/* Riquadro immagine: sostituire con la foto del progetto */}
                <span className="relative block h-52 bg-ink">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(255,193,77,0.3),transparent_60%)]"
                  />
                  <span className="absolute left-5 top-5 rounded-pill bg-paper/95 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.08em] text-ink">
                    {voce.settore}
                  </span>
                </span>
                <span className="block p-6">
                  <span className="block text-[1.1875rem] font-semibold tracking-[-0.03em]">
                    {voce.cliente}
                  </span>
                  <span className="mt-2 block text-[0.9375rem] leading-relaxed text-muted">
                    {voce.risultato}
                  </span>
                  <span className="link-arrow mt-5 text-[0.875rem]">
                    Leggi il caso
                    <ArrowRight />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
