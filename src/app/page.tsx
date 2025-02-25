import type { Metadata } from "next";
import DynamicPage from "./[slug]/page";
import { getMetadata } from "@/lib/metadata";

const slug = "home";

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata(slug);
}

export default function HomePage() {
  const params = Promise.resolve({ slug });
  return <DynamicPage params={params} />;
}
