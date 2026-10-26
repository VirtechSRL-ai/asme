# Landing monopagina ASME / PED — Virtech

Landing in Next.js 16 (App Router), TypeScript e Tailwind CSS 4. I contenuti
vengono dal brief *Landing monopagina ASME / PED*: tracciabilità dei materiali e
preparazione della documentazione tecnica per produttori di apparecchiature in
pressione.

## Avviare il sito in locale

```bash
npm install
npm run dev
```

Poi apri http://localhost:3000.

## Le sette sezioni

L'ordine segue il brief. Un file per sezione, in `src/components/sections/`:

| #   | Sezione     | File             | Fondo         | Contenuto                                  |
| --- | ----------- | ---------------- | ------------- | ------------------------------------------ |
| 01  | Hero        | `hero.tsx`       | bianco        | titolo a piena larghezza, catena animata   |
| 02  | Prova       | `experience.tsx` | menta chiaro  | l'esperienza W&H, schema del lotto         |
| 03  | Beneficio   | `benefit.tsx`    | bianco        | tre micro-messaggi e diagramma a ventaglio |
| 04  | Prodotto    | `product.tsx`    | verde scuro   | il percorso unità → componente → certificato |
| 05  | Metodo      | `method.tsx`     | grigio        | Importa. Collega. Verifica.                |
| 06  | Ambiti      | `scopes.tsx`     | bianco        | ASME / PED e la fascia che condividono     |
| 07  | Conversione | `demo.tsx`       | verde scuro   | modulo di richiesta demo                   |

I fondi si alternano apposta: il ritmo chiaro → menta → chiaro → scuro → grigio
→ chiaro → scuro scandisce lo scorrimento senza uscire dalla stessa identità.

## Modificare i contenuti

Tutti i testi stanno in `src/content/site.ts`, divisi per sezione. Non c'è copy
dentro i componenti: per cambiare una frase si modifica solo quel file.

## Identità visiva

### Logo provvisorio

`src/components/logo.tsx`. Il segno è una "V" disegnata come un tracciato che
risale e termina in un nodo staccato: richiama il risalire da un'unità prodotta
alla sua origine. Due versioni, stessa identità:

- `<Logo nome="Virtech" />` — segno più marchio tipografico (header, footer)
- `<LogoMark />` — solo il segno, per gli spazi stretti

Il tratto usa `currentColor`, quindi funziona su fondo chiaro e scuro
(`variante="paper"` per il secondo caso). La favicon è `src/app/icon.svg`, dallo
stesso disegno.

**Per sostituirlo con il logo definitivo** bastano due file: `logo.tsx` e
`icon.svg`. Header e footer non vanno toccati.

### Tipografia

Una sola famiglia: **Manrope**, caricata da `next/font`. La gerarchia nasce dai
pesi (400–800), non da font diversi. Le classi stanno in `globals.css`:

| Classe     | Dimensione           | Uso                      |
| ---------- | -------------------- | ------------------------ |
| `.display` | 34 → 72 px           | titolo della hero        |
| `.h2`      | 30 → 44 px           | titoli di sezione        |
| `.h3`      | 20 → 24 px           | titoli interni           |
| `.lede`    | 17 → 19 px           | testi descrittivi        |
| `.eyebrow` | 13 px maiuscoletto   | etichetta sopra i titoli |

Sono tutte `clamp()`: scalano con la larghezza senza breakpoint.

### Palette

Variabili CSS in `src/app/globals.css`:

| Variabile       | Valore    | Uso                                       |
| --------------- | --------- | ----------------------------------------- |
| `--paper`       | `#ffffff` | fondo base                                |
| `--paper-alt`   | `#f1f3f2` | sezioni alternate                         |
| `--paper-mint`  | `#e5fffd` | sezione in evidenza                       |
| `--ink`         | `#0d302d` | sezioni scure e colore del testo          |
| `--ink-deep`    | `#092220` | footer, un gradino più scuro              |
| `--accent`      | `#69ea9b` | riempimenti, bottoni su fondo scuro       |
| `--accent-text` | `#0e6b52` | l'accento quando è testo su fondo chiaro  |
| `--muted`       | `#566b68` | testo secondario                          |
| `--muted-soft`  | `#7b918c` | numeri grandi dei passaggi                |

