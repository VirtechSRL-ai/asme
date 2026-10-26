import type { ReactNode } from "react";
import { Check } from "./ui";

/**
 * Primitive dei pannelli illustrativi.
 *
 * Servono a far capire a colpo d'occhio di cosa parla una sezione. Non sono
 * schermate reali di Tracciamy: i codici sono fittizi e le etichette di stato
 * sono qualitative, mai numeri o percentuali inventati. Lo stile è unitario
 * (stessa cornice, stessa intestazione, stesse righe) così le varie grafiche
 * appartengono visibilmente allo stesso progetto.
 */

export function Pannello({
  titolo,
  azione,
  className = "",
  children,
}: {
  titolo: string;
  azione?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mock ${className}`}>
      <div className="mock-testa">
        <span>{titolo}</span>
        {azione}
      </div>
      {children}
    </div>
  );
}

export function Stato({ stato }: { stato: "ok" | "attesa" }) {
  return stato === "ok" ? (
    <span className="stato stato-ok">
      <Check className="h-3 w-3" />
      Collegato
    </span>
  ) : (
    <span className="stato stato-attesa">Da verificare</span>
  );
}

export function Riga({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mock-riga ${className}`}>{children}</div>;
}

/** Codice di esempio: stesso trattamento ovunque, per riconoscerlo subito. */
export function Codice({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[6px] bg-green-soft px-1.5 py-0.5 text-[0.8125rem] font-bold tabular-nums text-green-ink">
      {children}
    </span>
  );
}

export function CodiceScuro({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[6px] bg-[color-mix(in_srgb,var(--green)_18%,transparent)] px-1.5 py-0.5 text-[0.8125rem] font-bold tabular-nums text-green">
      {children}
    </span>
  );
}

/** Didascalia che dichiara la natura illustrativa del pannello. */
export function NotaEsempio({ testo, className = "" }: { testo: string; className?: string }) {
  return <p className={`mock-nota mt-4 ${className}`}>{testo}</p>;
}
