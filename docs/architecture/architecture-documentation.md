# Kookie UI - Documentation Architecture

## Overview

Kookie UI uses Nextra for its documentation site, providing comprehensive guides, examples, and API references for all components. The documentation is designed to be both educational and practical.

## Structure

```
apps/
└── docs/
    ├── pages/
    │   ├── index.mdx                # Home page
    │   ├── getting-started.mdx      # Getting started guide
    │   ├── installation.mdx         # Installation instructions
    │   ├── theming.mdx              # Theme system guide
    │   │
    │   ├── components/              # Component documentation
    │   │   ├── index.mdx            # Components overview
    │   │   │
    │   │   ├── ui/                  # Core UI components
    │   │   │   ├── button.mdx       # Button documentation
    │   │   │   ├── card.mdx         # Card documentation
    │   │   │   └── ...
    │   │   │
    │   │   ├── layout/              # Layout components
    │   │   ├── navigation/          # Navigation components
    │   │   ├── data/                # Data components
    │   │   ├── effects/             # Effect components
    │   │   └── marketing/           # Marketing components
    │   │
    │   ├── design-system/           # Design system documentation
    │   │   ├── index.mdx            # Overview
    │   │   ├── colors.mdx           # Color system
    │   │   ├── typography.mdx       # Typography system
    │   │   ├── spacing.mdx          # Spacing system
    │   │   └── tokens.mdx           # Design tokens
    │   │
    │   ├── examples/                # Full example pages/patterns
    │   │   ├── index.mdx            # Examples overview
    │   │   ├── dashboard.mdx        # Dashboard example
    │   │   ├── landing-page.mdx     # Landing page example
    │   │   └── ...
    │   │
    │   └── guides/                  # How-to guides
    │       ├── index.mdx            # Guides overview
    │       ├── component-styling.mdx # Styling guide
    │       ├── migration.mdx        # Migration guide
    │       └── ...
    │
    ├── components/                  # Documentation components
    │   ├── component-demo.tsx       # Component demo wrapper
    │   ├── code-block.tsx           # Enhanced code blocks
    │   ├── color-palette.tsx        # Color palette display
    │   ├── prop-table.tsx           # Component props table
    │   └── theme-playground.tsx     # Theme customization playground
    │
    ├── public/                      # Static assets
    │   ├── images/                  # Documentation images
    │   └── ...
    │
    ├── theme.config.js              # Nextra theme configuration
    ├── next.config.js               # Next.js configuration
    └── package.json                 # Documentation package
```

## Component Documentation Template

Each component follows a consistent documentation structure:

```mdx
# Button

The Button component is used to trigger an action or event.

## Import

```tsx
import { Button } from '@kookie-ui/core';
```

## Usage

<ComponentDemo>
  <Button>Click me</Button>
</ComponentDemo>

```tsx
<Button>Click me</Button>
```

## Examples

### Variants

<ComponentDemo>
  <Flex gap="md">
    <Button variant="solid">Solid</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </Flex>
</ComponentDemo>

```tsx
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Sizes

<ComponentDemo>
  <Flex gap="md" align="center">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </Flex>
</ComponentDemo>

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Colors

<ComponentDemo>
  <Flex gap="md">
    <Button color="primary">Primary</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="neutral">Neutral</Button>
  </Flex>
</ComponentDemo>

```tsx
<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="neutral">Neutral</Button>
```

### Visual Styles

<ComponentDemo>
  <Flex gap="md">
    <Button style="minimal">Minimal</Button>
    <Button style="modern">Modern</Button>
    <Button style="classic">Classic</Button>
  </Flex>
</ComponentDemo>

```tsx
<Button style="minimal">Minimal</Button>
<Button style="modern">Modern</Button>
<Button style="classic">Classic</Button>
```

## API Reference

