import { site } from "@/content/site";
import { Simbolo } from "./logo";
import {
  Archivio,
  Cartella,
  Documento,
  Freccia,
  Griglia,
  Ingranaggio,
  Lucchetto,
  Spunta,
} from "./ui";

const { schermata } = site.applicativo;
const { lotto, prossima, percorso } = schermata;

/**
 * La schermata di Tracciamy, ricostruita.
 *
 * Non è lo screenshot del programma: è una rappresentazione disegnata con la
 * stessa struttura (barra laterale, intestazione del lotto, prossima azione,
 * schede, percorso in fasi) e contenuti interamente dimostrativi. Marchio del
 * cliente, nome dell'azienda, indirizzo dell'utente e nomi dei fornitori citati
 * nelle fasi non ci sono: i testi stanno in `site.ts` e sono stati generalizzati.
 *
 * Scala, non zoom: i corpi di testo sono quelli giusti per essere letti a
 * questa larghezza, non lo screenshot rimpicciolito. Per questo la finestra
 * mostra cinque fasi e non l'intero elenco.
 *
 * I pulsanti interni sono `span`, non `button`: sono il disegno di un pulsante,
 * e un comando che non fa nulla sarebbe peggio di nessun comando.
 */

const ICONE = {
  griglia: Griglia,
  cartella: Cartella,
  documento: Documento,
  archivio: Archivio,
  ingranaggio: Ingranaggio,
} as const;

function Laterale() {
  return (
    <aside className="hidden w-[14rem] shrink-0 flex-col justify-between border-r border-bordo bg-[color-mix(in_srgb,var(--chiaro)_60%,#ffffff)] lg:flex">
      <div>
        <div className="flex items-center gap-2.5 border-b border-bordo px-4 py-[0.9375rem]">
          <Simbolo lato={22} />
          <span className="min-w-0">
            <span className="block truncate text-[0.8125rem] font-extrabold leading-tight">
              {schermata.azienda}
            </span>
            <span className="mt-0.5 block truncate text-[0.75rem] leading-tight text-secondario">
              {schermata.reparto}
            </span>
          </span>
        </div>

        <div className="space-y-0.5 p-2.5">
          {schermata.menu.map((voce) => {
            const Icona = ICONE[voce.icona];
            const attiva = voce.nome === schermata.menuAttivo;
            return (
              <span
                key={voce.nome}
                className={`flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-[0.8125rem] ${
                  attiva
                    ? "bg-verde-testo font-bold text-chiaro"
                    : "font-semibold text-secondario"
                }`}
              >
                <Icona className="h-[1.0625rem] w-[1.0625rem] shrink-0" />
                <span className="truncate">{voce.nome}</span>
              </span>
            );
          })}
        </div>
      </div>

      <span className="flex items-center gap-2 border-t border-bordo px-4 py-3 text-[0.75rem] font-semibold text-secondario">
        <Freccia className="h-3.5 w-3.5 rotate-180" />
        {schermata.comprimi}
      </span>
    </aside>
  );
}

function Fase({
  numero,
  nome,
  testo,
  esito,
}: {
  numero: string;
  nome: string;
  testo: string;
  esito: string;
}) {
  return (
    <li className="riga-fase flex items-start gap-3 border-b border-bordo px-4 py-3.5 last:border-b-0 sm:gap-4 sm:px-5">
      <span aria-hidden="true" className="relative mt-0.5 shrink-0">
        <span className="grid h-7 w-7 place-items-center rounded-[9px] bg-verde-velo text-verde-testo">
          <Spunta className="h-4 w-4" />
        </span>
        <span className="absolute -left-1.5 -top-1.5 grid h-[1.3125rem] w-[1.3125rem] place-items-center rounded-full bg-scuro text-[0.75rem] font-extrabold text-chiaro">
          {numero}
        </span>
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <span className="text-[0.9375rem] font-extrabold tracking-[-0.015em]">{nome}</span>
          <span className="text-[0.8125rem] text-secondario">{percorso.statoFase}</span>
        </span>
        {/* Misura limitata: a tutta larghezza la riga supererebbe i cento
            caratteri e smetterebbe di leggersi come una didascalia */}
        <span className="mt-1 block max-w-[64ch] text-[0.8125rem] leading-snug text-secondario">
          {testo}
        </span>
        <span className="mt-1.5 block text-[0.8125rem] font-bold">{esito}</span>
      </span>

      <span className="hidden shrink-0 rounded-[9px] border border-bordo bg-white px-3 py-1.5 text-[0.8125rem] font-bold sm:block">
        {percorso.azione}
      </span>
    </li>
  );
}

