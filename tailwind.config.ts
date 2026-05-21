import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#212121",
        tertiary: "#cac7b4",
        neutral: "#ffffff",
        surface: "#ffffff",
        "on-surface": "#212121",
        border: "#e5e7eb",
        "muted-surface": "#cac7b4",
        overlay: "#f5f5f5",
        error: "#d92d20",
      },
      fontFamily: {
        display: ["var(--font-gd-grio)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "headline-display": ["57px", { lineHeight: "68px", letterSpacing: "0px", fontWeight: "700" }],
        "headline-lg": ["43px", { lineHeight: "54.432px", letterSpacing: "-0.567px", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "36px", letterSpacing: "-0.4px", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "29px", letterSpacing: "-0.16px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "27px", letterSpacing: "0px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "21px", letterSpacing: "0px", fontWeight: "400" }],
        "label-lg": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "500" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0px", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0px", fontWeight: "500" }],
        "caption": ["12px", { lineHeight: "16px", letterSpacing: "0px", fontWeight: "400" }],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      spacing: {
        xs: "8px",
        sm: "20px",
        md: "40px",
        lg: "64px",
        xl: "160px",
      },
    },
  },
  plugins: [],
};

export default config;
