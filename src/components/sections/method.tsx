import { site } from "@/content/site";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { metodo } = site;

/**
 * 05 — Metodo: sequenza orizzontale di tre passaggi numerati.
 * Su mobile le card si impilano mantenendo l'ordine.
 */
export function Method() {
  return (
    <section id="metodo" className="py-24 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{metodo.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{metodo.titolo}</h2>
        </div>

        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {metodo.passaggi.map((passaggio) => (
            <li key={passaggio.numero} className="card rounded-panel flex flex-col p-7">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 place-items-center rounded-pill bg-ink font-mono text-[0.75rem] font-medium text-paper"
                >
                  {passaggio.numero}
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </span>

              <h3 className="mt-6 text-[1.1875rem] font-semibold leading-snug tracking-[-0.03em]">
                {passaggio.titolo}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                {passaggio.testo}
              </p>

              {/* Segnaposto per la schermata reale del passaggio */}
              <div className="mt-6 rounded-[16px] border border-dashed border-line bg-paper-alt px-4 py-5">
                <p className="eyebrow">Screenshot</p>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
                  {passaggio.screenshot}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <a href={metodo.cta.href} className="btn btn-ink mt-10">
          {metodo.cta.etichetta}
          <ArrowRight />
        </a>
      </Container>
    </section>
  );
}
