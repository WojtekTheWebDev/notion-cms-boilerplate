import type { Metadata } from "next";
import { NotionRenderer } from "../components/molecules/NotionRenderer";
import { getPageBlocks, getPageMeta } from "../../lib/notion";

interface Props {
  slug: string;
}

export async function generateMetadata({ slug }: Props): Promise<Metadata> {
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

export default async function DynamicPage({ slug }: Props) {
  const blocks = await getPageBlocks(slug);

  if (!blocks) {
    return <div>Page not found</div>;
  }

  return (
    <div className="">
      <main className="">
        <NotionRenderer blocks={blocks} />
      </main>
      <footer className=""></footer>
    </div>
  );
}
