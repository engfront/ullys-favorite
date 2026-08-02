import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULLYS FAVORITE — Kurasi Fashion Pilihan",
  description: "Kurasi fashion bermakna. Belanja cerdas, gaya tetap maksimal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}