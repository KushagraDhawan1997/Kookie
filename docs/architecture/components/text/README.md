# Typography Components

The typography system consists of two main components: `Text` and `Heading`. Both components use the three-layer token system for simplified styling and automatic color support.

## Text Component

### Overview

The Text component demonstrates the power of component tokens - it uses a single `--text-color` token that automatically resolves to the appropriate semantic color based on context.

### Usage

```tsx
import { Text } from "@/components/ui/text";

// Basic usage - uses --text-color component token
<Text>Default text</Text>

// Semantic color usage
<Text data-primary-color="primary">Primary themed text</Text>
<Text data-primary-color="error">Error text</Text>
<Text data-primary-color="success">Success text</Text>
<Text data-primary-color="warning">Warning text</Text>

// Direct color usage
<Text data-primary-color="purple">Purple text</Text>
<Text data-primary-color="amber">Amber text</Text>

// With styling
<Text
  size={4}
  weight="semibold"
  data-primary-color="primary"
  align="center"
>
  Styled text
</Text>

// Truncated text
<Text truncate className="max-w-xs">
  This text will be truncated...
</Text>

// Using asChild
<Text asChild size={4} data-primary-color="primary">
  <a href="/somewhere">Styled link</a>
</Text>
```

### API

```tsx
interface TextProps {
  as?: keyof HTMLElementTagNameMap;
  "data-primary-color"?: SemanticColorKey | ThemeColor | "inherit";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  align?: "left" | "center" | "right" | "justify";
  wrap?: "nowrap" | "pre" | "pre-wrap" | "pre-line";
  truncate?: boolean;
  asChild?: boolean;
  className?: string;
}
```

## Heading Component

### Usage

```tsx
import { Heading } from "@/components/ui/text";

// Basic usage - inherits text token system
<Heading>Page Title</Heading>

// With semantic colors
<Heading
  as="h2"
  size={6}
  weight="bold"
  data-primary-color="primary"
>
  Section Heading
</Heading>

// Using asChild
<Heading asChild size={4} data-primary-color="accent">
  <a href="#section">Linked Heading</a>
</Heading>
```

### API

```tsx
interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  "data-primary-color"?: SemanticColorKey | ThemeColor | "inherit";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  align?: "left" | "center" | "right" | "justify";
  wrap?: "nowrap" | "pre" | "pre-wrap" | "pre-line";
  truncate?: boolean;
  asChild?: boolean;
  className?: string;
}
```

## Component Token System

### Text Component Tokens

The text component uses a simple token system that maps to semantic color roles:

```css
/* Default text color */
[data-primary-color] {
  --text-color: var(--text-high-contrast); /* Maps to step 12 */
}

/* Semantic color contexts */
[data-primary-color="success"] {
  --text-color: var(--text-success-high-contrast);
}

[data-primary-color="error"] {
  --text-color: var(--text-error-high-contrast);
}

[data-primary-color="warning"] {
  --text-color: var(--text-warning-high-contrast);
}

/* Primary color context */
[data-primary-color="primary"] {
  --text-color: var(--text-high-contrast); /* Uses theme primary */
}
```

### Simplified CSS

The component CSS is dramatically simplified using the component token:

```css
/* Single rule handles all color variants */
.text-root {
  color: var(--text-color);
}

/* Size and styling remain in component CSS */
.text-size-3 {
  font-size: var(--font-size-3);
  line-height: var(--leading-relaxed);
  letter-spacing: var(--tracking-normal);
}
```

### Automatic Theme Integration

Text colors automatically adapt to theme changes:

```tsx
<ThemeProvider primary="purple" success="teal" error="crimson">
  <Text data-primary-color="primary">Purple text (theme primary)</Text>
  <Text data-primary-color="success">Teal text (theme success)</Text>
  <Text data-primary-color="error">Crimson text (theme error)</Text>
</ThemeProvider>
```

## Design Decisions

### Component Defaults

**Text Component**:

- Defaults to `span` element
- Uses size 3 by default (readable body text)
- Normal weight by default
- Supports all HTML text elements
- Uses `--text-high-contrast` for maximum readability

**Heading Component**:

- Defaults to `h1` element
- Uses size 6 by default (prominent heading size)
- Bold weight by default
- Restricted to h1-h6 elements for semantic HTML
- Inherits same color token system as Text

### Token Benefits

1. **Consistent Coloring**: All text uses the same semantic color system
2. **Theme Integration**: Automatic adaptation to theme color changes
3. **Reduced CSS**: Single rule handles all color variants
4. **Type Safety**: TypeScript ensures valid color combinations
5. **Easy Extension**: New colors automatically work with text components

## Size Scale System

The typography scale uses a sophisticated size and spacing system optimized for readability:

### Size Mapping

| Size | Font Size   | Line Height     | Letter Spacing | Use Case           |
| ---- | ----------- | --------------- | -------------- | ------------------ |
| 1    | Extra small | Normal (1.5)    | Wide           | Captions, metadata |
| 2    | Small       | Normal (1.5)    | Normal         | Small UI text      |
| 3    | Base        | Relaxed (1.625) | Normal         | Standard body text |
| 4    | Large       | Relaxed (1.625) | Normal         | Large body text    |
| 5    | Extra large | Normal (1.5)    | Normal         | Sub-headings       |
| 6    | 2xl         | Snug (1.375)    | Tight          | Section headings   |
| 7    | 3xl         | Snug (1.375)    | Tight          | Page headings      |
| 8    | 4xl         | Tight (1.25)    | Tighter        | Display text       |
| 9    | 5xl         | Tight (1.25)    | Tighter        | Large display      |
| 10   | 6xl         | Custom (1.2)    | Tighter        | Hero headings      |
| 11   | 7xl         | Custom (1.15)   | Tighter        | Large hero         |
| 12   | 8xl         | Custom (1.1)    | Tighter        | Massive display    |

