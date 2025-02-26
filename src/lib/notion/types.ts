import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
