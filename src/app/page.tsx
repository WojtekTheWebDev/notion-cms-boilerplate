import { Client } from "@notionhq/client";
import { NotionRenderer } from "./components/NotionRenderer";

export default async function Home() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const page = await notion.blocks.children.list({
    block_id: String(process.env.NOTION_PAGE_ID),
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <NotionRenderer page={page} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
