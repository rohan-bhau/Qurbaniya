import { Inter, Playfair_Display, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
