import type { MetadataRoute } from "next";
import { personal } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: personal.website, changeFrequency: "monthly", priority: 1 }];
}
