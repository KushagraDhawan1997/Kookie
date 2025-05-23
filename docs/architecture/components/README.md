# Component Documentation

## Documentation Structure

Each component's documentation is focused and maintainable, with all information consolidated in a single README:

```
docs/architecture/components/
  ├── theme-provider/
  │   └── README.md        # Theme configuration and usage
  ├── text/
  │   └── README.md        # Typography system (Text & Heading)
  ├── layout/
  │   └── README.md        # Layout system (Flex & Grid)
  └── README.md            # This overview file
```

## Core Components

### Theme Provider

The foundation of our design system, managing:

- Color themes (primary, gray, error, success, warning)
- Component sizing system
- Dynamic theme switching
- Data attribute-based styling

Key decisions:

- Uses Jotai for state management
- Sets theme via HTML root data attributes
- Provides default values for all colors
- Supports dynamic theme changes
- Includes a default size system

### Typography

A comprehensive type system with two main components:

- Text: For body copy, labels, and UI elements
- Heading: For page titles and section headers

Key decisions:

- Shared size scale (1-12)
- Different defaults per component
- Three emphasis variants (default, muted, accent)
- Color inheritance from theme
- No margins by design

### Layout

Two powerful layout primitives:

- Flex: For one-dimensional layouts
- Grid: For two-dimensional layouts

Key decisions:

- Built on modern CSS (Flexbox/Grid)
- Responsive prop system
- Token-based spacing
- No margins by default
- Composition-focused API

## Design Principles

1. **Spacing**

   - No margins for components
   - Use Flex/Grid gap for spacing
   - Padding for internal spacing
   - Token-based measurements

2. **Composition**

   - Components are composable
   - Props inherit logically
   - Consistent APIs across components
   - Support for `asChild` pattern

3. **Responsive Design**

   - Mobile-first approach
   - Breakpoint-based props
   - Consistent responsive patterns
   - Fluid layouts by default

4. **Theme Integration**
   - Color tokens for consistency
   - Size tokens for scale
   - Semantic color roles
   - Dynamic theme support

## Usage Guidelines

1. **Layout Construction**

   ```tsx
   <Flex direction="column" gap={4}>
     <Heading size={6}>Page Title</Heading>
     <Text variant="muted">Description</Text>
     <Grid columns={{ base: 1, md: 2 }} gap={4}>
       {/* Content */}
     </Grid>
   </Flex>
   ```

2. **Theme Usage**

   ```tsx
   <ThemeProvider primary="purple" gray="sage">
     <Text color="primary">Themed text</Text>
   </ThemeProvider>
   ```

3. **Typography Hierarchy**

   ```tsx
   <Flex direction="column" gap={4}>
     <Heading size={6}>Main Title</Heading>
     <Heading as="h2" size={4}>
       Subtitle
     </Heading>
     <Text variant="muted">Supporting text</Text>
   </Flex>
   ```

4. **Responsive Layouts**
   ```tsx
   <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 2, md: 4 }}>
     {/* Responsive grid items */}
   </Grid>
   ```

## Best Practices

1. **Always use layout components for spacing**

   ```tsx
   // ✅ Good
   <Flex gap={4}>
     <Text>Item 1</Text>
     <Text>Item 2</Text>
   </Flex>

   // ❌ Bad
   <div style={{ marginBottom: '1rem' }}>
     <Text>Item 1</Text>
     <Text>Item 2</Text>
   </div>
   ```

2. **Use semantic variants**

   ```tsx
   // ✅ Good
   <Text variant="muted">Secondary info</Text>

   // ❌ Bad
   <Text style={{ color: 'gray' }}>Secondary info</Text>
   ```

3. **Leverage theme colors**

   ```tsx
   // ✅ Good
   <Text color="primary">Themed text</Text>

   // ❌ Bad
   <Text style={{ color: '#0066cc' }}>Blue text</Text>
   ```

4. **Compose for complex layouts**

   ```tsx
   // ✅ Good
   <Flex direction="column" gap={8}>
     <Grid columns={2} gap={4}>
       {/* Content */}
     </Grid>
   </Flex>

   // ❌ Bad
   <div style={{ display: 'flex', flexDirection: 'column' }}>
     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
       {/* Content */}
     </div>
   </div>
   ```
