# Kookie Token System Architecture

This document explains the comprehensive token system implemented in the Kookie component library, featuring a linearized spacing/dimension system and a sophisticated three-layer color architecture optimized for performance and maintainability.

## Overview

The Kookie token system provides a scalable architecture for design tokens that separates concerns and enables powerful theming capabilities without code duplication. The system features:

1. **Linearized spacing and dimension tokens** (1-24 naming convention)
2. **Three-layer color system** with automatic text contrast
3. **Generated gap utilities** for layout consistency
4. **Performance-optimized CSS variables** with semantic abstractions

## Token Categories

### 1. Spacing Tokens

**Location**: `styles/tokens/reference/spacing/system.css`

Spacing tokens provide consistent spacing values for padding, margins, and gaps throughout the system. The tokens use a linear 1-24 naming convention with carefully crafted non-linear values optimized for UI design.

```css
:root {
  /* Linear 1-24 spacing tokens with non-linear values */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.375rem; /* 6px */
  --space-3: 0.5rem; /* 8px */
  --space-4: 0.625rem; /* 10px */
  --space-5: 0.75rem; /* 12px */
  --space-6: 0.875rem; /* 14px */
  --space-7: 1rem; /* 16px */
  --space-8: 1.25rem; /* 20px */
  --space-9: 1.5rem; /* 24px */
  --space-10: 1.75rem; /* 28px */
  --space-11: 2rem; /* 32px */
  --space-12: 2.25rem; /* 36px */
  --space-13: 2.5rem; /* 40px */
  --space-14: 2.75rem; /* 44px */
  --space-15: 3rem; /* 48px */
  --space-16: 3.5rem; /* 56px */
  --space-17: 4rem; /* 64px */
  --space-18: 4.5rem; /* 72px */
  --space-19: 5rem; /* 80px */
  --space-20: 6rem; /* 96px */
  --space-21: 7rem; /* 112px */
  --space-22: 8rem; /* 128px */
  --space-23: 9rem; /* 144px */
  --space-24: 10rem; /* 160px */
}
```

#### Usage Guidelines

- **Use for**: Padding, gap values, margin (when absolutely necessary)
- **Common sizes**: `--space-7` (16px), `--space-9` (24px), `--space-11` (32px)
- **Layout preference**: Use Flex/Grid gaps instead of margins for spacing

### 2. Dimension Tokens

**Location**: `styles/tokens/reference/dimensions/system.css`

Dimension tokens provide consistent sizing for widths, heights, and other dimensional properties. The system uses:

- **Linear tokens 1-24**: Component-level sizing (4px to 320px)
- **Named tokens**: Layout-level sizing (320px to 1536px)
- **Special tokens**: Utility sizing (100%, fit-content, etc.)

```css
:root {
  /* Linear 1-24 dimension tokens (4px to 320px) */
  --size-1: 0.25rem; /* 4px */
  --size-2: 0.5rem; /* 8px */
  --size-3: 0.75rem; /* 12px */
  /* ... continuing through ... */
  --size-24: 20rem; /* 320px */

  /* Named tokens for layout dimensions (320px to 1536px) */
  --size-xs: 20rem; /* 320px */
  --size-sm: 24rem; /* 384px */
  --size-md: 28rem; /* 448px */
  --size-lg: 32rem; /* 512px */
  --size-xl: 36rem; /* 576px */
  --size-2xl: 42rem; /* 672px */
  --size-3xl: 48rem; /* 768px */
  --size-4xl: 56rem; /* 896px */
  --size-5xl: 64rem; /* 1024px */
  --size-6xl: 72rem; /* 1152px */
  --size-7xl: 80rem; /* 1280px */
  --size-8xl: 96rem; /* 1536px */

  /* Special size tokens */
  --size-full: 100%;
  --size-half: 50%;
  --size-fit: fit-content;
  --size-min: min-content;
  --size-max: max-content;
  --size-screen: 100vw;
  --size-screen-h: 100vh;
}
```

#### Token Selection Guidelines

- **1-24 tokens**: For component dimensions (buttons, icons, small containers)
- **Named tokens (xs-8xl)**: For layout containers, modals, content areas
- **Special tokens**: For responsive and utility sizing

### 3. Gap Utilities

**Location**: `styles/utils/gap-utils.css`

Generated utility classes that map directly to spacing tokens for consistent layout spacing in Flex and Grid components.

```css
/* Gap utilities (both row and column) */
.gap-1 {
  gap: var(--space-1);
}
.gap-2 {
  gap: var(--space-2);
}
/* ... through ... */
.gap-24 {
  gap: var(--space-24);
}

/* Gap X (column gap) utilities */
.gap-x-1 {
  column-gap: var(--space-1);
}
/* ... through ... */
.gap-x-24 {
  column-gap: var(--space-24);
}

/* Gap Y (row gap) utilities */
.gap-y-1 {
  row-gap: var(--space-1);
}
/* ... through ... */
.gap-y-24 {
  row-gap: var(--space-24);
}
```

#### Usage in Components

