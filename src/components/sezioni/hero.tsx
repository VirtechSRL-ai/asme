import { site } from "@/content/site";
import { ContactCta } from "../contact-cta";
import { Entra } from "../entra";
import { SfondoVideo } from "../sfondo-video";
import { Contenitore, Freccia, Spunta, Verifica } from "../ui";

const { hero, azioni, notaDemo } = site;
const { cruscotto, dettaglio } = hero;

/** Anello percentuale: comunica la quota senza bisogno di un grafico intero. */
function Anello({ quota, tono }: { quota: number; tono: "verde" | "neutro" }) {
  const r = 20;
  const circonferenza = 2 * Math.PI * r;
  const colore = tono === "verde" ? "var(--verde)" : "var(--testo-secondario)";

  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 shrink-0" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        strokeWidth="5"
        stroke="color-mix(in srgb, var(--scuro) 10%, var(--chiaro))"
      />
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        strokeWidth="5"
        stroke={colore}
        strokeLinecap="round"
        strokeDasharray={`${(circonferenza * quota) / 100} ${circonferenza}`}
        transform="rotate(-90 24 24)"
      />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-[var(--scuro)] font-extrabold"
        style={{ fontSize: "11px" }}
      >
        {quota}%
      </text>
    </svg>
  );
}

/** Pannello di sinistra: il quadro d'insieme dei documenti. */
function Cruscotto() {
  return (
    <div className="pannello pannello-vivo">
      <div className="pannello-testa">
        <span>{cruscotto.titolo}</span>
        <span className="flex gap-1.5">
          {cruscotto.filtri.map((filtro, i) => (
            <span
              key={filtro}
              className={`rounded-pill px-2.5 py-1 text-[0.75rem] font-bold normal-case tracking-normal ${
                i === 0 ? "bg-scuro text-chiaro" : "border border-bordo text-secondario"
              }`}
            >
              {filtro}
            </span>
          ))}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        {cruscotto.tessere.map((tessera) => (
          <div
            key={tessera.etichetta}
            className="flex items-center gap-3 rounded-[14px] border border-bordo bg-chiaro px-3 py-3"
          >
            <Anello quota={tessera.quota} tono={tessera.tono} />
            <span className="min-w-0">
              <span className="block text-[1.5rem] font-extrabold leading-none tabular-nums">
                {tessera.valore}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-[0.8125rem] text-secondario">
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    tessera.tono === "verde" ? "bg-verde" : "bg-[var(--testo-secondario)]"
                  }`}
                />
                <span className="leading-tight">{tessera.etichetta}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Pannello di destra: una singola unità, più stretto e sfalsato verso il basso. */
function Dettaglio() {
  return (
    // La fascia vuota in basso è lo spazio su cui atterra il cartellino: senza,
    // la sovrapposizione coprirebbe un valore invece del margine.
    <div className="pannello pannello-vivo pb-0 sm:pb-7">
      <div className="pannello-testa">
        <span>{dettaglio.titolo}</span>
        <span className="codice">{dettaglio.riferimento}</span>
      </div>
      <dl className="flex">
        {dettaglio.campi.map((campo) => (
          <div
            key={campo.etichetta}
            className="min-w-0 flex-1 border-r border-bordo px-4 py-4 last:border-r-0"
          >
            <dt className="etichetta-dato">{campo.etichetta}</dt>
            <dd className="mt-1.5 text-[1rem] font-bold tabular-nums">{campo.valore}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * Il cartellino dello stato: non sta dentro un pannello, galleggia sopra
 * entrambi e li tiene insieme. È il pezzo che fa leggere le due superfici come
 * una sola scena invece che come due rettangoli affiancati.
 */
function Stato() {
  return (
    <div className="galleggia flex items-center gap-2.5 px-3.5 py-2.5">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-verde text-scuro">
        <Verifica className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.875rem] font-extrabold leading-tight">
          {dettaglio.stato}
        </span>
        <span className="mt-0.5 flex items-center gap-1.5 text-[0.75rem] text-secondario">
          <Spunta className="h-3 w-3 text-verde-testo" />
          {dettaglio.riferimento}
        </span>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    // Senza l'occhiello il titolo partirebbe troppo vicino all'intestazione:
    // lo spazio che occupava torna come padding, non come vuoto.
    <section className="velo-hero relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <SfondoVideo />

      <Contenitore className="relative z-10">
        <Entra className="mx-auto max-w-[66rem] text-center">
          {/* Un unico titolo su due righe: stessa dimensione, stesso peso */}
          <h1 className="titolo-hero">
            <span className="block">{hero.titoloRiga1}</span>
            <span className="block">
              {hero.titoloRiga2Prima}
              <span className="spicca">{hero.titoloRiga2Spicca}</span>
            </span>
          </h1>

          <p className="descrizione mx-auto mt-6 max-w-lg">{hero.testo}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ContactCta source="hero" className="bottone bottone-verde w-full sm:w-auto">
              {azioni.contatta}
              <Freccia />
            </ContactCta>
            <a href="#ottieni" className="bottone bottone-contorno w-full sm:w-auto">
              {azioni.cosaOttieni}
              <Freccia />
            </a>
          </div>
        </Entra>

        {/* Due superfici affiancate e sfalsate, non una colonna di rettangoli:
            la seconda scende, il cartellino le attraversa, e l'insieme resta
            dentro la zona luminosa della hero invece di galleggiarci sopra. */}
        <Entra ritardo={200} className="mx-auto mt-12 w-full max-w-[56rem]">
          {/* Il riferimento del cartellino è questo blocco, non l'intera
              colonna: così resta appoggiato sul bordo dei due pannelli
              invece di scivolare sotto la nota. */}
          <div className="relative">
            <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[1.12fr_0.88fr] sm:gap-5">
              <Cruscotto />
              <div className="sm:mt-10">
                <Dettaglio />
              </div>
            </div>

            {/* Su schermo largo attraversa la giuntura fra i due pannelli;
                sotto torna in colonna, dove sovrapporlo non avrebbe senso. */}
            <div className="mt-4 sm:absolute sm:bottom-0 sm:left-1/2 sm:z-10 sm:mt-0 sm:w-[16.5rem] sm:-translate-x-1/2 sm:translate-y-1/2">
              <Stato />
            </div>
          </div>

          <p className="nota-dimostrativa mt-6 text-center sm:mt-14">{notaDemo}</p>
        </Entra>
      </Contenitore>
    </section>
  );
}
