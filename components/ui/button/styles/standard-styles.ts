import { ButtonVariant } from "../types";

// -----------------------------------------------------------------------------
// Color styles
// -----------------------------------------------------------------------------

/**
 * Color styles for solid variant
 */
export const solidColorStyles: Record<string, string> = {
  // Red shades - BRIGHTER
  red: "bg-gradient-to-br from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600 active:from-red-600 active:to-red-700 transition-colors duration-150",
  // Orange shades - BRIGHTER
  orange: "bg-gradient-to-br from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 active:from-orange-600 active:to-orange-700 transition-colors duration-150",
  // Amber shades - BRIGHTER
  amber: "bg-gradient-to-br from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 active:from-amber-600 active:to-amber-700 transition-colors duration-150",
  // Yellow shades - BRIGHTER
  yellow: "bg-gradient-to-br from-yellow-400 to-yellow-500 text-white hover:from-yellow-500 hover:to-yellow-600 active:from-yellow-600 active:to-yellow-700 transition-colors duration-150",
  // Lime shades - BRIGHTER
  lime: "bg-gradient-to-br from-lime-400 to-lime-500 text-white hover:from-lime-500 hover:to-lime-600 active:from-lime-600 active:to-lime-700 transition-colors duration-150",
  // Green shades - BRIGHTER
  green: "bg-gradient-to-br from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 active:from-green-600 active:to-green-700 transition-colors duration-150",
  // Emerald shades - BRIGHTER
  emerald: "bg-gradient-to-br from-emerald-400 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-600 active:from-emerald-600 active:to-emerald-700 transition-colors duration-150",
  // Teal shades - BRIGHTER
  teal: "bg-gradient-to-br from-teal-400 to-teal-500 text-white hover:from-teal-500 hover:to-teal-600 active:from-teal-600 active:to-teal-700 transition-colors duration-150",
  // Cyan shades - BRIGHTER
  cyan: "bg-gradient-to-br from-cyan-400 to-cyan-500 text-white hover:from-cyan-500 hover:to-cyan-600 active:from-cyan-600 active:to-cyan-700 transition-colors duration-150",
  // Sky shades - BRIGHTER
  sky: "bg-gradient-to-br from-sky-400 to-sky-500 text-white hover:from-sky-500 hover:to-sky-600 active:from-sky-600 active:to-sky-700 transition-colors duration-150",
  // Blue shades - BRIGHTER
  blue: "bg-gradient-to-br from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 active:from-blue-600 active:to-blue-700 transition-colors duration-150",
  // Indigo shades - BRIGHTER
  indigo: "bg-gradient-to-br from-indigo-400 to-indigo-500 text-white hover:from-indigo-500 hover:to-indigo-600 active:from-indigo-600 active:to-indigo-700 transition-colors duration-150",
  // Violet shades - BRIGHTER
  violet: "bg-gradient-to-br from-violet-400 to-violet-500 text-white hover:from-violet-500 hover:to-violet-600 active:from-violet-600 active:to-violet-700 transition-colors duration-150",
  // Purple shades - BRIGHTER
  purple: "bg-gradient-to-br from-purple-400 to-purple-500 text-white hover:from-purple-500 hover:to-purple-600 active:from-purple-600 active:to-purple-700 transition-colors duration-150",
  // Fuchsia shades - BRIGHTER
  fuchsia: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-fuchsia-600 active:from-fuchsia-600 active:to-fuchsia-700 transition-colors duration-150",
  // Pink shades - BRIGHTER
  pink: "bg-gradient-to-br from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600 active:from-pink-600 active:to-pink-700 transition-colors duration-150",
  // Rose shades - BRIGHTER
  rose: "bg-gradient-to-br from-rose-400 to-rose-500 text-white hover:from-rose-500 hover:to-rose-600 active:from-rose-600 active:to-rose-700 transition-colors duration-150",
  // Gray shades - EVEN DARKER
  gray: "bg-gradient-to-br from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 active:from-gray-900 active:to-gray-950 transition-colors duration-150",
  // Slate shades - EVEN DARKER
  slate: "bg-gradient-to-br from-slate-700 to-slate-800 text-white hover:from-slate-800 hover:to-slate-900 active:from-slate-900 active:to-slate-950 transition-colors duration-150",
  // Zinc shades - EVEN DARKER
  zinc: "bg-gradient-to-br from-zinc-700 to-zinc-800 text-white hover:from-zinc-800 hover:to-zinc-900 active:from-zinc-900 active:to-zinc-950 transition-colors duration-150",
  // Neutral shades - EVEN DARKER
  neutral: "bg-gradient-to-br from-neutral-700 to-neutral-800 text-white hover:from-neutral-800 hover:to-neutral-900 active:from-neutral-900 active:to-neutral-950 transition-colors duration-150",
  // Stone shades - EVEN DARKER
  stone: "bg-gradient-to-br from-stone-700 to-stone-800 text-white hover:from-stone-800 hover:to-stone-900 active:from-stone-900 active:to-stone-950 transition-colors duration-150",
};

