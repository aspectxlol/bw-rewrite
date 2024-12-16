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
        
        Color1: "var(--Color1)",
        Color2: "var(--Color2)",
        Color3: "var(--Color3)",
        Color4: "var(--Color4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
