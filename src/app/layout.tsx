import type { Metadata } from "next";
import store from "../services/store";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organization Structure System",
  description: "CEO, Chiefs, Departments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your entire application with the Provider */}
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={inter.className}>
          <div className="flex h-screen w-full bg-gray-100">
            <Sidebar />
            <div className="flex flex-col w-full h-full ml-64 p-4">
              <MantineProvider>{children}</MantineProvider>
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
