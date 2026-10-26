import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { Check, Container, Eyebrow } from "../ui";

const { ambiti } = site;

/**
 * 05 — ASME e PED.
 * La grafica è la differenza fra i due percorsi: a sinistra passaggi già
 * compiuti, a destra gli stessi passaggi ancora da definire. Si capisce a
 * colpo d'occhio cosa esiste e cosa va costruito, senza leggere il testo.
 */
function Passi({
  passi,
}: {
  passi: readonly { readonly nome: string; readonly fatto: boolean }[];
}) {
  return (
    <ol className="mt-7 flex flex-col">
      {passi.map((passo, i) => (
        <li key={passo.nome} className="flex gap-4">
          <span className="flex flex-col items-center">
            <span
              aria-hidden="true"
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 ${
                passo.fatto
                  ? "border-green-ink bg-green-ink text-white"
                  : "border-dashed border-line text-neutral"
              }`}
            >
              {passo.fatto ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <span className="text-[0.6875rem] font-extrabold">{i + 1}</span>
              )}
            </span>
            {i < passi.length - 1 ? (
              <span
                aria-hidden="true"
                className={`w-[2px] flex-1 ${passo.fatto ? "bg-green-ink/35" : "bg-line"}`}
              />
            ) : null}
          </span>
          <span
            className={`pb-5 text-[0.9375rem] font-semibold ${
              passo.fatto ? "" : "text-neutral"
            }`}
          >
            {passo.nome}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Scopes() {
  return (
    <section id="ambiti" className="relative py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{ambiti.eyebrow}</Eyebrow>
          </div>
          <h2 className="h2 mx-auto mt-5 max-w-[18ch]">{ambiti.titolo}</h2>
        </Reveal>

        <Reveal as="ul" cascata className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {ambiti.colonne.map((colonna, i) => (
            <li
              key={colonna.sigla}
              className={`card card-hover flex flex-col p-8 sm:p-10 ${
                i === 0 ? "bg-green-soft/50" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="traccia block h-[3px] w-16 rounded-full bg-green"
              />
              <span className="mt-7 text-[2.75rem] font-extrabold leading-none tracking-[-0.05em]">
                {colonna.sigla}
              </span>
              <span className="chip mt-5 self-start bg-white">{colonna.stato}</span>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-neutral">{colonna.testo}</p>
              <Passi passi={colonna.passi} />
            </li>
          ))}
        </Reveal>

        <Reveal ritardo={80}>
          <p className="mx-auto mt-10 max-w-2xl border-l-[3px] border-green pl-4 text-[0.9375rem] leading-relaxed text-neutral">
            {ambiti.nota}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
