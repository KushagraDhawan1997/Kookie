import { PropDef, Responsive } from "../../helpers/component-props";
import { BoxProps } from "../box/box.props";

/**
 * Grid display options
 */
export type GridDisplay = "none" | "grid" | "inline-grid";

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
 * Grid-specific props
 */
export interface GridOwnProps {
  /** Display property for grid containers */
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

  /** Controls how grid items are aligned in their cells */
  justifyItems?: "start" | "end" | "center" | "stretch";
}

/**
 * Complete Grid component props
 */
export interface GridProps extends Omit<BoxProps, "display">, GridOwnProps {}

// Helper functions for mapping values
const mapGridDisplay = (display: GridDisplay): string => {
  const displayMap: Record<GridDisplay, string> = {
    none: "hidden",
    grid: "grid",
    "inline-grid": "inline-grid",
  };

  return displayMap[display] || "";
};

const mapGridFlow = (flow: GridFlow): string => {
  const flowMap: Record<GridFlow, string> = {
    row: "grid-flow-row",
    column: "grid-flow-col",
    "row-dense": "grid-flow-row-dense",
    "column-dense": "grid-flow-col-dense",
  };

  return flowMap[flow] || "";
};

const mapGridAlign = (align: GridAlign): string => {
  const alignMap: Record<GridAlign, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  return alignMap[align] || "";
};

const mapGridJustify = (justify: GridJustify): string => {
  const justifyMap: Record<GridJustify, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return justifyMap[justify] || "";
};

const mapGridColumns = (columns: number | string): string => {
  if (typeof columns === "number") {
    return `grid-cols-${columns}`;
  }
  return "";
};

const mapGridRows = (rows: number | string): string => {
  if (typeof rows === "number") {
    return `grid-rows-${rows}`;
  }
  return "";
};

const mapGapValue = (value: number | string, prefix: string): string => {
  if (typeof value === "number") {
    return `${prefix}-${value}`;
  }
  return "";
};

const mapJustifyItems = (justifyItems: string) => {
  switch (justifyItems) {
    case "start":
      return "justify-items-start";
    case "end":
      return "justify-items-end";
    case "center":
      return "justify-items-center";
    case "stretch":
      return "justify-items-stretch";
    default:
      return "";
  }
};

// Grid-specific prop definitions
export const gridPropDefs: Record<keyof GridOwnProps, PropDef> = {
  display: {
    name: "display",
    mapToClass: mapGridDisplay,
  },
  areas: {
    name: "areas",
    mapToStyle: (value: string) => ({ gridTemplateAreas: value }),
  },
  columns: {
    name: "columns",
    mapToClass: (value) => (typeof value === "number" ? mapGridColumns(value) : ""),
    mapToStyle: (value) => (typeof value === "string" ? { gridTemplateColumns: value } : undefined),
  },
  rows: {
    name: "rows",
    mapToClass: (value) => (typeof value === "number" ? mapGridRows(value) : ""),
    mapToStyle: (value) => (typeof value === "string" ? { gridTemplateRows: value } : undefined),
  },
  flow: {
    name: "flow",
    mapToClass: mapGridFlow,
  },
  align: {
    name: "align",
    mapToClass: mapGridAlign,
  },
  justify: {
    name: "justify",
    mapToClass: mapGridJustify,
  },
  gap: {
    name: "gap",
    mapToClass: (value) => (typeof value === "number" ? mapGapValue(value, "gap") : ""),
    mapToStyle: (value) => (typeof value === "string" ? { gap: value } : undefined),
  },
  gapX: {
    name: "gapX",
    mapToClass: (value) => (typeof value === "number" ? mapGapValue(value, "gap-x") : ""),
    mapToStyle: (value) => (typeof value === "string" ? { columnGap: value } : undefined),
  },
  gapY: {
    name: "gapY",
    mapToClass: (value) => (typeof value === "number" ? mapGapValue(value, "gap-y") : ""),
    mapToStyle: (value) => (typeof value === "string" ? { rowGap: value } : undefined),
  },
  justifyItems: {
    name: "justifyItems",
    mapToClass: mapJustifyItems,
  },
};
