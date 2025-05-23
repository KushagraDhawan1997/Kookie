/**
 * Semantic color key type
 *
 * Represents the semantic color roles used throughout the application.
 * These keys are used to reference colors by their semantic meaning rather than
 * their visual appearance, enabling consistent theming and easier changes.
 *
 * - primary: Main brand color
 * - gray: Neutral color for text and UI elements
 * - error: For error states and destructive actions
 * - success: For success states and positive confirmations
 * - warning: For warning states and cautionary information
 */
export type SemanticColorKey = "primary" | "gray" | "error" | "success" | "warning";

/**
 * Theme size
 *
 * Represents the default size in the theme.
 * Components can opt into using this size if they want to.
 */
export type ThemeSize = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Theme roundness
 *
 * Represents the roundness scale in the theme.
 * Components can opt into using this roundness if they want to.
 */
export type ThemeRoundness = "none" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Available theme colors for primary, error, success, and warning states
 * @type {string[]}
 */
export type ThemeColor = "blue" | "green" | "red" | "amber" | "purple" | "gray";

/**
 * Available gray scale variants
 * @type {string[]}
 */
export type ThemeGray = "sage" | "slate";
