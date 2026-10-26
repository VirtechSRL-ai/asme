"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function SiteHeader() {
  const [aperto, setAperto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight"
          aria-label={`${site.nome} — torna all'inizio`}
        >
          {site.nome}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principale">
          {site.menu.map((voce) => (
            <a
              key={voce.href}
              href={voce.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {voce.etichetta}
            </a>
          ))}
          <a
            href="#contatti"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Richiedi un preventivo
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAperto((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-expanded={aperto}
          aria-controls="menu-mobile"
          aria-label="Apri il menu"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {aperto ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {aperto && (
        <nav
          id="menu-mobile"
          className="border-t border-border px-4 pb-4 md:hidden"
          aria-label="Principale"
        >
          {site.menu.map((voce) => (
            <a
              key={voce.href}
              href={voce.href}
              onClick={() => setAperto(false)}
              className="block border-b border-border py-3 text-sm text-muted"
            >
              {voce.etichetta}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
