import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { ArrowRight, Check, Container, Eyebrow } from "../ui";

const { ottieni, contatti } = site;
const { percorso, documento } = ottieni;

const MAILTO = `mailto:${contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;

/**
 * Anteprima del percorso: i passaggi sono collegati da una linea verticale,
 * quelli conclusi hanno la spunta, quello in corso una barra di avanzamento.
 * Accanto, in primo piano e leggermente sovrapposto, il documento che ne
 * risulta. Il controllo finale resta al team: l'ultimo passo è in attesa.
 */
function AnteprimaCertificato() {
  return (
    <div className="software-stage certificate-stage">
      <div className="mock certificate-process">
        <div className="mock-testa certificate-heading">
          <span>{percorso.titolo}</span>
          <span className="rounded-[6px] bg-green-soft px-1.5 py-0.5 text-[0.8125rem] font-bold normal-case tabular-nums tracking-normal text-green-ink">
            {percorso.riferimento}
          </span>
        </div>

        <ol className="p-5 sm:p-6">
          {percorso.passi.map((passo, i) => {
            const ultimo = i === percorso.passi.length - 1;
            return (
              <li key={passo.nome} className="flex gap-4">
                <span className="flex flex-col items-center">
                  <span
                    aria-hidden="true"
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 ${
                      passo.stato === "fatto"
                        ? "border-green-ink bg-green-ink text-white"
                        : passo.stato === "corso"
                          ? "border-green bg-green text-dark"
                          : "border-dashed border-line text-neutral"
                    }`}
                  >
                    {passo.stato === "fatto" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span className="text-[0.75rem] font-extrabold">{i + 1}</span>
                    )}
                  </span>
                  {!ultimo ? (
                    <span
                      aria-hidden="true"
                      className={`w-[2px] flex-1 ${
                        passo.stato === "fatto" ? "bg-green-ink/40" : "bg-line"
                      }`}
                    />
                  ) : null}
                </span>

                <span className={`min-w-0 flex-1 ${ultimo ? "pb-0" : "pb-6"}`}>
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className={`text-[1rem] font-extrabold tracking-[-0.02em] ${
                        passo.stato === "attesa" ? "text-neutral" : ""
                      }`}
                    >
                      {passo.nome}
                    </span>
                    {passo.stato === "corso" ? (
                      <span className="stato stato-ok">In corso</span>
                    ) : null}
                  </span>
                  <span className="mt-0.5 block text-[0.875rem] text-neutral">
                    {passo.dettaglio}
                  </span>

                  {passo.stato === "corso" && "avanzamento" in passo ? (
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-1.5 w-full overflow-hidden rounded-pill bg-line"
                    >
                      <span
                        className="block h-full rounded-pill bg-green"
                        style={{ width: `${passo.avanzamento}%` }}
                      />
                    </span>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Documento risultante: in colonna sul telefono, sovrapposto e in primo
          piano da tablet in su, dove c'è spazio per farlo sporgere. */}
      <div className="mock certificate-document">
        <div className="mock-testa">
          <span>{documento.titolo}</span>
        </div>
        <div className="p-4">
          <div aria-hidden="true" className="document-lines"><span /><span /><span /></div>
          <p className="rounded-[6px] bg-green-soft px-1.5 py-0.5 text-[0.8125rem] font-bold tabular-nums text-green-ink inline-block">
            {documento.riferimento}
          </p>
          <dl className="mt-3 flex flex-col gap-2">
            {documento.righe.map((riga) => (
              <div key={riga.etichetta} className="flex items-baseline justify-between gap-3">
                <dt className="text-[0.8125rem] text-neutral">{riga.etichetta}</dt>
                <dd className="text-[0.875rem] font-bold tabular-nums">{riga.valore}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 border-t border-line pt-3">
            <span className="stato stato-ok">
              <Check className="h-3 w-3" />
              {documento.stato}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Ottieni() {
  return (
    <section id="ottieni" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <AnteprimaCertificato />
          </Reveal>

          <Reveal ritardo={120}>
            <Eyebrow>{ottieni.eyebrow}</Eyebrow>
            <h2 className="h2 mt-5">{ottieni.titolo}</h2>
            <p className="lede mt-6">{ottieni.testo}</p>
            <a href={MAILTO} className="btn btn-green mt-9">
              {ottieni.cta}
              <ArrowRight />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
