import { site } from "@/content/site";
import { ScreenshotFrame } from "../screenshot-frame";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { esperienza } = site;

/** 02 — Prova: l'esperienza W&H, layout editoriale ampio. */
export function Experience() {
  return (
    <section id="esperienza" className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{esperienza.eyebrow}</Eyebrow>
            <h2 className="h2 mt-4">{esperienza.titolo}</h2>
          </div>
          <div>
            <p className="lede">{esperienza.testo}</p>
            <a href={esperienza.cta.href} className="btn btn-ink mt-8">
              {esperienza.cta.etichetta}
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="mt-14">
          <ScreenshotFrame
            titolo={esperienza.screenshot.titolo}
            testo={esperienza.screenshot.testo}
            classeAltezza="min-h-[24rem]"
          />
          <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted">
            {esperienza.didascalia}
          </p>
        </div>
      </Container>
    </section>
  );
}
