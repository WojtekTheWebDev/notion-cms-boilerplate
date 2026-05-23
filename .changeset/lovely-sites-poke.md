---
"notion-as-a-cms": patch
---

Add `@changesets/cli` ^2.31.0 as a devDependency. The repo already had `.changeset/config.json` and workflow references in `AGENTS.md` / `CLAUDE.md`, but the CLI itself was missing — `.changeset/baseline-dep-bumps.md` was authored by hand because `npx changeset` had no local binary to resolve. Installing the package enables the standard Changesets workflow locally, including scaffolding empty entries with:

```bash
npx changeset add --empty
```

A Claude Code skill at `.claude/skills/generate-changeset/` is included to drive this command from a working-tree diff — it proposes the bump level, drafts a message in the house style, and fills in the file scaffolded by `--empty`.
