import React from "react";
import { richTextToPlainText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface NumberedListItemProps {
  rich_text: RichTextItemResponse[];
}

export function NumberedListItem({ rich_text }: NumberedListItemProps) {
  const content = richTextToPlainText(rich_text);
  return <li className="list-decimal ml-6">{content}</li>;
}
