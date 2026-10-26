/**
 * Logo provvisorio.
 *
 * Il segno è una "V" disegnata come un tracciato che risale e termina in un
 * nodo staccato: richiama il risalire da un'unità prodotta alla sua origine,
 * che è il tema del progetto. Il tratto usa currentColor, quindi il logo si
 * adatta da solo ai fondi chiari e a quelli scuri; il nodo resta sull'accento.
 *
 * Per sostituirlo con il logo definitivo basta cambiare questo file: header,
 * footer e favicon (src/app/icon.svg) sono gli unici punti che lo usano.
 */

function Glifo({ coloreNodo = "var(--accent)" }: { coloreNodo?: string }) {
  return (
    <>
      <path
        d="M13 13.5 L20 26 L24.9 17.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26.6" cy="14" r="2.2" fill={coloreNodo} />
    </>
  );
}

/** Versione compatta: il solo segno, dentro il suo contenitore. */
export function LogoMark({
  className = "h-9 w-9",
  variante = "ink",
}: {
  className?: string;
  variante?: "ink" | "paper";
}) {
  const sfondo = variante === "ink" ? "var(--ink)" : "var(--paper)";
  const tratto = variante === "ink" ? "var(--paper)" : "var(--ink)";

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect width="40" height="40" rx="11" fill={sfondo} />
      <g style={{ color: tratto }}>
        <Glifo />
      </g>
    </svg>
  );
}

/** Versione completa: segno più marchio tipografico. */
export function Logo({
  nome,
  className = "",
  variante = "ink",
}: {
  nome: string;
  className?: string;
  variante?: "ink" | "paper";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" variante={variante} />
      <span className="text-[1.1875rem] font-extrabold tracking-[-0.035em]">{nome}</span>
    </span>
  );
}
