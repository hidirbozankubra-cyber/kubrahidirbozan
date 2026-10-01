import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/hakkimda", "/projeler", "/iletisim"].map((p) => ({
    url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7,
  }));
}
