import { Client } from "@notionhq/client";

export const getDatabase = async (client: Client) => {
  const database_id = String(process.env.NOTION_DATABASE_ID);
  const database = await client.databases.retrieve({ database_id });

  if (!("data_sources" in database) || database.data_sources.length === 0) {
    throw new Error(`No data sources found for database ${database_id}.`);
  }

  return await client.dataSources.query({
    data_source_id: database.data_sources[0].id,
  });
};
