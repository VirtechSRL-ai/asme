import { site } from "@/content/site";
import { ScreenshotFrame } from "../screenshot-frame";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { hero } = site;

/** 01 — Hero: messaggio a sinistra, prodotto a destra. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_65%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="display mt-5">{hero.titolo}</h1>
            <p className="lede mt-7 max-w-xl">{hero.testo}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={hero.ctaPrimaria.href} className="btn btn-ink">
                {hero.ctaPrimaria.etichetta}
                <ArrowRight />
              </a>
              <a href={hero.ctaSecondaria.href} className="btn btn-outline">
                {hero.ctaSecondaria.etichetta}
              </a>
            </div>
          </div>

          <ScreenshotFrame
            titolo={hero.screenshot.titolo}
            testo={hero.screenshot.testo}
            classeAltezza="min-h-[26rem]"
          />
        </div>
      </Container>
    </section>
  );
}
