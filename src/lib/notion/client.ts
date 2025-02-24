import { Client } from "@notionhq/client";

export const getNotionClient = () => {
  return new Client({
    auth: process.env.NOTION_SECRET,
  });
};
