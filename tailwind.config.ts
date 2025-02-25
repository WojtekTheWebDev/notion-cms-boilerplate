import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/notion/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          default: 'var(--notion-default)',
          gray: 'var(--notion-gray)',
          brown: 'var(--notion-brown)',
          orange: 'var(--notion-orange)',
          yellow: 'var(--notion-yellow)',
          green: 'var(--notion-green)',
          blue: 'var(--notion-blue)',
          purple: 'var(--notion-purple)',
          pink: 'var(--notion-pink)',
          red: 'var(--notion-red)',
          
          'bg-default': 'var(--notion-bg-default)',
          'bg-gray': 'var(--notion-bg-gray)',
          'bg-brown': 'var(--notion-bg-brown)',
          'bg-orange': 'var(--notion-bg-orange)',
          'bg-yellow': 'var(--notion-bg-yellow)',
          'bg-green': 'var(--notion-bg-green)',
          'bg-blue': 'var(--notion-bg-blue)',
          'bg-purple': 'var(--notion-bg-purple)',
          'bg-pink': 'var(--notion-bg-pink)',
          'bg-red': 'var(--notion-bg-red)',

          background: 'var(--notion-background)',
        },
      }
    },
  },
  safelist: [
    { pattern: /bg-./ },
    { pattern: /text-./ },
    { pattern: /border-./ },
  ],
  plugins: [],
} satisfies Config;
