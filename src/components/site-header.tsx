"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ArrowRight, Container } from "./ui";

export function SiteHeader() {
  const [aperto, setAperto] = useState(false);

  // Blocca lo scroll del body quando il menu mobile è aperto.
  useEffect(() => {
    document.body.style.overflow = aperto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aperto]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2.5" aria-label={`${site.nome}, inizio pagina`}>
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-[0.8125rem] font-semibold text-paper"
            >
              {site.nome.slice(0, 1)}
            </span>
            <span className="text-[1.0625rem] font-semibold tracking-[-0.03em]">{site.nome}</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {site.nav.map((voce) => (
              <a
                key={voce.href}
                href={voce.href}
                className="rounded-pill px-3.5 py-2 text-[0.9375rem] font-medium text-muted transition-colors hover:bg-paper-alt hover:text-text"
              >
                {voce.etichetta}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={site.ctaNav.href} className="btn btn-ink">
              {site.ctaNav.etichetta}
              <ArrowRight />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setAperto((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-[12px] border border-line bg-card lg:hidden"
            aria-expanded={aperto}
            aria-controls="menu-mobile"
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
          >
            <span aria-hidden="true" className="flex w-4 flex-col gap-[0.3125rem]">
              <span
                className={`h-[1.5px] w-full bg-text transition-transform ${aperto ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-[1.5px] w-full bg-text transition-transform ${aperto ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </Container>

      {aperto ? (
        <div id="menu-mobile" className="border-t border-line bg-paper lg:hidden">
          <Container>
            <nav className="flex flex-col py-2" aria-label="Navigazione principale">
              {site.nav.map((voce) => (
                <a
                  key={voce.href}
                  href={voce.href}
                  onClick={() => setAperto(false)}
                  className="flex items-center justify-between border-b border-line py-4 text-base font-medium"
                >
                  {voce.etichetta}
                  <ArrowRight className="h-3.5 w-3.5 text-muted" />
                </a>
              ))}
            </nav>
            <a
              href={site.ctaNav.href}
              onClick={() => setAperto(false)}
              className="btn btn-ink mb-6 mt-4 w-full justify-center"
            >
              {site.ctaNav.etichetta}
              <ArrowRight />
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
