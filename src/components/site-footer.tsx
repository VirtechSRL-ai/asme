import Image from "next/image";
import { cacheLife } from "next/cache";
import { site } from "@/content/site";
import { Entra } from "./entra";
import { Logo } from "./logo";
import { Contenitore, Luogo, Posta, Sito, Telefono } from "./ui";

const { contattiSezione, contatti, footer, nav } = site;

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Richiesta informazioni su Tracciamy")}`;

// Logo Virtech ricavato dal file ufficiale: simbolo verde e scritta chiara,
// quindi va sulla barra scura in fondo.
const VIRTECH = 3390 / 977;

function VoceContatto({
  href,
  icona: Icona,
  esterno = false,
  children,
}: {
  href?: string;
  icona: typeof Posta;
  esterno?: boolean;
  children: React.ReactNode;
}) {
  const dentro = (
    <>
      <Icona className="h-[1.125rem] w-[1.125rem] shrink-0 text-verde" />
      {children}
    </>
  );

  if (!href) {
    return (
      <li className="flex items-center gap-2.5 py-2.5 text-[0.9375rem] font-semibold text-su-scuro">
        {dentro}
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        {...(esterno ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex items-center gap-2.5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:text-verde"
      >
        {dentro}
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
    <footer id="contatti" className="alone-scuro relative overflow-hidden">
      <div
        aria-hidden="true"
        className="respiro pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-full max-w-[52rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_18%,transparent),transparent_70%)]"
      />

      <Contenitore className="relative">
        {/* Chiusura: la richiesta di contatto */}
        <Entra className="mx-auto max-w-2xl py-20 text-center sm:py-24">
          <h2 className="titolo-sezione">{contattiSezione.titolo}</h2>
          <p className="descrizione mx-auto mt-5 max-w-lg">{contattiSezione.testo}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={MAILTO} className="bottone bottone-verde w-full sm:w-auto">
              <Posta />
              {contatti.email}
            </a>
            <a
              href={`tel:${contatti.telefonoLink}`}
              className="bottone bottone-contorno w-full sm:w-auto"
            >
              <Telefono />
              {contatti.telefono}
            </a>
          </div>
        </Entra>

        {/* Riga informativa */}
        <div className="grid grid-cols-1 gap-10 border-t border-bordo-scuro py-14 lg:grid-cols-[1.3fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Logo altezza={28} variante="chiaro" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-su-scuro">{footer.claim}</p>
          </div>

          <nav aria-label="Sezioni del sito">
            <p className="etichetta-dato">Il sito</p>
            <ul className="mt-4 flex flex-col">
              {nav.map((voce) => (
                <li key={voce.href}>
                  <a
                    href={voce.href}
                    className="inline-block py-2.5 text-[0.9375rem] font-semibold text-su-scuro transition-colors hover:text-verde"
                  >
                    {voce.etichetta}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="etichetta-dato">Contatti</p>
            <ul className="mt-4 flex flex-col">
              <VoceContatto href={MAILTO} icona={Posta}>
                {contatti.email}
              </VoceContatto>
              <VoceContatto href={`tel:${contatti.telefonoLink}`} icona={Telefono}>
                {contatti.telefono}
              </VoceContatto>
              <VoceContatto href={contatti.sito} icona={Sito} esterno>
                {contatti.sitoEtichetta}
              </VoceContatto>
              <VoceContatto icona={Luogo}>{contatti.sede}</VoceContatto>
            </ul>
          </div>
        </div>

        {/* Riga finale: Tracciamy è il prodotto, Virtech l'azienda */}
        <div className="flex flex-col gap-7 border-t border-bordo-scuro py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="flex items-center gap-4">
            <span className="etichetta-dato">Un prodotto di</span>
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
                width={Math.round(26 * VIRTECH)}
                height={26}
                style={{ height: 26, width: "auto" }}
              />
            </a>
          </div>

          <p className="text-[0.8125rem] text-su-scuro">
            © {anno} {footer.legale} · Tutti i diritti riservati.
          </p>
        </div>
      </Contenitore>
    </footer>
  );
}
