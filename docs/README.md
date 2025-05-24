# Kookie UI Documentation

Welcome to the comprehensive documentation for Kookie UI, a high-performance component library built on a sophisticated three-layer token system architecture.

## Overview

Kookie UI is designed around the principle of **quality over quantity**, focusing on a small set of well-designed, highly flexible components rather than attempting to cover every possible use case. The library is built on Radix UI primitives and features a revolutionary three-layer token system that eliminates code duplication while providing automatic text contrast and seamless theme support.

## Key Features

- **Three-Layer Token Architecture**: Reference → System → Component tokens for scalable design systems
- **Automatic Text Contrast**: Smart text color selection based on background brightness
- **18 Radix Colors**: Complete color palette with semantic role mapping
- **Performance Optimized**: ~400 lines of CSS eliminated through token abstraction
- **Type Safety**: Comprehensive TypeScript support with union types
- **Zero Duplication**: Single source of truth for variant and color logic

## Architecture Documentation

### Core System Architecture

- **[Architecture Overview](./architecture/architecture.md)** - Complete architectural philosophy and decisions
- **[Three-Layer Token System](./architecture/token-system.md)** - Comprehensive token architecture guide
- **[Color System](./architecture/color-system.md)** - Color token system and automatic contrast handling

### Component Documentation

- **[Button Component](./architecture/components/button/README.md)** - Complete button system with token integration
- **[Typography Components](./architecture/components/text/README.md)** - Text and heading components with simplified styling
- **[Component Overview](./architecture/components/README.md)** - General component guidelines and patterns

## Quick Start

### Installation

```bash
npm install kookie-ui
# or
yarn add kookie-ui
```

### Basic Setup

```tsx
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function App() {
  return (
    <ThemeProvider
      primary="purple" // Main brand color (18 options)
      gray="sage" // Gray variant (5 options)
      error="crimson" // Error color (red spectrum)
      success="teal" // Success color (green spectrum)
      warning="orange" // Warning color (warm spectrum)
      size={3} // Default component size (1-6)
      roundness="lg" // Border roundness (none to full)
    >
      <YourApp />
    </ThemeProvider>
  );
}
```

### Component Usage Examples

```tsx
import { Button, Text, Flex } from "@/components/ui";

// Automatic text contrast based on color brightness
<Flex gap={3}>
  <Button data-primary-color="yellow" variant="solid">
    Yellow (auto dark text)
  </Button>
  <Button data-primary-color="blue" variant="solid">
    Blue (auto light text)
  </Button>
</Flex>

// Semantic color usage
<Flex direction="column" gap={2}>
  <Text data-primary-color="primary">Primary branded text</Text>
  <Text data-primary-color="error">Error message</Text>
  <Text data-primary-color="success">Success confirmation</Text>
</Flex>
```

## Token System Overview

### Three-Layer Architecture

**Layer 1: Reference Tokens** (`styles/tokens/reference/colors/`)

- Map semantic roles to actual Radix colors
- Define contextual text colors per color
- Handle bright vs dark color text selection

**Layer 2: System Tokens** (`styles/tokens/system/colors/system.css`)

- UI-focused abstractions following Radix 12-step scale
- Semantic meaning for backgrounds, borders, text
- Steps 1-2: App backgrounds, 3-5: Components, 6-8: Borders, 9-10: Solid, 11-12: Text

**Layer 3: Component Tokens** (`components/ui/*/component-tokens.css`)

- Component-specific property mappings
- Map to appropriate system tokens
- Clean component CSS abstractions

### Benefits

- **No Selector Duplication**: Variant logic exists only in token files
- **Automatic Contrast**: Text colors adapt to background brightness
- **Easy Extensibility**: Add variants by modifying token files only
- **Performance**: ~400 lines of CSS removed through abstraction
- **Type Safety**: TypeScript prevents invalid color combinations

## Color System

### Available Colors

**18 Radix Colors with Automatic Text Contrast**:

- **Cool**: blue, purple, pink, violet, iris, indigo
- **Blue-Green**: cyan, sky, teal
- **Green**: green, lime
- **Warm**: amber, yellow, orange
- **Red**: red, ruby, crimson

**5 Gray Variants**: sage, slate, mauve, olive, sand

### Contextual Text Handling

**Bright Colors (Dark Text)**: yellow, lime, amber, sky, cyan
**Dark Colors (Light Text)**: blue, red, purple, green, all others

```tsx
// Automatic text contrast - no manual coordination needed
<Button data-primary-color="yellow" variant="solid">
  Yellow (automatically gets dark text)
</Button>
<Button data-primary-color="blue" variant="solid">
  Blue (automatically gets light text)
</Button>
```

## Performance Characteristics

### CSS Bundle Optimization

- **Button Component**: Reduced from 500+ to ~120 lines of CSS
- **Text Component**: Single rule handles all color variants
- **Reusable Tokens**: Component token files provide abstractions
- **Zero Duplication**: Single source of truth for variant logic

### Runtime Performance

- **CSS Variables**: Instant theme switching with no JavaScript overhead
- **Native Cascade**: Browser-optimized token resolution
- **Minimal Rerenders**: Jotai atoms provide granular theme updates

## Component Examples

### Button Variants with Automatic Colors

