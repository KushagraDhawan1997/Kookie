# Color System Architecture

This document explains the comprehensive color system in Kookie UI, built on a three-layer token architecture that provides automatic text contrast, semantic color mappings, and support for all 18 Radix colors.

## Overview

The Kookie color system is designed around the principle of **semantic color usage** - instead of using specific color names like "blue" or "red", components use semantic roles like "primary", "warning", or "success". This enables easy theme switching and ensures consistent color usage across the entire application.

## Three-Layer Color Architecture

### Layer 1: Semantic Reference Tokens

**Purpose**: Map semantic color roles to actual Radix color values and define contextual text colors.

**Location**: `styles/tokens/reference/colors/`

Each color file maps semantic roles to specific Radix colors and includes contextual text tokens for proper contrast:

```css
/* blue-reference.css */
[data-primary-color="blue"] {
  --primary-1: var(--blue-1);
  --primary-2: var(--blue-2);
  /* ... through primary-12 and primary-a1 through primary-a12 */

  /* Contextual text token */
  --text-on-solid: var(--blue-1); /* Light text on blue solid background */
}

/* Also supports semantic contexts */
[data-error-color="blue"] {
  --error-1: var(--blue-1);
  /* ... */
  --text-error-on-solid: var(--blue-1); /* Light text on blue error solid */
}
```

### Layer 2: System Tokens

**Purpose**: Provide UI-focused abstractions that map to specific steps in the Radix 12-step color scale.

**Location**: `styles/tokens/system/colors/system.css`

System tokens create semantic meaning for different UI contexts:

```css
/* Background system tokens (Steps 1-10) */
--ui-bg-app: var(--primary-1); /* Step 1: App backgrounds */
--ui-bg-subtle: var(--primary-2); /* Step 2: Subtle backgrounds */
--ui-bg-component: var(--primary-3); /* Step 3: Component backgrounds */
--ui-bg-solid: var(--primary-9); /* Step 9: Solid backgrounds */
--ui-bg-solid-hover: var(--primary-10); /* Step 10: Solid hover */

/* Border system tokens (Steps 6-8) */
--ui-border-subtle: var(--primary-6); /* Step 6: Subtle borders */
--ui-border-interactive: var(--primary-7); /* Step 7: Interactive borders */
--ui-border-strong: var(--primary-8); /* Step 8: Strong borders */

/* Text system tokens (Steps 11-12 + contextual) */
--text-high-contrast: var(--primary-12); /* Step 12: High contrast text */
--text-medium-contrast: var(--primary-11); /* Step 11: Medium contrast */
--text-on-solid: var(--primary-1); /* Contextual: text on solid bg */
--text-on-tinted: var(--primary-12); /* Contextual: text on tinted bg */
```

### Layer 3: Component Tokens

**Purpose**: Map component-specific properties to appropriate system tokens.

**Location**: `components/ui/*/component-tokens.css`

Component tokens provide clean abstractions for component styling:

```css
/* Button component tokens */
[data-variant="solid"][data-primary-color] {
  --button-bg: var(--ui-bg-solid);
  --button-bg-hover: var(--ui-bg-solid-hover);
  --button-text: var(--text-on-solid); /* Automatically correct contrast */
  --button-border: transparent;
}

/* Text component tokens */
[data-primary-color] {
  --text-color: var(--text-high-contrast);
}
```

## Radix 12-Step Color Scale

The system is built on Radix UI's 12-step color scale, which provides semantic meaning for each step:

### Scale Breakdown

| Steps | Purpose               | Usage                                       | Examples                        |
| ----- | --------------------- | ------------------------------------------- | ------------------------------- |
| 1-2   | App backgrounds       | Subtle variations for page/card backgrounds | `--ui-bg-app`, `--ui-bg-subtle` |
| 3-5   | Component backgrounds | Tinted states (normal, hover, pressed)      | `--ui-bg-component*`            |
| 6-8   | Borders               | Subtle to strong borders and focus states   | `--ui-border-*`                 |
| 9-10  | Solid backgrounds     | Primary action backgrounds and hover        | `--ui-bg-solid*`                |
| 11-12 | Text                  | Medium to high contrast text                | `--text-high-contrast`          |

### Alpha Variants

All colors include alpha (transparent) variants for overlays and subtle effects:

```css
--primary-a1: var(--blue-a1); /* Nearly transparent */
--primary-a12: var(--blue-a12); /* Nearly opaque */
```

## Contextual Text Handling

One of the key innovations in the Kookie color system is automatic text contrast handling. Each color defines its optimal text color for different background contexts.

### Bright Colors (Dark Text)

Colors with high luminance use dark text on solid backgrounds:

