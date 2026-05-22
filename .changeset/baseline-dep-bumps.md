---
"notion-as-a-cms": patch
---

Refresh patch/minor dependency baseline within current majors: React 19.2, ESLint 9.39, `eslint-config-next` 15.5, `@types/node` 22, plus matching `@types/react*`, `postcss`, `tailwindcss` (3.x), and `typescript` (5.x). No behavior change; clears transitive audit advisories ahead of the upcoming major upgrades (Notion SDK, Next 16, Tailwind 4).
