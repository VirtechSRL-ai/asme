"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { inviaRichiestaDemo, type StatoInvio } from "@/app/actions";
import { site } from "@/content/site";
import { ArrowRight, Container, Eyebrow } from "../ui";

const { demo } = site;
const { campi } = demo;

const statoIniziale: StatoInvio = { stato: "iniziale", messaggio: "" };

const classeCampo =
  "w-full rounded-[14px] border border-line-on-ink bg-black/20 px-4 py-3 text-[0.9375rem] text-paper placeholder:text-muted-on-ink focus:border-accent focus:outline-none";

function Invia() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-accent w-full justify-center" disabled={pending}>
      {pending ? "Invio…" : demo.invia}
      {pending ? null : <ArrowRight />}
    </button>
  );
}

function Etichetta({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[0.8125rem] font-medium">
      {children}
    </label>
  );
}

/** 07 — Conversione: blocco scuro con il form di richiesta demo. */
export function Demo() {
  const [stato, azione] = useActionState(inviaRichiestaDemo, statoIniziale);
  const mancante = (campo: string) => stato.campiMancanti?.includes(campo) ?? false;

  return (
    <section id="demo" className="on-ink py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{demo.eyebrow}</Eyebrow>
            <h2 className="h2 mt-4">{demo.titolo}</h2>
            <p className="lede mt-5">{demo.testo}</p>
            <p className="mt-6 inline-flex rounded-pill border border-line-on-ink px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-accent">
              {demo.microcopy}
            </p>
          </div>

          <div className="card rounded-panel p-7 sm:p-8">
            {stato.stato === "ok" ? (
              <p role="status" className="text-[1.0625rem] leading-relaxed">
                {stato.messaggio}
              </p>
            ) : (
              <form action={azione} className="flex flex-col gap-5" noValidate>
                <div>
                  <Etichetta htmlFor="nome">{campi.nome.etichetta}</Etichetta>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={mancante("nome")}
                    className={classeCampo}
                  />
                </div>

                <div>
                  <Etichetta htmlFor="azienda">{campi.azienda.etichetta}</Etichetta>
                  <input
                    id="azienda"
                    name="azienda"
                    type="text"
                    autoComplete="organization"
                    required
                    aria-invalid={mancante("azienda")}
                    className={classeCampo}
                  />
                </div>

                <div>
                  <Etichetta htmlFor="email">{campi.email.etichetta}</Etichetta>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={mancante("email")}
                    className={classeCampo}
                  />
                </div>

                <div>
                  <Etichetta htmlFor="produzione">{campi.produzione.etichetta}</Etichetta>
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
                </div>

                <div>
                  <Etichetta htmlFor="messaggio">{campi.messaggio.etichetta}</Etichetta>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    className={`${classeCampo} resize-y`}
                  />
                </div>

                {stato.stato === "errore" ? (
                  <p role="alert" className="text-[0.875rem] leading-relaxed text-accent">
                    {stato.messaggio}
                  </p>
                ) : null}

                <Invia />

                <p className="text-[0.75rem] leading-relaxed text-muted-on-ink">
                  {demo.privacy}{" "}
                  <a href={demo.privacyLink.href} className="underline underline-offset-2">
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
