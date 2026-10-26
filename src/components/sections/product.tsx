import { site } from "@/content/site";
import { ScreenshotFrame } from "../screenshot-frame";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { prodotto } = site;

/** 04 — Prodotto: una sola interfaccia reale, con tre callout sottili. */
export function Product() {
  return (
    <section id="prodotto" className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{prodotto.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{prodotto.titolo}</h2>
          <p className="lede mt-5">{prodotto.testo}</p>
        </div>

        <div className="mt-14">
          <ScreenshotFrame
            titolo={prodotto.screenshot.titolo}
            testo={prodotto.screenshot.testo}
            callout={prodotto.screenshot.callout}
            classeAltezza="min-h-[28rem]"
          />
        </div>

        <dl className="mt-10 grid gap-5 sm:grid-cols-3">
          {prodotto.card.map((voce) => (
            <div key={voce.titolo} className="card p-6">
              <dt className="text-[1.0625rem] font-semibold tracking-[-0.025em]">{voce.titolo}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{voce.testo}</dd>
            </div>
          ))}
        </dl>

        <a href={prodotto.cta.href} className="btn btn-ink mt-10">
          {prodotto.cta.etichetta}
          <ArrowRight />
        </a>
      </Container>
    </section>
  );
}
