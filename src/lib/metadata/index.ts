import type { Metadata } from "next";
import { getPageMeta } from "@/lib/notion";

export const metaGenerator = "WojtekTheWebDev/notion-as-a-cms";

export const getMetadata = async (slug: string): Promise<Metadata> => {
  const meta = await getPageMeta(slug);

  if (!meta) {
    return {};
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.seoKeywords,
    icons: {
      icon: meta.icon || "/favicon.ico",
    },
    generator: metaGenerator,
  };
};
