import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
        <Navbar />

        <div className="flex">
          <Sidebar />

          <section className="flex min-h-screen flex-1 flex-col md:px-10">
            <div className="w-full">{children}</div>
          </section>
        </div>
      </body>
    </html>
  );
}
