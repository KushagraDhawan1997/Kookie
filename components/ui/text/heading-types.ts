import { TypographySize, BaseTypographyProps, HeadingAs } from "./typography-types";

/**
 * Heading variant options for different emphasis levels
 * - default: Regular heading (uses color step 12)
 * - muted: Less prominent heading (uses color step 10)
 * - accent: Emphasized heading (uses color step 11)
 */
export type HeadingVariant = "default" | "muted" | "accent";

/**
 * Props interface for the Heading component
 * Extends BaseTypographyProps with Heading-specific props
 */
export interface HeadingProps extends BaseTypographyProps {
  as?: HeadingAs;
  variant?: HeadingVariant;
}
