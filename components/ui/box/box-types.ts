import React from "react";
import { Responsive } from "../flex/flex-types";

/**
 * Display options for Box component
 */
export type BoxDisplay = "none" | "block" | "inline" | "inline-block" | "contents" | "flow-root" | "list-item";

/**
 * Position options
 */
export type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

/**
 * Overflow options
 */
export type Overflow = "visible" | "hidden" | "clip" | "scroll" | "auto";

/**
 * Common layout props shared between Box, Flex, Grid, Container and Section components
 */
export interface LayoutProps {
  /** Padding on all sides */
  p?: Responsive<number | string>;

  /** Horizontal padding (left and right) */
  px?: Responsive<number | string>;

  /** Vertical padding (top and bottom) */
  py?: Responsive<number | string>;

  /** Padding top */
  pt?: Responsive<number | string>;

  /** Padding right */
  pr?: Responsive<number | string>;

  /** Padding bottom */
  pb?: Responsive<number | string>;

  /** Padding left */
  pl?: Responsive<number | string>;

  /** Width */
  width?: Responsive<string>;

  /** Minimum width */
  minWidth?: Responsive<string>;

  /** Maximum width */
  maxWidth?: Responsive<string>;

  /** Height */
  height?: Responsive<string>;

  /** Minimum height */
  minHeight?: Responsive<string>;

  /** Maximum height */
  maxHeight?: Responsive<string>;

  /** Position */
  position?: Responsive<Position>;

  /** Inset (top, right, bottom, left) */
  inset?: Responsive<number | string>;

  /** Top position */
  top?: Responsive<number | string>;

  /** Right position */
  right?: Responsive<number | string>;

  /** Bottom position */
  bottom?: Responsive<number | string>;

  /** Left position */
  left?: Responsive<number | string>;

  /** Overflow */
  overflow?: Responsive<Overflow>;

  /** Overflow X */
  overflowX?: Responsive<Overflow>;

  /** Overflow Y */
  overflowY?: Responsive<Overflow>;
}

/**
 * Props for the Box component
 *
 * @interface BoxProps
 * @extends {React.HTMLAttributes<HTMLElement>}
 * @extends {LayoutProps}
 */
export interface BoxProps extends React.HTMLAttributes<HTMLElement>, LayoutProps {
  /** Element to render as */
  as?: "div" | "span";

  /** Whether to merge props onto child element rather than creating a new element */
  asChild?: boolean;

  /** Display property */
  display?: Responsive<BoxDisplay>;

  /** Child elements */
  children?: React.ReactNode;

  /** Additional CSS class names */
  className?: string;
}
