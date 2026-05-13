import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Lampung Fashion Tendance | Luxury Traditional Heritage",
  description: "The definitive platform for Lampung textile heritage. Spearheaded by APPMI Lampung, merging ancestral craftsmanship with contemporary high fashion.",
  keywords: ["Lampung Fashion", "Tapis Lampung", "Sulam Usus", "High Fashion Indonesia", "Lampung Tendance", "APPMI"],
  authors: [{ name: "Lampung Fashion Tendance" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-primary selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
