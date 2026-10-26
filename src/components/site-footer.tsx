import { cacheLife } from "next/cache";
import { site } from "@/content/site";

export async function SiteFooter() {
  // L'anno del copyright viene prerenderizzato e rinfrescato dalla cache:
  // senza "use cache" il build si ferma sul new Date() non deterministico.
  "use cache";
  cacheLife("days");

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.nome}. Tutti i diritti riservati.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`mailto:${site.contatti.email}`}
            className="transition-colors hover:text-foreground"
          >
            {site.contatti.email}
          </a>
          <a
            href={`tel:${site.contatti.telefono.replace(/\s/g, "")}`}
            className="transition-colors hover:text-foreground"
          >
            {site.contatti.telefono}
          </a>
        </div>
      </div>
    </footer>
  );
}
