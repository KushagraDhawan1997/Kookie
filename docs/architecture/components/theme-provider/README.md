# Theme Provider

## Usage

```tsx
import { ThemeProvider, useTheme } from "@/components/providers/theme-provider";

// Basic usage
<ThemeProvider>
  <App />
</ThemeProvider>

// With custom theme
<ThemeProvider
  primary="purple"
  gray="sage"
  error="red"
  success="green"
  warning="amber"
  size={2}
>
  <App />
</ThemeProvider>

// Using the hook
function MyComponent() {
  const { color, setColor, gray, setGray, size } = useTheme();

  return (
    <button onClick={() => setColor("purple")}>
      Current color: {color}
    </button>
  );
}
```

## API

```tsx
interface ThemeProviderProps {
  children: React.ReactNode;
  primary?: ThemeColor; // "blue" | "green" | "red" | "amber" | "purple" | "gray"
  gray?: ThemeGray; // "sage" | "slate"
  error?: ThemeColor;
  success?: ThemeColor;
  warning?: ThemeColor;
  size?: ThemeSize; // 1 | 2 | 3 | 4 | 5 | 6
  roundness?: ThemeRoundness; // "none" | "sm" | "md" | "lg" | "xl" | "full"
}

// Hook return type
interface ThemeContext {
  color: ThemeColor;
  setColor: (color: ThemeColor) => void;
  gray: ThemeGray;
  setGray: (gray: ThemeGray) => void;
  size: ThemeSize;
}
```

## Design Decisions

- Uses Jotai for state management
- Sets theme via data attributes on HTML root
- Provides default values for all colors
- Supports dynamic theme changes
- Includes a default size that components can opt into

## Implementation Details

The provider:

1. Manages theme state with Jotai atoms
2. Sets data attributes on document root
3. Cleans up attributes on unmount
4. Provides hook for theme access

## Examples

### Dynamic Theme Switching

```tsx
function ThemeSwitcher() {
  const { setColor, setGray } = useTheme();

  return (
    <Flex gap={4}>
      <Button onClick={() => setColor("purple")}>Purple Theme</Button>
      <Button onClick={() => setColor("blue")}>Blue Theme</Button>
      <Button onClick={() => setGray("sage")}>Sage Gray</Button>
    </Flex>
  );
}
```

### Size-Aware Components

```tsx
function ResponsiveComponent() {
  const { size } = useTheme();

  return <Button size={size}>Theme-sized Button</Button>;
}
```

### Roundness

- `roundness` controls the global roundness scale for your theme. Possible values:
  - `none` (square)
  - `sm` (slightly rounded)
  - `md` (default)
  - `lg` (more rounded)
  - `xl` (very rounded)
  - `full` (pill/fully rounded)
- It is set as a data attribute on the document root for use by your design system.

## Roundness System

- ThemeProvider sets the `data-roundness` attribute on the root element, based on the `roundness` prop.
- The roundness factor is set via CSS in `roundness.css`, using attribute selectors for `[data-roundness]`.
- Components (like Button) can override the roundness locally by setting their own `data-roundness` attribute.
- The border-radius for components is calculated as the Tailwind radius token times the roundness factor, allowing for both global and per-component control.
