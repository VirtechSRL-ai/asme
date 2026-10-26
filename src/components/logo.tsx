import Image from "next/image";

/**
 * Logo Tracciamy, dal file ufficiale in public/.
 *
 * Il file è ritagliato dall'originale, senza ridisegnarlo. Il solo simbolo,
 * senza la scritta, è usato per la favicon (src/app/icon.png).
 *
 * La scritta è nera e il simbolo sfuma fino a un verde molto scuro: il logo
 * va quindi su superfici bianche. Le sezioni scure e verdi del sito non lo
 * contengono apposta. Per usarlo anche lì serve la versione negativa
 * ufficiale, che non è tra i file forniti.
 */

const PROPORZIONE = 2158 / 527; // dimensioni native del file

export function Logo({
  className = "",
  altezza = 34,
  priority = false,
}: {
  className?: string;
  altezza?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/tracciamy-logo.png"
      alt="Tracciamy"
      width={Math.round(altezza * PROPORZIONE)}
      height={altezza}
      priority={priority}
      className={className}
      style={{ height: altezza, width: "auto" }}
    />
  );
}
