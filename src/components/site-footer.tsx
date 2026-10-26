import { cacheLife } from "next/cache";
import { site } from "@/content/site";
import { Logo } from "./logo";
import { Container } from "./ui";

const { footer, contatti } = site;

export async function SiteFooter() {
  // L'anno del copyright viene prerenderizzato e rinfrescato dalla cache:
  // senza "use cache" il build si ferma sul new Date() non deterministico.
  "use cache";
  cacheLife("days");

  const anno = new Date().getFullYear();

  return (
    // Un gradino più scuro della sezione precedente, per chiudere la pagina
    // senza stacchi netti.
    <footer className="on-ink bg-ink-deep">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo nome={site.nome} variante="paper" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-on-ink">
              {footer.claim}
            </p>
          </div>

          {footer.colonne.map((colonna) => (
            <nav key={colonna.titolo} aria-label={colonna.titolo}>
              <p className="eyebrow">{colonna.titolo}</p>
              <ul className="mt-3 flex flex-col">
                {colonna.voci.map((voce) => (
                  <li key={voce.href}>
                    <a
                      href={voce.href}
                      className="inline-block py-2.5 text-[0.9375rem] text-muted-on-ink transition-colors hover:text-paper"
                    >
                      {voce.etichetta}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="eyebrow">Contatti</p>
            <ul className="mt-3 flex flex-col">
              <li>
                <a
                  href={`mailto:${contatti.email}`}
                  className="inline-block py-2.5 text-[0.9375rem] text-muted-on-ink transition-colors hover:text-paper"
                >
                  {contatti.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contatti.telefono.replace(/\s/g, "")}`}
                  className="inline-block py-2.5 text-[0.9375rem] text-muted-on-ink transition-colors hover:text-paper"
                >
                  {contatti.telefono}
                </a>
              </li>
              <li>
                <a
                  href={contatti.linkedin}
                  className="inline-block py-2.5 text-[0.9375rem] text-muted-on-ink transition-colors hover:text-paper"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-on-ink py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-muted-on-ink">
            © {anno} {site.nome}. Tutti i diritti riservati. {footer.legale}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.link.map((voce) => (
              <li key={voce.etichetta}>
                <a
                  href={voce.href}
                  className="inline-block py-3 text-[0.8125rem] text-muted-on-ink transition-colors hover:text-paper"
                >
                  {voce.etichetta}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
