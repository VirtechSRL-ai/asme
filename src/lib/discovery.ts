import { site } from "../content/site";

export const siteUrl = site.url;
export const productName = site.nome;
export const siteTitle = "Tracciamy | Tracciabilità dei materiali e fascicoli tecnici";
export const description = site.descrizione;
export const socialImage = "/tracciamy-logo.png";
const audience = "Produttori di componenti e apparecchiature certificate";
const keywords = ["tracciabilità dei materiali", "fascicolo tecnico"];
const features = [
  "Collegamento di distinte, componenti e certificati dei materiali",
  "Segnalazione delle informazioni e dei documenti mancanti",
  "Preparazione della documentazione per la verifica finale",
];
const contactEmail = site.contatti.email;
const demoPath = "/#contatti";

export const docsPath = "/docs";
export const profilePath = "/profilo.json";
export const openApiPath = "/openapi.json";
export const openApiType = "application/vnd.oai.openapi+json";
export const ardPath = "/.well-known/ard.json";
const virtechUrl = "https://www.virtechsrl.com";
const organizationId = `${virtechUrl}/#organization`;

export const profile = {
  product: {
    name: productName,
    website: `${siteUrl}/`,
    description,
    audience,
    features,
  },
  publisher: {
    name: "Virtech S.r.l.",
    website: `${virtechUrl}/`,
    portfolio: `${virtechUrl}/prodotti`,
    email: contactEmail,
  },
  demo: `${siteUrl}${demoPath}`,
  resources: [
    { label: "Normative e documenti coperti", url: `${siteUrl}/certificazioni` },
    { label: "Come funziona Tracciamy", url: `${siteUrl}/#applicativo` },
  ],
};

export const discoveryLinks = [
  `<${siteUrl}${ardPath}>; rel="ard"; type="application/ard+json"`,
  `<${siteUrl}${openApiPath}>; rel="service-desc"; type="${openApiType}"`,
  `<${siteUrl}${docsPath}>; rel="service-doc"`,
  `<${siteUrl}/index.md>; rel="alternate"; type="text/markdown"`,
].join(", ");

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Virtech",
      legalName: profile.publisher.name,
      url: profile.publisher.website,
      email: profile.publisher.email,
      sameAs: ["https://it.linkedin.com/company/virtechsrl"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: productName,
      url: profile.product.website,
      inLanguage: "it-IT",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: productName,
      url: profile.product.website,
      description,
      image: `${siteUrl}${socialImage}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "it-IT",
      keywords,
      featureList: features,
      audience: { "@type": "Audience", audienceType: audience },
      publisher: { "@id": organizationId },
    },
  ],
};

export const profileApiDescription = "API pubblica in sola lettura per consultare le informazioni sul prodotto.";
export const exampleRequest = `curl -fsS ${siteUrl}${profilePath}`;

const text = { type: "string" };
const uri = { type: "string", format: "uri" };

const openApi = {
  openapi: "3.1.0",
  info: {
    title: `API del profilo ${productName}`,
    description: profileApiDescription,
    version: "1.0.0",
  },
  servers: [{ url: siteUrl }],
  externalDocs: { url: `${siteUrl}${docsPath}` },
  paths: {
    [profilePath]: {
      get: {
        operationId: "getProductProfile",
        summary: `Leggi il profilo pubblico di ${productName}`,
        description: "Restituisce descrizione, destinatari, funzionalità e riferimenti ufficiali.",
        security: [],
        responses: {
          "200": {
            description: "Profilo pubblico del prodotto",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Profile" } },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Profile: {
        type: "object",
        required: ["product", "publisher", "demo", "resources"],
        properties: {
          product: {
            type: "object",
            required: ["name", "website", "description", "audience", "features"],
            properties: { name: text, website: uri, description: text, audience: text, features: { type: "array", items: text } },
          },
          publisher: {
            type: "object",
            required: ["name", "website", "portfolio", "email"],
            properties: { name: text, website: uri, portfolio: uri, email: { type: "string", format: "email" } },
          },
          demo: uri,
          resources: {
            type: "array",
            items: { type: "object", required: ["label", "url"], properties: { label: text, url: uri } },
          },
        },
      },
    },
  },
};

export function getProfile() {
  return Response.json(profile);
}

export function getOpenApi() {
  return Response.json(openApi, { headers: { "Content-Type": openApiType } });
}

export function getArd() {
  return Response.json({
    entries: [{
      identifier: `urn:air:${new URL(siteUrl).hostname}:api:profilo-prodotto`,
      displayName: `Profilo di ${productName}`,
      description: profileApiDescription,
      type: openApiType,
      url: `${siteUrl}${openApiPath}`,
      representativeQueries: [
        `Che cos'è ${productName} e a chi si rivolge?`,
        `Che cosa si può fare con ${productName}?`,
        `Come si richiede una demo di ${productName}?`,
      ],
    }],
  }, { headers: { "Content-Type": "application/ard+json" } });
}

const resourceLinks = profile.resources.map(({ label, url }) => `- [${label}](${url})`);

export function getHomepageMarkdown() {
  const lines = [
    `# ${productName}`,
    "",
    `> ${description}`,
    "",
    `Sviluppato da [Virtech S.r.l.](${profile.publisher.website}).`,
    "",
    "## A chi si rivolge",
    "",
    `${audience}.`,
    "",
    "## Funzionalità",
    "",
    ...features.map((feature) => `- ${feature}`),
    "",
    "Tracciamy prepara la documentazione. Le certificazioni vengono rilasciate dagli enti competenti.",
    "",
    "## Risorse",
    "",
    ...resourceLinks,
    `- [Richiedi una demo](${profile.demo})`,
    `- [Documentazione API del profilo](${siteUrl}${docsPath})`,
    `- [Portafoglio Virtech](${profile.publisher.portfolio})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", Link: `<${siteUrl}/>; rel="canonical"` },
  });
}

export function getLlms() {
  const lines = [
    `# ${productName}`,
    "",
    `> ${description}`,
    "",
    "## Profilo ufficiale",
    "",
    `- [Scheda prodotto](${siteUrl}/index.md): destinatari, funzionalità e risorse.`,
    `- [Documentazione API](${siteUrl}${docsPath}): accesso al profilo pubblico in sola lettura.`,
    `- [Profilo JSON](${siteUrl}${profilePath}): dati pubblici sul prodotto.`,
    `- [Specifica OpenAPI](${siteUrl}${openApiPath})`,
    "",
    "## Demo e risorse",
    "",
    `- [Richiedi una demo](${profile.demo})`,
    ...resourceLinks,
    `- [Portafoglio Virtech](${profile.publisher.portfolio})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
