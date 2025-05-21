"use client";

import React from "react";
import { cn } from "../../../lib/utils/cn";
import { useComponentSize } from "../../../lib/theme/hooks";
import { useTheme } from "../../../lib/theme/hooks";
import { ThemeColor, ThemeSize } from "../../../lib/theme/atoms";
import { TextProps } from "./text";

/**
 * Valid heading levels for the Heading component
 */
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * HeadingProps interface - defines all available props for the Heading component
 *
 * The Heading component is specialized for heading elements (h1-h6).
 * It shares most properties with the Text component but has different defaults.
 */
export interface HeadingProps extends Omit<TextProps, "as"> {
  /**
   * HTML heading element to render.
   * Allows semantic heading levels while maintaining consistent styling.
   *
   * @default 'h2'
   */
  as?: HeadingLevel;

  /**
   * The heading level affects default styling even when rendered as a different element.
   * For example, level="h1" with as="h2" will style as an h1 but render as an h2 element.
   * This is useful for maintaining semantic structure while keeping design consistent.
   *
   * If not specified, defaults to the same as the "as" prop.
   */
  level?: HeadingLevel;
}

/**
 * Heading component
 *
 * A specialized typography component for headings in the Kookie UI design system.
 * Based on the Text component but with defaults appropriate for headings.
 *
 * Features:
 * - Specialized for h1-h6 elements
 * - Default weight of semibold
 * - Maintains theme integration
 * - Consistent typography scales based on design tokens
 * - Configurable HTML heading level
 *
 * @example
 * // Basic usage
 * <Heading>Section Title</Heading>
 *
 * @example
 * // With specific level
 * <Heading as="h1" size="xl">Page Title</Heading>
 *
 * @example
 * // With semantic level different from visual style
 * <Heading as="h2" level="h1">Visually h1, semantically h2</Heading>
 */
