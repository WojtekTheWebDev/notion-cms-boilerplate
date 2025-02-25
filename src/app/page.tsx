import DynamicPage from "@/app/[slug]/page";
import { getPageMeta } from "@/lib/notion";
import type { Metadata } from "next";

const slug = "home";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMeta(slug);

  if (!meta) {
    return {};
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.seoKeywords,
  };
}

export default function HomePage() {
  const params = Promise.resolve({ slug });
  return <DynamicPage params={params} />;
}
