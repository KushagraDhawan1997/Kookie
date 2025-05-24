# Button Component

The Button component is a versatile UI element that showcases the power of Kookie's three-layer token system. It supports multiple variants, automatic text contrast, and works seamlessly with all 18 theme colors.

## Overview

The Button component is built using the three-layer token architecture:

- **Layer 1**: Color reference tokens provide semantic color mappings and contextual text
- **Layer 2**: System tokens abstract UI concepts (solid backgrounds, borders, etc.)
- **Layer 3**: Component tokens map button properties to system tokens

This architecture eliminates code duplication and provides automatic color support for all variants.

## Usage

```tsx
import { Button } from "@/components/ui/button";

// Primary action - uses theme primary color
<Button>Save Changes</Button>

// Secondary action - automatic contrast
<Button variant="tinted">Cancel</Button>

// Optional action
<Button variant="outline">Learn More</Button>

// Modern gradient style
<Button variant="modern">Get Started</Button>

// Semantic colors with automatic text contrast
<Button data-primary-color="warning">Warning (auto dark text on bright bg)</Button>
<Button data-primary-color="error">Error (auto light text on dark bg)</Button>
```

## API

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost" | "tinted" | "link" | "modern";
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  roundness?: ThemeRoundness;
  "data-primary-color"?: ThemeColor | SemanticColorKey;
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}
```

## Three-Layer Token Architecture

### Component Tokens

The button uses component tokens that automatically map to appropriate system tokens:

```css
/* Button component tokens */
[data-variant="solid"][data-primary-color] {
  --button-bg: var(--ui-bg-solid); /* Maps to step 9 */
  --button-bg-hover: var(--ui-bg-solid-hover); /* Maps to step 10 */
  --button-text: var(--text-on-solid); /* Auto light/dark per color */
  --button-border: transparent;
}

[data-variant="outline"][data-primary-color] {
  --button-bg: transparent;
  --button-bg-hover: var(--ui-bg-component);
  --button-text: var(--text-high-contrast);
  --button-border: var(--ui-border-interactive);
  --button-border-hover: var(--ui-border-strong);
}
```

### Simplified CSS

The component CSS is dramatically simplified using component tokens:

```css
/* Clean component styles using tokens */
.button-root {
  background: var(--button-bg);
  color: var(--button-text);
  /* All variant/color logic handled by tokens */
}

.button-root:hover {
  background: var(--button-bg-hover);
}
```

### Automatic Color Support

Adding new colors requires no changes to button CSS - they automatically work:

```tsx
// If "newcolor" is added to the type system, it immediately works
<Button data-primary-color="newcolor" variant="solid">
  New Color Button (automatic text contrast)
</Button>
```

## Automatic Text Contrast

The button automatically selects appropriate text colors based on background brightness:

### Bright Colors (Dark Text)

- **Yellow**: Dark text (`--yellow-12`) on yellow solid background
- **Lime**: Dark text (`--lime-12`) on lime solid background
- **Amber**: Dark text (`--amber-12`) on amber solid background
- **Sky**: Dark text (`--sky-12`) on sky solid background
- **Cyan**: Dark text (`--cyan-12`) on cyan solid background

### Dark Colors (Light Text)

- **Blue**: Light text (`--blue-1`) on blue solid background
- **Red**: Light text (`--red-1`) on red solid background
- **Purple**: Light text (`--purple-1`) on purple solid background
- **Green**: Light text (`--green-1`) on green solid background
- All other colors: Light text (`step-1`)

### Example

```tsx
<Flex gap={3}>
  <Button data-primary-color="yellow" variant="solid">
    Yellow (auto dark text)
  </Button>
  <Button data-primary-color="blue" variant="solid">
    Blue (auto light text)
  </Button>
</Flex>
```

## Size System

Button sizes combine physical dimensions with carefully mapped typography:

| Size | Height | Padding | Border Radius | Use Case                    |
| ---- | ------ | ------- | ------------- | --------------------------- |
| 1    | 16px   | 0 8px   | Small         | Micro UIs, icon buttons     |
| 2    | 24px   | 0 12px  | Medium        | Compact UIs, tight spaces   |
| 3    | 32px   | 0 16px  | Large         | Default size, most contexts |
| 4    | 40px   | 0 20px  | Large         | Large CTAs, forms           |
| 5    | 48px   | 0 24px  | Extra Large   | Hero sections, marketing    |
| 6    | 64px   | 0 28px  | Extra Large   | Prominent hero/marketing    |

All sizes use token-based values and responsive radius calculations:

```css
.button-size-3 {
  height: var(--size-8);
  padding: 0 var(--size-4);
  border-radius: calc(var(--radius-lg) * var(--theme-radius-factor, 1));
}
```

## Variants

### Variant Comparison

| Variant     | Background         | Border               | Text                    | Use Case          |
| ----------- | ------------------ | -------------------- | ----------------------- | ----------------- |
| **solid**   | Step 9 (solid)     | None                 | Light/dark (auto)       | Primary actions   |
| **outline** | Transparent        | Step 7 (interactive) | Step 12 (high contrast) | Secondary actions |
| **ghost**   | Transparent        | None                 | Step 12 (high contrast) | Toolbar actions   |
| **tinted**  | Step 3 (component) | None                 | Step 12 (high contrast) | Subtle actions    |
| **link**    | Transparent        | None                 | Step 12 (high contrast) | Inline actions    |
| **modern**  | Gradient + shadow  | Step 8               | Light/dark (auto)       | Premium actions   |

### Variant Details

#### Solid Variant

- Uses system token `--ui-bg-solid` (step 9)
- Automatic text contrast via `--text-on-solid`
- No border (transparent)
- Pressed state uses filter for darkening effect

#### Outline Variant

- Transparent background with border
- Uses `--ui-border-interactive` (step 7)
- High contrast text (`--text-high-contrast`)
- Hover state adds subtle background tint

#### Modern Variant

- Linear gradient background
- Drop shadow with scaling (`--shadow-xl` → `--shadow-lg` → `--shadow-md`)
- Border for definition
- Filter effects for interaction states

#### Link Variant

- Minimal styling (transparent background, no border)
- Underline on hover
- Zero padding and height for inline usage

## Color System Integration

### Semantic Color Usage

```tsx
// Use semantic roles for consistent theming
<Button data-primary-color="primary">Primary Action</Button>
<Button data-primary-color="error">Delete Item</Button>
<Button data-primary-color="success">Save Changes</Button>
<Button data-primary-color="warning">Proceed with Caution</Button>
```

### Theme Provider Integration

```tsx
<ThemeProvider primary="purple" error="crimson" success="teal" warning="orange">
  <Button data-primary-color="primary">Purple Primary</Button>
  <Button data-primary-color="error">Crimson Error</Button>
  <Button data-primary-color="warning">Orange Warning (auto dark text)</Button>
