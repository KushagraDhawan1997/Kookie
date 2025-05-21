import React from "react";
import { ThemeColor, ThemeRadius, ThemeSize, SemanticColorKey, ThemeStyle } from "../../../lib/theme/atoms";

/**
 * Variant options for the Button component
 */
export type ButtonVariant =
  // Fill variants
  "solid" | "outline" | "ghost" | "link" | "tinted";

/**
 * Valid color options for the Button component.
 * Can be either semantic colors from the theme system,
 * or direct Tailwind colors.
 */
export type ButtonColor = SemanticColorKey | ThemeColor;

/**
 * Valid radius options matching the theme's radius options
 */
export type ButtonRadius = ThemeRadius;

/**
 * Props for the Button component
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant style of the button
   * @default "solid"
   */
  variant?: ButtonVariant;

  /**
   * Color of the button - can be either:
   * - Semantic colors from the theme system
   * - Direct Tailwind colors
   *
   * @default "primary"
   */
  color?: ButtonColor;

  /**
   * Size of the button following the design system's sizing scale
   * @default inherited from ThemeProvider or "md"
   */
  size?: ThemeSize;

  /**
   * Border radius of the button
   * @default based on size or inherited from ThemeProvider
   */
  radius?: ButtonRadius;

  /**
   * Visual style/appearance of the button
   * @default inherited from ThemeProvider or "standard"
   */
  appearance?: ThemeStyle;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Whether the button takes up the full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Optional icon to display at the start of the button
   */
  leftIcon?: React.ReactNode;

  /**
   * Optional icon to display at the end of the button
   */
  rightIcon?: React.ReactNode;

  /**
   * The HTML element to render. Uses polymorphic component pattern.
   * @default "button"
   */
  as?: React.ElementType;

  /**
   * Children elements
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
