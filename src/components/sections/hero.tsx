import { site } from "@/content/site";
import { Codice, Pannello, Riga, Stato } from "../mock";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Eyebrow, Mail } from "../ui";

const { hero, contatti } = site;
const { mock } = hero;

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;

/**
 * I due pannelli che emergono dal bordo inferiore della prima schermata:
 * a sinistra una unità con i suoi componenti, a destra i documenti collegati.
 * Mostrano in un colpo d'occhio il legame che il prodotto costruisce.
 */
function PannelliProdotto() {
  return (
    <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr] lg:items-start">
      <Pannello
        titolo={mock.unita.titolo}
        azione={<Codice>{mock.unita.codice}</Codice>}
        className="lg:translate-y-6"
      >
        <Riga className="justify-between bg-green-soft/60">
          <span className="font-bold">{mock.unita.commessa}</span>
          <span className="text-[0.8125rem] text-neutral">
            {mock.unita.righe.length} componenti
          </span>
        </Riga>
        {mock.unita.righe.map((riga) => (
          <Riga key={riga.nome} className="justify-between">
            <span className="flex min-w-0 items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-ink"
              />
              <span className="truncate font-semibold">{riga.nome}</span>
              <Codice>{riga.materiale}</Codice>
            </span>
            <Stato stato={riga.stato} />
          </Riga>
        ))}
      </Pannello>

      <Pannello titolo={mock.documenti.titolo}>
        {mock.documenti.righe.map((riga) => (
          <Riga key={riga.nome} className="justify-between">
            <span className="truncate font-semibold">{riga.nome}</span>
            <Stato stato={riga.stato} />
          </Riga>
        ))}
      </Pannello>
    </div>
  );
}

export function Hero() {
  return (
    <section className="wash-hero relative overflow-hidden pt-12 sm:pt-16">
      {/* Trama diagonale appena accennata, per dare consistenza allo sfondo */}
      <div aria-hidden="true" className="trama pointer-events-none absolute inset-0 opacity-70" />
      {/* Luce ambientale che respira lentamente */}
      <div
        aria-hidden="true"
        className="respira pointer-events-none absolute -top-72 left-1/2 h-[38rem] w-full max-w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--green)_26%,transparent),transparent_68%)]"
      />

      <Container className="relative">
        {/* Composizione centrata: etichetta, titolo, testo, azioni in asse */}
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>
          <h1 className="display mt-7">
            {hero.titoloPrima} <span className="spicca">{hero.titoloSpicca}</span>{" "}
            {hero.titoloDopo}
          </h1>
          <p className="lede mx-auto mt-7 max-w-2xl">{hero.testo}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={MAILTO} className="btn btn-green w-full sm:w-auto">
              <Mail />
              {site.ctaPrincipale.etichetta}
            </a>
            <a href={hero.ctaSecondaria.href} className="btn btn-outline w-full sm:w-auto">
              {hero.ctaSecondaria.etichetta}
              <ArrowRight />
            </a>
          </div>

          <p className="mt-7 text-[0.9375rem] text-neutral">
            Oppure chiamaci:{" "}
            <a href={`tel:${contatti.telefonoLink}`} className="link-contatto text-dark">
              {contatti.telefono}
            </a>
          </p>
        </Reveal>

        {/* I pannelli restano sotto le azioni: su uno schermo normale finiscono
            tagliati dal bordo della finestra e invitano a scorrere, come nella
            reference, senza bisogno di ritagli artificiali. */}
        <Reveal ritardo={200} className="mt-16 pb-24 sm:mt-20 sm:pb-28">
          <PannelliProdotto />
        </Reveal>
      </Container>

      {/* Sfumatura che porta la hero dentro la sezione successiva */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}
