import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chukwuma Nwaugha",
  description: "Product Engineer and Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
