"use client";

import React, { createContext, useContext } from "react";
import { Provider } from "jotai"; // Jotai provider for global state management
import { useHydrateAtoms } from "jotai/utils"; // Utility to initialize Jotai atoms
import { colorAtom, grayAtom, sizeAtom, styleAtom, radiusAtom, componentSizeAtom, ThemeColor, ThemeGray, ThemeSize, ThemeStyle } from "./atoms"; // Jotai atoms for theme properties

// Define default theme color values
// This constant centralizes the default string values for semantic colors (primary, success, etc.).
// It's used to provide initial values for both the ThemeContext and ThemeProvider props,
// ensuring consistency and a single source of truth for these defaults.
const defaultThemeColorValues = {
  primary: "blue" as ThemeColor, // Default primary color (e.g., for main actions, branding)
  success: "green" as ThemeColor, // Default success color (e.g., for success messages, confirmations)
  warning: "amber" as ThemeColor, // Default warning color (e.g., for warnings, alerts)
  danger: "rose" as ThemeColor, // Default danger color (e.g., for errors, destructive actions)
};

// Additional context for CSS variables and color mapping
// Defines the shape of the data that will be provided by ThemeContext.
type ThemeContextType = {
  // Map from our semantic theme colors (like 'primary', 'success') to actual Tailwind color names (like 'blue', 'green').
  // This allows components to use semantic color names, and the ThemeProvider determines the actual color value.
  colorMap: {
    primary: ThemeColor;
    success: ThemeColor;
    warning: ThemeColor;
    danger: ThemeColor;
  };
};

// Create the ThemeContext
// This context is used to pass down the theme's colorMap to any component in the tree.
// The value provided here (defaultThemeColorValues) acts as a fallback if a component
// tries to consume the context without being a descendant of a ThemeContext.Provider.
const ThemeContext = createContext<ThemeContextType>({
  colorMap: defaultThemeColorValues,
});

// Custom hook to easily consume the ThemeContext
// Simplifies accessing the theme's colorMap from components.
// Usage: const { colorMap } = useThemeContext();
export const useThemeContext = () => useContext(ThemeContext);

// Props for the ThemeProvider component
interface ThemeProviderProps {
  children: React.ReactNode; // The rest of the application or component tree to be themed
  color?: ThemeColor; // Optional: Overrides the default primary color
  success?: ThemeColor; // Optional: Overrides the default success color
  warning?: ThemeColor; // Optional: Overrides the default warning color
  danger?: ThemeColor; // Optional: Overrides the default danger color
  gray?: ThemeGray; // Optional: Sets the gray scale color (e.g., 'slate', 'gray')
  size?: ThemeSize; // Optional: Sets the base size for theme-aware components (e.g., 'sm', 'md', 'lg')
  style?: ThemeStyle; // Optional: Sets the visual style (e.g., 'modern', 'classic')
  radius?: "none" | "sm" | "md" | "lg" | "full"; // Optional: Sets the border radius for components
}

/**
 * ThemeProvider component that sets up global theme settings and Jotai state.
 * It initializes various theme aspects like colors, sizes, and styles, making them available
 * to the entire application via Jotai atoms and React Context.
 * Wrap your application's root with this component to enable theming.
 */
export function ThemeProvider({
  children, // Child components that will have access to the theme
  // Props with default values, using the centralized defaultThemeColorValues for colors.
  // These props allow customization of the theme when the ThemeProvider is used.
  color = defaultThemeColorValues.primary,
  success = defaultThemeColorValues.success,
  warning = defaultThemeColorValues.warning,
  danger = defaultThemeColorValues.danger,
  gray = "slate",
  size = "sm",
  style = "modern",
  radius = "md",
}: ThemeProviderProps) {
  // Set up the mapping from semantic color names to their actual (configurable) Tailwind color values.
  // This map is then passed down via ThemeContext for components that need to resolve semantic colors.
  const colorMap = {
    primary: color, // The primary color, taken from props or its default
    success: success, // The success color, taken from props or its default
    warning: warning, // The warning color, taken from props or its default
    danger: danger, // The danger color, taken from props or its default
  };

  // Internal component to handle the hydration (initialization) of Jotai atoms.
  // This ensures that Jotai atoms are set to the theme values derived from ThemeProvider's props.
  const HydrateAtoms = ({ children: hydratorChildren }: { children: React.ReactNode }) => {
    // useHydrateAtoms takes an array of tuples, where each tuple is [atom, initialValue].
    useHydrateAtoms([
      [colorAtom, color], // Initialize the global primary color atom
      [grayAtom, gray], // Initialize the global gray scale atom
      [sizeAtom, size], // Initialize the global base size atom
      [styleAtom, style], // Initialize the global style atom
      [radiusAtom, radius], // Initialize the global border radius atom
      [componentSizeAtom, size], // Initialize an atom for component-specific sizing (can be same as base size)
    ]);

    return <>{hydratorChildren}</>; // Render the children passed to HydrateAtoms
  };

  // The ThemeProvider returns a structure that includes:
  // 1. Jotai's <Provider>: Enables Jotai state management for all descendants.
  // 2. <HydrateAtoms>: Initializes the theme-related Jotai atoms.
  // 3. <ThemeContext.Provider>: Makes the colorMap available to descendants via the useThemeContext hook.
  return (
    <Provider>
      {" "}
      {/* Jotai's root provider */}
      <HydrateAtoms>
        {" "}
        {/* Component to initialize Jotai atoms with theme values */}
        {/* Make the calculated colorMap available to all children via ThemeContext */}
        <ThemeContext.Provider value={{ colorMap }}>{children}</ThemeContext.Provider>
      </HydrateAtoms>
    </Provider>
  );
}
