import { site } from "@/content/site";
import { Stato } from "../mock";
import { Reveal } from "../reveal";
import { ArrowRight, Check, Container, Eyebrow, Import, Link } from "../ui";

const { metodo } = site;
const icone = { import: Import, link: Link, check: Check };

type Mock = (typeof metodo.passaggi)[number]["mock"];

/**
 * Una grafica diversa per ciascun passaggio, perché ciascuno descrive
 * un'operazione diversa: una tabella che entra, due elementi che si agganciano,
 * un controllo che segnala cosa manca.
 */
function MockPassaggio({ mock }: { mock: Mock }) {
  if (mock.tipo === "tabella") {
    return (
      <div className="overflow-hidden rounded-[14px] border border-line">
        <div className="grid grid-cols-3 gap-2 border-b border-line bg-green-soft/60 px-3 py-2">
          {mock.colonne.map((colonna) => (
            <span
              key={colonna}
              className="min-w-0 truncate text-[0.6875rem] font-extrabold uppercase tracking-[0.1em] text-neutral"
            >
              {colonna}
            </span>
          ))}
        </div>
        {mock.righe.map((riga, i) => (
          <div
            key={i}
            className="grid grid-cols-3 gap-2 border-b border-line px-3 py-2 last:border-b-0"
          >
            {riga.map((cella, j) => (
              <span key={j} className="min-w-0 truncate text-[0.8125rem] font-semibold tabular-nums">
                {cella}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (mock.tipo === "relazione") {
    return (
      <div className="rounded-[14px] border border-line p-4">
        <div className="rounded-[10px] bg-green-soft/60 px-3 py-2.5">
          <p className="text-[0.875rem] font-bold">{mock.da.etichetta}</p>
          <p className="text-[0.75rem] text-neutral">{mock.da.dettaglio}</p>
        </div>
        {/* Il collegamento si disegna dall'alto quando la sezione entra in vista */}
        <div className="flex justify-center py-1.5">
          <span aria-hidden="true" className="collega block h-7 w-[3px] rounded-full bg-green" />
        </div>
        <div className="rounded-[10px] border border-line px-3 py-2.5">
          <p className="text-[0.875rem] font-bold">{mock.a.etichetta}</p>
          <p className="text-[0.75rem] text-neutral">{mock.a.dettaglio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[14px] border border-line">
      {mock.voci.map((voce) => (
        <div
          key={voce.nome}
          className="flex items-center justify-between gap-2 border-b border-line px-3 py-2.5 last:border-b-0"
        >
          <span className="min-w-0 truncate text-[0.8125rem] font-semibold">{voce.nome}</span>
          <Stato stato={voce.stato} />
        </div>
      ))}
    </div>
  );
}

/** 03 — Come funziona: tre passaggi, ognuno con la propria grafica. */
export function Method() {
  return (
    <section id="metodo" className="wash-soft relative py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{metodo.eyebrow}</Eyebrow>
          </div>
          <h2 className="h2 mx-auto mt-5 max-w-[16ch]">
            {metodo.titoloPrima} <span className="spicca">{metodo.titoloSpicca}</span>
          </h2>
        </Reveal>

        <Reveal as="ol" cascata className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {metodo.passaggi.map((passaggio) => {
            const Icona = icone[passaggio.icona];
            return (
              <li key={passaggio.numero} className="card card-hover group flex flex-col p-7">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 place-items-center rounded-[16px] bg-green-soft text-green-ink transition-colors duration-300 group-hover:bg-green group-hover:text-dark"
                  >
                    <Icona className="h-6 w-6" />
                  </span>
                  <span className="text-[2rem] font-extrabold leading-none tracking-[-0.05em] text-neutral-soft">
                    {passaggio.numero}
                  </span>
                </div>

                <h3 className="h3 mt-6">{passaggio.titolo}</h3>
                <p className="mt-2 text-[1rem] leading-relaxed text-neutral">{passaggio.testo}</p>

                <div className="mt-6">
                  <MockPassaggio mock={passaggio.mock} />
                </div>
              </li>
            );
          })}
        </Reveal>

        <Reveal ritardo={80} className="mt-10 flex flex-col items-center gap-3">
          <p className="mock-nota">{site.notaEsempio}</p>
          <a href={site.ctaPrincipale.href} className="btn btn-dark">
            {site.ctaPrincipale.etichetta}
            <ArrowRight />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
