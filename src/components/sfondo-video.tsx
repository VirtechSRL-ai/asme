/**
 * Il filmato di fondo della hero.
 *
 * È un componente server: nessuno stato, nessun effetto, solo markup. La
 * correzione cromatica verso la palette Tracciamy è stata fatta in fase di
 * codifica del file, non con un filtro CSS, perché un filtro a schermo costa
 * a ogni fotogramma e dà una resa più sporca.
 *
 * L'immagine di posa sta sul contenitore come sfondo: così si vede prima che
 * il filmato arrivi, se la riproduzione non parte, e con `prefers-reduced-
 * motion`, dove il <video> viene tolto dal rendering in CSS. In nessuno di
 * questi casi la pagina cambia altezza, perché il contenitore è in posizione
 * assoluta.
 *
 * `aria-hidden` e `pointer-events: none`: è decorazione, non deve finire fra
 * i contenuti letti né intercettare i clic sui pulsanti che ci stanno sopra.
 */
export function SfondoVideo() {
  return (
    <div
      aria-hidden="true"
      className="scena-video"
      style={{ backgroundImage: "url(/hero-tracciamy.webp)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-tracciamy.webp"
        tabIndex={-1}
      >
        <source src="/hero-tracciamy.webm" type="video/webm" />
        <source src="/hero-tracciamy.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
