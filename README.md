# Kookie UI

A high-performance component library built on Radix UI primitives, styled with Tailwind CSS, and implemented with Next.js. It focuses on quality over quantity, with consistent styling and proper component inheritance.

## Core Principles

1. **Quality over quantity** - Fewer, high-quality components rather than many mediocre ones
2. **Built on Radix Primitives** - Leveraging accessibility and functionality
3. **Context independence** - Components work anywhere, not tied to specific use cases
4. **Performance-first** - CSS and WebGL for animations, minimal JS
5. **Component inheritance** - Props cascade through the component tree
6. **Style consistency** - Following the design token reference
7. **Tailwind integration** - Seamless mapping of semantic colors to Tailwind's built-in colors

## Technology Stack

- **Framework**: Next.js
- **Component Primitives**: Radix UI
- **Styling**: Tailwind CSS with semantic color mapping
- **State Management**: Jotai
- **Documentation**: Nextra (planned)

## Theme System

Kookie UI uses a theme system that maps semantic colors (primary, success, warning, danger) to Tailwind's built-in color palette. This allows components to use consistent semantic color classes while providing the flexibility to change the actual colors through the theme settings.

```tsx
// Theme can be customized at the app level
<ThemeProvider
  color="indigo" // Sets the primary color to Tailwind's indigo
  gray="slate" // Sets the neutral color to Tailwind's slate
  size="sm" // Default component size
  style="modern" // Visual style
  radius="md" // Border radius
>
  <App />
</ThemeProvider>
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Roadmap

See [Development Tasks](/docs/tasks/tasks.md) for the development roadmap.

## Documentation

For more detailed information about the architecture, see the following files:

- [Core Architecture](/docs/architecture/architecture-core.md)
- [Component Architecture](/docs/architecture/architecture-components.md)
- [Development Process](/docs/architecture/architecture-development.md)
- [Documentation Architecture](/docs/architecture/architecture-documentation.md)
- [Performance Architecture](/docs/architecture/architecture-performance.md)
- [Design Token Reference](/docs/design-token-reference.md)
