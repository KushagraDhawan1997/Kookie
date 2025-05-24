# Kookie UI

A high-performance component library built on Radix UI primitives, styled with CSS tokens, and implemented with Next.js. It focuses on quality over quantity, with consistent styling and comprehensive theming capabilities.

## Core Principles

1. **Quality over quantity** - Fewer, high-quality components rather than many mediocre ones
2. **Built on Radix Primitives** - Leveraging accessibility and functionality
3. **Context independence** - Components work anywhere, not tied to specific use cases
4. **Performance-first** - CSS variables and semantic tokens for theming
5. **Component inheritance** - Props cascade through the component tree
6. **Style consistency** - Following the design token reference
7. **Configuration-driven** - Single source of truth for theme options
8. **Multiple appearances** - Support for different visual styles via variant props

## Technology Stack

- **Framework**: Next.js
- **Component Primitives**: Radix UI
- **Styling**: CSS variables with Radix color tokens
- **State Management**: Jotai
- **Type Safety**: TypeScript with union types
- **Documentation**: Nextra (planned)

## Theme System

Kookie UI features a comprehensive theme system with 18 colors, 5 gray variants, and semantic color mappings. The system is built on Radix UI colors for accessibility and consistency.

### Available Colors

**Cool Spectrum**: blue, purple, pink, violet, iris, indigo  
**Blue-Green**: cyan, sky, teal  
**Green**: green, lime  
**Warm**: amber, yellow, orange  
**Red**: red, ruby, crimson

**Gray Variants**: sage, slate, mauve, olive, sand

### Theme Configuration

```tsx
import { ThemeProvider } from "@/components/providers/theme-provider";

<ThemeProvider
  primary="purple" // Any of the 18 available colors
  gray="sage" // Any of the 5 gray variants
  error="crimson" // Error state color
  success="teal" // Success state color
  warning="orange" // Warning state color
  size={3} // Default component size (1-6)
  roundness="lg" // Border roundness: none, sm, md, lg, xl, full
>
  <App />
</ThemeProvider>;
```

### Programmatic Theme Changes

```tsx
import { useTheme } from "@/components/providers/theme-provider";

function ThemeControls() {
  const { color, setColor, gray, setGray, error, setError, success, setSuccess, warning, setWarning, size, setSize, roundness, setRoundness } = useTheme();

  return (
    <div>
      <button onClick={() => setColor("purple")}>Purple Theme</button>
      <button onClick={() => setGray("sage")}>Sage Gray</button>
      <button onClick={() => setSize(size === 6 ? 1 : size + 1)}>Cycle Size ({size})</button>
    </div>
  );
}
```

### Visual Theme Editor

The ThemePlayground component provides a floating panel for real-time theme customization:

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

Features:

- All 18 colors with semantic groupings
- Error, success, warning color controls
- Size and roundness adjustment
- Real-time preview
- Floating top-right position

## Core Components

### Layout Components

Built with the Box and Flex primitives:

```tsx
import { Box, Flex } from "@/components/ui";

// Box - foundational container
<Box p="4" style={{ backgroundColor: "var(--gray-2)" }}>
  Content with padding and background
</Box>

// Flex - flexible layouts
<Flex direction="column" gap="3" align="center" justify="between">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Typography System

#### Text Component

```tsx
import { Text } from "@/components/ui/text";

// Basic usage
<Text>Default paragraph text</Text>

// Sizing and styling
<Text size={2} weight="medium">Medium weight text</Text>
<Text size={4} weight="bold">Large bold text</Text>
```

#### Heading Component

```tsx
import { Heading } from "@/components/ui/text";

// Basic usage
<Heading>Default heading</Heading>

// Specific sizes
<Heading size={6}>Large heading</Heading>
<Heading size={2}>Small heading</Heading>
```

### Button Component

Comprehensive button system with theme integration:

```tsx
import { Button } from "@/components/ui/button";

// Basic usage
<Button>Default Button</Button>

// Variants
<Button variant="solid">Solid Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="tinted">Tinted Button</Button>
<Button variant="link">Link Button</Button>
<Button variant="modern">Modern Button</Button>

// Sizes
<Button size={1}>Extra Small</Button>
<Button size={3}>Medium (Default)</Button>
<Button size={6}>Extra Large</Button>

// Colors (uses theme primary color)
<Button>Uses Current Primary</Button>
<Button data-primary-color="error">Error Style</Button>
<Button data-primary-color="success">Success Style</Button>

// States
<Button disabled>Disabled Button</Button>
```

## Color System Architecture

The color system uses a configuration-driven approach:

```tsx
// All colors defined in theme-types.ts
export type ThemeColor = "blue" | "purple" | "pink" | /* ... all 18 colors */;
export type ThemeGray = "sage" | "slate" | "mauve" | "olive" | "sand";

// Arrays for UI components automatically derived
export const THEME_COLORS: ThemeColor[] = [...];
export const ERROR_COLORS: ThemeColor[] = ["red", "ruby", "crimson"];
```

### CSS Variable System

Components use semantic CSS variables:

```css
/* ✅ Good - semantic variables */
color: var(--primary-11);
background-color: var(--gray-3);
border-color: var(--error-6);

/* ❌ Avoid - specific color variables */
color: var(--blue-11);
background-color: var(--slate-3);
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The ThemePlayground will appear in the top-right corner, allowing you to experiment with different theme configurations in real-time.

## Development Roadmap

See [Development Tasks](/docs/tasks/tasks.md) for the development roadmap.

## Documentation

For more detailed information about the architecture, see the following files:

- [Color System](/docs/architecture/color-system.md)
- [Theme Provider](/docs/architecture/components/theme-provider/README.md)
- [Token System](/docs/architecture/token-system.md)
- [Component Architecture](/docs/architecture/components/README.md)
