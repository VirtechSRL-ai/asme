import { site } from "@/content/site";
import { Entra } from "../entra";
import { Inclina } from "../inclina";
import { Simbolo } from "../logo";
import { Freccia, Spunta } from "../ui";

const { applicativo, azioni, notaDemo } = site;
const { cruscotto } = applicativo;

/**
 * La dashboard dell'applicativo: superficie bianca, pochi contenuti ben
 * distribuiti. A farla emergere sono il piano tinto che le sta sotto, le ombre
 * stratificate e la luce alle sue spalle, non un fondo scuro.
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

/**
 * L'avanzamento del fascicolo non sta dentro la dashboard: galleggia sul suo
 * bordo. È il dettaglio che fa leggere l'interfaccia come parte della scena e
 * non come un'immagine incollata dentro un rettangolo.
 */
function Avanzamento() {
  return (
    <div className="galleggia px-4 py-3">
      <div className="flex items-baseline justify-between gap-4">
        <span className="etichetta-dato">{cruscotto.barra.etichetta}</span>
        <span className="text-[1.0625rem] font-extrabold tabular-nums">
          {cruscotto.barra.quota}%
        </span>
      </div>
      <div
        aria-hidden="true"
        className="mt-2 h-1.5 overflow-hidden rounded-pill bg-[color-mix(in_srgb,var(--scuro)_9%,var(--chiaro))]"
      >
        <span
          className="block h-full rounded-pill bg-verde"
          style={{ width: `${cruscotto.barra.quota}%` }}
        />
      </div>
    </div>
  );
}

export function Applicativo() {
  return (
    <section id="applicativo" className="alone-tenue relative py-20 sm:py-28">
      {/* Misura più larga del resto della pagina: è il momento in cui il
          prodotto si mostra, e si vede che la composizione si apre. */}
      <div className="mx-auto w-full max-w-[82rem] px-5 sm:px-8">
        {/* Composizione rovesciata rispetto a "Ottieni": qui viene prima
            l'interfaccia e il testo la commenta da destra. */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16">
          <Entra className="relative lg:order-1">
            <div className="scena p-4 sm:p-7">
              <Inclina>
                <Cruscotto />
              </Inclina>
            </div>

            {/* Sborda dal piano tinto verso la colonna del testo */}
            <div className="mt-4 w-full sm:absolute sm:-bottom-5 sm:right-4 sm:mt-0 sm:w-[15rem] lg:-right-8">
              <Avanzamento />
            </div>
          </Entra>

          <Entra ritardo={160} className="lg:order-2">
            <p className="occhiello">{applicativo.etichetta}</p>
            <h2 className="titolo-sezione mt-5">
              <span className="spicca">{applicativo.titoloSpicca}</span>
              {applicativo.titoloDopo}
            </h2>
            <p className="descrizione mt-6">
              {applicativo.testoRiga1} {applicativo.testoRiga2}
            </p>
            <a href="#contatti" className="bottone bottone-verde mt-9">
              {azioni.contatta}
              <Freccia />
            </a>
            <p className="nota-dimostrativa mt-8">{notaDemo}</p>
          </Entra>
        </div>
      </div>
    </section>
  );
}
