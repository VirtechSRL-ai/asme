"use client";

import { useCallback, useState, type ElementType, type ReactNode } from "react";

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
 */
export function Entra({
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
