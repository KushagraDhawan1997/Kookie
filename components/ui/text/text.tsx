"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useTheme } from "@/components/providers/theme-provider";
import { TextProps, textPropDefs } from "./text.props";
import { marginPropDefs, MarginProps } from "@/components/shared/margin.props";
import { processResponsiveStyles } from "@/components/helpers/extract-props";
import "./text.css";

const textDefaults = {
  as: "span" as const,
  variant: "default" as const,
  size: 3,
  weight: "normal" as const,
  truncate: false,
  className: "",
  asChild: false,
} as const;

/**
 * Text component
 *
 * A polymorphic text component that supports different HTML elements,
 * sizes, weights, colors, and other text styling options. Uses CSS
 * custom properties and data attributes for styling.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Text>Default text</Text>
 *
 * // With styling options
 * <Text
 *   as="h2"
 *   size={5}
 *   weight="semibold"
 *   color="primary"
 *   variant="accent"
 *   align="center"
 * >
 *   Styled heading
 * </Text>
 *
 * // Truncated text
 * <Text truncate className="max-w-xs">
 *   This is a very long text that will be truncated...
 * </Text>
 *
 * // Using asChild to apply text styles to another component
 * <Text asChild size={4} color="primary">
 *   <a href="/somewhere">This link has text styling</a>
 * </Text>
 *
 * // With margin props
 * <Text mb={4} mt={2}>Text with margin</Text>
 * ```
 *
 * @param {TextProps} props - Component props
 * @returns {JSX.Element} Text component
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as = textDefaults.as,
      color,
      variant = textDefaults.variant,
      size = textDefaults.size,
      weight = textDefaults.weight,
      align,
      truncate = textDefaults.truncate,
      className = textDefaults.className,
      children,
      asChild = textDefaults.asChild,
      ...props
    },
    ref
  ) => {
    // Initialize theme context to ensure theme variables are available
    useTheme();

    // Combine classes based on props
    const classes = [`text-size-${size}`, truncate && "truncate", className].filter(Boolean).join(" ");

    // Process margin styles
    const marginStyles: Record<string, any> = {};

    // Apply margin styles for each margin prop
    Object.entries(marginPropDefs).forEach(([key, propDef]) => {
      const propName = key as keyof MarginProps;
      const propValue = props[propName];

      if (propValue !== undefined) {
        const style = processResponsiveStyles(propValue, (val) => propDef.mapToStyle!(val));
        if (style) {
          Object.assign(marginStyles, style);
        }
        // Remove processed margin props
        delete (props as any)[propName];
      }
    });

    // Use Slot or the specified element
    const Component = asChild ? Slot : as;

    // Combine component props with style
    const componentProps = {
      ref,
      className: classes,
      ...(color && { [color === "inherit" ? "data-color" : "data-primary-color"]: color }),
      "data-variant": variant,
      "data-weight": weight,
      ...(align && { "data-align": align }),
      ...props,
      style: {
        ...marginStyles,
        ...props.style,
      },
    };

    // Render the component using createElement to avoid type issues
    return React.createElement(Component, componentProps, children);
  }
);

Text.displayName = "Text";
