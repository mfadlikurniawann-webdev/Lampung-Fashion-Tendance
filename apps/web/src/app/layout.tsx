import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lampung Fashion Tendance | Traditional Elegance Redefined",
  description: "Wadah kolaborasi UMKM dan desainer lokal untuk memperkenalkan wastra Lampung ke tingkat internasional. Melestarikan Tapis, Sulam Usus, dan Sulam Jelujur.",
  keywords: ["Lampung Fashion", "Traditional Clothing", "High Fashion", "Indonesia Fashion", "Lampung Tendance", "APPMI Lampung"],
  authors: [{ name: "Lampung Fashion Tendance" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Playball&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
