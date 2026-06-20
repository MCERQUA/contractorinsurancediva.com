import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTOR INSURANCE DIVA — "Boss Brand" palette
   Stitch design system: deep plum + champagne gold
   clay = champagne gold · sage = deep plum
   cream = lavender-white · espresso = near-black plum
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
        cream: "#faf5ff",
        sand: "#f0e8ff",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#d4af37",
          dark: "#b8961f",
          light: "#e8c84f",
          50: "#fdf9e8",
          100: "#faf0c2",
          200: "#f5e085",
          300: "#eecb52",
          400: "#e8c84f",
          500: "#d4af37",
          600: "#b8961f",
          700: "#967810",
          800: "#705807",
          900: "#4a3a04",
        },
        sage: {
          DEFAULT: "#4a1040",
          dark: "#2d0a28",
          light: "#7a2070",
          50: "#fdf0fb",
          100: "#f5d6f0",
          200: "#e8a8e0",
          300: "#d070c8",
          400: "#a83aa0",
          500: "#7a2070",
          600: "#4a1040",
          700: "#2d0a28",
        },
        gold: {
          DEFAULT: "#d4af37",
          dark: "#b8961f",
          light: "#e8c84f",
          50: "#fdf9e8",
          100: "#faf0c2",
          200: "#f5e085",
          300: "#eecb52",
          400: "#e8c84f",
          500: "#d4af37",
          600: "#b8961f",
        },
        espresso: "#1a0a22",
        cocoa: "#3d2050",
        mocha: "#7c5c8c",
        adobe: "#e8d5f0",
        adobeDark: "#d0b0e8",
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
          "linear-gradient(180deg, #faf5ff 0%, #f0e8ff 40%, #ede0ff 70%, #faf5ff 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(74,16,64,0.08) 0%, transparent 55%), #faf5ff",
        "clay-gradient": "linear-gradient(135deg, #d4af37 0%, #e8c84f 100%)",
        "sage-gradient": "linear-gradient(135deg, #4a1040 0%, #7a2070 100%)",
        "gold-gradient": "linear-gradient(135deg, #d4af37 0%, #e8c84f 100%)",
        "diva-hero": "linear-gradient(135deg, #4a1040 0%, #1a0a22 60%, #2d0a28 100%)",
        "diva-surface": "linear-gradient(180deg, #2d0a28 0%, #1a0a22 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(212,175,55,0.30), 0 4px 12px -6px rgba(26,10,34,0.15)",
        "warm-lg": "0 30px 70px -20px rgba(212,175,55,0.35), 0 10px 30px -10px rgba(26,10,34,0.18)",
        card: "0 2px 8px -2px rgba(26,10,34,0.08), 0 1px 3px -1px rgba(26,10,34,0.05)",
        "card-hover": "0 20px 50px -15px rgba(212,175,55,0.28), 0 8px 20px -8px rgba(26,10,34,0.12)",
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
