import React from "react";
import { richTextToPlainText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface Heading1Props {
  rich_text: RichTextItemResponse[];
}

export function Heading1({ rich_text }: Heading1Props) {
  const content = richTextToPlainText(rich_text);
  return <h1 className="text-2xl font-bold">{content}</h1>;
}
