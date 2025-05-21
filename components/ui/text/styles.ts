import { cn } from "../../../lib/utils/cn";
import { TextSize, TextVariant, FontWeight, TextAlign } from "./types";

// ------------------------------------------------------------------------ -
// Style Maps for Text Component
// ------------------------------------------------------------------------ -

/**
 * Maps font weight to Tailwind classes
 */
export const fontWeightStylesMap: Record<FontWeight, string> = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

/**
 * Maps text alignment to Tailwind classes
 */
export const textAlignStylesMap: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

/**
 * Maps gray scale colors to text color classes for each variant
 */
export const grayTextColorStyles: Record<string, Record<TextVariant, string>> = {
  slate: { default: "text-slate-900", muted: "text-slate-500", accent: "text-slate-700" },
  gray: { default: "text-gray-900", muted: "text-gray-500", accent: "text-gray-700" },
  zinc: { default: "text-zinc-900", muted: "text-zinc-500", accent: "text-zinc-700" },
  neutral: { default: "text-neutral-900", muted: "text-neutral-500", accent: "text-neutral-700" },
  stone: { default: "text-stone-900", muted: "text-stone-500", accent: "text-stone-700" },
};

/**
 * Maps Tailwind colors to text color classes for each variant
 */
export const directTextColorStyles: Record<string, Record<TextVariant, string>> = {
  red: { default: "text-red-700", muted: "text-red-400", accent: "text-red-600" },
  orange: { default: "text-orange-700", muted: "text-orange-400", accent: "text-orange-600" },
  amber: { default: "text-amber-700", muted: "text-amber-400", accent: "text-amber-600" },
  yellow: { default: "text-yellow-700", muted: "text-yellow-400", accent: "text-yellow-600" },
  lime: { default: "text-lime-700", muted: "text-lime-400", accent: "text-lime-600" },
  green: { default: "text-green-700", muted: "text-green-400", accent: "text-green-600" },
  emerald: { default: "text-emerald-700", muted: "text-emerald-400", accent: "text-emerald-600" },
  teal: { default: "text-teal-700", muted: "text-teal-400", accent: "text-teal-600" },
  cyan: { default: "text-cyan-700", muted: "text-cyan-400", accent: "text-cyan-600" },
  sky: { default: "text-sky-700", muted: "text-sky-400", accent: "text-sky-600" },
  blue: { default: "text-blue-700", muted: "text-blue-400", accent: "text-blue-600" },
  indigo: { default: "text-indigo-700", muted: "text-indigo-400", accent: "text-indigo-600" },
  violet: { default: "text-violet-700", muted: "text-violet-400", accent: "text-violet-600" },
  purple: { default: "text-purple-700", muted: "text-purple-400", accent: "text-purple-600" },
  fuchsia: { default: "text-fuchsia-700", muted: "text-fuchsia-400", accent: "text-fuchsia-600" },
  pink: { default: "text-pink-700", muted: "text-pink-400", accent: "text-pink-600" },
  rose: { default: "text-rose-700", muted: "text-rose-400", accent: "text-rose-600" },
  gray: { default: "text-gray-700", muted: "text-gray-400", accent: "text-gray-600" },
  slate: { default: "text-slate-700", muted: "text-slate-400", accent: "text-slate-600" },
  zinc: { default: "text-zinc-700", muted: "text-zinc-400", accent: "text-zinc-600" },
  neutral: { default: "text-neutral-700", muted: "text-neutral-400", accent: "text-neutral-600" },
  stone: { default: "text-stone-700", muted: "text-stone-400", accent: "text-stone-600" },
};

/**
 * Maps text size to Tailwind classes
 */
export const textSizeStyles: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

/**
 * Get appropriate shade for a variant
 */
export const getShadeForVariant = (variant: TextVariant): string => {
  switch (variant) {
    case "default":
      return "700";
    case "muted":
      return "400";
    case "accent":
      return "600";
    default:
      return "700";
  }
};

/**
 * Computes color class based on color prop, variant, and theme settings
 */
export const getColorClass = (color: string, variant: TextVariant, grayScale: string, colorMap: Record<string, string>): string => {
  // Special case for 'current' color - inherit from parent
  if (color === "current") {
    return "text-current";
  }

  // Check if it's a semantic color (primary, success, etc.)
  const isSemanticColor = Object.keys(colorMap).includes(color);

  // If gray is selected, use the theme's gray scale setting (slate, gray, etc.)
  if (color === "gray") {
    return grayTextColorStyles[grayScale]?.[variant] || "text-gray-700";
  }

  // For semantic colors, convert from semantic name (primary, success, etc.) to
  // actual color name (blue, green, etc.) based on theme settings
  const resolvedColor = isSemanticColor ? colorMap[color] || "gray" : color;

  // Get the styles based on the resolved color and variant
  // Priority: specific color styles > default gray styles
  const variantStyles = directTextColorStyles[resolvedColor]?.[variant];

  if (variantStyles) {
    return variantStyles;
  }

  // Fallback for manually constructing the class if not in our maps
  const shade = getShadeForVariant(variant);
  return `text-${resolvedColor}-${shade}`;
};

/**
 * Gets complete Tailwind classes for text component based on props
 */
export const getTextClasses = (
  componentSize: TextSize | undefined,
  weight: FontWeight,
  color: string,
  variant: TextVariant,
  align: TextAlign | undefined,
  truncate: boolean,
  refinedTypography: boolean,
  grayScale: string,
  colorMap: Record<string, string>,
  className?: string
): string => {
  const classes = [
    // Font weight
    fontWeightStylesMap[weight],

    // Text size based on component size
    componentSize && textSizeStyles[componentSize],

    // Text color based on color prop and variant
    getColorClass(color, variant, grayScale, colorMap),

    // Text alignment if specified
    align && textAlignStylesMap[align],

    // Truncation class if enabled
    truncate && "truncate",

    // Typography refinements for better readability if enabled
    refinedTypography && "tracking-tight",

    // User's custom classes
    className,
  ];

  return cn(...classes.filter(Boolean));
};
