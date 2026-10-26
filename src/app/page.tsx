import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {site.nome}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {site.payoff}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{site.descrizione}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contatti"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Parliamo del tuo progetto
            </a>
            <a
              href="#servizi"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Cosa facciamo
            </a>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {site.numeri.map((n) => (
              <div key={n.etichetta}>
                <dt className="sr-only">{n.etichetta}</dt>
                <dd>
                  <span className="block text-3xl font-semibold">{n.valore}</span>
                  <span className="mt-1 block text-sm text-muted">{n.etichetta}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="servizi" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Servizi</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Un unico interlocutore per l&apos;intero percorso, dall&apos;idea alla consegna.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {site.servizi.map((s) => (
                <article
                  key={s.titolo}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <h3 className="text-lg font-semibold">{s.titolo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.testo}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Il metodo</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Quattro passaggi, sempre gli stessi, per sapere in ogni momento a che punto siamo.
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {site.metodo.map((fase, i) => (
              <li key={fase.titolo} className="border-t-2 border-accent pt-4">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{fase.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{fase.testo}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="chi-siamo" className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Chi siamo</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              {site.chiSiamo.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contatti" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contatti</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Raccontaci cosa ti serve: rispondiamo entro un giorno lavorativo.
          </p>
          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.contatti.email}`}
                  className="text-lg text-accent underline-offset-4 hover:underline"
                >
                  {site.contatti.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted">Telefono</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${site.contatti.telefono.replace(/\s/g, "")}`}
                  className="text-lg text-accent underline-offset-4 hover:underline"
                >
                  {site.contatti.telefono}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted">Sede</dt>
              <dd className="mt-1 text-lg">{site.contatti.indirizzo}</dd>
            </div>
          </dl>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
