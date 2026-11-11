import type { Metadata } from "next";
import { certificazioni, fascicoli, inEvidenza } from "@/content/certificazioni";
import { site } from "@/content/site";
import { ContactCta } from "@/components/contact-cta";
import { Entra } from "@/components/entra";
import { Sigillo } from "@/components/sigillo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Contenitore, Freccia, Occhiello } from "@/components/ui";

const testi = site.certificazioni;

export const metadata: Metadata = {
  title: testi.etichetta,
  description: testi.testo,
};

/**
 * Piccola hero introduttiva: titolo, testo e un trittico di sigilli che
 * anticipa la collezione. I sigilli sono inclinati e sovrapposti come
 * tesserini posati su un tavolo, non allineati in griglia.
 */
function HeroCertificazioni() {
  // ASME al centro (l'unico logo ufficiale), due sigilli tipografici ai lati.
  const [asme, ped, pqr] = inEvidenza;

  return (
    <section className="velo-cert relative pt-14 pb-16 sm:pt-20 sm:pb-20">
      <Contenitore className="relative">
        <Entra className="mx-auto max-w-[46rem] text-center">
          <Occhiello>{testi.etichetta}</Occhiello>
          <h1 className="titolo-display mt-6">
            {testi.titoloPrima}
            <span className="spicca">{testi.titoloSpicca}</span>
          </h1>
          <p className="descrizione mx-auto mt-6 max-w-xl">{testi.testo}</p>
        </Entra>

        <Entra cascata className="mt-12 flex items-center justify-center sm:mt-14">
          <div className="-rotate-6 translate-y-2">
            <Sigillo cert={pqr} className="h-24 w-24 sm:h-28 sm:w-28" />
          </div>
          <div className="relative z-10 -mx-3 sm:-mx-2">
            <Sigillo cert={asme} className="h-32 w-32 sm:h-40 sm:w-40" />
          </div>
          <div className="rotate-6 translate-y-2">
            <Sigillo cert={ped} className="h-24 w-24 sm:h-28 sm:w-28" />
          </div>
        </Entra>

        <Entra ritardo={300} className="mt-10 text-center">
          <p className="text-[0.9375rem] font-bold text-secondario">
            {certificazioni.length} {testi.conteggio}
          </p>
        </Entra>
      </Contenitore>
    </section>
  );
}

/**
 * La raccolta principale: griglia modulare con proporzioni variabili.
 * Le prime due voci (le normative) occupano carte larghe e orizzontali, le
 * tre di saldatura carte verticali più compatte: gerarchia, non monotonia.
 */
function RaccoltaPrincipale() {
  return (
    <section className="relative pb-16 sm:pb-24">
      <Contenitore>
        <Entra cascata as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {inEvidenza.map((cert, i) => {
            const larga = i < 2;
            return (
              <li
                key={cert.nome}
                className={
                  larga
                    ? "lg:col-span-3"
                    : `lg:col-span-2 ${i === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`
                }
              >
                <article
                  className={`pannello pannello-vivo group h-full p-7 sm:p-8 ${
                    larga ? "flex flex-col gap-6 sm:flex-row sm:items-start" : ""
                  }`}
                >
                  <Sigillo
                    cert={cert}
                    className={larga ? "h-28 w-28" : "h-[5.5rem] w-[5.5rem]"}
                  />
                  <div className={larga ? "min-w-0" : "mt-6"}>
                    <h2 className="titolo-minore">{cert.nome}</h2>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-secondario">
                      {cert.descrizione}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </Entra>
      </Contenitore>
    </section>
  );
}

/**
 * I fascicoli e i registri di fabbricazione, sulla lastra scura: la seconda
 * metà della collezione cambia registro visivo senza cambiare identità.
 */
function RaccoltaFascicoli() {
  return (
    <section className="relative pb-16 sm:pb-24">
      <Contenitore>
        <div className="lastra-scura lastra-rovescia px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <Entra className="max-w-2xl">
            <Occhiello>{testi.fascicoliEtichetta}</Occhiello>
            <h2 className="titolo-sezione mt-5">
              {testi.fascicoliTitoloPrima}
              <span className="spicca">{testi.fascicoliTitoloSpicca}</span>
            </h2>
            <p className="descrizione mt-5">{testi.fascicoliTesto}</p>
          </Entra>

          <Entra
            cascata
            as="ul"
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {fascicoli.map((cert) => (
              <li key={cert.nome}>
                <article className="pannello pannello-vivo group h-full p-6">
                  <Sigillo cert={cert} className="h-20 w-20" />
                  <h3 className="mt-5 text-[1.0625rem] font-extrabold tracking-[-0.02em]">
                    {cert.nome}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-su-scuro">
                    {cert.descrizione}
                  </p>
                </article>
              </li>
            ))}
          </Entra>

          <Entra ritardo={200}>
            <p className="nota-dimostrativa mt-10">{testi.nota}</p>
          </Entra>
        </div>
      </Contenitore>
    </section>
  );
}

/** Chiusura breve: il passo successivo, verso i contatti del footer. */
function Chiusura() {
  return (
    <section className="relative pb-20 sm:pb-28">
      <Contenitore>
        <Entra className="mx-auto max-w-xl text-center">
          <p className="descrizione">{testi.chiusura}</p>
          <ContactCta
            source="certificazioni"
            className="bottone bottone-verde mt-7 w-full sm:w-auto"
          >
            {site.azioni.demo}
            <Freccia />
          </ContactCta>
        </Entra>
      </Contenitore>
    </section>
  );
}

export default function PaginaCertificazioni() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="ambiente-cert flex-1">
        <HeroCertificazioni />
        <RaccoltaPrincipale />
        <RaccoltaFascicoli />
        <Chiusura />
      </main>
      <SiteFooter />
    </>
  );
}
