import { ButtonVariant } from "../types";

// -----------------------------------------------------------------------------
// Color styles for minimal theme
// -----------------------------------------------------------------------------

/**
 * Color styles for solid variant - MINIMAL THEME
 * Flatter appearance, darker colors
 */
export const solidColorStyles: Record<string, string> = {
  // Red shades
  red: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition-colors duration-250",
  // Orange shades
  orange: "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 transition-colors duration-250",
  // Amber shades
  amber: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 transition-colors duration-250",
  // Yellow shades
  yellow: "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 transition-colors duration-250",
  // Lime shades
  lime: "bg-lime-500 text-white hover:bg-lime-600 active:bg-lime-700 transition-colors duration-250",
  // Green shades
  green: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700 transition-colors duration-250",
  // Emerald shades
  emerald: "bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 transition-colors duration-250",
  // Teal shades
  teal: "bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700 transition-colors duration-250",
  // Cyan shades
  cyan: "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 transition-colors duration-250",
  // Sky shades
  sky: "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 transition-colors duration-250",
  // Blue shades
  blue: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition-colors duration-250",
  // Indigo shades
  indigo: "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700 transition-colors duration-250",
  // Violet shades
  violet: "bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700 transition-colors duration-250",
  // Purple shades
  purple: "bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700 transition-colors duration-250",
  // Fuchsia shades
  fuchsia: "bg-fuchsia-500 text-white hover:bg-fuchsia-600 active:bg-fuchsia-700 transition-colors duration-250",
  // Pink shades
  pink: "bg-pink-500 text-white hover:bg-pink-600 active:bg-pink-700 transition-colors duration-250",
  // Rose shades
  rose: "bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 transition-colors duration-250",
  // Gray shades
  gray: "bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900 transition-colors duration-250",
  // Slate shades
  slate: "bg-slate-700 text-white hover:bg-slate-800 active:bg-slate-900 transition-colors duration-250",
  // Zinc shades
  zinc: "bg-zinc-700 text-white hover:bg-zinc-800 active:bg-zinc-900 transition-colors duration-250",
  // Neutral shades
  neutral: "bg-neutral-700 text-white hover:bg-neutral-800 active:bg-neutral-900 transition-colors duration-250",
  // Stone shades
  stone: "bg-stone-700 text-white hover:bg-stone-800 active:bg-stone-900 transition-colors duration-250",
};

/**
 * Color styles for tinted variant - MINIMAL THEME
 * Simple background with darker text colors
 */
export const tintedColorStyles: Record<string, string> = {
  // Red shades
  red: "bg-red-100 text-red-700 hover:bg-red-200 active:bg-red-300 transition-colors duration-250",
  // Orange shades
  orange: "bg-orange-100 text-orange-700 hover:bg-orange-200 active:bg-orange-300 transition-colors duration-250",
  // Amber shades
  amber: "bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300 transition-colors duration-250",
  // Yellow shades
  yellow: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 active:bg-yellow-300 transition-colors duration-250",
  // Lime shades
  lime: "bg-lime-100 text-lime-700 hover:bg-lime-200 active:bg-lime-300 transition-colors duration-250",
  // Green shades
  green: "bg-green-100 text-green-700 hover:bg-green-200 active:bg-green-300 transition-colors duration-250",
  // Emerald shades
  emerald: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 active:bg-emerald-300 transition-colors duration-250",
  // Teal shades
  teal: "bg-teal-100 text-teal-700 hover:bg-teal-200 active:bg-teal-300 transition-colors duration-250",
  // Cyan shades
  cyan: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 active:bg-cyan-300 transition-colors duration-250",
  // Sky shades
  sky: "bg-sky-100 text-sky-700 hover:bg-sky-200 active:bg-sky-300 transition-colors duration-250",
  // Blue shades
  blue: "bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-250",
  // Indigo shades
  indigo: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 active:bg-indigo-300 transition-colors duration-250",
  // Violet shades
  violet: "bg-violet-100 text-violet-700 hover:bg-violet-200 active:bg-violet-300 transition-colors duration-250",
  // Purple shades
  purple: "bg-purple-100 text-purple-700 hover:bg-purple-200 active:bg-purple-300 transition-colors duration-250",
  // Fuchsia shades
  fuchsia: "bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 active:bg-fuchsia-300 transition-colors duration-250",
  // Pink shades
  pink: "bg-pink-100 text-pink-700 hover:bg-pink-200 active:bg-pink-300 transition-colors duration-250",
  // Rose shades
  rose: "bg-rose-100 text-rose-700 hover:bg-rose-200 active:bg-rose-300 transition-colors duration-250",
  // Gray shades
  gray: "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-250",
  // Slate shades
  slate: "bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 transition-colors duration-250",
  // Zinc shades
  zinc: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 active:bg-zinc-300 transition-colors duration-250",
  // Neutral shades
  neutral: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-300 transition-colors duration-250",
  // Stone shades
  stone: "bg-stone-100 text-stone-800 hover:bg-stone-200 active:bg-stone-300 transition-colors duration-250",
};

