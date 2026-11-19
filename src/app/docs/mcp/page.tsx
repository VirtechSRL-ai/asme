import Link from "next/link";
import { docsPath, mcpCardPath, mcpDocsPath, mcpPath, productName, siteUrl } from "../../../lib/discovery";

const title = "Server MCP di Tracciamy";
const description = "Collega un agente a Tracciamy per consultare il profilo della piattaforma di tracciabilità industriale, trovare le normative coperte e ottenere il link alla demo.";
const canonical = `${siteUrl}${mcpDocsPath}`;
const endpoint = `${siteUrl}${mcpPath}`;
const searchExample = { name: "find_product_resources", arguments: { query: "normative", limit: 3 } };

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", title, description, url: canonical },
};

export default function McpDocs() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-12 leading-relaxed sm:px-8 sm:py-20 [&_a]:underline [&_a]:underline-offset-4" id="contenuto" tabIndex={-1}>
      <Link href={docsPath}>Documentazione API e MCP di {productName}</Link>
      <h1 className="my-5 text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
      <p>{description}</p>

      <h2 className="mt-8 mb-2 text-xl font-bold">Configurare la connessione</h2>
      <p>Aggiungi questo URL come server remoto nel tuo client MCP e scegli il trasporto Streamable HTTP. La connessione al profilo pubblico è in sola lettura e non richiede credenziali.</p>
      <pre className="my-4 overflow-x-auto rounded-xl border border-bordo p-4 text-sm"><code>{endpoint}</code></pre>
      <p><a href={mcpCardPath}>Scheda del server in formato JSON</a></p>

      <h2 className="mt-8 mb-2 text-xl font-bold">Strumenti disponibili</h2>
      <ul className="list-disc space-y-2 ps-5">
        <li><code>get_product_profile</code> restituisce destinatari, funzionalità e riferimenti ufficiali.</li>
        <li><code>find_product_resources</code> cerca tra le risorse pubbliche. Vuole una parola chiave in <code>query</code> e accetta un <code>limit</code> facoltativo da 1 a 8.</li>
        <li><code>get_demo_link</code> restituisce la pagina in cui richiedere o provare una demo.</li>
      </ul>

      <h2 className="mt-8 mb-2 text-xl font-bold">Esempio di ricerca</h2>
      <p>Trova la pagina delle normative e dei documenti coperti da Tracciamy per le certificazioni industriali.</p>
      <pre className="my-4 overflow-x-auto rounded-xl border border-bordo p-4 text-sm"><code>{JSON.stringify(searchExample, null, 2)}</code></pre>
    </main>
  );
}