export function Heading({ children, size, weight = "semibold", color = "gray", variant = "default", as: Component = "h2", level, align, truncate = false, refinedTypography = true, className, ...props }: HeadingProps) {
  // Get inherited size from component context (if available)
  const [inheritedSize] = useComponentSize();

  // Determine the final size to use (explicit size prop or inherited size)
  const componentSize = size || inheritedSize;

  // Determine the effective heading level for styling
  const effectiveLevel = level || Component;

  // Generate default size based on heading level if not explicitly set
  const defaultSizeMap: Record<HeadingLevel, TextSize> = {
    h1: "3xl",
    h2: "2xl",
    h3: "xl",
    h4: "lg",
    h5: "md",
    h6: "sm",
  };

  // Use explicit size, or a default based on heading level
  const resolvedSize = componentSize || defaultSizeMap[effectiveLevel];

  // Access theme settings including gray scale and color mappings
  const { gray: grayScale, colorMap } = useTheme();

  // ------------------------------------------------------------------------ -
  // Style Maps for Tailwind v4 compatibility
  // ------------------------------------------------------------------------ -

  const fontWeightStylesMap = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const textAlignStylesMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  // Covers common Tailwind gray scales. Ensure this aligns with your theme's possible grayScale values.
  const grayTextColorStyles: Record<string, Record<"default" | "muted" | "accent", string>> = {
    slate: { default: "text-slate-900", muted: "text-slate-500", accent: "text-slate-700" },
    gray: { default: "text-gray-900", muted: "text-gray-500", accent: "text-gray-700" },
    zinc: { default: "text-zinc-900", muted: "text-zinc-500", accent: "text-zinc-700" },
    neutral: { default: "text-neutral-900", muted: "text-neutral-500", accent: "text-neutral-700" },
    stone: { default: "text-stone-900", muted: "text-stone-500", accent: "text-stone-700" },
  };

  // Covers common Tailwind colors. This map should be comprehensive for all supported ThemeColor values.
  const directTextColorStyles: Record<string, Record<"default" | "muted" | "accent", string>> = {
    red: { default: "text-red-700", muted: "text-red-400", accent: "text-red-600" },
    orange: { default: "text-orange-700", muted: "text-orange-400", accent: "text-orange-600" },
    amber: { default: "text-amber-700", muted: "text-amber-400", accent: "text-amber-600" },
    yellow: { default: "text-yellow-700", muted: "text-yellow-400", accent: "text-yellow-600" },
    lime: { default: "text-lime-700", muted: "text-lime-400", accent: "text-lime-600" },
    green: { default: "text-green-700", muted: "text-green-400", accent: "text-green-600" },
    emerald: { default: "text-emerald-700", muted: "text-emerald-400", accent: "text-emerald-600" },
    teal: { default: "text-teal-700", muted: "text-teal-400", accent: "text-teal-600" },
    cyan: { default: "text-cyan-700", muted: "text-cyan-400", accent: "text-cyan-600" },
    sky: { default: "text-sky-700", muted: "text-sky-400", accent: "text-sky-600" },
    blue: { default: "text-blue-700", muted: "text-blue-400", accent: "text-blue-600" },
    indigo: { default: "text-indigo-700", muted: "text-indigo-400", accent: "text-indigo-600" },
    violet: { default: "text-violet-700", muted: "text-violet-400", accent: "text-violet-600" },
    purple: { default: "text-purple-700", muted: "text-purple-400", accent: "text-purple-600" },
    fuchsia: { default: "text-fuchsia-700", muted: "text-fuchsia-400", accent: "text-fuchsia-600" },
    pink: { default: "text-pink-700", muted: "text-pink-400", accent: "text-pink-600" },
    rose: { default: "text-rose-700", muted: "text-rose-400", accent: "text-rose-600" },
  };

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
  }[resolvedSize || "lg"]; // Default to large if no size is provided

  // -------------------------------------------------------------------------
  // Font weight styles - Direct mapping to Tailwind's font-{weight} classes
  // -------------------------------------------------------------------------
  const weightStyles = fontWeightStylesMap[weight];

  // -------------------------------------------------------------------------
  // Refined Typography (for headings)
  // -------------------------------------------------------------------------
  let refinedStyles = refinedTypography ? "tracking-tight" : "";

  // -------------------------------------------------------------------------
  // Color styles - With support for both semantic and direct Tailwind colors
  // -------------------------------------------------------------------------

  // Check if we're using a semantic color or a direct Tailwind color
  const isSemanticColor = ["primary", "success", "warning", "danger", "gray", "current"].includes(color);

  // Compute the final color class based on color prop and variant
  let colorStyles;

  if (color === "gray") {
    // Gray is special - it uses the configured gray scale from the theme
    const stylesForScale = grayTextColorStyles[grayScale as keyof typeof grayTextColorStyles];
    if (stylesForScale) {
      colorStyles = stylesForScale[variant as "default" | "muted" | "accent"] || stylesForScale.default;
    } else {
      // Fallback if grayScale from theme is not in grayTextColorStyles
      colorStyles = grayTextColorStyles.gray.default; // Default to 'text-gray-900'
    }
  } else if (color === "current") {
    // 'current' inherits text color from parent element
    colorStyles = "text-current";
  } else if (isSemanticColor) {
    // For semantic colors (primary, success, warning, danger)
    // Resolve the semantic color to the actual ThemeColor using colorMap
    const actualColor = colorMap[color as keyof typeof colorMap];
    if (actualColor) {
      const stylesForColor = directTextColorStyles[actualColor as keyof typeof directTextColorStyles];
      if (stylesForColor) {
        colorStyles = stylesForColor[variant as "default" | "muted" | "accent"] || stylesForColor.default;
      } else {
        // Fallback if the resolved actualColor is not in directTextColorStyles (should not happen if maps are synced)
        console.warn(`Heading component: No direct styles found for resolved semantic color '${actualColor}' from '${color}'.`);
        colorStyles = "text-black"; // Default to black
      }
    } else {
      // Fallback if the semantic color is not in colorMap (e.g. "gray" or "current" handled above, or an unknown semantic color)
      console.warn(`Heading component: Unknown semantic color '${color}'.`);
      colorStyles = "text-black"; // Default to black
    }
  } else {
    // Direct Tailwind color (blue, indigo, rose, etc.)
    const selectedColorKey = color as keyof typeof directTextColorStyles;
    const stylesForColor = directTextColorStyles[selectedColorKey];
    if (stylesForColor) {
      colorStyles = stylesForColor[variant as "default" | "muted" | "accent"] || stylesForColor.default;
    } else {
      // Fallback for unmapped direct colors. Consider logging a warning.
      // For safety, defaulting to black. Ensure directTextColorStyles is comprehensive.
      colorStyles = "text-black";
    }
  }

  // -------------------------------------------------------------------------
  // Other style properties
  // -------------------------------------------------------------------------

  // Text alignment - Maps directly to Tailwind's text-{align} utilities
  const alignStyles = align ? textAlignStylesMap[align] : "";

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
        refinedStyles, // Additional refined typographic styles
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

/**
 * This is needed to prevent TypeScript errors since we're using the Text component's types
 */
type TextSize = ThemeSize | "2xl" | "3xl";
