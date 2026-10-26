import { Fragment } from "react";
import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Container, SectionIntro } from "../ui";

const { ambiti } = site;

/**
 * 06 — Ambiti: due percorsi distinti che condividono la stessa esigenza di
 * evidenze. La fascia in alto è ciò che hanno in comune.
 * Niente bollini o icone che possano sembrare certificazioni rilasciate.
 */
export function Scopes() {
  return (
    <section id="ambiti" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow={ambiti.eyebrow}
            titolo={ambiti.titolo}
            allineamento="centro"
          />
        </Reveal>

        {/* Fascia condivisa dai due percorsi */}
        <Reveal ritardo={100} className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {ambiti.fascia.map((voce, i) => (
            <Fragment key={voce}>
              {i > 0 ? (
                <span aria-hidden="true" className="h-px w-6 bg-line sm:w-12" />
              ) : null}
              <span className="rounded-pill bg-accent-soft px-5 py-2.5 text-[0.9375rem] font-bold tracking-[-0.01em] text-accent-text">
                {voce}
              </span>
            </Fragment>
          ))}
        </Reveal>

        {/* Raccordo verso le due colonne */}
        <div aria-hidden="true" className="mx-auto h-10 w-px bg-line" />

        <Reveal as="ul" cascata className="grid gap-5 lg:grid-cols-2">
          {ambiti.colonne.map((colonna) => (
            <li key={colonna.sigla} className="card card-hover flex flex-col p-8 sm:p-10">
              <span className="text-[2.5rem] font-extrabold leading-none tracking-[-0.04em]">
                {colonna.sigla}
              </span>
              <h3 className="h3 mt-5">{colonna.titolo}</h3>
              <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-muted">
                {colonna.testo}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal ritardo={60} className="mt-12 flex justify-center">
          <a href={ambiti.cta.href} className="btn btn-ink">
            {ambiti.cta.etichetta}
            <ArrowRight />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
