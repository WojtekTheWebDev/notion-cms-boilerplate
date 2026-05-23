---
"notion-as-a-cms": minor
---

Upgrade Tailwind CSS from 3.4 to 4.3, moving to the new Oxide engine and CSS-first configuration. `postcss.config.mjs` now references `@tailwindcss/postcss` (a new devDependency) instead of the old `tailwindcss` plugin entry. `src/app/globals.css` replaces the `@tailwind base/components/utilities` directives with a single `@import "tailwindcss"`, and `tailwind.config.ts` is gone — its `theme.extend.colors.notion` palette is rewritten as `--color-notion-*` tokens inside an `@theme` block that delegates to the existing `--notion-*` CSS variables, so the runtime light/dark switch via `[data-theme="dark"]` still works. The v3 catch-all `safelist` regexes (`/bg-./`, `/text-./`, `/border-./`) are replaced by a narrow `@source inline("{bg,text}-notion-{default,gray,brown,orange,yellow,green,blue,purple,pink,red}")` listing exactly the classes `renderRichText` synthesizes from Notion annotation colors. No component or rendering API changed.
