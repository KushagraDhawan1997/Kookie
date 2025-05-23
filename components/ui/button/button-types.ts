import { SemanticColorKey, ThemeColor, ThemeRoundness } from "@/components/providers/theme-types";

/**
 * Button size options
 */
export type ButtonSize = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Button variant options
 */
export type ButtonVariant = "modern" | "solid" | "tinted" | "outline" | "ghost" | "link";

/**
 * Button color options
 */
export type ButtonColor = SemanticColorKey | ThemeColor;
