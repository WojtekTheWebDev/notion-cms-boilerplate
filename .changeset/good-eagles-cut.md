---
"notion-as-a-cms": minor
---

Upgrade TypeScript from 5.9.3 to 6.0.3. The bundled `@typescript-eslint/*` 8.59.4 (resolved via `eslint-config-next@16`) declares `typescript >=4.8.4 <6.1.0` as a peer, so TS 6 is accepted without overrides. `tsconfig.json` is unchanged — none of the options it sets (`target: ES2017`, `lib`, `module: esnext`, `moduleResolution: bundler`, `strict: true`, `esModuleInterop`, `jsx: react-jsx`, `incremental`) were removed or deprecated in TS 6, and the new TS 6 defaults that shifted (notably `noUncheckedSideEffectImports: true`, `types: []`) are masked by our explicit values.
