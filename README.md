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

Un file per sezione, in `src/components/sezioni/`:

| #   | Sezione         | File              | Composizione                                              |
| --- | --------------- | ----------------- | --------------------------------------------------------- |
| 01  | Hero            | `hero.tsx`        | titolo centrato, due pannelli sfalsati e un cartellino che li attraversa |
| --  | Transizione     | `transizione.tsx` | il solo simbolo del marchio fra hero e Ottieni            |
| 02  | Ottieni         | `ottieni.tsx`     | testo stretto a sinistra, quattro fasi su un piano tinto a destra |
| 03  | Mantieni        | `mantieni.tsx`    | lastra scura: testo in alto, flusso orizzontale a tutta misura |
| 04  | L'applicativo   | `applicativo.tsx` | misura più larga, dashboard a sinistra, testo a destra    |
| 05  | Per chi produce | `pubblico.tsx`    | seconda lastra scura, solo tipografia, luce dall'angolo opposto |
| 06  | Settori         | `settori.tsx`     | griglia editoriale a dodici colonne, card 5+4+3 / 4+4+4   |
| 07  | Team            | `team.tsx`        | rotaia continua con tre nodi e numeri tipografici         |
| 08  | Contatti        | `site-footer.tsx` | chiusura, recapiti e logo Virtech                         |

Nessuna sezione ripete lo schema della precedente: cambiano l'allineamento, la
misura, il rapporto fra testo e interfaccia e la profondità del fondo. Due
lastre scure spezzano la sequenza luminosa, e la loro luce arriva da angoli
opposti perché non si somiglino.

L'ordine risponde, una domanda alla volta, a ciò che il visitatore si chiede:
che cos'è, che cosa ottengo, come restano collegate le informazioni, com'è
fatto il prodotto, a chi serve, per quale settore, chi mi accompagna, come
chiedere una demo.

I glifi dei sei settori sono in `src/components/glifi.tsx`: segni astratti
disegnati sulle forme ricorrenti di ciascun ambito (un recipiente, uno skid, uno
scambiatore), non icone generiche né fotografie di repertorio.

Nei testi del percorso di adozione il prodotto era scritto «Tracciami»: corretto
in «Tracciamy», l'unica modifica applicata. Il passaggio dal «tu» della
descrizione al «voi» delle fasi è voluto ed è stato mantenuto.

Le colonne si alternano fra una sezione e l'altra per dare ritmo allo
scorrimento.

**Il fondale è uno solo per tutta la pagina.** La classe `.ambiente` su `<main>`
colloca nove luci verdi in percentuale sull'altezza totale, una per zona, così
le sfumature attraversano i confini invece di interrompersi a ogni stacco; le
sezioni chiare non hanno fondo proprio. Se cambia l'ordine delle sezioni vanno
riviste quelle percentuali, altrimenti le luci finiscono dietro le lastre scure
e si perdono.

Sopra l'ambiente, la hero ha il suo `.velo-hero`: una zona più intensa, con il
bordo inferiore mascherato in dissolvenza, che dà alla prima schermata la
diagonale luminosa senza tagliarla via dal resto. L'intestazione resta
trasparente finché non si scorre, altrimenti quella luce si fermerebbe contro
una fascia piena.

A rompere la sequenza luminosa sono le due lastre scure, `.lastra-scura` per
"Mantieni" e la stessa con `.lastra-rovescia` per "Per chi produce": angoli
arrotondati, luce da angoli opposti, e nessuna banda a tutta larghezza che
taglierebbe la pagina in due. Le dashboard poggiano su `.scena`, un piano tinto
che le tiene nella composizione invece di lasciarle appoggiate sul nulla.
Nessuna texture geometrica: la profondità viene da luce, colore e ombre.

Il verde ufficiale evidenzia una parola o una breve espressione nei titoli, in
posizioni diverse da sezione a sezione, e una sezione resta senza: deve restare
selettivo. Sui fondi profondi si usa il verde pieno, che arriva a 12:1; sui fondi
chiari la sua versione scurita, perché il verde di marca su chiaro sta a 1,4:1 e
come testo sarebbe illeggibile.

### Le dashboard

Sono rappresentazioni illustrative, non screenshot del prodotto. I codici
(`CM-0042`, `UN-0016`, `CP-0231`, `CERT-0016`) sono fittizi e ogni pannello
porta la nota «Dati dimostrativi, non statistiche reali». I contenuti stanno in
`src/content/site.ts`, separati dalla grafica: sostituirli con dati veri o con
uno screenshot non richiede di toccare i componenti.

Nessuna dashboard dichiara funzioni non confermate — niente esportazioni
automatiche, firme digitali, integrazioni o intelligenza artificiale — e la
verifica finale resta sempre in capo al team, mai al software.

Il claim del 90% nella hero è riportato come affermazione commerciale, senza
studi o prove a supporto.

## Identità visiva

### Logo

Gli asset vengono dal documento di brand identity, estratti senza ridisegnare
nulla:

- `public/tracciamy-logo.png` — simbolo verde e scritta scura, per fondi chiari
- `public/tracciamy-logo-chiaro.png` — stessa forma, scritta chiara, per i fondi
  scuri: cambia solo il colore della scritta, come la tavola su fondo scuro del
  documento di marca
- `public/tracciamy-simbolo.png` — solo il simbolo, dal canale alfa originale
- `src/app/icon.png` — favicon 512×512, **solo il simbolo**, fondo realmente
  trasparente: nessun rettangolo bianco, nessuna cornice

