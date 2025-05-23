# Layout Components

The layout system consists of two main components: `Flex` and `Grid`. Both components extend the base `Box` component and provide powerful layout capabilities.

## Flex Component

### Usage

```tsx
import { Flex } from "@/components/ui/flex";

// Basic usage
<Flex gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>

// Column layout
<Flex direction="column" gap={4}>
  <div>Top</div>
  <div>Bottom</div>
</Flex>

// Complex layout
<Flex
  direction={{ base: "column", md: "row" }}
  align="center"
  justify="between"
  wrap="wrap"
  gap={4}
>
  <div>Responsive</div>
  <div>Layout</div>
</Flex>
```

### API

```tsx
interface FlexProps {
  as?: "div" | "span";
  asChild?: boolean;
  display?: Responsive<"none" | "inline-flex" | "flex">;
  direction?: Responsive<"row" | "row-reverse" | "column" | "column-reverse">;
  align?: Responsive<"start" | "center" | "end" | "stretch" | "baseline">;
  justify?: Responsive<"start" | "center" | "end" | "between" | "around" | "evenly">;
  wrap?: Responsive<"nowrap" | "wrap" | "wrap-reverse">;
  gap?: Responsive<number | string>;
  gapX?: Responsive<number | string>;
  gapY?: Responsive<number | string>;
  p?: Responsive<number | string>;
  px?: Responsive<number | string>;
  py?: Responsive<number | string>;
  pt?: Responsive<number | string>;
  pr?: Responsive<number | string>;
  pb?: Responsive<number | string>;
  pl?: Responsive<number | string>;
}

// Child component props
interface FlexChildProps {
  flexBasis?: Responsive<DimensionToken | string>;
  flexGrow?: Responsive<number | string>;
  flexShrink?: Responsive<number | string>;
}
```

## Grid Component

### Usage

```tsx
import { Grid } from "@/components/ui/grid";

// Basic grid
<Grid columns={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Named areas
<Grid
  areas={`
    "header header"
    "sidebar content"
    "footer footer"
  `}
  columns="200px 1fr"
  gap={4}
>
  <div style={{ gridArea: "header" }}>Header</div>
  <div style={{ gridArea: "sidebar" }}>Sidebar</div>
  <div style={{ gridArea: "content" }}>Content</div>
  <div style={{ gridArea: "footer" }}>Footer</div>
</Grid>

// Responsive grid
<Grid
  columns={{ base: 1, md: 2, lg: 3 }}
  gap={4}
>
  <div>Responsive</div>
  <div>Grid</div>
  <div>Layout</div>
</Grid>
```

### API

```tsx
interface GridProps {
  as?: "div" | "span";
  asChild?: boolean;
  display?: Responsive<"none" | "inline-grid" | "grid">;
  areas?: Responsive<string>;
  columns?: Responsive<number | string>;
  rows?: Responsive<number | string>;
  flow?: Responsive<"row" | "column" | "row-dense" | "column-dense">;
  align?: Responsive<"start" | "center" | "end" | "stretch" | "baseline">;
  justify?: Responsive<"start" | "center" | "end" | "between">;
  gap?: Responsive<number | string>;
  gapX?: Responsive<number | string>;
  gapY?: Responsive<number | string>;
}

// Child component props
interface GridChildProps {
  gridArea?: Responsive<string>;
  gridColumn?: Responsive<string>;
  gridColumnStart?: Responsive<string>;
  gridColumnEnd?: Responsive<string>;
  gridRow?: Responsive<string>;
  gridRowStart?: Responsive<string>;
  gridRowEnd?: Responsive<string>;
}
```

## Design Decisions

### Flex Component

- Built on CSS Flexbox
- Supports responsive props
- Uses spacing tokens for gaps
- No margins by default
- Nesting for complex layouts

### Grid Component

- Built on CSS Grid
- Supports named areas
- Numeric or template values
- Dense packing options
- Consistent gap system

## Best Practices

1. Layout Structure:

   - Use Flex for 1D layouts (rows/columns)
   - Use Grid for 2D layouts (rows and columns)
   - Nest components for complex layouts

2. Spacing:

   - Use gap for consistent spacing
   - Avoid margins on children
   - Use padding for internal spacing

3. Responsive Design:

   ```tsx
   <Flex direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 4 }}>
     {/* Content */}
   </Flex>
   ```

4. Named Areas (Grid):

   ```tsx
   <Grid
     areas={`
       "nav nav"
       "side main"
     `}
     columns="200px 1fr"
   >
     {/* Content */}
   </Grid>
   ```

5. Composition:
   ```tsx
   <Flex direction="column" gap={8}>
     <Grid columns={2} gap={4}>
       {/* Grid content */}
     </Grid>
     <Flex gap={4}>{/* Flex content */}</Flex>
   </Flex>
   ```
