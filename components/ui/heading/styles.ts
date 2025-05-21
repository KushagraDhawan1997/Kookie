import { TextSize, TextVariant, FontWeight, TextAlign } from "../text/types";
import { HeadingLevel } from "./types";
import { getTextClasses } from "../text/styles";

/**
 * Maps text size to enhanced Tailwind classes for headings
 */
export const headingSizeStyles: Record<TextSize, string> = {
  // Size mapping for headings - larger than text component equivalents
  xs: "text-sm leading-5", // Heading xs → text-sm (was text-xs)
  sm: "text-base leading-6", // Heading sm → text-base (was text-sm)
  md: "text-lg leading-7", // Heading md → text-lg (was text-base)
  lg: "text-xl leading-8", // Heading lg → text-xl (was text-lg)
  xl: "text-2xl leading-9", // Heading xl → text-2xl (was text-xl)
  "2xl": "text-3xl leading-10", // Heading 2xl → text-3xl (was text-2xl)
  "3xl": "text-4xl leading-[2.75rem]", // Heading 3xl → text-4xl (was text-3xl)
};

/**
 * Get default weight based on heading level
 */
export const getDefaultWeight = (level: HeadingLevel): FontWeight => {
  return ["h1", "h2", "h3"].includes(level) ? "bold" : "semibold";
};

/**
 * Get heading classes based on props and theme settings
 */
export const getHeadingClasses = (
  resolvedSize: TextSize | undefined,
  weight: FontWeight,
  color: string,
  variant: TextVariant,
  align: TextAlign | undefined,
  truncate: boolean,
  refinedTypography: boolean,
  grayScale: string,
  colorMap: Record<string, string>,
  className?: string
): string => {
  // Use heading-specific size styles if a size is resolved
  if (resolvedSize && headingSizeStyles[resolvedSize]) {
    const classes = getTextClasses(
      undefined, // Don't pass size to text classes since we'll handle that
      weight,
      color,
      variant,
      align,
      truncate,
      refinedTypography,
      grayScale,
      colorMap,
      className
    );

    // Replace any existing text-* size class with our heading size class
    const sizeRegex = /text-(xs|sm|base|lg|xl|2xl|3xl|4xl)/;
    const hasTextSizeClass = sizeRegex.test(classes);

    if (hasTextSizeClass) {
      return classes.replace(sizeRegex, headingSizeStyles[resolvedSize].split(" ")[0]);
    } else {
      return `${headingSizeStyles[resolvedSize]} ${classes}`;
    }
  }

  // Fall back to standard text classes if no size is resolved
  return getTextClasses(resolvedSize, weight, color, variant, align, truncate, refinedTypography, grayScale, colorMap, className);
};