```tsx
// Flex component with gap
<Flex gap={7} direction="column">
  <Text>First item</Text>
  <Text>Second item</Text>
</Flex>

// Compiles to: <div class="gap-7 flex-col">...</div>
// CSS: .gap-7 { gap: var(--space-7); /* 16px */ }
```

### 4. System Layout Tokens

**Location**: `styles/tokens/system/layout/system.css`

Semantic layout tokens that map to reference tokens for common UI patterns like controls (buttons, inputs, selects).

```css
:root {
  /* Control heights - for buttons, inputs, selects, etc. */
  --control-height-1: var(--size-4); /* 16px - Extra small */
  --control-height-2: var(--size-6); /* 24px - Small */
  --control-height-3: var(--size-8); /* 32px - Medium */
  --control-height-4: var(--size-10); /* 40px - Large */
  --control-height-5: var(--size-11); /* 48px - Extra large */
  --control-height-6: var(--size-12); /* 56px - Largest */

  /* Control padding - for buttons, inputs, selects, etc. */
  --control-padding-1: var(--space-3); /* 8px - Extra small */
  --control-padding-2: var(--space-5); /* 12px - Small */
  --control-padding-3: var(--space-7); /* 16px - Medium */
  --control-padding-4: var(--space-8); /* 20px - Large */
  --control-padding-5: var(--space-9); /* 24px - Extra large */
  --control-padding-6: var(--space-10); /* 28px - Largest */
}
```

## Three-Layer Color System Architecture

The color system provides a scalable architecture that separates concerns and enables powerful theming capabilities without code duplication. The system automatically handles text contrast, supports all 18 Radix colors, and provides clean component abstractions.

### Architecture Benefits

1. **No Selector Duplication**: Variant and color logic exists only in token files
2. **Automatic Contrast**: Text colors adapt based on background brightness
3. **Easy Extensibility**: Add variants by modifying token files only
4. **Performance Optimized**: CSS variables with semantic abstractions
5. **Clean Separation**: Token logic separate from component styling
6. **Reduced Bundle Size**: ~400 lines of CSS removed through abstraction

### Layer 1: Semantic Reference Tokens

**Location**: `styles/tokens/reference/colors/`

Reference tokens map semantic color roles to actual Radix color values. Each color file defines mappings for different semantic contexts.

#### Primary Color Mappings

```css
/* blue-reference.css */
[data-primary-color="blue"] {
  --primary-1: var(--blue-1);
  --primary-2: var(--blue-2);
  /* ... through primary-12 and primary-a1 through primary-a12 */

  /* Contextual text tokens */
  --text-on-solid: var(--blue-1); /* Light text on blue solid background */
}
```

#### Contextual Text Tokens

Each color defines its optimal text color for solid backgrounds:

**Bright Colors (Dark Text)**:

- Yellow, Lime, Amber, Sky, Cyan: Use `var(--color-12)` for dark text

**Dark Colors (Light Text)**:

- Blue, Red, Purple, Green, and others: Use `var(--color-1)` for light text

### Layer 2: System Tokens

**Location**: `styles/tokens/system/colors/system.css`

System tokens provide UI-focused abstractions that map to specific steps in the Radix 12-step color scale.

```css
/* Steps 1-2: App backgrounds (subtle variations) */
--ui-bg-app: var(--primary-1);
--ui-bg-subtle: var(--primary-2);

/* Steps 3-5: Component backgrounds (tinted states) */
--ui-bg-component: var(--primary-3);
--ui-bg-component-hover: var(--primary-4);
--ui-bg-component-pressed: var(--primary-5);

/* Steps 6-8: Borders (subtle to strong) */
--ui-border-subtle: var(--primary-6);
--ui-border-interactive: var(--primary-7);
--ui-border-strong: var(--primary-8);

/* Steps 9-10: Solid backgrounds */
--ui-bg-solid: var(--primary-9);
--ui-bg-solid-hover: var(--primary-10);

/* Steps 11-12: Text (medium to high contrast) */
--text-medium-contrast: var(--primary-11);
--text-high-contrast: var(--primary-12);

/* Contextual text tokens (defined per color in Layer 1) */
--text-on-solid: var(--primary-1); /* Default, overridden per color */
--text-on-tinted: var(--primary-12); /* Dark text on light backgrounds */
--text-on-app: var(--primary-12); /* Dark text on app backgrounds */
```

### Layer 3: Component Tokens

**Location**: `components/ui/*/component-tokens.css`

Component tokens map semantic component properties to appropriate system tokens.

```css
/* Button solid variant */
[data-variant="solid"][data-primary-color] {
  --button-bg: var(--ui-bg-solid);
  --button-bg-hover: var(--ui-bg-solid-hover);
  --button-text: var(--text-on-solid);
  --button-border: transparent;
}

/* Button outline variant */
[data-variant="outline"][data-primary-color] {
  --button-bg: transparent;
  --button-bg-hover: var(--ui-bg-component);
  --button-text: var(--text-high-contrast);
  --button-border: var(--ui-border-interactive);
}
```

## Component Integration

