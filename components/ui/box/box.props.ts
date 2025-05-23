import { PropDef, Responsive } from "../../helpers/component-props";
import { LayoutProps } from "../../props/layout.props";
import { FlexChildProps } from "../../props/flex-child.props";
import { GridChildProps } from "../../props/grid-child.props";
import { MarginProps } from "../../props/margin.props";

/**
 * Display options for Box component
 */
export type BoxDisplay = "none" | "block" | "inline" | "inline-block" | "contents" | "flow-root" | "list-item";

/**
 * Box-specific props
 */
export interface BoxOwnProps {
  /** Element to render as */
  as?: "div" | "span";

  /** Whether to merge props onto child element rather than creating a new element */
  asChild?: boolean;

  /** Display property */
  display?: Responsive<BoxDisplay>;

  /** Child elements */
  children?: React.ReactNode;
}

/**
 * Complete Box component props
 */
export interface BoxProps extends BoxOwnProps, LayoutProps, MarginProps, FlexChildProps, GridChildProps, Omit<React.HTMLAttributes<HTMLElement>, "display"> {}

// Helper function to map display value to Tailwind class
const mapDisplayValue = (display: BoxDisplay): string => {
  const displayMap: Record<BoxDisplay, string> = {
    none: "hidden",
    block: "block",
    inline: "inline",
    "inline-block": "inline-block",
    contents: "contents",
    "flow-root": "flow-root",
    "list-item": "list-item",
  };

  return displayMap[display] || "";
};

// Box-specific prop definitions
export const boxPropDefs: Record<keyof BoxOwnProps, PropDef> = {
  as: {
    name: "as",
    // No mapping needed as this is used directly
  },
  asChild: {
    name: "asChild",
    // No mapping needed as this is used directly
  },
  display: {
    name: "display",
    mapToClass: mapDisplayValue,
  },
  children: {
    name: "children",
    // No mapping needed as this is used directly
  },
};
