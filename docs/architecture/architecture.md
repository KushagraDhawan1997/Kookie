# Kookie Architecture Overview

Kookie is a modern, token-based design system and component library built with React, TypeScript, and Next.js. It emphasizes semantic theming, consistent spacing, and smooth user interactions.

## Core Principles

### 1. Token-Based Design System

- **Consistent Spacing**: All spacing uses predefined tokens (`--space-1` through `--space-24`)
- **Semantic Dimensions**: Components use semantic size tokens instead of arbitrary values
- **Typography Scale**: Text sizing follows a consistent scale with token-based font sizes
- **No Margins**: Layout uses padding, flex gaps, and grid gaps instead of margins

### 2. Semantic Color System

- **Theme-Agnostic**: Components use semantic color variables (`--primary-*`, `--gray-*`, etc.)
- **Radix Foundation**: Built on Radix UI colors for accessibility and consistency
- **Alpha Support**: Full support for alpha (transparent) color variants
- **Dynamic Theming**: Colors can be changed globally via ThemeProvider

### 3. Modern Styling Approach

- **CSS Variables**: Extensive use of CSS custom properties for theming
- **No Utility Classes**: Direct style application instead of generated class names
- **Smooth Transitions**: Consistent 0.25s ease transitions across interactive elements
- **Advanced Effects**: Gradient backgrounds, drop shadows, and alpha overlays

## Architecture Components

### Theme System

#### ThemeProvider

Central theme management using Jotai state management:

```tsx
<ThemeProvider primary="blue" gray="sage" error="red" success="green" warning="amber" roundness="md" size={2}>
  {children}
</ThemeProvider>
```

#### Color Mapping

Semantic colors are mapped to actual color palettes via CSS data attributes:

```css
[data-primary-color="blue"] {
  --primary-1: var(--blue-1);
  --primary-9: var(--blue-9);
  /* ... etc */
}
```

#### Roundness System

Global and local roundness control through CSS variables:

```css
[data-roundness="md"] {
  --theme-radius-factor: 1;
}

.component {
  border-radius: calc(var(--radius-lg) * var(--theme-radius-factor));
}
```

### Component Architecture

#### Component Structure

All components follow a consistent structure:

```
component-name/
├── component-name.tsx      # Main component implementation
├── component-name.css      # Component-specific styles
├── component-name-types.ts # TypeScript type definitions
└── index.ts               # Barrel export
```

#### Props System

Components use shared prop types for consistency:

- **LayoutProps**: Padding, dimensions, positioning
- **MarginProps**: Margin utilities (when needed)
- **ResponsiveProps**: Responsive value support
- **SemanticProps**: Theme-aware color and styling

#### Style Application

Components apply styles directly rather than using class generation:

```tsx
// Token-based styling
<div
  style={{
    padding: `var(--space-${padding})`,
    width: `var(--size-${width})`,
    color: `var(--primary-${colorScale})`,
  }}
/>
```

### Component Categories

#### Layout Components

- **Box**: Fundamental building block with token-based props
- **Flex**: Flexbox layouts with responsive capabilities
- **Grid**: CSS Grid layouts with responsive configurations

#### Interactive Components

- **Button**: Multi-variant button with modern styling options
  - Variants: modern, solid, tinted, outline, ghost, link
  - Features: gradients, drop shadows, alpha overlays
  - Smooth transitions and semantic color support

#### Typography Components

- **Text**: General text rendering with token-based sizing
- **Heading**: Semantic headings (h1-h6) with larger scales

### Advanced Features

#### Modern Button Variant

Showcases advanced styling capabilities:

- **Gradient Backgrounds**: `linear-gradient(to bottom right, var(--color-9), var(--color-11))`
- **Drop Shadow Scaling**: `--shadow-xl` → `--shadow-lg` → `--shadow-md`
- **Alpha Overlays**: `box-shadow: inset` with alpha variables
- **Smooth Transitions**: All effects transition smoothly

#### Responsive System

Components support responsive props:

```tsx
<Box p={{ base: 2, md: 4, lg: 6 }} width={{ base: "full", md: "lg" }} />
```

#### Type Safety

Full TypeScript support with:

- Strict prop typing
- Token value validation
- Theme-aware color types
- Responsive value types

## File Organization

### Root Structure

```
kookie/
├── app/                    # Next.js App Router
├── components/             # Component library
├── docs/                   # Documentation
├── lib/                    # Utilities
├── styles/                 # Global styles and tokens
└── public/                 # Static assets
```

### Component Structure

```
components/
├── helpers/                # Utility components
├── props/                  # Shared prop definitions
├── providers/              # Context providers
├── types/                  # Shared TypeScript types
└── ui/                     # Core UI components
    ├── box/
    ├── button/
    ├── flex/
    ├── grid/
    └── text/
```

### Styles Structure

```
styles/
├── color.css              # Semantic color system
├── globals.css             # Global styles
└── tokens/                 # Token definitions
    ├── dimensions.css
    ├── spacing.css
    └── typography.css
```

## Design Decisions

### Why Token-Based?

1. **Consistency**: Ensures predictable spacing and sizing
2. **Performance**: Avoids runtime class generation
3. **Flexibility**: Supports both tokens and raw CSS values
4. **Maintainability**: Centralized design decisions

### Why CSS Variables?

1. **Runtime Theming**: Colors can change without rebuilding
2. **Performance**: Faster than class-based theming
3. **Inheritance**: Natural CSS cascade for theme values
4. **Flexibility**: Supports complex calculations and combinations

### Why No Margins?

1. **Predictability**: Eliminates margin collapse issues
2. **Consistency**: Uniform spacing approach across components
3. **Flexibility**: Gap-based layouts are more flexible
4. **Component Boundaries**: Clear separation of component responsibilities

## Development Guidelines

### Component Development

1. Use semantic color variables, never specific colors
2. Use token-based spacing and dimensions
3. Support responsive props where appropriate
4. Include proper TypeScript types
5. Document component behavior and usage

### Styling Guidelines

1. Use CSS variables for all themeable values
2. Apply styles directly rather than using classes
3. Support both token and raw CSS values
4. Use 0.25s ease transitions for interactive elements
5. Follow the semantic color scale (1-12)

### Performance Considerations

1. Minimize runtime calculations
2. Use CSS for animations and transitions
3. Leverage CSS variable inheritance
4. Avoid unnecessary re-renders in theme context

This architecture provides a solid foundation for building consistent, themeable, and performant user interfaces while maintaining developer experience and type safety.
