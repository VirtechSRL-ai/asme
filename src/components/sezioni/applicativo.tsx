import { site } from "@/content/site";
import { Entra } from "../entra";
import { Schermata } from "../schermata";
import { Freccia } from "../ui";

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
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <Entra className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="occhiello">{applicativo.etichetta}</p>
            <h2 className="titolo-sezione mt-5">
              <span className="spicca">{applicativo.titoloSpicca}</span>
              {applicativo.titoloDopo}
            </h2>
          </div>

          <div className="lg:pb-1.5">
            <p className="descrizione max-w-xl">
              {applicativo.testoRiga1} {applicativo.testoRiga2}
            </p>
            <a href="#contatti" className="bottone bottone-verde mt-7">
              {azioni.contatta}
              <Freccia />
            </a>
          </div>
        </Entra>

        <Entra ritardo={160} className="relative mt-14">
          <div className="scena p-3 sm:p-5 lg:p-7">
            <Schermata />
          </div>
          <p className="nota-dimostrativa mt-5 text-center">{notaDemo}</p>
        </Entra>
      </div>
    </section>
  );
}
