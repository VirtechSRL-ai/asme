import type { MetadataRoute } from "next";
import { docsPath, siteUrl } from "../lib/discovery";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/certificazioni", docsPath].map((path) => ({ url: `${siteUrl}${path}` }));
}
