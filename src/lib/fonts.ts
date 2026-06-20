import { Playfair_Display, Work_Sans } from "next/font/google";

// Heading font — Playfair Display (elegant serif, Stitch-designed: italic for luxury, extrabold for authority)
export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body font — Work Sans (clean, modern, highly legible sans for dense coverage copy)
export const bodyFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
