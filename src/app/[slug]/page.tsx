import type { Metadata } from "next";
import { NotionRenderer } from "../components/molecules/NotionRenderer";
import { getPageBlocks, getPageMeta } from "../../lib/notion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const blocks = await getPageBlocks(slug);

  if (!blocks) {
    return <div>Page not found</div>;
  }

  return (
    <main className="content">
      <NotionRenderer blocks={blocks} />
    </main>
  );
}
