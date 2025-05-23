"use client";

import React from "react";
import { Text } from "../text/text";
import { TypographySize } from "../text/text-types";
import { useTheme } from "@/components/providers/theme-provider";
import "./button.css";
import { ButtonSize, ButtonVariant, ButtonColor, ButtonProps } from "./button-types";

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
const sizeMap: Record<ButtonSize, TypographySize> = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2, 6: 3 };

const buttonDefaults = {
  variant: "solid" as ButtonVariant,
  asChild: false,
  className: "",
} as const;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ size, variant = buttonDefaults.variant, color, roundness, asChild = buttonDefaults.asChild, className = buttonDefaults.className, children, ...props }, ref) => {
  const { size: themeSize, roundness: themeRoundness, color: themeColor } = useTheme();
  const finalSize = size ?? themeSize;
  const finalRoundness = roundness ?? themeRoundness;
  const finalColor = color ?? themeColor;

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
    },
    <Text as="span" size={sizeMap[finalSize]} color="inherit" weight="medium">
      {children}
    </Text>
  );
});

Button.displayName = "Button";
