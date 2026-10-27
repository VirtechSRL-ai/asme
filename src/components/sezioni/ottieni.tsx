import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Occhiello, Spunta } from "../ui";

const { ottieni, azioni, notaDemo } = site;
const { cruscotto } = ottieni;

/**
 * Dashboard del certificato tecnico: i quattro passaggi collegati in verticale.
 * Il terzo è quello evidenziato, con bordo e barra di avanzamento; il quarto
 * resta attenuato, perché la verifica finale è del team e non del software.
 */
function Passaggi() {
  return (
    <div className="pannello">
      <div className="pannello-testa">
        <span>{cruscotto.titolo}</span>
        <span className="codice">{cruscotto.riferimento}</span>
      </div>

      <ol className="p-5 sm:p-6">
        {cruscotto.passi.map((passo, i) => {
          const ultimo = i === cruscotto.passi.length - 1;
          const evidenziato = passo.stato === "corso";
          return (
            <li key={passo.numero} className="flex gap-4">
              {/* Indicatore e linea di collegamento */}
              <span className="flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 text-[0.75rem] font-extrabold ${
                    passo.stato === "fatto"
                      ? "border-verde-testo bg-verde-testo text-chiaro"
                      : evidenziato
                        ? "border-verde bg-verde text-scuro"
                        : "border-dashed border-bordo text-secondario"
                  }`}
                >
                  {passo.stato === "fatto" ? <Spunta className="h-4 w-4" /> : passo.numero}
                </span>
                {!ultimo ? (
                  <span
                    aria-hidden="true"
                    className={`linea-flusso w-[2px] flex-1 ${
                      passo.stato === "fatto" ? "bg-verde-testo/40" : "bg-bordo"
                    }`}
                  />
                ) : null}
              </span>

              <span className={`min-w-0 flex-1 ${ultimo ? "" : "pb-5"}`}>
                <span
                  className={
                    evidenziato
                      ? "block rounded-[14px] border-2 border-verde bg-verde-velo px-4 py-3.5"
                      : "block"
                  }
                >
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className={`text-[1rem] font-extrabold tracking-[-0.02em] ${
                        passo.stato === "attesa" ? "text-secondario" : ""
                      }`}
                    >
                      {passo.nome}
                    </span>
                    {evidenziato ? <span className="stato stato-ok">In corso</span> : null}
                  </span>
                  {evidenziato && "avanzamento" in passo ? (
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-1.5 w-full overflow-hidden rounded-pill bg-[color-mix(in_srgb,var(--scuro)_10%,var(--chiaro))]"
                    >
                      <span
                        className="block h-full rounded-pill bg-verde"
                        style={{ width: `${passo.avanzamento}%` }}
                      />
                    </span>
                  ) : null}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function Ottieni() {
  return (
    <section id="ottieni" className="alone-tenue relative py-20 sm:py-28">
      <Contenitore>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Entra>
            <Occhiello>{ottieni.etichetta}</Occhiello>
            <h2 className="titolo-sezione mt-5">{ottieni.titolo}</h2>
            <p className="descrizione mt-6">{ottieni.testo}</p>
            <a href="#contatti" className="bottone bottone-verde mt-9">
              {azioni.contatta}
              <Freccia />
            </a>
          </Entra>

          <Entra ritardo={140}>
            <Passaggi />
            <p className="nota-dimostrativa mt-4">{notaDemo}</p>
          </Entra>
        </div>
      </Contenitore>
    </section>
  );
}
