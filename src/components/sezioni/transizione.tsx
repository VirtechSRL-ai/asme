import { Entra } from "../entra";
import { Simbolo } from "../logo";

/**
 * Transizione fra la hero e la sezione successiva.
 *
 * Non è una fascia né un contenitore: è il solo simbolo del marchio, posato
 * sull'ambiente cromatico della pagina. Una luce diffusa alle sue spalle lo fa
 * emergere dal fondale invece di farlo sembrare appoggiato sopra, e due filetti
 * che sfumano nel nulla accompagnano lo sguardo verso il basso.
 *
 * Il logo non viene deformato né ricolorato. Se l'animazione non parte, resta
 * semplicemente visibile al suo posto: la transizione regge lo stesso.
 */
export function Transizione() {
  return (
    <Entra className="relative flex items-center justify-center py-14 sm:py-20">
      {/* Luce diffusa dietro il marchio */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-full max-w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--verde)_26%,transparent),transparent_70%)]"
      />

      <span className="relative flex w-full max-w-3xl items-center gap-6 px-5 sm:gap-8">
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-[linear-gradient(to_right,transparent,color-mix(in_srgb,var(--verde)_45%,transparent))]"
        />
        <Simbolo lato={38} className="transizione-logo shrink-0" />
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-[linear-gradient(to_left,transparent,color-mix(in_srgb,var(--verde)_45%,transparent))]"
        />
      </span>
    </Entra>
  );
}
