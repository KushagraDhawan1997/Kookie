import React from "react";
import { ThemeColor, ThemeSize, SemanticColorKey } from "../../../lib/theme/atoms";

/**
 * Extended size options for Text component beyond the base ThemeSize
 */
export type TextSize = ThemeSize | "2xl" | "3xl";

/**
 * Valid color options for the Text component.
 * Can be either semantic colors (primary, success, etc.) that map to theme settings,
 * direct Tailwind colors (blue, indigo, etc.), or special values like 'current'.
 */
export type ColorProp = SemanticColorKey | "current" | ThemeColor;

/**
 * TextProps interface - defines all available props for the Text component
 *
 * The Text component forms the foundation of all typography in the Kookie UI system.
 * It supports theme inheritance, semantic colors, and direct Tailwind colors.
 */
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Size variant for the text.
   * If not provided, this will inherit from parent components via the theme system.
   * Follows the size scales defined in the design token reference.
   * Extends the base ThemeSize with additional larger options.
   */
  size?: TextSize;

  /**
   * Font weight - supports all Tailwind font weights.
   * @default 'normal'
   */
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";

  /**
   * Text color - can be either:
   * - Semantic colors (primary, success, warning, danger, gray) that map to theme settings
   * - Direct Tailwind colors (blue, indigo, purple, etc.)
   * - 'current' to inherit color from parent
   *
   * @default 'gray'
   */
  color?: ColorProp;

  /**
   * Visual style variant for the text.
   * - default: Standard text (uses stronger color)
   * - muted: Lighter, less prominent text (uses lighter color shade)
   * - accent: Slightly emphasized text
   *
   * @default 'default'
   */
  variant?: "default" | "muted" | "accent";

  /**
   * HTML element to render the text as.
   * Allows semantic HTML while maintaining consistent styling.
   *
   * @default 'p'
   */
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a";

  /**
   * Text alignment.
   * Directly maps to Tailwind's text-{align} utilities.
   */
  align?: "left" | "center" | "right" | "justify";

  /**
   * Whether to enable text truncation with ellipsis.
   * Uses Tailwind's truncate utility.
   *
   * @default false
   */
  truncate?: boolean;

  /**
   * Optional CSS class to apply to the component.
   * Will be merged with the component's base classes via the cn utility.
   */
  className?: string;

  /**
   * The content to render inside the text component.
   */
  children?: React.ReactNode;

  /**
   * Optional: Apply more refined typography for certain semantic elements like headings.
   * @default false
   */
  refinedTypography?: boolean;
}

/**
 * Valid text variant options
 */
export type TextVariant = "default" | "muted" | "accent";

/**
 * Font weight options mapping to Tailwind classes
 */
export type FontWeight = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";

/**
 * Text alignment options
 */
export type TextAlign = "left" | "center" | "right" | "justify";
