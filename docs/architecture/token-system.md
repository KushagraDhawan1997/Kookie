# Three-Layer Token System Architecture

This document explains the sophisticated three-layer token system implemented in the Kookie component library, inspired by design system best practices and optimized for performance and maintainability.

## Overview

The three-layer token system provides a scalable architecture for design tokens that separates concerns and enables powerful theming capabilities without code duplication. The system automatically handles text contrast, supports all 18 Radix colors, and provides clean component abstractions.

## Architecture Benefits

1. **No Selector Duplication**: Variant and color logic exists only in token files
2. **Automatic Contrast**: Text colors adapt based on background brightness
3. **Easy Extensibility**: Add variants by modifying token files only
4. **Performance Optimized**: CSS variables with semantic abstractions
5. **Clean Separation**: Token logic separate from component styling
6. **Reduced Bundle Size**: ~400 lines of CSS removed through abstraction

## Three-Layer Architecture

### Layer 1: Semantic Reference Tokens

**Location**: `styles/tokens/reference/colors/`

Reference tokens map semantic color roles to actual Radix color values. Each color file defines mappings for different semantic contexts.

#### Primary Color Mappings

```css
/* blue-reference.css */
[data-primary-color="blue"] {
  --primary-1: var(--blue-1);
  --primary-2: var(--blue-2);
  /* ... through primary-12 and primary-a1 through primary-a12 */

  /* Contextual text tokens */
  --text-on-solid: var(--blue-1); /* Light text on blue solid background */
}
```

#### Semantic Context Mappings

```css
/* green-reference.css */
[data-success-color="green"] {
  --success-1: var(--green-1);
  --success-2: var(--green-2);
  /* ... through success-12 */

  /* Contextual text tokens for success context */
  --text-success-on-solid: var(--green-1); /* Light text on green success solid */
}
```

#### Contextual Text Tokens

Each color defines its optimal text color for solid backgrounds:

**Bright Colors (Dark Text)**:

- Yellow: `--text-on-solid: var(--yellow-12)`
- Lime: `--text-on-solid: var(--lime-12)`
- Amber: `--text-on-solid: var(--amber-12)`
- Sky: `--text-on-solid: var(--sky-12)`
- Cyan: `--text-on-solid: var(--cyan-12)`

**Dark Colors (Light Text)**:

- Blue: `--text-on-solid: var(--blue-1)`
- Red: `--text-on-solid: var(--red-1)`
- Purple: `--text-on-solid: var(--purple-1)`
- Green: `--text-on-solid: var(--green-1)`
- All other colors: `var(--color-1)`

### Layer 2: System Tokens

**Location**: `styles/tokens/system/colors/system.css`

System tokens provide UI-focused abstractions that map to specific steps in the Radix 12-step color scale. They create semantic meaning for different UI contexts.

#### Radix Scale Mapping

```css
/* Steps 1-2: App backgrounds (subtle variations) */
--ui-bg-app: var(--primary-1);
--ui-bg-subtle: var(--primary-2);

/* Steps 3-5: Component backgrounds (tinted states) */
--ui-bg-component: var(--primary-3);
--ui-bg-component-hover: var(--primary-4);
--ui-bg-component-pressed: var(--primary-5);

/* Steps 6-8: Borders (subtle to strong) */
--ui-border-subtle: var(--primary-6);
--ui-border-interactive: var(--primary-7);
--ui-border-strong: var(--primary-8);

/* Steps 9-10: Solid backgrounds */
--ui-bg-solid: var(--primary-9);
--ui-bg-solid-hover: var(--primary-10);

/* Steps 11-12: Text (medium to high contrast) */
--text-medium-contrast: var(--primary-11);
--text-high-contrast: var(--primary-12);

/* Contextual text tokens (defined per color in Layer 1) */
--text-on-solid: var(--primary-1); /* Default, overridden per color */
--text-on-tinted: var(--primary-12); /* Dark text on light backgrounds */
--text-on-app: var(--primary-12); /* Dark text on app backgrounds */
```

#### Semantic Context System Tokens

For each semantic context (warning, error, success), equivalent system tokens are provided:

```css
/* Warning Context */
[data-warning-color] {
  --ui-bg-warning-app: var(--warning-1);
  --ui-bg-warning-solid: var(--warning-9);
  --ui-border-warning-strong: var(--warning-8);
  --text-warning-high-contrast: var(--warning-12);
  --text-warning-on-tinted: var(--warning-12);
  /* --text-warning-on-solid defined per color in reference files */
}
```

### Layer 3: Component Tokens

**Location**: `components/ui/*/component-tokens.css`

Component tokens map semantic component properties to appropriate system tokens, providing clean abstractions for component styling.

#### Button Component Tokens

```css
/* Solid variant maps to solid system tokens */
[data-variant="solid"][data-primary-color] {
  --button-bg: var(--ui-bg-solid);
  --button-bg-hover: var(--ui-bg-solid-hover);
  --button-text: var(--text-on-solid);
  --button-border: transparent;
}

/* Outline variant maps to border and component system tokens */
[data-variant="outline"][data-primary-color] {
  --button-bg: transparent;
  --button-bg-hover: var(--ui-bg-component);
  --button-text: var(--text-high-contrast);
  --button-border: var(--ui-border-interactive);
  --button-border-hover: var(--ui-border-strong);
}

/* Semantic color contexts */
[data-variant="solid"][data-primary-color="warning"] {
  --button-bg: var(--ui-bg-warning-solid);
  --button-bg-hover: var(--ui-bg-warning-solid-hover);
  --button-text: var(--text-warning-on-solid); /* Auto light/dark per color */
  --button-border: transparent;
}
```

