import { ThemeStyle } from "../../../lib/theme/atoms";
import { ButtonVariant } from "./types";
import * as common from "./styles/common-styles";
import * as standard from "./styles/standard-styles";
import * as minimal from "./styles/minimal-styles";

// Re-export common utility functions
export const getSizeStyles = common.getSizeStyles;
export const getPaddingStyles = common.getPaddingStyles;
export const getGapStyles = common.getGapStyles;
export const getRadiusStyle = common.getRadiusStyle;
export const getBaseClasses = common.getBaseClasses;

// Re-export variant styles (prepare for future theme styles)
export function getVariantStyleClasses(variant: ButtonVariant, resolvedColor: string, themeStyle: ThemeStyle = "standard"): string {
  // Based on the theme style, use different style modules
  switch (themeStyle) {
    case "minimal":
      return minimal.getVariantStyleClasses(variant, resolvedColor);
    case "standard":
    default:
      return standard.getVariantStyleClasses(variant, resolvedColor);
  }
}
