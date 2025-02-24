import type { Metadata } from "next";
import "./globals.css";
import { metaGenerator } from "./constants";

export const metadata: Metadata = {
  generator: metaGenerator,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  );
}
