import type {
  PageObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Meta } from "./types";
import { getIconString, richTextToPlainText } from "./richText";
import { getNotionClient } from "./client";
import { getDatabase } from "./database";
import { Client } from "@notionhq/client";

export enum PageProperties {
  Name = "Name",
  Slug = "Slug",
  MetaTitle = "Meta title",
  MetaDescription = "Meta description",
  SEOKeywords = "SEO keywords",
}

export const getPropertyValue = (
  properties: PageObjectResponse["properties"],
  property: PageProperties
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

    const pageSlug = getPropertyValue(page.properties, PageProperties.Slug);
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

  const icon = getIconString(page.icon);

  return {
    title:
      getPropertyValue(page.properties, PageProperties.MetaTitle) ||
      getPropertyValue(page.properties, PageProperties.Name),
    description: getPropertyValue(
      page.properties,
      PageProperties.MetaDescription
    ),
    seoKeywords: getPropertyValue(page.properties, PageProperties.SEOKeywords),
    icon,
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
