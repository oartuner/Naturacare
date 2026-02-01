import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google"; // Import fonts
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });

export const metadata: Metadata = {
  title: "Natura Care | Şifa Akademisi ve Butik",
  description: "Modern Eczacılık ve Şifa Akademisi.",
};

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={cn(outfit.variable, quicksand.variable, "font-sans antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