/**
 * Color styles for tinted variant
 */
export const tintedColorStyles: Record<string, string> = {
  // Red shades
  red: "bg-gradient-to-br from-red-50 to-red-100 text-red-600 hover:from-red-100 hover:to-red-200 active:from-red-200 active:to-red-300 transition-colors duration-150",
  // Orange shades
  orange: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 hover:from-orange-100 hover:to-orange-200 active:from-orange-200 active:to-orange-300 transition-colors duration-150",
  // Amber shades
  amber: "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 hover:from-amber-100 hover:to-amber-200 active:from-amber-200 active:to-amber-300 transition-colors duration-150",
  // Yellow shades
  yellow: "bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-600 hover:from-yellow-100 hover:to-yellow-200 active:from-yellow-200 active:to-yellow-300 transition-colors duration-150",
  // Lime shades
  lime: "bg-gradient-to-br from-lime-50 to-lime-100 text-lime-600 hover:from-lime-100 hover:to-lime-200 active:from-lime-200 active:to-lime-300 transition-colors duration-150",
  // Green shades
  green: "bg-gradient-to-br from-green-50 to-green-100 text-green-600 hover:from-green-100 hover:to-green-200 active:from-green-200 active:to-green-300 transition-colors duration-150",
  // Emerald shades
  emerald: "bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 hover:from-emerald-100 hover:to-emerald-200 active:from-emerald-200 active:to-emerald-300 transition-colors duration-150",
  // Teal shades
  teal: "bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 hover:from-teal-100 hover:to-teal-200 active:from-teal-200 active:to-teal-300 transition-colors duration-150",
  // Cyan shades
  cyan: "bg-gradient-to-br from-cyan-50 to-cyan-100 text-cyan-600 hover:from-cyan-100 hover:to-cyan-200 active:from-cyan-200 active:to-cyan-300 transition-colors duration-150",
  // Sky shades
  sky: "bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 hover:from-sky-100 hover:to-sky-200 active:from-sky-200 active:to-sky-300 transition-colors duration-150",
  // Blue shades
  blue: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 hover:from-blue-100 hover:to-blue-200 active:from-blue-200 active:to-blue-300 transition-colors duration-150",
  // Indigo shades
  indigo: "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600 hover:from-indigo-100 hover:to-indigo-200 active:from-indigo-200 active:to-indigo-300 transition-colors duration-150",
  // Violet shades
  violet: "bg-gradient-to-br from-violet-50 to-violet-100 text-violet-600 hover:from-violet-100 hover:to-violet-200 active:from-violet-200 active:to-violet-300 transition-colors duration-150",
  // Purple shades
  purple: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600 hover:from-purple-100 hover:to-purple-200 active:from-purple-200 active:to-purple-300 transition-colors duration-150",
  // Fuchsia shades
  fuchsia: "bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 text-fuchsia-600 hover:from-fuchsia-100 hover:to-fuchsia-200 active:from-fuchsia-200 active:to-fuchsia-300 transition-colors duration-150",
  // Pink shades
  pink: "bg-gradient-to-br from-pink-50 to-pink-100 text-pink-600 hover:from-pink-100 hover:to-pink-200 active:from-pink-200 active:to-pink-300 transition-colors duration-150",
  // Rose shades
  rose: "bg-gradient-to-br from-rose-50 to-rose-100 text-rose-600 hover:from-rose-100 hover:to-rose-200 active:from-rose-200 active:to-rose-300 transition-colors duration-150",
  // Gray shades - LIGHTER
  gray: "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 hover:from-gray-100 hover:to-gray-200 active:from-gray-200 active:to-gray-300 transition-colors duration-150",
  // Slate shades - LIGHTER
  slate: "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 hover:from-slate-100 hover:to-slate-200 active:from-slate-200 active:to-slate-300 transition-colors duration-150",
  // Zinc shades - LIGHTER
  zinc: "bg-gradient-to-br from-zinc-50 to-zinc-100 text-zinc-800 hover:from-zinc-100 hover:to-zinc-200 active:from-zinc-200 active:to-zinc-300 transition-colors duration-150",
  // Neutral shades - LIGHTER
  neutral: "bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-800 hover:from-neutral-100 hover:to-neutral-200 active:from-neutral-200 active:to-neutral-300 transition-colors duration-150",
  // Stone shades - LIGHTER
  stone: "bg-gradient-to-br from-stone-50 to-stone-100 text-stone-800 hover:from-stone-100 hover:to-stone-200 active:from-stone-200 active:to-stone-300 transition-colors duration-150",
};

