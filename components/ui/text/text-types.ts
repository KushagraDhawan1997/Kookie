import { TypographySize, TypographyColor, BaseTypographyProps, TextAs } from "./typography-types";

/**
 * Text variant options for different emphasis levels
 * - default: Regular text (uses color step 12)
 * - muted: Less prominent text (uses color step 10)
 * - accent: Emphasized text (uses color step 11)
 */
export type TextVariant = "default" | "muted" | "accent";

/**
 * Props interface for the Text component
 * Extends BaseTypographyProps with Text-specific props
 */
export interface TextProps extends BaseTypographyProps {
  as?: TextAs;
  variant?: TextVariant;
}

export type { TypographySize };
