# Kookie UI - Core Architecture

## Overview

Kookie UI is a high-performance component library built on Radix UI primitives, styled with Tailwind CSS, and implemented with Next.js. It focuses on quality over quantity, with consistent styling and proper component inheritance.

## Technology Stack

- **Framework**: Next.js
- **Component Primitives**: Radix UI
- **Styling**: Tailwind CSS
- **State Management**: Jotai
- **Documentation**: Nextra
- **Monorepo**: npm workspaces / Turborepo

## Core Principles

1. **Quality over quantity** - Fewer, high-quality components rather than many mediocre ones
2. **Built on Radix Primitives** - Leveraging accessibility and functionality
3. **Context independence** - Components work anywhere, not tied to specific use cases
4. **Performance-first** - CSS and WebGL for animations, minimal JS
5. **Component inheritance** - Props cascade through the component tree
6. **Style consistency** - Following the design token reference

## Project Structure

```
kookie-ui/                  # Monorepo root
├── packages/
│   ├── core/               # Main UI library
│   │   ├── src/
│   │   │   ├── components/ # UI Components
│   │   │   │   ├── ui/     # Core interface components
│   │   │   │   ├── layout/ # Layout components
│   │   │   │   ├── navigation/ # Navigation components
│   │   │   │   ├── data/   # Data display components
│   │   │   │   ├── effects/ # Visual effects
│   │   │   │   └── marketing/ # Marketing components
│   │   │   │
│   │   │   ├── theme/      # Theme system
│   │   │   │   ├── atoms.ts # Theme Jotai atoms
│   │   │   │   ├── provider.tsx # Theme provider
│   │   │   │   └── hooks.ts # Theme hooks
│   │   │   │
│   │   │   ├── hooks/      # Shared hooks
│   │   │   ├── utils/      # Utility functions
│   │   │   └── index.ts    # Public exports
│   │   │
│   │   └── package.json
│   │
│   └── tsconfig/           # Shared TypeScript config
│
├── apps/
│   ├── docs/               # Documentation site (Nextra)
│   │   ├── pages/          # Nextra MDX pages
│   │   ├── components/     # Demo components
│   │   └── theme.config.js # Nextra theme config
│   │
│   └── playground/         # Component playground
│
├── turbo.json              # Turborepo config
└── package.json            # Root package.json
```

## Theme System with Jotai

Kookie uses Jotai for state management, particularly for handling theme settings and component inheritance.

```typescript
// theme/atoms.ts
import { atom } from 'jotai';

export type ThemeColor = 'blue' | 'purple' | 'green' | 'red' | 'yellow';
export type ThemeGray = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';
export type ThemeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ThemeStyle = 'minimal' | 'modern' | 'classic';

// Global theme settings
export const colorAtom = atom<ThemeColor>('blue');
export const grayAtom = atom<ThemeGray>('slate');
export const sizeAtom = atom<ThemeSize>('sm');
export const styleAtom = atom<ThemeStyle>('modern');
export const radiusAtom = atom<'none' | 'sm' | 'md' | 'lg' | 'full'>('md');

// Component inheritance atom
export const componentSizeAtom = atom<ThemeSize>('sm');
```

### Theme Provider

```tsx
// theme/provider.tsx
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

export function ThemeProvider({
  children,
  color = 'blue',
  gray = 'slate',
  size = 'sm',
  style = 'modern',
  radius = 'md',
}) {
  // Hydrate atoms with initial values
  useHydrateAtoms([
    [colorAtom, color],
    [grayAtom, gray],
    [sizeAtom, size],
    [styleAtom, style],
    [radiusAtom, radius],
    [componentSizeAtom, size],
  ]);

  return <Provider>{children}</Provider>;
}
```

### Theme Hooks

```typescript
// theme/hooks.ts
export function useTheme() {
  const [color, setColor] = useAtom(colorAtom);
  const [gray, setGray] = useAtom(grayAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const [style, setStyle] = useAtom(styleAtom);
  
  return {
    color,
    gray,
    size,
    style,
    setColor,
    setGray,
    setSize,
    setStyle,
  };
}

// Hook for component size inheritance
export function useComponentSize(explicitSize?: ThemeSize) {
  const [componentSize, setComponentSize] = useAtom(componentSizeAtom);
  
  // Use explicitly provided size or inherited size
  const resolvedSize = explicitSize || componentSize;
  
  return [resolvedSize, setComponentSize] as const;
}
```

## Component API

All components share a consistent API:

```typescript
interface BaseComponentProps {
  // Size prop - can be inherited from parent
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  // Base styling variant
  variant?: 'solid' | 'tinted' | 'outline' | 'ghost' | 'link';
  
  // Visual style - matches theme style
  style?: 'minimal' | 'modern' | 'classic';
  
  // Color theme
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  
  // Standard props
  className?: string;
  children?: React.ReactNode;
}
```

## Size Inheritance

Kookie enables size inheritance between parent and child components:

```tsx
// Parent sets size context for all children
<Card size="lg">
  {/* These all inherit "lg" size */}
  <Card.Header>
    <Heading>Title</Heading>
    <Text>Subtitle</Text>
  </Card.Header>
  <Card.Body>
    <Text>Content</Text>
    <Button>Action</Button> {/* Button is "lg" size */}
  </Card.Body>
</Card>
```

Implementation:

```tsx
function Button({ size, ...props }) {
  // Get inherited size or use explicitly provided size
  const [componentSize, setComponentSize] = useComponentSize(size);
  
  // Update context for children
  useEffect(() => {
    if (size) {
      setComponentSize(size);
    }
  }, [size, setComponentSize]);
  
  // Use componentSize for styling
  // ...
}
```

## Installation & Usage

```bash
# Install the library
npm install @kookie-ui/core

# Install Radix UI primitives
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu # etc.

# Add to your app
import { ThemeProvider } from '@kookie-ui/core';

function App() {
  return (
    <ThemeProvider
      color="blue"
      gray="slate"
      size="sm"
      style="modern"
    >
      <YourApp />
    </ThemeProvider>
  );
}
```
