import { site } from "@/content/site";
import { ArrowRight, Container, SectionIntro } from "../ui";

const { partner } = site;

export function Partners() {
  return (
    <section className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <Container>
        <SectionIntro
          eyebrow={partner.eyebrow}
          titolo={partner.titolo}
          testo={partner.testo}
          azione={
            <a href={partner.cta.href} className="btn btn-ink">
              {partner.cta.etichetta}
              <ArrowRight />
            </a>
          }
        />

        <ul className="mt-16 grid gap-5 lg:grid-cols-3">
          {partner.voci.map((voce, i) => (
            <li key={voce.titolo} className="card rounded-panel p-7">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-[14px] bg-paper-alt font-mono text-[0.8125rem] font-medium"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[1.1875rem] font-semibold leading-snug tracking-[-0.03em]">
                {voce.titolo}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{voce.testo}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
