import type { ReactNode } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   ICONE
   Set unico: stesso viewBox, stesso spessore di tratto, stessi terminali.
   Sono decorative salvo diversa indicazione, quindi aria-hidden.
   ─────────────────────────────────────────────────────────────────────────── */

type IconaProps = { className?: string };

function Svg({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className ?? "h-5 w-5"}
    >
      {children}
    </svg>
  );
}

export function ArrowRight({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-4 w-4"}>
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </Svg>
  );
}

export function Check({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-4 w-4"}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Svg>
  );
}

/** Risalire: un tracciato che torna al nodo di origine. */
export function Trace({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M5 19v-5a4 4 0 0 1 4-4h8" />
      <path d="m14 7 3 3-3 3" />
      <circle cx="5" cy="19" r="1.6" fill="currentColor" stroke="none" />
    </Svg>
  );
}

/** Controllare: lente su un documento. */
export function Inspect({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4V3.5" />
      <circle cx="16" cy="15" r="3.4" />
      <path d="m18.6 17.6 2.4 2.4" />
    </Svg>
  );
}

/** Preparare: fascicolo con conferma. */
export function Dossier({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M4 7a2 2 0 0 1 2-2h3.6l1.6 2H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="m9.5 13 2 2 4-4" />
    </Svg>
  );
}

/** Importare: dati che entrano nel sistema. */
export function Import({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M12 3v10m0 0-3.5-3.5M12 13l3.5-3.5" />
      <path d="M4 16v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2" />
    </Svg>
  );
}

/** Scrivere: busta per i contatti via email. */
export function Mail({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
    </Svg>
  );
}

/** Chiamare: cornetta per i contatti telefonici. */
export function Phone({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <path d="M5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" />
    </Svg>
  );
}

/** Sito web: globo per il collegamento esterno. */
export function Globe({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5a13 13 0 0 1 0 17a13 13 0 0 1 0-17Z" />
    </Svg>
  );
}

/** Dove siamo: segnaposto per la sede. */
export function Pin({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

/** Collegare: due elementi messi in relazione. */
export function Link({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.54 3.54 0 0 0-5-5l-1.5 1.5" />
      <path d="M14 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.54 3.54 0 0 0 5 5L12.5 17" />
    </Svg>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   LAYOUT
   ─────────────────────────────────────────────────────────────────────────── */

/** Contenitore a larghezza fissa, usato da tutte le sezioni. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[76rem] px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Apertura standard di sezione: etichetta, titolo, testo e azione opzionale. */
export function SectionIntro({
  eyebrow,
  titolo,
  testo,
  azione,
  allineamento = "sinistra",
}: {
  eyebrow?: string;
  titolo: string;
  testo?: string;
  azione?: ReactNode;
  allineamento?: "sinistra" | "centro";
}) {
  const centrato = allineamento === "centro";

  return (
    <div
      className={
        centrato
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      }
    >
      <div className={centrato ? "" : "max-w-2xl"}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className={`h2 ${eyebrow ? "mt-5" : ""}`}>{titolo}</h2>
        {testo ? <p className={`lede mt-5 ${centrato ? "mx-auto" : ""}`}>{testo}</p> : null}
      </div>
      {azione ? (
        <div className={centrato ? "mt-8 flex justify-center" : "shrink-0"}>{azione}</div>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  variante = "ink",
  freccia = true,
  className = "",
  children,
}: {
  href: string;
  variante?: "ink" | "accent" | "outline";
  freccia?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`btn btn-${variante} ${className}`}>
      {children}
      {freccia ? <ArrowRight /> : null}
    </a>
  );
}

export function LinkArrow({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="link-arrow">
      {children}
      <ArrowRight />
    </a>
  );
}
