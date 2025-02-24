import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { richTextToPlainText } from "../../lib/notion";

interface NotionRendererProps {
  blocks: BlockObjectResponse[];
}

export const NotionRenderer = ({ blocks }: NotionRendererProps) => {
  return (
    <div className="p-4 space-y-4">
      {blocks.map((block) => {
        if (!("type" in block)) return null;

        const { id, type } = block;
        let content = "";
        // let content = richTextToPlainText(block[type].rich_text);

        switch (type) {
          case "heading_1":
            content = richTextToPlainText(block[type].rich_text);
            return (
              <h1 key={id} className="text-2xl font-bold">
                {content}
              </h1>
            );

          case "heading_2":
            content = richTextToPlainText(block[type].rich_text);
            return (
              <h2 key={id} className="text-2xl font-bold">
                {content}
              </h2>
            );

          case "heading_3":
            content = richTextToPlainText(block[type].rich_text);
            return (
              <h3 key={id} className="text-2xl font-bold">
                {content}
              </h3>
            );

          case "paragraph":
            content = richTextToPlainText(block[type].rich_text);
            return (
              <p key={id} className="text-base">
                {content}
              </p>
            );

          case "bulleted_list_item":
            content = richTextToPlainText(block[type].rich_text);
            return (
              <li key={id} className="list-disc ml-6">
                {content}
              </li>
            );

          case "numbered_list_item":
            content = richTextToPlainText(block[type].rich_text);
            return (
              <li key={id} className="list-decimal ml-6">
                {content}
              </li>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
