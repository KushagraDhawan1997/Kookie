import React from "react";
import { Responsive } from "../flex/flex-types";
import { LayoutProps } from "../box/box-types";

/**
 * Grid display options
 */
export type GridDisplay = "none" | "inline-grid" | "grid";

/**
 * Grid flow options
 */
export type GridFlow = "row" | "column" | "row-dense" | "column-dense";

/**
 * Grid alignment options
 */
export type GridAlign = "start" | "center" | "end" | "stretch" | "baseline";

/**
 * Grid justify options
 */
export type GridJustify = "start" | "center" | "end" | "between";

/**
 * Props for the Grid component
 *
 * @interface GridProps
 * @extends {React.HTMLAttributes<HTMLElement>}
 * @extends {LayoutProps}
 */
export interface GridProps extends React.HTMLAttributes<HTMLElement>, LayoutProps {
  /** Element to render as */
  as?: "div" | "span";

  /** Whether to merge props onto child element rather than creating a new element */
  asChild?: boolean;

  /** Display property */
  display?: Responsive<GridDisplay>;

  /** Grid template areas */
  areas?: Responsive<string>;

  /** Grid template columns */
  columns?: Responsive<number | string>;

  /** Grid template rows */
  rows?: Responsive<number | string>;

  /** Grid auto flow */
  flow?: Responsive<GridFlow>;

  /** Align items */
  align?: Responsive<GridAlign>;

  /** Justify content */
  justify?: Responsive<GridJustify>;

  /** Gap between items (shorthand for both row and column gap) */
  gap?: Responsive<number | string>;

  /** Column gap */
  gapX?: Responsive<number | string>;

  /** Row gap */
  gapY?: Responsive<number | string>;

  /** Child elements */
  children?: React.ReactNode;

  /** Additional CSS class names */
  className?: string;

  /**
   * Controls how grid items are aligned along the row axis (inline axis)
   */
  justifyItems?: "start" | "end" | "center" | "stretch";
}
