# notion-as-a-cms

## 0.3.2

### Patch Changes

- b57fc48: Refresh patch/minor dependency baseline within current majors: React 19.2, ESLint 9.39, `eslint-config-next` 15.5, `@types/node` 22, plus matching `@types/react*`, `postcss`, `tailwindcss` (3.x), and `typescript` (5.x). No behavior change; clears transitive audit advisories ahead of the upcoming major upgrades (Notion SDK, Next 16, Tailwind 4).
- 4dfa065: Add `@changesets/cli` ^2.31.0 as a devDependency. The repo already had `.changeset/config.json` and workflow references in `AGENTS.md` / `CLAUDE.md`, but the CLI itself was missing — `.changeset/baseline-dep-bumps.md` was authored by hand because `npx changeset` had no local binary to resolve. Installing the package enables the standard Changesets workflow locally, including scaffolding empty entries with:

  ```bash
  npx changeset add --empty
  ```

  A Claude Code skill at `.claude/skills/generate-changeset/` is included to drive this command from a working-tree diff — it proposes the bump level, drafts a message in the house style, and fills in the file scaffolded by `--empty`.

## 0.3.1

### Patch Changes

- Empty paragraphs are now visible.

## 0.3.0

### Minor Changes

- 258d977: Node 22 support.

### Patch Changes

- Update next version

## 0.2.0

### Minor Changes

- Added support for page mentions

## 0.1.0

### Minor Changes

- Added support for Paragraphs
- Added support for Headings
- Added support for Lists (bulleted, numbered and to-do)
- Added support for Images
- Added support for rich text formatting (bold, italic, underline, strikethrough, code, link, color)
