import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Occhiello, Spunta } from "../ui";

const { ottieni, azioni, notaDemo } = site;
const { cruscotto } = ottieni;

/**
 * Il percorso di preparazione della documentazione, in quattro fasi.
 *
 * Ogni fase è una superficie a sé, non una riga di elenco: le due concluse
 * stanno in piano, la terza si solleva e sborda a destra perché è quella in
 * corso, la quarta resta arretrata e senza spunta. La verifica finale è del
 * team, quindi non deve mai sembrare già fatta dal software.
 */
function Passaggi() {
  return (
    <div className="relative">
      {/* Le quattro fasi entrano una dopo l'altra: è un percorso, e si legge
          meglio se arriva nell'ordine in cui va letto. */}
      <Entra as="ol" cascata className="relative space-y-2.5">
        {cruscotto.passi.map((passo, i) => {
          const ultimo = i === cruscotto.passi.length - 1;
          const corso = passo.stato === "corso";
          const fatto = passo.stato === "fatto";

          return (
            <li key={passo.numero} className="relative flex gap-3 sm:gap-4">
              {/* Nodo e raccordo verso la fase successiva */}
              <span className="flex flex-col items-center pt-3">
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[0.75rem] font-extrabold ${
                    fatto
                      ? "bg-verde-testo text-chiaro"
                      : corso
                        ? "bg-verde text-scuro shadow-[0_0_0_5px_color-mix(in_srgb,var(--verde)_22%,transparent)]"
                        : "border-2 border-dashed border-bordo text-secondario"
                  }`}
                >
                  {fatto ? <Spunta className="h-4 w-4" /> : passo.numero}
                </span>
                {!ultimo ? (
                  <span
                    aria-hidden="true"
                    className={`linea-flusso mt-1 w-[2px] flex-1 rounded-full ${
                      fatto ? "bg-[color-mix(in_srgb,var(--verde)_55%,transparent)]" : "bg-bordo"
                    }`}
                  />
                ) : null}
              </span>

              {/* La superficie della fase */}
              <span
                className={`min-w-0 flex-1 rounded-[14px] px-4 py-3.5 transition-shadow duration-300 ${
                  corso
                    ? "bg-white shadow-[0_0_0_1.5px_var(--verde),0_10px_24px_-12px_color-mix(in_srgb,var(--scuro)_28%,transparent),0_28px_56px_-36px_color-mix(in_srgb,var(--verde)_80%,transparent)] sm:-mr-4 lg:-mr-8"
                    : fatto
                      ? "bg-white shadow-[0_0_0_1px_color-mix(in_srgb,var(--scuro)_7%,transparent),0_2px_6px_-2px_color-mix(in_srgb,var(--scuro)_8%,transparent)]"
                      : "bg-[color-mix(in_srgb,var(--chiaro)_60%,transparent)] shadow-[inset_0_0_0_1.5px_var(--bordo)]"
                }`}
              >
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <span
                    className={`text-[1rem] font-extrabold tracking-[-0.02em] ${
                      passo.stato === "attesa" ? "text-secondario" : ""
                    }`}
                  >
                    {passo.nome}
                  </span>
                  {corso ? <span className="stato stato-ok">In corso</span> : null}
                </span>

                {corso && "avanzamento" in passo ? (
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
            </li>
          );
        })}
      </Entra>
    </div>
  );
}

export function Ottieni() {
  return (
    <section id="ottieni" className="alone-tenue relative py-20 sm:py-28">
      <Contenitore>
        {/* Il testo occupa meno della metà: è l'interfaccia a dover respirare */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <Entra>
            <Occhiello>{ottieni.etichetta}</Occhiello>
            <h2 className="titolo-sezione mt-5">
              {ottieni.titoloPrima}
              <span className="spicca">{ottieni.titoloSpicca}</span>
            </h2>
            <p className="descrizione mt-6">{ottieni.testo}</p>
            <a href="#contatti" className="bottone bottone-verde mt-9">
              {azioni.contatta}
              <Freccia />
            </a>
          </Entra>

          <Entra ritardo={140}>
            {/* Il piano tinto che tiene insieme le quattro fasi: senza, le
                superfici bianche galleggerebbero sul nulla. */}
            <div className="scena p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="etichetta-dato">{cruscotto.titolo}</span>
                <span className="codice">{cruscotto.riferimento}</span>
              </div>
              <Passaggi />
            </div>
            <p className="nota-dimostrativa mt-4">{notaDemo}</p>
          </Entra>
        </div>
      </Contenitore>
    </section>
  );
}
