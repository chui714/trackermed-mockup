// src/app/sitemap.ts

import type { MetadataRoute } from "next";

import { siteConfig, sitePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}