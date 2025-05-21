"use client";

import React from "react";
import { useComponentSize } from "../../../lib/theme/hooks";
import { useTheme } from "../../../lib/theme/hooks";
import { TextProps, TextVariant, FontWeight, TextAlign } from "./types";
import { getTextClasses } from "./styles";

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
export function Text({ children, size, weight = "normal", color = "gray", variant = "default", as: Component = "p", align, truncate = false, refinedTypography = false, className, ...props }: TextProps) {
  // Get inherited size from component context (if available)
  const [inheritedSize] = useComponentSize();

  // Determine the final size to use (explicit size prop or inherited size)
  const componentSize = size || inheritedSize;

  // Access theme settings including gray scale and color mappings
  const { gray: grayScale, colorMap } = useTheme();

  // Generate the component's classes
  const textClasses = getTextClasses(componentSize, weight as FontWeight, color, variant as TextVariant, align as TextAlign, truncate, refinedTypography, grayScale, colorMap, className);

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
}
