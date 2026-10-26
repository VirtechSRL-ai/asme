import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { Container, Eyebrow, Mail, Phone, Pin } from "../ui";

const { contattiSezione, contatti } = site;

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;

/**
 * 06 — Chiusura: la sezione che deve portare al contatto.
 * I pulsanti aprono davvero il client di posta e il telefono; non c'è nessun
 * modulo, perché non esiste ancora un sistema di raccolta collegato.
 */
export function Contact() {
  return (
    <section id="contatti" className="on-dark relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[36rem] w-full max-w-[60rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_68%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{contattiSezione.eyebrow}</Eyebrow>
          </div>
          <h2 className="h2 mt-6">
            {contattiSezione.titoloPrima} <span className="spicca">{contattiSezione.titoloSpicca}</span>{" "}
            {contattiSezione.titoloDopo}
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl">{contattiSezione.testo}</p>
        </Reveal>

        <Reveal ritardo={120} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={MAILTO} className="btn btn-green w-full sm:w-auto">
            <Mail />
            Scrivici una email
          </a>
          <a href={`tel:${contatti.telefonoLink}`} className="btn btn-outline w-full sm:w-auto">
            <Phone />
            {contatti.telefono}
          </a>
        </Reveal>

        <Reveal as="ul" cascata className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
          <li className="flex flex-col items-center gap-2 text-center">
            <Mail className="h-5 w-5 text-green" />
            <a href={MAILTO} className="link-contatto text-[1rem]">
              {contatti.email}
            </a>
          </li>
          <li className="flex flex-col items-center gap-2 text-center">
            <Phone className="h-5 w-5 text-green" />
            <a href={`tel:${contatti.telefonoLink}`} className="link-contatto text-[1rem]">
              {contatti.telefono}
            </a>
          </li>
          <li className="flex flex-col items-center gap-2 text-center">
            <Pin className="h-5 w-5 text-green" />
            <span className="text-[1rem] font-bold">{contatti.sede}</span>
          </li>
        </Reveal>
      </Container>
    </section>
  );
}
