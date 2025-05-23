"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useTheme } from "@/components/providers/theme-provider";
import { HeadingProps, headingPropDefs } from "./heading.props";
import { marginPropDefs, MarginProps } from "@/components/props/margin.props";
import { processResponsiveStyles } from "@/components/helpers/extract-props";
import "./heading.css";

const headingDefaults = {
  as: "h1" as const,
  variant: "default" as const,
  size: 6,
  weight: "bold" as const,
  truncate: false,
  className: "",
  asChild: false,
} as const;

/**
 * Heading component
 *
 * A polymorphic heading component that supports h1-h6, sizes, weights, colors, and other styling options.
 * Uses CSS custom properties and data attributes for styling. Spacing should be controlled by flex/grid, not margin.
 *
 * @param {HeadingProps} props - Component props
 * @returns {JSX.Element} Heading component
 */
export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  (
    {
      as = headingDefaults.as,
      color,
      variant = headingDefaults.variant,
      size = headingDefaults.size,
      weight = headingDefaults.weight,
      align,
      truncate = headingDefaults.truncate,
      className = headingDefaults.className,
      children,
      asChild = headingDefaults.asChild,
      ...props
    },
    ref
  ) => {
    useTheme();

    // Only allow h1-h6
    const Component = asChild ? Slot : as;

    // Combine classes based on props
    const classes = [`heading-size-${size}`, truncate && "truncate", className].filter(Boolean).join(" ");

    // Process margin styles (for compatibility, but recommend not using margin)
    const marginStyles: Record<string, any> = {};
    Object.entries(marginPropDefs).forEach(([key, propDef]) => {
      const propName = key as keyof MarginProps;
      const propValue = props[propName];
      if (propValue !== undefined) {
        const style = processResponsiveStyles(propValue, (val) => propDef.mapToStyle!(val));
        if (style) {
          Object.assign(marginStyles, style);
        }
        delete (props as any)[propName];
      }
    });

    const componentProps = {
      ref,
      className: classes,
      ...(color && { "data-primary-color": color }),
      "data-variant": variant,
      "data-weight": weight,
      ...(align && { "data-align": align }),
      ...(truncate && { "data-truncate": "true" }),
      ...props,
      style: {
        ...marginStyles,
        ...props.style,
      },
    };

    return React.createElement(Component, componentProps, children);
  }
);

Heading.displayName = "Heading";
