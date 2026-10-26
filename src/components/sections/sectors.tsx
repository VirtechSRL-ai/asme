import { site } from "@/content/site";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { settori } = site;

export function Sectors() {
  return (
    <section className="on-ink py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{settori.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{settori.titolo}</h2>
        </div>

        <ul className="mt-14 border-t border-line-on-ink">
          {settori.voci.map((voce) => (
            <li key={voce.nome} className="border-b border-line-on-ink">
              <a
                href="#contatti"
                className="group flex flex-col gap-2 py-7 transition-colors sm:flex-row sm:items-center sm:gap-8 hover:text-accent"
              >
                <span className="text-[1.375rem] font-semibold tracking-[-0.03em] sm:w-80 sm:shrink-0">
                  {voce.nome}
                </span>
                <span className="flex-1 text-[0.9375rem] text-muted-on-ink">{voce.testo}</span>
                <ArrowRight className="hidden h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 sm:block" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
