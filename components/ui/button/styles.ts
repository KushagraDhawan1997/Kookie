import { cn } from "../../../lib/utils/cn";
import { ButtonVariant } from "./types";
import { ThemeRadius, ThemeSize } from "../../../lib/theme/atoms";

// -----------------------------------------------------------------------------
// Size-based styles
// -----------------------------------------------------------------------------

/**
 * Map component size to height and text size
 */
export const getSizeStyles = (componentSize: ThemeSize): string => {
  const styles = {
    xs: "h-5 text-xs",
    sm: "h-6 text-xs",
    md: "h-8 text-sm",
    lg: "h-10 text-sm",
    xl: "h-12 text-base",
  };

  return styles[componentSize];
};

/**
 * Map component size to padding
 */
export const getPaddingStyles = (componentSize: ThemeSize): string => {
  const styles = {
    xs: "px-2",
    sm: "px-3",
    md: "px-4",
    lg: "px-5",
    xl: "px-6",
  };

  return styles[componentSize];
};

/**
 * Map component size to gap between icon and text
 */
export const getGapStyles = (componentSize: ThemeSize): string => {
  const styles = {
    xs: "gap-1.5",
    sm: "gap-2",
    md: "gap-2.5",
    lg: "gap-3",
    xl: "gap-3.5",
  };

  return styles[componentSize];
};

/**
 * Get border radius style based on component size and theme
 */
export const getRadiusStyle = (componentSize: ThemeSize, radius?: ThemeRadius, themeRadius?: ThemeRadius): string => {
  // Map from radius size to Tailwind class
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    base: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  // First priority: explicit radius prop
  if (radius) {
    return radiusClasses[radius] || radiusClasses.md;
  }

  // Second priority: theme radius
  if (themeRadius) {
    return radiusClasses[themeRadius] || radiusClasses.md;
  }

  // Third priority: size-based radius
  const sizeBasedRadius = {
    xs: "rounded",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-md",
    xl: "rounded-lg",
  }[componentSize];

  return sizeBasedRadius;
};

// -----------------------------------------------------------------------------
// Base button styles
// -----------------------------------------------------------------------------

/**
 * Get base button classes
 */
export const getBaseClasses = (fullWidth: boolean, sizeStyles: string, paddingStyles: string, gapStyles: string, radiusStyles: string): string => {
  return cn(
    "inline-flex items-center justify-center",
    "font-medium",
    "transition-colors duration-150",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    fullWidth ? "w-full" : "",
    sizeStyles,
    paddingStyles,
    gapStyles,
    radiusStyles
  );
};

// -----------------------------------------------------------------------------
// Color styles
// -----------------------------------------------------------------------------

/**
 * Color styles for solid variant
 */
export const solidColorStyles: Record<string, string> = {
  // Red shades
  red: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
  // Orange shades
  orange: "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700",
  // Amber shades
  amber: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700",
  // Yellow shades
  yellow: "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700",
  // Lime shades
  lime: "bg-lime-500 text-white hover:bg-lime-600 active:bg-lime-700",
  // Green shades
  green: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700",
  // Emerald shades
  emerald: "bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700",
  // Teal shades
  teal: "bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700",
  // Cyan shades
  cyan: "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700",
  // Sky shades
  sky: "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700",
  // Blue shades
  blue: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
  // Indigo shades
  indigo: "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700",
  // Violet shades
  violet: "bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700",
  // Purple shades
  purple: "bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700",
  // Fuchsia shades
  fuchsia: "bg-fuchsia-500 text-white hover:bg-fuchsia-600 active:bg-fuchsia-700",
  // Pink shades
  pink: "bg-pink-500 text-white hover:bg-pink-600 active:bg-pink-700",
  // Rose shades
  rose: "bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700",
  // Gray shades
  gray: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700",
  // Slate shades
  slate: "bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-700",
  // Zinc shades
  zinc: "bg-zinc-500 text-white hover:bg-zinc-600 active:bg-zinc-700",
  // Neutral shades
  neutral: "bg-neutral-500 text-white hover:bg-neutral-600 active:bg-neutral-700",
  // Stone shades
  stone: "bg-stone-500 text-white hover:bg-stone-600 active:bg-stone-700",
};

/**
 * Color styles for tinted variant
 */
