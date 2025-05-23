# Button Component

The Button component is a versatile UI element that supports multiple variants, colors, sizes, and modern styling with gradients and shadows.

## Usage

```tsx
import { Button } from "@/components/ui/button";

// Primary action
<Button>Save Changes</Button>

// Secondary action
<Button variant="tinted">Cancel</Button>

// Optional action
<Button variant="outline">Learn More</Button>

// Modern gradient style
<Button variant="modern">Get Started</Button>
```

## API

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "modern" | "solid" | "tinted" | "outline" | "ghost" | "link";
  color?: SemanticColorKey | ThemeColor;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  roundness?: ThemeRoundness;
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}
```

## Design Decisions

- **Modern variant**: Uses gradients with drop shadows and smooth alpha overlays on hover/active
- **Consistent transitions**: All interactive states use 0.25s ease transitions
- **Semantic colors**: Uses theme-based color variables for consistency
- **Alpha overlays**: Hover/active states use semantic alpha variables (e.g., `--primary-a9`, `--primary-a11`)
- **Drop shadows**: Modern variant includes `--shadow-xl` by default, transitions to `--shadow-lg` on hover and `--shadow-md` on active

## Size System

Button sizes combine physical dimensions with carefully mapped typography:

| Button Size | Height | Text Size | Use Case                    |
| ----------- | ------ | --------- | --------------------------- |
| 1 (xs)      | 16px   | 1         | Micro UIs, icon buttons     |
| 2 (sm)      | 24px   | 1         | Compact UIs, tight spaces   |
| 3 (md)      | 32px   | 2         | Default size, most contexts |
| 4 (lg)      | 40px   | 2         | Large CTAs, forms           |
| 5 (xl)      | 48px   | 2         | Hero sections, marketing    |
| 6 (2xl)     | 64px   | 3         | Prominent hero/marketing    |

The text size mapping is intentionally non-linear to maintain visual hierarchy and readability:

- Sizes 1 and 2 use the smallest text for compact UIs
- Sizes 3 and 4 use a medium text size for better legibility
- Sizes 5 and 6 use larger text sizes for hero/marketing buttons

## Variants

| Variant | Use Case          | Styling                                  |
| ------- | ----------------- | ---------------------------------------- |
| Modern  | Premium actions   | Gradient bg, drop shadow, alpha overlays |
| Solid   | Primary actions   | Solid bg (scale-9), light text           |
| Tinted  | Secondary actions | Light bg (scale-3), dark text (scale-12) |
| Outline | Optional actions  | Border (scale-5), dark text (scale-12)   |
| Ghost   | Toolbar actions   | Dark text (scale-12) only                |
| Link    | Inline actions    | Dark text (scale-12), underline on hover |

## Color System

The button supports semantic colors that map to your theme:

- **Primary**: Main brand color (customizable via ThemeProvider)
- **Gray**: Neutral color for secondary actions
- **Error**: For destructive actions
- **Success**: For positive confirmations
- **Warning**: For cautionary actions

Colors are set via the theme provider and use semantic CSS variables:

```tsx
<ThemeProvider primary="blue" gray="sage" error="red" success="green" warning="amber">
  <Button color="primary">Primary</Button>
  <Button color="error">Delete</Button>
  <Button color="success">Confirm</Button>
</ThemeProvider>
```

## Modern Variant Details

The modern variant provides a premium appearance with:

- **Gradient backgrounds**: `linear-gradient(to bottom right, var(--color-9), var(--color-11))`
- **Drop shadows**: Scales from `--shadow-xl` (default) → `--shadow-lg` (hover) → `--shadow-md` (active)
- **Alpha overlays**: Smooth transitions using `box-shadow: inset` with alpha variables
- **Smooth transitions**: All effects use 0.25s ease transitions

## Examples

### Action Hierarchy

```tsx
<Flex gap={4}>
  <Button variant="modern">Get Started</Button>
  <Button>Save</Button>
  <Button variant="tinted">Preview</Button>
  <Button variant="outline">Cancel</Button>
</Flex>
```

### Toolbar

```tsx
<Flex gap={2}>
  <Button variant="ghost">Copy</Button>
  <Button variant="ghost">Paste</Button>
  <Button variant="ghost">Delete</Button>
</Flex>
```

### Color Variations

```tsx
<Flex gap={4}>
  <Button color="primary">Primary</Button>
  <Button color="error">Delete</Button>
  <Button color="success">Confirm</Button>
  <Button color="warning">Warning</Button>
</Flex>
```

## Roundness

The Button component supports a `roundness` prop, which controls how rounded the button appears. This prop accepts the same values as the theme: `"none" | "sm" | "md" | "lg" | "xl" | "full"`.

- By default, the button uses the theme's roundness (from the ThemeProvider).
- You can override the roundness for any button by passing the `roundness` prop.
- The roundness system works just like color: the closest `data-roundness` attribute (on the button or root) determines the roundness factor.

### Usage Example

```tsx
<Button>Theme roundness</Button>
<Button roundness="lg">Large roundness</Button>
<Button roundness="none">Square button</Button>
<Button roundness="full">Pill button</Button>
```

### How it works

- The button sets a `data-roundness` attribute (from the prop or theme).
- The CSS uses `[data-roundness]` to set `--theme-radius-factor`.
- Border-radius is calculated as:
  ```css
  border-radius: calc(var(--radius- *) * var(--theme-radius-factor, 1));
  ```
- This allows for both global and per-button roundness control, using only CSS.
