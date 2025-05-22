import { cn } from "../../../../lib/utils/cn";
import { ThemeRadius, ThemeSize } from "../../../../lib/theme/atoms";
import { ButtonVariant } from "../types";

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
 * Size-sensitive radius matrix that maps component size and radius setting
 * to appropriate Tailwind classes. This ensures consistent visual appearance
 * across different component sizes.
 */
const radiusMatrix = {
  xs: {
    none: "rounded-none",
    sm: "rounded-none",
    md: "rounded-sm",
    lg: "rounded-sm",
    full: "rounded-full",
  },
  sm: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-sm",
    lg: "rounded-md",
    full: "rounded-full",
  },
  md: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-md",
    full: "rounded-full",
  },
  lg: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },
  xl: {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  },
};

/**
 * Get border radius style based on component size and theme
 * Uses a size-sensitive matrix to ensure visual consistency
 */
export const getRadiusStyle = (componentSize: ThemeSize, radius?: ThemeRadius, themeRadius?: ThemeRadius): string => {
  // Determine the effective radius (explicit prop, theme setting, or default)
  const effectiveRadius = radius || themeRadius || "md";

  // Look up the appropriate radius class from the matrix
  return radiusMatrix[componentSize][effectiveRadius];
};

/**
 * Get negative margin styles for ghost and link buttons to make them behave more like text
 * This creates optical alignment with siblings while preserving hover/active states
 */
export const getTextAlignmentStyles = (variant: ButtonVariant, componentSize: ThemeSize): string => {
  // Only apply to ghost and link variants
  if (variant !== "ghost" && variant !== "link") {
    return "";
  }

  // Size-based negative margins that match the corresponding padding
  const negativeMarginStyles = {
    xs: "-mx-2",
    sm: "-mx-3",
    md: "-mx-4",
    lg: "-mx-5",
    xl: "-mx-6",
  };

  return negativeMarginStyles[componentSize];
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
