import { renderRichText } from "@/lib/notion";
import type { RichTextItemResponse } from "@notionhq/client";

interface ParagraphProps {
  richText: RichTextItemResponse[];
}

export function Paragraph({ richText }: ParagraphProps) {
  return <p>{renderRichText(richText)}</p>;
}
