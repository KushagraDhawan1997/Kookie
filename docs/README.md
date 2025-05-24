# Kookie UI Documentation

Welcome to the comprehensive documentation for Kookie UI, a high-performance component library built on a comprehensive token system architecture featuring linearized spacing/dimension tokens and a sophisticated three-layer color system.

## Overview

Kookie UI is designed around the principle of **quality over quantity**, focusing on a small set of well-designed, highly flexible components rather than attempting to cover every possible use case. The library is built on Radix UI primitives and features a comprehensive token system that includes linearized spacing and dimension tokens alongside a revolutionary three-layer color architecture that eliminates code duplication while providing automatic text contrast and seamless theme support.

## Key Features

- **Comprehensive Token Architecture**: Spacing (1-24) + Dimension (1-24 + named) + Three-layer color system
- **Linear Token Naming**: Predictable 1-24 convention for easy memorization and consistent scaling
- **Generated Gap Utilities**: 72 utility classes for consistent layout spacing
- **Automatic Text Contrast**: Smart text color selection based on background brightness
- **18 Radix Colors**: Complete color palette with semantic role mapping
- **Performance Optimized**: ~400 lines of CSS eliminated, 63 total tokens with minimal overhead
- **Type Safety**: Comprehensive TypeScript support with union types
- **Zero Duplication**: Single source of truth for variant, color, and spacing logic

## Architecture Documentation

### Core System Architecture

- **[Architecture Overview](./architecture/architecture.md)** - Complete architectural philosophy and decisions
- **[Token System](./architecture/token-system.md)** - Comprehensive token architecture guide (spacing, dimensions, colors)
- **[Spacing & Dimensions](./architecture/spacing-dimensions.md)** - Detailed spacing and dimension token documentation
- **[Color System](./architecture/color-system.md)** - Color token system and automatic contrast handling

### Component Documentation

- **[Button Component](./architecture/components/button/README.md)** - Complete button system with token integration
- **[Typography Components](./architecture/components/text/README.md)** - Text and heading components with simplified styling
- **[Layout Components](./architecture/components/layout/README.md)** - Box, Flex, and Grid with token-based spacing
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
import { Button, Text, Flex, Box } from "@/components/ui";

// Layout with token-based spacing
<Flex gap={7} direction="column">
  <Box p={5} mb={3}>
    Content with 12px padding and 8px bottom margin
  </Box>

  {/* Automatic text contrast based on color brightness */}
  <Flex gap={3}>
    <Button data-primary-color="yellow" variant="solid">
      Yellow (auto dark text)
    </Button>
    <Button data-primary-color="blue" variant="solid">
      Blue (auto light text)
    </Button>
  </Flex>

  {/* Semantic color usage */}
  <Flex direction="column" gap={2}>
    <Text data-primary-color="primary">Primary branded text</Text>
    <Text data-primary-color="error">Error message</Text>
    <Text data-primary-color="success">Success confirmation</Text>
  </Flex>
</Flex>;
```

## Comprehensive Token System

### Spacing and Dimension Tokens

#### Spacing Tokens (Linear 1-24)

Consistent spacing values with linear naming and non-linear values optimized for UI design:

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

#### Generated Gap Utilities

72 automatically generated utility classes for consistent layout spacing:

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

### Three-Layer Color Architecture

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
}
```

### Benefits

- **Linear Token Access**: Predictable O(1) token lookup with 1-24 naming
- **No Selector Duplication**: Variant logic exists only in token files
- **Automatic Contrast**: Text colors adapt to background brightness
- **Easy Extensibility**: Add variants by modifying token files only
- **Performance**: 63 total tokens (24 spacing + 39 dimension) with ~2KB overhead
- **Memory Efficiency**: Generated utilities provide consistent spacing patterns
- **Type Safety**: TypeScript prevents invalid token combinations

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

## Layout System

### Token-Based Spacing

Components accept numeric props that map directly to spacing and dimension tokens:

```tsx
import { Box, Flex, Grid } from "@/components/ui";

// Box with spacing and sizing tokens
<Box
  p={7}              // padding: var(--space-7) /* 16px */
  m={5}              // margin: var(--space-5) /* 12px */
  width={12}         // width: var(--size-12) /* 64px */
  height={8}         // height: var(--size-8) /* 32px */
>
  Content with token-based dimensions
</Box>

// Flex layout with gap tokens
<Flex
  gap={5}            // gap: var(--space-5) /* 12px */
  direction="column"
  p={7}              // padding: var(--space-7) /* 16px */
>
  <div>Item 1</div>
  <div>Item 2 (12px gap from item 1)</div>
  <div>Item 3 (12px gap from item 2)</div>
</Flex>

// Grid with responsive spacing
<Grid
  columns={3}
  gap={3}            // gap: var(--space-3) /* 8px */
  p={9}              // padding: var(--space-9) /* 24px */
>
  <Box>Grid item 1</Box>
  <Box>Grid item 2</Box>
  <Box>Grid item 3</Box>
</Grid>
```

### Layout Containers

```tsx
// Modal-sized containers using named dimension tokens
<Box width="md" p={7}>      {/* width: 448px, padding: 16px */}
  Default modal content
</Box>

<Box width="4xl" p={11}>    {/* width: 896px, padding: 32px */}
  Large content area
</Box>

<Box maxWidth="5xl" p={15}> {/* max-width: 1024px, padding: 48px */}
  Desktop content container
</Box>
```

### Margin System (When Gaps Aren't Suitable)

```tsx
// Margin props for special cases
<Box
  mx={7} // margin-left/right: var(--space-7) /* 16px */
  my={5} // margin-top/bottom: var(--space-5) /* 12px */
  mt={3} // margin-top: var(--space-3) /* 8px */
  mb={9} // margin-bottom: var(--space-9) /* 24px */
>
  Content with specific margin needs
</Box>
```

**Best Practice**: Prefer Flex/Grid gaps for spacing between siblings, use margins only for special cases.

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
