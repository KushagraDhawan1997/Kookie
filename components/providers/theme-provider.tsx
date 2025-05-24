"use client";

import React, { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { SemanticColorKey, ThemeSize, ThemeRoundness, ThemeColor, ThemeGray, THEME_DEFAULTS } from "./theme-types";

/**
 * Maps semantic colors to their default theme colors
 */
type ColorDefaults = Record<SemanticColorKey, ThemeColor | ThemeGray>;

/**
 * Jotai atom for storing the current primary color
 */
export const colorAtom = atom<ThemeColor>(THEME_DEFAULTS.colors.primary);

/**
 * Jotai atom for storing the current gray scale
 */
export const grayAtom = atom<ThemeGray>(THEME_DEFAULTS.colors.gray);

/**
 * Jotai atom for storing the current error color
 */
export const errorAtom = atom<ThemeColor>(THEME_DEFAULTS.colors.error);

/**
 * Jotai atom for storing the current success color
 */
export const successAtom = atom<ThemeColor>(THEME_DEFAULTS.colors.success);

/**
 * Jotai atom for storing the current warning color
 */
export const warningAtom = atom<ThemeColor>(THEME_DEFAULTS.colors.warning);

/**
 * Jotai atom for storing default size
 */
export const sizeAtom = atom<ThemeSize>(THEME_DEFAULTS.size);

/**
 * Jotai atom for storing default roundness
 */
export const roundnessAtom = atom<ThemeRoundness>(THEME_DEFAULTS.roundness);

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
  primary = THEME_DEFAULTS.colors.primary,
  gray = THEME_DEFAULTS.colors.gray,
  error = THEME_DEFAULTS.colors.error,
  success = THEME_DEFAULTS.colors.success,
  warning = THEME_DEFAULTS.colors.warning,
  size = THEME_DEFAULTS.size,
  roundness = THEME_DEFAULTS.roundness,
}: ThemeProviderProps) {
  const [currentColor, setColor] = useAtom(colorAtom);
  const [currentGray, setGray] = useAtom(grayAtom);
  const [currentError, setError] = useAtom(errorAtom);
  const [currentSuccess, setSuccess] = useAtom(successAtom);
  const [currentWarning, setWarning] = useAtom(warningAtom);
  const [, setSize] = useAtom(sizeAtom);
  const [, setRoundness] = useAtom(roundnessAtom);

  // Set initial values from props
  useEffect(() => {
    if (primary && primary !== currentColor) setColor(primary);
    if (gray && gray !== currentGray) setGray(gray);
    if (error && error !== currentError) setError(error);
    if (success && success !== currentSuccess) setSuccess(success);
    if (warning && warning !== currentWarning) setWarning(warning);
    setSize(size);
    setRoundness(roundness);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, gray, error, success, warning, size, roundness]);

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
  const [error, setError] = useAtom(errorAtom);
  const [success, setSuccess] = useAtom(successAtom);
  const [warning, setWarning] = useAtom(warningAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const [roundness, setRoundness] = useAtom(roundnessAtom);
  return { color, setColor, gray, setGray, error, setError, success, setSuccess, warning, setWarning, size, setSize, roundness, setRoundness };
}
