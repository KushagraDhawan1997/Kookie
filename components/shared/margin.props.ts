import { PropDef, Responsive } from "../helpers/component-props";
import { SpaceToken, getSpaceTokenValue } from "../../styles/tokens/tokens";

/**
 * Margin prop types
 *
 * These props control the margin spacing around elements.
 * All props support token values (using the design system scale) or raw CSS values.
 */
export interface MarginProps {
  // Margin props
  m?: Responsive<SpaceToken | string>; // Margin on all sides
  mx?: Responsive<SpaceToken | string>; // Horizontal margin (left and right)
  my?: Responsive<SpaceToken | string>; // Vertical margin (top and bottom)
  mt?: Responsive<SpaceToken | string>; // Margin top
  mr?: Responsive<SpaceToken | string>; // Margin right
  mb?: Responsive<SpaceToken | string>; // Margin bottom
  ml?: Responsive<SpaceToken | string>; // Margin left
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
 * Margin prop definitions
 *
 * Each prop definition includes:
 * - name: The property name
 * - mapToStyle: Function to convert the prop value to a style object
 */
export const marginPropDefs: Record<keyof MarginProps, PropDef> = {
  // Margin props
  m: {
    name: "m",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "margin"),
  },
  mx: {
    name: "mx",
    mapToStyle: (value: SpaceToken | string) => ({
      marginLeft: getSpaceTokenValue(value),
      marginRight: getSpaceTokenValue(value),
    }),
  },
  my: {
    name: "my",
    mapToStyle: (value: SpaceToken | string) => ({
      marginTop: getSpaceTokenValue(value),
      marginBottom: getSpaceTokenValue(value),
    }),
  },
  mt: {
    name: "mt",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "marginTop"),
  },
  mr: {
    name: "mr",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "marginRight"),
  },
  mb: {
    name: "mb",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "marginBottom"),
  },
  ml: {
    name: "ml",
    mapToStyle: (value: SpaceToken | string) => mapSpacingValue(value, "marginLeft"),
  },
};
