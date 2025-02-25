import React from "react";
import { renderRichText } from "@/lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface NumberedListItemProps {
  richText: RichTextItemResponse[];
}

export function NumberedListItem({ richText }: NumberedListItemProps) {
  return <li className="list-decimal">{renderRichText(richText)}</li>;
}
