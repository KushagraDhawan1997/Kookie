"use client";

import React from "react";
import { cn } from "../../../lib/utils/cn";
import { useComponentSize } from "../../../lib/theme/hooks";
import { useTheme } from "../../../lib/theme/hooks";
import { SemanticColorKey } from "../../../lib/theme/atoms";
import { ButtonProps, ButtonVariant } from "./types";
import { getSizeStyles, getPaddingStyles, getGapStyles, getRadiusStyle, getBaseClasses, getVariantStyleClasses } from "./styles";

/**
 * Button component
 *
 * A flexible button component that supports different variants, colors, and sizes.
 * Automatically integrates with the theme's color system and visual style settings.
 *
 * @example
 * // Basic solid primary button
 * <Button>Click me</Button>
 *
 * @example
 * // Outline warning button
 * <Button variant="outline" color="warning">Warning</Button>
 *
 * @example
 * // Large ghost danger button with left icon
 * <Button variant="ghost" color="danger" size="lg" leftIcon={<TrashIcon />}>Delete</Button>
 *
 * @example
 * // Using direct Tailwind color
 * <Button color="violet">Violet Button</Button>
 *
 * @example
 * // With custom radius
 * <Button radius="full">Rounded Button</Button>
 */
export function Button({ variant = "solid", color = "primary", size, radius, isLoading = false, fullWidth = false, leftIcon, rightIcon, as: Component = "button", className, disabled, children, ...props }: ButtonProps) {
  // Get inherited size from component context (if available)
  const [inheritedSize] = useComponentSize();

  // Use explicitly set size, or inherited size, or default to md
  const componentSize = size || inheritedSize || "md";

  // Get theme information including visual style setting and color mappings
  const { colorMap, radius: themeRadius, style: themeStyle } = useTheme();

  // Get size-related styles
  const sizeStyles = getSizeStyles(componentSize);
  const paddingStyles = getPaddingStyles(componentSize);
  const gapStyles = getGapStyles(componentSize);
  const radiusStyles = getRadiusStyle(componentSize, radius, themeRadius);

  // -------------------------------------------------------------------------
  // Generate the complete class names based on variant, color, and visual style
  // -------------------------------------------------------------------------
  const generateButtonClasses = () => {
    // Base button styles
    const baseClasses = getBaseClasses(fullWidth, sizeStyles, paddingStyles, gapStyles, radiusStyles);

    // If the button is in loading state, apply loading styles
    if (isLoading) {
      return cn(baseClasses, "opacity-80 cursor-wait");
    }

    // Check if we're using a semantic color or a direct Tailwind color
    const isSemanticColor = Object.keys(colorMap).includes(color);

    // Resolve color to the actual Tailwind color name
    let resolvedColor: string;
    if (isSemanticColor) {
      // For semantic colors, look up in the theme's color map
      resolvedColor = colorMap[color as SemanticColorKey] || "gray";
    } else {
      // For direct Tailwind colors, use as-is
      resolvedColor = color as string;
    }

    // Get variant-specific styles for the resolved color
    const variantStyles = getVariantStyleClasses(variant as ButtonVariant, resolvedColor, themeStyle);

    return cn(baseClasses, variantStyles);
  };

  // Generate the button's complete class names
  const buttonClasses = generateButtonClasses();

  return (
    <Component className={cn(buttonClasses, className)} disabled={disabled || isLoading} {...props}>
      {leftIcon && <span className="inline-flex self-center">{leftIcon}</span>}
      {isLoading ? (
        <span className="inline-flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{children}</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
      {rightIcon && <span className="inline-flex self-center">{rightIcon}</span>}
    </Component>
  );
}
