import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import "@/styles/tokens/reference/colors/reference.css";
import "@/styles/tokens/system/colors/system.css";
import { Provider as JotaiProvider } from "jotai";
import { ThemePlayground } from "@/components/helpers";

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
          <ThemeProvider primary="blue" gray="olive" error="red" success="lime" warning="yellow" roundness="md" size={6}>
            <ThemePlayground />
            {children}
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