export const tintedColorStyles: Record<string, string> = {
  // Red shades
  red: "bg-red-100 text-red-700 hover:bg-red-200 active:bg-red-300",
  // Orange shades
  orange: "bg-orange-100 text-orange-700 hover:bg-orange-200 active:bg-orange-300",
  // Amber shades
  amber: "bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300",
  // Yellow shades
  yellow: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 active:bg-yellow-300",
  // Lime shades
  lime: "bg-lime-100 text-lime-700 hover:bg-lime-200 active:bg-lime-300",
  // Green shades
  green: "bg-green-100 text-green-700 hover:bg-green-200 active:bg-green-300",
  // Emerald shades
  emerald: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 active:bg-emerald-300",
  // Teal shades
  teal: "bg-teal-100 text-teal-700 hover:bg-teal-200 active:bg-teal-300",
  // Cyan shades
  cyan: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 active:bg-cyan-300",
  // Sky shades
  sky: "bg-sky-100 text-sky-700 hover:bg-sky-200 active:bg-sky-300",
  // Blue shades
  blue: "bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300",
  // Indigo shades
  indigo: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 active:bg-indigo-300",
  // Violet shades
  violet: "bg-violet-100 text-violet-700 hover:bg-violet-200 active:bg-violet-300",
  // Purple shades
  purple: "bg-purple-100 text-purple-700 hover:bg-purple-200 active:bg-purple-300",
  // Fuchsia shades
  fuchsia: "bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 active:bg-fuchsia-300",
  // Pink shades
  pink: "bg-pink-100 text-pink-700 hover:bg-pink-200 active:bg-pink-300",
  // Rose shades
  rose: "bg-rose-100 text-rose-700 hover:bg-rose-200 active:bg-rose-300",
  // Gray shades
  gray: "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300",
  // Slate shades
  slate: "bg-slate-100 text-slate-700 hover:bg-slate-200 active:bg-slate-300",
  // Zinc shades
  zinc: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300",
  // Neutral shades
  neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300",
  // Stone shades
  stone: "bg-stone-100 text-stone-700 hover:bg-stone-200 active:bg-stone-300",
};

/**
 * Color styles for outline variant
 */
export const outlineColorStyles: Record<string, string> = {
  // Red shades
  red: "border border-red-500 text-red-500 hover:bg-red-50",
  // Orange shades
  orange: "border border-orange-500 text-orange-500 hover:bg-orange-50",
  // Amber shades
  amber: "border border-amber-500 text-amber-500 hover:bg-amber-50",
  // Yellow shades
  yellow: "border border-yellow-500 text-yellow-500 hover:bg-yellow-50",
  // Lime shades
  lime: "border border-lime-500 text-lime-500 hover:bg-lime-50",
  // Green shades
  green: "border border-green-500 text-green-500 hover:bg-green-50",
  // Emerald shades
  emerald: "border border-emerald-500 text-emerald-500 hover:bg-emerald-50",
  // Teal shades
  teal: "border border-teal-500 text-teal-500 hover:bg-teal-50",
  // Cyan shades
  cyan: "border border-cyan-500 text-cyan-500 hover:bg-cyan-50",
  // Sky shades
  sky: "border border-sky-500 text-sky-500 hover:bg-sky-50",
  // Blue shades
  blue: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  // Indigo shades
  indigo: "border border-indigo-500 text-indigo-500 hover:bg-indigo-50",
  // Violet shades
  violet: "border border-violet-500 text-violet-500 hover:bg-violet-50",
  // Purple shades
  purple: "border border-purple-500 text-purple-500 hover:bg-purple-50",
  // Fuchsia shades
  fuchsia: "border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-50",
  // Pink shades
  pink: "border border-pink-500 text-pink-500 hover:bg-pink-50",
  // Rose shades
  rose: "border border-rose-500 text-rose-500 hover:bg-rose-50",
  // Gray shades
  gray: "border border-gray-500 text-gray-500 hover:bg-gray-50",
  // Slate shades
  slate: "border border-slate-500 text-slate-500 hover:bg-slate-50",
  // Zinc shades
  zinc: "border border-zinc-500 text-zinc-500 hover:bg-zinc-50",
  // Neutral shades
  neutral: "border border-neutral-500 text-neutral-500 hover:bg-neutral-50",
  // Stone shades
  stone: "border border-stone-500 text-stone-500 hover:bg-stone-50",
};

