import React, { createContext, useContext } from "react";
import { Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { colorAtom, grayAtom, sizeAtom, styleAtom, radiusAtom, componentSizeAtom, ThemeColor, ThemeGray, ThemeSize, ThemeStyle } from "./atoms";

// Additional context for CSS variables
type ThemeContextType = {
  // Map from our theme colors to actual Tailwind colors
  colorMap: {
    primary: ThemeColor;
    success: ThemeColor;
    warning: ThemeColor;
    danger: ThemeColor;
  };
};

const ThemeContext = createContext<ThemeContextType>({
  colorMap: {
    primary: "blue",
    success: "green",
    warning: "amber",
    danger: "red",
  },
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  color?: ThemeColor;
  gray?: ThemeGray;
  size?: ThemeSize;
  style?: ThemeStyle;
  radius?: "none" | "sm" | "md" | "lg" | "full";
}

/**
 * ThemeProvider component that sets up global theme settings
 * Wrap your application with this to enable theming
 */
export function ThemeProvider({ children, color = "blue", gray = "slate", size = "sm", style = "modern", radius = "md" }: ThemeProviderProps) {
  // Set up mapping from semantic colors to actual Tailwind colors
  const colorMap = {
    primary: color,
    success: "green" as ThemeColor,
    warning: "amber" as ThemeColor,
    danger: "red" as ThemeColor,
  };

  // Initialize atom values component
  const HydrateAtoms = ({ children }: { children: React.ReactNode }) => {
    useHydrateAtoms([
      [colorAtom, color],
      [grayAtom, gray],
      [sizeAtom, size],
      [styleAtom, style],
      [radiusAtom, radius],
      [componentSizeAtom, size],
    ]);

    return <>{children}</>;
  };

  return (
    <Provider>
      <HydrateAtoms>
        <ThemeContext.Provider value={{ colorMap }}>{children}</ThemeContext.Provider>
      </HydrateAtoms>
    </Provider>
  );
}
