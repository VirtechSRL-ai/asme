import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Contenitore, Freccia } from "@/components/ui";
import { certificateTraceabilityPath, siteUrl } from "@/lib/discovery";

const title = "Software per la tracciabilità dei certificati dei materiali";
const description = "Tracciamy collega certificati dei materiali, distinte e componenti per commessa. Aiuta officine e uffici qualità a individuare documenti mancanti e preparare il fascicolo tecnico.";
const canonical = `${siteUrl}${certificateTraceabilityPath}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title: `${title} — Tracciamy`, description, url: canonical, images: ["/hero-tracciamy.webp"] },
};

const workflow = [
  { title: "Collega il certificato al componente", text: "Organizza i documenti dei fornitori e associa ciascun certificato alla riga della distinta e all’unità cui si riferisce." },
  { title: "Individua ciò che manca", text: "Prima della consegna, controlla quali componenti hanno già la documentazione e dove serve ancora un certificato o un dato." },
  { title: "Prepara il fascicolo tecnico", text: "Raccogli i documenti pertinenti alla commessa e portali alla verifica finale con i riferimenti ai materiali e alle unità." },
];

export default function MaterialCertificates() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="flex-1 pb-20 pt-12 sm:pb-28 sm:pt-20">
        <Contenitore>
          <section className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14" aria-labelledby="titolo-materiali">
            <div>
              <h1 id="titolo-materiali" className="text-balance text-[clamp(2.45rem,5.2vw,4.9rem)] font-bold leading-[1.03] tracking-[-0.035em] text-scuro">
                Tracciabilità dei certificati dei materiali
              </h1>
              <p className="descrizione mt-6 max-w-xl">
                Tracciamy è un software per officine e aziende che producono componenti e apparecchiature certificate.
                Collega materiali e documenti alla singola unità, dalla distinta al fascicolo tecnico.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ContactCta source="tracciabilita_materiali" className="bottone bottone-verde">
                  Richiedi una demo <Freccia />
                </ContactCta>
                <Link className="bottone" href="/certificazioni">Normative e documenti</Link>
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-scuro-fondo">
              <Image src="/hero-tracciamy.webp" alt="" fill sizes="(max-width: 1023px) 92vw, 44vw" priority className="object-cover" />
            </div>
          </section>

          <section className="mt-20 sm:mt-28" aria-labelledby="titolo-commessa">
            <h2 id="titolo-commessa" className="text-balance text-3xl font-bold tracking-tight text-scuro sm:text-5xl">Come si lavora su una commessa</h2>
            <ol className="mt-6 divide-y divide-bordo border-y border-bordo">
              {workflow.map(({ title, text }) => (
                <li key={title} className="grid gap-2 py-6 sm:grid-cols-[0.85fr_1.15fr] sm:gap-8">
                  <h3 className="text-xl font-bold text-scuro">{title}</h3>
                  <p className="max-w-xl leading-relaxed text-secondario">{text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 max-w-3xl sm:mt-24" aria-labelledby="titolo-qualita">
            <h2 id="titolo-qualita" className="text-3xl font-bold tracking-tight text-scuro sm:text-4xl">Per ufficio tecnico, acquisti e qualità</h2>
            <p className="mt-4 leading-relaxed text-secondario">
              Se le distinte sono in un gestionale e i certificati arrivano via email o in cartelle condivise, il lavoro
              più costoso è ritrovare il documento giusto per ogni componente. In demo puoi portare una commessa tipo
              e vedere come associare i documenti e individuare ciò che manca. La verifica tecnica finale resta in carico
              a chi è responsabile della conformità.
            </p>
          </section>
        </Contenitore>
      </main>
      <SiteFooter />
    </>
  );
}
