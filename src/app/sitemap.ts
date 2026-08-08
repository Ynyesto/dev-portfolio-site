import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const pages = [
    "/",
    "/portfolio/bitchill",
    "/portfolio/ethglobal-lisbon",
    "/portfolio/ethglobal-bangkok",
    "/portfolio/departedeb",
  ];
  return pages.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
