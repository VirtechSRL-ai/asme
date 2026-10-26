import { Fragment } from "react";
import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { collegamenti } = site;

/**
 * 04 — Cosa collega: la sezione interamente verde, il momento in cui il
 * colore del marchio prende tutta la pagina.
 */
export function Links() {
  return (
    <section id="collegamenti" className="on-green py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <Eyebrow>{collegamenti.eyebrow}</Eyebrow>
              <h2 className="h2 mt-5">{collegamenti.titolo}</h2>
            </div>
            <p className="lede">{collegamenti.testo}</p>
          </div>
        </Reveal>

        <Reveal ritardo={120} className="mt-14">
          <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
            {collegamenti.percorso.map((nodo, i) => (
              <Fragment key={nodo.etichetta}>
                {i > 0 ? (
                  <li
                    aria-hidden="true"
                    className="flex shrink-0 items-center justify-center py-1 lg:px-5"
                  >
                    <ArrowRight className="h-6 w-6 rotate-90 text-dark lg:rotate-0" />
                  </li>
                ) : null}

                <li className="card flex-1 p-7 backdrop-blur-sm">
                  <span className="flex items-baseline gap-3">
                    <span className="text-[0.875rem] font-extrabold tabular-nums opacity-55">
                      0{i + 1}
                    </span>
                    <span className="text-[1.375rem] font-extrabold tracking-[-0.03em]">
                      {nodo.etichetta}
                    </span>
                  </span>
                  <p className="mt-2 text-[1rem] font-medium opacity-80">{nodo.dettaglio}</p>
                </li>
              </Fragment>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
