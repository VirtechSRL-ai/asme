import type { MetadataRoute } from "next";
import { docsPath, mcpDocsPath, certificateTraceabilityPath, siteUrl } from "../lib/discovery";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/certificazioni", certificateTraceabilityPath, docsPath, mcpDocsPath].map((path) => ({ url: `${siteUrl}${path}` }));
}
