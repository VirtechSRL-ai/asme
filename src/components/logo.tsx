import Image from "next/image";

/**
 * Logo Tracciamy, dagli asset ufficiali della brand identity.
 *
 * I file sono estratti dal documento di marca senza ridisegnare nulla:
 * - `tracciamy-logo.png`        simbolo verde e scritta scura, per fondi chiari
 * - `tracciamy-logo-chiaro.png` stessa forma, scritta chiara, per fondi scuri
 * - `tracciamy-simbolo.png`     solo il simbolo, dal canale alfa originale
 *
 * La variante chiara cambia soltanto il colore della scritta, come la tavola
 * su fondo scuro del documento di marca: il simbolo resta nel suo verde.
 */

const LOCKUP = 3097 / 606; // proporzioni native
const SIMBOLO = 817 / 704;

export function Logo({
  altezza = 30,
  variante = "scuro",
  priority = false,
  className = "",
}: {
  altezza?: number;
  /** "scuro" = scritta scura su fondo chiaro; "chiaro" = il contrario */
  variante?: "scuro" | "chiaro";
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={variante === "chiaro" ? "/tracciamy-logo-chiaro.png" : "/tracciamy-logo.png"}
      alt="Tracciamy"
      width={Math.round(altezza * LOCKUP)}
      height={altezza}
      priority={priority}
      className={className}
      style={{ height: altezza, width: "auto" }}
    />
  );
}

export function Simbolo({
  lato = 48,
  priority = false,
  className = "",
}: {
  lato?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/tracciamy-simbolo.png"
      alt=""
      aria-hidden="true"
      width={Math.round(lato * SIMBOLO)}
      height={lato}
      priority={priority}
      className={className}
      style={{ height: lato, width: "auto" }}
    />
  );
}
