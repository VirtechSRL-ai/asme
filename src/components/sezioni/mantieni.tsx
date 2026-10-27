import { site } from "@/content/site";
import { Entra } from "../entra";
import { Simbolo } from "../logo";
import { Certificato, Componente, Contenitore, Distinta, Spunta, Verifica } from "../ui";

const { mantieni, notaDemo } = site;
const { flusso } = mantieni;

const icone = [Distinta, Componente, Certificato];

/**
 * Il flusso della sezione: materiali e documenti entrano, Tracciamy li collega
 * alle unità, il team fa la verifica finale. Tre aree collegate da linee che
 * si disegnano allo scorrimento, non tre riquadri affiancati.
 */
function Flusso() {
  return (
    <div className="relative">
      {/* Area 1 — ciò che entra */}
      <div className="pannello">
        <div className="pannello-testa">
          <span>{flusso.ingresso.titolo}</span>
        </div>
        <ul>
          {flusso.ingresso.voci.map((voce, i) => {
            const Icona = icone[i] ?? Distinta;
            return (
              <li key={voce.nome} className="pannello-riga">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-verde-velo text-verde-testo"
                >
                  <Icona className="h-[1.125rem] w-[1.125rem]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.9375rem] font-bold">{voce.nome}</span>
                  <span className="block text-[0.8125rem] text-secondario">{voce.dettaglio}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <Connettore />

      {/* Area 2 — l'applicativo che collega */}
      <div className="pannello border-verde/60">
        <div className="pannello-testa">
          <span className="flex items-center gap-2">
            <Simbolo lato={16} />
            {flusso.centro.titolo}
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-[0.875rem] text-secondario">{flusso.centro.dettaglio}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {flusso.centro.legami.map((legame) => (
              <li
                key={legame.da}
                className="flex items-center gap-2 rounded-[12px] border border-bordo bg-chiaro px-3 py-2.5"
              >
                <span className="codice shrink-0">{legame.da}</span>
                <span
                  aria-hidden="true"
                  className={`h-[2px] min-w-4 flex-1 rounded-full ${
                    legame.stato === "ok" ? "bg-verde" : "bg-bordo"
                  }`}
                />
                {legame.stato === "ok" ? (
                  <span className="codice shrink-0">{legame.a}</span>
                ) : (
                  <span className="stato stato-attesa shrink-0">{legame.a}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Connettore />

      {/* Area 3 — il controllo del team */}
      <div className="pannello">
        <div className="pannello-testa">
          <span className="flex items-center gap-2">
            <Verifica className="h-4 w-4" />
            {flusso.uscita.titolo}
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <dl className="grid grid-cols-2 gap-3">
            <div className="rounded-[12px] border border-bordo bg-chiaro px-3.5 py-3">
              <dt className="etichetta-dato">{flusso.uscita.disponibili.etichetta}</dt>
              <dd className="mt-1 flex items-center gap-2 text-[1.25rem] font-extrabold tabular-nums">
                <Spunta className="h-4 w-4 text-verde-testo" />
                {flusso.uscita.disponibili.valore}
              </dd>
            </div>
            <div className="rounded-[12px] border border-bordo bg-chiaro px-3.5 py-3">
              <dt className="etichetta-dato">{flusso.uscita.mancanti.etichetta}</dt>
              <dd className="mt-1 text-[1.25rem] font-extrabold tabular-nums text-secondario">
                {flusso.uscita.mancanti.valore}
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-[0.8125rem] text-secondario">{flusso.uscita.nota}</p>
        </div>
      </div>
    </div>
  );
}

/** Linea verticale che collega due aree del flusso. */
function Connettore() {
  return (
    <div aria-hidden="true" className="flex justify-center py-2">
      <span className="linea-flusso block h-8 w-[2px] rounded-full bg-[linear-gradient(to_bottom,var(--verde),color-mix(in_srgb,var(--verde)_25%,transparent))]" />
    </div>
  );
}

export function Mantieni() {
  return (
    <section id="mantieni" className="relative py-20 sm:py-28">
      <Contenitore>
        {/* Rispetto a "Ottieni" le colonne sono invertite: dashboard a
            sinistra, testo a destra, per dare ritmo allo scorrimento. */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Entra className="lg:order-2">
            <p className="occhiello">{mantieni.etichetta}</p>
            <h2 className="titolo-sezione mt-5">{mantieni.titolo}</h2>
            <p className="descrizione mt-6">{mantieni.testo}</p>
          </Entra>

          <Entra ritardo={140} className="lg:order-1">
            <Flusso />
            <p className="nota-dimostrativa mt-4">{notaDemo}</p>
          </Entra>
        </div>
      </Contenitore>
    </section>
  );
}
