import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        pillar: {
          violet: "#5227FF",
          pink: "#FF9FFC",
        },
      },
      boxShadow: {
        brutal: "0 0 0 1px rgba(255,255,255,.12), 0 12px 40px rgba(0,0,0,.6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
