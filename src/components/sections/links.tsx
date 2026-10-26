import { site } from "@/content/site";
import { CodiceScuro, NotaEsempio, Pannello, Riga, Stato } from "../mock";
import { Reveal } from "../reveal";
import { ArrowRight, Container, Eyebrow, Inspect } from "../ui";

const { collegamenti } = site;
const { mock } = collegamenti;

/**
 * La grafica principale del sito: la vista per apparecchiatura.
 *
 * Risponde alla domanda della sezione — "da ogni unità, risali ai suoi
 * materiali" — mostrando i componenti di una unità e, accanto, il certificato
 * di uno di essi con l'elenco di dove è usato. L'avviso in fondo riporta il
 * limite dichiarato nel testo: i dati estratti dai PDF vanno confermati.
 */
function VistaApparecchiatura() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      {/* Unità e suoi componenti */}
      <Pannello
        titolo={mock.unita.titolo}
        azione={<CodiceScuro>{mock.unita.codice}</CodiceScuro>}
      >
        <Riga className="flex-wrap gap-2">
          {mock.unita.meta.map((voce) => (
            <span key={voce} className="chip">
              {voce}
            </span>
          ))}
        </Riga>

        {/* Intestazioni: solo da tablet in su, dove la tabella sta larga */}
        <div className="hidden grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] gap-3 border-b border-line-on-dark px-[1.125rem] py-2.5 sm:grid">
          {mock.componenti.colonne.map((colonna) => (
            <span
              key={colonna}
              className="min-w-0 truncate text-[0.6875rem] font-extrabold uppercase tracking-[0.1em] text-on-dark-soft"
            >
              {colonna}
            </span>
          ))}
          <span className="sr-only">Stato</span>
        </div>

        {/* Sul telefono la riga diventa un blocco: tre colonne a quella
            larghezza lascerebbero solo testo troncato. */}
        {mock.componenti.righe.map((riga, i) => (
          <div
            key={riga.nome}
            className={`flex flex-col gap-1.5 border-b border-line-on-dark px-[1.125rem] py-3.5 last:border-b-0 sm:grid sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-3 sm:py-3 ${
              i === 1 ? "bg-[color-mix(in_srgb,var(--green)_12%,transparent)]" : ""
            }`}
          >
            <span className="flex items-center justify-between gap-3 sm:block sm:min-w-0">
              <span className="truncate text-[0.9375rem] font-bold">{riga.nome}</span>
              <span className="sm:hidden">
                <Stato stato={riga.stato} />
              </span>
            </span>
            <span className="min-w-0 truncate text-[0.875rem] tabular-nums text-on-dark-soft">
              <span className="sm:hidden">Materiale: </span>
              {riga.materiale}
            </span>
            <span className="min-w-0 truncate text-[0.875rem] text-on-dark-soft">
              <span className="sm:hidden">Marcatura: </span>
              {riga.marcatura}
            </span>
            <span className="hidden sm:block">
              <Stato stato={riga.stato} />
            </span>
          </div>
        ))}
      </Pannello>

      {/* Certificato del componente evidenziato */}
      <div className="relative">
        {/* Il collegamento fra la riga evidenziata e il certificato */}
        <span
          aria-hidden="true"
          className="collega absolute -left-5 top-24 hidden h-[3px] w-5 rounded-full bg-green lg:block"
          style={{ transformOrigin: "left", transform: "scaleX(var(--s,1))" }}
        />
        <Pannello
          titolo={mock.certificato.titolo}
          azione={<CodiceScuro>{mock.certificato.codice}</CodiceScuro>}
        >
          {mock.certificato.campi.map((campo) => (
            <Riga key={campo.etichetta} className="justify-between">
              <span className="text-[0.875rem] text-on-dark-soft">{campo.etichetta}</span>
              <span className="text-[0.9375rem] font-bold">{campo.valore}</span>
            </Riga>
          ))}

          <div className="px-[1.125rem] pb-4 pt-4">
            <p className="text-[0.6875rem] font-extrabold uppercase tracking-[0.1em] text-green">
              {mock.certificato.usoTitolo}
            </p>
            <ul className="mt-2.5 flex flex-col gap-2">
              {mock.certificato.uso.map((voce) => (
                <li
                  key={voce}
                  className="flex items-center gap-2.5 rounded-[10px] border border-line-on-dark px-3 py-2 text-[0.875rem] font-semibold tabular-nums"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green" />
                  {voce}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-2.5 border-t border-line-on-dark px-[1.125rem] py-3.5">
            <Inspect className="mt-0.5 h-4 w-4 shrink-0 text-green" />
            <p className="text-[0.8125rem] leading-relaxed text-on-dark-soft">
              {mock.certificato.avviso}
            </p>
          </div>
        </Pannello>
      </div>
    </div>
  );
}

/** 04 — Cosa collega: scuro profondo con luce verde, il momento centrale. */
export function Links() {
  return (
    <section id="collegamenti" className="on-dark-glow relative overflow-hidden py-20 sm:py-24">
      <Container className="relative">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <Eyebrow>{collegamenti.eyebrow}</Eyebrow>
              <h2 className="h2 mt-5">{collegamenti.titolo}</h2>
            </div>
            <p className="lede">{collegamenti.testo}</p>
          </div>
        </Reveal>

        {/* Il percorso in tre tappe, come chiave di lettura della grafica */}
        <Reveal as="ol" cascata className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
          {collegamenti.percorso.map((nodo, i) => (
            <li key={nodo.etichetta} className="flex items-center gap-3">
              {i > 0 ? (
                <ArrowRight className="h-4 w-4 shrink-0 text-green" />
              ) : null}
              <span className="chip border-line-on-dark">
                <span className="font-extrabold text-white">{nodo.etichetta}</span>
                <span className="hidden sm:inline"> · {nodo.dettaglio}</span>
              </span>
            </li>
          ))}
        </Reveal>

        <Reveal ritardo={150} className="mt-10">
          <VistaApparecchiatura />
          <NotaEsempio testo={site.notaEsempio} />
        </Reveal>
      </Container>
    </section>
  );
}
