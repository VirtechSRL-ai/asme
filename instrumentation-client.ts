import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (!projectToken || !host) {
  if (process.env.NODE_ENV === "development") {
    const missingVariable = !projectToken
      ? "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN"
      : "NEXT_PUBLIC_POSTHOG_HOST";

    // Avvisa senza lanciare: un errore non gestito qui ferma il JavaScript
    // della pagina prima dell'idratazione, e i contenuti animati (che partono
    // da opacità zero) non compaiono mai. Il sito in locale risultava vuoto.
    console.error(
      `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`
    );
  }
} else {
  posthog.init(projectToken, {
    api_host: host,
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
}
