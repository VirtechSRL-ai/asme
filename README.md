# Tracciamy — sito

Landing monopagina di **Tracciamy**, il prodotto Virtech per la tracciabilità
dei materiali nei processi ASME e PED. Next.js 16 (App Router), TypeScript,
Tailwind CSS 4.

## Avviare il sito in locale

```bash
npm install
npm run dev
```

Poi apri http://localhost:3000.

## Le sei sezioni

Un file per sezione, in `src/components/sections/`. Ogni sezione ha una propria
grafica illustrativa e un proprio fondo, così lo scorrimento ha un ritmo:

| #   | Sezione       | File          | Fondo                | Grafica                        |
| --- | ------------- | ------------- | -------------------- | ------------------------------ |
| 01  | Hero          | `hero.tsx`    | bianco con lavaggio verde | unità e documenti collegati |
| 02  | Il problema   | `problem.tsx` | scuro                | le fonti oggi scollegate       |
| 03  | Come funziona | `method.tsx`  | bianco appena velato | una mini-grafica per passaggio |
| 04  | Cosa collega  | `links.tsx`   | scuro con luce verde | la vista per apparecchiatura   |
| 05  | ASME e PED    | `scopes.tsx`  | bianco               | passaggi fatti contro da fare  |
| 06  | Contatti      | `contact.tsx` | scuro con luce verde | chiusura, email e telefono     |

### La hero

La composizione riprende il linguaggio della landing di Complaion, analizzata
nel browser e non da uno screenshot: titolo grande e centrato con interlinea
compressa, sottotitolo e azioni in asse, sfondo con lavaggio diagonale che si
spegne nel bianco, e i pannelli del prodotto che restano tagliati dal bordo
della finestra per invitare a scorrere. Testi, font, palette e logo restano
quelli di Tracciamy: della reference si riprende solo l'impostazione visiva.

### Le grafiche

Sono in `src/components/mock.tsx` (le primitive condivise) e dentro le singole
sezioni. Ciascuna risponde a una domanda precisa del testo che accompagna:
dove stanno oggi le informazioni, cosa entra nel sistema, come si aggancia un
certificato, cosa manca prima dei documenti, come si risale da una unità ai
suoi materiali, cosa esiste già per ASME e cosa va definito per PED.

**Sono esempi, non schermate reali.** I codici (`UN-0000`, `MAT-001`,
`CERT-0000`) sono fittizi, le etichette di stato sono qualitative e non
compare nessun numero, percentuale o indicatore di performance inventato. Ogni
pannello porta la didascalia definita in `site.ts` come `notaEsempio`.

## Modificare i contenuti

Tutti i testi stanno in `src/content/site.ts`, divisi per sezione. Non c'è copy
dentro i componenti.

## Logo

Il logo ufficiale è `public/tracciamy-logo.png`, ritagliato dal file fornito
senza ridisegnarlo. Lo usa il componente `src/components/logo.tsx`, in header e
footer. La favicon è `src/app/icon.png` e contiene **solo il simbolo**, senza la
scritta, come richiesto.

**Il logo va su fondo bianco.** La scritta è nera e il simbolo sfuma fino a un
verde molto scuro: su una superficie scura o verde sparirebbe. Per questo header
e footer sono bianchi. Se serve il logo anche sulle sezioni scure, va fornita la
**versione negativa ufficiale**: non l'ho generata io perché invertire i colori
avrebbe alterato l'identità del marchio.

## Palette — quattro colori

Variabili in `src/app/globals.css`.

| Variabile   | Valore    | Ruolo                                        |
| ----------- | --------- | -------------------------------------------- |
| `--green`   | `#00ee93` | colore del marchio: CTA, sezioni, dettagli   |
| `--dark`    | `#06231a` | testi, sezioni profonde                      |
| `--white`   | `#ffffff` | **unico** bianco del sito                    |
| `--neutral` | `#55665f` | testi secondari e bordi                      |

Il verde non è scelto a occhio: è campionato dal file originale del logo ed è
il colore pieno del puntino della «i» (2069 pixel di quel valore esatto).

