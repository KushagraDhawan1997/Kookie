import { TextProps, TextSize } from "../text/types";

/**
 * Valid heading levels for the Heading component
 */
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * HeadingProps interface - defines all available props for the Heading component
 *
 * The Heading component is specialized for heading elements (h1-h6).
 * It shares most properties with the Text component but has different defaults.
 */
export interface HeadingProps extends Omit<TextProps, "as"> {
  /**
   * HTML heading element to render.
   * Allows semantic heading levels while maintaining consistent styling.
   *
   * @default 'h2'
   */
  as?: HeadingLevel;

  /**
   * The heading level affects default styling even when rendered as a different element.
   * For example, level="h1" with as="h2" will style as an h1 but render as an h2 element.
   * This is useful for maintaining semantic structure while keeping design consistent.
   *
   * If not specified, defaults to the same as the "as" prop.
   */
  level?: HeadingLevel;
}

/**
 * Maps heading levels to default sizes
 */
export const defaultSizeMap: Record<HeadingLevel, TextSize> = {
  h1: "3xl",
  h2: "2xl",
  h3: "xl",
  h4: "lg",
  h5: "md",
  h6: "sm",
};
