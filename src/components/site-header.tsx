"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Logo } from "./logo";
import { Contenitore, Freccia } from "./ui";

export function SiteHeader() {
  const [aperto, setAperto] = useState(false);
  const [scorso, setScorso] = useState(false);

  useEffect(() => {
    const aggiorna = () => setScorso(window.scrollY > 8);
    aggiorna();
    window.addEventListener("scroll", aggiorna, { passive: true });
    return () => window.removeEventListener("scroll", aggiorna);
  }, []);

  useEffect(() => {
    if (!aperto) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAperto(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [aperto]);

  return (
    <header
      className={`sticky top-0 z-50 bg-chiaro transition-shadow duration-300 ${
        scorso || aperto ? "border-b border-bordo" : "border-b border-transparent"
      }`}
    >
      <Contenitore>
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#" aria-label={`${site.nome}, torna all'inizio`} className="rounded-[10px]">
            <Logo altezza={28} priority />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {site.nav.map((voce) => (
              <a
                key={voce.href}
                href={voce.href}
                className="rounded-pill px-3.5 py-2 text-[0.9375rem] font-bold text-secondario transition-colors hover:bg-verde-velo hover:text-verde-testo"
              >
                {voce.etichetta}
              </a>
            ))}
          </nav>

          <a href="#contatti" className="bottone bottone-verde hidden lg:inline-flex">
            {site.azioni.contatta}
            <Freccia />
          </a>

          <button
            type="button"
            onClick={() => setAperto((v) => !v)}
            className="grid h-12 w-12 place-items-center rounded-[14px] border-2 border-bordo transition-colors hover:border-verde lg:hidden"
            aria-expanded={aperto}
            aria-controls="menu-mobile"
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
          >
            <span aria-hidden="true" className="flex w-[1.125rem] flex-col gap-[0.3125rem]">
              <span
                className={`h-[2px] w-full rounded-full bg-scuro transition-transform duration-300 ${
                  aperto ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-scuro transition-transform duration-300 ${
                  aperto ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Contenitore>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-t bg-chiaro transition-[max-height,opacity] duration-300 lg:hidden ${
          aperto ? "max-h-[28rem] border-bordo opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <Contenitore>
          <nav className="flex flex-col py-2" aria-label="Navigazione principale">
            {site.nav.map((voce) => (
              <a
                key={voce.href}
                href={voce.href}
                onClick={() => setAperto(false)}
                tabIndex={aperto ? undefined : -1}
                className="flex items-center justify-between border-b border-bordo py-4 text-[1.0625rem] font-bold"
              >
                {voce.etichetta}
                <Freccia className="h-4 w-4 text-verde-testo" />
              </a>
            ))}
          </nav>
          <a
            href="#contatti"
            onClick={() => setAperto(false)}
            tabIndex={aperto ? undefined : -1}
            className="bottone bottone-verde mb-6 mt-5 w-full"
          >
            {site.azioni.contatta}
            <Freccia />
          </a>
        </Contenitore>
      </div>
    </header>
  );
}
