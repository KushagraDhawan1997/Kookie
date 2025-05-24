# Spacing and Dimension Tokens

This document provides comprehensive guidance on using spacing and dimension tokens in the Kookie component library. These tokens form the foundation of consistent layout and sizing throughout the design system.

## Overview

The Kookie design system uses two primary token categories for layout:

1. **Spacing Tokens (`--space-1` to `--space-24`)**: For padding, gaps, and margins
2. **Dimension Tokens (`--size-1` to `--size-24` + named tokens)**: For widths, heights, and sizing

Both categories follow a **linear 1-24 naming convention** with **non-linear values** optimized for UI design patterns.

## Spacing Tokens

### Purpose and Usage

Spacing tokens provide consistent spacing values for:

- **Padding** within components
- **Gap** values in Flex and Grid layouts
- **Margin** when gaps aren't suitable (discouraged in favor of gaps)

### Complete Token Reference

| Token        | Value    | Pixels | rem   | Common Use Cases                  |
| ------------ | -------- | ------ | ----- | --------------------------------- |
| `--space-1`  | 0.25rem  | 4px    | 0.25  | Micro spacing, fine adjustments   |
| `--space-2`  | 0.375rem | 6px    | 0.375 | Very small padding                |
| `--space-3`  | 0.5rem   | 8px    | 0.5   | Small padding, button padding     |
| `--space-4`  | 0.625rem | 10px   | 0.625 | Form element spacing              |
| `--space-5`  | 0.75rem  | 12px   | 0.75  | Medium padding, list spacing      |
| `--space-6`  | 0.875rem | 14px   | 0.875 | Enhanced medium padding           |
| `--space-7`  | 1rem     | 16px   | 1     | **Default spacing**, card padding |
| `--space-8`  | 1.25rem  | 20px   | 1.25  | Large button padding              |
| `--space-9`  | 1.5rem   | 24px   | 1.5   | **Section spacing**, card gaps    |
| `--space-10` | 1.75rem  | 28px   | 1.75  | Enhanced section spacing          |
| `--space-11` | 2rem     | 32px   | 2     | **Component separation**          |
| `--space-12` | 2.25rem  | 36px   | 2.25  | Large component spacing           |
| `--space-13` | 2.5rem   | 40px   | 2.5   | Page section padding              |
| `--space-14` | 2.75rem  | 44px   | 2.75  | Enhanced page sections            |
| `--space-15` | 3rem     | 48px   | 3     | **Major sections**, hero padding  |
| `--space-16` | 3.5rem   | 56px   | 3.5   | Large hero sections               |
| `--space-17` | 4rem     | 64px   | 4     | Extra large sections              |
| `--space-18` | 4.5rem   | 72px   | 4.5   | Generous section spacing          |
| `--space-19` | 5rem     | 80px   | 5     | Very large sections               |
| `--space-20` | 6rem     | 96px   | 6     | **Page-level spacing**            |
| `--space-21` | 7rem     | 112px  | 7     | Large page sections               |
| `--space-22` | 8rem     | 128px  | 8     | Extra large page sections         |
| `--space-23` | 9rem     | 144px  | 9     | Maximum component spacing         |
| `--space-24` | 10rem    | 160px  | 10    | **Maximum page spacing**          |

### Usage Examples

#### Direct CSS Usage

```css
.card {
  padding: var(--space-7); /* 16px padding */
  margin-bottom: var(--space-9); /* 24px margin */
}

.hero-section {
  padding: var(--space-15) var(--space-7); /* 48px vertical, 16px horizontal */
}
```

#### Component Props

```tsx
// Box component with spacing props
<Box p={7} mb={9}>
  Card content with 16px padding and 24px bottom margin
</Box>

// Flex layout with gap
<Flex gap={5} direction="column">
  <Text>Item 1</Text>
  <Text>Item 2 (12px gap from item 1)</Text>
</Flex>
```

#### Generated Gap Classes

The system automatically generates gap utility classes:

