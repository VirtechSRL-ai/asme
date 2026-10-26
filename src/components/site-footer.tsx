import { cacheLife } from "next/cache";
import { site } from "@/content/site";
import { ArrowRight, Container } from "./ui";

const { footer, contatti } = site;

export async function SiteFooter() {
  // L'anno del copyright viene prerenderizzato e rinfrescato dalla cache:
  // senza "use cache" il build si ferma sul new Date() non deterministico.
  "use cache";
  cacheLife("days");

  const anno = new Date().getFullYear();

  return (
    <footer className="on-ink">
      <Container>
        {/* Riga alta: claim e contatti diretti */}
        <div className="grid gap-10 border-b border-line-on-ink py-16 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-[10px] bg-accent text-[0.8125rem] font-semibold text-accent-ink"
              >
                {site.nome.slice(0, 1)}
              </span>
              <span className="text-[1.0625rem] font-semibold tracking-[-0.03em]">
                {site.nome}
              </span>
            </div>
            <p className="mt-6 text-[1.25rem] leading-snug tracking-[-0.025em]">{footer.claim}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
              <a
                href={contatti.linkedin}
                className="text-muted-on-ink transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${contatti.email}`}
                className="text-muted-on-ink transition-colors hover:text-paper"
              >
                {contatti.email}
              </a>
              <a
                href={`tel:${contatti.telefono.replace(/\s/g, "")}`}
                className="text-muted-on-ink transition-colors hover:text-paper"
              >
                {contatti.telefono}
              </a>
            </div>
          </div>

          {/* Blocco richiesta informazioni */}
          <div className="card rounded-panel p-7">
            <p className="eyebrow">{footer.ctaTitolo}</p>
            <p className="mt-4 text-[1.0625rem] leading-snug tracking-[-0.02em]">
              {footer.ctaTesto}
            </p>
            <a href={footer.cta.href} className="btn btn-accent mt-6 w-full justify-center">
              {footer.cta.etichetta}
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* Colonne di link */}
        <div className="grid gap-10 border-b border-line-on-ink py-14 sm:grid-cols-2 lg:grid-cols-4">
          {footer.colonne.map((colonna) => (
            <div key={colonna.titolo}>
              <p className="eyebrow">{colonna.titolo}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {colonna.voci.map((voce) => (
                  <li key={voce}>
                    <a
                      href="#contatti"
                      className="text-[0.9375rem] text-muted-on-ink transition-colors hover:text-paper"
                    >
                      {voce}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Riga legale */}
        <div className="flex flex-col gap-5 py-9 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl text-[0.75rem] leading-relaxed text-muted-on-ink">
            © {anno} {site.nome}. Tutti i diritti riservati. {footer.legale}
          </p>
          <ul className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
            {footer.link.map((voce) => (
              <li key={voce}>
                <a
                  href="#contatti"
                  className="text-[0.75rem] text-muted-on-ink transition-colors hover:text-paper"
                >
                  {voce}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
