# Kookie UI - Core Architecture

## Overview

Kookie UI is a high-performance component library built on Radix UI primitives, styled with Tailwind CSS, and implemented with Next.js. It focuses on quality over quantity, with consistent styling and proper component inheritance.

## Technology Stack

- **Framework**: Next.js
- **Component Primitives**: Radix UI
- **Styling**: Tailwind CSS
- **State Management**: Jotai
- **Documentation**: Nextra

## Core Principles

1. **Quality over quantity** - Fewer, high-quality components rather than many mediocre ones
2. **Built on Radix Primitives** - Leveraging accessibility and functionality
3. **Context independence** - Components work anywhere, not tied to specific use cases
4. **Performance-first** - CSS and WebGL for animations, minimal JS
5. **Component inheritance** - Props cascade through the component tree
6. **Style consistency** - Following the design token reference

## Project Structure

```
kookie/
├── app/                  # Next.js app directory (routing, pages)
├── components/
│   ├── ui/               # Core UI components (e.g., Button, Text)
│   ├── demos/            # Demo components for showcasing UI
│   └── ...               # Other shared component categories
├── lib/
│   ├── theme/            # Theme system
│   ├── utils/            # Utility functions
│   └── ...
├── docs/                 # Documentation files
├── public/               # Static assets
└── ... (configuration files)
```

## Theme System Architecture

### Core Concepts

1. **Semantic Colors** - Maps conceptual colors (primary, success, warning, danger) to actual Tailwind colors
2. **Component Inheritance** - Child components inherit size and other properties from parents
3. **Atomic State** - Uses Jotai for global theme state management
4. **Context Providers** - Passes theme data through React context

### Theme Properties

- **Colors**: Configurable semantic colors (primary, success, warning, danger)
- **Gray Scale**: Configurable gray palette (slate, gray, zinc, neutral, stone)
- **Size Scale**: Global size setting (xs, sm, md, lg, xl)
- **Visual Style**: Design system mode (minimal, modern, classic)
- **Border Radius**: Global radius setting

### Key Patterns

#### 1. Theme Provider Pattern

- Accepts theme customizations as props
- Sets up global state via Jotai atoms
- Provides color mapping through React context
- Enables consistent theming across the application

#### 2. Component Size Inheritance

- Parent components set size in context
- Child components access the inherited size
- Explicit size props override inherited values
- Creates visual consistency in component hierarchies

#### 3. Semantic Color Resolution

- Components request semantic colors (primary, success, etc.)
- Theme system resolves to actual Tailwind colors
- Provides consistency while allowing customization
- Ensures color meaning remains consistent

## Utils and Helpers

### Class Name Merging

The `cn` utility (based on `clsx` and `tailwind-merge`) handles:

- Merging multiple class strings
- Resolving Tailwind class conflicts
- Conditionally applying classes

### Component Style Maps

Instead of string interpolation, components use explicit style maps:

- Maps variant+size+color combinations to complete class strings
- Ensures type safety and prevents runtime errors
- Supports IDE autocompletion and validation

## Performance Considerations

1. **Static Class Generation** - No dynamic class string building at runtime
2. **Bundle Size Optimization** - Components import only what they need
3. **Render Optimization** - State is isolated to avoid unnecessary re-renders
4. **CSS-First Animations** - Minimize JavaScript for animations where possible

## Migration and Compatibility Notes

### Tailwind v4 Compatibility

- No string templates for class names
- Use complete class strings in style maps
- Keep dynamic class resolution logic to a minimum
