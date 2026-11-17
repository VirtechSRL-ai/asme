import type { Metadata } from "next";
import { ancora, certificazioni, type Certificazione } from "@/content/certificazioni";
import { site } from "@/content/site";
import { ContactCta } from "@/components/contact-cta";
import { Entra } from "@/components/entra";
import { SfondoVideo } from "@/components/sfondo-video";
import { Sigillo } from "@/components/marchio";
import { CertificazioniPreview } from "@/components/certificazioni-preview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Scena } from "@/components/scena";
import { Contenitore, Freccia, Occhiello } from "@/components/ui";

const testi = site.certificazioni;

export const metadata: Metadata = {
  title: testi.etichetta,
  description: testi.testo,
};

function HeroCertificazioni() {
  return (
    <section className="velo-cert relative pt-14 pb-16 sm:pt-20 sm:pb-20">
      {/* Il filmato delle onde, trattato come quello della home: stessa
          fotografia, maschera centrata sulla composizione di questa hero. */}
      <SfondoVideo variante="certificazioni" />

      <Contenitore className="relative z-10">
        <Entra cascata className="mx-auto max-w-[46rem] text-center">
          <Occhiello>{testi.etichetta}</Occhiello>
          <h1 className="titolo-display mt-6">
            {testi.titoloPrima}
            <span className="spicca">{testi.titoloSpicca}</span>
          </h1>
          <p className="descrizione mx-auto mt-6 max-w-xl">{testi.testo}</p>

          <div className="mt-8 flex justify-center">
            <ContactCta
              source="certificazioni_hero"
              className="bottone bottone-verde w-full sm:w-auto"
            >
              {site.azioni.contatta}
              <Freccia />
            </ContactCta>
          </div>
        </Entra>

        <div className="mx-auto mt-12 w-full max-w-[68rem] sm:mt-14">
          <CertificazioniPreview intro={false} />
        </div>

        <Entra ritardo={900} className="mt-10 text-center">
          <p className="text-[0.9375rem] font-bold text-secondario">
            {certificazioni.length} {testi.conteggio}
          </p>
        </Entra>
      </Contenitore>
    </section>
  );
}

/** La pillola del tipo: stessa tinta per tutte le voci */
function Tipo({ children }: { children: string }) {
  return <span className="cert-tipo">{children}</span>;
}

/** L'invito in calce a ogni carta: porta ai contatti, tracciato per voce */
function Invito({ cert }: { cert: Certificazione }) {
  return (
    <ContactCta source={`certificazione_${ancora(cert)}`} className="invito-cert">
      {testi.invito}
      <span className="sr-only"> su {cert.nome}</span>
      <Freccia />
    </ContactCta>
  );
}

/**
 * Un'unica raccolta: tutte le tredici voci, nell'ordine dei contenuti, con
 * la stessa carta e la stessa importanza — due per riga su desktop, una su
 * telefono. Le cinque mostrate nella hero aprono la griglia senza titoli o
 * stacchi che ne facciano un gruppo a parte. Con un numero dispari di voci,
 * l'ultima si centra sulla riga invece di restare appoggiata a sinistra.
 */
function Raccolta() {
  return (
    <section id="raccolta" className="relative pb-20 sm:pb-28">
      <Contenitore>
        <div className="scena px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <ul className="griglia-raccolta grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {certificazioni.map((cert) => (
              <Entra as="li" key={cert.nome} className="h-full">
                <article id={ancora(cert)} className="pannello pannello-vivo carta-fascicolo h-full">
                  <Sigillo cert={cert} className="sigillo-fascicolo" />
                  <div className="carta-fascicolo-testo">
                    <Tipo>{cert.tipo}</Tipo>
                    <h2 className="titolo-carta mt-4">{cert.nome}</h2>
                    <p className="testo-carta mt-2.5">{cert.descrizione}</p>
                    <div className="mt-auto pt-5">
                      <Invito cert={cert} />
                    </div>
                  </div>
                </article>
              </Entra>
            ))}
          </ul>

          <Entra ritardo={150}>
            <p className="nota-dimostrativa mt-8">{testi.nota}</p>
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
      <Scena>
      <main id="contenuto" className="ambiente-cert flex-1">
        <HeroCertificazioni />
        <Raccolta />
        <Chiusura />
      </main>
      </Scena>
      <SiteFooter />
    </>
  );
}
