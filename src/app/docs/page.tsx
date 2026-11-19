import Link from "next/link";
import { docsPath, exampleRequest, mcpDocsPath, mcpPath, openApiPath, productName, profileApiDescription, profilePath, siteUrl, versionedProfilePath } from "../../lib/discovery";

const title = `Documentazione API e MCP di ${productName}`;

export const metadata = {
  title,
  description: profileApiDescription,
  alternates: { canonical: `${siteUrl}${docsPath}`, types: { "text/markdown": "/docs.md" } },
};

export default function ApiDocs() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-12 sm:px-8 sm:py-20 [&_a]:underline [&_a]:underline-offset-4" id="contenuto" tabIndex={-1}>
      <Link href="/">Torna a {productName}</Link>
      <h1 className="my-5 text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
      <p>{profileApiDescription} La consultazione è senza credenziali.</p>
      <h2 className="mt-8 mb-2 text-xl font-bold">Leggere il profilo</h2>
      <p>
        <code>GET {versionedProfilePath}</code> restituisce un oggetto JSON con la descrizione del prodotto,
        i destinatari, le funzionalità, i riferimenti Virtech e il link per richiedere una demo.
      </p>
      <pre className="my-4 overflow-x-auto rounded-xl border border-bordo p-4 text-sm"><code className="language-bash">{exampleRequest}</code></pre>
      <ul className="list-disc space-y-2 ps-5">
        <li><a href={versionedProfilePath}>Profilo del prodotto in JSON</a></li>
        <li><a href={openApiPath}>Specifica OpenAPI</a></li>
      </ul>
      <h2 className="mt-8 mb-2 text-xl font-bold">Collegare un agente via MCP</h2>
      <p>Nel tuo client MCP configura l’indirizzo qui sotto usando il trasporto Streamable HTTP. Gli strumenti sono pubblici e in sola lettura.</p>
      <pre className="my-4 overflow-x-auto rounded-xl border border-bordo p-4 text-sm"><code>{`${siteUrl}${mcpPath}`}</code></pre>
      <ul className="list-disc space-y-2 ps-5">
        <li><code>get_product_profile</code> mostra il profilo e le funzionalità.</li>
        <li><code>find_product_resources</code> cerca le risorse ufficiali per parola chiave.</li>
        <li><code>get_demo_link</code> indica dove richiedere una demo.</li>
      </ul>
      <p className="mt-3"><Link href={mcpDocsPath}>Guida al server MCP di {productName} con esempi</Link></p>
      <h2 className="mt-8 mb-2 text-xl font-bold">Versione API</h2>
      <p>L’API corrente è v1. L’indirizzo <a href={profilePath}>{profilePath}</a> continua a restituire la stessa scheda.</p>
      <p className="mt-3">
        Le modifiche incompatibili usano un nuovo percorso di versione. La documentazione e l’header <code>Deprecation</code>
        segnalano le dismissioni. L’header <code>Sunset</code> comunica la data di ritiro quando è programmata.
      </p>
    </main>
  );
}
