import { NotionRenderer } from "../components/NotionRenderer";
import { getPage, PageResponse } from "../../lib/notion";

interface Props {
  slug: string;
}

export default async function DynamicPage({ slug }: Props) {
  const pageResponse: PageResponse | null = await getPage(slug);

  if (!pageResponse) {
    return <div>Page not found</div>;
  }

  return (
    <div className="">
      <main className="">
        <NotionRenderer blocks={pageResponse.blocks} />
      </main>
      <footer className=""></footer>
    </div>
  );
}
