import { site } from "@/content/site";
import { Reveal } from "../reveal";
import { Check, Container, Eyebrow, Import, Link } from "../ui";

const { metodo } = site;
const icone = { import: Import, link: Link, check: Check };

/** 03 — Come funziona: tre passaggi, una riga ciascuno. */
export function Method() {
  return (
    <section id="metodo" className="py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{metodo.eyebrow}</Eyebrow>
          </div>
          <h2 className="h2 mx-auto mt-5 max-w-[16ch]">
            {metodo.titoloPrima} <span className="spicca">{metodo.titoloSpicca}</span>
          </h2>
        </Reveal>

        <Reveal as="ol" cascata className="mt-14 grid gap-5 lg:grid-cols-3">
          {metodo.passaggi.map((passaggio) => {
            const Icona = icone[passaggio.icona];
            return (
              <li key={passaggio.numero} className="card card-hover group p-8">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="grid h-14 w-14 place-items-center rounded-[18px] bg-green-soft text-green-ink transition-colors duration-300 group-hover:bg-green group-hover:text-dark"
                  >
                    <Icona className="h-7 w-7" />
                  </span>
                  <span className="text-[2.25rem] font-extrabold leading-none tracking-[-0.05em] text-neutral-soft">
                    {passaggio.numero}
                  </span>
                </div>
                <h3 className="h3 mt-8">{passaggio.titolo}</h3>
                <p className="mt-2.5 text-[1.0625rem] leading-relaxed text-neutral">
                  {passaggio.testo}
                </p>
              </li>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
