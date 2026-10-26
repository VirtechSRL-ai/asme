"use client";

import { useActionState, type ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { inviaRichiestaDemo, type StatoInvio } from "@/app/actions";
import { site } from "@/content/site";
import { ArrowRight, Check, Container, Eyebrow } from "../ui";

const { demo } = site;
const { campi } = demo;

const statoIniziale: StatoInvio = { stato: "iniziale", messaggio: "" };

const classeCampo =
  "w-full rounded-[14px] border border-line-on-ink bg-black/25 px-4 py-3 text-[1rem] text-paper transition-colors placeholder:text-muted-on-ink focus:border-accent focus:outline-none aria-[invalid=true]:border-accent";

function Invia() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-accent w-full" disabled={pending}>
      {pending ? "Invio in corso…" : demo.invia}
      {pending ? null : <ArrowRight />}
    </button>
  );
}

function Campo({
  id,
  etichetta,
  children,
}: {
  id: string;
  etichetta: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.875rem] font-semibold">
        {etichetta}
      </label>
      {children}
    </div>
  );
}

/** 07 — Conversione: blocco finale scuro con il modulo di richiesta demo. */
export function Demo() {
  const [stato, azione] = useActionState(inviaRichiestaDemo, statoIniziale);
  const mancante = (campo: string) => stato.campiMancanti?.includes(campo) ?? false;

  return (
    <section id="demo" className="on-ink relative py-20 sm:py-24">
      {/* Niente overflow-hidden sulla sezione: romperebbe la colonna sticky. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-72 left-1/2 h-[40rem] w-full max-w-[64rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_68%)]"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{demo.eyebrow}</Eyebrow>
            <h2 className="h2 mt-5 max-w-[16ch]">{demo.titolo}</h2>
            <p className="lede mt-6 max-w-xl">{demo.testo}</p>

            <ul className="mt-9 flex flex-col gap-3.5">
              {demo.punti.map((punto) => (
                <li key={punto} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-ink"
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-[1rem] text-muted-on-ink">{punto}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card rounded-panel p-7 sm:p-8">
            {stato.stato === "ok" ? (
              <div role="status" className="py-6 text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-ink"
                >
                  <Check className="h-7 w-7" />
                </span>
                <p className="mt-6 text-[1.125rem] font-semibold leading-relaxed">
                  {stato.messaggio}
                </p>
              </div>
            ) : (
              <form action={azione} className="flex flex-col gap-5" noValidate>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[1.125rem] font-bold tracking-[-0.02em]">{demo.invia}</p>
                  <span className="chip">{demo.microcopy}</span>
                </div>

                <Campo id="nome" etichetta={campi.nome.etichetta}>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={mancante("nome")}
                    className={classeCampo}
                  />
                </Campo>

                <Campo id="azienda" etichetta={campi.azienda.etichetta}>
                  <input
                    id="azienda"
                    name="azienda"
                    type="text"
                    autoComplete="organization"
                    required
                    aria-invalid={mancante("azienda")}
                    className={classeCampo}
                  />
                </Campo>

                <Campo id="email" etichetta={campi.email.etichetta}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={mancante("email")}
                    className={classeCampo}
                  />
                </Campo>

                <Campo id="produzione" etichetta={campi.produzione.etichetta}>
                  <select
                    id="produzione"
                    name="produzione"
                    required
                    defaultValue=""
                    aria-invalid={mancante("produzione")}
                    className={classeCampo}
                  >
                    <option value="" disabled>
                      Seleziona…
                    </option>
                    {campi.produzione.opzioni.map((opzione) => (
                      <option key={opzione} value={opzione} className="text-text">
                        {opzione}
                      </option>
                    ))}
                  </select>
                </Campo>

                <Campo id="messaggio" etichetta={campi.messaggio.etichetta}>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    className={`${classeCampo} resize-y`}
                  />
                </Campo>

                {stato.stato === "errore" ? (
                  <p
                    role="alert"
                    className="rounded-[14px] border border-accent/40 bg-accent/10 px-4 py-3 text-[0.9375rem] leading-relaxed text-accent"
                  >
                    {stato.messaggio}
                  </p>
                ) : null}

                <Invia />

                <p className="text-[0.8125rem] leading-relaxed text-muted-on-ink">
                  {demo.privacy}{" "}
                  <a
                    href={demo.privacyLink.href}
                    className="font-semibold text-accent underline underline-offset-2"
                  >
                    {demo.privacyLink.etichetta}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