/**
 * Color styles for outline variant - MINIMAL THEME
 * Borders with darker text colors
 */
export const outlineColorStyles: Record<string, string> = {
  // Red shades
  red: "border border-red-300 text-red-700 hover:bg-red-50 active:bg-red-100 transition-colors duration-250",
  // Orange shades
  orange: "border border-orange-300 text-orange-700 hover:bg-orange-50 active:bg-orange-100 transition-colors duration-250",
  // Amber shades
  amber: "border border-amber-300 text-amber-700 hover:bg-amber-50 active:bg-amber-100 transition-colors duration-250",
  // Yellow shades
  yellow: "border border-yellow-300 text-yellow-700 hover:bg-yellow-50 active:bg-yellow-100 transition-colors duration-250",
  // Lime shades
  lime: "border border-lime-300 text-lime-700 hover:bg-lime-50 active:bg-lime-100 transition-colors duration-250",
  // Green shades
  green: "border border-green-300 text-green-700 hover:bg-green-50 active:bg-green-100 transition-colors duration-250",
  // Emerald shades
  emerald: "border border-emerald-300 text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 transition-colors duration-250",
  // Teal shades
  teal: "border border-teal-300 text-teal-700 hover:bg-teal-50 active:bg-teal-100 transition-colors duration-250",
  // Cyan shades
  cyan: "border border-cyan-300 text-cyan-700 hover:bg-cyan-50 active:bg-cyan-100 transition-colors duration-250",
  // Sky shades
  sky: "border border-sky-300 text-sky-700 hover:bg-sky-50 active:bg-sky-100 transition-colors duration-250",
  // Blue shades
  blue: "border border-blue-300 text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-colors duration-250",
  // Indigo shades
  indigo: "border border-indigo-300 text-indigo-700 hover:bg-indigo-50 active:bg-indigo-100 transition-colors duration-250",
  // Violet shades
  violet: "border border-violet-300 text-violet-700 hover:bg-violet-50 active:bg-violet-100 transition-colors duration-250",
  // Purple shades
  purple: "border border-purple-300 text-purple-700 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-250",
  // Fuchsia shades
  fuchsia: "border border-fuchsia-300 text-fuchsia-700 hover:bg-fuchsia-50 active:bg-fuchsia-100 transition-colors duration-250",
  // Pink shades
  pink: "border border-pink-300 text-pink-700 hover:bg-pink-50 active:bg-pink-100 transition-colors duration-250",
  // Rose shades
  rose: "border border-rose-300 text-rose-700 hover:bg-rose-50 active:bg-rose-100 transition-colors duration-250",
  // Gray shades
  gray: "border border-gray-400 text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-250",
  // Slate shades
  slate: "border border-slate-400 text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition-colors duration-250",
  // Zinc shades
  zinc: "border border-zinc-400 text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-250",
  // Neutral shades
  neutral: "border border-neutral-400 text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 transition-colors duration-250",
  // Stone shades
  stone: "border border-stone-400 text-stone-800 hover:bg-stone-50 active:bg-stone-100 transition-colors duration-250",
};

/**
 * Color styles for ghost variant - MINIMAL THEME
 * Darker text colors with simple hover effects
 */