/**
 * Color styles for outline variant
 */
export const outlineColorStyles: Record<string, string> = {
  // Red shades - BRIGHTER
  red: "border border-red-300/70 text-red-600 hover:border-red-400/80 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 active:from-red-100 active:to-red-200 transition-all duration-150",
  // Orange shades - BRIGHTER
  orange: "border border-orange-300/70 text-orange-600 hover:border-orange-400/80 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 active:from-orange-100 active:to-orange-200 transition-all duration-150",
  // Amber shades - BRIGHTER
  amber: "border border-amber-300/70 text-amber-600 hover:border-amber-400/80 hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100 active:from-amber-100 active:to-amber-200 transition-all duration-150",
  // Yellow shades - BRIGHTER
  yellow: "border border-yellow-300/70 text-yellow-600 hover:border-yellow-400/80 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 active:from-yellow-100 active:to-yellow-200 transition-all duration-150",
  // Lime shades - BRIGHTER
  lime: "border border-lime-300/70 text-lime-600 hover:border-lime-400/80 hover:bg-gradient-to-br hover:from-lime-50 hover:to-lime-100 active:from-lime-100 active:to-lime-200 transition-all duration-150",
  // Green shades - BRIGHTER
  green: "border border-green-300/70 text-green-600 hover:border-green-400/80 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 active:from-green-100 active:to-green-200 transition-all duration-150",
  // Emerald shades - BRIGHTER
  emerald: "border border-emerald-300/70 text-emerald-600 hover:border-emerald-400/80 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100 active:from-emerald-100 active:to-emerald-200 transition-all duration-150",
  // Teal shades - BRIGHTER
  teal: "border border-teal-300/70 text-teal-600 hover:border-teal-400/80 hover:bg-gradient-to-br hover:from-teal-50 hover:to-teal-100 active:from-teal-100 active:to-teal-200 transition-all duration-150",
  // Cyan shades - BRIGHTER
  cyan: "border border-cyan-300/70 text-cyan-600 hover:border-cyan-400/80 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-cyan-100 active:from-cyan-100 active:to-cyan-200 transition-all duration-150",
  // Sky shades - BRIGHTER
  sky: "border border-sky-300/70 text-sky-600 hover:border-sky-400/80 hover:bg-gradient-to-br hover:from-sky-50 hover:to-sky-100 active:from-sky-100 active:to-sky-200 transition-all duration-150",
  // Blue shades - BRIGHTER
  blue: "border border-blue-300/70 text-blue-600 hover:border-blue-400/80 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 active:from-blue-100 active:to-blue-200 transition-all duration-150",
  // Indigo shades - BRIGHTER
  indigo: "border border-indigo-300/70 text-indigo-600 hover:border-indigo-400/80 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 active:from-indigo-100 active:to-indigo-200 transition-all duration-150",
  // Violet shades - BRIGHTER
  violet: "border border-violet-300/70 text-violet-600 hover:border-violet-400/80 hover:bg-gradient-to-br hover:from-violet-50 hover:to-violet-100 active:from-violet-100 active:to-violet-200 transition-all duration-150",
  // Purple shades - BRIGHTER
  purple: "border border-purple-300/70 text-purple-600 hover:border-purple-400/80 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 active:from-purple-100 active:to-purple-200 transition-all duration-150",
  // Fuchsia shades - BRIGHTER
  fuchsia: "border border-fuchsia-300/70 text-fuchsia-600 hover:border-fuchsia-400/80 hover:bg-gradient-to-br hover:from-fuchsia-50 hover:to-fuchsia-100 active:from-fuchsia-100 active:to-fuchsia-200 transition-all duration-150",
  // Pink shades - BRIGHTER
  pink: "border border-pink-300/70 text-pink-600 hover:border-pink-400/80 hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100 active:from-pink-100 active:to-pink-200 transition-all duration-150",
  // Rose shades - BRIGHTER
  rose: "border border-rose-300/70 text-rose-600 hover:border-rose-400/80 hover:bg-gradient-to-br hover:from-rose-50 hover:to-rose-100 active:from-rose-100 active:to-rose-200 transition-all duration-150",
  // Gray shades - DARKER
  gray: "border border-gray-500/70 text-gray-800 hover:border-gray-600/80 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 active:from-gray-100 active:to-gray-200 transition-all duration-150",
  // Slate shades - DARKER
  slate: "border border-slate-500/70 text-slate-800 hover:border-slate-600/80 hover:bg-gradient-to-br hover:from-slate-50 hover:to-slate-100 active:from-slate-100 active:to-slate-200 transition-all duration-150",
  // Zinc shades - DARKER
  zinc: "border border-zinc-500/70 text-zinc-800 hover:border-zinc-600/80 hover:bg-gradient-to-br hover:from-zinc-50 hover:to-zinc-100 active:from-zinc-100 active:to-zinc-200 transition-all duration-150",
  // Neutral shades - DARKER
  neutral: "border border-neutral-500/70 text-neutral-800 hover:border-neutral-600/80 hover:bg-gradient-to-br hover:from-neutral-50 hover:to-neutral-100 active:from-neutral-100 active:to-neutral-200 transition-all duration-150",
  // Stone shades - DARKER
  stone: "border border-stone-500/70 text-stone-800 hover:border-stone-600/80 hover:bg-gradient-to-br hover:from-stone-50 hover:to-stone-100 active:from-stone-100 active:to-stone-200 transition-all duration-150",
};

