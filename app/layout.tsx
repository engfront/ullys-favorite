import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULLYS FAVORITE — Curated Fashion",
  description: "Personally curated fashion pieces. Worn on repeat, vouched for by my own closet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0B0B0D] text-[#F8F3E7]">{children}</body>
    </html>
  );
}