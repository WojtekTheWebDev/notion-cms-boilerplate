import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: "var(--body-weight)",
        semibold: "var(--heading-weight)",
      },
    },
  },
  plugins: [],
} satisfies Config;
