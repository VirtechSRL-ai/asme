import { cacheLife } from "next/cache";
import { site } from "@/content/site";
import { Logo } from "./logo";
import { Container, Mail, Phone, Pin } from "./ui";

const { footer, contatti } = site;

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;

export async function SiteFooter() {
  // L'anno del copyright viene prerenderizzato e rinfrescato dalla cache:
  // senza "use cache" il build si ferma sul new Date() non deterministico.
  "use cache";
  cacheLife("days");

  const anno = new Date().getFullYear();

  return (
    // Chiaro di proposito: il logo ufficiale ha la scritta nera e va su bianco.
    <footer className="border-t border-line bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo altezza={30} />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-neutral">{footer.claim}</p>
          </div>

          <nav aria-label="Sezioni del sito">
            <p className="eyebrow">Il sito</p>
            <ul className="mt-4 flex flex-col">
              {site.nav.map((voce) => (
                <li key={voce.href}>
                  <a
                    href={voce.href}
                    className="inline-block py-2.5 text-[0.9375rem] font-semibold text-neutral transition-colors hover:text-green-ink"
                  >
                    {voce.etichetta}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Contatti</p>
            <ul className="mt-4 flex flex-col">
              <li>
                <a
                  href={MAILTO}
                  className="inline-flex items-center gap-2.5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:text-green-ink"
                >
                  <Mail className="h-[1.125rem] w-[1.125rem] text-green-ink" />
                  {contatti.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contatti.telefonoLink}`}
                  className="inline-flex items-center gap-2.5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:text-green-ink"
                >
                  <Phone className="h-[1.125rem] w-[1.125rem] text-green-ink" />
                  {contatti.telefono}
                </a>
              </li>
              <li className="flex items-center gap-2.5 py-2.5 text-[0.9375rem] font-semibold text-neutral">
                <Pin className="h-[1.125rem] w-[1.125rem] text-green-ink" />
                {contatti.sede}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line py-7">
          <p className="text-[0.8125rem] text-neutral">
            © {anno} {footer.legale}. Tutti i diritti riservati.
          </p>
        </div>
      </Container>
    </footer>
  );
}
