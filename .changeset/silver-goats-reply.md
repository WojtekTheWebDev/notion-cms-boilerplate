---
"notion-as-a-cms": minor
---

Upgrade `@notionhq/client` from v2.3.0 to v5.x (Notion API `2025-09-03`). The page-fetch path in `src/lib/notion/database.ts` now uses `client.databases.retrieve` + `client.dataSources.query({ data_source_id })` in place of the removed `client.databases.query({ database_id })`, picking the first data source on the configured `NOTION_DATABASE_ID`. Deep type imports from `@notionhq/client/build/src/api-endpoints` are replaced with the package-root re-exports — the only supported import path since v3. Existing `NOTION_DATABASE_ID` values continue to work because legacy single-data-source databases expose exactly one data source; no env, schema, or renderer changes. Costs one extra Notion API call per page render (caching remains out of scope).
