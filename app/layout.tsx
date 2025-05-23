import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import "@/styles/color.css";
import { Provider as JotaiProvider } from "jotai";

/**
 * Metadata for the application
 * Used by Next.js for SEO and document head properties
 */
export const metadata: Metadata = {
  title: "Kookie",
  description: "A Kookie app",
};

/**
 * Root layout component for the application
 *
 * This component:
 * 1. Configures the HTML document structure
 * 2. Sets up Geist fonts (Sans and Mono)
 * 3. Initializes Jotai for state management
 * 4. Configures the ThemeProvider with default colors
 * 5. Loads global CSS and color styles
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render within the layout
 * @returns {JSX.Element} The root layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className="antialiased"
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
        }}
      >
        <JotaiProvider>
          <ThemeProvider primary="gray" gray="sage" error="red" success="green" warning="amber" roundness="sm" size={2}>
            {children}
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
