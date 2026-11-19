import type { MetadataRoute } from "next";
import { docsPath, mcpDocsPath, siteUrl } from "../lib/discovery";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/certificazioni", docsPath, mcpDocsPath].map((path) => ({ url: `${siteUrl}${path}` }));
}
