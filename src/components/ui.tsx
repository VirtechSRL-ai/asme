import type { ReactNode } from "react";

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className ?? "h-3.5 w-3.5"}
    >
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className ?? "h-3.5 w-3.5"}
    >
      <path
        d="M3 8.5 6.25 11.75 13 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

/** Etichettina monospace sopra i titoli. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Blocco standard di apertura sezione: eyebrow + titolo + testo. */
export function SectionIntro({
  eyebrow,
  titolo,
  testo,
  azione,
  className = "",
}: {
  eyebrow?: string;
  titolo: string;
  testo?: string;
  azione?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}>
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className={`h2 ${eyebrow ? "mt-4" : ""}`}>{titolo}</h2>
        {testo ? <p className="lede mt-5">{testo}</p> : null}
      </div>
      {azione ? <div className="shrink-0">{azione}</div> : null}
    </div>
  );
}

type Variante = "ink" | "accent" | "outline";

export function ButtonLink({
  href,
  variante = "ink",
  freccia = false,
  children,
}: {
  href: string;
  variante?: Variante;
  freccia?: boolean;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`btn btn-${variante}`}>
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
