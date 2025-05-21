# Kookie UI - Component Architecture

## Core Component Structure

Each component in Kookie UI follows a consistent file structure and implementation pattern.

### File Organization

```
components/
├── ui/               # Core UI components
│   ├── text/         # Text component
│   ├── button/       # Button component
│   └── ...           # Other UI components
├── layout/           # Layout components
└── ...               # Other component types
```

### Component Design Principles

1. **Theme Integration** - Components consume theme settings via hooks
2. **Size Inheritance** - Child components inherit size from parents
3. **Semantic Colors** - Components use semantic color names (primary, success, etc.)
4. **Consistent API** - Common props like `size`, `color`, `variant` across components
5. **Explicit Style Maps** - No string interpolation; use predefined style maps for all variants
6. **Design Token Alignment** - Classes map directly to design token reference
7. **Accessibility First** - Built on Radix UI primitives where appropriate

### Common Component Props

Most components share these common props:

- `size`: Size variant (`xs`, `sm`, `md`, `lg`, `xl`)
- `color`: Semantic color or direct Tailwind color
- `variant`: Component-specific variants (e.g., solid/outline for Button, default/muted for Text)
- `className`: For extending styles
- `children`: For component content

### Color Resolution Pattern

Components resolve semantic colors using this pattern:

1. Get `colorMap` from theme context
2. Resolve semantic colors (primary, success, warning, danger) to actual Tailwind colors
3. Look up the appropriate style for that color + variant in predefined style maps
4. Apply the resolved class name

### Size Inheritance Pattern

Components use size inheritance to maintain consistency:

1. Parent sets a size and stores it in context
2. Child components check for explicit size or inherit from context
3. The inherited size affects typography, spacing, etc.

## Component Types

### 1. UI Components

Core interface elements that users interact with directly.

- **Examples**: Button, Text, Input, Card, Dialog
- **Features**: Theme integration, size inheritance, focus management
- **Patterns**: Compound components for complex UI like Dialog, Card

### 2. Layout Components

Components that handle page/section structure and spacing.

- **Examples**: Flex, Grid, Container, Stack
- **Features**: Responsive layouts, consistent spacing
- **Patterns**: Props for controlling layout properties (gap, direction, alignment)

### 3. Data Components

Components that display or work with data.

- **Examples**: Table, List, DataGrid, Pagination
- **Features**: Data formatting, sorting, filtering
- **Patterns**: Controller/view separation, virtualization for performance

## Component Styling Approach

1. **Tailwind First**: All styling via Tailwind classes
2. **Design Token Reference**: Follow the defined tokens for consistency
3. **Predefined Style Maps**: Style variations defined in lookup tables, not string interpolation
4. **Customizable**: All components accept className for extension

## Accessibility

Components follow these accessibility principles:

1. **Keyboard Navigation**: All interactive components are keyboard accessible
2. **ARIA Support**: Proper roles and attributes for screen readers
3. **Focus Management**: Clear focus indicators and proper tabbing
4. **Semantic HTML**: Using appropriate elements for their purpose

## Component Composition

- **Compound Components**: Complex UI elements are built as compound components with dot notation
- **Composition Over Inheritance**: Components compose together rather than extending each other
- **Context Sharing**: Related components share context for state and configuration
