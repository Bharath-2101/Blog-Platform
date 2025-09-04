import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "@/sections/NavMenu/NavMenu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const chango = localFont({
  src: "../../public/fonts/Chango-Regular.ttf",
  variable: "--font-chango",
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bharath's Blog",
  description: "Created and managed by Bharath Kamatham.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter} ${playfair}`}>
      <body
        className={`${inter.variable} ${playfair.variable} ${chango.variable}  antialiased`}
      >
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