/**
 * Color styles for ghost variant
 */
export const ghostColorStyles: Record<string, string> = {
  // Red shades
  red: "text-red-500 hover:bg-red-50",
  // Orange shades
  orange: "text-orange-500 hover:bg-orange-50",
  // Amber shades
  amber: "text-amber-500 hover:bg-amber-50",
  // Yellow shades
  yellow: "text-yellow-500 hover:bg-yellow-50",
  // Lime shades
  lime: "text-lime-500 hover:bg-lime-50",
  // Green shades
  green: "text-green-500 hover:bg-green-50",
  // Emerald shades
  emerald: "text-emerald-500 hover:bg-emerald-50",
  // Teal shades
  teal: "text-teal-500 hover:bg-teal-50",
  // Cyan shades
  cyan: "text-cyan-500 hover:bg-cyan-50",
  // Sky shades
  sky: "text-sky-500 hover:bg-sky-50",
  // Blue shades
  blue: "text-blue-500 hover:bg-blue-50",
  // Indigo shades
  indigo: "text-indigo-500 hover:bg-indigo-50",
  // Violet shades
  violet: "text-violet-500 hover:bg-violet-50",
  // Purple shades
  purple: "text-purple-500 hover:bg-purple-50",
  // Fuchsia shades
  fuchsia: "text-fuchsia-500 hover:bg-fuchsia-50",
  // Pink shades
  pink: "text-pink-500 hover:bg-pink-50",
  // Rose shades
  rose: "text-rose-500 hover:bg-rose-50",
  // Gray shades
  gray: "text-gray-500 hover:bg-gray-50",
  // Slate shades
  slate: "text-slate-500 hover:bg-slate-50",
  // Zinc shades
  zinc: "text-zinc-500 hover:bg-zinc-50",
  // Neutral shades
  neutral: "text-neutral-500 hover:bg-neutral-50",
  // Stone shades
  stone: "text-stone-500 hover:bg-stone-50",
};

/**
 * Color styles for link variant
 */
export const linkColorStyles: Record<string, string> = {
  // Red shades
  red: "text-red-500 hover:underline",
  // Orange shades
  orange: "text-orange-500 hover:underline",
  // Amber shades
  amber: "text-amber-500 hover:underline",
  // Yellow shades
  yellow: "text-yellow-500 hover:underline",
  // Lime shades
  lime: "text-lime-500 hover:underline",
  // Green shades
  green: "text-green-500 hover:underline",
  // Emerald shades
  emerald: "text-emerald-500 hover:underline",
  // Teal shades
  teal: "text-teal-500 hover:underline",
  // Cyan shades
  cyan: "text-cyan-500 hover:underline",
  // Sky shades
  sky: "text-sky-500 hover:underline",
  // Blue shades
  blue: "text-blue-500 hover:underline",
  // Indigo shades
  indigo: "text-indigo-500 hover:underline",
  // Violet shades
  violet: "text-violet-500 hover:underline",
  // Purple shades
  purple: "text-purple-500 hover:underline",
  // Fuchsia shades
  fuchsia: "text-fuchsia-500 hover:underline",
  // Pink shades
  pink: "text-pink-500 hover:underline",
  // Rose shades
  rose: "text-rose-500 hover:underline",
  // Gray shades
  gray: "text-gray-500 hover:underline",
  // Slate shades
  slate: "text-slate-500 hover:underline",
  // Zinc shades
  zinc: "text-zinc-500 hover:underline",
  // Neutral shades
  neutral: "text-neutral-500 hover:underline",
  // Stone shades
  stone: "text-stone-500 hover:underline",
};

/**
 * Get variant style classes based on color and variant
 */
export const getVariantStyleClasses = (variant: ButtonVariant, resolvedColor: string): string => {
  switch (variant) {
    case "solid":
      return solidColorStyles[resolvedColor] || solidColorStyles.gray;
    case "tinted":
      return tintedColorStyles[resolvedColor] || tintedColorStyles.gray;
    case "outline":
      return outlineColorStyles[resolvedColor] || outlineColorStyles.gray;
    case "ghost":
      return ghostColorStyles[resolvedColor] || ghostColorStyles.gray;
    case "link":
      return linkColorStyles[resolvedColor] || linkColorStyles.gray;
    default:
      return solidColorStyles[resolvedColor] || solidColorStyles.gray;
  }
};
