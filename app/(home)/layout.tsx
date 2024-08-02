import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./../globals.css";
import Navbar from "../../components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nazzly",
  description: "A Scheduling app for the poor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className="min-h-screen">
          <header className="fixed w-full">
            <Navbar />
          </header>
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
