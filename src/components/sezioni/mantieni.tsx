import { site } from "@/content/site";
import { Entra } from "../entra";
import { Simbolo } from "../logo";
import { Contenitore, Spunta, Verifica } from "../ui";

const { mantieni, notaDemo } = site;
const { flusso } = mantieni;

/**
 * Raccordo fra due aree del flusso: orizzontale quando le aree stanno in fila,
 * verticale quando scendono in colonna. Si disegna all'ingresso della sezione.
 */
function Raccordo() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-2 lg:py-0">
      <span className="linea-flusso block h-7 w-[2px] rounded-full bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--verde)_25%,transparent),var(--verde))] lg:hidden" />
      <span className="linea-flusso-x hidden h-[2px] w-full rounded-full bg-[linear-gradient(to_right,color-mix(in_srgb,var(--verde)_25%,transparent),var(--verde))] lg:block" />
    </div>
  );
}

/**
 * Un solo messaggio, letto da sinistra a destra: materiali e documenti
 * entrano, Tracciamy li collega all'unità, il team fa la verifica finale.
 *
 * Tre aree e due raccordi, niente di più. L'area centrale è l'unica cerchiata
 * di verde, perché è l'applicativo; quella finale non porta alcun segno di
 * automatismo, perché il controllo resta al team.
 */
function Flusso() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-[1fr_4.5rem_1.08fr_4.5rem_1fr]">
      {/* 1 · ciò che entra */}
      <div className="pannello h-full p-5">
        <p className="etichetta-dato">{flusso.ingresso.titolo}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
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

      {/* 2 · l'applicativo che collega: l'unica area cerchiata di verde */}
      <div className="relative rounded-[18px] bg-[color-mix(in_srgb,var(--verde)_14%,transparent)] p-5 shadow-[inset_0_0_0_2px_var(--verde),0_24px_56px_-28px_color-mix(in_srgb,var(--verde)_60%,transparent)] lg:p-6">
        <p className="flex items-center gap-2.5">
          <Simbolo lato={22} />
          <span className="text-[1.125rem] font-extrabold tracking-[-0.02em]">
            {flusso.centro.titolo}
          </span>
        </p>
        <p className="mt-1.5 text-[0.9375rem] text-su-scuro">{flusso.centro.dettaglio}</p>
      </div>

      <Raccordo />

      {/* 3 · la verifica, che resta al team */}
      <div className="pannello h-full p-5">
        <p className="flex items-center gap-2">
          <Verifica className="h-[1.125rem] w-[1.125rem] text-verde" />
          <span className="text-[0.9375rem] font-extrabold">{flusso.uscita.titolo}</span>
        </p>
        <p className="mt-3 flex flex-wrap items-center gap-2">
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

export function Mantieni() {
  return (
    <section id="mantieni" className="relative py-10 sm:py-16">
      <Contenitore>
        {/* Lastra profonda che galleggia nell'ambiente chiaro: dà respiro alla
            sequenza di sezioni luminose senza tagliare la pagina in due. */}
        <div className="lastra-scura px-6 py-14 sm:px-10 sm:py-16 lg:px-14">
          {/* Qui il testo sta sopra e il flusso corre largo sotto: è la sola
              sezione in cui l'interfaccia occupa tutta la misura. */}
          <Entra className="max-w-2xl">
            <p className="occhiello">{mantieni.etichetta}</p>
            <h2 className="titolo-sezione mt-5">
              <span className="spicca">{mantieni.titoloSpicca}</span>
              {mantieni.titoloDopo}
            </h2>
            <p className="descrizione mt-6">{mantieni.testo}</p>
          </Entra>

          <Entra ritardo={140} className="mt-12 sm:mt-14">
            <Flusso />
            <p className="nota-dimostrativa mt-6">{notaDemo}</p>
          </Entra>
        </div>
      </Contenitore>
    </section>
  );
}
