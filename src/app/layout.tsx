import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Toaster } from "react-hot-toast";

import ReduxProvider from "@/providers/ReduxProvider";
import { WagmiProvider } from "@/providers/WagmiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Push Protocol Guide",
  description:
    "Push Protocol Starter Guide for Developers and Users of the Push Protocol. Learn how to use the Push Protocol to build your own decentralized applications. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <WagmiProvider>
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

            {children}
          </WagmiProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
