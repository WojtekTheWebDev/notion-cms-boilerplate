import type {
  PageObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Meta } from "./types";
import { richTextToPlainText } from "./utils";
import { getNotionClient } from "./client";
import { getDatabase } from "./database";
import { Client } from "@notionhq/client";

enum Properties {
  Name = "Name",
  Slug = "Slug",
  MetaTitle = "Meta title",
  MetaDescription = "Meta description",
  SEOKeywords = "SEO keywords",
}

const getPropertyValue = (
  properties: PageObjectResponse["properties"],
  property: Properties
): string => {
  const propertyValue = properties[property];

  if (propertyValue.type === "title") {
    return richTextToPlainText(propertyValue.title);
  }

  if (!("rich_text" in propertyValue)) {
    throw new Error(`${property} property is not a text property.`);
  }

  return richTextToPlainText(propertyValue.rich_text);
};

const getPageBySlug = async (
  client: Client,
  slug: string
): Promise<PageObjectResponse | null> => {
  const database = await getDatabase(client);

  const page = database.results.find((page) => {
    if (!("properties" in page)) return false;
    if (page.object !== "page") return false;

    const pageSlug = getPropertyValue(page.properties, Properties.Slug);
    return pageSlug === slug;
  });

  if (!page || page.object !== "page" || !("properties" in page)) {
    return null;
  }

  return page;
};

export const getPageMeta = async (slug: string): Promise<Meta | null> => {
  const client = getNotionClient();
  const page = await getPageBySlug(client, slug);

  if (!page) {
    return null;
  }

  return {
    title:
      getPropertyValue(page.properties, Properties.MetaTitle) ||
      getPropertyValue(page.properties, Properties.Name),
    description: getPropertyValue(page.properties, Properties.MetaDescription),
    seoKeywords: getPropertyValue(page.properties, Properties.SEOKeywords),
  };
};

export const getPageBlocks = async (
  slug: string
): Promise<BlockObjectResponse[] | null> => {
  const client = getNotionClient();
  const page = await getPageBySlug(client, slug);

  if (!page) {
    return null;
  }

  const pageBlocks = await client.blocks.children.list({
    block_id: page.id,
  });

  return pageBlocks.results.filter((block) => "type" in block);
};
