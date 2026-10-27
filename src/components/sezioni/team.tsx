import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Occhiello } from "../ui";

const { team } = site;

/**
 * Il percorso di adozione in tre tappe.
 *
 * Le tappe sono legate da una linea continua che attraversa i numeri — su
 * desktop orizzontale, su mobile verticale — così si leggono come un unico
 * percorso e non come tre card indipendenti. I numeri sono grandi e
 * tipografici: danno ordine alla sequenza senza bisogno di una timeline
 * tecnica.
 */
export function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <Contenitore>
        <Entra className="max-w-2xl">
          <Occhiello>{team.etichetta}</Occhiello>
          <h2 className="titolo-sezione mt-5">{team.titolo}</h2>
          <p className="descrizione mt-6">{team.testo}</p>
        </Entra>

        <Entra as="ol" cascata className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {team.fasi.map((fase, i) => {
            const ultima = i === team.fasi.length - 1;
            return (
              <li key={fase.numero} className="relative">
                {/* Il numero e il raccordo verso la tappa successiva */}
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-verde bg-verde-velo text-[1.125rem] font-extrabold tabular-nums text-verde-testo"
                  >
                    {fase.numero}
                  </span>
                  {!ultima ? (
                    <span
                      aria-hidden="true"
                      className="hidden h-[2px] flex-1 rounded-full bg-[linear-gradient(to_right,var(--verde),color-mix(in_srgb,var(--verde)_18%,transparent))] lg:block"
                    />
                  ) : null}
                </div>

                <h3 className="titolo-minore mt-6">{fase.nome}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-secondario">{fase.testo}</p>

                {/* Su mobile il percorso scende in verticale */}
                {!ultima ? (
                  <span
                    aria-hidden="true"
                    className="mt-8 block h-8 w-[2px] rounded-full bg-[linear-gradient(to_bottom,var(--verde),color-mix(in_srgb,var(--verde)_18%,transparent))] lg:hidden"
                  />
                ) : null}
              </li>
            );
          })}
        </Entra>

        <Entra ritardo={120} className="mt-14">
          <a href="#contatti" className="bottone bottone-verde">
            {team.cta}
            <Freccia />
          </a>
        </Entra>
      </Contenitore>
    </section>
  );
}
