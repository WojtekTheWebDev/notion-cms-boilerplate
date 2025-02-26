import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotionRenderer } from "../components/molecules/NotionRenderer";
import { getPageBlocks } from "@/lib/notion";
import { getMetadata } from "@/lib/metadata";
import { homeSlug } from "../constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getMetadata(slug);
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const blocks = await getPageBlocks(slug);

  if (!blocks) {
    return notFound();
  }

  return (
    <main className="content">
      {slug !== homeSlug && <Link className="p-4" href="/">Return to home page</Link>}
      <NotionRenderer blocks={blocks} />
    </main>
  );
}