#### Text Component Tokens

```css
[data-primary-color] {
  --text-color: var(--text-high-contrast);
}

[data-primary-color="success"] {
  --text-color: var(--text-success-high-contrast);
}

[data-primary-color="error"] {
  --text-color: var(--text-error-high-contrast);
}
```

## Component CSS Simplification

With the three-layer system, component CSS becomes dramatically simplified:

### Before (500+ lines)

```css
/* Hundreds of variant/color combinations */
[data-variant="solid"][data-primary-color="blue"] {
  background: var(--blue-9);
  color: var(--blue-1);
}
[data-variant="solid"][data-primary-color="yellow"] {
  background: var(--yellow-9);
  color: var(--yellow-12);
}
/* ...50+ more rules */
```

### After (~120 lines)

```css
/* Single rule using component tokens */
.button-root {
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--button-border);
}

/* Variant-specific overrides only for special cases */
[data-variant="outline"] {
  border: 1px solid var(--button-border);
}
```

## Token System Usage

### Defining New Colors

1. **Create reference file**: `styles/tokens/reference/colors/newcolor-reference.css`

```css
[data-primary-color="newcolor"] {
  --primary-1: var(--newcolor-1);
  /* ... through primary-12 */
  --text-on-solid: var(--newcolor-1); /* or var(--newcolor-12) for bright colors */
}
```

2. **Add to TypeScript types**: Update `ThemeColor` union in `theme-types.ts`
3. **System and component tokens automatically work**

### Adding New Component Variants

1. **Define component tokens**: Add to `component-tokens.css`

```css
[data-variant="newvariant"][data-primary-color] {
  --button-bg: var(--ui-bg-component);
  --button-text: var(--text-on-tinted);
  --button-border: transparent;
}
```

2. **Component CSS automatically uses tokens** - no additional CSS needed
3. **All colors automatically supported**

### Creating New Components

1. **Define component tokens**: Create `new-component-tokens.css`
2. **Map to system tokens**: Use appropriate system token abstractions
3. **Component CSS**: Use component tokens only
4. **Automatic theme support**: Works with all colors and contexts

## File Structure

```
styles/
├── tokens/
│   ├── reference/
│   │   └── colors/
│   │       ├── blue-reference.css      # Blue → semantic mappings + contextual text
│   │       ├── yellow-reference.css    # Yellow → semantic mappings + dark text
│   │       ├── red-reference.css       # Red → semantic mappings + light text
│   │       ├── grays-reference.css     # All gray variants + primary gray
│   │       └── reference.css           # Main reference token imports
│   └── system/
│       └── colors/
│           └── system.css              # UI abstraction system tokens
│
components/ui/
├── button/
│   ├── button.css                      # Clean component styles (~120 lines)
│   └── button-tokens.css               # Component token mappings (~270 lines)
├── text/
│   ├── text.css                        # Simplified text styles (~150 lines)
│   └── text-tokens.css                 # Text component tokens (~50 lines)
└── component/
    ├── component.css                   # Future component styles
    └── component-tokens.css            # Future component tokens
```

## Performance Characteristics

### CSS Bundle Optimization

- **Before**: 500+ lines of repetitive button CSS
- **After**: 120 lines of button CSS + 270 lines of reusable tokens
- **Net Savings**: ~400 lines of CSS removed
- **Scalability**: New components inherit all color/variant logic

### Runtime Performance

- **CSS Variables**: Instant theme switching with no JavaScript
- **No Duplication**: Single source of truth for variant logic
- **Browser Optimization**: Native CSS cascade handles token resolution

### Development Experience

- **Single Edit**: Change variant behavior by editing one token file
- **Automatic Support**: New colors automatically work with all components
- **Type Safety**: TypeScript union types prevent invalid color combinations
- **Debugging**: Clear token hierarchy for easier troubleshooting

## Migration Guide

### Existing Components

The token system is fully backward compatible. Existing components continue to work unchanged.

### New Development

Use the three-layer approach for all new components:

```tsx
// ❌ Old approach - direct CSS values
<Button style={{
  backgroundColor: 'var(--blue-9)',
  color: 'var(--blue-1)',
  border: '1px solid var(--blue-8)'
}} />

// ✅ New approach - semantic tokens
<Button data-primary-color="blue" variant="solid" />
```

### Custom Components

Follow the three-layer pattern:

1. **Define component tokens** that map to system tokens
2. **Use component tokens** in component CSS
3. **Let the system handle** color and variant logic automatically

```css
/* Custom component tokens */
[data-variant="primary"] {
  --custom-bg: var(--ui-bg-solid);
  --custom-text: var(--text-on-solid);
}

/* Custom component CSS */
.custom-component {
  background: var(--custom-bg);
  color: var(--custom-text);
}
```

This approach ensures consistency, maintainability, and automatic theme support across all components.
