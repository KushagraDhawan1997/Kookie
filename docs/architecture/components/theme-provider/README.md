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
  error="crimson"
  success="teal"
  warning="orange"
  size={2}
  roundness="lg"
>
  <App />
</ThemeProvider>

// Using the hook
function MyComponent() {
  const { color, setColor, gray, setGray, size, setSize, error, setError } = useTheme();

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
  primary?: ThemeColor; // "blue" | "purple" | "pink" | "violet" | "iris" | "indigo" | "cyan" | "sky" | "green" | "teal" | "lime" | "amber" | "yellow" | "orange" | "red" | "ruby" | "crimson"
  gray?: ThemeGray; // "sage" | "slate" | "mauve" | "olive" | "sand"
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
  error: ThemeColor;
  setError: (error: ThemeColor) => void;
  success: ThemeColor;
  setSuccess: (success: ThemeColor) => void;
  warning: ThemeColor;
  setWarning: (warning: ThemeColor) => void;
  size: ThemeSize;
  setSize: (size: ThemeSize) => void;
  roundness: ThemeRoundness;
  setRoundness: (roundness: ThemeRoundness) => void;
}
```

## Available Colors

### All Theme Colors

- **blue**, **purple**, **pink**, **violet**, **iris**, **indigo** - Cool tones
- **cyan**, **sky**, **teal** - Blue-green spectrum
- **green**, **lime** - Natural greens
- **amber**, **yellow**, **orange** - Warm tones
- **red**, **ruby**, **crimson** - Red spectrum

### Gray Variants

- **sage** - Warm gray with green undertones
- **slate** - Cool gray with blue undertones
- **mauve** - Warm gray with purple undertones
- **olive** - Warm gray with yellow-green undertones
- **sand** - Warm beige-gray

### Semantic Color Groups

- **Error colors**: red, ruby, crimson
- **Success colors**: green, teal, lime
- **Warning colors**: amber, yellow, orange

## Theme Configuration

All theme configuration is centralized in `components/providers/theme-types.ts`:

```tsx
// Centralized arrays derived from union types
export const THEME_COLORS: ThemeColor[] = [...];
export const THEME_GRAYS: ThemeGray[] = [...];
export const ERROR_COLORS: ThemeColor[] = [...];
export const SUCCESS_COLORS: ThemeColor[] = [...];
export const WARNING_COLORS: ThemeColor[] = [...];
export const THEME_SIZES: ThemeSize[] = [1, 2, 3, 4, 5, 6];
export const THEME_ROUNDNESS_OPTIONS: ThemeRoundness[] = ["none", "sm", "md", "lg", "xl", "full"];
```

## Design Decisions

- Uses Jotai for state management with separate atoms for each theme property
- Sets theme via data attributes on HTML root element
- Provides default values for all colors from centralized configuration
- Supports dynamic theme changes for all properties
- Configuration-driven approach using arrays derived from TypeScript union types

## Implementation Details

The provider:

1. Manages theme state with individual Jotai atoms for each property
2. Sets data attributes on document root for CSS consumption
3. Cleans up attributes on unmount
4. Provides comprehensive hook for theme access and modification
5. Synchronizes prop changes with atom state

## Theme Playground

A visual theme editor component is available:

```tsx
import { ThemePlayground } from "@/components/helpers";

function App() {
  return (
    <>
      <ThemePlayground />
      {/* Your app content */}
    </>
  );
}
```

The ThemePlayground provides:

- Visual color selection for all theme properties
- Floating panel in top-right corner
- Real-time theme updates
- Uses native design system components (Box, Flex, Text, Button)

## Examples

### Dynamic Theme Switching

```tsx
function ThemeSwitcher() {
  const { setColor, setGray, setError, setSuccess, setWarning } = useTheme();

  return (
    <Flex gap={4}>
      <Button onClick={() => setColor("purple")}>Purple Theme</Button>
      <Button onClick={() => setColor("blue")}>Blue Theme</Button>
      <Button onClick={() => setGray("sage")}>Sage Gray</Button>
      <Button onClick={() => setError("crimson")}>Crimson Errors</Button>
      <Button onClick={() => setSuccess("teal")}>Teal Success</Button>
    </Flex>
  );
}
```

### Size-Aware Components

```tsx
function ResponsiveComponent() {
  const { size, setSize } = useTheme();

  return (
    <div>
      <Button size={size}>Theme-sized Button</Button>
      <Button onClick={() => setSize(size === 6 ? 1 : size + 1)}>Cycle Size (Current: {size})</Button>
    </div>
  );
}
```

### Roundness Control

```tsx
function RoundnessDemo() {
  const { roundness, setRoundness } = useTheme();

  return (
    <div>
      <Button onClick={() => setRoundness("none")}>Square</Button>
      <Button onClick={() => setRoundness("md")}>Default</Button>
      <Button onClick={() => setRoundness("full")}>Pill</Button>
      <p>Current roundness: {roundness}</p>
    </div>
  );
}
```

## Roundness System

- ThemeProvider sets the `data-roundness` attribute on the root element
- The roundness factor is set via CSS using attribute selectors
- Components can override roundness locally with their own `data-roundness` attribute
- Border-radius calculated as: `calc(var(--radius-*) * var(--theme-radius-factor, 1))`
- Provides both global and per-component roundness control
