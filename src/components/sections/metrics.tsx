import { site } from "@/content/site";
import { Container, Eyebrow } from "../ui";

const { metriche } = site;

export function Metrics() {
  return (
    <section className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{metriche.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{metriche.titolo}</h2>
        </div>

        <dl className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {metriche.voci.map((voce) => (
            <div key={voce.valore} className="border-t-2 border-ink pt-6">
              <dt>
                <span className="block text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
                  {voce.valore}
                </span>
                <span className="mt-2 block text-[1.0625rem] font-medium tracking-[-0.02em]">
                  {voce.etichetta}
                </span>
              </dt>
              <dd className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{voce.testo}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
