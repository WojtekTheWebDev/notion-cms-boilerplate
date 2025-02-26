import type { Metadata } from "next";
import DynamicPage from "./[slug]/page";
import { homeSlug } from "./constants";
import { getMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata(homeSlug);
}

export default function HomePage() {
  const params = Promise.resolve({ slug: homeSlug });
  return <DynamicPage params={params} />;
}
