import { PropDef, Responsive } from "../helpers/component-props";
import { DimensionToken, getDimensionTokenValue } from "../types/tokens";

/**
 * Flex child prop types
 *
 * These props control how a flex child behaves within a flex container.
 * Properties leverage the token system for consistent sizing.
 */
export interface FlexChildProps {
  /**
   * Sets the initial size of a flex item
   * Accepts both token values from the dimension scale or raw CSS values
   */
  flexBasis?: Responsive<DimensionToken | string>;

  /**
   * Controls how much a flex item will grow relative to other items
   * - 0: Item will not grow
   * - 1: Item will grow at same rate as others
   * - >1: Item will grow more than others
   */
  flexGrow?: Responsive<number | string>;

  /**
   * Controls how much a flex item will shrink relative to other items
   * - 0: Item will not shrink
   * - 1: Item will shrink at same rate as others
   * - >1: Item will shrink more than others
   */
  flexShrink?: Responsive<number | string>;
}

/**
 * Maps a dimension token or string value to flexBasis CSS property
 * For tokens, converts to CSS variable reference (--size-X)
 * For strings, passes through as raw CSS value
 */
const mapFlexBasis = (value: DimensionToken | string): React.CSSProperties => {
  return { flexBasis: getDimensionTokenValue(value) } as React.CSSProperties;
};

/**
 * Maps a flex grow value to the flexGrow CSS property
 */
const mapFlexGrow = (value: number | string): React.CSSProperties => {
  return { flexGrow: value } as React.CSSProperties;
};

/**
 * Maps a flex shrink value to the flexShrink CSS property
 */
const mapFlexShrink = (value: number | string): React.CSSProperties => {
  return { flexShrink: value } as React.CSSProperties;
};

/**
 * Flex child prop definitions
 *
 * Each prop definition includes:
 * - name: The property name
 * - mapToStyle: Function to convert the prop value to a style object
 */
export const flexChildPropDefs: Record<keyof FlexChildProps, PropDef> = {
  flexBasis: {
    name: "flexBasis",
    mapToStyle: mapFlexBasis,
  },
  flexGrow: {
    name: "flexGrow",
    mapToStyle: mapFlexGrow,
  },
  flexShrink: {
    name: "flexShrink",
    mapToStyle: mapFlexShrink,
  },
};
