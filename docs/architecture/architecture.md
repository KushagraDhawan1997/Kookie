# Kookie UI Architecture

This document outlines the architectural decisions, patterns, and principles behind the Kookie component library.

## Design Philosophy

Kookie UI is built around the principle of **quality over quantity**, focusing on a small set of well-designed, highly flexible components rather than attempting to cover every possible use case. This approach ensures that each component is thoroughly tested, accessible, and performant.

### Core Principles

1. **Component Composition**: Build complex UIs by composing simple, focused components
2. **Prop-driven Configuration**: Components accept props for variants, sizes, and colors
3. **Token-based Design System**: Comprehensive token system including spacing, dimensions, and colors
4. **Accessibility First**: Built on Radix UI primitives for comprehensive accessibility
5. **Performance Optimized**: CSS variables and semantic tokens for efficient theming
6. **Type Safety**: Comprehensive TypeScript support with union types for variants

## Comprehensive Token Architecture

The foundation of Kookie UI is a comprehensive token system that includes spacing, dimensions, and a three-layer color architecture for clean separation of concerns and eliminates code duplication.

### Spacing and Dimension Tokens

#### Spacing Tokens (1-24)

Linear naming convention with non-linear values optimized for UI design:

```css
:root {
  --space-1: 0.25rem; /* 4px - Micro spacing */
  --space-7: 1rem; /* 16px - Default spacing */
  --space-9: 1.5rem; /* 24px - Section spacing */
  --space-11: 2rem; /* 32px - Component separation */
  --space-15: 3rem; /* 48px - Major sections */
  --space-24: 10rem; /* 160px - Maximum spacing */
}
```

