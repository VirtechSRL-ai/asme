# ASME — sito

Sito vetrina costruito con [Next.js](https://nextjs.org) (App Router), TypeScript e Tailwind CSS 4.

## Avviare il sito in locale

```bash
npm install
npm run dev
```

Poi apri http://localhost:3000.

## Modificare i contenuti

Tutti i testi, i contatti, le voci di menu e le sezioni stanno in un solo file:

```
src/content/site.ts
```

Cambiando i valori lì si aggiorna tutto il sito, header e footer compresi. Il nome
del sito e la descrizione vengono usati anche per il titolo della pagina e per
l'anteprima sui social.

## Struttura

| Percorso                       | Contenuto                                  |
| ------------------------------ | ------------------------------------------ |
| `src/content/site.ts`          | testi e dati del sito                      |
| `src/app/page.tsx`             | la home con tutte le sezioni               |
| `src/app/layout.tsx`           | struttura HTML, font e metadati SEO        |
| `src/app/globals.css`          | colori del tema (chiaro e scuro) e stili   |
| `src/components/site-header.tsx` | header con menu, anche in versione mobile |
| `src/components/site-footer.tsx` | footer                                   |

I colori sono definiti come variabili CSS in `globals.css`, con una variante per
il tema scuro: cambiando `--accent` si cambia il colore principale del sito.

## Comandi

```bash
npm run dev     # sviluppo in locale
npm run build   # build di produzione
npm run start   # avvia la build di produzione
npm run lint    # controllo del codice
```

## Pubblicazione

Il modo più rapido è collegare questo repository a [Vercel](https://vercel.com/new):
ogni push sul branch `main` pubblica la nuova versione.
