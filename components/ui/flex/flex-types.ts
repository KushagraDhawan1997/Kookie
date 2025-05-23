import React from "react";

/**
 * Responsive utility type that allows properties to be defined for different breakpoints
 */
export type Responsive<T> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };

/**
 * Flex direction options
 */
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

/**
 * Flex alignment options (align-items)
 */
export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";

/**
 * Flex justify content options
 */
export type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

/**
 * Flex wrap options
 */
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

/**
 * Display options
 */
export type FlexDisplay = "none" | "inline-flex" | "flex";

/**
 * Spacing values using integer multipliers for --spacing variable in Tailwind v4
 *
 * In Tailwind v4, spacing utilities use integer values that are multiplied by
 * the --spacing variable (default 0.25rem)
 */
export type SpacingValue = number;

/**
 * Props for the Flex component
 *
 * @interface FlexProps
 * @extends {React.HTMLAttributes<HTMLElement>}
 */
export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render as */
  as?: "div" | "span";

  /** Whether to merge props onto child element rather than creating a new element */
  asChild?: boolean;

  /** Display property */
  display?: Responsive<FlexDisplay>;

  /** Flex direction */
  direction?: Responsive<FlexDirection>;

  /** Align items */
  align?: Responsive<FlexAlign>;

  /** Justify content */
  justify?: Responsive<FlexJustify>;

  /** Flex wrap */
  wrap?: Responsive<FlexWrap>;

  /** Gap between items (shorthand for both row and column gap)
   * Integer value multiplied by --spacing (0.25rem) */
  gap?: Responsive<SpacingValue>;

  /** Gap between items on horizontal axis
   * Integer value multiplied by --spacing (0.25rem) */
  gapX?: Responsive<SpacingValue>;

  /** Gap between items on vertical axis
   * Integer value multiplied by --spacing (0.25rem) */
  gapY?: Responsive<SpacingValue>;

  /** Padding on all sides
   * Integer value multiplied by --spacing (0.25rem) */
  p?: Responsive<SpacingValue>;

  /** Horizontal padding (left and right)
   * Integer value multiplied by --spacing (0.25rem) */
  px?: Responsive<SpacingValue>;

  /** Vertical padding (top and bottom)
   * Integer value multiplied by --spacing (0.25rem) */
  py?: Responsive<SpacingValue>;

  /** Padding top
   * Integer value multiplied by --spacing (0.25rem) */
  pt?: Responsive<SpacingValue>;

  /** Padding right
   * Integer value multiplied by --spacing (0.25rem) */
  pr?: Responsive<SpacingValue>;

  /** Padding bottom
   * Integer value multiplied by --spacing (0.25rem) */
  pb?: Responsive<SpacingValue>;

  /** Padding left
   * Integer value multiplied by --spacing (0.25rem) */
  pl?: Responsive<SpacingValue>;

  /** Child elements */
  children?: React.ReactNode;

  /** Additional CSS class names */
  className?: string;
}
