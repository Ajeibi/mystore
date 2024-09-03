import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SheetProvider } from "@/context/SheetContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Store",
  description: "Product Listing Platform - Manage your inventory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <SheetProvider>
          <Navbar />
          <div className="lg:mx-20 mx-5">{children}</div>
        </SheetProvider>
      </body>
    </html>
  );
}