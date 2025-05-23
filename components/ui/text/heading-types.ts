import { SemanticColorKey, ThemeColor } from "../../providers/theme-types";

/**
 * Available heading size options using a numeric scale (1-12)
 */
export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * HTML element types for Heading (h1-h6 only)
 */
export type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Heading variant options for different emphasis levels
 * - default: Regular heading (uses color step 12)
 * - muted: Less prominent heading (uses color step 10)
 * - accent: Emphasized heading (uses color step 11)
 */
export type HeadingVariant = "default" | "muted" | "accent";

/**
 * Color options for heading
 */
export type HeadingColor = SemanticColorKey | ThemeColor | "inherit";
