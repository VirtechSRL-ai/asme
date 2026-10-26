import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Check, Container, Dossier, Eyebrow, Inspect, Trace } from "../ui";

const { mantieni, contatti } = site;
const icone = { dossier: Dossier, trace: Trace, inspect: Inspect };

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;

/**
 * Le tre fasi come riquadri collegati da una linea verticale: si leggono
 * come un unico percorso. L'ultima resta in attesa, perché il controllo
 * finale è del team e non del software.
 */
function Flusso() {
  return (
    <ol className="relative">
      {mantieni.fasi.map((fase, i) => {
        const Icona = icone[fase.icona];
        const ultima = i === mantieni.fasi.length - 1;
        return (
          <li key={fase.titolo} className={ultima ? "" : "pb-5"}>
            <div className="mock card-hover flex items-start gap-4 p-5 sm:p-6">
              <span
                aria-hidden="true"
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-[16px] ${
                  fase.stato === "ok"
                    ? "bg-green-soft text-green-ink"
                    : "border border-dashed border-line text-neutral"
                }`}
              >
                <Icona className="h-6 w-6" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <span className="text-[1.125rem] font-extrabold tracking-[-0.025em]">
                    {fase.titolo}
                  </span>
                  {fase.stato === "ok" ? (
                    <span className="stato stato-ok">
                      <Check className="h-3 w-3" />
                      Collegato
                    </span>
                  ) : (
                    <span className="stato stato-attesa">In carico al team</span>
                  )}
                </span>
                <span className="mt-1 block text-[0.9375rem] leading-relaxed text-neutral">
                  {fase.dettaglio}
                </span>
              </span>
            </div>

            {/* Linea che collega la fase alla successiva */}
            {!ultima ? (
              <div aria-hidden="true" className="flex justify-center py-1">
                <span
                  className={`collega block w-[2px] ${
                    fase.stato === "ok" ? "bg-green-ink/40" : "bg-line"
                  }`}
                  style={{ height: "1.25rem" }}
                />
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export function Mantieni() {
  return (
    <section id="mantieni" className="wash-soft py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>{mantieni.eyebrow}</Eyebrow>
            <h2 className="h2 mt-5">{mantieni.titolo}</h2>
            <p className="lede mt-6">{mantieni.testo}</p>
            <a href={MAILTO} className="btn btn-green mt-9">
              {mantieni.cta}
              <ArrowRight />
            </a>
          </Reveal>

          <Reveal ritardo={120}>
            <Flusso />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
