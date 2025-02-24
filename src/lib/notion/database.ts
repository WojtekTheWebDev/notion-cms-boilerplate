import { Client } from "@notionhq/client";

export const getDatabase = async (client: Client) => {
  return await client.databases.query({
    database_id: String(process.env.NOTION_DATABASE_ID),
  });
};