Tutto il resto sono sfumature di questi quattro, calcolate con `color-mix`, non
colori nuovi. Due meritano una nota:

- `--green-ink` è lo stesso verde mescolato con lo scuro. Serve perché il verde
  del logo su bianco sta a 1,5:1 e come testo sarebbe illeggibile. Il verde
  pieno resta per i riempimenti e per i fondi scuri, dove il contrasto arriva a
  11:1.
- `--neutral-soft` è il neutro schiarito per i numeri grandi dei passaggi:
  discreto ma sopra il 3:1 richiesto.

I pulsanti verdi hanno testo scuro, come nel logo. Non esiste alcun azzurro.

Gli sfondi non sono mai tinte piatte: `.wash-hero` e `.wash-soft` per le
sezioni chiare, `.on-dark` e `.on-dark-glow` per quelle profonde, più `.trama`
per la trama diagonale appena percepibile. `.on-dark-glow` ha un
`background-color` pieno sotto i gradienti: senza, l'ultimo layer sarebbe
un'immagine e il testo bianco resterebbe su fondo trasparente.

## Tipografia

Una sola famiglia: **Manrope**, da `next/font`, pesi 400–800. Classi in
`globals.css`: `.display` (36→72px), `.h2` (31→46px), `.h3`, `.lede` (17→20px),
`.eyebrow`. Sono `clamp()`, quindi scalano senza breakpoint. `.spicca` mette in
verde una parola dentro un titolo.

## Animazioni

`src/components/reveal.tsx`, senza librerie: un IntersectionObserver aggiunge
`data-visible` quando l'elemento entra nel viewport, la transizione è in CSS.
`<Reveal cascata>` anima i figli uno dopo l'altro; la classe `.traccia` disegna
un filetto verde da sinistra.

Gli stati hover sono in `globals.css`: i pulsanti si sollevano di 2px, prendono
un alone verde e la freccia avanza; le card salgono di 4px con bordo verde; i
link di contatto hanno una sottolineatura verde che si estende.

Tutto si disattiva con `prefers-reduced-motion`, e chi ha JavaScript disattivato
vede comunque i contenuti (regola in `<noscript>` nel layout).

Nota: gli aloni decorativi usano `max-width`, non `overflow-x: hidden`
sull'`html`, che renderebbe la pagina un contenitore di scorrimento e
romperebbe l'header sticky.

## Contatti

Email, telefono e sede stanno in `src/content/site.ts` e compaiono nella hero,
nella sezione di chiusura e nel footer. I pulsanti aprono `mailto:` e `tel:`
reali: **non c'è nessun modulo di contatto**, perché non esiste ancora un
sistema di raccolta collegato e un form che non invia sarebbe peggio di nessun
form.

## Vincoli editoriali

Dal brief originale, ancora validi:

- **Nessuna UI inventata**: le grafiche sono schemi concettuali, mai finte
  schermate di prodotto.
- **Nessuna metrica o testimonianza** senza dati e permessi documentati.
- **Niente bollini di conformità** o icone che sembrino certificazioni
  rilasciate.
- **Formule da evitare**: «elimina gli errori», «garantisce conformità». Il
  controllo tecnico finale resta al fabbricante.
- Il sistema **non verifica da solo** la conformità dei certificati:
  l'estrazione è assistita e richiede conferma umana.

## Da completare

1. **Versione negativa del logo**, per usarlo su fondi scuri.
2. **Autorizzazione W&H** per nome e descrizione del caso (la nota in sezione 05
   la richiama già).
3. **Formulazione PED** da confermare con il referente tecnico.
4. **Pagina privacy**, se verrà aggiunto un modulo in futuro.

## Verifiche eseguite

Con Chrome headless su sei larghezze (360, 390, 820, 1024, 1280, 1440 px):

- nessun overflow orizzontale e nessun elemento fuori dallo schermo;
- header sticky funzionante a tutte le larghezze;
- tutti gli ingressi allo scroll scattano;
- nessun errore in console;
- un solo `h1`, gerarchia dei titoli senza salti;
- nessun link o pulsante privo di nome accessibile;
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
