import { site } from "@/content/site";
import { Entra } from "../entra";
import { Schermata } from "../schermata";
import { Contenitore, Freccia } from "../ui";

const { applicativo, azioni, notaDemo } = site;

/**
 * Il momento in cui il prodotto si mostra.
 *
 * È la sezione più larga della pagina e l'unica in cui l'interfaccia occupa
 * tutta la misura: il titolo e il testo stanno su una riga d'apertura, poi la
 * schermata prende il campo. A farla emergere sono il piano tinto che le sta
 * sotto, le ombre stratificate e la luce dell'ambiente, non un fondo scuro:
 * qui non c'è nessuna dark mode.
 */
export function Applicativo() {
  return (
    <section id="applicativo" className="alone-tenue relative py-20 sm:py-28">
      {/* Stessa misura delle altre sezioni: i bordi del contenuto cadono dove
          cadono altrove nella pagina, ed è la schermata, più stretta, a
          rientrare rispetto a loro. */}
      <Contenitore>
        {/* Blocco di testo centrato sul proprio asse: occhiello, titolo,
            sottotitolo e azione sulla stessa colonna stretta, come nella
            sezione di prodotto della reference. */}
        <Entra className="mx-auto flex max-w-[44rem] flex-col items-center text-center">
          <p className="occhiello">{applicativo.etichetta}</p>
          <h2 className="titolo-sezione mt-5">
            <span className="spicca">{applicativo.titoloSpicca}</span>
            {applicativo.titoloDopo}
          </h2>
          <p className="descrizione mt-6">
            {applicativo.testoRiga1} {applicativo.testoRiga2}
          </p>
          <a href="#contatti" className="bottone bottone-verde mt-8">
            {azioni.contatta}
            <Freccia />
          </a>
        </Entra>

        {/* La schermata sta sotto e più stretta del testo che la introduce:
            abbastanza grande da far leggere la struttura, non tanto da
            sovrastare la sezione. */}
        <Entra ritardo={160} className="relative mx-auto mt-12 max-w-[68rem]">
          <div className="scena p-3 sm:p-5 lg:p-7">
            <Schermata />
          </div>
          <p className="nota-dimostrativa mt-5 text-center">{notaDemo}</p>
        </Entra>
      </Contenitore>
    </section>
  );
}
