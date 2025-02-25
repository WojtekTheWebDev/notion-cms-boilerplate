import React from "react";
import { renderRichText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface ParagraphProps {
  richText: RichTextItemResponse[];
}

export function Paragraph({ richText }: ParagraphProps) {
  return <p>{renderRichText(richText)}</p>;
}

export default Paragraph;
