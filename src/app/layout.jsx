import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
