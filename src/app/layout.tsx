import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { metaGenerator } from "./constants";

export const metadata: Metadata = {
  generator: metaGenerator,
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