<PropTable component="Button" />

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | The content of the button. |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'sm' | The size of the button. |
| variant | 'solid' \| 'outline' \| 'ghost' \| 'link' | 'solid' | The variant of the button. |
| style | 'minimal' \| 'modern' \| 'classic' | from theme | The visual style of the button. |
| color | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'neutral' | 'primary' | The color of the button. |
| asChild | boolean | false | Change the component to the HTML tag or component provided to the asChild prop. |
| className | string | - | Additional class names for the button. |
```

## Documentation Components

### ComponentDemo

```tsx
// components/component-demo.tsx
import { cn } from '@/utils/cn';

interface ComponentDemoProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  background?: 'white' | 'light' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function ComponentDemo({ 
  children, 
  className,
  centered = true,
  background = 'white',
  padding = 'md',
  ...props 
}: ComponentDemoProps) {
  return (
    <div
      className={cn(
        "my-6 w-full overflow-hidden rounded-md border border-gray-200",
        background === "white" && "bg-white",
        background === "light" && "bg-gray-50",
        background === "dark" && "bg-gray-900",
        padding === "none" && "p-0",
        padding === "sm" && "p-4",
        padding === "md" && "p-6",
        padding === "lg" && "p-8",
        centered && "flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### PropTable

```tsx
// components/prop-table.tsx
import React from 'react';
import { cn } from '@/utils/cn';

interface PropTableProps {
  component: string;
  data?: {
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }[];
}

export function PropTable({ component, data, className }: PropTableProps) {
  // If data is provided, use it, otherwise load component props documentation
  const propData = data || getComponentProps(component);

  return (
    <div className={cn("my-6 w-full", className)}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-left font-medium text-gray-500">Prop</th>
              <th className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-left font-medium text-gray-500">Type</th>
              <th className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-left font-medium text-gray-500">Default</th>
              <th className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-left font-medium text-gray-500">Description</th>
            </tr>
          </thead>
          <tbody>
            {propData.map((prop) => (
              <tr key={prop.name} className="border-b border-gray-200">
                <td className="px-4 py-2 align-top font-mono text-xs">
                  {prop.name}
                  {prop.required && <span className="ml-1 text-red-500">*</span>}
                </td>
                <td className="px-4 py-2 align-top font-mono text-xs">{prop.type}</td>
                <td className="px-4 py-2 align-top font-mono text-xs">{prop.default || '-'}</td>
                <td className="px-4 py-2 align-top text-xs">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper function to get component props documentation (example implementation)
function getComponentProps(component: string) {
  // In a real implementation, this would load prop documentation from a central source
  // For now, we'll return dummy data
  switch (component) {
    case 'Button':
      return [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The content of the button.',
          required: true,
        },
        {
          name: 'size',
          type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          default: "'sm'",
          description: 'The size of the button.',
        },
        // Additional props...
      ];
    default:
      return [];
  }
}
```

## Nextra Configuration

```js
// theme.config.js
export default {
  logo: <span className="font-bold text-xl">Kookie UI</span>,
  project: {
    link: 'https://github.com/yourusername/kookie-ui',
  },
  docsRepositoryBase: 'https://github.com/yourusername/kookie-ui/tree/main/apps/docs',
  footer: {
    text: `© ${new Date().getFullYear()} Kookie UI. Built with Nextra.`,
  },
  primaryHue: 230,
  navigation: {
    prev: true,
    next: true,
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return <span className="cursor-default font-semibold">{title}</span>;
      }
      return <>{title}</>;
    },
  },
  // Other Nextra theme options...
};
```

## Interactive Examples

Documentation includes interactive examples with editable code:

```tsx
// components/code-playground.tsx
import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button, Flex, Text } from '@kookie-ui/core';

interface CodePlaygroundProps {
  code: string;
  scope?: Record<string, any>;
  language?: string;
}

export function CodePlayground({ code, scope = {}, language = 'jsx' }: CodePlaygroundProps) {
  const [editorCode, setEditorCode] = useState(code.trim());

  return (
    <LiveProvider 
      code={editorCode} 
      scope={{ 
        Button, 
        Flex, 
        Text,
        ...scope 
      }}
      language={language}
    >
      <div className="rounded-md border border-gray-200 overflow-hidden mb-4">
        <div className="bg-white p-4">
          <LivePreview />
        </div>
        <LiveError />
      </div>
      <div className="rounded-md overflow-hidden">
        <LiveEditor
          onChange={setEditorCode}
          className="text-sm"
        />
      </div>
    </LiveProvider>
  );
}
```

## Theme Playground

A key feature of the documentation is an interactive theme playground:

```tsx
// components/theme-playground.tsx
import React, { useState } from 'react';
import { ThemeProvider, Button, Flex, Card, Text } from '@kookie-ui/core';

export function ThemePlayground() {
  const [color, setColor] = useState('blue');
  const [gray, setGray] = useState('slate');
  const [size, setSize] = useState('sm');
  const [style, setStyle] = useState('modern');
  
  const colors = ['blue', 'purple', 'green', 'red', 'yellow'];
  const grays = ['slate', 'gray', 'zinc', 'neutral', 'stone'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const styles = ['minimal', 'modern', 'classic'];
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Color</label>
          <Flex gap="sm">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full ${color === c ? 'ring-2 ring-offset-2' : ''}`}
                style={{ 
                  backgroundColor: `var(--${c}-500)`,
                  ringColor: `var(--${c}-500)` 
                }}
                aria-label={c}
              />
            ))}
          </Flex>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Gray</label>
          <Flex gap="sm">
            {grays.map((g) => (
              <button
                key={g}
                onClick={() => setGray(g)}
                className={`w-8 h-8 rounded-full ${gray === g ? 'ring-2 ring-offset-2' : ''}`}
                style={{ 
                  backgroundColor: `var(--${g}-500)`,
                  ringColor: `var(--${g}-500)` 
                }}
                aria-label={g}
              />
            ))}
          </Flex>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Size</label>
          <Flex gap="sm">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1 rounded ${
                  size === s 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {s}
              </button>
            ))}
          </Flex>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Style</label>
          <Flex gap="sm">
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`px-3 py-1 rounded ${
                  style === s 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {s}
              </button>
            ))}
          </Flex>
        </div>
      </div>
      
      <div className="p-6 border rounded-md">
        <ThemeProvider
          color={color}
          gray={gray}
          size={size}
          style={style}
        >
          {/* Preview section with various components */}
          <Flex direction="column" gap="md">
            <Card>
              <Card.Header>
                <Text weight="semibold">Card Title</Text>
              </Card.Header>
              <Card.Content>
                <Text>This is a card with customizable theme settings.</Text>
                <Flex gap="sm" className="mt-4">
                  <Button>Primary Action</Button>
                  <Button variant="outline">Secondary</Button>
                </Flex>
              </Card.Content>
            </Card>
            
            <Flex gap="sm">
              <Button variant="solid">Solid</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </Flex>
            
            {/* Additional component previews */}
          </Flex>
        </ThemeProvider>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md">
        <pre className="text-sm overflow-auto">
{`// Theme Configuration
<ThemeProvider
  color="${color}"
  gray="${gray}"
  size="${size}"
  style="${style}"
>
  {/* Your app */}
</ThemeProvider>`}
        </pre>
      </div>
    </div>
  );
}
```

## Documentation Development Process

1. **Component Documentation First**: Document components as they're built
2. **Live Examples**: Every component includes live, editable examples
3. **Comprehensive API Reference**: Detail every prop, variant, and usage pattern
4. **Design System Documentation**: Explain the theme system and design tokens
5. **Usage Guidelines**: Provide best practices and usage recommendations
6. **Version Control**: Documentation is versioned alongside the library

By following this structure, Kookie UI documentation serves both as a reference and a learning resource for users.
