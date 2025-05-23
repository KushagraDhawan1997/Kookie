import { PropDef, Responsive } from "../../helpers/component-props";
import { MarginProps } from "../../props/margin.props";
import { SemanticColorKey, ThemeColor } from "../../providers/theme-types";

/**
 * Available text size options using a numeric scale (1-12)
 */
export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Font weight options
 */
export type TextWeight = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";

/**
 * Text alignment options
 */
export type TextAlign = "left" | "center" | "right" | "justify";

/**
 * Color options for text
 */
export type TextColor = SemanticColorKey | ThemeColor | "inherit";

/**
 * HTML element types for Text
 */
export type TextAs = keyof HTMLElementTagNameMap;

/**
 * Text variant options for different emphasis levels
 * - default: Regular text (uses color step 12)
 * - muted: Less prominent text (uses color step 10)
 * - accent: Emphasized text (uses color step 11)
 */
export type TextVariant = "default" | "muted" | "accent";

/**
 * Text-specific props
 */
export interface TextOwnProps {
  /** Element to render as */
  as?: TextAs;

  /** Whether to merge props onto child element rather than creating a new element */
  asChild?: boolean;

  /** Text color */
  color?: TextColor;

  /** Text size */
  size?: TextSize;

  /** Font weight */
  weight?: TextWeight;

  /** Text alignment */
  align?: TextAlign;

  /** Text variant for emphasis */
  variant?: TextVariant;

  /** Whether to truncate text with ellipsis */
  truncate?: boolean;

  /** Child elements */
  children?: React.ReactNode;

  /** Custom class name */
  className?: string;
}

/**
 * Complete Text component props
 */
export interface TextProps extends TextOwnProps, MarginProps, Omit<React.HTMLAttributes<HTMLElement>, "color"> {}

// Text-specific prop definitions
export const textPropDefs: Record<keyof TextOwnProps, PropDef> = {
  as: {
    name: "as",
    // Used directly, no mapping needed
  },
  asChild: {
    name: "asChild",
    // Used directly, no mapping needed
  },
  color: {
    name: "color",
    // Handled via data attributes, no class/style mapping needed
  },
  size: {
    name: "size",
    mapToClass: (value) => `text-size-${value}`,
  },
  weight: {
    name: "weight",
    // Handled via data attributes, no class/style mapping needed
  },
  align: {
    name: "align",
    // Handled via data attributes, no class/style mapping needed
  },
  variant: {
    name: "variant",
    // Handled via data attributes, no class/style mapping needed
  },
  truncate: {
    name: "truncate",
    mapToClass: (value) => (value ? "truncate" : ""),
  },
  children: {
    name: "children",
    // Used directly, no mapping needed
  },
  className: {
    name: "className",
    // Used directly, no mapping needed
  },
};
