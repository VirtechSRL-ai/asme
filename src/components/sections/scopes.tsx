import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { Container, Eyebrow } from "../ui";

const { ambiti } = site;

/** 05 — ASME e PED: due colonne, distinzione netta fra ciò che esiste e ciò
 *  che va configurato. Niente bollini che sembrino certificazioni rilasciate. */
export function Scopes() {
  return (
    <section id="ambiti" className="py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{ambiti.eyebrow}</Eyebrow>
          </div>
          <h2 className="h2 mx-auto mt-5 max-w-[18ch]">{ambiti.titolo}</h2>
        </Reveal>

        <Reveal as="ul" cascata className="mt-14 grid gap-5 lg:grid-cols-2">
          {ambiti.colonne.map((colonna) => (
            <li key={colonna.sigla} className="card card-hover flex flex-col p-8 sm:p-10">
              <span
                aria-hidden="true"
                className="traccia block h-[3px] w-16 rounded-full bg-green"
              />
              <span className="mt-7 text-[2.75rem] font-extrabold leading-none tracking-[-0.05em]">
                {colonna.sigla}
              </span>
              <span className="chip mt-5 self-start">{colonna.stato}</span>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-neutral">{colonna.testo}</p>
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
