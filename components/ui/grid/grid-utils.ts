import { Responsive } from "../flex/flex-types";
import { GridFlow, GridAlign, GridJustify, GridDisplay } from "./grid-types";
import { generateResponsiveClasses } from "../box/box-utils";

/**
 * Maps grid display values to Tailwind classes
 */
export function mapGridDisplay(display: GridDisplay): string {
  const displayMap: Record<GridDisplay, string> = {
    none: "hidden",
    grid: "grid",
    "inline-grid": "inline-grid",
  };

  return displayMap[display] || "";
}

/**
 * Maps grid flow values to Tailwind classes
 */
export function mapGridFlow(flow: GridFlow): string {
  const flowMap: Record<GridFlow, string> = {
    row: "grid-flow-row",
    column: "grid-flow-col",
    "row-dense": "grid-flow-row-dense",
    "column-dense": "grid-flow-col-dense",
  };

  return flowMap[flow] || "";
}

/**
 * Maps grid align values to Tailwind classes
 */
export function mapGridAlign(align: GridAlign): string {
  const alignMap: Record<GridAlign, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  return alignMap[align] || "";
}

/**
 * Maps grid justify values to Tailwind classes
 */
export function mapGridJustify(justify: GridJustify): string {
  const justifyMap: Record<GridJustify, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return justifyMap[justify] || "";
}

/**
 * Maps grid template columns values to Tailwind classes
 */
export function mapGridColumns(columns: number | string): string {
  if (typeof columns === "number") {
    return `grid-cols-${columns}`;
  }

  return `grid-cols-[${columns}]`;
}

/**
 * Maps grid template rows values to Tailwind classes
 */
export function mapGridRows(rows: number | string): string {
  if (typeof rows === "number") {
    return `grid-rows-${rows}`;
  }

  return `grid-rows-[${rows}]`;
}

/**
 * Maps grid template areas to a CSS style object
 */
export function mapGridAreas(areas: string): string {
  return `grid-areas-[${areas}]`;
}

/**
 * Generates gap classes for grid layouts
 */
export function generateGapClasses(prefix: string, value: Responsive<number | string> | undefined): string {
  if (!value) return "";

  const mapGap = (val: number | string) => {
    if (typeof val === "number") {
      return `${prefix}-${val}`;
    }
    return `${prefix}-[${val}]`;
  };

  return generateResponsiveClasses("", value, mapGap);
}