/**
 * Color styles for ghost variant
 */
export const ghostColorStyles: Record<string, string> = {
  // Red shades - BRIGHTER
  red: "text-red-600 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 active:from-red-100 active:to-red-200 transition-colors duration-150",
  // Orange shades - BRIGHTER
  orange: "text-orange-600 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 active:from-orange-100 active:to-orange-200 transition-colors duration-150",
  // Amber shades - BRIGHTER
  amber: "text-amber-600 hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100 active:from-amber-100 active:to-amber-200 transition-colors duration-150",
  // Yellow shades - BRIGHTER
  yellow: "text-yellow-600 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 active:from-yellow-100 active:to-yellow-200 transition-colors duration-150",
  // Lime shades - BRIGHTER
  lime: "text-lime-600 hover:bg-gradient-to-br hover:from-lime-50 hover:to-lime-100 active:from-lime-100 active:to-lime-200 transition-colors duration-150",
  // Green shades - BRIGHTER
  green: "text-green-600 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 active:from-green-100 active:to-green-200 transition-colors duration-150",
  // Emerald shades - BRIGHTER
  emerald: "text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100 active:from-emerald-100 active:to-emerald-200 transition-colors duration-150",
  // Teal shades - BRIGHTER
  teal: "text-teal-600 hover:bg-gradient-to-br hover:from-teal-50 hover:to-teal-100 active:from-teal-100 active:to-teal-200 transition-colors duration-150",
  // Cyan shades - BRIGHTER
  cyan: "text-cyan-600 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-cyan-100 active:from-cyan-100 active:to-cyan-200 transition-colors duration-150",
  // Sky shades - BRIGHTER
  sky: "text-sky-600 hover:bg-gradient-to-br hover:from-sky-50 hover:to-sky-100 active:from-sky-100 active:to-sky-200 transition-colors duration-150",
  // Blue shades - BRIGHTER
  blue: "text-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 active:from-blue-100 active:to-blue-200 transition-colors duration-150",
  // Indigo shades - BRIGHTER
  indigo: "text-indigo-600 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 active:from-indigo-100 active:to-indigo-200 transition-colors duration-150",
  // Violet shades - BRIGHTER
  violet: "text-violet-600 hover:bg-gradient-to-br hover:from-violet-50 hover:to-violet-100 active:from-violet-100 active:to-violet-200 transition-colors duration-150",
  // Purple shades - BRIGHTER
  purple: "text-purple-600 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 active:from-purple-100 active:to-purple-200 transition-colors duration-150",
  // Fuchsia shades - BRIGHTER
  fuchsia: "text-fuchsia-600 hover:bg-gradient-to-br hover:from-fuchsia-50 hover:to-fuchsia-100 active:from-fuchsia-100 active:to-fuchsia-200 transition-colors duration-150",
  // Pink shades - BRIGHTER
  pink: "text-pink-600 hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100 active:from-pink-100 active:to-pink-200 transition-colors duration-150",
  // Rose shades - BRIGHTER
  rose: "text-rose-600 hover:bg-gradient-to-br hover:from-rose-50 hover:to-rose-100 active:from-rose-100 active:to-rose-200 transition-colors duration-150",
  // Gray shades - DARKER
  gray: "text-gray-800 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 active:from-gray-100 active:to-gray-200 transition-colors duration-150",
  // Slate shades - DARKER
  slate: "text-slate-800 hover:bg-gradient-to-br hover:from-slate-50 hover:to-slate-100 active:from-slate-100 active:to-slate-200 transition-colors duration-150",
  // Zinc shades - DARKER
  zinc: "text-zinc-800 hover:bg-gradient-to-br hover:from-zinc-50 hover:to-zinc-100 active:from-zinc-100 active:to-zinc-200 transition-colors duration-150",
  // Neutral shades - DARKER
  neutral: "text-neutral-800 hover:bg-gradient-to-br hover:from-neutral-50 hover:to-neutral-100 active:from-neutral-100 active:to-neutral-200 transition-colors duration-150",
  // Stone shades - DARKER
  stone: "text-stone-800 hover:bg-gradient-to-br hover:from-stone-50 hover:to-stone-100 active:from-stone-100 active:to-stone-200 transition-colors duration-150",
};

