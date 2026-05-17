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
    "We build clean, fast marketing sites for healthcare practices, professional services firms, and early-stage companies. Two weeks, flat rate.",
  metadataBase: new URL("https://braskstudio.vercel.app"),
  openGraph: {
    title: "Brask Studio — Clean, Fast Marketing Sites",
    description:
      "We build clean, fast marketing sites for healthcare practices, professional services firms, and early-stage companies. Two weeks, flat rate.",
    type: "website",
    url: "https://braskstudio.vercel.app",
    siteName: "Brask Studio",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Brask Studio — Clean, Fast Marketing Sites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brask Studio — Clean, Fast Marketing Sites",
    description:
      "We build clean, fast marketing sites for healthcare practices, professional services firms, and early-stage companies. Two weeks, flat rate.",
    images: ["/opengraph.png"],
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
