import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "../lib/theme/provider";

export const metadata: Metadata = {
  title: "Kookie",
  description: "A Kookie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider color="indigo" gray="slate" radius="lg" size="sm" style="detailed">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
