/**
 * Token System Type Definitions
 *
 * This file defines TypeScript types for the token-based design system.
 * It provides type safety for components that accept token values.
 */

// Spacing token types based on our spacing scale
export type SpaceToken = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 18 | 20 | 24;

// Dimension token types combining numeric and semantic scales
export type NumericDimensionToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 80 | 96;

export type NamedDimensionToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "half" | "fit" | "min" | "max" | "screen" | "screen-h";

export type DimensionToken = NumericDimensionToken | NamedDimensionToken;

// Helper functions to convert token values to CSS variable references
export function getSpaceTokenValue(token: SpaceToken | string): string {
  if (typeof token === "number" || /^[0-9.]+$/.test(token as string)) {
    // Replace decimal points with underscores in variable name
    const varName = String(token).replace(".", "_");
    return `var(--space-${varName})`;
  }
  // It's a CSS string value, return as is
  return token as string;
}

export function getDimensionTokenValue(token: DimensionToken | string): string {
  if (typeof token === "number" || typeof token === "string") {
    // Check if it's a named token
    if (
      typeof token === "string" &&
      (token === "xs" ||
        token === "sm" ||
        token === "md" ||
        token === "lg" ||
        token === "xl" ||
        token === "2xl" ||
        token === "3xl" ||
        token === "4xl" ||
        token === "5xl" ||
        token === "6xl" ||
        token === "7xl" ||
        token === "full" ||
        token === "half" ||
        token === "fit" ||
        token === "min" ||
        token === "max" ||
        token === "screen" ||
        token === "screen-h")
    ) {
      return `var(--size-${token})`;
    }

    // Check if it's a numeric token
    if (typeof token === "number" || /^[0-9]+$/.test(token as string)) {
      return `var(--size-${token})`;
    }
  }

  // It's a CSS string value, return as is
  return token as string;
}
