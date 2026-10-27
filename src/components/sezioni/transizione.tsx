import { Entra } from "../entra";
import { Simbolo } from "../logo";

/**
 * Transizione fra la hero e la sezione successiva.
 *
 * Soltanto il simbolo del marchio: nessuna fascia, nessuna scritta, nessun
 * filetto. A farlo emergere è una luce diffusa che appartiene al fondale della
 * pagina, quindi il marchio sembra affiorare dall'ambiente invece di essere
 * appoggiato sopra. Il logo non viene deformato né ricolorato.
 *
 * Se l'animazione non parte, il simbolo resta semplicemente visibile al suo
 * posto: la transizione regge lo stesso.
 */
export function Transizione() {
  return (
    <Entra className="relative flex items-center justify-center py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="respiro pointer-events-none absolute left-1/2 top-1/2 h-44 w-[94%] max-w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_38%,transparent),transparent_70%)]"
      />
      <Simbolo lato={42} className="transizione-logo relative" />
    </Entra>
  );
}
