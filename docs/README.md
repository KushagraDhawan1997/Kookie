# Kookie Documentation

Welcome to the Kookie documentation. This repository contains comprehensive documentation for the Kookie design system and component library.

## Architecture Documentation

- [Token System](architecture/token-system.md) - Token-based design system for consistent spacing and dimensions
- [Color System](architecture/color-system.md) - In-depth explanation of the semantic color system
- [Button Component](architecture/button.md) - Button component implementation and design decisions

## Component Documentation

### Core UI Components

- **Button Component** - A versatile button component with multiple variants (modern, solid, tinted, outline, ghost, link), semantic colors, and smooth transitions.
- **Box Component** - A fundamental layout building block with token-based spacing and dimension props.
- **Flex Component** - A component for creating flexible layouts using CSS Flexbox, with responsive props and token-based spacing.
- **Grid Component** - A component for creating grid-based layouts, supporting responsive configurations and token-based spacing.
- **Text Component** - A versatile component for rendering text with various styling options, sizes, and weights based on typography tokens.
- **Heading Component** - A specialized text component for headings with larger scales and semantic HTML elements (h1-h6).

### Providers and Theming

- **ThemeProvider** - Context provider for managing theme colors, roundness, and size defaults across the application.

## Getting Started

To get started with development:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Guidelines

- Use TypeScript for all code
- Use semantic color variables as documented in the [Color System](architecture/color-system.md)
- Use token-based spacing and dimensions from the design system
- Never use margins for spacing (use padding, flex, and grid with gap instead)
- Use the Flex component for creating responsive layouts
- Follow the Next.js App Router architecture
- Use the theme provider for consistent styling across components

## Project Structure

```
kookie/
├── .next/                  # Next.js build output
├── app/                    # Next.js App Router pages and layouts
├── components/             # React components
│   ├── helpers/            # Helper components
│   ├── props/              # Component prop types and utilities
│   ├── providers/          # Context providers (ThemeProvider)
│   ├── types/              # Shared component types
│   └── ui/                 # Core UI components
│       ├── box/            # Box component - fundamental layout block
│       ├── button/         # Button component - interactive element
│       ├── flex/           # Flex component - for flexbox layouts
│       ├── grid/           # Grid component - for grid layouts
│       ├── layout/         # Layout components (e.g., for page structure)
│       └── text/           # Text and Heading components
├── docs/                   # Project documentation
│   ├── architecture/       # Architecture-specific documents
│   │   └── components/     # Component-specific documentation
│   └── tasks/              # Development tasks and roadmap
├── lib/                    # Utility functions and libraries
│   └── utils/              # General utility functions
├── public/                 # Static assets (images, fonts, etc.)
├── styles/                 # Global styles and design tokens
│   ├── tokens/             # Design token definitions
│   └── color.css           # Color system implementation
├── .gitignore              # Files and directories to ignore by Git
├── eslint.config.mjs       # ESLint configuration
├── next-env.d.ts           # Next.js environment type definitions
├── next.config.ts          # Next.js configuration
├── package-lock.json       # Exact versions of dependencies
├── package.json            # Project metadata and dependencies
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # Main project README
└── tsconfig.json           # TypeScript configuration
```

## Current Implementation Status

### ✅ Completed Components

- **Button**: Full implementation with modern variant, semantic colors, and smooth transitions
- **Box**: Layout component with token-based props
- **Flex**: Flexbox layouts with responsive capabilities
- **Grid**: Grid layouts with responsive configurations
- **Text**: Typography component with token-based sizing
- **Heading**: Semantic heading component
- **ThemeProvider**: Theme management and color system

### 🚧 In Development

- Enhanced responsive utilities
- Additional layout components
- Form components

### 📋 Planned

- Card component
- Dialog and modal components
- Navigation components
- Advanced form controls

## Contributing

When contributing to this project:

1. Ensure your code follows the project's style guidelines
2. Use the token-based design system for consistent styling
3. Follow the semantic color system for theming
4. Update documentation when adding or changing features
5. Test components across different theme configurations
6. Maintain TypeScript type safety
