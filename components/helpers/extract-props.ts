import { PropDef } from "./component-props";
import { Responsive } from "./component-props";

/**
 * Processes a responsive value using a mapping function for classes
 *
 * @param value - The responsive value to process
 * @param mapFn - The function to map the value to a class
 * @returns A string of CSS classes
 */
export function processResponsiveClasses<T>(value: Responsive<T> | undefined, mapFn: (value: T, breakpoint?: string) => string): string {
  if (value === undefined) return "";

  // If value is not an object, it's a base value
  if (typeof value !== "object") {
    return mapFn(value as T);
  }

  // Handle responsive object
  const classes: string[] = [];
  const responsiveObj = value as Record<string, T>;

  if (responsiveObj.base !== undefined) {
    classes.push(mapFn(responsiveObj.base));
  }

  if (responsiveObj.sm !== undefined) {
    classes.push(`sm:${mapFn(responsiveObj.sm, "sm")}`);
  }

  if (responsiveObj.md !== undefined) {
    classes.push(`md:${mapFn(responsiveObj.md, "md")}`);
  }

  if (responsiveObj.lg !== undefined) {
    classes.push(`lg:${mapFn(responsiveObj.lg, "lg")}`);
  }

  if (responsiveObj.xl !== undefined) {
    classes.push(`xl:${mapFn(responsiveObj.xl, "xl")}`);
  }

  if (responsiveObj["2xl"] !== undefined) {
    classes.push(`2xl:${mapFn(responsiveObj["2xl"], "2xl")}`);
  }

  return classes.join(" ");
}

/**
 * Processes a responsive value using a mapping function for styles
 *
 * @param value - The responsive value to process
 * @param mapFn - The function to map the value to a style object
 * @returns A style object
 */
export function processResponsiveStyles<T>(value: Responsive<T> | undefined, mapFn: (value: T) => React.CSSProperties | undefined): React.CSSProperties | undefined {
  if (value === undefined) return undefined;

  // If value is not an object, it's a base value
  if (typeof value !== "object") {
    return mapFn(value as T);
  }

  // Handle responsive object (for now, just use base value)
  // In a real implementation, you might use media queries or CSS variables
  const responsiveObj = value as Record<string, T>;

  if (responsiveObj.base !== undefined) {
    return mapFn(responsiveObj.base);
  }

  // Fallback to first defined breakpoint if no base value
  for (const breakpoint of ["sm", "md", "lg", "xl", "2xl"]) {
    if (responsiveObj[breakpoint] !== undefined) {
      return mapFn(responsiveObj[breakpoint]);
    }
  }

  return undefined;
}

/**
 * Extracts props based on provided prop definitions
 *
 * @param props - The component props
 * @param propDefs - Property definitions to extract
 * @returns An object containing extracted classes, styles, and rest props
 */
export function extractProps(
  props: Record<string, any>,
  ...propDefSets: Record<string, PropDef>[]
): {
  classes: string[];
  styles: Record<string, any>;
  rest: Record<string, any>;
} {
  const result = {
    classes: [] as string[],
    styles: {} as Record<string, any>,
    rest: { ...props } as Record<string, any>,
  };

  // Process each prop definition set
  for (const propDefs of propDefSets) {
    // Extract each prop according to its definition
    for (const [key, propDef] of Object.entries(propDefs)) {
      const propName = propDef.name || key;
      const propValue = props[propName];

      // Skip if prop value is undefined
      if (propValue === undefined) continue;

      // Remove the prop from rest props
      delete result.rest[propName];

      // Apply mapping function if provided
      if (propDef.mapToClass && propValue !== undefined) {
        const classValue = processResponsiveClasses(propValue, (val) => propDef.mapToClass!(val));
        if (classValue) {
          result.classes.push(classValue);
        }
      }

      // Apply style mapping if provided
      if (propDef.mapToStyle && propValue !== undefined) {
        const styleValue = processResponsiveStyles(propValue, (val) => propDef.mapToStyle!(val));
        if (styleValue) {
          result.styles = { ...result.styles, ...styleValue };
        }
      }
    }
  }

  return result;
}
