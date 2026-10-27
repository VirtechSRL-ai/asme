import { site } from "@/content/site";
import { Simbolo } from "../logo";

const { fascia } = site;

/**
 * Fascia di transizione fra la hero e la sezione successiva.
 *
 * Non è un separatore applicato sopra due fondi che si scontrano: il gradiente
 * della fascia parte dal verde tenue in cui finisce la hero e si spegne nel
 * chiaro con cui comincia "Ottieni", quindi è il passaggio stesso fra le due
 * superfici. Sopra scorre lentamente il simbolo del marchio alternato alle
 * parole del dominio, per rafforzare il riconoscimento senza fare da ticker.
 *
 * La pista contiene due copie identiche e si sposta del 50%: il ciclo riparte
 * senza salti. Si ferma al passaggio del mouse e con `prefers-reduced-motion`.
 */
export function Fascia() {
  // Due copie: la seconda serve solo a coprire il ritorno del ciclo.
  const copie = [0, 1];

  return (
    <div className="fascia py-7" aria-hidden="true">
      <div className="fascia-pista">
        {copie.map((copia) => (
          <ul key={copia} className="flex shrink-0 items-center">
            {fascia.parole.map((parola) => (
              <li key={parola} className="flex shrink-0 items-center gap-5 px-7">
                <Simbolo lato={20} className="opacity-80" />
                <span className="whitespace-nowrap text-[0.9375rem] font-bold tracking-[-0.01em] text-secondario">
                  {parola}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