/**
 * Color styles for link variant
 */
export const linkColorStyles: Record<string, string> = {
  // Red shades - BRIGHTER
  red: "text-red-600 hover:text-red-700 hover:underline active:text-red-800 transition-colors duration-150",
  // Orange shades - BRIGHTER
  orange: "text-orange-600 hover:text-orange-700 hover:underline active:text-orange-800 transition-colors duration-150",
  // Amber shades - BRIGHTER
  amber: "text-amber-600 hover:text-amber-700 hover:underline active:text-amber-800 transition-colors duration-150",
  // Yellow shades - BRIGHTER
  yellow: "text-yellow-600 hover:text-yellow-700 hover:underline active:text-yellow-800 transition-colors duration-150",
  // Lime shades - BRIGHTER
  lime: "text-lime-600 hover:text-lime-700 hover:underline active:text-lime-800 transition-colors duration-150",
  // Green shades - BRIGHTER
  green: "text-green-600 hover:text-green-700 hover:underline active:text-green-800 transition-colors duration-150",
  // Emerald shades - BRIGHTER
  emerald: "text-emerald-600 hover:text-emerald-700 hover:underline active:text-emerald-800 transition-colors duration-150",
  // Teal shades - BRIGHTER
  teal: "text-teal-600 hover:text-teal-700 hover:underline active:text-teal-800 transition-colors duration-150",
  // Cyan shades - BRIGHTER
  cyan: "text-cyan-600 hover:text-cyan-700 hover:underline active:text-cyan-800 transition-colors duration-150",
  // Sky shades - BRIGHTER
  sky: "text-sky-600 hover:text-sky-700 hover:underline active:text-sky-800 transition-colors duration-150",
  // Blue shades - BRIGHTER
  blue: "text-blue-600 hover:text-blue-700 hover:underline active:text-blue-800 transition-colors duration-150",
  // Indigo shades - BRIGHTER
  indigo: "text-indigo-600 hover:text-indigo-700 hover:underline active:text-indigo-800 transition-colors duration-150",
  // Violet shades - BRIGHTER
  violet: "text-violet-600 hover:text-violet-700 hover:underline active:text-violet-800 transition-colors duration-150",
  // Purple shades - BRIGHTER
  purple: "text-purple-600 hover:text-purple-700 hover:underline active:text-purple-800 transition-colors duration-150",
  // Fuchsia shades - BRIGHTER
  fuchsia: "text-fuchsia-600 hover:text-fuchsia-700 hover:underline active:text-fuchsia-800 transition-colors duration-150",
  // Pink shades - BRIGHTER
  pink: "text-pink-600 hover:text-pink-700 hover:underline active:text-pink-800 transition-colors duration-150",
  // Rose shades - BRIGHTER
  rose: "text-rose-600 hover:text-rose-700 hover:underline active:text-rose-800 transition-colors duration-150",
  // Gray shades - DARKER
  gray: "text-gray-800 hover:text-gray-900 hover:underline active:text-gray-950 transition-colors duration-150",
  // Slate shades - DARKER
  slate: "text-slate-800 hover:text-slate-900 hover:underline active:text-slate-950 transition-colors duration-150",
  // Zinc shades - DARKER
  zinc: "text-zinc-800 hover:text-zinc-900 hover:underline active:text-zinc-950 transition-colors duration-150",
  // Neutral shades - DARKER
  neutral: "text-neutral-800 hover:text-neutral-900 hover:underline active:text-neutral-950 transition-colors duration-150",
  // Stone shades - DARKER
  stone: "text-stone-800 hover:text-stone-900 hover:underline active:text-stone-950 transition-colors duration-150",
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