```css
/* Generated classes for Flex/Grid components */
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

## Dimension Tokens

### Purpose and Usage

Dimension tokens provide consistent sizing for:

- **Component dimensions** (buttons, icons, form controls)
- **Layout containers** (modals, content areas, sidebars)
- **Responsive breakpoints** and utility sizing

### Linear Tokens (1-24)

For component-level sizing (4px to 320px):

| Token       | Value   | Pixels | rem  | Common Use Cases             |
| ----------- | ------- | ------ | ---- | ---------------------------- |
| `--size-1`  | 0.25rem | 4px    | 0.25 | Border width, micro elements |
| `--size-2`  | 0.5rem  | 8px    | 0.5  | Small icons, dividers        |
| `--size-3`  | 0.75rem | 12px   | 0.75 | Icons, small buttons         |
| `--size-4`  | 1rem    | 16px   | 1    | **Small control height**     |
| `--size-5`  | 1.25rem | 20px   | 1.25 | Enhanced small controls      |
| `--size-6`  | 1.5rem  | 24px   | 1.5  | **Medium control height**    |
| `--size-7`  | 1.75rem | 28px   | 1.75 | Enhanced medium controls     |
| `--size-8`  | 2rem    | 32px   | 2    | **Default control height**   |
| `--size-9`  | 2.5rem  | 40px   | 2.5  | Enhanced default controls    |
| `--size-10` | 3rem    | 48px   | 3    | **Large control height**     |
| `--size-11` | 3.5rem  | 56px   | 3.5  | **Extra large controls**     |
| `--size-12` | 4rem    | 64px   | 4    | **Maximum control height**   |
| `--size-13` | 5rem    | 80px   | 5    | Small containers             |
| `--size-14` | 6rem    | 96px   | 6    | Medium containers            |
| `--size-15` | 7rem    | 112px  | 7    | Card widths                  |
| `--size-16` | 8rem    | 128px  | 8    | Enhanced cards               |
| `--size-17` | 9rem    | 144px  | 9    | Small content areas          |
| `--size-18` | 10rem   | 160px  | 10   | Medium content areas         |
| `--size-19` | 12rem   | 192px  | 12   | Large content areas          |
| `--size-20` | 14rem   | 224px  | 14   | Extra large content          |
| `--size-21` | 16rem   | 256px  | 16   | Small modals                 |
| `--size-22` | 18rem   | 288px  | 18   | Enhanced small modals        |
| `--size-23` | 19rem   | 304px  | 19   | Pre-medium modals            |
| `--size-24` | 20rem   | 320px  | 20   | **Medium modals**            |

### Named Tokens (Layout Level)

For layout-level sizing (320px to 1536px):

| Token        | Value | Pixels | rem | Common Use Cases           |
| ------------ | ----- | ------ | --- | -------------------------- |
| `--size-xs`  | 20rem | 320px  | 20  | Small modals, sidebars     |
| `--size-sm`  | 24rem | 384px  | 24  | Enhanced small modals      |
| `--size-md`  | 28rem | 448px  | 28  | **Default modal width**    |
| `--size-lg`  | 32rem | 512px  | 32  | **Large modals**           |
| `--size-xl`  | 36rem | 576px  | 36  | Extra large modals         |
| `--size-2xl` | 42rem | 672px  | 42  | Content containers         |
| `--size-3xl` | 48rem | 768px  | 48  | **Standard content width** |
| `--size-4xl` | 56rem | 896px  | 56  | **Large content areas**    |
| `--size-5xl` | 64rem | 1024px | 64  | **Desktop content max**    |
| `--size-6xl` | 72rem | 1152px | 72  | Wide desktop layouts       |
| `--size-7xl` | 80rem | 1280px | 80  | Ultra-wide layouts         |
| `--size-8xl` | 96rem | 1536px | 96  | **Maximum layout width**   |

### Special Utility Tokens

For responsive and utility sizing:

| Token             | Value       | Use Case              |
| ----------------- | ----------- | --------------------- |
| `--size-full`     | 100%        | Fill parent container |
| `--size-half`     | 50%         | Half of parent        |
| `--size-fit`      | fit-content | Fit to content        |
| `--size-min`      | min-content | Minimum content width |
| `--size-max`      | max-content | Maximum content width |
| `--size-screen`   | 100vw       | Full viewport width   |
| `--size-screen-h` | 100vh       | Full viewport height  |

### Usage Examples

#### Component Sizing

```tsx
// Button with specific height
<Button height={8}>Default Height Button</Button>
// Results in: height: var(--size-8) /* 32px */

// Icon with consistent sizing
<Icon size={6} />
// Results in: width: var(--size-6); height: var(--size-6) /* 24px */
```

#### Layout Containers

```tsx
// Modal with medium width
<Modal width="md">
  Modal content in 448px container
</Modal>

// Content area with maximum desktop width
<Box maxWidth="5xl">
  Content constrained to 1024px
</Box>
```

#### Direct CSS Usage

```css
.button-small {
  height: var(--size-4); /* 16px */
  width: var(--size-16); /* 128px */
}

