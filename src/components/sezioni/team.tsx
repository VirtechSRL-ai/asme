import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Occhiello } from "../ui";

const { team } = site;

/**
 * Il percorso di adozione, come percorso e non come tre card numerate.
 *
 * Su schermo largo una rotaia continua attraversa la sezione e si disegna
 * quando entra in vista; i tre nodi vi poggiano sopra e da ognuno scende la
 * sua tappa. Su mobile la rotaia diventa verticale e scorre fra una tappa e
 * l'altra. I numeri sono grandi e tipografici: danno l'ordine della sequenza
 * senza bisogno di una timeline tecnica.
 */
export function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <Contenitore>
        <Entra className="mx-auto max-w-2xl text-center">
          <Occhiello>{team.etichetta}</Occhiello>
          <h2 className="titolo-display mt-6">{team.titolo}</h2>
          <p className="descrizione mt-6">{team.testo}</p>
        </Entra>

        <Entra className="relative mt-16 sm:mt-20">
          {/* La rotaia: una sola linea per tutte e tre le tappe */}
          <span
            aria-hidden="true"
            className="linea-flusso-x absolute left-0 right-0 top-[0.4375rem] hidden h-[2px] rounded-full bg-[linear-gradient(to_right,color-mix(in_srgb,var(--verde)_25%,transparent),var(--verde)_45%,color-mix(in_srgb,var(--verde)_25%,transparent))] lg:block"
          />

          <Entra as="ol" cascata className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-7">
            {team.fasi.map((fase, i) => {
              const ultima = i === team.fasi.length - 1;
              return (
                <li key={fase.numero} className="relative lg:pt-10">
                  {/* Nodo appoggiato sulla rotaia */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 hidden h-3.5 w-3.5 rounded-full bg-verde shadow-[0_0_0_5px_color-mix(in_srgb,var(--verde)_22%,transparent)] lg:block"
                  />

                  <div className="pannello pannello-vivo h-full p-6 sm:p-7">
                    <span className="numero-tappa block">{fase.numero}</span>
                    <h3 className="titolo-minore mt-5">{fase.nome}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-secondario">
                      {fase.testo}
                    </p>
                  </div>

                  {/* Su mobile la rotaia scende fra una tappa e l'altra */}
                  {!ultima ? (
                    <span
                      aria-hidden="true"
                      className="linea-flusso mx-auto mt-8 block h-7 w-[2px] rounded-full bg-[linear-gradient(to_bottom,var(--verde),color-mix(in_srgb,var(--verde)_18%,transparent))] lg:hidden"
                    />
                  ) : null}
                </li>
              );
            })}
          </Entra>
        </Entra>

        <Entra ritardo={120} className="relative mt-14 flex justify-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-full max-w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_28%,transparent),transparent_70%)]"
          />
          <a href="#contatti" className="bottone bottone-verde relative">
            {team.cta}
            <Freccia />
          </a>
        </Entra>
      </Contenitore>
    </section>
  );
}
