export function GET() {
  return new Response("v=MCPv1; k=ed25519; p=b/nK/N4mQYnS25LhzYM3xtNP3mCySING7pQiCKdThfw=", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
