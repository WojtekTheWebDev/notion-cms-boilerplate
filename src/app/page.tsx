import DynamicPage from "@/app/[slug]/page";

export default function HomePage() {
  const slug = "home";
  return <DynamicPage slug={slug} />;
}