**Usage**: Padding, gaps in Flex/Grid layouts, margins (when gaps aren't suitable)

#### Dimension Tokens

**Linear tokens (1-24)**: Component-level sizing (4px to 320px)

```css
:root {
  --size-4: 1rem; /* 16px - Small control height */
  --size-8: 2rem; /* 32px - Default control height */
  --size-10: 3rem; /* 48px - Large control height */
  --size-24: 20rem; /* 320px - Medium modals */
}
```

**Named tokens**: Layout-level sizing (320px to 1536px)

```css
:root {
  --size-md: 28rem; /* 448px - Default modal width */
  --size-lg: 32rem; /* 512px - Large modals */
  --size-4xl: 56rem; /* 896px - Large content areas */
  --size-8xl: 96rem; /* 1536px - Maximum layout width */
}
```

#### Gap Utilities

Automatically generated utility classes for consistent layout spacing:

```css
.gap-7 {
  gap: var(--space-7);
} /* 16px */
.gap-x-5 {
  column-gap: var(--space-5);
} /* 12px column gap */
.gap-y-9 {
  row-gap: var(--space-9);
} /* 24px row gap */
```

### Three-Layer Color Token Architecture

#### Layer 1: Semantic Reference Tokens

- **Purpose**: Map semantic roles to actual color values
- **Location**: `styles/tokens/reference/colors/`
- **Responsibility**: Color selection and contextual text contrast
- **Example**: `[data-primary-color="blue"]` maps `--primary-9` to `var(--blue-9)`

#### Layer 2: System Tokens

- **Purpose**: UI-focused abstractions following Radix 12-step scale
- **Location**: `styles/tokens/system/colors/system.css`
- **Responsibility**: Semantic UI meaning (backgrounds, borders, text)
- **Example**: `--ui-bg-solid: var(--primary-9)` (Step 9: solid backgrounds)

#### Layer 3: Component Tokens

- **Purpose**: Component-specific abstractions
- **Location**: `components/ui/*/component-tokens.css`
- **Responsibility**: Map component properties to system tokens
- **Example**: `--button-bg: var(--ui-bg-solid)`

### System Layout Tokens

Semantic abstractions built on spacing and dimension tokens:

```css
:root {
  /* Control heights using dimension tokens */
  --control-height-3: var(--size-8); /* 32px - Medium controls */
  --control-height-4: var(--size-10); /* 40px - Large controls */

  /* Control padding using spacing tokens */
  --control-padding-3: var(--space-7); /* 16px - Medium padding */
  --control-padding-4: var(--space-8); /* 20px - Large padding */

  /* Control roundness using Tailwind radius tokens */
  --control-radius-3: var(--radius-lg); /* Medium roundness */
  --control-radius-4: var(--radius-lg); /* Large roundness (same as medium) */
}
```

### Benefits of This Architecture

1. **Linear Token Access**: Predictable O(1) token lookup with 1-24 naming
2. **No Selector Duplication**: Variant logic exists only in token files
3. **Automatic Contrast**: Text colors adapt based on background brightness
4. **Easy Extensibility**: Add variants by modifying token files only
5. **Performance**: ~400 lines of CSS removed through abstraction
6. **Memory Efficiency**: 63 total tokens (24 spacing + 39 dimension) with minimal overhead

## Component Architecture

### Foundation Components

**Box and Flex**: Provide layout primitives with token-based spacing and dimension props.

```tsx
// Layout building blocks
<Box p={4} mb={2}>Content</Box>
<Flex direction="column" gap={3} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### UI Components

**Button**: Comprehensive button system demonstrating the three-layer token approach.

```tsx
// All variants automatically work with all colors
<Button variant="solid" data-primary-color="warning">
  Warning Button (auto dark text on bright background)
</Button>
```

**Text**: Typography system using component tokens for simplified styling.

```tsx
// Automatic color handling through tokens
<Text data-primary-color="success">Success text</Text>
```

### Component Structure

Each component follows a consistent structure:

```
components/ui/component/
├── component.tsx          # React component with TypeScript types
├── component.css          # Clean component styles using component tokens
├── component-tokens.css   # Component token mappings to system tokens
└── index.ts              # Export interface
```

### CSS Architecture

Components use a simplified CSS architecture enabled by the token system:

```css
/* Before: Hundreds of variant/color combinations */
[data-variant="solid"][data-primary-color="blue"] {
  background: var(--blue-9);
}
[data-variant="solid"][data-primary-color="red"] {
  background: var(--red-9);
}
/* ...50+ more rules */

/* After: Single rule using component tokens */
.button-root {
  background: var(--button-bg);
  color: var(--button-text);
}
```

## Theming System

### Provider Architecture

The `ThemeProvider` component manages theme state and applies data attributes to enable CSS-based theming:

```tsx
<ThemeProvider primary="purple" gray="sage" size={3} roundness="lg">
  <App />
</ThemeProvider>
```

### Data Attribute System

Theme values are applied as data attributes on DOM elements:

```html
<html data-primary-color="purple" data-gray-color="sage" data-size="3" data-roundness="lg">
  <button data-variant="solid" data-primary-color="warning">Button with automatic yellow background and dark text</button>
</html>
```

### Contextual Color Handling

The system automatically handles text contrast for different background brightnesses:

- **Bright colors** (yellow, lime, amber, sky, cyan): Dark text (`step-12`)
- **Dark colors** (red, blue, purple, green): Light text (`step-1`)

## State Management

### Jotai Integration

Theme state is managed using Jotai atoms for efficient, granular updates:

```tsx
// Theme atoms
const primaryColorAtom = atom<ThemeColor>("blue");
const sizeAtom = atom<ThemeSize>(3);

// Derived atoms for complex state
const themeConfigAtom = atom((get) => ({
  primary: get(primaryColorAtom),
  size: get(sizeAtom),
  // ...
}));
```

### Programmatic Theme Control

Components can programmatically control theme values:

```tsx
const { color, setColor } = useTheme();

// Theme changes are instant via CSS variables
setColor("purple"); // Immediately updates all themed components
```

## Type Safety

### Union Types for Variants

All component variants are defined as TypeScript union types:

```tsx
type ButtonVariant = "solid" | "outline" | "ghost" | "tinted" | "link" | "modern";
type ThemeColor = "blue" | "purple" | "pink" | /* ...all 18 colors */;
type ThemeSize = 1 | 2 | 3 | 4 | 5 | 6;
```

### Automatic Derivation

Arrays for UI components are automatically derived from union types:

```tsx
// Automatically stays in sync with ThemeColor type
export const THEME_COLORS: ThemeColor[] = ["blue", "purple" /* ... */];
```

### Component Props

Components use discriminated unions for variant-specific props:

```tsx
interface ButtonProps {
  variant?: ButtonVariant;
  size?: ThemeSize;
  "data-primary-color"?: ThemeColor | SemanticColorKey;
  // ...
}
```

## Performance Characteristics

### CSS Bundle Optimization

- **Token Abstraction**: Reduced button CSS from 500+ to ~120 lines
- **Reusable Tokens**: Component token files provide reusable abstractions
- **No Duplication**: Single source of truth for variant/color logic

### Runtime Performance

- **CSS Variables**: Instant theme switching with zero JavaScript overhead
- **Native Cascade**: Browser-optimized token resolution
- **Minimal Rerenders**: Jotai atoms provide granular updates

### Build-time Optimizations

- **Tree Shaking**: Components can be imported individually
- **Type Elimination**: TypeScript types provide zero-runtime cost safety
- **Static Analysis**: Union types enable comprehensive type checking

## Accessibility

### Radix UI Foundation

All interactive components are built on Radix UI primitives, ensuring:

- **Keyboard Navigation**: Full keyboard accessibility out of the box
- **Screen Reader Support**: Proper ARIA attributes and roles
- **Focus Management**: Correct focus trapping and restoration
- **High Contrast**: Colors meet WCAG contrast requirements

### Automatic Contrast

The token system automatically ensures proper text contrast:

```css
/* Yellow background automatically gets dark text */
[data-primary-color="yellow"] {
  --text-on-solid: var(--yellow-12); /* Dark text for accessibility */
}

/* Blue background automatically gets light text */
[data-primary-color="blue"] {
  --text-on-solid: var(--blue-1); /* Light text for accessibility */
}
```

## Testing Strategy

### Component Testing

- **Unit Tests**: Individual component behavior and prop handling
- **Integration Tests**: Component interaction and theming
- **Visual Regression**: Automated screenshot testing for all variants
- **Accessibility Tests**: Automated a11y testing with axe-core

### Token System Testing

- **Contrast Testing**: Automated testing of text/background contrast ratios
- **Token Resolution**: Verify correct CSS variable cascade
- **Theme Switching**: Test instant theme changes across all components

## Development Workflow

### Component Development

1. **Define Component Tokens**: Map component properties to system tokens
2. **Write Component CSS**: Use component tokens only (no variant logic)
3. **Create React Component**: TypeScript interface with union types
4. **Add Tests**: Unit, integration, and accessibility tests

### Adding New Colors

1. **Create Reference File**: Define color mappings and contextual text
2. **Update TypeScript Types**: Add to `ThemeColor` union type
3. **Automatic Support**: All components immediately support new color

### Extending Variants

1. **Define Component Tokens**: Add variant tokens to component token file
2. **Update TypeScript Types**: Add to variant union type
3. **Automatic Color Support**: All colors automatically work with new variant

## Future Architecture

### Planned Enhancements

- **Design Token Studio Integration**: Visual token management
- **Runtime Theme Generation**: Dynamic color palette generation
- **Component Variants API**: Programmatic variant creation
- **Advanced Typography**: Modular type scale system

### Scalability Considerations

- **Token Namespacing**: Prevent conflicts in larger applications
- **Component Libraries**: Enable multiple design system coexistence
- **Performance Monitoring**: Track CSS bundle size and runtime performance
- **Documentation Generation**: Automatic component documentation from TypeScript types

## Migration Path

### From Legacy Systems

The three-layer token system is designed for easy migration:

1. **Backward Compatibility**: Existing CSS continues to work
2. **Gradual Adoption**: Components can be migrated incrementally
3. **Token Mapping**: Legacy values can be mapped to new token system
4. **Style Guides**: Automated migration of existing style guides

### Future-Proofing

- **CSS Layers**: Prepared for CSS @layer specification
- **Design Tokens Community Group**: Aligned with W3C standards
- **Component Library Standards**: Following industry best practices
- **Framework Agnostic**: Token system can be used with any framework

This architecture provides a solid foundation for a maintainable, performant, and accessible component library that can scale with growing design system needs.
