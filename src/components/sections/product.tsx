import { Fragment } from "react";
import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { prodotto } = site;

/**
 * Il percorso che la pagina descrive: dall'apparecchiatura alla riga del
 * componente, fino al certificato. Sono tre nodi etichettati collegati da una
 * freccia, non la riproduzione di una schermata.
 */
function Percorso() {
  return (
    <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
      {prodotto.percorso.map((nodo, i) => (
        <Fragment key={nodo.etichetta}>
          {i > 0 ? (
            <li
              aria-hidden="true"
              className="flex shrink-0 items-center justify-center py-1 lg:px-4"
            >
              <ArrowRight className="h-5 w-5 rotate-90 text-accent lg:rotate-0" />
            </li>
          ) : null}

          <li className="card card-hover flex-1 p-6">
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[0.8125rem] font-bold text-accent-ink"
              >
                {i + 1}
              </span>
              <span className="text-[1.0625rem] font-bold tracking-[-0.02em]">
                {nodo.etichetta}
              </span>
            </span>
            <ul className="mt-4 flex flex-col gap-2">
              {nodo.dettagli.map((dettaglio) => (
                <li
                  key={dettaglio}
                  className="flex items-center gap-2 text-[0.9375rem] text-muted-on-ink"
                >
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                  {dettaglio}
                </li>
              ))}
            </ul>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}

export function Product() {
  return (
    <section id="prodotto" className="on-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>{prodotto.eyebrow}</Eyebrow>
              <h2 className="h2 mt-5">{prodotto.titolo}</h2>
            </div>
            <p className="lede lg:pt-4">{prodotto.testo}</p>
          </div>
        </Reveal>

        <Reveal ritardo={100} className="mt-14">
          <Percorso />
        </Reveal>

        {/* Trattamento diverso dalle card del percorso qui sopra: solo un
            filetto in alto, per non ripetere tre riquadri uguali. */}
        <Reveal as="dl" cascata className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {prodotto.card.map((voce) => (
            <div key={voce.titolo} className="border-t border-line-on-ink pt-5">
              <dt className="text-[1.0625rem] font-bold tracking-[-0.02em]">{voce.titolo}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted-on-ink">
                {voce.testo}
              </dd>
            </div>
          ))}
        </Reveal>

        <Reveal ritardo={60}>
          <a href={prodotto.cta.href} className="btn btn-accent mt-10">
            {prodotto.cta.etichetta}
            <ArrowRight />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
