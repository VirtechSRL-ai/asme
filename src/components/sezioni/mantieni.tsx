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
 * Tre tappe e due raccordi, niente di più: il flusso si deve leggere in un
 * colpo d'occhio. La profondità arriva da ombre e sfumature, non dal numero
 * di elementi.
 */
function Flusso() {
  return (
    <div className="pannello pannello-vivo p-5 sm:p-6">
      {/* Tappa 1 — ciò che entra */}
      <div className="rounded-[14px] border border-bordo-scuro px-4 py-3.5">
        <p className="etichetta-dato">{flusso.ingresso.titolo}</p>
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {flusso.ingresso.voci.map((voce) => (
            <li
              key={voce}
              className="rounded-pill border border-bordo-scuro px-2.5 py-1 text-[0.8125rem] font-semibold"
            >
              {voce}
            </li>
          ))}
        </ul>
      </div>

      <Raccordo />

      {/* Tappa 2 — l'applicativo che collega */}
      <div className="rounded-[14px] border-2 border-verde bg-[color-mix(in_srgb,var(--verde)_12%,transparent)] px-4 py-3.5">
        <p className="flex items-center gap-2.5">
          <Simbolo lato={20} />
          <span className="text-[1.0625rem] font-extrabold tracking-[-0.02em]">
            {flusso.centro.titolo}
          </span>
        </p>
        <p className="mt-1 text-[0.875rem] text-su-scuro">{flusso.centro.dettaglio}</p>
      </div>

      <Raccordo />

      {/* Tappa 3 — la verifica, che resta al team */}
      <div className="rounded-[14px] border border-bordo-scuro px-4 py-3.5">
        <p className="flex items-center gap-2">
          <Verifica className="h-[1.125rem] w-[1.125rem] text-verde" />
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
    <section id="mantieni" className="relative py-10 sm:py-16">
      <Contenitore>
        {/* Lastra profonda che galleggia nell'ambiente chiaro: dà respiro alla
            sequenza di sezioni luminose senza tagliare la pagina in due. */}
        <div className="lastra-scura px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_minmax(0,23rem)] lg:gap-16">
            <Entra className="lg:order-2">
              <p className="occhiello">{mantieni.etichetta}</p>
              <h2 className="titolo-sezione mt-5">
                <span className="spicca">{mantieni.titoloSpicca}</span>
                {mantieni.titoloDopo}
              </h2>
              <p className="descrizione mt-6">{mantieni.testo}</p>
            </Entra>

            <Entra ritardo={140} className="lg:order-1">
              <Flusso />
              <p className="nota-dimostrativa mt-4">{notaDemo}</p>
            </Entra>
          </div>
        </div>
      </Contenitore>
    </section>
  );
}
