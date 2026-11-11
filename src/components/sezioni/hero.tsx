import Link from "next/link";
import { certificazioni, inEvidenza } from "@/content/certificazioni";
import { site } from "@/content/site";
import { ContactCta } from "../contact-cta";
import { Entra } from "../entra";
import { SfondoVideo } from "../sfondo-video";
import { Sigillo } from "../sigillo";
import { Contenitore, Freccia, Spunta } from "../ui";

const { hero, azioni } = site;

/**
 * La selezione delle cinque certificazioni in evidenza, con gli stessi
 * sigilli della pagina dedicata: ASME al centro con il logo ufficiale, le
 * altre quattro intorno, in un arco morbido di tesserini leggermente
 * inclinati. È l'anteprima della raccolta completa: il pulsante della hero
 * apre /certificazioni, i sigilli non sono cliccabili e non devono sembrarlo.
 *
 * L'ordine di composizione non è quello dell'elenco: la gerarchia mette il
 * medaglione ASME al centro e le sigle ai lati, dal più piccolo al più
 * grande verso il mezzo.
 */
function CertificazioniInEvidenza() {
  const [asme, ped, pqr, wps, weldingBook] = inEvidenza;

  const disposizione = [
    { cert: pqr, posa: "sm:translate-y-6 -rotate-6", taglia: "h-[4.75rem] w-[4.75rem] sm:h-[5.5rem] sm:w-[5.5rem]" },
    { cert: ped, posa: "sm:translate-y-2 -rotate-3", taglia: "h-[5.25rem] w-[5.25rem] sm:h-[6.25rem] sm:w-[6.25rem]" },
    { cert: asme, posa: "", taglia: "h-28 w-28 sm:h-36 sm:w-36" },
    { cert: wps, posa: "sm:translate-y-2 rotate-3", taglia: "h-[5.25rem] w-[5.25rem] sm:h-[6.25rem] sm:w-[6.25rem]" },
    { cert: weldingBook, posa: "sm:translate-y-6 rotate-6", taglia: "h-[4.75rem] w-[4.75rem] sm:h-[5.5rem] sm:w-[5.5rem]" },
  ];

  return (
    <div>
      <Entra
        as="ul"
        cascata
        aria-label="Certificazioni e documenti in evidenza"
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5 sm:gap-x-6"
      >
        {disposizione.map(({ cert, posa, taglia }) => (
          <li key={cert.nome} className={posa}>
            <Sigillo cert={cert} className={taglia} />
          </li>
        ))}
      </Entra>

      {/* Il cartellino dà la misura della raccolta che aspetta oltre il
          pulsante: un'informazione, non un secondo comando. */}
      <Entra ritardo={380} className="mt-8 flex justify-center sm:mt-11">
        <p className="galleggia flex items-center gap-2.5 px-4 py-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-verde text-scuro">
            <Spunta className="h-4 w-4" />
          </span>
          <span className="text-[0.875rem] font-extrabold leading-tight">
            {certificazioni.length} {site.certificazioni.conteggio}
          </span>
        </p>
      </Entra>
    </div>
  );
}

export function Hero() {
  return (
    // Senza l'occhiello il titolo partirebbe troppo vicino all'intestazione:
    // lo spazio che occupava torna come padding, non come vuoto.
    <section className="velo-hero relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <SfondoVideo />

      <Contenitore className="relative z-10">
        <Entra className="mx-auto max-w-[66rem] text-center">
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
                /certificazioni, i sigilli qui sotto ne sono l'anteprima. */}
            <Link href="/certificazioni" className="bottone bottone-contorno w-full sm:w-auto">
              {azioni.tutteCertificazioni}
              <Freccia />
            </Link>
          </div>
        </Entra>

        {/* Al posto delle dashboard, le certificazioni: chi arriva capisce
            subito che Tracciamy prepara fascicoli e documentazione tecnica.
            Le dashboard restano nelle sezioni che spiegano l'applicativo. */}
        <div className="mx-auto mt-12 w-full max-w-[52rem] sm:mt-16">
          <CertificazioniInEvidenza />
        </div>
      </Contenitore>
    </section>
  );
}
