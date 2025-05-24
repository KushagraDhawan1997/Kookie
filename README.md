# Kookie UI

A high-performance component library built on Radix UI primitives, styled with a sophisticated three-layer token system, and implemented with Next.js. It focuses on quality over quantity, with consistent styling and comprehensive theming capabilities.

## Core Principles

1. **Quality over quantity** - Fewer, high-quality components rather than many mediocre ones
2. **Built on Radix Primitives** - Leveraging accessibility and functionality
3. **Context independence** - Components work anywhere, not tied to specific use cases
4. **Performance-first** - Three-layer token system for optimal theming performance
5. **Component inheritance** - Props cascade through the component tree
6. **Style consistency** - Following the design token reference
7. **Configuration-driven** - Single source of truth for theme options
8. **Multiple appearances** - Support for different visual styles via variant props

## Technology Stack

- **Framework**: Next.js
- **Component Primitives**: Radix UI
- **Styling**: Three-layer token system (Reference → System → Component)
- **Color System**: Radix 12-step color scales with contextual text tokens
- **State Management**: Jotai
- **Type Safety**: TypeScript with union types
- **Documentation**: Nextra (planned)

## Token System Architecture

Kookie UI implements a sophisticated three-layer token architecture inspired by design system best practices:

### Layer 1: Semantic Reference Tokens

Maps semantic color roles to actual Radix colors:

```css
/* Primary colors (orange, yellow, blue, etc.) */
--primary-1 through --primary-12
--primary-a1 through --primary-a12

/* Semantic colors */
--warning-1 through --warning-12
--success-1 through --success-12
--error-1 through --error-12
```

### Layer 2: System Tokens

UI-focused abstractions that map to specific Radix scale steps:

```css
/* Backgrounds */
--ui-bg-app: var(--primary-1)           /* Step 1: App backgrounds */
--ui-bg-component: var(--primary-3)     /* Step 3: Component backgrounds */
--ui-bg-solid: var(--primary-9)         /* Step 9: Solid backgrounds */

/* Borders */
--ui-border-subtle: var(--primary-6)    /* Step 6: Subtle borders */
--ui-border-interactive: var(--primary-7) /* Step 7: Interactive borders */
--ui-border-strong: var(--primary-8)    /* Step 8: Strong borders */

/* Text */
--text-high-contrast: var(--primary-12) /* Step 12: High contrast text */
--text-on-solid: var(--primary-1)       /* Contextual text on solid backgrounds */
--text-on-tinted: var(--primary-12)     /* Contextual text on tinted backgrounds */
```

### Layer 3: Component Tokens

Component-specific tokens that map to system tokens:

```css
/* Button tokens */
--button-bg: var(--ui-bg-solid)
--button-text: var(--text-on-solid)
--button-border: var(--ui-border-strong)

/* Text tokens */
--text-color: var(--text-high-contrast)
```

### Contextual Text Handling

The system automatically adapts text colors based on background brightness:

- **Bright colors** (yellow, lime, amber, sky, cyan): Use dark text (`step-12`)
- **Dark colors** (red, blue, purple, etc.): Use light text (`step-1`)

## Theme System

Kookie UI features a comprehensive theme system with 18 colors, 5 gray variants, and semantic color mappings. All colors automatically support proper text contrast.

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
- Real-time preview with proper text contrast
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

Uses component tokens for simplified styling:

```tsx
import { Text } from "@/components/ui/text";

// Basic usage - automatically uses --text-color token
<Text>Default paragraph text</Text>

// Sizing and styling
<Text size={2} weight="medium">Medium weight text</Text>
<Text size={4} weight="bold">Large bold text</Text>

// Color variants use semantic tokens
<Text data-primary-color="success">Success colored text</Text>
<Text data-primary-color="error">Error colored text</Text>
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

Comprehensive button system with component token abstraction:

```tsx
import { Button } from "@/components/ui/button";

// Basic usage - uses component tokens internally
<Button>Default Button</Button>

