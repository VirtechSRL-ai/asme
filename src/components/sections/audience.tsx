import { site } from "@/content/site";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { pubblico } = site;

export function Audience() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="card rounded-panel grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-16">
          <div>
            <Eyebrow>{pubblico.eyebrow}</Eyebrow>
            <h2 className="h2 mt-4">{pubblico.titolo}</h2>
          </div>
          <div>
            <p className="lede">{pubblico.testo}</p>
            <a href={pubblico.cta.href} className="btn btn-ink mt-8">
              {pubblico.cta.etichetta}
              <ArrowRight />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
