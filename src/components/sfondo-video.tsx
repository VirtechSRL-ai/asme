/**
 * Il filmato di fondo della hero.
 *
 * È un componente server: nessuno stato, nessun effetto, solo markup. La
 * correzione cromatica verso la palette Tracciamy è stata fatta in fase di
 * codifica del file, non con un filtro CSS, perché un filtro a schermo costa
 * a ogni fotogramma e dà una resa più sporca.
 *
 * **L'immagine di posa non va messa come sfondo del contenitore.** Il <video>
 * è semitrasparente, quindi uno sfondo sotto di lui non resta nascosto: si
 * somma al filmato e si vede il primo fotogramma, fermo, mescolato alle
 * immagini in movimento. Sembra un doppione. La posa la gestisce l'attributo
 * `poster`, che il browser toglie da solo appena ha il primo fotogramma, e la
 * regola CSS per `prefers-reduced-motion`, dove il <video> viene rimosso e lo
 * sfondo prende il suo posto senza sovrapporsi a niente.
 *
 * `aria-hidden` e `pointer-events: none`: è decorazione, non deve finire fra
 * i contenuti letti né intercettare i clic sui pulsanti che ci stanno sopra.
 */
export function SfondoVideo() {
  return (
    <div aria-hidden="true" className="scena-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-tracciamy.webp"
        tabIndex={-1}
      >
        <source src="/hero-tracciamy.webm" type="video/webm" />
        <source src="/hero-tracciamy.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
