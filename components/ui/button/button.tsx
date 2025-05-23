"use client";

import React from "react";
import { Text } from "../text/text";
import { useTheme } from "@/components/providers/theme-provider";
import { ButtonSize } from "./button-types";
import { ButtonProps, buttonPropDefs } from "./button.props";
import { marginPropDefs, MarginProps } from "@/components/props/margin.props";
import { processResponsiveStyles } from "@/components/helpers/extract-props";
import "./button.css";

/**
 * Maps button sizes to typography sizes (non-linear for visual hierarchy):
 * Button size 1 (16px) → Text size 1
 * Button size 2 (24px) → Text size 1
 * Button size 3 (32px) → Text size 2
 * Button size 4 (40px) → Text size 2
 * Button size 5 (48px) → Text size 3
 * Button size 6 (64px) → Text size 3
 *
 * This mapping is intentionally non-linear to maintain visual hierarchy and readability:
 * - Sizes 1 and 2 use the smallest text for compact UIs
 * - Sizes 3 and 4 use a medium text size for better legibility
 * - Sizes 5 and 6 use the largest text size for hero/marketing buttons
 */
const sizeMap: Record<ButtonSize, 1 | 2 | 3> = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2, 6: 3 };

const buttonDefaults = {
  variant: "solid" as const,
  asChild: false,
  className: "",
} as const;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ size, variant = buttonDefaults.variant, color, roundness, asChild = buttonDefaults.asChild, className = buttonDefaults.className, children, ...props }, ref) => {
  const { size: themeSize, roundness: themeRoundness, color: themeColor } = useTheme();
  const finalSize = size ?? themeSize;
  const finalRoundness = roundness ?? themeRoundness;
  const finalColor = color ?? themeColor;

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

  const Component = asChild ? "span" : "button";
  const classes = ["button-root", `button-size-${finalSize}`, className].filter(Boolean).join(" ");

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      "data-variant": variant,
      "data-primary-color": finalColor,
      "data-roundness": finalRoundness,
      ...props,
      style: {
        ...marginStyles,
        ...props.style,
      },
    },
    <Text as="span" size={sizeMap[finalSize]} color="inherit" weight="medium">
      {children}
    </Text>
  );
});

Button.displayName = "Button";