.modal-container {
  width: var(--size-lg); /* 512px */
  max-height: var(--size-screen-h); /* 100vh */
}
```

## System Layout Tokens

Built on top of dimension and spacing tokens, these provide semantic abstractions for common UI patterns:

### Control Heights

```css
--control-height-1: var(--size-4); /* 16px - Extra small */
--control-height-2: var(--size-6); /* 24px - Small */
--control-height-3: var(--size-8); /* 32px - Medium */
--control-height-4: var(--size-10); /* 40px - Large */
--control-height-5: var(--size-11); /* 48px - Extra large */
--control-height-6: var(--size-12); /* 56px - Largest */
```

### Control Padding

```css
--control-padding-1: var(--space-3); /* 8px - Extra small */
--control-padding-2: var(--space-5); /* 12px - Small */
--control-padding-3: var(--space-7); /* 16px - Medium */
--control-padding-4: var(--space-8); /* 20px - Large */
--control-padding-5: var(--space-9); /* 24px - Extra large */
--control-padding-6: var(--space-10); /* 28px - Largest */
```

## Best Practices

### Layout Spacing Philosophy

1. **Prefer gaps over margins** for component spacing
2. **Use consistent token increments** rather than arbitrary values
3. **Follow the spacing scale** for visual harmony

```tsx
// ✅ Preferred - Gap-based spacing
<Flex gap={7} direction="column">
  <Card>First card</Card>
  <Card>Second card</Card>
</Flex>

// ❌ Discouraged - Margin-based spacing
<div>
  <Card style={{ marginBottom: '16px' }}>First card</Card>
  <Card>Second card</Card>
</div>
```

### Token Selection Guidelines

#### Spacing Token Selection

- **1-6**: Fine-tuning, micro adjustments
- **7-11**: Common UI spacing (prefer these)
- **12-15**: Section and component separation
- **16-24**: Page-level and major layout spacing

#### Dimension Token Selection

- **1-12**: Interactive components (buttons, form controls)
- **13-24**: Content containers and medium layouts
- **xs-8xl**: Large layout containers and responsive breakpoints

### Component Size Mapping

#### Button Sizes

```tsx
<Button size="sm" />  {/* height: var(--size-6) - 24px */}
<Button size="md" />  {/* height: var(--size-8) - 32px */}
<Button size="lg" />  {/* height: var(--size-10) - 48px */}
```

#### Input Sizes

```tsx
<Input size="sm" />   {/* height: var(--size-6) - 24px */}
<Input size="md" />   {/* height: var(--size-8) - 32px */}
<Input size="lg" />   {/* height: var(--size-10) - 48px */}
```

## Migration from Old System

### Breaking Changes

The linearization update changed some token values. Here are the key mappings:

#### Previous → Current Spacing

```css
/* Old inconsistent naming */
--space-1_5 → --space-2   /* 6px */
--space-2_5 → --space-4   /* 10px */
--space-3_5 → --space-6   /* 14px */

/* Removed gaps filled */
--space-13 → --space-13   /* 40px - new token */
--space-14 → --space-14   /* 44px - new token */
--space-15 → --space-15   /* 48px - new token */
```

#### Previous → Current Dimensions

```css
/* Old large tokens redistributed */
--size-19 → --size-24     /* 320px moved */
--size-20 → --size-sm     /* 384px became named */
--size-21 → --size-xl     /* 576px became named */
```

### Migration Strategy

1. **Review existing usage** of tokens 13-24 (these changed most)
2. **Update component props** to use new token numbers
3. **Test layouts** for visual consistency
4. **Use TypeScript** to catch invalid token references

## Performance Considerations

### CSS Bundle Size

- **Total tokens**: 63 tokens (24 spacing + 39 dimension)
- **Generated utilities**: 72 gap classes
- **Memory footprint**: ~2KB of CSS variables
- **Runtime cost**: Zero - CSS variables resolve at paint time

### Developer Experience

- **Predictable naming**: Linear progression for easy memorization
- **Type safety**: TypeScript props prevent invalid values
- **IntelliSense**: Full autocomplete support for token numbers
- **Debugging**: Clear token names in dev tools

## Advanced Usage

### Custom Component Integration

```tsx
// Define component with token props
interface CardProps {
  padding?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Card: React.FC<CardProps> = ({ padding = 7, gap = 5 }) => (
  <div className={`card gap-${gap}`} style={{ padding: `var(--space-${padding})` }}>
    Card content
  </div>
);
```

### Responsive Token Usage

```css
.responsive-container {
  width: var(--size-md);
  padding: var(--space-7);
}

@media (min-width: 768px) {
  .responsive-container {
    width: var(--size-lg);
    padding: var(--space-11);
  }
}
```

This comprehensive token system provides the foundation for consistent, scalable, and maintainable layouts throughout the Kookie component library.
