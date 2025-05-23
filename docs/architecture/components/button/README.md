# Button Component

## Usage

```tsx
import { Button } from "@/components/ui/button";

// Primary action
<Button>Save Changes</Button>

// Secondary action
<Button variant="tinted">Cancel</Button>

// Optional action
<Button variant="outline">Learn More</Button>
```

## API

```tsx
interface ButtonProps {
  variant?: "solid" | "tinted" | "outline" | "ghost" | "link";
  color?: "primary" | "gray" | "error" | "success" | "warning";
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  asChild?: boolean;
}
```

## Design Decisions

- Gray variant uses scale-12 for maximum emphasis in UI hierarchies
- Non-solid variants use scale-12 text for better contrast
- Hover states unified across subtle variants (scale-3 → scale-4)
- Border weight reduced to 1px for refinement

## Size System

Button sizes combine physical dimensions with carefully mapped typography:

| Button Size | Height | Text Size | Use Case                    |
| ----------- | ------ | --------- | --------------------------- |
| 1 (xs)      | 16px   | 1         | Micro UIs, icon buttons     |
| 2 (sm)      | 24px   | 1         | Compact UIs, tight spaces   |
| 3 (md)      | 32px   | 2         | Default size, most contexts |
| 4 (lg)      | 40px   | 2         | Large CTAs, forms           |
| 5 (xl)      | 48px   | 3         | Hero sections, marketing    |
| 6 (2xl)     | 64px   | 3         | Prominent hero/marketing    |

The text size mapping is intentionally non-linear to maintain visual hierarchy and readability:

- Sizes 1 and 2 use the smallest text for compact UIs
- Sizes 3 and 4 use a medium text size for better legibility
- Sizes 5 and 6 use the largest text size for hero/marketing buttons

## Variants

| Variant | Use Case          | Styling                      |
| ------- | ----------------- | ---------------------------- |
| Solid   | Primary actions   | Dark bg (12), light text     |
| Tinted  | Secondary actions | Light bg (3), dark text (12) |
| Outline | Optional actions  | Border (5), dark text (12)   |
| Ghost   | Toolbar actions   | Dark text (12) only          |
| Link    | Inline actions    | Dark text (12), underline    |

## Examples

### Action Hierarchy

```tsx
<Flex gap={4}>
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
