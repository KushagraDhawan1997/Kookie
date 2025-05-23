import { PropDef, Responsive } from "../../helpers/component-props";

/**
 * Grid child prop types
 *
 * These props control how a grid child is positioned and sized within a grid container.
 * All properties are applied directly as CSS properties using the style attribute.
 */
export interface GridChildProps {
  /**
   * Shorthand for grid-row-start, grid-column-start, grid-row-end, grid-column-end
   * Example: "header" or "content / sidebar"
   */
  gridArea?: Responsive<string>;

  /**
   * Shorthand for grid-column-start and grid-column-end
   * Example: "1 / 3" or "span 2"
   */
  gridColumn?: Responsive<string>;

  /**
   * Specifies which column line to start at
   * Example: "1" or "sidebar-start"
   */
  gridColumnStart?: Responsive<string>;

  /**
   * Specifies which column line to end at
   * Example: "3" or "sidebar-end"
   */
  gridColumnEnd?: Responsive<string>;

  /**
   * Shorthand for grid-row-start and grid-row-end
   * Example: "1 / 3" or "span 2"
   */
  gridRow?: Responsive<string>;

  /**
   * Specifies which row line to start at
   * Example: "1" or "header-start"
   */
  gridRowStart?: Responsive<string>;

  /**
   * Specifies which row line to end at
   * Example: "3" or "header-end"
   */
  gridRowEnd?: Responsive<string>;
}

/**
 * Maps a grid value to the corresponding CSS grid property
 * Values are applied directly as CSS properties without transformation
 */
const mapGridStyles = (value: string, property: string): React.CSSProperties => {
  return { [property]: value } as React.CSSProperties;
};

/**
 * Grid child prop definitions
 *
 * Each prop definition includes:
 * - name: The property name
 * - mapToStyle: Function to convert the prop value to a style object
 */
export const gridChildPropDefs: Record<keyof GridChildProps, PropDef> = {
  gridArea: {
    name: "gridArea",
    mapToStyle: (value: string) => mapGridStyles(value, "gridArea"),
  },
  gridColumn: {
    name: "gridColumn",
    mapToStyle: (value: string) => mapGridStyles(value, "gridColumn"),
  },
  gridColumnStart: {
    name: "gridColumnStart",
    mapToStyle: (value: string) => mapGridStyles(value, "gridColumnStart"),
  },
  gridColumnEnd: {
    name: "gridColumnEnd",
    mapToStyle: (value: string) => mapGridStyles(value, "gridColumnEnd"),
  },
  gridRow: {
    name: "gridRow",
    mapToStyle: (value: string) => mapGridStyles(value, "gridRow"),
  },
  gridRowStart: {
    name: "gridRowStart",
    mapToStyle: (value: string) => mapGridStyles(value, "gridRowStart"),
  },
  gridRowEnd: {
    name: "gridRowEnd",
    mapToStyle: (value: string) => mapGridStyles(value, "gridRowEnd"),
  },
};
