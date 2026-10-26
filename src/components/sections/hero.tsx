import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { Check, Container } from "../ui";

const { hero } = site;
const { cruscotto } = hero;

const COLORE: Record<string, { barra: string; punto: string; stato: string }> = {
  ok: { barra: "bg-green", punto: "bg-green", stato: "stato stato-ok" },
  attenzione: { barra: "bg-orange", punto: "bg-orange", stato: "stato stato-attenzione" },
  pronti: {
    barra: "bg-[color-mix(in_srgb,var(--green)_35%,var(--white))]",
    punto: "bg-[color-mix(in_srgb,var(--green)_45%,var(--white))]",
    stato: "stato stato-attesa",
  },
};

const ETICHETTA: Record<string, string> = {
  ok: "Completato",
  attenzione: "Attenzione",
  pronti: "Pronto",
};

/**
 * Cruscotto centrale sotto il titolo: una sola card che raccoglie
 * l'avanzamento complessivo, i tre stati e un estratto delle unità.
 * È un'anteprima illustrativa: i codici sono fittizi.
 */
function Cruscotto() {
  return (
    <div className="mock mx-auto max-w-4xl text-left dashboard">
      <div className="mock-testa">
        <span>{cruscotto.titolo}</span>
        <span className="font-bold normal-case tracking-normal text-neutral">
          {cruscotto.totale} {cruscotto.unita}
        </span>
      </div>

      <div className="p-5 sm:p-7">
        {/* Barra di avanzamento divisa nei tre stati */}
        <div className="flex h-3 gap-1 overflow-hidden rounded-pill" aria-hidden="true">
          {cruscotto.stati.map((stato) => (
            <span
              key={stato.chiave}
              className={`${COLORE[stato.chiave].barra} rounded-pill`}
              style={{ width: `${stato.quota}%` }}
            />
          ))}
        </div>

        {/* I tre stati */}
        <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cruscotto.stati.map((stato) => (
            <div
              key={stato.chiave}
              className={`dashboard-state dashboard-state-${stato.chiave} rounded-[16px] border border-line px-5 py-5 ${stato.chiave === "pronti" ? "sm:col-span-2" : ""}`}
            >
              <dt className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${COLORE[stato.chiave].punto}`}
                />
                <span className="text-[0.875rem] font-bold text-neutral">{stato.etichetta}</span>
              </dt>
              <dd className="mt-2 flex items-baseline gap-2">
                <span className="text-[2rem] font-extrabold leading-none tracking-[-0.04em] tabular-nums">
                  {stato.numero}
                </span>
                <span className="text-[0.9375rem] font-bold tabular-nums text-neutral">
                  {stato.quota}%
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Estratto delle unità in lavorazione */}
        <div className="mt-6 overflow-hidden rounded-[16px] border border-line">
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] gap-3 border-b border-line bg-green-soft/50 px-4 py-2.5 sm:grid">
            {cruscotto.colonne.map((colonna) => (
              <span
                key={colonna}
                className="min-w-0 truncate text-[0.6875rem] font-extrabold uppercase tracking-[0.1em] text-neutral"
              >
                {colonna}
              </span>
            ))}
          </div>

          {cruscotto.righe.map((riga) => (
            <div
              key={riga.unita}
              className="flex flex-col gap-1.5 border-b border-line px-4 py-3.5 last:border-b-0 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-3 sm:py-3"
            >
              <span className="flex items-center justify-between gap-3 sm:block sm:min-w-0">
                <span className="truncate text-[0.9375rem] font-extrabold tabular-nums">
                  {riga.unita}
                </span>
                <span className="sm:hidden">
                  <span className={COLORE[riga.stato].stato}>
                    {riga.stato === "ok" ? <Check className="h-3 w-3" /> : null}
                    {ETICHETTA[riga.stato]}
                  </span>
                </span>
              </span>
              <span className="min-w-0 truncate text-[0.875rem] text-neutral">
                <span className="sm:hidden">Distinta: </span>
                {riga.distinta}
              </span>
              <span className="min-w-0 truncate text-[0.875rem] tabular-nums text-neutral">
                <span className="sm:hidden">Certificati: </span>
                {riga.certificati}
              </span>
              <span className="hidden sm:block">
                <span className={COLORE[riga.stato].stato}>
                  {riga.stato === "ok" ? <Check className="h-3 w-3" /> : null}
                  {ETICHETTA[riga.stato]}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="wash-hero relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container className="relative">
        <Reveal className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-pill border border-line bg-white/70 px-3.5 py-1.5 text-[0.6875rem] font-extrabold uppercase tracking-[0.12em] text-green-ink">
            {hero.badge}
          </span>

          <h1 className="display mt-7">
            {hero.titolo}
            <span className="mt-1 block font-bold tracking-[-0.035em] text-neutral [font-size:0.74em]">
              {hero.sottotitolo}
            </span>
          </h1>

          <p className="lede mx-auto mt-7 max-w-xl">{hero.testo}</p>
        </Reveal>

        <Reveal ritardo={180} className="mt-14">
          <Cruscotto />
        </Reveal>
      </Container>
    </section>
  );
}
