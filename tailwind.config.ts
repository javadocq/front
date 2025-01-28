import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        darkBg: "#515151",
        dateBg: "#726B6B",
        lightBg: "#E4E4E4",
        filterBg: "#7E7E7E",
        keyColor: "#1dffc7",
        customBlue: "#00D9FF",
        MainBlue: "#314453",
      },
    },
  },
  plugins: [],
} satisfies Config;
