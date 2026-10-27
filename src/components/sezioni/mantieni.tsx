import { site } from "@/content/site";
import { Entra } from "../entra";
import { Simbolo } from "../logo";
import { Contenitore, Spunta, Verifica } from "../ui";

const { mantieni, notaDemo } = site;
const { flusso } = mantieni;

/**
 * Un solo messaggio: materiali e documenti entrano, Tracciamy li collega
 * all'unità, il team fa la verifica finale.
 *
 * La composizione è deliberatamente minima — tre tappe e due raccordi — perché
 * il flusso si deve leggere in un colpo d'occhio. Niente tabelle, elenchi
 * lunghi o pannelli annidati: la profondità arriva da ombre e sfumature, non
 * dalla quantità di elementi.
 */
function Flusso() {
  return (
    <div className="pannello pannello-vivo p-5 sm:p-6">
      {/* Tappa 1 — ciò che entra */}
      <div className="rounded-[14px] border border-bordo bg-chiaro px-4 py-3.5">
        <p className="etichetta-dato">{flusso.ingresso.titolo}</p>
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {flusso.ingresso.voci.map((voce) => (
            <li
              key={voce}
              className="rounded-pill border border-bordo bg-[color-mix(in_srgb,var(--chiaro)_60%,#ffffff)] px-2.5 py-1 text-[0.8125rem] font-semibold"
            >
              {voce}
            </li>
          ))}
        </ul>
      </div>

      <Raccordo />

      {/* Tappa 2 — l'applicativo che collega */}
      <div className="rounded-[14px] border-2 border-verde bg-verde-velo px-4 py-3.5">
        <p className="flex items-center gap-2.5">
          <Simbolo lato={20} />
          <span className="text-[1.0625rem] font-extrabold tracking-[-0.02em]">
            {flusso.centro.titolo}
          </span>
        </p>
        <p className="mt-1 text-[0.875rem] text-secondario">{flusso.centro.dettaglio}</p>
      </div>

      <Raccordo />

      {/* Tappa 3 — la verifica, che resta al team */}
      <div className="rounded-[14px] border border-bordo bg-chiaro px-4 py-3.5">
        <p className="flex items-center gap-2">
          <Verifica className="h-[1.125rem] w-[1.125rem] text-verde-testo" />
          <span className="text-[0.9375rem] font-extrabold">{flusso.uscita.titolo}</span>
        </p>
        <p className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className="stato stato-ok">
            <Spunta className="h-3 w-3" />
            {flusso.uscita.disponibili}
          </span>
          <span className="stato stato-attesa">{flusso.uscita.mancanti}</span>
        </p>
      </div>
    </div>
  );
}

/** Raccordo verticale fra due tappe: si disegna quando la sezione entra. */
function Raccordo() {
  return (
    <div aria-hidden="true" className="flex justify-center py-2.5">
      <span className="linea-flusso block h-6 w-[2px] rounded-full bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--verde)_30%,transparent),var(--verde))]" />
    </div>
  );
}

export function Mantieni() {
  return (
    <section id="mantieni" className="relative py-20 sm:py-28">
      <Contenitore>
        {/* Colonne invertite rispetto a "Ottieni", per dare ritmo */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_minmax(0,24rem)] lg:gap-20">
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