export function Schermata() {
  return (
    <div className="pannello overflow-hidden">
      <div className="flex">
        <Laterale />

        <div className="min-w-0 flex-1">
          {/* Barra superiore: percorso di navigazione e utente */}
          <div className="flex items-center justify-between gap-4 border-b border-bordo px-4 py-2.5 sm:px-6">
            <span className="flex min-w-0 items-center gap-1.5 text-[0.8125rem] text-secondario">
              <span className="truncate">{schermata.briciole[0]}</span>
              <span aria-hidden="true">›</span>
              <span className="truncate font-bold text-scuro">{schermata.briciole[1]}</span>
            </span>
            <span className="hidden shrink-0 items-center gap-3.5 text-[0.8125rem] text-secondario sm:flex">
              <span className="text-verde-testo">{schermata.utente}</span>
              <span className="font-semibold">{schermata.esci}</span>
            </span>
          </div>

          {/* Intestazione del lotto */}
          <div className="flex flex-wrap items-start justify-between gap-4 px-4 pb-4 pt-5 sm:px-6">
            <div className="min-w-0">
              <p className="etichetta-dato">{lotto.etichetta}</p>
              <p className="mt-1.5 flex flex-wrap items-center gap-2.5">
                <span className="text-[1.625rem] font-extrabold leading-none tracking-[-0.035em]">
                  {lotto.nome}
                </span>
                <span className="stato stato-ok">{lotto.stato}</span>
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.8125rem] text-secondario">
                {lotto.meta.map((voce) => (
                  <li key={voce}>{voce}</li>
                ))}
              </ul>
            </div>

            <span className="flex shrink-0 items-center gap-2 rounded-[10px] border border-bordo bg-white px-3.5 py-2 text-[0.8125rem] font-bold">
              <Lucchetto className="h-4 w-4 text-secondario" />
              {lotto.azione}
            </span>
          </div>

          {/* Prossima azione: l'unico blocco con il verde pieno */}
          <div className="mx-4 flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-bordo bg-[color-mix(in_srgb,var(--verde)_8%,#ffffff)] px-4 py-3.5 sm:mx-6">
            <div className="min-w-0">
              <p className="etichetta-dato">{prossima.etichetta}</p>
              <p className="mt-1 text-[0.9375rem] font-extrabold">{prossima.titolo}</p>
              <p className="mt-0.5 text-[0.8125rem] text-secondario">{prossima.dettaglio}</p>
            </div>
            <span className="flex shrink-0 items-center gap-2 rounded-[10px] bg-verde px-4 py-2.5 text-[0.8125rem] font-extrabold text-scuro shadow-[0_8px_20px_-10px_color-mix(in_srgb,var(--verde)_90%,transparent)]">
              {prossima.bottone}
              <Freccia className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Schede */}
          <div className="mt-5 flex gap-5 overflow-x-auto border-b border-bordo px-4 sm:px-6">
            {schermata.schede.map((scheda) => {
              const attiva = scheda === schermata.schedaAttiva;
              return (
                <span
                  key={scheda}
                  className={`shrink-0 border-b-2 pb-2.5 text-[0.875rem] ${
                    attiva
                      ? "border-verde-testo font-extrabold"
                      : "border-transparent font-semibold text-secondario"
                  }`}
                >
                  {scheda}
                </span>
              );
            })}
          </div>

          {/* Percorso del lotto */}
          <div className="p-4 sm:p-6">
            <div className="overflow-hidden rounded-[14px] border border-bordo">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-bordo px-4 py-4 sm:px-5">
                <div className="min-w-0 max-w-xl">
                  <p className="text-[1.0625rem] font-extrabold tracking-[-0.02em]">
                    {percorso.titolo}
                  </p>
                  <p className="mt-1 text-[0.8125rem] leading-snug text-secondario">
                    {percorso.testo}
                  </p>
                </div>
                <div className="shrink-0">
                  <p className="text-right text-[0.8125rem] font-bold">{percorso.avanzamento}</p>
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-1.5 w-[9rem] overflow-hidden rounded-pill bg-[color-mix(in_srgb,var(--scuro)_9%,var(--chiaro))]"
                  >
                    <span
                      className="block h-full rounded-pill bg-verde"
                      style={{ width: `${percorso.quota}%` }}
                    />
                  </span>
                </div>
              </div>

              <ol>
                {percorso.fasi.map((fase) => (
                  <Fase key={fase.numero} {...fase} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
