import { Logo } from "./logo";

/**
 * Apertura del sito: il marchio compare, una traccia luminosa lo attraversa e
 * il velo si solleva sulla pagina. Dura circa tre secondi.
 *
 * Non è un componente client e non usa stato: il velo è già nel markup e tutta
 * la sequenza è in CSS. A decidere se mostrarlo è lo script in `<head>` del
 * layout, che legge sessionStorage prima del primo paint e marca l'elemento
 * `<html>`: così alla seconda visita il velo non lampeggia nemmeno per un
 * fotogramma, e non riparte a ogni cambio di pagina.
 *
 * Conseguenze volute:
 * - il contenuto del sito è montato e leggibile sotto il velo, quindi
 *   l'animazione non ritarda nulla;
 * - senza JavaScript il velo compare e se ne va lo stesso, perché l'uscita è
 *   un'animazione CSS con `forwards`;
 * - con `prefers-reduced-motion` resta una comparsa brevissima, senza moto;
 * - a fine animazione l'elemento diventa `visibility: hidden`, quindi non
 *   intercetta più clic né finisce nel percorso di tabulazione.
 */
export function Intro() {
  return (
    <div className="sipario" role="presentation" aria-hidden="true">
      <span className="sipario-luce" />
      <span className="sipario-marchio">
        <Logo altezza={44} variante="chiaro" priority />
        <span className="sipario-traccia" />
      </span>
    </div>
  );
}

/** Letto in `<head>`: evita che il velo riparta dopo la prima volta. */
export const SCRIPT_INTRO = `try{var k='tracciamy:intro';if(sessionStorage.getItem(k)){document.documentElement.setAttribute('data-intro','vista')}else{sessionStorage.setItem(k,'1')}}catch(e){}`;
