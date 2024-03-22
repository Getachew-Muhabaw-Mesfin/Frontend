import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organization Structure System",
  description: "CEO, Chiefs, Departments, and Employees management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full bg-gray-100">
          <Sidebar />
          <div className="flex flex-col w-full h-full ml-64 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}