import Link from "next/link";
import { ViewTransition } from "react";
import { ancora, fascicoli, inEvidenza, type Certificazione } from "@/content/certificazioni";
import { Sigillo, SigilloMini } from "./marchio";
import { Entra } from "./entra";
import { APRI_CERTIFICAZIONI } from "./scena";

/** Le sigle brevi delle voci fuori selezione: i dischi del gruppo «altre» */
const anteprimaAltre = fascicoli.filter((c) => c.sigla.length <= 4).slice(0, 3);

/**
 * Un sigillo della fascia. Solo la prima copia porta il nome di
 * transizione: due elementi con lo stesso nome annullerebbero il cambio di
 * scena. La copia del nastro mobile resta fuori dalla tastiera.
 */
function Medaglia({ cert, copia = false }: { cert: Certificazione; copia?: boolean }) {
  const sigillo = <Sigillo cert={cert} className="sigillo-medaglia" />;
  return (
    <li>
      <Link
        href={`/certificazioni#${ancora(cert)}`}
        transitionTypes={APRI_CERTIFICAZIONI}
        className="cert-medaglia"
        tabIndex={copia ? -1 : undefined}
      >
        {copia ? (
          sigillo
        ) : (
          <ViewTransition
            name={`sigillo-${ancora(cert)}`}
            share="sigillo-condiviso"
            default="none"
          >
            {sigillo}
          </ViewTransition>
        )}
        {/* Il tipo è già inciso nel sigillo: sotto, il nome per esteso */}
        <span className="cert-medaglia-nome" aria-hidden="true">
          {cert.estesa ?? cert.nome}
        </span>
        <span className="sr-only">{cert.nome}</span>
      </Link>
    </li>
  );
}

/**
 * Le cinque certificazioni come sigilli distinti, distanziati in una
 * composizione centrata; a destra il richiamo «E molte altre», staccato e
 * senza contenitore. Su telefono i sigilli scorrono in un nastro continuo,
 * come la fila di loghi di Complaion: stessa velocità, stessa spaziatura,
 * stessa dissolvenza ai bordi. Il nastro è fatto di due copie identiche:
 * scorrendo di metà della sua larghezza il giro si chiude senza stacco.
 */
export function CertificazioniPreview({ intro = true }: { intro?: boolean }) {
  return (
    <div className="cert-preview">
      {/* Sulla pagina Certificazioni l'etichetta duplicherebbe il titolo
          che sta subito sopra: lì la composizione parla da sola. */}
      {intro && (
        <div className="cert-preview-intro">
          <span>Normative, qualifiche e fascicoli tecnici</span>
        </div>
      )}
      <div className="cert-composizione">
        <div className="cert-nastro-finestra">
          <div className="cert-nastro">
            {/* I sigilli sono gli stessi oggetti sulla home e sulla pagina
                dedicata: nel cambio di scena non spariscono, scivolano nella
                nuova posizione mentre la pagina attorno cambia. */}
            <Entra cascata continuaDaNavigazione as="ul" className="cert-medaglie">
              {inEvidenza.map((cert) => (
                <Medaglia key={cert.sigla} cert={cert} />
              ))}
            </Entra>
            <ul className="cert-medaglie cert-medaglie-copia" aria-hidden="true">
              {inEvidenza.map((cert) => (
                <Medaglia key={cert.sigla} cert={cert} copia />
              ))}
            </ul>
          </div>
        </div>

        {/* Solo informativo: non è un link né un pulsante */}
        <Entra ritardo={450} continuaDaNavigazione className="cert-altre">
          <ViewTransition name="sigilli-altre" share="sigillo-condiviso" default="none">
            <span className="cert-gruppo" aria-hidden="true">
              {anteprimaAltre.map((cert) => (
                <SigilloMini key={cert.sigla} sigla={cert.sigla} />
              ))}
              <SigilloMini sigla={`+${fascicoli.length}`} conto />
            </span>
          </ViewTransition>
          <span className="cert-altre-testo">
            E molte altre
            <span className="sr-only">: {fascicoli.length} ulteriori normative e documenti</span>
          </span>
        </Entra>
      </div>
    </div>
  );
}
