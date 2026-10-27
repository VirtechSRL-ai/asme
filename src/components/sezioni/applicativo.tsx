import { site } from "@/content/site";
import { Entra } from "../entra";
import { Inclina } from "../inclina";
import { Simbolo } from "../logo";
import { Contenitore, Freccia, Spunta } from "../ui";

const { applicativo, azioni, notaDemo } = site;
const { cruscotto } = applicativo;

/**
 * La dashboard dell'applicativo: superficie bianca, pochi contenuti ben
 * distribuiti. A farla emergere sono il bordo, le ombre stratificate e la
 * sfumata ambientale dietro, non un fondo scuro.
 *
 * Rappresentazione illustrativa: nessuna funzione non confermata, dati
 * dimostrativi che si sostituiscono da `site.ts` senza toccare la grafica.
 */
function Cruscotto() {
  return (
    <div className="pannello">
      <div className="pannello-testa">
        <span className="flex items-center gap-2 normal-case tracking-normal">
          <Simbolo lato={18} />
          <span className="text-[0.9375rem] font-extrabold text-scuro">{cruscotto.titolo}</span>
        </span>
        <span className="codice">{cruscotto.riferimento}</span>
      </div>

      <div className="p-4 sm:p-5">
        {/* Navigazione interna, ridotta all'essenziale */}
        <div className="flex flex-wrap gap-1.5">
          {cruscotto.voci.map((voce) => (
            <span
              key={voce}
              className={`rounded-pill px-3 py-1.5 text-[0.8125rem] font-bold ${
                voce === cruscotto.attiva
                  ? "bg-verde text-scuro"
                  : "border border-bordo text-secondario"
              }`}
            >
              {voce}
            </span>
          ))}
        </div>

        {/* Avanzamento del fascicolo */}
        <div className="mt-5 flex items-baseline justify-between gap-3">
          <span className="etichetta-dato">{cruscotto.barra.etichetta}</span>
          <span className="text-[1.0625rem] font-extrabold tabular-nums">
            {cruscotto.barra.quota}%
          </span>
        </div>
        <div
          aria-hidden="true"
          className="mt-2 h-2 overflow-hidden rounded-pill bg-[color-mix(in_srgb,var(--scuro)_9%,var(--chiaro))]"
        >
          <span
            className="block h-full rounded-pill bg-verde"
            style={{ width: `${cruscotto.barra.quota}%` }}
          />
        </div>

        {/* Componenti e certificato associato */}
        <div className="mt-5 overflow-hidden rounded-[14px] border border-bordo">
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_auto] gap-3 border-b border-bordo bg-verde-velo px-3.5 py-2.5 sm:grid">
            {cruscotto.colonne.map((colonna) => (
              <span key={colonna} className="etichetta-dato min-w-0 truncate">
                {colonna}
              </span>
            ))}
          </div>

          {cruscotto.righe.map((riga) => (
            <div
              key={riga.componente}
              className="flex flex-col gap-1.5 border-b border-bordo px-3.5 py-3 last:border-b-0 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_auto] sm:items-center sm:gap-3"
            >
              <span className="flex items-center justify-between gap-3 sm:block sm:min-w-0">
                <span className="truncate text-[0.875rem] font-bold tabular-nums">
                  {riga.componente}
                </span>
                <span className="sm:hidden">
                  <Stato stato={riga.stato} />
                </span>
              </span>
              <span className="min-w-0 truncate text-[0.8125rem] tabular-nums text-secondario">
                <span className="sm:hidden">Certificato: </span>
                {riga.certificato}
              </span>
              <span className="hidden sm:block">
                <Stato stato={riga.stato} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stato({ stato }: { stato: "ok" | "attesa" }) {
  return stato === "ok" ? (
    <span className="stato stato-ok">
      <Spunta className="h-3 w-3" />
      Collegato
    </span>
  ) : (
    <span className="stato stato-attesa">Manca</span>
  );
}

export function Applicativo() {
  return (
    // Stesso linguaggio cromatico della sezione successiva: niente fondo scuro,
    // la dashboard emerge grazie al bianco, alle ombre e all'alone verde.
    <section id="applicativo" className="alone-tenue relative overflow-hidden py-20 sm:py-28">
      <Contenitore className="relative">
        <Entra className="mx-auto max-w-2xl text-center">
          <p className="occhiello">{applicativo.etichetta}</p>
          <h2 className="titolo-sezione mt-5">
            <span className="spicca">{applicativo.titoloSpicca}</span>
            {applicativo.titoloDopo}
          </h2>
          <p className="descrizione mt-6">
            {applicativo.testoRiga1}
            <br className="hidden sm:block" /> {applicativo.testoRiga2}
          </p>
          <div className="mt-9 flex justify-center">
            <a href="#contatti" className="bottone bottone-verde">
              {azioni.contatta}
              <Freccia />
            </a>
          </div>
        </Entra>

        <Entra ritardo={180} className="relative mt-16">
          <div
            aria-hidden="true"
            className="respiro pointer-events-none absolute -inset-x-6 -top-8 bottom-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_26%,transparent),transparent_70%)]"
          />
          <Inclina className="relative mx-auto max-w-3xl">
            <Cruscotto />
          </Inclina>
          <p className="nota-dimostrativa mt-6 text-center">{notaDemo}</p>
        </Entra>
      </Contenitore>
    </section>
  );
}
