import type { ReactNode } from "react";

/**
 * Segnaposto per gli screenshot reali del prodotto, ancora da ricevere.
 *
 * Il brief vieta di inventare interfacce ("mostrare interfaccia vera, non una
 * UI inventata"), quindi qui non viene disegnata nessuna finta dashboard:
 * il riquadro dichiara soltanto quale immagine va inserita.
 *
 * Quando arrivano gli screenshot anonimizzati, sostituire il contenuto con un
 * <Image> di next/image mantenendo le stesse proporzioni.
 */
export function ScreenshotFrame({
  titolo,
  testo,
  callout,
  classeAltezza = "min-h-[22rem]",
  children,
}: {
  titolo: string;
  testo: string;
  callout?: readonly string[];
  classeAltezza?: string;
  children?: ReactNode;
}) {
  return (
    <figure className="relative">
      <div
        className={`relative flex flex-col justify-end overflow-hidden rounded-panel border border-dashed border-line bg-accent-soft p-6 ${classeAltezza}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_15%,var(--glow),transparent_60%)]"
        />
        <figcaption className="relative max-w-md">
          <span className="eyebrow">{titolo}</span>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{testo}</p>
          {callout?.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {callout.map((voce) => (
                <li key={voce} className="chip bg-card">
                  {voce}
                </li>
              ))}
            </ul>
          ) : null}
        </figcaption>
        {children}
      </div>
    </figure>
  );
}
