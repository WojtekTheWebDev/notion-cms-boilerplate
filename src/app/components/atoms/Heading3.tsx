import React from "react";
import { renderRichText } from "@/lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface Heading3Props {
  richText: RichTextItemResponse[];
}

export function Heading3({ richText }: Heading3Props) {
  return <h3>{renderRichText(richText)}</h3>;
}
