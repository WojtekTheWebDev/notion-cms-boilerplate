import React from "react";
import { renderRichText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface Heading2Props {
  richText: RichTextItemResponse[];
}

export function Heading2({ richText }: Heading2Props) {
  return <h2>{renderRichText(richText)}</h2>;
}