### Responsive Typography

All sizes use token-based values for consistent scaling:

```css
.text-size-3 {
  font-size: var(--font-size-3); /* Token-based size */
  line-height: var(--leading-relaxed); /* Optimal for body text */
  letter-spacing: var(--tracking-normal); /* Balanced spacing */
}
```

## Color Usage Patterns

### Semantic Color Usage

```tsx
// Use semantic roles for consistent theming
<Text data-primary-color="primary">Primary brand text</Text>
<Text data-primary-color="error">Error message</Text>
<Text data-primary-color="success">Success confirmation</Text>
<Text data-primary-color="warning">Warning message</Text>
```

### Direct Color Usage

```tsx
// Use specific colors for design purposes
<Text data-primary-color="purple">Purple accent text</Text>
<Text data-primary-color="amber">Amber highlight text</Text>
<Text data-primary-color="teal">Teal decorative text</Text>
```

### Color Inheritance

```tsx
// Inherit color from parent context
<Text data-primary-color="inherit">Inherits parent color</Text>
```

## Typography Hierarchy Examples

### Content Hierarchy

```tsx
<Flex direction="column" gap={4}>
  <Heading size={8} weight="bold" data-primary-color="primary">
    Main Page Title
  </Heading>
  <Text size={4} data-primary-color="primary">
    Subtitle or introduction text
  </Text>
  <Heading size={6} weight="semibold">
    Section Heading
  </Heading>
  <Text size={3}>Body paragraph text with optimal readability</Text>
  <Text size={2} data-primary-color="gray">
    Supporting information or metadata
  </Text>
</Flex>
```

### Article Layout

```tsx
<article>
  <Heading size={7} weight="bold">
    Article Title
  </Heading>
  <Text size={2} data-primary-color="gray">
    Published on March 15, 2024
  </Text>

  <Text size={3}>Main article content with comfortable reading size and line height. This size is optimized for extended reading sessions.</Text>

  <Heading size={5} weight="semibold">
    Subsection
  </Heading>
  <Text size={3}>More article content continues here.</Text>
</article>
```

### UI Text Examples

```tsx
<Flex direction="column" gap={3}>
  <Text size={1} data-primary-color="gray">
    Field label
  </Text>
  <Text size={3}>Field value or content</Text>

  <Text size={2} data-primary-color="error">
    Validation error message
  </Text>

  <Text size={2} data-primary-color="success">
    Success confirmation
  </Text>
</Flex>
```

## Performance Benefits

### Reduced CSS Complexity

- **Before**: Multiple color classes and variant combinations
- **After**: Single `--text-color` token handles all variants
- **Result**: Simplified CSS with automatic theme support

### Runtime Efficiency

- **CSS Variables**: Instant color changes with theme switching
- **Single Token**: Minimal CSS cascade for color resolution
- **Type Safety**: Compile-time checking of color combinations

## Advanced Usage

### Custom Text Colors

You can extend the text token system for custom colors:

```css
/* Custom text color tokens */
[data-primary-color="brand"] {
  --text-color: var(--brand-11); /* Custom brand color */
}
```

### Contextual Text Styling

Use system tokens for contextual text in custom components:

```css
/* Custom component with text tokens */
.custom-component {
  color: var(--text-high-contrast); /* Default high contrast */
}

.custom-component[data-muted] {
  color: var(--text-medium-contrast); /* Muted context */
}
```

## Migration Guide

### From Legacy Approach

```tsx
// ❌ Old approach with explicit color classes
<Text className="text-blue-600">Blue text</Text>
<Text className="text-red-500">Red text</Text>

// ✅ New approach with semantic tokens
<Text data-primary-color="primary">Primary text</Text>
<Text data-primary-color="error">Error text</Text>
```

### Benefits of Migration

1. **Automatic theme support**: Text colors adapt to theme changes
2. **Consistent semantics**: Use color roles instead of specific colors
3. **Type safety**: TypeScript prevents invalid color combinations
4. **Simplified CSS**: Single token handles all color logic

## Best Practices

### Semantic Color Usage

1. **Use semantic roles**: Prefer `primary`, `error`, `success`, `warning` over specific colors
2. **Consistent hierarchy**: Use size scale for visual hierarchy
3. **Readable contrast**: Default tokens ensure WCAG compliance
4. **Theme integration**: Let the theme provider control brand colors

### Layout and Spacing

1. **Avoid margins**: Control spacing with Flex/Grid gaps
2. **Consistent spacing**: Use token-based gaps and padding
3. **Nest related elements**: Group related text in containers
4. **Responsive design**: Use responsive containers, not responsive text

### Accessibility

1. **Semantic HTML**: Use appropriate heading levels (h1-h6)
2. **Color independence**: Don't rely solely on color for meaning
3. **Contrast ratios**: Token system ensures WCAG AA compliance
4. **Text alternatives**: Provide context for color-coded information

## Future Enhancements

### Planned Features

- **Dynamic typography**: Responsive text sizing based on viewport
- **Advanced hierarchy**: Automatic heading level management
- **Content-aware scaling**: Text size adaptation based on content length
- **Enhanced tokens**: Additional contextual text tokens for specialized use cases

The typography system's token-based architecture provides a solid foundation for these future enhancements while maintaining backward compatibility.
