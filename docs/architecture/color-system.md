# Color System Documentation

Kookie uses a sophisticated color system based on Radix UI colors, providing a consistent and accessible color palette throughout the application.

## Foundation

The color system is built on Radix UI colors, which provide:

- Perceptually uniform color scales
- Built-in accessibility considerations
- Alpha (transparency) variants
- Dark mode compatibility

## Color Scales

Each color in the system has a scale of 12 steps (1-12) with increasing contrast ratios:

- **1-6**: Background shades (lightest to mid-tone)
- **7-8**: Border and decorative elements
- **9-10**: Solid fill colors
- **11**: High-contrast interactive elements
- **12**: High-contrast text

Each color also has alpha (transparent) variants, named with the "a" prefix:

- **a1-a12**: Correspond to the same contrast levels but with transparency

## Available Colors

The system includes the following color palettes:

### Primary Colors

- **Blue**: Default primary color
- **Green**: Nature, success, positive actions
- **Red**: Errors, destructive actions, warnings
- **Amber**: Attention, warnings, highlights
- **Purple**: Alternative accent color

### Gray Scales

- **Sage**: Earthy, warm gray with green undertones
- **Slate**: Neutral, cool gray with blue undertones

### Semantic Colors

- **Primary**: Main brand color (defaults to blue)
- **Gray**: Neutral color for text and UI elements
- **Error**: For error states and destructive actions
- **Success**: For success states and positive confirmations
- **Warning**: For warning states and cautionary information

## Implementation Details

### CSS Variables

The color system is implemented using CSS variables in `styles/color.css`:

```css
/* Example of blue primary color mapping */
[data-primary-color="blue"] {
  --primary-1: var(--blue-1);
  --primary-2: var(--blue-2);
  /* ... and so on */
}
```

### Data Attributes

Colors are selected using HTML data attributes:

```html
<html data-primary-color="blue" data-gray-color="slate" data-error-color="red" data-success-color="green" data-warning-color="amber"></html>
```

These attributes are set by the `ThemeProvider` component.

### Variable Usage

Components should use semantic color variables instead of specific colors:

```css
/* Good */
color: var(--primary-9);
border-color: var(--gray-7);

/* Avoid */
color: var(--blue-9);
border-color: var(--slate-7);
```

This ensures that the theme can be changed consistently across the application.

## Usage Guidelines

### Text Colors

- **Primary text**: `var(--gray-12)`
- **Secondary text**: `var(--gray-11)`
- **Muted text**: `var(--gray-10)`
- **Accent text**: `var(--primary-11)`

### Background Colors

- **App background**: `var(--gray-1)`
- **Subtle background**: `var(--gray-2)`
- **UI element background**: `var(--gray-3)`
- **Hovered UI element**: `var(--gray-4)`

### Border Colors

- **Subtle borders**: `var(--gray-6)`
- **Default borders**: `var(--gray-7)`
- **Hovered borders**: `var(--gray-8)`

### State Colors

- **Error**: `var(--error-9)` for backgrounds, `var(--error-11)` for text
- **Success**: `var(--success-9)` for backgrounds, `var(--success-11)` for text
- **Warning**: `var(--warning-9)` for backgrounds, `var(--warning-11)` for text

## Customization

The theme can be customized using the `ThemeProvider`:

```tsx
<ThemeProvider primary="purple" gray="sage" error="red" success="green" warning="amber">
  {children}
</ThemeProvider>
```

For programmatic theme changes, use the `useTheme` hook:

```tsx
const { color, setColor, gray, setGray } = useTheme();

// Change the primary color
setColor("green");
```
