import Image from "next/image";
import type { ReactNode } from "react";
import type { Certificazione } from "@/content/certificazioni";

/*
 * Il sigillo delle certificazioni Tracciamy: un timbro di conformità
 * ridisegnato in chiave contemporanea. Bordo a rosetta appena smerlato,
 * fascia menta con il tipo inciso lungo l'arco superiore, un glifo che
 * identifica il genere di documento alla base, e al centro il logo
 * ufficiale o la sigla. Stessa struttura e stessi colori per ogni voce:
 * a distinguerle sono il nome, il tipo e il glifo, mai una tinta.
 * Nessuna dicitura di approvazione: il sigillo dice cos'è il documento,
 * non che qualcuno l'ha certificato.
 */

const C = 60;

/** Il bordo a rosetta: 30 archi poco convessi su un cerchio di raggio 57 */
const ROSETTA = (() => {
  const n = 30;
  const r = 57;
  const arco = 11;
  const punti = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [C + r * Math.cos(a), C + r * Math.sin(a)].map((v) => v.toFixed(2)).join(" ");
  });
  return `M${punti[0]}${punti
    .slice(1)
    .concat(punti[0])
    .map((p) => `A${arco} ${arco} 0 0 1 ${p}`)
    .join("")}Z`;
})();

/** L'arco superiore su cui corre il tipo, da sinistra a destra */
const ARCO_TIPO = `M${C - 40} ${C}A40 40 0 0 1 ${C + 40} ${C}`;

/* Glifi del tipo, disegnati su un riquadro 10×10 */
const glifi: Record<string, ReactNode> = {
  Codici: <path d="M5 2.6C3.6 1.6 1.8 1.5.6 2v6.4c1.2-.5 3-.4 4.4.6 1.4-1 3.2-1.1 4.4-.6V2C8.2 1.5 6.4 1.6 5 2.6Zm0 0V9" />,
  Direttiva: (
    <text x="5" y="8.6" textAnchor="middle" className="sg-glifo-testo">
      §
    </text>
  ),
  Qualifica: <path d="M.6 7.8h8.8M1.2 6.2a1.9 1.9 0 0 1 3.6-.4 1.9 1.9 0 0 1 3.6.4" />,
  Specifica: (
    <>
      <path d="M.8 3h8.4M.8 7h8.4" />
      <circle cx="3.4" cy="3" r="1.25" className="sg-glifo-pieno" />
      <circle cx="6.6" cy="7" r="1.25" className="sg-glifo-pieno" />
    </>
  ),
  Report: <path d="M4.1 5.9 5.9 4.1M4.6 7.4 3.7 8.3a2 2 0 0 1-2.9-2.9l.9-.9M5.4 2.6l.9-.9a2 2 0 0 1 2.9 2.9l-.9.9" />,
  Fascicolo: <path d="M3 1h5.2a.9.9 0 0 1 .9.9v5.8a.9.9 0 0 1-.9.9H3a.9.9 0 0 1-.9-.9V1.9A.9.9 0 0 1 3 1ZM.8 3.2v5.1a.9.9 0 0 0 .9.9h5" />,
  Dossier: <path d="M.8 3a1 1 0 0 1 1-1h2.1l1.1 1.3h3.2a1 1 0 0 1 1 1v3.9a1 1 0 0 1-1 1H1.8a1 1 0 0 1-1-1Z" />,
  Registro: (
    <>
      <path d="M3.6 2.4h5.6M3.6 5h5.6M3.6 7.6h5.6" />
      <circle cx="1.4" cy="2.4" r=".7" className="sg-glifo-pieno" />
      <circle cx="1.4" cy="5" r=".7" className="sg-glifo-pieno" />
      <circle cx="1.4" cy="7.6" r=".7" className="sg-glifo-pieno" />
    </>
  ),
  Disegno: <path d="M5 .6v2.2M5 7.2v2.2M.6 5h2.2M7.2 5h2.2M7.2 5a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0Z" />,
  Controlli: <path d="M6.3 6.3 9.2 9.2M7 4.2a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0Z" />,
  Collaudo: <path d="M1.3 7.6a4 4 0 1 1 7.4 0M5 6.1l2-2.4" />,
};

function Logo({ src, className }: { src: string; className: string }) {
  return <Image src={src} alt="" width={124} height={74} unoptimized className={className} />;
}

export function Sigillo({
  cert,
  className = "",
}: {
  cert: Certificazione;
  className?: string;
}) {
  const breve = cert.sigla.length <= 4;
  const glifo = glifi[cert.tipo];

  return (
    <span className={`sigillo ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="sg-tela" focusable="false">
        <defs>
          <path id="sigillo-arco-tipo" d={ARCO_TIPO} />
          <linearGradient id="sigillo-fascia" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className="sg-fascia-alto" />
            <stop offset="1" className="sg-fascia-basso" />
          </linearGradient>
        </defs>
        <path d={ROSETTA} className="sg-rosetta" />
        <circle cx={C} cy={C} r="49" className="sg-fascia" />
        <circle cx={C} cy={C} r="37.5" className="sg-cuore" />
        <text className="sg-tipo">
          <textPath href="#sigillo-arco-tipo" startOffset="50%" textAnchor="middle">
            {cert.tipo.toUpperCase()}
          </textPath>
        </text>
        {glifo && (
          <g className="sg-glifo" transform={`translate(${C - 6} ${C + 37.25}) scale(1.2)`}>
            {glifo}
          </g>
        )}
      </svg>
      <span className="sg-centro">
        {cert.logo ? (
          <Logo src={cert.logo} className="sg-logo" />
        ) : (
          <span className={breve ? "sg-sigla" : "sg-nome"}>{cert.sigla}</span>
        )}
      </span>
    </span>
  );
}

/**
 * La versione ridotta per il gruppo «E molte altre»: stessa rosetta e
 * stessa fascia, senza iscrizione — a quella misura sarebbe solo rumore.
 */
export function SigilloMini({ sigla, conto = false }: { sigla: string; conto?: boolean }) {
  return (
    <span className={`sigillo-mini${conto ? " sigillo-mini-conto" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="sg-tela" focusable="false">
        <path d={ROSETTA} className="sg-rosetta" />
        <circle cx={C} cy={C} r="49" className="sg-fascia" />
        <circle cx={C} cy={C} r="41" className="sg-cuore" />
      </svg>
      <span className="sg-centro">{sigla}</span>
    </span>
  );
}
