"use client";

import React, { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { SemanticColorKey, ThemeSize, ThemeRoundness, ThemeColor, ThemeGray } from "./theme-types";

/**
 * Maps semantic colors to their default theme colors
 */
type ColorDefaults = Record<SemanticColorKey, ThemeColor | ThemeGray>;

const themeDefaults = {
  colors: {
    primary: "blue" as ThemeColor,
    gray: "slate" as ThemeGray,
    error: "red" as ThemeColor,
    success: "green" as ThemeColor,
    warning: "amber" as ThemeColor,
  } satisfies ColorDefaults,
  size: 3 as ThemeSize,
  roundness: "md" as ThemeRoundness,
} as const;

/**
 * Jotai atom for storing the current primary color
 */
export const colorAtom = atom<ThemeColor>(themeDefaults.colors.primary);

/**
 * Jotai atom for storing the current gray scale
 */
export const grayAtom = atom<ThemeGray>(themeDefaults.colors.gray);

/**
 * Jotai atom for storing default size
 */
export const sizeAtom = atom<ThemeSize>(themeDefaults.size);

/**
 * Jotai atom for storing default roundness
 */
export const roundnessAtom = atom<ThemeRoundness>("md");

/**
 * Props for the ThemeProvider component
 * @interface ThemeProviderProps
 * @property {React.ReactNode} children - Child components to be wrapped by the provider
 * @property {ThemeColor} [primary="blue"] - Primary color theme
 * @property {ThemeGray} [gray="slate"] - Gray scale theme
 * @property {ThemeColor} [error="red"] - Error color theme
 * @property {ThemeColor} [success="green"] - Success color theme
 * @property {ThemeColor} [warning="amber"] - Warning color theme
 * @property {ThemeSize} [size=3] - Default size for components that opt in
 * @property {ThemeRoundness} [roundness="md"] - Default roundness for components that opt in
 */
export interface ThemeProviderProps {
  children: React.ReactNode;
  primary?: ThemeColor;
  gray?: ThemeGray;
  error?: ThemeColor;
  success?: ThemeColor;
  warning?: ThemeColor;
  size?: ThemeSize;
  roundness?: ThemeRoundness;
}

/**
 * ThemeProvider component
 *
 * Provides theming capabilities for the application by setting data attributes
 * on the document root element. These attributes are used by the CSS to select
 * the appropriate color variables.
 *
 * @example
 * ```tsx
 * <ThemeProvider
 *   primary="purple"
 *   gray="sage"
 *   size={2}
 *   roundness="md"
 * >
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * @param {ThemeProviderProps} props - Component props
 * @returns {JSX.Element} Provider component
 */
export function ThemeProvider({
  children,
  primary = themeDefaults.colors.primary,
  gray = themeDefaults.colors.gray,
  error = themeDefaults.colors.error,
  success = themeDefaults.colors.success,
  warning = themeDefaults.colors.warning,
  size = themeDefaults.size,
  roundness = themeDefaults.roundness,
}: ThemeProviderProps) {
  const [currentColor, setColor] = useAtom(colorAtom);
  const [currentGray, setGray] = useAtom(grayAtom);
  const [, setSize] = useAtom(sizeAtom);
  const [, setRoundness] = useAtom(roundnessAtom);

  // Set initial values from props
  useEffect(() => {
    if (primary && primary !== currentColor) setColor(primary);
    if (gray && gray !== currentGray) setGray(gray);
    setSize(size);
    setRoundness(roundness);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, gray, size, roundness]);

  // Set data attributes on document root
  useEffect(() => {
    document.documentElement.setAttribute("data-primary-color", primary);
    document.documentElement.setAttribute("data-gray-color", gray);
    document.documentElement.setAttribute("data-error-color", error);
    document.documentElement.setAttribute("data-success-color", success);
    document.documentElement.setAttribute("data-warning-color", warning);
    document.documentElement.setAttribute("data-size", size.toString());
    document.documentElement.setAttribute("data-roundness", roundness);
    return () => {
      document.documentElement.removeAttribute("data-primary-color");
      document.documentElement.removeAttribute("data-gray-color");
      document.documentElement.removeAttribute("data-error-color");
      document.documentElement.removeAttribute("data-success-color");
      document.documentElement.removeAttribute("data-warning-color");
      document.documentElement.removeAttribute("data-size");
      document.documentElement.removeAttribute("data-roundness");
    };
  }, [primary, gray, error, success, warning, size, roundness]);

  return <>{children}</>;
}

/**
 * Custom hook for accessing and modifying the current theme
 *
 * @example
 * ```tsx
 * const { color, setColor, gray, setGray, size } = useTheme();
 *
 * // Get theme size
 * const defaultSize = size; // Returns the theme's default size
 * ```
 *
 * @returns {Object} Theme state and setter functions
 */
export function useTheme() {
  const [color, setColor] = useAtom(colorAtom);
  const [gray, setGray] = useAtom(grayAtom);
  const [size] = useAtom(sizeAtom);
  const [roundness] = useAtom(roundnessAtom);
  return { color, setColor, gray, setGray, size, roundness };
}
