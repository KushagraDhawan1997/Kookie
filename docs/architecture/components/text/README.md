# Typography Components

The typography system consists of two main components: `Text` and `Heading`. Both components share similar APIs but have different defaults and use cases.

## Text Component

### Usage

```tsx
import { Text } from "@/components/ui/text";

// Basic usage
<Text>Default text</Text>

// With styling
<Text
  size={4}
  weight="semibold"
  color="primary"
  variant="accent"
  align="center"
>
  Styled text
</Text>

// Truncated text
<Text truncate className="max-w-xs">
  This text will be truncated...
</Text>

// Using asChild
<Text asChild size={4} color="primary">
  <a href="/somewhere">Styled link</a>
</Text>
```

### API

```tsx
interface TextProps {
  as?: keyof HTMLElementTagNameMap;
  variant?: "default" | "muted" | "accent";
  color?: SemanticColorKey | ThemeColor | "inherit";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  align?: "left" | "center" | "right" | "justify";
  truncate?: boolean;
  asChild?: boolean;
  className?: string;
}
```

## Heading Component

### Usage

```tsx
import { Heading } from "@/components/ui/text";

// Basic usage
<Heading>Page Title</Heading>

// With styling
<Heading
  as="h2"
  size={6}
  weight="bold"
  color="primary"
  variant="accent"
>
  Section Heading
</Heading>

// Using asChild
<Heading asChild size={4}>
  <a href="#section">Linked Heading</a>
</Heading>
```

### API

```tsx
interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "default" | "muted" | "accent";
  color?: SemanticColorKey | ThemeColor | "inherit";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  align?: "left" | "center" | "right" | "justify";
  truncate?: boolean;
  asChild?: boolean;
  className?: string;
}
```

## Design Decisions

### Text Component

- Defaults to `span` element
- Uses size 3 by default
- Normal weight by default
- Supports all HTML text elements
- Inherits theme colors

### Heading Component

- Defaults to `h1` element
- Uses size 6 by default
- Bold weight by default
- Restricted to h1-h6 elements
- Larger type scale than Text

## Variants

| Variant | Use Case        | Styling  |
| ------- | --------------- | -------- |
| default | Primary text    | scale-12 |
| muted   | Secondary text  | scale-10 |
| accent  | Emphasized text | scale-11 |

## Size Scale

The size scale is shared between Text and Heading but produces different results:

- Text: Uses a smaller scale suitable for body text
- Heading: Uses a larger scale with adjusted line heights and tracking

Example size comparison:

```tsx
<Flex direction="column" gap={4}>
  <Text size={4}>Size 4 Text</Text>
  <Heading size={4}>Size 4 Heading</Heading>
</Flex>
```

## Best Practices

1. Use Text for:

   - Body copy
   - Labels
   - Inline text
   - UI elements

2. Use Heading for:

   - Page titles
   - Section headers
   - Content hierarchy

3. Avoid using margins:
   - Control spacing with Flex/Grid
   - Use gap for consistent spacing
   - Nest related elements
