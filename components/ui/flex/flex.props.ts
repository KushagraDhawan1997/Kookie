import { PropDef, Responsive } from "../../helpers/component-props";
import { BoxProps } from "../box/box.props";

/**
 * Flex display options
 */
export type FlexDisplay = "none" | "flex" | "inline-flex";

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
 * Flex-specific props
 */
export interface FlexOwnProps {
  /** Display property for flex containers */
  display?: Responsive<FlexDisplay>;

  /** Flex direction */
  direction?: Responsive<FlexDirection>;

  /** Align items */
  align?: Responsive<FlexAlign>;

  /** Justify content */
  justify?: Responsive<FlexJustify>;

  /** Flex wrap */
  wrap?: Responsive<FlexWrap>;

  /** Gap between items (shorthand for both row and column gap) */
  gap?: Responsive<number | string>;

  /** Gap between items on horizontal axis */
  gapX?: Responsive<number | string>;

  /** Gap between items on vertical axis */
  gapY?: Responsive<number | string>;
}

/**
 * Complete Flex component props
 */
export interface FlexProps extends Omit<BoxProps, "display">, FlexOwnProps {}

// Helper functions for mapping values
const mapFlexDisplay = (display: FlexDisplay): string => {
  const displayMap: Record<FlexDisplay, string> = {
    none: "hidden",
    flex: "flex",
    "inline-flex": "inline-flex",
  };

  return displayMap[display] || "";
};

const mapFlexDirection = (direction: FlexDirection): string => {
  const directionMap: Record<FlexDirection, string> = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse",
  };

  return directionMap[direction] || "";
};

const mapFlexAlign = (align: FlexAlign): string => {
  const alignMap: Record<FlexAlign, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  return alignMap[align] || "";
};

const mapFlexJustify = (justify: FlexJustify): string => {
  const justifyMap: Record<FlexJustify, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  return justifyMap[justify] || "";
};

const mapFlexWrap = (wrap: FlexWrap): string => {
  const wrapMap: Record<FlexWrap, string> = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  return wrapMap[wrap] || "";
};

const mapGapValue = (value: number | string, prefix: string): string => {
  if (typeof value === "number") {
    return `${prefix}-${value}`;
  }
  return "";
};

// Flex-specific prop definitions
export const flexPropDefs: Record<keyof FlexOwnProps, PropDef> = {
  display: {
    name: "display",
    mapToClass: mapFlexDisplay,
  },
  direction: {
    name: "direction",
    mapToClass: mapFlexDirection,
  },
  align: {
    name: "align",
    mapToClass: mapFlexAlign,
  },
  justify: {
    name: "justify",
    mapToClass: mapFlexJustify,
  },
  wrap: {
    name: "wrap",
    mapToClass: mapFlexWrap,
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
};
