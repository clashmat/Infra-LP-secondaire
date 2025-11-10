import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#16A34A", dark: "#064E3B" },
        bgd: "#0B0F14",
        bgl: "#F3F4F6",
        slateA: "#94A3B8",
        borderS: "#E5E7EB",
        borderD: "#1F2937"
      },
      borderRadius: {
        xl: "24px",
        "2xl": "28px"
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,.08)",
        cardHover: "0 12px 32px rgba(0,0,0,.12)",
        floating: "0 16px 48px rgba(0,0,0,.16)"
      }
    },
  },
  plugins: [],
};
export default config;
