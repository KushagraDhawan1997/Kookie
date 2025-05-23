import { PropDef } from "../../helpers/component-props";
import { MarginProps } from "../../props/margin.props";
import { HeadingSize, HeadingAs, HeadingVariant, HeadingColor } from "./heading-types";

/**
 * Font weight options
 */
export type HeadingWeight = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";

/**
 * Text alignment options
 */
export type HeadingAlign = "left" | "center" | "right" | "justify";

/**
 * Heading-specific props
 */
export interface HeadingOwnProps {
  /** Element to render as (h1-h6 only) */
  as?: HeadingAs;

  /** Whether to merge props onto child element rather than creating a new element */
  asChild?: boolean;

  /** Heading color */
  color?: HeadingColor;

  /** Heading size */
  size?: HeadingSize;

  /** Font weight */
  weight?: HeadingWeight;

  /** Text alignment */
  align?: HeadingAlign;

  /** Heading variant for emphasis */
  variant?: HeadingVariant;

  /** Whether to truncate text with ellipsis */
  truncate?: boolean;

  /** Child elements */
  children?: React.ReactNode;

  /** Custom class name */
  className?: string;
}

/**
 * Complete Heading component props
 */
export interface HeadingProps extends HeadingOwnProps, MarginProps, Omit<React.HTMLAttributes<HTMLElement>, "color"> {}

// Heading-specific prop definitions
export const headingPropDefs: Record<keyof HeadingOwnProps, PropDef> = {
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
    mapToClass: (value) => `heading-size-${value}`,
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
