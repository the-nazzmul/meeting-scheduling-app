import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./../globals.css";
import { Toaster } from "@/components/ui/sonner";
import Sidebar from "@/components/dashboard/SideBar";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nazzly | Create Business",
  description: "A Scheduling app for the poor",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
