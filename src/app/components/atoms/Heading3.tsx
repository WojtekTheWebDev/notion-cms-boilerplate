import React from "react";
import { richTextToPlainText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface Heading3Props {
  rich_text: RichTextItemResponse[];
}

export function Heading3({ rich_text }: Heading3Props) {
  const content = richTextToPlainText(rich_text);
  return <h3>{content}</h3>;
}
