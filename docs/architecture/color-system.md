# Color System Documentation

Kookie uses a sophisticated color system based on Radix UI colors, providing a consistent and accessible color palette throughout the application.

## Foundation

The color system is built on Radix UI colors, which provide:

- Perceptually uniform color scales
- Built-in accessibility considerations
- Alpha (transparency) variants
- Dark mode compatibility

## Color Scales

Each color in the system has a scale of 12 steps (1-12) with increasing contrast ratios:

- **1-6**: Background shades (lightest to mid-tone)
- **7-8**: Border and decorative elements
- **9-10**: Solid fill colors
- **11**: High-contrast interactive elements
- **12**: High-contrast text

Each color also has alpha (transparent) variants, named with the "a" prefix:

- **a1-a12**: Correspond to the same contrast levels but with transparency

## Available Colors

The system includes a comprehensive color palette with 18 distinct colors:

### Cool Spectrum

- **blue**: Default primary color - professional, trustworthy
- **purple**: Alternative accent - creative, sophisticated
- **pink**: Playful, friendly
- **violet**: Deep purple variant
- **iris**: Bright purple-blue
- **indigo**: Deep blue variant

### Blue-Green Spectrum

- **cyan**: Bright blue-green
- **sky**: Light blue variant
- **teal**: Blue-green balance

### Green Spectrum

- **green**: Natural, success states
- **lime**: Bright yellow-green

### Warm Spectrum

- **amber**: Attention, warnings
- **yellow**: Bright highlights
- **orange**: Energetic, warm

### Red Spectrum

- **red**: Classic red for errors
- **ruby**: Deep red variant
- **crimson**: Rich red alternative

### Gray Variants

- **sage**: Warm gray with green undertones - natural, earthy
- **slate**: Cool gray with blue undertones - modern, clean
- **mauve**: Warm gray with purple undertones - elegant, soft
- **olive**: Warm gray with yellow-green undertones - sophisticated
- **sand**: Warm beige-gray - neutral, timeless

## Semantic Color System

Colors are organized by semantic purpose:

### Error Colors

- **red**: Classic error red
- **ruby**: Deep error variant
- **crimson**: Rich error alternative

### Success Colors

- **green**: Natural success
- **teal**: Modern success variant
- **lime**: Bright success alternative

### Warning Colors

- **amber**: Classic warning
- **yellow**: Bright warning
- **orange**: Energetic warning

## Configuration-Driven Architecture

All color configurations are centralized in `components/providers/theme-types.ts`:

```tsx
// Union types define available options
export type ThemeColor = "blue" | "green" | "red" | "amber" | "purple" | /* ... all colors */;
export type ThemeGray = "sage" | "slate" | "mauve" | "olive" | "sand";

// Arrays derived from union types for UI components
export const THEME_COLORS: ThemeColor[] = ["blue", "purple", /* ... */];
export const THEME_GRAYS: ThemeGray[] = ["sage", "slate", /* ... */];
export const ERROR_COLORS: ThemeColor[] = ["red", "ruby", "crimson"];
export const SUCCESS_COLORS: ThemeColor[] = ["green", "teal", "lime"];
export const WARNING_COLORS: ThemeColor[] = ["amber", "yellow", "orange"];
```

This approach ensures:

- **Single source of truth** for color definitions
- **Type safety** with TypeScript union types
- **UI consistency** with arrays for component rendering
- **Easy maintenance** when adding new colors

## Implementation Details

### CSS Variables

The color system is implemented using CSS variables in individual color files within `styles/colors/`:

```css
/* Example: styles/colors/blue.css */
[data-primary-color="blue"] {
  --primary-1: var(--blue-1);
  --primary-2: var(--blue-2);
  --primary-3: var(--blue-3);
  /* ... up to 12, plus alpha variants */
  --primary-foreground: var(--blue-1);
}
```

Each color file defines which semantic roles that color can fulfill based on its visual properties and accessibility considerations.

### Data Attributes

Colors are selected using HTML data attributes set by the ThemeProvider:

```html
<html data-primary-color="blue" data-gray-color="slate" data-error-color="red" data-success-color="green" data-warning-color="amber"></html>
```

### Variable Usage

Components should use semantic color variables instead of specific colors:

```css
/* ✅ Good - semantic variables */
color: var(--primary-9);
border-color: var(--gray-7);
background-color: var(--error-3);

/* ❌ Avoid - specific color variables */
color: var(--blue-9);
border-color: var(--slate-7);
background-color: var(--red-3);
```

This ensures themes can be changed consistently across the application.

## Usage Guidelines

### Text Colors

- **Primary text**: `var(--gray-12)`
- **Secondary text**: `var(--gray-11)`
- **Muted text**: `var(--gray-10)`
- **Accent text**: `var(--primary-11)`

### Background Colors

- **App background**: `var(--gray-1)`
- **Subtle background**: `var(--gray-2)`
- **UI element background**: `var(--gray-3)`
- **Hovered UI element**: `var(--gray-4)`

### Border Colors

- **Subtle borders**: `var(--gray-6)`
- **Default borders**: `var(--gray-7)`
- **Hovered borders**: `var(--gray-8)`

### State Colors

- **Error**: `var(--error-9)` for backgrounds, `var(--error-11)` for text
- **Success**: `var(--success-9)` for backgrounds, `var(--success-11)` for text
- **Warning**: `var(--warning-9)` for backgrounds, `var(--warning-11)` for text

## Theme Customization

### Via ThemeProvider

```tsx
<ThemeProvider primary="purple" gray="sage" error="crimson" success="teal" warning="orange">
  {children}
</ThemeProvider>
```

### Programmatic Changes

```tsx
const { color, setColor, gray, setGray, error, setError, success, setSuccess, warning, setWarning } = useTheme();

// Change any theme color dynamically
setColor("purple");
setError("crimson");
setSuccess("lime");
```

### Visual Theme Editor

The ThemePlayground component provides a visual interface for theme customization:

```tsx
import { ThemePlayground } from "@/components/helpers";

// Renders a floating panel with all theme controls
<ThemePlayground />;
```

Features:

- Real-time color preview
- All color categories (primary, gray, error, success, warning)
- Size and roundness controls
- Floating top-right position
- Uses native design system components

## Adding New Colors

To add a new color to the system:

1. **Add to union type** in `theme-types.ts`:

   ```tsx
   export type ThemeColor = "blue" | "green" | /* ... */ | "newcolor";
   ```

2. **Update arrays** in `theme-types.ts`:

   ```tsx
   export const THEME_COLORS: ThemeColor[] = [..., "newcolor"];
   export const ERROR_COLORS: ThemeColor[] = [...]; // if applicable
   ```

3. **Create CSS mapping** in `styles/colors/newcolor.css`:

   ```css
   [data-primary-color="newcolor"] {
     --primary-1: var(--newcolor-1);
     /* ... complete mapping */
   }
   ```

4. **Import in** `styles/color.css`:
   ```css
   @import "./colors/newcolor.css";
   ```

The ThemePlayground will automatically include the new color without code changes.
