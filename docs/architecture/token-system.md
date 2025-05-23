# Token-Based Design System

This document explains the token-based design system implemented in the Kookie component library.

## Overview

The token-based system provides a set of predefined spacing and dimension values that are used consistently across components. Instead of using arbitrary CSS values, components use token values that reference CSS variables defined in the system.

## Benefits

1. **Consistency**: Ensures spacing and dimensions follow a predictable scale
2. **Performance**: Reduces CSS bundle size by avoiding dynamic Tailwind class generation
3. **Developer Experience**: Offers both token-based and raw CSS value APIs
4. **Theming**: Enables easy theme customization through CSS variable overrides

## Token Types

### Spacing Tokens

Spacing tokens are used for padding, margins, gaps, and other spacing properties.

```tsx
// Available token values
type SpaceToken = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 18 | 20 | 24;
```

Spacing tokens correspond to the following CSS variables:

| Token | CSS Variable | Value          |
| ----- | ------------ | -------------- |
| 1     | --space-1    | 0.25rem (4px)  |
| 1.5   | --space-1_5  | 0.375rem (6px) |
| 2     | --space-2    | 0.5rem (8px)   |
| ...   | ...          | ...            |
| 24    | --space-24   | 6rem (96px)    |

### Dimension Tokens

Dimension tokens are used for width, height, and other dimension properties.

```tsx
// Numeric dimension tokens
type NumericDimensionToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 80 | 96;

// Named dimension tokens
type NamedDimensionToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "half" | "fit" | "min" | "max" | "screen" | "screen-h";

// Combined dimension token type
type DimensionToken = NumericDimensionToken | NamedDimensionToken;
```

Dimension tokens correspond to CSS variables with predefined values.

## Radius Tokens and Roundness Factor

Kookie uses Tailwind's radius tokens directly (e.g., `--radius-xs`, `--radius-lg`).

The roundness factor is set via CSS using the `data-roundness` attribute, with the mapping defined in `roundness.css`:

```css
[data-roundness="none"] {
  --theme-radius-factor: 0;
}
[data-roundness="sm"] {
  --theme-radius-factor: 0.85;
}
[data-roundness="md"] {
  --theme-radius-factor: 1;
}
[data-roundness="lg"] {
  --theme-radius-factor: 1.15;
}
[data-roundness="xl"] {
  --theme-radius-factor: 1.3;
}
[data-roundness="full"] {
  --theme-radius-factor: 999;
}
```

Components calculate border-radius as:

```css
border-radius: calc(var(--radius- *) * var(--theme-radius-factor, 1));
```

- The ThemeProvider sets `data-roundness` on the root for the global theme.
- Any component can override roundness locally by setting its own `data-roundness` attribute.
- No JS or custom radius tokens are needed for roundness control.

## Usage

Components can accept either token values or raw CSS values:

```tsx
// Using token values
<Box p={4} width="md" height={16} />

// Using raw CSS values
<Box p="1.25em" width="calc(100% - 20px)" height="auto" />

// Mixing token and raw values
<Box p={4} width="50%" height="200px" />

// Using responsive values
<Box
  p={{ base: 2, md: 4, lg: 8 }}
  width={{ base: "full", md: "md", lg: "lg" }}
/>
```

## API Updates

All components that previously used `mapToClass` for Tailwind class generation now use `mapToStyle` to apply styles directly as CSS properties. This affects:

- LayoutProps (padding, dimensions, position, overflow)
- FlexChildProps (flexBasis, flexGrow, flexShrink)
- GridChildProps (all grid-related properties)

## Implementation

The token system is implemented through:

1. CSS variables in `styles/tokens/spacing.css` and `styles/tokens/dimensions.css`
2. TypeScript types in `components/types/tokens.ts`
3. Helper functions to convert token values to CSS variable references
4. Style mapping in prop definitions instead of class mapping
