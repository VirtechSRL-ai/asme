"use client";

import { useCallback, useEffect, useState, type ElementType, type ReactNode } from "react";

/*
 * Vero dopo che la prima pagina caricata ha finito di idratarsi. Vive nel
 * modulo, quindi sopravvive ai cambi di pagina lato client: chi monta dopo
 * una navigazione lo trova acceso, chi monta al primo caricamento no.
 */
let avviato = false;

/**
 * Fa comparire il contenuto quando entra nel viewport.
 *
 * Usa IntersectionObserver, senza librerie: la transizione è tutta in CSS
 * (.entra / .entra-cascata in globals.css) e si disattiva da sola quando il
 * dispositivo chiede movimento ridotto. Chi non ha JavaScript vede comunque i
 * contenuti, grazie alla regola in <noscript> nel layout.
 *
 * L'osservatore si collega nella ref callback, non in un effetto: parte nel
 * momento esatto in cui il nodo esiste e si disconnette da solo.
 *
 * `continuaDaNavigazione`: per gli elementi che arrivano da un'altra pagina
 * con una transizione condivisa (i sigilli). Dopo una navigazione sono già
 * visibili, così la transizione li porta in posizione interi; all'apertura
 * diretta della pagina fanno il loro ingresso come tutto il resto.
 */
export function Entra({
  children,
  as: Tag = "div",
  cascata = false,
  ritardo = 0,
  className = "",
  continuaDaNavigazione = false,
}: {
  children: ReactNode;
  as?: ElementType;
  cascata?: boolean;
  ritardo?: number;
  className?: string;
  continuaDaNavigazione?: boolean;
}) {
  const [visibile, setVisibile] = useState(() => continuaDaNavigazione && avviato);

  useEffect(() => {
    avviato = true;
  }, []);

  const collega = useCallback((nodo: HTMLElement | null) => {
    if (!nodo) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisibile(true);
      return;
    }

    const osservatore = new IntersectionObserver(
      (voci) => {
        if (voci.some((v) => v.isIntersecting)) {
          setVisibile(true);
          osservatore.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    osservatore.observe(nodo);
    return () => osservatore.disconnect();
  }, []);

  return (
    <Tag
      ref={collega}
      data-visibile={visibile ? "true" : undefined}
      className={`${cascata ? "entra-cascata" : "entra"} ${className}`}
      style={ritardo ? { "--ritardo": `${ritardo}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
