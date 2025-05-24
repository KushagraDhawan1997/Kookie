/**
 * Token System Type Definitions
 *
 * This file defines TypeScript types for the token-based design system.
 * It provides type safety for components that accept token values.
 *
 * Token Architecture:
 * - Reference tokens: Basic values (colors, spacing, dimensions, roundness)
 * - System tokens: Semantic mappings for component use (layout controls, etc.)
 */

// Linear 1-24 spacing token types
export type SpaceToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

// Linear 1-24 dimension token types (4px to 320px)
export type NumericDimensionToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

// Named dimension tokens for layout (320px to 1536px)
export type NamedDimensionToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl";

// Special dimension tokens for utility cases
export type SpecialDimensionToken = "full" | "half" | "fit" | "min" | "max" | "screen" | "screen-h";

// Combined dimension token type
export type DimensionToken = NumericDimensionToken | NamedDimensionToken | SpecialDimensionToken;

// Control layout token types for components like buttons, inputs, etc.
export type ControlSizeToken = 1 | 2 | 3 | 4 | 5 | 6;

// Helper functions to convert token values to CSS variable references
export function getSpaceTokenValue(token: SpaceToken | string): string {
  if (typeof token === "number" || /^[0-9]+$/.test(token as string)) {
    return `var(--space-${token})`;
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
        token === "8xl" ||
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

export function getControlHeightTokenValue(token: ControlSizeToken): string {
  return `var(--control-height-${token})`;
}

export function getControlPaddingTokenValue(token: ControlSizeToken): string {
  return `var(--control-padding-${token})`;
}
