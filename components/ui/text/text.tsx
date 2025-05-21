import React from "react";
import { cn } from "../../../lib/utils/cn";
import { useComponentSize } from "../../../lib/theme/hooks";
import { useTheme } from "../../../lib/theme/hooks";
import { ThemeColor, ThemeSize } from "../../../lib/theme/atoms";

/**
 * Extended size options for Text component beyond the base ThemeSize
 */
type TextSize = ThemeSize | "2xl" | "3xl";

/**
 * Valid color options for the Text component.
 * Can be either semantic colors (primary, success, etc.) that map to theme settings,
 * direct Tailwind colors (blue, indigo, etc.), or special values like 'current'.
 */
type ColorProp = "primary" | "success" | "warning" | "danger" | "gray" | "current" | ThemeColor;

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
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
}

/**
 * Text component
 *
 * The foundational typography component for the Kookie UI design system.
 * Handles text styling with theme integration, responsive sizing, and
 * semantic color options.
 *
 * Features:
 * - Size inheritance from parent components
 * - Semantic and direct color options
 * - Consistent typography scales based on design tokens
 * - Configurable HTML element rendering
 * - Font weight and alignment options
 * - Truncation support
 *
 * @example
 * // Basic usage
 * <Text>Default text</Text>
 *
 * @example
 * // With semantic color and size
 * <Text color="primary" size="lg">Primary large text</Text>
 *
 * @example
 * // With direct Tailwind color and variant
 * <Text color="indigo" variant="muted">Muted indigo text</Text>
 *
 * @example
 * // As a heading
 * <Text as="h2" size="2xl" weight="bold">Section Heading</Text>
 */
export function Text({ children, size, weight = "normal", color = "gray", variant = "default", as: Component = "p", align, truncate = false, className, ...props }: TextProps) {
  // Get inherited size from component context (if available)
  const [inheritedSize] = useComponentSize();

  // Determine the final size to use (explicit size prop or inherited size)
  // For Text component, we handle extended sizes beyond ThemeSize
  const componentSize = size || inheritedSize;

  // Access theme settings including gray scale and color mappings
  const { getTwColorClass, gray: grayScale } = useTheme();

  // -------------------------------------------------------------------------
  // Size styles - Map component size to the typography scale from our design token reference
  // -------------------------------------------------------------------------
  const sizeStyles = {
    // Size mapping based on design token reference
    xs: "text-xs leading-4", // Extra small: 12px font, 16px line height
    sm: "text-sm leading-5", // Small: 14px font, 20px line height
    md: "text-base leading-6", // Medium (default): 16px font, 24px line height
    lg: "text-lg leading-7", // Large: 18px font, 28px line height
    xl: "text-xl leading-8", // Extra large: 20px font, 32px line height
    "2xl": "text-2xl leading-9", // 2X large: 24px font, 36px line height
    "3xl": "text-3xl leading-10", // 3X large: 30px font, 40px line height
  }[componentSize || "md"]; // Default to medium if no size is inherited or provided

  // -------------------------------------------------------------------------
  // Font weight styles - Direct mapping to Tailwind's font-{weight} classes
  // -------------------------------------------------------------------------
  const weightStyles = `font-${weight}`;

  // -------------------------------------------------------------------------
  // Color styles - With support for both semantic and direct Tailwind colors
  // -------------------------------------------------------------------------

  // Check if we're using a semantic color or a direct Tailwind color
  const isSemanticColor = ["primary", "success", "warning", "danger", "gray", "current"].includes(color);

  // Determine color shade based on variant
  // - default: stronger color (700)
  // - muted: lighter color (400)
  // - accent: middle-ground color (600)
  const getShadeForVariant = (variant: string) => {
    switch (variant) {
      case "muted":
        return 400;
      case "accent":
        return 600;
      case "default":
      default:
        return 700;
    }
  };

  // Compute the final color class based on color prop and variant
  let colorStyles;

  if (color === "gray") {
    // Gray is special - it uses the configured gray scale from the theme (slate, gray, zinc, etc.)
    colorStyles =
      variant === "default"
        ? `text-${grayScale}-900` // Default gray uses darker 900 shade for better readability
        : variant === "muted"
        ? `text-${grayScale}-500` // Muted gray uses middle 500 shade
        : variant === "accent"
        ? `text-${grayScale}-700` // Accent gray uses 700 shade
        : `text-${grayScale}-900`; // Fallback to 900
  } else if (color === "current") {
    // 'current' inherits text color from parent element
    colorStyles = "text-current";
  } else if (isSemanticColor) {
    // For semantic colors (primary, success, warning, danger)
    // Use the theme's getTwColorClass helper to map semantic colors to actual Tailwind colors
    colorStyles = getTwColorClass("text", color as "primary" | "success" | "warning" | "danger", getShadeForVariant(variant));
  } else {
    // Direct Tailwind color (blue, indigo, rose, etc.)
    // Apply the color directly without going through the theme mapping
    colorStyles = `text-${color}-${getShadeForVariant(variant)}`;
  }

  // -------------------------------------------------------------------------
  // Other style properties
  // -------------------------------------------------------------------------

  // Text alignment - Maps directly to Tailwind's text-{align} utilities
  const alignStyles = align ? `text-${align}` : "";

  // Truncation - Applies Tailwind's truncate utility for text overflow with ellipsis
  const truncateStyles = truncate ? "truncate" : "";

  // -------------------------------------------------------------------------
  // Render the component with the calculated styles
  // -------------------------------------------------------------------------
  return (
    <Component
      className={cn(
        // Merge all computed style classes
        sizeStyles, // Typography scale (size, line height)
        weightStyles, // Font weight
        colorStyles, // Text color
        alignStyles, // Text alignment
        truncateStyles, // Truncation
        className // User-provided classes (take precedence)
      )}
      {...props} // Pass through other HTML attributes
    >
      {children}
    </Component>
  );
}
