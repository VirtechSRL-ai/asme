import { site } from "@/content/site";
import { Entra } from "../entra";
import { glifi } from "../glifi";
import { Contenitore } from "../ui";

const { settori } = site;

/**
 * I sei ambiti industriali, in una griglia editoriale a dodici colonne.
 *
 * Le card non hanno la stessa misura: 5+4+3 sulla prima riga e 4+4+4 sulla
 * seconda. La prima è la card principale e dispone glifo e testo su assi
 * diversi dalle altre, così la variazione è compositiva e non solo di scala.
 * Niente fotografie: i glifi sono disegnati sulle forme ricorrenti di ciascun
 * ambito, e l'unica differenza cromatica viene dalle intensità dello stesso
 * verde.
 */

// Colonne occupate da ciascuna card sulla griglia a dodici
const AMPIEZZE = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export function Settori() {
  return (
    <section id="settori" className="relative py-20 sm:py-28">
      <Contenitore>
        <Entra className="max-w-3xl">
          <h2 className="titolo-sezione">
            Progettato per il <span className="spicca">tuo settore</span>
          </h2>
        </Entra>

        <Entra
          as="ul"
          cascata
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12"
        >
          {settori.voci.map((voce, i) => {
            const Glifo = glifi[voce.glifo];
            const principale = i === 0;

            return (
              <li
                key={voce.nome}
                className={`group pannello pannello-vivo carta-settore flex flex-col p-6 sm:p-7 ${AMPIEZZE[i]}`}
              >
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className={`piastra shrink-0 ${
                      principale ? "h-[4.5rem] w-[4.5rem] [&_svg]:h-9 [&_svg]:w-9" : "h-14 w-14"
                    }`}
                  >
                    <Glifo />
                  </span>
                  <span aria-hidden="true" className="indice-carta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Nella card principale il testo si appoggia al fondo: la
                    card è più alta delle altre e non deve restare vuota. */}
                <div className={`relative ${principale ? "mt-auto pt-10" : "mt-6"}`}>
                  <h3
                    className={`font-extrabold tracking-[-0.028em] ${
                      principale ? "text-[1.625rem] leading-[1.12]" : "text-[1.0625rem] leading-snug"
                    }`}
                  >
                    {voce.nome}
                  </h3>
                  <p
                    className={`mt-2.5 leading-relaxed text-secondario ${
                      principale ? "max-w-md text-[1rem]" : "text-[0.9375rem]"
                    }`}
                  >
                    {voce.testo}
                  </p>
                </div>
              </li>
            );
          })}
        </Entra>
      </Contenitore>
    </section>
  );
}
