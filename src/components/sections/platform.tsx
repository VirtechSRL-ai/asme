import { site } from "@/content/site";
import { ArrowRight, Check, Container, Eyebrow } from "../ui";

const { piattaforma } = site;

/** Mock dell'applicazione: barra laterale, ricerca e tabella attività. */
function MockApp() {
  return (
    <div className="overflow-hidden rounded-panel border border-line-on-ink bg-ink-alt">
      {/* Barra superiore */}
      <div className="flex items-center gap-3 border-b border-line-on-ink px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          {["bg-white/20", "bg-white/20", "bg-white/20"].map((c, i) => (
            <span key={i} className={`h-2.5 w-2.5 rounded-pill ${c}`} />
          ))}
        </span>
        <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-pill bg-black/25 px-3 py-1.5">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-muted-on-ink">
            <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="truncate text-[0.75rem] text-muted-on-ink">{piattaforma.ricerca}</span>
          <span className="ml-auto hidden shrink-0 rounded-[6px] border border-line-on-ink px-1.5 font-mono text-[0.625rem] text-muted-on-ink sm:block">
            ⌘K
          </span>
        </div>
        <span className="hidden shrink-0 text-[0.75rem] text-muted-on-ink sm:block">
          {piattaforma.saluto}
        </span>
      </div>

      <div className="grid sm:grid-cols-[13rem_1fr]">
        {/* Barra laterale */}
        <nav aria-hidden="true" className="hidden border-r border-line-on-ink p-4 sm:block">
          {piattaforma.menu.map((gruppo) => (
            <div key={gruppo.gruppo} className="mb-5">
              <p className="font-mono text-[0.5625rem] tracking-[0.12em] text-muted-on-ink">
                {gruppo.gruppo}
              </p>
              <ul className="mt-2 flex flex-col gap-0.5">
                {gruppo.voci.map((voce, i) => (
                  <li
                    key={voce}
                    className={`rounded-[8px] px-2.5 py-1.5 text-[0.8125rem] ${
                      gruppo.gruppo === piattaforma.menu[0].gruppo && i === 0
                        ? "bg-white/10 font-medium text-paper"
                        : "text-muted-on-ink"
                    }`}
                  >
                    {voce}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Area di lavoro */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 rounded-[14px] border border-line-on-ink px-4 py-3">
              <span className="text-xl font-semibold tracking-[-0.03em] text-accent">
                {piattaforma.criticita.valore}
              </span>
              <span className="text-[0.8125rem] text-muted-on-ink">
                {piattaforma.criticita.etichetta}
              </span>
              <span className="ml-1 rounded-pill bg-accent px-2.5 py-1 text-[0.6875rem] font-medium text-accent-ink">
                {piattaforma.criticita.azione}
              </span>
            </div>
          </div>

          <p className="mt-5 text-[0.9375rem] font-semibold tracking-[-0.02em]">
            {piattaforma.attivita.titolo}
          </p>

          {/* Intestazioni di tabella */}
          <div className="mt-3 hidden grid-cols-[1fr_8rem_5rem] gap-3 border-b border-line-on-ink pb-2 sm:grid">
            {piattaforma.attivita.colonne.map((colonna) => (
              <span
                key={colonna}
                className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-muted-on-ink last:text-right"
              >
                {colonna}
              </span>
            ))}
          </div>

          <ul className="flex flex-col">
            {piattaforma.attivita.voci.map((voce) => (
              <li
                key={voce.nome}
                className="grid grid-cols-1 gap-1 border-b border-line-on-ink py-3 sm:grid-cols-[1fr_8rem_5rem] sm:items-center sm:gap-3"
              >
                <span className="flex items-center gap-2.5 text-[0.875rem]">
                  <span
                    aria-hidden="true"
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-pill border ${
                      voce.stato === "chiusa"
                        ? "border-transparent bg-white/15 text-paper"
                        : "border-line-on-ink"
                    }`}
                  >
                    {voce.stato === "chiusa" ? <Check className="h-2.5 w-2.5" /> : null}
                  </span>
                  <span className={voce.stato === "chiusa" ? "text-muted-on-ink" : ""}>
                    {voce.nome}
                  </span>
                </span>
                <span className="pl-7 font-mono text-[0.6875rem] text-muted-on-ink sm:pl-0">
                  {voce.scadenza}
                </span>
                <span className="pl-7 sm:pl-0 sm:text-right">
                  <span className="rounded-pill border border-line-on-ink px-2.5 py-1 text-[0.6875rem] text-muted-on-ink">
                    {voce.stato === "chiusa" ? "Vedi" : "Apri"}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Platform() {
  return (
    <section id="piattaforma" className="on-ink py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{piattaforma.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{piattaforma.titolo}</h2>
          <p className="lede mx-auto mt-5 max-w-2xl">{piattaforma.testo}</p>
          <div className="mt-9 flex justify-center">
            <a href={piattaforma.cta.href} className="btn btn-accent">
              {piattaforma.cta.etichetta}
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="mt-16">
          <MockApp />
        </div>
      </Container>
    </section>
  );
}
