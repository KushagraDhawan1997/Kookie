import { Responsive } from "./flex-types";

/**
 * Converts a responsive value to a string of Tailwind classes
 *
 * @param prefix - The CSS property prefix (e.g., 'p' for padding)
 * @param value - The responsive value
 * @param defaultValue - Optional default value
 * @returns A string of Tailwind classes
 */
export function responsiveClassNames<T>(prefix: string, value: Responsive<T> | undefined, defaultValue?: T): string {
  if (value === undefined) {
    return defaultValue !== undefined ? `${prefix}-${defaultValue}` : "";
  }

  // Handle simple value case
  if (typeof value !== "object") {
    return `${prefix}-${value}`;
  }

  // Handle responsive object
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
    classes.push(`${prefix}-${responsiveObj.base}`);
  }

  if (responsiveObj.sm !== undefined) {
    classes.push(`sm:${prefix}-${responsiveObj.sm}`);
  }

  if (responsiveObj.md !== undefined) {
    classes.push(`md:${prefix}-${responsiveObj.md}`);
  }

  if (responsiveObj.lg !== undefined) {
    classes.push(`lg:${prefix}-${responsiveObj.lg}`);
  }

  if (responsiveObj.xl !== undefined) {
    classes.push(`xl:${prefix}-${responsiveObj.xl}`);
  }

  if (responsiveObj["2xl"] !== undefined) {
    classes.push(`2xl:${prefix}-${responsiveObj["2xl"]}`);
  }

  return classes.join(" ");
}

/**
 * Maps flex direction values to Tailwind classes
 */
export function mapFlexDirection(direction: string): string {
  const directionMap: Record<string, string> = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse",
  };

  return directionMap[direction] || "";
}

/**
 * Maps flex align values to Tailwind classes
 */
export function mapFlexAlign(align: string): string {
  const alignMap: Record<string, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  return alignMap[align] || "";
}

/**
 * Maps flex justify values to Tailwind classes
 */
export function mapFlexJustify(justify: string): string {
  const justifyMap: Record<string, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  return justifyMap[justify] || "";
}

/**
 * Maps flex wrap values to Tailwind classes
 */
export function mapFlexWrap(wrap: string): string {
  const wrapMap: Record<string, string> = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  return wrapMap[wrap] || "";
}

/**
 * Maps display values to Tailwind classes
 */
export function mapDisplay(display: string): string {
  const displayMap: Record<string, string> = {
    none: "hidden",
    flex: "flex",
    "inline-flex": "inline-flex",
  };

  return displayMap[display] || "";
}
