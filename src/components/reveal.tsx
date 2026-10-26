"use client";

import { useCallback, useState, type ElementType, type ReactNode } from "react";

/**
 * Fa comparire il contenuto quando entra nel viewport.
 *
 * Usa IntersectionObserver, senza librerie di animazione: la transizione è
 * tutta in CSS (.reveal / .reveal-stagger in globals.css) e si disattiva da
 * sola quando il dispositivo chiede movimento ridotto. Chi non ha JavaScript
 * vede comunque i contenuti, grazie alla regola in <noscript> nel layout.
 *
 * L'osservatore viene collegato nella ref callback, non in un effetto: così
 * parte nel momento esatto in cui il nodo esiste e si disconnette da solo.
 *
 * `cascata` anima i figli diretti uno dopo l'altro invece del contenitore.
 */
export function Reveal({
  children,
  as: Tag = "div",
  cascata = false,
  ritardo = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  cascata?: boolean;
  ritardo?: number;
  className?: string;
}) {
  const [visibile, setVisibile] = useState(false);

  const collega = useCallback((nodo: HTMLElement | null) => {
    if (!nodo) return;

    // Se l'API non è disponibile mostriamo subito, senza animazione.
    if (typeof IntersectionObserver === "undefined") {
      setVisibile(true);
      return;
    }

    const osservatore = new IntersectionObserver(
      (voci) => {
        if (voci.some((voce) => voce.isIntersecting)) {
          setVisibile(true);
          osservatore.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    osservatore.observe(nodo);
    return () => osservatore.disconnect();
  }, []);

  return (
    <Tag
      ref={collega}
      data-visible={visibile ? "true" : undefined}
      className={`${cascata ? "reveal-stagger" : "reveal"} ${className}`}
      style={ritardo ? { "--reveal-delay": `${ritardo}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
