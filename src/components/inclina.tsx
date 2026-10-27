"use client";

import { useCallback, useRef, type ReactNode } from "react";

/**
 * Dà al pannello una leggera inclinazione tridimensionale che segue il mouse.
 *
 * L'effetto è volutamente contenuto (pochi gradi): deve far percepire la
 * dashboard come un oggetto sospeso, non farla ruotare. Scelte tecniche:
 * - agisce solo su `transform`, quindi non provoca ricalcoli di layout;
 * - si attiva soltanto dove esiste un vero passaggio del mouse, così sui
 *   dispositivi touch il pannello resta fermo e perfettamente leggibile;
 * - rispetta `prefers-reduced-motion`;
 * - al passaggio successivo torna a zero con una transizione morbida.
 */
export function Inclina({
  children,
  gradi = 4,
  className = "",
}: {
  children: ReactNode;
  gradi?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const attivo = useRef(false);

  const abilitato = useCallback(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const muovi = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const nodo = ref.current;
      if (!nodo || !attivo.current) return;
      const r = nodo.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      nodo.style.transform =
        `perspective(1400px) rotateX(${(-y * gradi).toFixed(2)}deg) ` +
        `rotateY(${(x * gradi).toFixed(2)}deg) translateZ(0)`;
    },
    [gradi],
  );

  const entra = useCallback(() => {
    attivo.current = abilitato();
    const nodo = ref.current;
    if (nodo && attivo.current) nodo.style.transition = "transform 120ms linear";
  }, [abilitato]);

  const esci = useCallback(() => {
    attivo.current = false;
    const nodo = ref.current;
    if (!nodo) return;
    nodo.style.transition = "transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1)";
    nodo.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={entra}
      onMouseMove={muovi}
      onMouseLeave={esci}
      className={`will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
