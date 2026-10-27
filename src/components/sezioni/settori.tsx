import { site } from "@/content/site";
import { Entra } from "../entra";
import { glifi } from "../glifi";
import { Contenitore } from "../ui";

const { settori } = site;

/**
 * I sei ambiti industriali in una griglia editoriale.
 *
 * Su desktop la griglia è a sei colonne e le card hanno larghezze diverse
 * (4+2, 2+2+2, 6): riempie ogni riga senza buchi ed evita il blocco di sei
 * rettangoli identici. L'ultima card è a tutta larghezza e dispone glifo e
 * testo in orizzontale, così la variazione è compositiva e non solo di scala.
 *
 * Le differenze cromatiche vengono solo dalla palette: intensità diverse
 * dello stesso verde, nessun colore nuovo.
 */

// Colonne occupate da ciascuna card sulla griglia a sei colonne
const AMPIEZZE = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

export function Settori() {
  return (
    <section id="settori" className="relative py-20 sm:py-28">
      <Contenitore>
        <Entra className="max-w-2xl">
          <h2 className="titolo-sezione">
            Progettato per il <span className="spicca">tuo settore</span>
          </h2>
        </Entra>

        <Entra
          as="ul"
          cascata
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {settori.voci.map((voce, i) => {
            const Glifo = glifi[voce.glifo];
            const ampia = i === 0;
            const distesa = i === settori.voci.length - 1;

            return (
              <li
                key={voce.nome}
                className={`group pannello pannello-vivo p-6 sm:p-7 ${AMPIEZZE[i]} ${
                  distesa ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={
                    distesa
                      ? "flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8"
                      : "flex flex-col"
                  }
                >
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-verde-velo text-verde-testo transition-colors duration-300 group-hover:bg-verde group-hover:text-scuro"
                  >
                    <Glifo />
                  </span>

                  <div className={distesa ? "sm:flex sm:flex-1 sm:items-baseline sm:gap-10" : ""}>
                    <h3
                      className={`font-extrabold tracking-[-0.025em] ${distesa ? "sm:w-72 sm:shrink-0" : "mt-6"} ${
                        ampia || distesa ? "text-[1.375rem]" : "text-[1.125rem]"
                      }`}
                    >
                      {voce.nome}
                    </h3>
                    <p
                      className={`text-[0.9375rem] leading-relaxed text-secondario ${
                        distesa ? "mt-2 sm:mt-0" : "mt-2.5"
                      } ${ampia ? "max-w-md" : ""}`}
                    >
                      {voce.testo}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </Entra>
      </Contenitore>
    </section>
  );
}
