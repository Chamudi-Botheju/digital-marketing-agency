import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowthLab Marketing | Digital Marketing Agency",
  description:
    "We help brands increase visibility, generate leads, and grow revenue through creative digital marketing strategies.",
  keywords: [
    "digital marketing",
    "SEO",
    "social media",
    "paid advertising",
    "marketing agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
