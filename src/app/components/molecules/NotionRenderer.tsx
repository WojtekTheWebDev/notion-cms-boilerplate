import React from "react";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Heading1 } from "../atoms/Heading1";
import { Heading2 } from "../atoms/Heading2";
import { Heading3 } from "../atoms/Heading3";
import { Paragraph } from "../atoms/Paragraph";
import { BulletedListItem } from "../atoms/BulletedListItem";
import { NumberedListItem } from "../atoms/NumberedListItem";

interface NotionRendererProps {
  blocks: BlockObjectResponse[];
}

export const NotionRenderer = ({ blocks }: NotionRendererProps) => {
  return (
    <div className="p-4">
      {blocks.map((block) => {
        if (!("type" in block)) return null;

        const { id, type } = block;

        switch (type) {
          case "heading_1":
            return <Heading1 key={id} rich_text={block.heading_1.rich_text} />;
          case "heading_2":
            return <Heading2 key={id} rich_text={block.heading_2.rich_text} />;
          case "heading_3":
            return <Heading3 key={id} rich_text={block.heading_3.rich_text} />;
          case "paragraph":
            return <Paragraph key={id} rich_text={block.paragraph.rich_text} />;
          case "bulleted_list_item":
            return (
              <BulletedListItem
                key={id}
                rich_text={block.bulleted_list_item.rich_text}
              />
            );
          case "numbered_list_item":
            return (
              <NumberedListItem
                key={id}
                rich_text={block.numbered_list_item.rich_text}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
