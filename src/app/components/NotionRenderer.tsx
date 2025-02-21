/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

interface NotionRendererProps {
  page: ListBlockChildrenResponse;
}

type BlockType<T extends string> = {
  [key in T]: {
    rich_text: Array<{ plain_text: string }>;
  };
};

export const NotionRenderer = ({ page }: NotionRendererProps) => {
  if (!page || !page.results) return <p>No content available.</p>;

  return (
    <div className="p-4 space-y-4">
      {page.results.map((block) => {
        if (!("type" in block)) return null;

        const { id, type } = block;
        const castedBlock = block as unknown as BlockType<typeof type>;
        const content =
          castedBlock[type]?.rich_text
            .map((textObj: { plain_text: string }) => textObj.plain_text)
            .join(" ") || "";

        switch (type) {
          case "heading_1":
            return (
              <h1 key={id} className="text-2xl font-bold">
                {content}
              </h1>
            );

          case "heading_2":
            return (
              <h2 key={id} className="text-2xl font-bold">
                {content}
              </h2>
            );

          case "heading_3":
            return (
              <h3 key={id} className="text-2xl font-bold">
                {content}
              </h3>
            );

          case "paragraph":
            return (
              <p key={id} className="text-base">
                {content}
              </p>
            );

          case "bulleted_list_item":
            return (
              <li key={id} className="list-disc ml-6">
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
