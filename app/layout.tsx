import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../lib/theme/provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kookie UI",
  description: "A high-performance component library for Next.js",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider color="blue" gray="slate" size="sm" style="modern" radius="md">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
