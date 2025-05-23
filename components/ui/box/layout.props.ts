import { PropDef, Responsive } from "../../helpers/component-props";
import { SpaceToken, DimensionToken, getSpaceTokenValue, getDimensionTokenValue } from "../../../styles/tokens/tokens";

/**
 * Position options for positioning elements
 * - static: Default positioning
 * - relative: Positioned relative to its normal position
 * - absolute: Positioned relative to nearest positioned ancestor
 * - fixed: Positioned relative to the viewport
 * - sticky: Positioned based on scroll position
 */
export type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

/**
 * Overflow options for handling content that exceeds container dimensions
 * - visible: Content is not clipped and may overflow
 * - hidden: Content is clipped if needed
 * - clip: Similar to hidden but does not create scrolling mechanism
 * - scroll: Content is clipped and scrollbars are added
 * - auto: Scrollbars are added only when necessary
 */
export type Overflow = "visible" | "hidden" | "clip" | "scroll" | "auto";

/**
 * Layout prop types
 *
 * These props control spacing, dimensions, positioning, and overflow behavior.
 * All props support token values (using the design system scale) or raw CSS values.
 */
export interface LayoutProps {
  // Padding props
  p?: Responsive<SpaceToken | string>; // Padding on all sides
  px?: Responsive<SpaceToken | string>; // Horizontal padding (left and right)
  py?: Responsive<SpaceToken | string>; // Vertical padding (top and bottom)
  pt?: Responsive<SpaceToken | string>; // Padding top
  pr?: Responsive<SpaceToken | string>; // Padding right
  pb?: Responsive<SpaceToken | string>; // Padding bottom
  pl?: Responsive<SpaceToken | string>; // Padding left

  // Dimension props
  width?: Responsive<DimensionToken | string>; // Element width
  minWidth?: Responsive<DimensionToken | string>; // Minimum width
  maxWidth?: Responsive<DimensionToken | string>; // Maximum width
  height?: Responsive<DimensionToken | string>; // Element height
  minHeight?: Responsive<DimensionToken | string>; // Minimum height
  maxHeight?: Responsive<DimensionToken | string>; // Maximum height

  // Position props
  position?: Responsive<Position>; // Positioning method
  inset?: Responsive<SpaceToken | string>; // Shorthand for top, right, bottom, left
  top?: Responsive<SpaceToken | string>; // Position from top
  right?: Responsive<SpaceToken | string>; // Position from right
  bottom?: Responsive<SpaceToken | string>; // Position from bottom
  left?: Responsive<SpaceToken | string>; // Position from left

  // Overflow props
  overflow?: Responsive<Overflow>; // Overflow behavior for both axes
  overflowX?: Responsive<Overflow>; // Horizontal overflow behavior
  overflowY?: Responsive<Overflow>; // Vertical overflow behavior
}

/**
 * Maps a spacing token or string value to the corresponding CSS property value
 * For tokens, converts to CSS variable reference (--space-X)
 * For strings, passes through as raw CSS value
 */
const mapSpacingValue = (value: SpaceToken | string, property: string): React.CSSProperties => {
  return { [property]: getSpaceTokenValue(value) } as React.CSSProperties;
};

/**
 * Maps a dimension token or string value to the corresponding CSS property value
 * For tokens, converts to CSS variable reference (--size-X)
 * For strings, passes through as raw CSS value
 */
const mapDimensionValue = (value: DimensionToken | string, property: string): React.CSSProperties => {
  return { [property]: getDimensionTokenValue(value) } as React.CSSProperties;
};

/**
 * Maps a position value to the corresponding CSS position property
 */
const mapPositionValue = (value: Position): React.CSSProperties => {
  return { position: value } as React.CSSProperties;
};

/**
 * Maps an overflow value to the corresponding CSS overflow property
 */
const mapOverflowValue = (value: Overflow, property: string): React.CSSProperties => {
  return { [property]: value } as React.CSSProperties;
};

/**
 * Layout prop definitions
 *
 * Each prop definition includes:
 * - name: The property name
 * - mapToStyle: Function to convert the prop value to a style object
 */
export const layoutPropDefs: Record<keyof LayoutProps, PropDef> = {
  // Padding props
  p: {
    name: "p",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "padding"),
  },
  px: {
    name: "px",
    mapToStyle: (value: SpaceToken | string) => ({
      paddingLeft: getSpaceTokenValue(value),
      paddingRight: getSpaceTokenValue(value),
    }),
  },
  py: {
    name: "py",
    mapToStyle: (value: SpaceToken | string) => ({
      paddingTop: getSpaceTokenValue(value),
      paddingBottom: getSpaceTokenValue(value),
    }),
  },
  pt: {
    name: "pt",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "paddingTop"),
  },
  pr: {
    name: "pr",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "paddingRight"),
  },
  pb: {
    name: "pb",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "paddingBottom"),
  },
  pl: {
    name: "pl",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "paddingLeft"),
  },

  // Dimension props
  width: {
    name: "width",
    mapToStyle: (value: DimensionToken | string) => mapDimensionValue(value, "width"),
  },
  minWidth: {
    name: "minWidth",
    mapToStyle: (value: DimensionToken | string) => mapDimensionValue(value, "minWidth"),
  },
  maxWidth: {
    name: "maxWidth",
    mapToStyle: (value: DimensionToken | string) => mapDimensionValue(value, "maxWidth"),
  },
  height: {
    name: "height",
    mapToStyle: (value: DimensionToken | string) => mapDimensionValue(value, "height"),
  },
  minHeight: {
    name: "minHeight",
    mapToStyle: (value: DimensionToken | string) => mapDimensionValue(value, "minHeight"),
  },
  maxHeight: {
    name: "maxHeight",
    mapToStyle: (value: DimensionToken | string) => mapDimensionValue(value, "maxHeight"),
  },

  // Position props
  position: {
    name: "position",
    mapToStyle: mapPositionValue,
  },
  inset: {
    name: "inset",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "inset"),
  },
  top: {
    name: "top",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "top"),
  },
  right: {
    name: "right",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "right"),
  },
  bottom: {
    name: "bottom",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "bottom"),
  },
  left: {
    name: "left",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "left"),
  },

  // Overflow props
  overflow: {
    name: "overflow",
    mapToStyle: (value: Overflow) => mapOverflowValue(value, "overflow"),
  },
  overflowX: {
    name: "overflowX",
    mapToStyle: (value: Overflow) => mapOverflowValue(value, "overflowX"),
  },
  overflowY: {
    name: "overflowY",
    mapToStyle: (value: Overflow) => mapOverflowValue(value, "overflowY"),
  },
};
