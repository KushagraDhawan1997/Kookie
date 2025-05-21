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
8. **Multiple appearances** - Support for different visual styles via the appearance prop

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
  success="emerald" // Sets the success color to Tailwind's emerald
  warning="amber" // Sets the warning color to Tailwind's amber
  danger="rose" // Sets the danger color to Tailwind's rose
  gray="slate" // Sets the neutral color to Tailwind's slate
  size="sm" // Default component size
  style="standard" // Visual appearance style (standard, minimal, detailed)
  radius="md" // Border radius
>
  <App />
</ThemeProvider>
```

## Appearance System

Components support multiple visual styles through the `appearance` prop:

```tsx
// Standard appearance (default)
<Button>Standard Button</Button>

// Minimal appearance
<Button appearance="minimal">Minimal Button</Button>
```

The appearance system provides:

- **Global defaults** via ThemeProvider's `style` prop
- **Per-component overrides** via the `appearance` prop
- **Modular style files** for easy maintenance and extension

## Core Components

### Typography System

Kookie provides two main typography components:

#### Text Component

The foundational text component for general content:

```tsx
// Basic usage
<Text>Default paragraph text</Text>

// With semantic color and styling
<Text color="primary" size="lg" weight="medium">
  Primary colored text
</Text>

// Variants
<Text variant="muted">Muted text for less emphasis</Text>
<Text variant="accent">Accented text for subtle emphasis</Text>
```

#### Heading Component

Specialized component for h1-h6 headings:

```tsx
// Basic usage
<Heading>Default h2 heading</Heading>

// Specific heading level
<Heading as="h1">Primary page heading</Heading>

// Visual styling different from semantic level
<Heading as="h2" level="h1">
  Looks like h1, semantically h2
</Heading>
```

### Button Component

Flexible button component with multiple variants, colors, and sizes:

```tsx
// Basic usage
<Button>Default Button</Button>

// Variants
<Button variant="solid">Solid Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="tinted">Tinted Button</Button>
<Button variant="link">Link Button</Button>

// Colors (semantic or Tailwind colors)
<Button color="primary">Primary Button</Button>
<Button color="success">Success Button</Button>
<Button color="violet">Violet Button</Button>

// Sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Appearances
<Button appearance="standard">Standard Style</Button>
<Button appearance="minimal">Minimal Style</Button>

// With icons
<Button leftIcon={<Icon />}>With Left Icon</Button>
<Button rightIcon={<Icon />}>With Right Icon</Button>

// States
<Button isLoading={true}>Loading Button</Button>
<Button disabled>Disabled Button</Button>
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
