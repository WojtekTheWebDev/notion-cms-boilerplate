import type {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Meta } from "./types";
import { Client } from "@notionhq/client";
import { richTextToPlainText } from "./utils";

enum Properties {
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

  if (!("rich_text" in propertyValue)) {
    throw new Error(`${property} property is not a text property.`);
  }

  return richTextToPlainText(propertyValue.rich_text);
};

export const findPageBySlug = (
  database: QueryDatabaseResponse,
  slug: string
) => {
  return database.results.find((page) => {
    if (!("properties" in page)) return false;
    if (page.object !== "page") return false;

    const pageSlug = getPropertyValue(page.properties, Properties.Slug);
    return pageSlug === slug;
  });
};

export const getPageMeta = (
  pageProperties: PageObjectResponse["properties"]
): Meta => {
  return {
    title: getPropertyValue(pageProperties, Properties.MetaTitle),
    description: getPropertyValue(pageProperties, Properties.MetaDescription),
    seoKeywords: getPropertyValue(pageProperties, Properties.SEOKeywords),
  };
};

export const getPageBlocks = async (client: Client, pageId: string) => {
  const pageBlocks = await client.blocks.children.list({
    block_id: pageId,
  });

  return pageBlocks.results.filter((block) => "type" in block);
};
