import { getNotionClient } from "./client";
import { getDatabase } from "./database";
import { findPageBySlug, getPageBlocks, getPageMeta } from "./page";
import { PageResponse } from "./types";

export const getPage = async (slug: string): Promise<PageResponse | null> => {
  const client = getNotionClient();
  const database = await getDatabase(client);
  const pageResult = findPageBySlug(database, slug);

  if (!pageResult) {
    return null;
  }

  if (pageResult.object !== "page") {
    return null;
  }

  const pageProperties =
    "properties" in pageResult ? pageResult.properties : {};
  const meta = getPageMeta(pageProperties);
  const blocks = await getPageBlocks(client, pageResult.id);

  return {
    meta,
    blocks,
  };
};

export * from "./types";
export * from "./utils";