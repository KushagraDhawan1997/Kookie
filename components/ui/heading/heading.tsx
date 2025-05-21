"use client";

import React from "react";
import { useComponentSize } from "../../../lib/theme/hooks";
import { useTheme } from "../../../lib/theme/hooks";
import { TextVariant, FontWeight, TextAlign, TextSize } from "../text/types";
import { HeadingProps, defaultSizeMap } from "./types";
import { getDefaultWeight, getHeadingClasses } from "./styles";

/**
 * Heading component
 *
 * A specialized typography component for headings in the Kookie UI design system.
 * Based on the Text component but with defaults appropriate for headings.
 *
 * Features:
 * - Specialized for h1-h6 elements
 * - Heading-level based weights:
 *   - h1, h2, h3: bold (700) by default
 *   - h4, h5, h6: semibold (600) by default
 * - Automatic sizing based on heading level (no need to specify size prop)
 * - Maintains theme integration
 * - Enhanced size scale (one step larger than Text component)
 * - Configurable HTML heading level
 * - Separation of semantic level from visual styling
 *
 * Automatic size mapping (by heading level):
 * - h1 → size="3xl" → text-4xl
 * - h2 → size="2xl" → text-3xl
 * - h3 → size="xl" → text-2xl
 * - h4 → size="lg" → text-xl
 * - h5 → size="md" → text-lg
 * - h6 → size="sm" → text-base
 *
 * @example
 * // Basic usage with automatic sizing and weight
 * <Heading as="h1">Page Title</Heading>
 *
 * @example
 * // With explicit weight (overriding automatic weight)
 * <Heading as="h1" weight="medium">Medium Weight Page Title</Heading>
 *
 * @example
 * // With semantic level different from visual style
 * <Heading as="h2" level="h1">Visually h1, semantically h2</Heading>
 */
export function Heading({ children, size, weight, color = "gray", variant = "default", as: Component = "h2", level, align, truncate = false, refinedTypography = true, className, ...props }: HeadingProps) {
  // Get inherited size from component context (if available)
  const [inheritedSize] = useComponentSize();

  // Determine the effective heading level for styling
  const effectiveLevel = level || Component;

  // First use explicit size if provided,
  // then use heading level mapping (for automatic sizing),
  // finally fall back to inherited size if neither is available
  const resolvedSize = size || defaultSizeMap[effectiveLevel] || inheritedSize;

  // Use explicitly provided weight or the default weight based on heading level
  const resolvedWeight = weight || getDefaultWeight(effectiveLevel);

  // Access theme settings including gray scale and color mappings
  const { gray: grayScale, colorMap } = useTheme();

  // Generate the heading's classes
  const headingClasses = getHeadingClasses(resolvedSize as TextSize, resolvedWeight as FontWeight, color, variant as TextVariant, align as TextAlign, truncate, refinedTypography, grayScale, colorMap, className);

  return (
    <Component className={headingClasses} {...props}>
      {children}
    </Component>
  );
}
