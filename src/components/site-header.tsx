"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Logo } from "./logo";
import { ArrowRight, Container } from "./ui";

export function SiteHeader() {
  const [aperto, setAperto] = useState(false);
  const [scorso, setScorso] = useState(false);

  // L'header è trasparente in cima e prende fondo e bordo appena si scorre,
  // così non si sovrappone ai contenuti restando sempre leggibile.
  useEffect(() => {
    const aggiorna = () => setScorso(window.scrollY > 8);
    aggiorna();
    window.addEventListener("scroll", aggiorna, { passive: true });
    return () => window.removeEventListener("scroll", aggiorna);
  }, []);

  // Menu mobile: blocca lo scroll dietro e si chiude con Esc.
  useEffect(() => {
    if (!aperto) return;

    const chiudiConEsc = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAperto(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", chiudiConEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", chiudiConEsc);
    };
  }, [aperto]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scorso || aperto
          ? "border-b border-line bg-paper/95 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[4.75rem] items-center justify-between gap-6">
          <a href="#" aria-label={`${site.nome}, torna all'inizio`} className="rounded-[14px]">
            <Logo nome={site.nome} />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {site.nav.map((voce) => (
              <a
                key={voce.href}
                href={voce.href}
                className="rounded-pill px-3.5 py-2 text-[0.9375rem] font-semibold text-muted transition-colors hover:bg-paper-alt hover:text-text"
              >
                {voce.etichetta}
              </a>
            ))}
          </nav>

          <a href={site.ctaNav.href} className="btn btn-ink hidden lg:inline-flex">
            {site.ctaNav.etichetta}
            <ArrowRight />
          </a>

          <button
            type="button"
            onClick={() => setAperto((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-[14px] border border-line bg-card lg:hidden"
            aria-expanded={aperto}
            aria-controls="menu-mobile"
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
          >
            <span aria-hidden="true" className="flex w-[1.125rem] flex-col gap-[0.3125rem]">
              <span
                className={`h-[2px] w-full rounded-full bg-text transition-transform duration-300 ${
                  aperto ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-text transition-transform duration-300 ${
                  aperto ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Menu mobile: apre e chiude con una transizione di altezza */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-300 lg:hidden ${
          aperto ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col py-2" aria-label="Navigazione principale">
            {site.nav.map((voce) => (
              <a
                key={voce.href}
                href={voce.href}
                onClick={() => setAperto(false)}
                tabIndex={aperto ? undefined : -1}
                className="flex items-center justify-between border-b border-line py-4 text-[1.0625rem] font-semibold"
              >
                {voce.etichetta}
                <ArrowRight className="h-4 w-4 text-muted" />
              </a>
            ))}
          </nav>
          <a
            href={site.ctaNav.href}
            onClick={() => setAperto(false)}
            tabIndex={aperto ? undefined : -1}
            className="btn btn-ink mb-6 mt-5 w-full"
          >
            {site.ctaNav.etichetta}
            <ArrowRight />
          </a>
        </Container>
      </div>
    </header>
  );
}
