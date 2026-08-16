import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTOR INSURANCE DIVA — "Boss Brand" palette
   Warm-earth house palette: deep bronze + copper + antique gold
   clay = antique gold (on-light, AA-contrast) · sage = deep bronze/terracotta
   gold = bright champagne gold (on-dark surfaces only)
   cream = warm ivory · espresso = warm near-black
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf6ef",
        sand: "#f2ebdf",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#8a5f0d",
          dark: "#6b4a08",
          light: "#a87715",
          50: "#fdf9e8",
          100: "#f7ebc4",
          200: "#ecd287",
          300: "#d9b23f",
          400: "#a87715",
          500: "#8a5f0d",
          600: "#6b4a08",
          700: "#543a06",
          800: "#3d2a04",
          900: "#2a1c02",
        },
        sage: {
          DEFAULT: "#5c2610",
          dark: "#37170a",
          light: "#8a3d12",
          50: "#fdf3ea",
          100: "#f4dcc4",
          200: "#e5b585",
          300: "#cd8340",
          400: "#a95520",
          500: "#8a3d12",
          600: "#5c2610",
          700: "#37170a",
        },
        gold: {
          DEFAULT: "#d4af37",
          dark: "#7a5e0a",
          light: "#e8c84f",
          50: "#fdf9e8",
          100: "#faf0c2",
          200: "#f5e085",
          300: "#eecb52",
          400: "#e8c84f",
          500: "#d4af37",
          600: "#7a5e0a",
        },
        espresso: "#161009",
        cocoa: "#3a2a1c",
        mocha: "#6d5240",
        adobe: "#e9dcc9",
        adobeDark: "#d9c3a3",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #faf6ef 0%, #f2ebdf 40%, #ece2d2 70%, #faf6ef 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(92,38,16,0.08) 0%, transparent 55%), #faf6ef",
        "clay-gradient": "linear-gradient(135deg, #8a5f0d 0%, #6b4a08 100%)",
        "sage-gradient": "linear-gradient(135deg, #5c2610 0%, #8a3d12 100%)",
        "gold-gradient": "linear-gradient(135deg, #d4af37 0%, #e8c84f 100%)",
        "diva-hero": "linear-gradient(135deg, #5c2610 0%, #161009 60%, #37170a 100%)",
        "diva-surface": "linear-gradient(180deg, #37170a 0%, #161009 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(212,175,55,0.30), 0 4px 12px -6px rgba(22,16,9,0.15)",
        "warm-lg": "0 30px 70px -20px rgba(212,175,55,0.35), 0 10px 30px -10px rgba(22,16,9,0.18)",
        card: "0 2px 8px -2px rgba(22,16,9,0.08), 0 1px 3px -1px rgba(22,16,9,0.05)",
        "card-hover": "0 20px 50px -15px rgba(212,175,55,0.28), 0 8px 20px -8px rgba(22,16,9,0.12)",
        arch: "inset 0 -8px 30px -10px rgba(212,175,55,0.12)",
        "gold-glow": "0 0 30px rgba(212,175,55,0.35), 0 0 60px rgba(212,175,55,0.15)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
