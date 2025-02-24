import React from "react";
import { richTextToPlainText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface Heading2Props {
  rich_text: RichTextItemResponse[];
}

export function Heading2({ rich_text }: Heading2Props) {
  const content = richTextToPlainText(rich_text);
  return <h2 className="text-2xl font-bold">{content}</h2>;
}
