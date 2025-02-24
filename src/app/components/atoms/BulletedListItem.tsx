import React from "react";
import { richTextToPlainText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface BulletedListItemProps {
  rich_text: RichTextItemResponse[];
}

export function BulletedListItem({ rich_text }: BulletedListItemProps) {
  const content = richTextToPlainText(rich_text);
  return <li className="list-disc">{content}</li>;
}