```css
/* Yellow - bright color needs dark text */
[data-primary-color="yellow"] {
  --text-on-solid: var(--yellow-12); /* Dark text */
}

/* Other bright colors */
--text-on-solid: var(--lime-12); /* Lime */
--text-on-solid: var(--amber-12); /* Amber */
--text-on-solid: var(--sky-12); /* Sky */
--text-on-solid: var(--cyan-12); /* Cyan */
```

### Dark Colors (Light Text)

Colors with low luminance use light text on solid backgrounds:

```css
/* Blue - dark color needs light text */
[data-primary-color="blue"] {
  --text-on-solid: var(--blue-1); /* Light text */
}

/* Other dark colors */
--text-on-solid: var(--red-1); /* Red */
--text-on-solid: var(--purple-1); /* Purple */
--text-on-solid: var(--green-1); /* Green */
/* All other colors default to step-1 */
```

### Automatic Application

This contextual text handling is automatically applied through the component token system:

```tsx
// Yellow warning button automatically gets dark text
<Button variant="solid" data-primary-color="warning">
  Warning (dark text on bright yellow)
</Button>

// Blue primary button automatically gets light text
<Button variant="solid" data-primary-color="primary">
  Primary (light text on dark blue)
</Button>
```

## Semantic Color Roles

### Primary Colors

The primary color represents the main brand color and is used for primary actions:

```tsx
// Setting primary color affects all primary uses
<ThemeProvider primary="purple">
  <Button variant="solid">Primary Action</Button> {/* Purple */}
  <Text data-primary-color="primary">Primary Text</Text> {/* Purple */}
</ThemeProvider>
```

### Semantic State Colors

**Error**: Used for destructive actions and error states

- Available colors: `red`, `ruby`, `crimson`
- Default: `red`

**Success**: Used for positive confirmations and success states

- Available colors: `green`, `teal`, `lime`
- Default: `green`

**Warning**: Used for cautionary information and warning states

- Available colors: `amber`, `yellow`, `orange`
- Default: `amber`

```tsx
<ThemeProvider error="crimson" success="teal" warning="orange">
  <Button data-primary-color="error">Delete</Button> {/* Crimson */}
  <Button data-primary-color="success">Save</Button> {/* Teal */}
  <Button data-primary-color="warning">Warning</Button> {/* Orange */}
</ThemeProvider>
```

### Gray Scale

Special handling for neutral colors with 5 variants:

```tsx
// Gray scale variants
type ThemeGray = "sage" | "slate" | "mauve" | "olive" | "sand";

<ThemeProvider gray="sage">{/* All gray usage automatically uses sage */}</ThemeProvider>;
```

Gray colors use a special solid background mapping:

- **Other colors**: Use step 9 for solid backgrounds
- **Gray colors**: Use step 12 for solid backgrounds (better contrast)

## Available Colors

### Complete Color Palette

**Cool Spectrum**:

- `blue` - Classic blue
- `purple` - Rich purple
- `pink` - Warm pink
- `violet` - Blue-purple
- `iris` - Purple-blue
- `indigo` - Deep blue-purple

**Blue-Green Spectrum**:

- `cyan` - Bright cyan (bright: dark text)
- `sky` - Light blue (bright: dark text)
- `teal` - Blue-green

**Green Spectrum**:

- `green` - Classic green
- `lime` - Bright green (bright: dark text)

**Warm Spectrum**:

- `amber` - Orange-yellow (bright: dark text)
- `yellow` - Pure yellow (bright: dark text)
- `orange` - Classic orange

**Red Spectrum**:

- `red` - Classic red
- `ruby` - Deep red
- `crimson` - Rich red

### TypeScript Integration

All colors are defined as TypeScript union types for type safety:

```tsx
export type ThemeColor =
  | "blue"
  | "purple"
  | "pink"
  | "violet"
  | "iris"
  | "indigo" // Cool
  | "cyan"
  | "sky"
  | "teal" // Blue-green
  | "green"
  | "lime" // Green
  | "amber"
  | "yellow"
  | "orange" // Warm
  | "red"
  | "ruby"
  | "crimson" // Red
  | "gray"; // Neutral

export type ThemeGray = "sage" | "slate" | "mauve" | "olive" | "sand";
```

Arrays are automatically derived for UI components:

```tsx
export const THEME_COLORS: ThemeColor[] = ["blue", "purple" /* ... */];
export const ERROR_COLORS: ThemeColor[] = ["red", "ruby", "crimson"];
export const SUCCESS_COLORS: ThemeColor[] = ["green", "teal", "lime"];
export const WARNING_COLORS: ThemeColor[] = ["amber", "yellow", "orange"];
```

