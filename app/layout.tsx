import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brask Studio — Clean, Fast Marketing Sites",
  description:
    "I build clean, fast marketing sites for healthcare startups and early-stage companies. Two weeks, flat rate.",
  openGraph: {
    title: "Brask Studio — Clean, Fast Marketing Sites",
    description:
      "I build clean, fast marketing sites for healthcare startups and early-stage companies. Two weeks, flat rate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
