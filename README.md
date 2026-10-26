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

| #   | Sezione      | File             | Contenuto                                   |
| --- | ------------ | ---------------- | ------------------------------------------- |
| 01  | Hero         | `hero.tsx`       | messaggio a sinistra, prodotto a destra     |
| 02  | Prova        | `experience.tsx` | l'esperienza W&H, layout editoriale ampio   |
| 03  | Beneficio    | `benefit.tsx`    | tre micro-messaggi e il diagramma editoriale |
| 04  | Prodotto     | `product.tsx`    | una sola interfaccia, tre callout           |
| 05  | Metodo       | `method.tsx`     | Importa. Collega. Verifica.                 |
| 06  | Ambiti       | `scopes.tsx`     | ASME / PED, due colonne e fascia            |
| 07  | Conversione  | `demo.tsx`       | blocco scuro con il form                    |

## Modificare i contenuti

Tutti i testi stanno in `src/content/site.ts`, divisi per sezione. Non c'è copy
dentro i componenti: per cambiare una frase si modifica solo quel file.

## Vincoli editoriali del brief

Sono scelte vincolate, non preferenze di stile. Da tenere se si tocca la pagina:

- **Nessuna UI inventata.** La sezione 04 richiede «interfaccia vera, non una UI
  inventata» e vieta la dashboard sintetica. Per questo gli screenshot sono
  riquadri segnaposto (`src/components/screenshot-frame.tsx`) che dichiarano
  quale immagine va inserita, invece di finte schermate.
- **Nessuna metrica o testimonianza** senza dati e permessi documentati. Per
  questo non ci sono contatori, loghi clienti, recensioni o casi studio.
- **Niente bollini di conformità** o icone che sembrino certificazioni
  rilasciate (sezione 06).
- **Formule da evitare:** «elimina gli errori», «garantisce conformità». Il
  controllo tecnico finale resta al fabbricante e alle figure previste.
- Il sistema **non verifica da solo** la conformità tecnica dei certificati:
  l'estrazione è assistita e richiede conferma umana.
- Nessuna promessa di fascicolo PED generato finché non è dimostrata.

## Da completare prima del go-live

1. **Palette e logo ufficiali Virtech.** Ora la palette è allineata
   all'identità del brief (navy + teal): per riallinearla bastano `--ink` e
   `--accent` in `src/app/globals.css`.
2. **Screenshot reali anonimizzati** al posto dei riquadri segnaposto, con
   `next/image`.
3. **Autorizzazione W&H** per nome, logo, screenshot e descrizione del caso.
4. **Formulazione ASME/PED** e capacità disponibili per PED, da confermare con
   il referente tecnico.
5. **Destinazione del form**, testo privacy e contatti commerciali.

## Form di richiesta demo

Il form (sezione 07) usa una server action in `src/app/actions.ts`. Invia i dati
a `CONTACT_WEBHOOK_URL`: finché la variabile non è configurata il form non
finge di aver inviato, mostra l'indirizzo email di contatto. Vedi `.env.example`.

## Palette e tipografia

I colori sono variabili CSS in `src/app/globals.css`:

| Variabile       | Valore    | Uso                                     |
| --------------- | --------- | --------------------------------------- |
| `--paper`       | `#f7f8f8` | fondo delle sezioni chiare              |
| `--paper-alt`   | `#eceff0` | fondo delle sezioni alternate           |
| `--ink`         | `#16202e` | sezioni scure e colore del testo        |
| `--accent`      | `#2ec4ae` | accento: riempimenti e bottoni su scuro |
| `--accent-text` | `#127a6c` | l'accento per il testo piccolo su chiaro |
| `--muted`       | `#5b6673` | testo secondario                        |

`--accent-text` esiste perché il teal pieno non raggiunge il contrasto AA sul
testo piccolo su fondo chiaro. Font: Inter per i testi, JetBrains Mono per le
etichette, caricati da `next/font`.

Le primitive riusate dalle sezioni sono nello stesso file: `.display`, `.h2`,
`.h3`, `.lede`, `.eyebrow`, `.btn` con `.btn-ink` / `.btn-accent` /
`.btn-outline`, `.card`, `.chip`, `.link-arrow`. La classe `.on-ink` su una
sezione ne attiva automaticamente le varianti per fondo scuro.

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