Esistono tre varianti dell'accento perché il menta pieno non raggiunge il
contrasto minimo sul testo: `--accent` riempie, `--accent-text` scrive su fondo
chiaro, e su fondo scuro il menta pieno va bene. Per riallineare tutto il sito
alla palette ufficiale bastano `--ink` e `--accent`.

### Componenti condivisi

In `globals.css`: `.btn` (`.btn-ink`, `.btn-accent`, `.btn-outline`), `.card`,
`.card-hover`, `.chip`, `.link-arrow`, `.eyebrow`. La classe `.on-ink` su un
contenitore attiva automaticamente tutte le varianti per fondo scuro, etichette
e bordi compresi. Le icone sono un set unico in `src/components/ui.tsx`: stesso
viewBox, stesso spessore di tratto.

## Animazioni

`src/components/reveal.tsx`, senza librerie: un IntersectionObserver aggiunge
`data-visible` quando l'elemento entra nel viewport, e la transizione è in CSS.
`<Reveal cascata>` anima i figli uno dopo l'altro.

Si disattivano da sole con `prefers-reduced-motion`, e chi ha JavaScript
disattivato vede comunque tutti i contenuti (regola in `<noscript>` nel layout).

Nota: gli aloni decorativi usano `max-width`, non `overflow-x: hidden`
sull'`html`. Quest'ultimo renderebbe la pagina un contenitore di scorrimento e
romperebbe l'header sticky.

## Vincoli editoriali del brief

Sono scelte vincolate, non preferenze di stile. Da tenere se si tocca la pagina:

- **Nessuna UI inventata.** Il brief richiede «interfaccia vera, non una UI
  inventata» e vieta la dashboard sintetica. Le grafiche della pagina sono
  quindi schemi concettuali dichiarati come tali (catena, lotto, diagramma,
  percorso), mai finte schermate di prodotto.
- **Nessuna metrica o testimonianza** senza dati e permessi documentati: niente
  contatori, loghi clienti, recensioni o casi studio.
- **Niente bollini di conformità** o icone che sembrino certificazioni
  rilasciate (sezione 06).
- **Formule da evitare:** «elimina gli errori», «garantisce conformità». Il
  controllo tecnico finale resta al fabbricante e alle figure previste.
- Il sistema **non verifica da solo** la conformità tecnica dei certificati:
  l'estrazione è assistita e richiede conferma umana.
- Nessuna promessa di fascicolo PED generato finché non è dimostrata.

## Da completare prima del go-live

1. **Logo e palette ufficiali Virtech**, al posto dei provvisori.
2. **Screenshot reali anonimizzati.** Il brief ne prevede nelle sezioni 01, 02,
   04 e 05. Finché non ci sono, quelle sezioni usano schemi concettuali: quando
   arrivano, vanno inseriti con `next/image` accanto allo schema o al suo posto.
   Da oscurare: numeri di commessa, nomi di clienti e fornitori.
3. **Autorizzazione W&H** per nome, logo, screenshot e descrizione del caso.
4. **Formulazione ASME/PED** e capacità disponibili per PED, da confermare con
   il referente tecnico.
5. **Destinazione del form**, testo privacy e link all'informativa (ora `#`).

## Form di richiesta demo

Il modulo della sezione 07 usa una server action in `src/app/actions.ts` e invia
a `CONTACT_WEBHOOK_URL`. Finché la variabile non è configurata il form non finge
di aver inviato: mostra l'indirizzo email di contatto. Vedi `.env.example`.

## Verifiche eseguite

Con Chrome headless su sei larghezze (360, 390, 820, 1024, 1280, 1440 px):

- nessun overflow orizzontale e nessun elemento fuori dallo schermo;
- header sticky funzionante a tutte le larghezze;
- tutti gli ingressi allo scroll scattano;
- nessun errore in console;
- un solo `h1`, gerarchia dei titoli senza salti;
- nessun link o pulsante privo di nome accessibile, nessun campo senza `label`;
- nessun testo sotto il contrasto minimo WCAG AA.

## Comandi

```bash
npm run dev     # sviluppo in locale
npm run build   # build di produzione
npm run start   # avvia la build di produzione
npm run lint    # controllo del codice
```

## Pubblicazione

Collegare il repository a [Vercel](https://vercel.com/new): ogni push su `main`
pubblica la nuova versione. Ricordarsi di impostare `CONTACT_WEBHOOK_URL` fra le
variabili d'ambiente del progetto.
