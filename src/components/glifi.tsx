import type { ReactNode } from "react";

/**
 * Glifi dei settori industriali.
 *
 * Sono segni astratti e sobri, disegnati sulle forme ricorrenti di ciascun
 * ambito — un recipiente, uno skid di tubazioni, uno scambiatore — non icone
 * generiche né fotografie di repertorio. Stesso viewBox, stesso spessore di
 * tratto e stessi terminali di tutte le altre icone del sito, così restano
 * parte dello stesso sistema.
 */

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-7 w-7"
    >
      {children}
    </svg>
  );
}

/** Recipiente in pressione: corpo cilindrico con fondi bombati. */
function Recipiente() {
  return (
    <Svg>
      <path d="M9 11c0-2.2 3.1-4 7-4s7 1.8 7 4v10c0 2.2-3.1 4-7 4s-7-1.8-7-4z" />
      <path d="M9 11c0 2.2 3.1 4 7 4s7-1.8 7-4" />
      <path d="M16 3v4M13 25v4M19 25v4" />
    </Svg>
  );
}

/** Skid: tubazioni di processo su telaio. */
function Impianto() {
  return (
    <Svg>
      <rect x="4" y="19" width="24" height="8" rx="1.5" />
      <path d="M8 19v-6a3 3 0 0 1 3-3h4" />
      <path d="M24 19v-9a3 3 0 0 0-3-3h-2" />
      <circle cx="17" cy="7" r="2" />
      <path d="M11 23h10" />
    </Svg>
  );
}

/** Scambiatore di calore: fascio tubiero e flusso. */
function Calore() {
  return (
    <Svg>
      <rect x="4" y="10" width="24" height="12" rx="3" />
      <path d="M10 10v12M16 10v12M22 10v12" />
      <path d="M4 6c2-2 4 2 6 0s4 2 6 0 4 2 6 0 4 2 4 0" />
    </Svg>
  );
}

/** Reattore: colonna di processo con attacchi laterali. */
function Reattore() {
  return (
    <Svg>
      <path d="M11 9a5 5 0 0 1 10 0v14a5 5 0 0 1-10 0z" />
      <path d="M11 14H6M21 14h5M11 19H7M21 19h4" />
      <path d="M16 4v1" />
    </Svg>
  );
}

/** Gruppo frigorifero: scambio e cristallo del freddo. */
function Freddo() {
  return (
    <Svg>
      <path d="M16 5v22M7 10.5l18 11M25 10.5l-18 11" />
      <path d="M16 11l-3-3M16 11l3-3M16 21l-3 3M16 21l3 3" />
    </Svg>
  );
}

/** Autoclave: camera con portello circolare. */
function Autoclave() {
  return (
    <Svg>
      <rect x="4" y="8" width="24" height="16" rx="3" />
      <circle cx="13" cy="16" r="4.5" />
      <path d="M22 13v6" />
      <path d="M8 24v3M24 24v3" />
    </Svg>
  );
}

export const glifi = {
  recipiente: Recipiente,
  impianto: Impianto,
  calore: Calore,
  reattore: Reattore,
  freddo: Freddo,
  autoclave: Autoclave,
};

export type NomeGlifo = keyof typeof glifi;
