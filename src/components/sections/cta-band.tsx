import { site } from "@/content/site";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { banda } = site;

export function CtaBand() {
  return (
    <section id="contatti" className="py-24 sm:py-28">
      <Container>
        <div className="on-ink rounded-panel relative overflow-hidden px-8 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/2 h-[28rem] w-[46rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,193,77,0.25),transparent_65%)]"
          />
          <div className="relative mx-auto max-w-3xl">
            <Eyebrow>{banda.eyebrow}</Eyebrow>
            <h2 className="h2 mt-4">{banda.titolo}</h2>
            <p className="lede mx-auto mt-5 max-w-xl">{banda.testo}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={banda.ctaPrimaria.href} className="btn btn-accent">
                {banda.ctaPrimaria.etichetta}
                <ArrowRight />
              </a>
              <a href={banda.ctaSecondaria.href} className="btn btn-outline">
                {banda.ctaSecondaria.etichetta}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
