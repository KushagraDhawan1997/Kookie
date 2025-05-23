# Button Component

The Button component is designed with a focus on clarity, consistency, and strong visual hierarchy. It follows a token-based approach for colors, spacing, and typography.

## Design Principles

1. **Strong Visual Hierarchy**

   - Solid variants use high-contrast colors (scale-12) for maximum visibility
   - Gray variant specifically uses the darkest shade (gray-12) to ensure prominence
   - Non-solid variants use darker text (scale-12) for better readability

2. **Consistent Interaction Patterns**

   - Hover states use scale-3 backgrounds for subtle variants (tinted, outline, ghost)
   - Active states progress to scale-4 for subtle feedback
   - Link variants use underline for hover state

3. **Color Scale Usage**

   - Solid: scale-12 → scale-12 (hover) → scale-12 (active)
   - Tinted: scale-3 → scale-4 → scale-5
   - Outline/Ghost: transparent → scale-3 → scale-4
   - Border colors: scale-5 → scale-6 (hover)
   - Text colors: scale-12 for all non-solid variants

4. **Size Scale**
   - Size 1: 24px (--size-6)
   - Size 2: 32px (--size-8)
   - Size 3: 40px (--size-10)
   - Size 4: 48px (--size-12)

## Variants

### Solid

- Primary use case: Main calls-to-action
- High contrast with white text on dark backgrounds
- Gray variant uses darkest shade (gray-12) for maximum emphasis

### Tinted

- Primary use case: Secondary actions
- Light backgrounds with dark text
- Subtle hover states with slightly darker backgrounds

### Outline

- Primary use case: Optional actions
- Transparent background with border
- Matches tinted hover states for consistency

### Ghost

- Primary use case: Toolbar actions
- No background or border
- Matches tinted hover states for consistency

### Link

- Primary use case: Inline text actions
- Behaves like a text link
- Uses underline for hover state

## Color Tokens

The button uses semantic color tokens with specific scale values:

```css
/* Example color scale usage */
Solid:    var(--color-12)  /* Background */
Tinted:   var(--color-3)   /* Background */
         var(--color-12)  /* Text */
Outline:  var(--color-5)   /* Border */
         var(--color-12)  /* Text */
Ghost:    var(--color-12)  /* Text */
Link:     var(--color-12)  /* Text */
```

## Best Practices

1. Use solid variant for primary actions
2. Use tinted or outline for secondary actions
3. Use ghost for toolbar-style interfaces
4. Use link for inline text contexts
5. Maintain consistent sizing within each context
6. Group related buttons with consistent variants
