import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SheetProvider } from "@/context/SheetContext";
import { FilterProvider } from "@/context/FilterContext";

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
        <FilterProvider>
          <SheetProvider>
            <Navbar />

            <div className="flex">
              <Sidebar />

              <section className="flex min-h-screen flex-1 flex-col px-5">
                <div className="w-full">{children}</div>
              </section>
            </div>
          </SheetProvider>
        </FilterProvider>
      </body>
    </html>
  );
}