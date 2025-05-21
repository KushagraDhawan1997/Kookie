import { ThemeStyle } from "../../../lib/theme/atoms";
import { ButtonVariant } from "./types";
import * as common from "./styles/common-styles";
import * as standard from "./styles/standard-styles";

// Re-export common utility functions
export const getSizeStyles = common.getSizeStyles;
export const getPaddingStyles = common.getPaddingStyles;
export const getGapStyles = common.getGapStyles;
export const getRadiusStyle = common.getRadiusStyle;
export const getBaseClasses = common.getBaseClasses;

// Re-export variant styles (prepare for future theme styles)
export function getVariantStyleClasses(variant: ButtonVariant, resolvedColor: string, themeStyle: ThemeStyle = "standard"): string {
  // For now, only using standard styles
  // This will be extended to support 'minimal' and 'detailed' styles later
  return standard.getVariantStyleClasses(variant, resolvedColor);
}
