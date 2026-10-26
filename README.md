# Tracciamy — sito

Landing monopagina di **Tracciamy**, il prodotto Virtech per la tracciabilità
dei materiali, dalla distinta al fascicolo tecnico. Next.js 16 (App Router),
TypeScript, Tailwind CSS 4.

## Avviare il sito in locale

```bash
npm install
npm run dev
```

Poi apri http://localhost:3000.

## Struttura

Tre sezioni, nell'ordine del riferimento Complaion. Un file per sezione, in
`src/components/sections/`:

| #   | Sezione  | File           | Layout                                      |
| --- | -------- | -------------- | ------------------------------------------- |
| 01  | Hero     | `hero.tsx`     | badge, titolo su due righe, cruscotto centrale |
| 02  | Ottieni  | `ottieni.tsx`  | grafica a sinistra, testo a destra          |
| 03  | Mantieni | `mantieni.tsx` | testo a sinistra, grafica a destra          |

Header e footer completano la pagina. Non ci sono sezioni di testimonianze,
prezzi, FAQ o casi studio: la pagina si ferma alle tre previste.

### Le grafiche

Ogni sezione ha un'anteprima costruita sul proprio contenuto:

- **Hero** — una sola card, *Dati in lavorazione*: barra di avanzamento divisa
  nei tre stati (70% completati, 20% richiedono attenzione, 10% pronti alla
  chiusura), i tre contatori e un estratto delle unità.
- **Ottieni** — la card *Certificato tecnico* con quattro passaggi collegati in
  verticale: i primi due conclusi con la spunta, il terzo in corso con barra di
  avanzamento, il quarto ancora da fare. Accanto, sovrapposto in primo piano,
  il documento *Certificato* che ne risulta.
- **Mantieni** — tre riquadri collegati da una linea verticale: materiali e
  documenti, traccia, controllo finale del team.

Sono rappresentazioni illustrative: i codici (`UN-0016`, `CERT-0016`) sono
fittizi. L'ultimo passaggio resta sempre in carico al team, perché il software
organizza, collega e verifica la completezza, ma non rilascia certificazioni.

Il claim del 90% nella hero è presentato come affermazione commerciale, senza
studi o prove a supporto.

## Modificare i contenuti

Tutti i testi stanno in `src/content/site.ts`, divisi per sezione. Non c'è copy
dentro i componenti.

## Logo

`public/tracciamy-logo.png`, ritagliato dal file ufficiale senza ridisegnarlo,
usato da `src/components/logo.tsx` in header e footer. La favicon è
`src/app/icon.png` e contiene solo il simbolo, senza la scritta.

**Il logo va su fondo bianco**: la scritta è nera e il simbolo sfuma fino a un
verde molto scuro. Per usarlo su fondi scuri serve la versione negativa
ufficiale.

Nel footer c'è anche il logo **Virtech** (`public/virtech-logo.png`): scontornato
dal file fornito ricavando l'alpha dal contrasto col fondo, con la forma intatta,
e ricolorato con la palette Tracciamy — simbolo verde, scritta bianca — quindi
va sulla barra scura. È cliccabile verso virtechsrl.com.

## Palette — quattro colori

Variabili in `src/app/globals.css`.

| Variabile   | Valore    | Ruolo                                      |
| ----------- | --------- | ------------------------------------------ |
| `--green`   | `#00ee93` | colore del marchio: CTA, sezioni, dettagli |
| `--dark`    | `#06231a` | testi, sezioni profonde                    |
| `--white`   | `#ffffff` | **unico** bianco del sito                  |
| `--neutral` | `#55665f` | testi secondari e bordi                    |

Il verde è campionato dal file originale del logo: è il colore pieno del
puntino della «i».

A questi si aggiunge `--orange` (`#f2920d`), che **non è un colore del
marchio**: serve solo allo stato «richiedono attenzione» e non compare mai come
elemento decorativo.

Tutto il resto sono sfumature calcolate con `color-mix`. Due meritano una nota:

- `--green-ink` è il verde mescolato con lo scuro. Serve perché il verde del
  logo su bianco sta a 1,5:1 e come testo sarebbe illeggibile. Il verde pieno
  resta per i riempimenti e per i fondi scuri, dove arriva a 11:1.
- `--orange-soft` è fermo al 10%: oltre, il testo ambrato scende sotto i 4,5:1.

Gli sfondi non sono tinte piatte: `.wash-hero` e `.wash-soft` per le sezioni
chiare, `.on-dark` e `.on-dark-glow` per quelle profonde, `.trama` per la trama
diagonale appena percepibile.

## Tipografia

Una sola famiglia: **Manrope**, da `next/font`, pesi 400–800. Classi in
`globals.css`: `.display`, `.h2`, `.h3`, `.lede`, `.eyebrow`. Sono `clamp()`,
quindi scalano senza breakpoint.

## Animazioni

`src/components/reveal.tsx`, senza librerie: un IntersectionObserver aggiunge
`data-visible` quando l'elemento entra nel viewport, la transizione è in CSS.
Gli hover sono in `globals.css`: i pulsanti si sollevano di 2px con alone verde
e freccia che avanza, le card salgono con bordo verde.

Tutto si disattiva con `prefers-reduced-motion`, e senza JavaScript i contenuti
restano visibili (regola in `<noscript>` nel layout).

Gli aloni decorativi usano `max-width`, non `overflow-x: hidden` sull'`html`,
che renderebbe la pagina un contenitore di scorrimento e romperebbe l'header
sticky. Le griglie usano `grid-cols-1` esplicito: senza, la colonna si
dimensiona sul contenuto minimo del figlio e allarga la pagina sui telefoni.

## Contatti

Stanno in `src/content/site.ts` e compaiono nel footer. Le CTA aprono `mailto:`
reale. **Non c'è un modulo di contatto**: non esiste ancora un sistema di
raccolta collegato, e un form che non invia sarebbe peggio di nessun form.

- info@virtechsrl.com
- +39 333 866 5089
- Erbusco, Brescia, Italia
- https://www.virtechsrl.com/

## Verifiche eseguite

Con Chrome headless su sei larghezze (360, 390, 820, 1024, 1280, 1440 px):

- nessun overflow orizzontale;
- header sticky funzionante a tutte le larghezze;
- tutti gli ingressi allo scroll scattano;
- nessun errore in console;
- un solo `h1`, gerarchia dei titoli senza salti;
- nessun link o pulsante privo di nome accessibile, nessuna immagine senza alt;
- nessun testo sotto il contrasto minimo WCAG AA, compresi i colori calcolati
  con `color-mix`.

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
