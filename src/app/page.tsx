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
    <div className="">
      <main className="">
        <NotionRenderer page={page} />
      </main>
      <footer className=""></footer>
    </div>
  );
}
