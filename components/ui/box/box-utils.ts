import { Responsive } from "../flex/flex-types";
import { Position, Overflow } from "./box-types";
import { responsiveClassNames } from "../flex/flex-utils";

/**
 * Maps display values to Tailwind classes
 */
export function mapBoxDisplay(display: string): string {
  const displayMap: Record<string, string> = {
    none: "hidden",
    block: "block",
    inline: "inline",
    "inline-block": "inline-block",
    contents: "contents",
    "flow-root": "flow-root",
    "list-item": "list-item",
  };

  return displayMap[display] || "";
}

/**
 * Maps position values to Tailwind classes
 */
export function mapPosition(position: Position): string {
  const positionMap: Record<Position, string> = {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
  };

  return positionMap[position] || "";
}

/**
 * Maps overflow values to Tailwind classes
 */
export function mapOverflow(overflow: Overflow): string {
  const overflowMap: Record<Overflow, string> = {
    visible: "overflow-visible",
    hidden: "overflow-hidden",
    clip: "overflow-clip",
    scroll: "overflow-scroll",
    auto: "overflow-auto",
  };

  return overflowMap[overflow] || "";
}

/**
 * Maps overflow-x values to Tailwind classes
 */
export function mapOverflowX(overflow: Overflow): string {
  const overflowMap: Record<Overflow, string> = {
    visible: "overflow-x-visible",
    hidden: "overflow-x-hidden",
    clip: "overflow-x-clip",
    scroll: "overflow-x-scroll",
    auto: "overflow-x-auto",
  };

  return overflowMap[overflow] || "";
}

/**
 * Maps overflow-y values to Tailwind classes
 */
export function mapOverflowY(overflow: Overflow): string {
  const overflowMap: Record<Overflow, string> = {
    visible: "overflow-y-visible",
    hidden: "overflow-y-hidden",
    clip: "overflow-y-clip",
    scroll: "overflow-y-scroll",
    auto: "overflow-y-auto",
  };

  return overflowMap[overflow] || "";
}

/**
 * Generates responsive classes for a CSS property
 */
export function generateResponsiveClasses<T>(prefix: string, value: Responsive<T> | undefined, mapper: (val: T) => string): string {
  if (!value) return "";

  if (typeof value !== "object") {
    return mapper(value as T);
  }

  const classes: string[] = [];
  const responsiveObj = value as {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
  };

  if (responsiveObj.base !== undefined) {
    classes.push(mapper(responsiveObj.base));
  }

  if (responsiveObj.sm !== undefined) {
    classes.push(`sm:${mapper(responsiveObj.sm)}`);
  }

  if (responsiveObj.md !== undefined) {
    classes.push(`md:${mapper(responsiveObj.md)}`);
  }

  if (responsiveObj.lg !== undefined) {
    classes.push(`lg:${mapper(responsiveObj.lg)}`);
  }

  if (responsiveObj.xl !== undefined) {
    classes.push(`xl:${mapper(responsiveObj.xl)}`);
  }

  if (responsiveObj["2xl"] !== undefined) {
    classes.push(`2xl:${mapper(responsiveObj["2xl"])}`);
  }

  return classes.join(" ");
}

/**
 * Generates Tailwind classes for dimension properties
 */
export function dimensionClass(prefix: string, value: Responsive<string> | undefined): string {
  if (!value) return "";

  const mapDimension = (val: string) => `${prefix}-[${val}]`;
  return generateResponsiveClasses("", value, mapDimension);
}

/**
 * Generates Tailwind classes for position offset properties
 */
export function positionOffsetClass(prefix: string, value: Responsive<number | string> | undefined): string {
  if (!value) return "";

  const mapOffset = (val: number | string) => {
    if (typeof val === "number") {
      return `${prefix}-${val}`;
    }
    return `${prefix}-[${val}]`;
  };

  return generateResponsiveClasses("", value, mapOffset);
}
