import { PropDef } from "../../helpers/component-props";
import { MarginProps } from "../../props/margin.props";
import { ThemeRoundness } from "../../providers/theme-types";
import { ButtonSize, ButtonVariant, ButtonColor } from "./button-types";

/**
 * Button-specific props
 */
export interface ButtonOwnProps {
  /** Button size */
  size?: ButtonSize;

  /** Button visual variant */
  variant?: ButtonVariant;

  /** Button color */
  color?: ButtonColor;

  /** Button roundness */
  roundness?: ThemeRoundness;

  /** Whether to merge props onto child element rather than creating a new element */
  asChild?: boolean;

  /** Child elements */
  children?: React.ReactNode;

  /** Custom class name */
  className?: string;
}

/**
 * Complete Button component props
 */
export interface ButtonProps extends ButtonOwnProps, MarginProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}

// Button-specific prop definitions
export const buttonPropDefs: Record<keyof ButtonOwnProps, PropDef> = {
  size: {
    name: "size",
    // Used for theme context and CSS classes, no direct mapping needed
  },
  variant: {
    name: "variant",
    // Handled via data attributes, no class/style mapping needed
  },
  color: {
    name: "color",
    // Handled via data attributes, no class/style mapping needed
  },
  roundness: {
    name: "roundness",
    // Handled via data attributes, no class/style mapping needed
  },
  asChild: {
    name: "asChild",
    // Used directly, no mapping needed
  },
  children: {
    name: "children",
    // Used directly, no mapping needed
  },
  className: {
    name: "className",
    // Used directly, no mapping needed
  },
};
