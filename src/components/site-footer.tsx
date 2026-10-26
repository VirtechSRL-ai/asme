import { cacheLife } from "next/cache";
import { site } from "@/content/site";
import { Container } from "./ui";

const { footer, contatti } = site;

export async function SiteFooter() {
  // L'anno del copyright viene prerenderizzato e rinfrescato dalla cache:
  // senza "use cache" il build si ferma sul new Date() non deterministico.
  "use cache";
  cacheLife("days");

  const anno = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-alt">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <span className="text-[1.0625rem] font-semibold tracking-[-0.03em]">{site.nome}</span>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{footer.claim}</p>
          </div>

          <div className="flex flex-col gap-3 text-[0.9375rem] lg:items-end">
            <a href={`mailto:${contatti.email}`} className="transition-colors hover:text-muted">
              {contatti.email}
            </a>
            <a
              href={`tel:${contatti.telefono.replace(/\s/g, "")}`}
              className="transition-colors hover:text-muted"
            >
              {contatti.telefono}
            </a>
            <a href={contatti.linkedin} className="transition-colors hover:text-muted">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-muted">
            © {anno} {site.nome}. Tutti i diritti riservati. {footer.legale}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footer.link.map((voce) => (
              <li key={voce.etichetta}>
                <a
                  href={voce.href}
                  className="text-[0.75rem] text-muted transition-colors hover:text-text"
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