export const ghostColorStyles: Record<string, string> = {
  // Red shades
  red: "text-red-700 hover:bg-red-50 active:bg-red-100 transition-colors duration-250",
  // Orange shades
  orange: "text-orange-700 hover:bg-orange-50 active:bg-orange-100 transition-colors duration-250",
  // Amber shades
  amber: "text-amber-700 hover:bg-amber-50 active:bg-amber-100 transition-colors duration-250",
  // Yellow shades
  yellow: "text-yellow-700 hover:bg-yellow-50 active:bg-yellow-100 transition-colors duration-250",
  // Lime shades
  lime: "text-lime-700 hover:bg-lime-50 active:bg-lime-100 transition-colors duration-250",
  // Green shades
  green: "text-green-700 hover:bg-green-50 active:bg-green-100 transition-colors duration-250",
  // Emerald shades
  emerald: "text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 transition-colors duration-250",
  // Teal shades
  teal: "text-teal-700 hover:bg-teal-50 active:bg-teal-100 transition-colors duration-250",
  // Cyan shades
  cyan: "text-cyan-700 hover:bg-cyan-50 active:bg-cyan-100 transition-colors duration-250",
  // Sky shades
  sky: "text-sky-700 hover:bg-sky-50 active:bg-sky-100 transition-colors duration-250",
  // Blue shades
  blue: "text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-colors duration-250",
  // Indigo shades
  indigo: "text-indigo-700 hover:bg-indigo-50 active:bg-indigo-100 transition-colors duration-250",
  // Violet shades
  violet: "text-violet-700 hover:bg-violet-50 active:bg-violet-100 transition-colors duration-250",
  // Purple shades
  purple: "text-purple-700 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-250",
  // Fuchsia shades
  fuchsia: "text-fuchsia-700 hover:bg-fuchsia-50 active:bg-fuchsia-100 transition-colors duration-250",
  // Pink shades
  pink: "text-pink-700 hover:bg-pink-50 active:bg-pink-100 transition-colors duration-250",
  // Rose shades
  rose: "text-rose-700 hover:bg-rose-50 active:bg-rose-100 transition-colors duration-250",
  // Gray shades
  gray: "text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-250",
  // Slate shades
  slate: "text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition-colors duration-250",
  // Zinc shades
  zinc: "text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-250",
  // Neutral shades
  neutral: "text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 transition-colors duration-250",
  // Stone shades
  stone: "text-stone-800 hover:bg-stone-50 active:bg-stone-100 transition-colors duration-250",
};

/**
 * Color styles for link variant - MINIMAL THEME
 * Darker text colors with hover underline
 */
export const linkColorStyles: Record<string, string> = {
  // Red shades
  red: "text-red-700 hover:text-red-800 hover:underline active:text-red-900 transition-colors duration-250",
  // Orange shades
  orange: "text-orange-700 hover:text-orange-800 hover:underline active:text-orange-900 transition-colors duration-250",
  // Amber shades
  amber: "text-amber-700 hover:text-amber-800 hover:underline active:text-amber-900 transition-colors duration-250",
  // Yellow shades
  yellow: "text-yellow-700 hover:text-yellow-800 hover:underline active:text-yellow-900 transition-colors duration-250",
  // Lime shades
  lime: "text-lime-700 hover:text-lime-800 hover:underline active:text-lime-900 transition-colors duration-250",
  // Green shades
  green: "text-green-700 hover:text-green-800 hover:underline active:text-green-900 transition-colors duration-250",
  // Emerald shades
  emerald: "text-emerald-700 hover:text-emerald-800 hover:underline active:text-emerald-900 transition-colors duration-250",
  // Teal shades
  teal: "text-teal-700 hover:text-teal-800 hover:underline active:text-teal-900 transition-colors duration-250",
  // Cyan shades
  cyan: "text-cyan-700 hover:text-cyan-800 hover:underline active:text-cyan-900 transition-colors duration-250",
  // Sky shades
  sky: "text-sky-700 hover:text-sky-800 hover:underline active:text-sky-900 transition-colors duration-250",
  // Blue shades
  blue: "text-blue-700 hover:text-blue-800 hover:underline active:text-blue-900 transition-colors duration-250",
  // Indigo shades
  indigo: "text-indigo-700 hover:text-indigo-800 hover:underline active:text-indigo-900 transition-colors duration-250",
  // Violet shades
  violet: "text-violet-700 hover:text-violet-800 hover:underline active:text-violet-900 transition-colors duration-250",
  // Purple shades
  purple: "text-purple-700 hover:text-purple-800 hover:underline active:text-purple-900 transition-colors duration-250",
  // Fuchsia shades
  fuchsia: "text-fuchsia-700 hover:text-fuchsia-800 hover:underline active:text-fuchsia-900 transition-colors duration-250",
  // Pink shades
  pink: "text-pink-700 hover:text-pink-800 hover:underline active:text-pink-900 transition-colors duration-250",
  // Rose shades
  rose: "text-rose-700 hover:text-rose-800 hover:underline active:text-rose-900 transition-colors duration-250",
  // Gray shades
  gray: "text-gray-800 hover:text-gray-900 hover:underline active:text-gray-950 transition-colors duration-250",
  // Slate shades
  slate: "text-slate-800 hover:text-slate-900 hover:underline active:text-slate-950 transition-colors duration-250",
  // Zinc shades
  zinc: "text-zinc-800 hover:text-zinc-900 hover:underline active:text-zinc-950 transition-colors duration-250",
  // Neutral shades
  neutral: "text-neutral-800 hover:text-neutral-900 hover:underline active:text-neutral-950 transition-colors duration-250",
  // Stone shades
  stone: "text-stone-800 hover:text-stone-900 hover:underline active:text-stone-950 transition-colors duration-250",
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
