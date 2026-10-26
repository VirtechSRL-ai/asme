import { site } from "@/content/site";
import { Container, Eyebrow } from "../ui";

const { recensioni } = site;

function Stelle() {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-accent">
          <path d="M8 1l2.06 4.42 4.84.62-3.56 3.3.92 4.8L8 11.8l-4.26 2.34.92-4.8L1.1 6.04l4.84-.62L8 1z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="border-y border-line bg-paper-alt py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{recensioni.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{recensioni.titolo}</h2>
          <p className="lede mt-5">{recensioni.testo}</p>
        </div>

        <ul className="mt-16 grid gap-5 lg:grid-cols-3">
          {recensioni.voci.map((voce, i) => (
            <li key={i} className="card rounded-panel flex flex-col p-7">
              <Stelle />
              <blockquote className="mt-5 flex-1 text-[1.0625rem] leading-relaxed tracking-[-0.01em]">
                {voce.testo}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-6">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-ink font-mono text-[0.75rem] font-medium text-paper"
                >
                  {voce.iniziali}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.9375rem] font-semibold tracking-[-0.02em]">
                    {voce.nome}
                  </span>
                  <span className="block truncate text-[0.8125rem] text-muted">{voce.ruolo}</span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
