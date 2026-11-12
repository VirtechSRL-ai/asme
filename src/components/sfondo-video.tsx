/**
 * Il filmato di fondo di una hero.
 *
 * È un componente server: nessuno stato, nessun effetto, solo markup. La
 * correzione cromatica verso la palette Tracciamy è stata fatta in fase di
 * codifica dei file, non con un filtro CSS, perché un filtro a schermo costa
 * a ogni fotogramma e dà una resa più sporca. Il filmato della pagina
 * certificazioni è stato trattato con lo stesso criterio di quello della
 * home (luminosità alzata, saturazione ridotta, gamma morbida), così le due
 * pagine appartengono alla stessa fotografia.
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

const FILMATI = {
  home: {
    webm: "/hero-tracciamy.webm",
    mp4: "/hero-tracciamy.mp4",
    posa: "/hero-tracciamy.webp",
    classe: "",
  },
  certificazioni: {
    webm: "/certificazioni/onde.webm",
    mp4: "/certificazioni/onde.mp4",
    posa: "/certificazioni/onde.jpg",
    // Sposta il fuoco della maschera: qui la composizione è centrata, non
    // sbilanciata a sinistra come nella hero della home.
    classe: "scena-video-cert",
  },
} as const;

export function SfondoVideo({ variante = "home" }: { variante?: keyof typeof FILMATI }) {
  const filmato = FILMATI[variante];

  return (
    <div aria-hidden="true" className={`scena-video ${filmato.classe}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={filmato.posa}
        tabIndex={-1}
      >
        <source src={filmato.webm} type="video/webm" />
        <source src={filmato.mp4} type="video/mp4" />
      </video>
    </div>
  );
}
