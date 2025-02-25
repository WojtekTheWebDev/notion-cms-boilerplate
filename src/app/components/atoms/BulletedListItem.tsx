import React from "react";
import { renderRichText } from "@/lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface BulletedListItemProps {
  richText: RichTextItemResponse[];
}

export function BulletedListItem({ richText }: BulletedListItemProps) {
  return <li className="list-disc">{renderRichText(richText)}</li>;
}
