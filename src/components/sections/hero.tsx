import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Eyebrow, Mail } from "../ui";

const { hero, contatti } = site;
const { catena } = hero;

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;

/**
 * Catena di tracciabilità: dall'unità prodotta fino ai certificati.
 * È uno schema, non la riproduzione di una schermata del prodotto.
 */
function Catena() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[40px] bg-[radial-gradient(ellipse_at_60%_30%,var(--glow),transparent_70%)]"
      />
      <div className="on-dark relative rounded-panel p-7 sm:p-8">
        <Eyebrow>{catena.etichetta}</Eyebrow>

        <ol className="relative mt-7">
          <span
            aria-hidden="true"
            className="absolute left-[0.4375rem] top-2 bottom-10 w-px bg-line-on-dark"
          >
            <span className="trace-pulse absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_14px_3px_var(--glow)]" />
          </span>

          {catena.livelli.map((livello, i) => (
            <li key={livello.nome} className="relative pl-8 pb-7 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[0.875rem] w-[0.875rem] rounded-full border-2 border-green ${
                  i === catena.livelli.length - 1 ? "bg-green" : "bg-dark"
                }`}
              />
              <p className="text-[1.0625rem] font-extrabold tracking-[-0.025em]">{livello.nome}</p>
              <p className="mt-1 text-[0.9375rem] text-on-dark-soft">{livello.voce}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pb-20 pt-10 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 h-[34rem] w-full max-w-[70rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_68%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_minmax(0,25rem)] lg:gap-16">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="display mt-6">
              {hero.titoloPrima} <span className="spicca">{hero.titoloSpicca}</span>{" "}
              {hero.titoloDopo}
            </h1>
            <p className="lede mt-7 max-w-lg">{hero.testo}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={MAILTO} className="btn btn-green">
                <Mail />
                {site.ctaPrincipale.etichetta}
              </a>
              <a href={hero.ctaSecondaria.href} className="btn btn-outline">
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

          <Reveal ritardo={150}>
            <Catena />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