### Layout Components with Token Props

Components accept numeric props that map directly to tokens:

```tsx
// Box component with spacing and sizing
<Box p={7} m={4} width={12} height={8}>
  Content with 16px padding, 10px margin, and specific dimensions
</Box>

// Flex component with gap
<Flex gap={5} direction="column">
  <Text>First item</Text>
  <Text>Second item (12px gap from first)</Text>
</Flex>
```

### Margin System

While the design system prefers gap-based spacing, margins are available when needed:

```tsx
// Margin props map to spacing tokens
<Box m={5}>       {/* margin: var(--space-5) */}
<Box mx={7}>      {/* margin-left/right: var(--space-7) */}
<Box my={3}>      {/* margin-top/bottom: var(--space-3) */}
<Box mt={4}>      {/* margin-top: var(--space-4) */}
```

**Best Practice**: Use Flex/Grid gaps for spacing between siblings, use margins only for special cases.

## File Structure

```
styles/
├── tokens/
│   ├── reference/
│   │   ├── spacing/
│   │   │   └── system.css              # Linear 1-24 spacing tokens
│   │   ├── dimensions/
│   │   │   └── system.css              # Linear 1-24 + named dimension tokens
│   │   └── colors/
│   │       ├── blue-reference.css      # Blue semantic mappings
│   │       ├── yellow-reference.css    # Yellow semantic mappings
│   │       └── ...                     # Other color references
│   └── system/
│       ├── layout/
│       │   └── system.css              # Control heights/padding
│       └── colors/
│           └── system.css              # UI abstraction tokens
├── utils/
│   └── gap-utils.css                   # Generated gap utility classes
│
components/ui/
├── button/
│   ├── button.css                      # Clean component styles
│   └── button-tokens.css               # Component token mappings
├── text/
│   ├── text.css                        # Text component styles
│   └── text-tokens.css                 # Text token mappings
└── ...
```

## Performance Characteristics

### CSS Bundle Optimization

- **Spacing/Dimension tokens**: 63 total tokens (24 spacing + 39 dimension)
- **Gap utilities**: 72 generated classes (24 × 3 types: gap, gap-x, gap-y)
- **Component CSS reduction**: ~400 lines saved through token abstraction
- **Scalability**: New components automatically inherit all token logic

### Runtime Performance

- **CSS Variables**: Instant theme switching with no JavaScript
- **Linear token access**: Predictable `O(1)` token lookup
- **Browser optimization**: Native CSS cascade handles token resolution
- **Memory efficiency**: Single source of truth for all values

### Development Experience

- **Consistent naming**: Linear 1-24 convention for easy memorization
- **Type safety**: TypeScript props prevent invalid token numbers
- **Visual clarity**: Predictable progression from small to large values
- **Debugging**: Clear token hierarchy for troubleshooting

## Usage Guidelines

### When to Use Each Token Type

**Spacing Tokens (`--space-1` to `--space-24`)**:

- Padding within components
- Gap values in Flex/Grid layouts
- Margin (only when gap isn't suitable)

**Dimension Tokens**:

- `--size-1` to `--size-24`: Component dimensions (buttons, icons, small containers)
- `--size-xs` to `--size-8xl`: Layout containers, modal widths, content areas
- Special tokens: Responsive and utility sizing

**System Layout Tokens**:

- `--control-height-*`: Consistent heights across form controls
- `--control-padding-*`: Consistent padding across interactive elements

### Migration from Old System

The token system is fully backward compatible. For new development:

```tsx
// ✅ New approach - token props
<Flex gap={7} p={5}>
  <Button size="md">Action</Button>
</Flex>

// ❌ Old approach - direct CSS values
<div style={{
  gap: '16px',
  padding: '12px'
}}>
  <button>Action</button>
</div>
```

## Token Reference Quick Guide

### Common Spacing Values

| Token        | Value   | Pixels | Common Use      |
| ------------ | ------- | ------ | --------------- |
| `--space-1`  | 0.25rem | 4px    | Micro spacing   |
| `--space-3`  | 0.5rem  | 8px    | Small padding   |
| `--space-5`  | 0.75rem | 12px   | Medium padding  |
| `--space-7`  | 1rem    | 16px   | Default spacing |
| `--space-9`  | 1.5rem  | 24px   | Large spacing   |
| `--space-11` | 2rem    | 32px   | Section spacing |
| `--space-15` | 3rem    | 48px   | Page sections   |

### Common Dimension Values

| Token        | Value  | Pixels | Common Use            |
| ------------ | ------ | ------ | --------------------- |
| `--size-4`   | 1rem   | 16px   | Small button height   |
| `--size-6`   | 1.5rem | 24px   | Medium button height  |
| `--size-8`   | 2rem   | 32px   | Default button height |
| `--size-10`  | 3rem   | 48px   | Large button height   |
| `--size-lg`  | 32rem  | 512px  | Modal width           |
| `--size-4xl` | 56rem  | 896px  | Content container     |

This token system provides the foundation for consistent, scalable, and maintainable design in the Kookie component library.