## Usage Patterns

### Theme Provider Configuration

```tsx
import { ThemeProvider } from "@/components/providers/theme-provider";

<ThemeProvider
  primary="purple" // Main brand color
  gray="sage" // Neutral color variant
  error="crimson" // Error state color
  success="teal" // Success state color
  warning="orange" // Warning state color
>
  <App />
</ThemeProvider>;
```

### Component Color Usage

```tsx
// Use semantic roles for consistent theming
<Button data-primary-color="primary">Primary Action</Button>
<Button data-primary-color="error">Delete</Button>
<Button data-primary-color="success">Save</Button>

// Use specific colors when semantic doesn't apply
<Button data-primary-color="purple">Purple Button</Button>
<Text data-primary-color="amber">Amber Text</Text>
```

### Programmatic Theme Control

```tsx
import { useTheme } from "@/components/providers/theme-provider";

function ThemeControls() {
  const {
    color,
    setColor, // Primary color
    error,
    setError, // Error color
    success,
    setSuccess, // Success color
    warning,
    setWarning, // Warning color
    gray,
    setGray, // Gray variant
  } = useTheme();

  return (
    <div>
      <button onClick={() => setColor("purple")}>Purple Theme</button>
      <button onClick={() => setError("crimson")}>Crimson Errors</button>
      <button onClick={() => setGray("sage")}>Sage Gray</button>
    </div>
  );
}
```

## CSS Architecture Benefits

### No Selector Duplication

Before the three-layer system:

```css
/* Hundreds of variant/color combinations */
[data-variant="solid"][data-primary-color="blue"] {
  background: var(--blue-9);
  color: var(--blue-1);
}
[data-variant="solid"][data-primary-color="yellow"] {
  background: var(--yellow-9);
  color: var(--yellow-12);
}
/* ...50+ more rules for each variant */
```

After the three-layer system:

```css
/* Single rule using component tokens */
.button-root {
  background: var(--button-bg);
  color: var(--button-text);
}

/* Tokens handle all the logic */
[data-variant="solid"] {
  --button-bg: var(--ui-bg-solid);
  --button-text: var(--text-on-solid); /* Auto light/dark per color */
}
```

### Performance Benefits

- **Bundle Size**: Reduced button CSS from 500+ to ~120 lines
- **Runtime**: CSS variables enable instant theme switching
- **Maintenance**: Single source of truth for color logic
- **Scalability**: New colors automatically work with all components

## Accessibility

### WCAG Compliance

All color combinations meet WCAG AA contrast requirements:

- **Text on solid backgrounds**: Automatic light/dark text selection
- **Text on tinted backgrounds**: Always uses step 12 for high contrast
- **Border contrast**: Appropriate border colors for all backgrounds

### Color Blindness Support

- **Semantic usage**: Colors are paired with semantic meaning
- **High contrast**: Strong contrast ratios for all color combinations
- **Alternative indicators**: Colors are not the only way to convey information

## Migration Guide

### Adding New Colors

1. **Create reference file**: `styles/tokens/reference/colors/newcolor-reference.css`

```css
[data-primary-color="newcolor"] {
  --primary-1: var(--newcolor-1);
  /* ... through primary-12 */
  --text-on-solid: var(--newcolor-1); /* or var(--newcolor-12) for bright colors */
}
```

2. **Update TypeScript**: Add to `ThemeColor` union in `theme-types.ts`
3. **Automatic support**: All components immediately support the new color

### Custom Color Mappings

For custom color requirements, override reference tokens:

```css
/* Custom brand color mapping */
[data-primary-color="brand"] {
  --primary-1: #f0f9ff;
  --primary-9: #0284c7;
  --primary-12: #0c4a6e;
  --text-on-solid: var(--primary-1); /* Light text on dark brand color */
}
```

### Component Color Extensions

Add color support to custom components:

```css
/* Custom component tokens */
[data-variant="custom"] {
  --custom-bg: var(--ui-bg-solid);
  --custom-text: var(--text-on-solid); /* Automatic contrast */
}

/* Component CSS */
.custom-component {
  background: var(--custom-bg);
  color: var(--custom-text);
}
```

This approach ensures your custom components automatically support all colors with proper contrast handling.

## Future Enhancements

### Planned Features

- **Dynamic Color Generation**: Runtime palette generation from brand colors
- **Advanced Contrast**: P3 color space support for modern displays
- **Design Token Standard**: W3C Design Tokens Community Group compliance
- **Color Harmony**: Automatic complementary color suggestions

### Extensibility

The three-layer architecture is designed to accommodate future color system enhancements without breaking existing components or requiring migration.
