import { site } from "@/content/site";
import { Entra } from "../entra";
import { Contenitore, Freccia, Occhiello } from "../ui";

const { pubblico, azioni } = site;

/**
 * Sezione di posizionamento: l'unico momento della pagina senza interfaccia.
 *
 * Qui conta la frase, quindi la composizione è tipografica: il titolo prende
 * la misura grande e occupa più di metà della lastra, il testo e l'azione
 * stanno a destra, più in basso, su una colonna stretta. La luce arriva
 * dall'angolo opposto rispetto alla lastra di "Mantieni", così le due sezioni
 * profonde della pagina non si somigliano.
 */
export function Pubblico() {
  return (
    <section className="relative py-12 sm:py-16">
      <Contenitore>
        <Entra>
          <div className="lastra-scura lastra-rovescia px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
              <div>
                <Occhiello>{pubblico.etichetta}</Occhiello>
                <h2 className="titolo-display mt-6 max-w-[18ch]">{pubblico.titolo}</h2>
              </div>
              <div className="lg:pb-2">
                <p className="descrizione">{pubblico.testo}</p>
                <a href="#contatti" className="bottone bottone-verde mt-8">
                  {azioni.contatta}
                  <Freccia />
                </a>
              </div>
            </div>
          </div>
        </Entra>
      </Contenitore>
    </section>
  );
}
