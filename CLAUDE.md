# CLAUDE.md

Read [AGENTS.md](./AGENTS.md) — it has the project overview, the Notion-DB-to-page pipeline, conventions, commands, and known gotchas. Coding style is governed by [PRINCIPLES.md](./PRINCIPLES.md). Everything below is Claude Code-specific and additive.

## Claude-specific notes

- This repo has no test suite. Validate changes with `npm run lint` + `npm run build`, and for UI/rendering work also `npm run dev` and check the page in a browser against a real Notion DB before reporting done.
- Server components by default. Don't add `"use client"` to anything that reads `process.env.NOTION_SECRET` — that secret must never reach the client bundle.
- Versioning is via Changesets (`.changeset/`). For user-visible changes, ask whether to run `npx changeset` rather than guessing.
