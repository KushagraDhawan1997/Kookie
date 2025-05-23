# Kookie Architecture

## Overview

Kookie is a Next.js-based web application that follows a modern React architecture with a focus on component reusability, theming capabilities, and a clean separation of concerns.

## Directory Structure

```
kookie/
├── .next/                  # Next.js build output
├── app/                    # Next.js App Router pages and layouts
├── components/             # React components
│   ├── helpers/            # Helper components and utilities
│   ├── props/             # Shared prop definitions
│   ├── providers/         # Context providers (theme)
│   ├── types/             # Shared TypeScript types
│   └── ui/                # Core UI components
│       ├── box/           # Box - layout primitive
│       ├── button/        # Button - interaction primitive
│       ├── flex/          # Flex - flexbox layouts
│       ├── grid/          # Grid - grid layouts
│       └── text/          # Text & Heading - typography
├── docs/                   # Project documentation
│   └── architecture/      # Architecture documentation
│       ├── components/    # Component documentation
│       ├── architecture.md # This file
│       ├── color-system.md # Color system docs
│       └── token-system.md # Design tokens docs
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
│   └── tokens/            # Design token definitions
└── [Config files]         # Various config files
```

## Core Technologies

- **Next.js**: App Router for routing and server components
- **React**: Frontend UI library
- **TypeScript**: Type safety
- **Jotai**: State management
- **Radix Colors**: Color system foundation

## Key Architecture Patterns

### Component Architecture

1. **Core Components**:

   - Theme Provider: Global theme management
   - Typography: Text and Heading components
   - Layout: Box, Flex, and Grid components

2. **Design Principles**:
   - No margins (use Flex/Grid gap)
   - Composition over inheritance
   - Responsive by default
   - Token-based system

### Theming System

Built on three pillars:

1. **CSS Variables**: For colors and tokens
2. **Data Attributes**: For theme variants
3. **Theme Provider**: For state management

Features:

- Semantic color roles
- Token-based spacing
- Responsive support
- Dark mode ready

### Props System

Consistent prop patterns across components:

- Responsive prop support
- Token-based values
- Style mapping (no class generation)
- Composition via asChild

## Layout System

Three foundational components:

1. **Box**:

   - Basic layout primitive
   - Spacing and dimension props
   - Position control

2. **Flex**:

   - One-dimensional layouts
   - Gap-based spacing
   - Responsive flexbox

3. **Grid**:
   - Two-dimensional layouts
   - Named areas support
   - Dense packing options

## Typography System

Two main components:

1. **Text**:

   - Inline text elements
   - Multiple variants
   - Size scale (1-12)
   - Theme integration

2. **Heading**:
   - h1-h6 elements
   - Larger type scale
   - Semantic variants
   - Consistent spacing

## Best Practices

1. **Layout Construction**:

   ```tsx
   <Flex direction="column" gap={4}>
     <Heading>Title</Heading>
     <Grid columns={2} gap={4}>
       {/* Content */}
     </Grid>
   </Flex>
   ```

2. **Theme Usage**:

   ```tsx
   <ThemeProvider primary="purple" gray="sage">
     <Text color="primary">Themed</Text>
   </ThemeProvider>
   ```

3. **Spacing**:

   ```tsx
   // ✅ Good: Use Flex/Grid gap
   <Flex gap={4}>
     <Text>Item 1</Text>
     <Text>Item 2</Text>
   </Flex>

   // ❌ Bad: Don't use margins
   <div className="mb-4">
     <Text>Item</Text>
   </div>
   ```
