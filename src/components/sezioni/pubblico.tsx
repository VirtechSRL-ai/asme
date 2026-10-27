import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Occhiello } from "../ui";

const { pubblico, azioni } = site;

/**
 * Sezione di posizionamento: titolo a sinistra, testo e azione a destra.
 * Nessuna dashboard, come nella struttura di riferimento: qui conta la
 * chiarezza del messaggio.
 */
export function Pubblico() {
  return (
    <section className="relative py-20 sm:py-28">
      <Contenitore>
        <Entra>
          <div className="pannello grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
            <div>
              <Occhiello>{pubblico.etichetta}</Occhiello>
              <h2 className="titolo-sezione mt-5">{pubblico.titolo}</h2>
            </div>
            <div>
              <p className="descrizione">{pubblico.testo}</p>
              <a href="#contatti" className="bottone bottone-scuro mt-8">
                {azioni.contatta}
                <Freccia />
              </a>
            </div>
          </div>
        </Entra>
      </Contenitore>
    </section>
  );
}
