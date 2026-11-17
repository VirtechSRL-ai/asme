import Link from "next/link";
import { site } from "@/content/site";
import { ContactCta } from "../contact-cta";
import { APRI_CERTIFICAZIONI } from "../scena";
import { Entra } from "../entra";
import { SfondoVideo } from "../sfondo-video";
import { CertificazioniPreview } from "../certificazioni-preview";
import { Contenitore, Freccia } from "../ui";

const { hero, azioni } = site;

export function Hero() {
  return (
    // Senza l'occhiello il titolo partirebbe troppo vicino all'intestazione:
    // lo spazio che occupava torna come padding, non come vuoto.
    <section className="velo-hero relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <SfondoVideo />

      <Contenitore className="relative z-10">
        <Entra cascata className="mx-auto max-w-[66rem] text-center">
          {/* Un unico titolo su due righe: stessa dimensione, stesso peso */}
          <h1 className="titolo-hero">
            <span className="block">{hero.titoloRiga1}</span>
            <span className="block">
              {hero.titoloRiga2Prima}
              <span className="spicca">{hero.titoloRiga2Spicca}</span>
            </span>
          </h1>

          <p className="descrizione mx-auto mt-6 max-w-lg">{hero.testo}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ContactCta source="hero" className="bottone bottone-verde w-full sm:w-auto">
              {azioni.contatta}
              <Freccia />
            </ContactCta>
            {/* Apre la pagina dedicata: le certificazioni vivono su
                /certificazioni, le lastre qui sotto ne sono l'anteprima. */}
            <Link
              href="/certificazioni"
              transitionTypes={APRI_CERTIFICAZIONI}
              className="bottone bottone-contorno w-full sm:w-auto"
            >
              {azioni.tutteCertificazioni}
              <Freccia />
            </Link>
          </div>
        </Entra>

        {/* Al posto delle dashboard, le certificazioni: chi arriva capisce
            subito che Tracciamy prepara fascicoli e documentazione tecnica.
            Le dashboard restano nelle sezioni che spiegano l'applicativo. */}
        <div className="mx-auto mt-12 w-full max-w-[68rem] sm:mt-16">
          <CertificazioniPreview />
        </div>
      </Contenitore>
    </section>
  );
}
