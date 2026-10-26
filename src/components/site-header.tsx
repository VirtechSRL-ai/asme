"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const MAILTO = `mailto:${site.contatti.email}?subject=${encodeURIComponent("Informazioni su Tracciamy")}`;
import { Logo } from "./logo";
import { ArrowRight, Container } from "./ui";

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
    const chiudiConEsc = (e: KeyboardEvent) => e.key === "Escape" && setAperto(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", chiudiConEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", chiudiConEsc);
    };
  }, [aperto]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scorso || aperto ? "border-b border-line shadow-[0_1px_0_0_var(--line)]" : "border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#" aria-label={`${site.nome}, torna all'inizio`} className="rounded-[10px]">
            <Logo altezza={30} priority />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {site.nav.map((voce) => (
              <a
                key={voce.href}
                href={voce.href}
                className="rounded-pill px-3.5 py-2 text-[0.9375rem] font-bold text-neutral transition-colors hover:bg-green-soft hover:text-green-ink"
              >
                {voce.etichetta}
              </a>
            ))}
          </nav>

          <a href={MAILTO} className="btn btn-green hidden lg:inline-flex">
            {site.ctaPrincipale.etichetta}
            <ArrowRight />
          </a>

          <button
            type="button"
            onClick={() => setAperto((v) => !v)}
            className="grid h-12 w-12 place-items-center rounded-[14px] border-2 border-line transition-colors hover:border-green lg:hidden"
            aria-expanded={aperto}
            aria-controls="menu-mobile"
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
          >
            <span aria-hidden="true" className="flex w-[1.125rem] flex-col gap-[0.3125rem]">
              <span
                className={`h-[2px] w-full rounded-full bg-dark transition-transform duration-300 ${
                  aperto ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-dark transition-transform duration-300 ${
                  aperto ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-t bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          aperto ? "max-h-[32rem] border-line opacity-100" : "max-h-0 border-transparent opacity-0"
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
                className="flex items-center justify-between border-b border-line py-4 text-[1.0625rem] font-bold"
              >
                {voce.etichetta}
                <ArrowRight className="h-4 w-4 text-green-ink" />
              </a>
            ))}
          </nav>
          <a
            href={MAILTO}
            onClick={() => setAperto(false)}
            tabIndex={aperto ? undefined : -1}
            className="btn btn-green mb-6 mt-5 w-full"
          >
            {site.ctaPrincipale.etichetta}
            <ArrowRight />
          </a>
        </Container>
      </div>
    </header>
  );
}
