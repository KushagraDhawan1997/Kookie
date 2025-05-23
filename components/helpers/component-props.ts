import React from "react";

/**
 * Utility type to exclude specific props from a component's props
 */
export type RemovedProps = "className" | "style";

/**
 * Utility type to get component props without specific keys
 */
export type ComponentPropsWithout<T extends React.ElementType, K extends keyof any> = Omit<React.ComponentPropsWithRef<T>, K>;

/**
 * Utility type for responsive values
 */
export type Responsive<T> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };

/**
 * Type for a prop definition with mapping and default value
 */
export interface PropDef<T = any> {
  /** Property name */
  name: string;

  /** Function to map value to CSS class or style */
  mapToClass?: (value: T, options?: any) => string;

  /** Function to map value to style object */
  mapToStyle?: (value: T, options?: any) => React.CSSProperties | undefined;

  /** Default value */
  defaultValue?: T;
}
