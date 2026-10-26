import { site } from "@/content/site";
import { NotaEsempio, Pannello, Riga } from "../mock";
import { Reveal } from "../reveal";
import { Container, Dossier, Eyebrow, Inspect, Trace } from "../ui";

const { problema } = site;
const { mock } = problema;
const icone = { trace: Trace, inspect: Inspect, dossier: Dossier };

/**
 * Grafica del problema: le fonti oggi scollegate e la domanda a cui nessuna
 * di esse risponde da sola. I tratteggi rendono visibile il legame mancante.
 */
function FontiSparse() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {mock.fonti.map((fonte) => (
          <div
            key={fonte.nome}
            className="rounded-[16px] border border-dashed border-line-on-dark px-5 py-4"
          >
            <p className="text-[0.9375rem] font-bold">{fonte.nome}</p>
            <p className="mt-0.5 text-[0.8125rem] text-on-dark-soft">{fonte.formato}</p>
          </div>
        ))}
      </div>

      {/* Il collegamento che oggi manca */}
      <div aria-hidden="true" className="mx-auto my-5 h-10 w-px bg-line-on-dark" />

      <Pannello titolo={mock.titolo}>
        <Riga className="flex-col items-start gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[1.0625rem] font-extrabold tracking-[-0.02em]">
            {mock.domanda}
          </span>
          <span className="stato stato-attesa">{mock.risposta}</span>
        </Riga>
      </Pannello>
    </div>
  );
}

/** 02 — Il problema: il momento scuro, subito dopo la hero chiara. */
export function Problem() {
  return (
    <section id="problema" className="on-dark relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-full max-w-[40rem] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--green)_12%,transparent),transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_minmax(0,27rem)] lg:gap-16">
          <Reveal>
            <Eyebrow>{problema.eyebrow}</Eyebrow>
            <h2 className="h2 mt-5 max-w-[14ch]">{problema.titolo}</h2>
            <p className="lede mt-6 max-w-xl">{problema.testo}</p>

            <dl className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3">
              {problema.punti.map((punto) => {
                const Icona = icone[punto.icona];
                return (
                  <div key={punto.titolo}>
                    <span
                      aria-hidden="true"
                      className="traccia block h-[3px] w-12 rounded-full bg-green"
                    />
                    <dt className="mt-5 flex items-center gap-2.5">
                      <Icona className="h-5 w-5 text-green" />
                      <span className="text-[1.1875rem] font-extrabold tracking-[-0.025em]">
                        {punto.titolo}
                      </span>
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] leading-relaxed text-on-dark-soft">
                      {punto.testo}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal ritardo={150}>
            <FontiSparse />
            <NotaEsempio testo={site.notaEsempio} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
