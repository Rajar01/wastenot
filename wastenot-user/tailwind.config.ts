import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(163, 88%, 13%, 1)",
        secondary: "hsla(13, 93%, 55%, 1)",
        tertiary: "hsla(78, 83%, 68%, 1)",
        neutral: {
          1: "hsla(0, 0%, 100%, 1)",
          2: "hsla(71, 23%, 91%, 1)",
          3: "hsla(0, 0%, 7%, 1)",
          4: "hsla(0, 0%, 32%, 1)",
          5: "hsla(228, 28%, 94%, 1)",
          6: "hsla(234, 6%, 74%, 1)",
        },
      },
      fontSize: {
        "display-1": ["90px", { lineHeight: "120%" }],
        "display-2": ["72px", { lineHeight: "120%" }],
        "display-3": ["64px", { lineHeight: "120%" }],
        "display-4": ["56px", { lineHeight: "120%" }],
        "heading-1": ["48px", { lineHeight: "120%" }],
        "heading-2": ["40px", { lineHeight: "120%" }],
        "heading-3": ["32px", { lineHeight: "120%" }],
        "heading-4": ["24px", { lineHeight: "130%" }],
        "heading-5": ["20px", { lineHeight: "130%" }],
        "heading-6": ["16px", { lineHeight: "130%" }],
        lead: ["24px", { lineHeight: "150%" }],
        xl: ["20px", { lineHeight: "150%" }],
        l: ["18px", { lineHeight: "150%" }],
        m: ["16px", { lineHeight: "150%" }],
        s: ["14px", { lineHeight: "150%" }],
        xs: ["12px", { lineHeight: "150%" }],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
