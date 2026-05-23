import type { BlockObjectResponse } from "@notionhq/client";

export interface Meta {
  title?: string;
  description?: string;
  seoKeywords?: string;
  icon?: string;
}

export interface PageResponse {
  meta: Meta;
  blocks: BlockObjectResponse[];
}
