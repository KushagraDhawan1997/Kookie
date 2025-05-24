import { SemanticColorKey, ThemeColor } from "../../providers/theme-types";
import { MarginProps } from "@/components/shared/margin.props";

/**
 * Available text/heading size options using a numeric scale (1-12)
 */
export type TypographySize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Font weight options
 */
export type TypographyWeight = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";

/**
 * Text alignment options
 */
export type TypographyAlign = "left" | "center" | "right" | "justify";

/**
 * Color options for text/heading
 */
export type TypographyColor = SemanticColorKey | ThemeColor | "inherit";

/**
 * HTML element types for Text
 */
export type TextAs = keyof HTMLElementTagNameMap;

/**
 * HTML element types for Heading (h1-h6 only)
 */
export type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Base props interface shared by Text and Heading components
 *
 * Contains all common props to avoid duplication between components.
 */
export interface BaseTypographyProps extends React.HTMLAttributes<HTMLElement>, MarginProps {
  asChild?: boolean;
  color?: TypographyColor;
  size?: TypographySize;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  truncate?: boolean;
  className?: string;
  children?: React.ReactNode;
}
