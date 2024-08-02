import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./../globals.css";
import { Toaster } from "@/components/ui/sonner";
import Sidebar from "@/components/dashboard/SideBar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nazzly user dashboard",
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
        <main>
          <Toaster />
          <div className="grid grid-cols-12">
            <div className="hidden lg:block lg:col-span-2 h-screen bg-gradient-to-r from-gray-300 to-white shadow-lg p-4">
              <Sidebar />
            </div>
            <div className="col-span-12 lg:col-span-10 dotted h-screen">
              <DashboardHeader />
              <div className="p-4">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
