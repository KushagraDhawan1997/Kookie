# Kookie Documentation

Welcome to the Kookie documentation. This repository contains comprehensive documentation for the Kookie application.

## Architecture Documentation

- [Architecture Overview](architecture/architecture.md) - High-level architecture of the application
- [File Documentation](architecture/file-documentation.md) - Detailed documentation of all files
- [Design Reference](architecture/design-reference.md) - Styling decisions and design system
- [Color System](architecture/color-system.md) - In-depth explanation of the color system
- [Component Guide](architecture/component-guide.md) - Best practices for component development

## Component Documentation

### Core UI Components

- **Box Component** - A fundamental layout building block for creating UI elements.
- **Flex Component** - A component for creating flexible layouts using CSS Flexbox, with responsive props and token-based spacing.
- **Grid Component** - A component for creating grid-based layouts, supporting responsive configurations and token-based spacing.
- **Layout Component** - Components to help structure the overall layout of pages and sections.
- **Text Component** - A versatile component for rendering text with various styling options, sizes, and weights based on typography tokens.

## Getting Started

To get started with development:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev --turbopack`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Guidelines

- Use TypeScript for all code
- Follow the component patterns documented in the [Component Guide](architecture/component-guide.md)
- Use semantic color variables as documented in the [Color System](architecture/color-system.md)
- Never use margins for spacing (use padding, flex, and grid with gap instead)
- Use the Flex component for creating responsive layouts
- Follow the Next.js App Router architecture

## Project Structure

```
kookie/
├── .next/                  # Next.js build output
├── app/                    # Next.js App Router pages and layouts
├── components/             # React components
│   ├── helpers/            # Helper components
│   ├── props/              # Component prop types and utilities
│   ├── providers/          # Context providers
│   ├── types/              # Shared component types
│   └── ui/                 # Core UI components
│       ├── box/            # Box component - fundamental layout block
│       ├── flex/           # Flex component - for flexbox layouts
│       ├── grid/           # Grid component - for grid layouts
│       ├── layout/         # Layout components (e.g., for page structure)
│       └── text/           # Text component - for displaying text with styles
├── docs/                   # Project documentation
│   ├── architecture/       # Architecture-specific documents
│   └── tasks/              # Task-related documents
├── lib/                    # Utility functions and libraries
│   └── utils/              # General utility functions
├── public/                 # Static assets (images, fonts, etc.)
├── styles/                 # Global styles and design tokens
│   └── tokens/             # Design token definitions
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

## Contributing

When contributing to this project:

1. Ensure your code follows the project's style guidelines
2. Write tests for new functionality
3. Update documentation when adding or changing features
4. Follow semantic versioning for releases
