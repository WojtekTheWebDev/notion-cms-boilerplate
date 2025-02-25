import React from "react";
import { renderRichText } from "../../../lib/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface Heading1Props {
  richText: RichTextItemResponse[];
}

export function Heading1({ richText }: Heading1Props) {
  return <h1>{renderRichText(richText)}</h1>;
}
