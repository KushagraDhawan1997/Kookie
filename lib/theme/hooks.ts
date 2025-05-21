"use client";

import { useAtom, useAtomValue } from "jotai";
import { colorAtom, grayAtom, sizeAtom, styleAtom, radiusAtom, componentSizeAtom, ThemeSize, ThemeColor } from "./atoms";
import { useThemeContext } from "./provider";

/**
 * Hook to access and modify the global theme settings
 */
export function useTheme() {
  const [color, setColor] = useAtom(colorAtom);
  const [gray, setGray] = useAtom(grayAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const [style, setStyle] = useAtom(styleAtom);
  const [radius, setRadius] = useAtom(radiusAtom);
  const { colorMap } = useThemeContext();

  return {
    color,
    gray,
    size,
    style,
    radius,
    colorMap,
    setColor,
    setGray,
    setSize,
    setStyle,
    setRadius,
  };
}

/**
 * Hook for component size inheritance
 * Returns the resolved size (explicitly provided or inherited) and a setter
 */
export function useComponentSize(explicitSize?: ThemeSize) {
  const [componentSize, setComponentSize] = useAtom(componentSizeAtom);

  // Use explicitly provided size or inherited size
  const resolvedSize = explicitSize || componentSize;

  return [resolvedSize, setComponentSize] as const;
}
