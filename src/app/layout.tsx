// Importing necessary modules and types
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Toaster } from "react-hot-toast";

import ReduxProvider from "@/providers/ReduxProvider";
import { WagmiProvider } from "@/providers/WagmiProvider";

// Initializing the Inter font with the "latin" subset
const inter = Inter({ subsets: ["latin"] });

// Defining metadata for SEO purposes
export const metadata: Metadata = {
  title: "Push Protocol Guide",
  description:
    "Push Protocol Starter Guide for Developers and Users of the Push Protocol. Learn how to use the Push Protocol to build your own decentralized applications. ",
};

// Defining the RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrapping children with ReduxProvider to provide Redux context */}
        <ReduxProvider>
          {/* Wrapping children with WagmiProvider to provide additional context */}
          <WagmiProvider>
            {/* Setting up a Toaster component for displaying toast notifications */}
            <Toaster
              position="bottom-right"
              reverseOrder={false}
              toastOptions={{
                style: {
                  background: "#FCE7F3",
                  color: "#000",
                  cursor: "default",
                },
              }}
            />

            {/* Rendering children */}
            {children}
          </WagmiProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
