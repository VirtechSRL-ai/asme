import { site } from "@/content/site";
import { ArrowRight, Container, SectionIntro } from "../ui";

const { percorso } = site;

export function Process() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionIntro
          eyebrow={percorso.eyebrow}
          titolo={percorso.titolo}
          testo={percorso.testo}
          azione={
            <a href={percorso.cta.href} className="btn btn-outline">
              {percorso.cta.etichetta}
              <ArrowRight />
            </a>
          }
        />

        <ol className="mt-16 grid gap-5 lg:grid-cols-3">
          {percorso.fasi.map((fase, i) => (
            <li key={fase.titolo} className="card rounded-panel flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.75rem] text-muted">
                  {String(i + 1).padStart(2, "0")} / {String(percorso.fasi.length).padStart(2, "0")}
                </span>
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 place-items-center rounded-pill bg-ink text-[0.625rem] font-semibold text-paper"
                  >
                    {fase.persona.slice(0, 1)}
                  </span>
                  <span className="text-[0.8125rem] text-muted">{fase.persona}</span>
                </span>
              </div>

              <h3 className="mt-7 text-[1.25rem] font-semibold leading-snug tracking-[-0.03em]">
                {fase.titolo}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                {fase.testo}
              </p>

              <span
                aria-hidden="true"
                className="mt-7 h-1 w-full overflow-hidden rounded-pill bg-paper-alt"
              >
                <span
                  className="block h-full rounded-pill bg-accent"
                  style={{ width: `${((i + 1) / percorso.fasi.length) * 100}%` }}
                />
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
