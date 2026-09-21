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
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "#151b2c",
          elevated: "#1c2438",
          subtle: "#0f1422",
          border: "#24304c",
          borderHover: "#37476b",
        },
        brand: {
          cyan: "#12BDF7",
          cyanLight: "#5eead4",
          blue: "#2563eb",
          indigo: "#4f46e5",
          violet: "#7c3aed",
          50: "#eef9ff",
          100: "#d9f2fe",
          200: "#b9e7fd",
          300: "#7fd4fc",
          400: "#38bdf8",
          500: "#12BDF7",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.35)",
        card: "0 10px 30px -5px rgba(2, 6, 23, 0.45)",
        elevated: "0 20px 40px -10px rgba(2, 6, 23, 0.6)",
        "brand-glow": "0 0 25px -4px rgba(18, 189, 247, 0.25)",
        "brand-pill": "0 4px 15px -2px rgba(18, 189, 247, 0.35)",
      },
      animation: {
        "float-gentle": "floatGentle 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
