import React from "react";
import { richTextToPlainText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface ParagraphProps {
  rich_text: RichTextItemResponse[];
}

export function Paragraph({ rich_text }: ParagraphProps) {
  const content = richTextToPlainText(rich_text);
  return <p>{content}</p>;
}

export default Paragraph;
