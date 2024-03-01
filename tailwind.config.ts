import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C5DFA",
        secondary: "#9277FF",
        "dark-blue-gray": "#1E2139",
        "midnight-blue": "#252945",
        "pale-lavender": "#DFE3FA",
        "slate-blue": "#888EB0",
        "light-slate-blue": "#7E88C3",
        "dark-navy": "#0C0E16",
        red: "#EC5757",
        "pale-pink": "#9277FF",
        "light-bg": "#F8F8F8",
        charcoal: "#141625",
        "midnight-gray": "#979797",
        "shadow-navy": "#373B53",
        "light-navy": "#494E6E",
      },
      fontSize: {
        "heading-l": [
          "2.25rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.071rem",
            fontWeight: "bold",
          },
        ],
        "heading-m": [
          "1.5rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "-0.047rem",
            fontWeight: "bold",
          },
        ],
        "heading-s": [
          "0.9375rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.015625rem",
            fontWeight: "bold",
          },
        ],
        "heading-s-variant": [
          "0.9375rem",
          {
            lineHeight: "0.9375rem",
            letterSpacing: "-0.015625rem",
            fontWeight: "bold",
          },
        ],
        body: [
          "0.8125rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "-0.00625rem",
            fontWeight: "500",
          },
        ],
        "body-variant": [
          "0.8125rem",
          {
            lineHeight: "0.9375rem",
            letterSpacing: "-0.015625rem",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
export default config;
