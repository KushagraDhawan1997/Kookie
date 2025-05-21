import { cn } from "../../../../lib/utils/cn";
import { ThemeRadius, ThemeSize } from "../../../../lib/theme/atoms";

// -----------------------------------------------------------------------------
// Size-based styles
// -----------------------------------------------------------------------------

/**
 * Map component size to height and text size
 */
export const getSizeStyles = (componentSize: ThemeSize): string => {
  const styles = {
    xs: "h-5 text-xs",
    sm: "h-6 text-xs",
    md: "h-8 text-sm",
    lg: "h-10 text-sm",
    xl: "h-12 text-base",
  };

  return styles[componentSize];
};

/**
 * Map component size to padding
 */
export const getPaddingStyles = (componentSize: ThemeSize): string => {
  const styles = {
    xs: "px-2",
    sm: "px-3",
    md: "px-4",
    lg: "px-5",
    xl: "px-6",
  };

  return styles[componentSize];
};

/**
 * Map component size to gap between icon and text
 */
export const getGapStyles = (componentSize: ThemeSize): string => {
  const styles = {
    xs: "gap-1.5",
    sm: "gap-2",
    md: "gap-2.5",
    lg: "gap-3",
    xl: "gap-3.5",
  };

  return styles[componentSize];
};

/**
 * Get border radius style based on component size and theme
 */
export const getRadiusStyle = (componentSize: ThemeSize, radius?: ThemeRadius, themeRadius?: ThemeRadius): string => {
  // Map from radius size to Tailwind class
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    base: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  // First priority: explicit radius prop
  if (radius) {
    return radiusClasses[radius] || radiusClasses.md;
  }

  // Second priority: theme radius
  if (themeRadius) {
    return radiusClasses[themeRadius] || radiusClasses.md;
  }

  // Third priority: size-based radius with more dramatic styles
  const sizeBasedRadius = {
    xs: "rounded",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-xl",
  }[componentSize];

  return sizeBasedRadius;
};

// -----------------------------------------------------------------------------
// Base button styles
// -----------------------------------------------------------------------------

/**
 * Get base button classes
 */
export const getBaseClasses = (fullWidth: boolean, sizeStyles: string, paddingStyles: string, gapStyles: string, radiusStyles: string): string => {
  return cn(
    "inline-flex items-center justify-center",
    "font-medium",
    "cursor-pointer",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-opacity-75",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    "overflow-hidden relative", // For potential effects
    fullWidth ? "w-full" : "",
    sizeStyles,
    paddingStyles,
    gapStyles,
    radiusStyles
  );
};