```tsx
import { Button, Flex } from "@/components/ui";

<Flex gap={3}>
  <Button variant="solid" data-primary-color="primary">
    Primary
  </Button>
  <Button variant="outline" data-primary-color="primary">
    Outline
  </Button>
  <Button variant="ghost" data-primary-color="primary">
    Ghost
  </Button>
  <Button variant="tinted" data-primary-color="primary">
    Tinted
  </Button>
  <Button variant="link" data-primary-color="primary">
    Link
  </Button>
  <Button variant="modern" data-primary-color="primary">
    Modern
  </Button>
</Flex>;
```

### Typography Hierarchy

```tsx
import { Heading, Text, Flex } from "@/components/ui";

<Flex direction="column" gap={4}>
  <Heading size={8} weight="bold" data-primary-color="primary">
    Main Title
  </Heading>
  <Text size={4} data-primary-color="primary">
    Subtitle with brand color
  </Text>
  <Text size={3}>Body text with optimal readability</Text>
  <Text size={2} data-primary-color="gray">
    Supporting metadata
  </Text>
</Flex>;
```

### Semantic Color Usage

```tsx
import { Button, Text, Flex } from "@/components/ui";

<Flex direction="column" gap={3}>
  <Button data-primary-color="success" variant="solid">
    Save Changes
  </Button>
  <Button data-primary-color="error" variant="outline">
    Delete Item
  </Button>
  <Button data-primary-color="warning" variant="tinted">
    Proceed with Caution
  </Button>

  <Text data-primary-color="success">✅ Operation completed successfully</Text>
  <Text data-primary-color="error">❌ An error occurred</Text>
  <Text data-primary-color="warning">⚠️ Please review before continuing</Text>
</Flex>;
```

## Development Guide

### Adding New Colors

1. **Create reference file**: `styles/tokens/reference/colors/newcolor-reference.css`
2. **Update TypeScript types**: Add to `ThemeColor` union in `theme-types.ts`
3. **Automatic support**: All components immediately work with new color

### Extending Components

1. **Define component tokens**: Map properties to system tokens
2. **Use component tokens**: Clean CSS with token references only
3. **Automatic theme support**: Works with all colors and contexts

### Custom Variants

```css
/* Add new variant by defining component tokens */
[data-variant="custom"][data-primary-color] {
  --button-bg: var(--ui-bg-component);
  --button-text: var(--text-on-tinted);
  --button-border: var(--ui-border-subtle);
}
```

## Migration Benefits

### From Traditional Approaches

**Before**: Manual color coordination, hundreds of CSS rules

```css
[data-variant="solid"][data-color="blue"] {
  background: var(--blue-9);
  color: var(--blue-1);
}
[data-variant="solid"][data-color="yellow"] {
  background: var(--yellow-9);
  color: var(--yellow-12);
}
/* ...50+ more rules */
```

**After**: Token abstraction with automatic contrast

```css
.button-root {
  background: var(--button-bg);
  color: var(--button-text);
}
/* Single rule handles all variants and colors */
```

### Benefits

1. **Dramatic code reduction**: ~400 lines of CSS eliminated
2. **Automatic contrast**: No manual text color coordination
3. **Easy maintenance**: Single edit updates all variants
4. **Type safety**: Compile-time validation of color combinations
5. **Theme consistency**: Semantic roles ensure design coherence

## API Reference

### Core Components

- **[Button](./architecture/components/button/README.md)**: Multi-variant button with automatic contrast
- **[Text & Heading](./architecture/components/text/README.md)**: Typography with semantic color system
- **Box & Flex**: Layout primitives with token-based spacing
- **Grid**: CSS Grid layouts with responsive capabilities

### Theme System

- **ThemeProvider**: Central theme management with Jotai
- **useTheme**: Programmatic theme control hook
- **ThemePlayground**: Visual theme editor component

### Token System

- **Reference Tokens**: Color mappings and contextual text
- **System Tokens**: UI abstraction following Radix scale
- **Component Tokens**: Component-specific property mappings

## Best Practices

### Semantic Color Usage

1. **Use semantic roles**: `primary`, `error`, `success`, `warning`
2. **Let tokens handle contrast**: Don't manually coordinate text colors
3. **Theme integration**: Use ThemeProvider for brand color control
4. **Type safety**: Rely on TypeScript for valid combinations

### Component Development

1. **Define component tokens**: Map to appropriate system tokens
2. **Use tokens in CSS**: Never hardcode variant/color logic
3. **Test all colors**: Verify automatic contrast works correctly
4. **Follow patterns**: Use established token patterns for consistency

### Performance Optimization

1. **Leverage CSS variables**: Instant theme switching
2. **Minimize CSS**: Use token abstraction to reduce bundle size
3. **Avoid duplication**: Single source of truth in token files
4. **Type checking**: Compile-time validation prevents runtime errors

## Future Roadmap

### Planned Enhancements

- **Design Token Studio Integration**: Visual token management
- **Runtime Theme Generation**: Dynamic palette generation
- **Advanced Typography**: Modular type scale system
- **Component Variants API**: Programmatic variant creation

### Extensibility

The three-layer architecture is designed to accommodate future enhancements without breaking existing components or requiring migration. The token system provides a stable foundation for design system evolution.

## Contributing

The documentation is continuously updated to reflect the latest architectural decisions and patterns. When contributing new components or features, please ensure they follow the three-layer token system architecture for consistency and maintainability.

For detailed implementation guidance, see the individual architecture documentation files linked above.