Li usa `src/components/logo.tsx`. Per sostituirli basta rimpiazzare i file
mantenendo le proporzioni dichiarate nel componente.

### Palette

Tre colori, dal documento di marca. Variabili in `src/app/globals.css`:

| Variabile  | Valore    | Ruolo                                   |
| ---------- | --------- | --------------------------------------- |
| `--verde`  | `#6cea9b` | colore del marchio: CTA, accenti, aloni |
| `--scuro`  | `#001011` | testi e sezioni profonde                |
| `--chiaro` | `#f3f9ff` | fondo di base                           |

Il simbolo del logo usa un verde più saturo (`#00ea90`): resta dentro l'asset e
non è replicato nella palette, perché il logo non va ricolorato.

Tutto il resto sono sfumature calcolate con `color-mix`, non colori nuovi. Due
meritano una nota: `--verde-testo` è il verde mescolato con lo scuro, perché il
verde di marca su fondo chiaro sta a 1,4:1 e come testo sarebbe illeggibile; le
pastiglie di stato hanno percentuali di tinta volutamente basse, oltre le quali
il testo scende sotto i 4,5:1.

### Tipografia

Una sola famiglia: **Manrope**, da `next/font`, pesi 400–800. Classi in
`globals.css`: `.titolo-hero`, `.titolo-sezione`, `.titolo-minore`,
`.descrizione`, `.occhiello`, `.etichetta-dato`. Sono `clamp()`, quindi scalano
senza breakpoint.

## Animazione di apertura

`src/components/intro.tsx`. Il marchio compare, una traccia luminosa lo
attraversa e il velo si solleva: circa tre secondi.

Non è un componente client e non usa stato React. Il velo è già nel markup e
tutta la sequenza è in CSS; a decidere se mostrarlo è un piccolo script in
`<head>` che legge `sessionStorage` prima del primo paint e marca `<html>`.
Conseguenze volute: parte una sola volta per sessione, non riparte ai cambi di
pagina, non lampeggia alla seconda visita, il contenuto del sito è già montato
sotto quindi non ritarda nulla, e senza JavaScript il velo se ne va comunque
perché l'uscita è un'animazione con `forwards`. Con `prefers-reduced-motion`
resta una comparsa brevissima.

`<html>` ha `suppressHydrationWarning` proprio perché quello script lo modifica
prima che React idrati: la differenza fra server e client è voluta.

## Movimento

`src/components/entra.tsx` fa comparire i contenuti allo scorrimento con un
IntersectionObserver e transizioni CSS, senza librerie.
`src/components/inclina.tsx` dà alla dashboard dell'applicativo una leggera
inclinazione che segue il mouse: agisce solo su `transform`, si attiva soltanto
dove esiste un vero hover — quindi sui dispositivi touch il pannello resta fermo
e leggibile — e rispetta `prefers-reduced-motion`.

Gli hover dei bottoni sono in `globals.css`: sollevamento di 2px, alone verde e
freccia che avanza. Le card dei settori sollevano la superficie, riempiono di
verde la piastra del glifo e spostano la luce d'angolo. I raccordi dei diagrammi
si disegnano all'ingresso della sezione (`.linea-flusso` in verticale,
`.linea-flusso-x` per la rotaia del percorso di adozione).

Nota tecnica: `.respiro` anima una scala del 3%, quindi un elemento che la usa
non deve avere `w-full`, o sui telefoni esce dal viewport e apre uno
scorrimento orizzontale.

Nota tecnica: gli aloni decorativi usano `max-width`, non `overflow-x: hidden`
sull'`html`, che renderebbe la pagina un contenitore di scorrimento e
romperebbe l'header sticky. Le griglie usano `grid-cols-1` esplicito, altrimenti
la colonna si dimensiona sul contenuto minimo del figlio e allarga la pagina sui
telefoni.

## Navigazione e contatti

Tutti i pulsanti hanno una destinazione reale: «Contattaci» porta alla sezione
finale, «Cosa ottieni» scorre alla sezione Ottieni, email e telefono aprono
`mailto:` e `tel:`. **Non c'è un modulo di contatto**: non esiste un sistema di
raccolta collegato, e un form che non invia sarebbe peggio di nessun form.

- info@virtechsrl.com
- +39 333 866 5089
- Erbusco, Brescia, Italia
- https://www.virtechsrl.com/ — anche dal logo Virtech nel footer

## Verifiche eseguite

Con Chrome headless su sei larghezze (360, 390, 820, 1024, 1280, 1440 px):

- nessun overflow orizzontale;
- header sticky funzionante a tutte le larghezze;
- tutti gli ingressi allo scroll scattano;
- nessun errore in console, nessun avviso di idratazione;
- un solo `h1`, gerarchia dei titoli senza salti;
- nessun link o pulsante privo di nome accessibile, nessuna immagine senza alt;
- nessun testo sotto il contrasto minimo WCAG AA, compresi i colori calcolati
  con `color-mix`;
- favicon servita e realmente trasparente.

## Comandi

```bash
npm run dev     # sviluppo in locale
npm run build   # build di produzione
npm run start   # avvia la build di produzione
npm run lint    # controllo del codice
```

## Pubblicazione

Il progetto è collegato a Vercel (`vercel --prod`) e al dominio
www.tracciamy.it.
