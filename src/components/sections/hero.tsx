import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { hero } = site;
const { catena } = hero;

/**
 * Catena di tracciabilità: dall'unità prodotta fino ai certificati.
 * È uno schema concettuale, non la riproduzione di una schermata del
 * prodotto: i livelli sono etichette, non elementi di interfaccia.
 */
function CatenaTracciabilita() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[40px] bg-[radial-gradient(ellipse_at_60%_30%,var(--glow),transparent_70%)]"
      />
      <div className="on-ink relative rounded-panel p-7 sm:p-8">
        <Eyebrow>{catena.etichetta}</Eyebrow>

        <ol className="relative mt-7">
          {/* Guida verticale che collega i livelli, con l'impulso che la percorre */}
          <span
            aria-hidden="true"
            className="absolute left-[0.4375rem] top-2 bottom-8 w-px bg-line-on-ink"
          >
            <span className="trace-pulse absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_12px_2px_rgba(105,234,155,0.6)]" />
          </span>

          {catena.livelli.map((livello, i) => (
            <li key={livello.nome} className="relative pl-8 pb-7 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[0.875rem] w-[0.875rem] rounded-full border-2 ${
                  i === catena.livelli.length - 1
                    ? "border-accent bg-accent"
                    : "border-accent bg-ink"
                }`}
              />
              <p className="text-[1.0625rem] font-bold tracking-[-0.02em]">{livello.nome}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {livello.voci.map((voce) => (
                  <span
                    key={voce}
                    className="rounded-pill border border-line-on-ink px-3 py-1 text-[0.875rem] text-muted-on-ink"
                  >
                    {voce}
                  </span>
                ))}
              </div>
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
        className="pointer-events-none absolute -top-56 left-1/2 h-[34rem] w-full max-w-[72rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_68%)]"
      />
      <Container className="relative">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="display mt-6 max-w-[18ch]">{hero.titolo}</h1>
        </Reveal>

        <Reveal ritardo={120}>
          <div className="mt-10 grid gap-10 border-t border-line pt-10 lg:mt-12 lg:grid-cols-[1fr_minmax(0,27rem)] lg:gap-16 lg:pt-12">
            <div>
              <p className="lede max-w-xl">{hero.testo}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a href={hero.ctaPrimaria.href} className="btn btn-ink">
                  {hero.ctaPrimaria.etichetta}
                  <ArrowRight />
                </a>
                <a href={hero.ctaSecondaria.href} className="btn btn-outline">
                  {hero.ctaSecondaria.etichetta}
                </a>
              </div>
            </div>

            <CatenaTracciabilita />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