</ThemeProvider>
```

### Direct Color Usage

```tsx
// Use specific colors when semantic doesn't apply
<Button data-primary-color="violet">Violet Button</Button>
<Button data-primary-color="amber">Amber Button (auto dark text)</Button>
<Button data-primary-color="indigo">Indigo Button (auto light text)</Button>
```

## Performance Benefits

### Reduced CSS Bundle

- **Before token system**: 500+ lines of repetitive variant/color CSS
- **After token system**: ~120 lines of clean component CSS + 270 lines of reusable tokens
- **Net savings**: ~400 lines of CSS eliminated

### Runtime Efficiency

- **CSS Variables**: Instant theme switching with zero JavaScript overhead
- **No Duplication**: Single source of truth for variant logic in token files
- **Browser Optimization**: Native CSS cascade handles token resolution

### Development Benefits

- **Single Edit**: Change variant behavior by editing one token file
- **Automatic Support**: New colors immediately work with all variants
- **Type Safety**: TypeScript prevents invalid color combinations
- **Maintainability**: Clear separation between tokens and component styles

## Examples

### Action Hierarchy

```tsx
<Flex gap={4}>
  <Button variant="modern" data-primary-color="primary">
    Get Started
  </Button>
  <Button variant="solid" data-primary-color="primary">
    Save
  </Button>
  <Button variant="tinted" data-primary-color="primary">
    Preview
  </Button>
  <Button variant="outline" data-primary-color="primary">
    Cancel
  </Button>
</Flex>
```

### State Actions

```tsx
<Flex gap={3}>
  <Button data-primary-color="success" variant="solid">
    Approve
  </Button>
  <Button data-primary-color="error" variant="solid">
    Reject
  </Button>
  <Button data-primary-color="warning" variant="outline">
    Review
  </Button>
</Flex>
```

### Toolbar Actions

```tsx
<Flex gap={2}>
  <Button variant="ghost" data-primary-color="primary">
    Copy
  </Button>
  <Button variant="ghost" data-primary-color="primary">
    Paste
  </Button>
  <Button variant="ghost" data-primary-color="error">
    Delete
  </Button>
</Flex>
```

### Automatic Contrast Demo

```tsx
<Flex direction="column" gap={3}>
  <Flex gap={3}>
    <Button data-primary-color="yellow" variant="solid">
      Yellow (dark text)
    </Button>
    <Button data-primary-color="lime" variant="solid">
      Lime (dark text)
    </Button>
    <Button data-primary-color="cyan" variant="solid">
      Cyan (dark text)
    </Button>
  </Flex>
  <Flex gap={3}>
    <Button data-primary-color="blue" variant="solid">
      Blue (light text)
    </Button>
    <Button data-primary-color="red" variant="solid">
      Red (light text)
    </Button>
    <Button data-primary-color="purple" variant="solid">
      Purple (light text)
    </Button>
  </Flex>
</Flex>
```

## Roundness System

The Button component supports dynamic roundness control through the theme system:

```tsx
// Use theme roundness (from ThemeProvider)
<Button>Default Roundness</Button>

// Override roundness locally
<Button roundness="lg">Large Roundness</Button>
<Button roundness="none">Square Button</Button>
<Button roundness="full">Pill Button</Button>
```

### Implementation

Roundness is handled via CSS variables and data attributes:

```css
[data-roundness="md"] {
  --theme-radius-factor: 1;
}

.button-size-3 {
  border-radius: calc(var(--radius-lg) * var(--theme-radius-factor, 1));
}
```

This enables both global (theme) and local (component) roundness control using only CSS.

## Advanced Usage

### Custom Component Tokens

You can extend the button system by adding new component tokens:

```css
/* Custom variant example */
[data-variant="custom"][data-primary-color] {
  --button-bg: var(--ui-bg-component);
  --button-text: var(--text-on-tinted);
  --button-border: var(--ui-border-subtle);
}
```

### Token Debugging

Use browser dev tools to inspect the token cascade:

```css
/* View resolved component tokens */
.button-root {
  /* These automatically resolve to appropriate values */
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--button-border);
}
```

## Migration from Legacy

The token system is fully backward compatible:

```tsx
// ❌ Old approach (still works)
<Button style={{ backgroundColor: 'var(--blue-9)', color: 'var(--blue-1)' }} />

// ✅ New approach (recommended)
<Button data-primary-color="blue" variant="solid" />
```

The new approach provides automatic contrast, theme consistency, and requires no manual color coordination.
