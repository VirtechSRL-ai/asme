import type { ReactNode } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   ICONE — set unico: stesso viewBox, stesso tratto, stessi terminali.
   Decorative salvo diversa indicazione, quindi aria-hidden.
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

export function Freccia({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-4 w-4"}>
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </Svg>
  );
}

export function Spunta({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-4 w-4"}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Svg>
  );
}

/** Distinta: l'elenco strutturato dei componenti di una unità. */
export function Distinta({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M5 5.5h14M5 12h14M5 18.5h9" />
      <circle cx="3" cy="5.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="3" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="3" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
    </Svg>
  );
}

/** Componente: un pezzo fisico della macchina. */
export function Componente({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6z" />
      <path d="M12 12v8.8M12 12 4 7.6M12 12l8-4.4" />
    </Svg>
  );
}

/** Certificato: il documento del fornitore. */
export function Certificato({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="m8.5 14 2 2 4-4" />
    </Svg>
  );
}

/** Verifica: il controllo umano finale. */
export function Verifica({ className }: IconaProps) {
  return (
    <Svg className={className}>
      <path d="M12 3.2 20 6v6c0 4.2-3.2 7.4-8 8.8-4.8-1.4-8-4.6-8-8.8V6z" />
      <path d="m9 12 2 2 4.2-4.2" />
    </Svg>
  );
}

export function Posta({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
    </Svg>
  );
}

export function Telefono({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <path d="M5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" />
    </Svg>
  );
}

export function Luogo({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function Sito({ className }: IconaProps) {
  return (
    <Svg className={className ?? "h-[1.125rem] w-[1.125rem]"}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5a13 13 0 0 1 0 17a13 13 0 0 1 0-17Z" />
    </Svg>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   LAYOUT
   ─────────────────────────────────────────────────────────────────────────── */

export function Contenitore({
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

export function Occhiello({ children }: { children: ReactNode }) {
  return <p className="occhiello">{children}</p>;
}