// Variants (only outline variant has borders)
<Button variant="solid">Solid Button (no border)</Button>
<Button variant="outline">Outline Button (with border)</Button>
<Button variant="ghost">Ghost Button (no border)</Button>
<Button variant="tinted">Tinted Button (no border)</Button>
<Button variant="link">Link Button (no border)</Button>
<Button variant="modern">Modern Button (gradient, no border)</Button>

// Sizes
<Button size={1}>Extra Small</Button>
<Button size={3}>Medium (Default)</Button>
<Button size={6}>Extra Large</Button>

// Colors with automatic text contrast
<Button>Uses Current Primary</Button>
<Button data-primary-color="error">Error Style</Button>
<Button data-primary-color="success">Success Style</Button>
<Button data-primary-color="warning">Warning Style (auto dark text on bright bg)</Button>

// States with smooth animations
<Button disabled>Disabled Button</Button>
```

## Color System Architecture

The color system uses a configuration-driven approach with automatic contrast handling:

```tsx
// All colors defined in theme-types.ts
export type ThemeColor = "blue" | "purple" | "pink" | /* ... all 18 colors */;
export type ThemeGray = "sage" | "slate" | "mauve" | "olive" | "sand";

// Arrays for UI components automatically derived
export const THEME_COLORS: ThemeColor[] = [...];
export const ERROR_COLORS: ThemeColor[] = ["red", "ruby", "crimson"];
export const SUCCESS_COLORS: ThemeColor[] = ["green", "teal", "lime"];
export const WARNING_COLORS: ThemeColor[] = ["amber", "yellow", "orange"];
```

### CSS Variable System

Components use semantic CSS variables through the three-layer token system:

```css
/* ✅ Reference Layer - Color mappings */
[data-primary-color="yellow"] {
  --primary-9: var(--yellow-9);
  --text-on-solid: var(--yellow-12); /* Dark text for bright backgrounds */
}

/* ✅ System Layer - UI abstractions */
:root {
  --ui-bg-solid: var(--primary-9);
  --text-on-solid: var(--primary-1); /* Overridden per color */
}

/* ✅ Component Layer - Simplified */
[data-variant="solid"] {
  --button-bg: var(--ui-bg-solid);
  --button-text: var(--text-on-solid);
}

/* ✅ Component CSS - Clean and minimal */
.button-root {
  background: var(--button-bg);
  color: var(--button-text);
}
```

### Token Benefits

1. **No selector duplication** - Logic exists only in token files
2. **Automatic contrast** - Text colors adapt to background brightness
3. **Easy extensibility** - Add variants by modifying token files only
4. **Performance optimized** - CSS variables with semantic abstractions
5. **Maintainable** - Clean separation of concerns

## File Structure

```
styles/
├── tokens/
│   ├── reference/
│   │   └── colors/
│   │       ├── blue-reference.css     # Color → semantic mappings
│   │       ├── yellow-reference.css   # With contextual text tokens
│   │       └── ...
│   └── system/
│       └── colors/
│           └── system.css             # UI abstraction tokens
│
components/ui/
├── button/
│   ├── button.css                     # Clean component styles
│   └── button-tokens.css              # Component token mappings
└── text/
    ├── text.css                       # Simplified text styles
    └── text-tokens.css                # Text component tokens
```

## Performance Benefits

- **Reduced CSS**: ~400 lines removed through token abstraction
- **No duplication**: Variant logic exists only in token files
- **Runtime efficiency**: CSS variables for instant theme switching
- **Bundle optimization**: Semantic tokens reduce repetitive CSS

## Migration Guide

The token system is backward compatible, but new development should use the three-layer approach:

```tsx
// ❌ Old approach - direct color values
<Button style={{ backgroundColor: 'var(--blue-9)', color: 'var(--blue-1)' }} />

// ✅ New approach - semantic component tokens
<Button data-primary-color="blue" variant="solid" />
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
