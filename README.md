# ASME — sito

Sito costruito con [Next.js](https://nextjs.org) 16 (App Router), TypeScript e
Tailwind CSS 4. L'impianto visivo ricalca la struttura di una landing page di
riferimento; palette e font sono originali.

## Avviare il sito in locale

```bash
npm install
npm run dev
```

Poi apri http://localhost:3000.

## Modificare i contenuti

Tutti i testi stanno in un solo file:

```
src/content/site.ts
```

È diviso per sezione (`hero`, `pilastri`, `team`, `piattaforma`, `catalogo`, …):
sostituendo i valori lì si aggiorna tutto il sito, header, footer, titolo della
pagina e anteprime social comprese. I testi attuali sono segnaposto.

## Palette e tipografia

I colori sono variabili CSS in `src/app/globals.css`, raccolte in tre famiglie:

| Variabile      | Valore    | Uso                                 |
| -------------- | --------- | ----------------------------------- |
| `--paper`      | `#f7f7f3` | fondo delle sezioni chiare          |
| `--paper-alt`  | `#ecece3` | fondo delle sezioni alternate       |
| `--ink`        | `#121c2b` | sezioni scure e colore del testo    |
| `--accent`     | `#ffc14d` | accento unico: bottoni e evidenze   |
| `--muted`      | `#606a78` | testo secondario                    |
| `--line`       | `#e2e2d8` | bordi                               |

Cambiando `--accent` cambia l'accento di tutto il sito. I font sono Inter
(testi) e JetBrains Mono (etichette), caricati da `next/font`.

Nello stesso file ci sono le primitive riusate dalle sezioni: `.display`, `.h2`,
`.h3`, `.lede`, `.eyebrow`, `.btn` con le varianti `.btn-ink` / `.btn-accent` /
`.btn-outline`, `.card`, `.chip` e `.link-arrow`. La classe `.on-ink` su una
sezione ne attiva automaticamente le varianti per fondo scuro.

## Struttura

| Percorso                           | Contenuto                                 |
| ---------------------------------- | ----------------------------------------- |
| `src/content/site.ts`              | tutti i testi e i dati                    |
| `src/app/page.tsx`                 | la home: monta le sezioni in sequenza     |
| `src/app/layout.tsx`               | font e metadati SEO                       |
| `src/app/globals.css`              | palette, tipografia, primitive            |
| `src/components/ui.tsx`            | contenitore, bottoni, icone, intro        |
| `src/components/site-header.tsx`   | header sticky con menu mobile             |
| `src/components/site-footer.tsx`   | footer                                    |
| `src/components/sections/`         | una sezione per file                      |

Le sezioni nell'ordine in cui compaiono: `hero`, `trust-bar`, `pillars`, `team`,
`platform`, `audience`, `metrics`, `catalog`, `sectors`, `process`, `partners`,
`case-studies`, `testimonials`, `cta-band`, `resources`.

## Immagini

I riquadri scuri nelle sezioni team e casi studio sono segnaposto: vanno
sostituiti con foto reali usando il componente `next/image`.

## Comandi

```bash
npm run dev     # sviluppo in locale
npm run build   # build di produzione
npm run start   # avvia la build di produzione
npm run lint    # controllo del codice
```

## Pubblicazione

Collegare il repository a [Vercel](https://vercel.com/new): ogni push su `main`
pubblica la nuova versione.
