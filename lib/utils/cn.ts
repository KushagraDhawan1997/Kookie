import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge and clean up class names
 *
 * This function combines clsx and tailwind-merge to provide a convenient way to
 * merge multiple class names and Tailwind CSS classes, while properly handling
 * conflicts between Tailwind classes.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <div className={cn("px-4 py-2", "bg-blue-500", isActive && "bg-green-500")}>
 *   Content
 * </div>
 *
 * // With conditional classes
 * <button className={cn(
 *   "px-4 py-2 rounded",
 *   variant === "primary" && "bg-primary-9 text-white",
 *   variant === "outline" && "border border-gray-7 text-gray-11",
 *   disabled && "opacity-50 cursor-not-allowed"
 * )}>
 *   Button Text
 * </button>
 * ```
 *
 * @param {...ClassValue[]} inputs - Class values to merge
 * @returns {string} Merged class string with conflicts resolved
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
