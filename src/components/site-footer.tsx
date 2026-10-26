import Image from "next/image";
import { cacheLife } from "next/cache";
import { site } from "@/content/site";
import { Logo } from "./logo";
import { Container, Globe, Mail, Phone, Pin } from "./ui";

const { footer, contatti } = site;

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;

// Il file ricavato dal logo ufficiale Virtech: forma intatta, simbolo nel
// verde di Tracciamy e scritta bianca, quindi va su fondo scuro.
const VIRTECH_PROPORZIONE = 3390 / 977;

function VoceContatto({
  href,
  icona: Icona,
  esterno = false,
  children,
}: {
  href?: string;
  icona: typeof Mail;
  esterno?: boolean;
  children: React.ReactNode;
}) {
  const contenuto = (
    <>
      <Icona className="h-[1.125rem] w-[1.125rem] shrink-0 text-green-ink" />
      {children}
    </>
  );

  if (!href) {
    return (
      <li className="flex items-center gap-2.5 py-2.5 text-[0.9375rem] font-semibold text-neutral">
        {contenuto}
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        {...(esterno ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex items-center gap-2.5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:text-green-ink"
      >
        {contenuto}
      </a>
    </li>
  );
}

export async function SiteFooter() {
  // L'anno del copyright viene prerenderizzato e rinfrescato dalla cache:
  // senza "use cache" il build si ferma sul new Date() non deterministico.
  "use cache";
  cacheLife("days");

  const anno = new Date().getFullYear();

  return (
    <footer>
      {/* Parte chiara: il logo Tracciamy ha la scritta nera e va su bianco */}
      <div className="border-t border-line bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1.1fr]">
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
                <VoceContatto href={MAILTO} icona={Mail}>
                  {contatti.email}
                </VoceContatto>
                <VoceContatto href={`tel:${contatti.telefonoLink}`} icona={Phone}>
                  {contatti.telefono}
                </VoceContatto>
                <VoceContatto href={contatti.sito} icona={Globe} esterno>
                  {contatti.sitoEtichetta}
                </VoceContatto>
                <VoceContatto icona={Pin}>{contatti.sede}</VoceContatto>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Barra finale scura: chiude la pagina e porta il marchio Virtech,
          che su questo fondo si legge al massimo del contrasto. */}
      <div className="on-dark">
        <Container>
          <div className="flex flex-col gap-7 py-9 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-center gap-4">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-on-dark-soft">
                Un prodotto di
              </span>
              <a
                href={contatti.sito}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita il sito ufficiale di Virtech"
                className="inline-flex rounded-[10px] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Image
                  src="/virtech-logo.png"
                  alt="Virtech"
                  width={Math.round(30 * VIRTECH_PROPORZIONE)}
                  height={30}
                  style={{ height: 30, width: "auto" }}
                />
              </a>
            </div>

            <p className="text-[0.8125rem] text-on-dark-soft">
              © {anno} {footer.legale} · Tutti i diritti riservati.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
