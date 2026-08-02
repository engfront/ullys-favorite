import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULLYS FAVORITE — Kurasi Fashion Pilihan",
  description: "Kurasi fashion bermakna. Belanja cerdas, gaya tetap maksimal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}