import Image from "next/image";
import type { Certificazione, FormaSigillo } from "@/content/certificazioni";

/**
 * Il sigillo di una certificazione: un badge geometrico disegnato per il
 * sito, nel linguaggio dei marchi di conformità ma dichiaratamente grafico.
 * Quattro geometrie (cerchio, esagono, ottagono, scudo) con la stessa
 * costruzione: superficie sfumata, bordo, anello interno tratteggiato e
 * tacche da sigillo. La varietà sta nella forma, la coerenza in tutto il
 * resto.
 *
 * Al centro vive il logo ufficiale quando esiste (ASME), con i suoi colori e
 * le sue proporzioni, su un medaglione bianco; altrimenti la sigla in forma
 * tipografica. Niente marchi ricostruiti, niente simboli che possano passare
 * per riconoscimenti reali: i colori sono i tre della palette e cambiano da
 * soli sui fondi scuri grazie alle variabili --sigillo-* in globals.css.
 */

/* Poligoni concentrici sul viewBox 120×120: esterno ~r55, interno ~r46 */
const SAGOME: Record<FormaSigillo, { fuori: string; dentro: string }> = {
  cerchio: { fuori: "", dentro: "" }, // il cerchio usa <circle>, non path
  esagono: {
    fuori: "M60 5 L107.6 32.5 V87.5 L60 115 L12.4 87.5 V32.5 Z",
    dentro: "M60 14 L99.8 37 V83 L60 106 L20.2 83 V37 Z",
  },
  ottagono: {
    fuori: "M110.8 39 V81 L81 110.8 H39 L9.2 81 V39 L39 9.2 H81 Z",
    dentro: "M102.5 42.4 V77.6 L77.6 102.5 H42.4 L17.5 77.6 V42.4 L42.4 17.5 H77.6 Z",
  },
  scudo: {
    fuori:
      "M60 6 C74 13 89 17 104 18 L104 60 C104 90 86 106 60 114 C34 106 16 90 16 60 L16 18 C31 17 46 13 60 6 Z",
    dentro:
      "M60 16 C71 21 83 24 96 25 L96 60 C96 85 81 98 60 105 C39 98 24 85 24 60 L24 25 C37 24 49 21 60 16 Z",
  },
};

/** Tacche radiali del cerchio, sulle diagonali: il dettaglio da sigillo */
const TACCHE = [45, 135, 225, 315].map((gradi) => {
  const rad = (gradi * Math.PI) / 180;
  return {
    x1: 60 + 50 * Math.cos(rad),
    y1: 60 + 50 * Math.sin(rad),
    x2: 60 + 54.5 * Math.cos(rad),
    y2: 60 + 54.5 * Math.sin(rad),
  };
});

function Sagoma({
  forma,
  medaglione,
  gradiente,
}: {
  forma: FormaSigillo;
  medaglione: boolean;
  gradiente: string;
}) {
  const base = {
    fill: medaglione ? "#ffffff" : `url(#${gradiente})`,
    stroke: "var(--sigillo-bordo)",
    strokeWidth: 2,
  } as const;
  const anello = {
    fill: "none",
    stroke: "var(--sigillo-anello)",
    strokeWidth: 1.5,
    strokeDasharray: "1 6",
    strokeLinecap: "round",
  } as const;

  if (forma === "cerchio") {
    return (
      <>
        <circle cx="60" cy="60" r="55" {...base} />
        <circle cx="60" cy="60" r="46" {...anello} />
        {TACCHE.map((t, i) => (
          <line key={i} {...t} stroke="var(--sigillo-anello)" strokeWidth="2" strokeLinecap="round" />
        ))}
      </>
    );
  }

  const { fuori, dentro } = SAGOME[forma];
  return (
    <>
      <path d={fuori} {...base} strokeLinejoin="round" />
      <path d={dentro} {...anello} strokeLinejoin="round" />
    </>
  );
}

export function Sigillo({
  cert,
  className = "h-24 w-24",
}: {
  cert: Certificazione;
  className?: string;
}) {
  const corta = cert.sigla.length <= 4;
  // Un id per voce, non uno globale: con un id condiviso ogni <use> del
  // gradiente punterebbe al primo SVG della pagina, e sui fondi scuri le
  // variabili verrebbero lette dal contesto sbagliato.
  const gradiente = `sigillo-${cert.sigla.toLowerCase().replace(/\W+/g, "-")}`;

  return (
    <span className={`sigillo relative block shrink-0 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" focusable="false">
        <defs>
          {/* Le fermate leggono le variabili dal proprio contesto: stesso
              gradiente ovunque, colori diversi sui fondi scuri. */}
          <linearGradient id={gradiente} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: "var(--sigillo-g1)" }} />
            <stop offset="1" style={{ stopColor: "var(--sigillo-g2)" }} />
          </linearGradient>
        </defs>
        <Sagoma forma={cert.forma} medaglione={!!cert.logo} gradiente={gradiente} />
      </svg>

      {/* Il logo resta dentro il medaglione (23%), la sigla può avvicinarsi
          all'anello (17%): l'occhio compensa il peso diverso dei contenuti. */}
      <span
        className={`absolute inset-0 grid place-items-center ${
          cert.logo ? "p-[23%]" : "p-[17%]"
        }`}
      >
        {cert.logo ? (
          <span className="relative block h-full w-full">
            <Image
              src={cert.logo}
              alt=""
              fill
              sizes="160px"
              className="object-contain"
            />
          </span>
        ) : (
          <span className={corta ? "sigillo-sigla" : "sigillo-sigla-lunga"}>{cert.sigla}</span>
        )}
      </span>
    </span>
  );
}
