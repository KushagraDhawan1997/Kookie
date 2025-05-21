"use client";

import { Text } from "../components/ui/text";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <Text as="h1" size="3xl" weight="bold" color="primary" className="mb-4">
            Kookie UI Text Component
          </Text>
          <Text size="lg" className="mb-6">
            A flexible typography system with theme integration
          </Text>
        </div>

        {/* Size Variants */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Size Variants
          </Text>
          <div className="space-y-4">
            <Text size="xs">Text size: xs (extra small)</Text>
            <Text size="sm">Text size: sm (small)</Text>
            <Text size="md">Text size: md (medium - default)</Text>
            <Text size="lg">Text size: lg (large)</Text>
            <Text size="xl">Text size: xl (extra large)</Text>
            <Text size="2xl">Text size: 2xl (2x large)</Text>
            <Text size="3xl">Text size: 3xl (3x large)</Text>
          </div>
        </section>

        {/* Weight Variants */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Font Weight Variants
          </Text>
          <div className="space-y-4">
            <Text weight="thin">Font weight: thin</Text>
            <Text weight="extralight">Font weight: extralight</Text>
            <Text weight="light">Font weight: light</Text>
            <Text weight="normal">Font weight: normal (default)</Text>
            <Text weight="medium">Font weight: medium</Text>
            <Text weight="semibold">Font weight: semibold</Text>
            <Text weight="bold">Font weight: bold</Text>
            <Text weight="extrabold">Font weight: extrabold</Text>
            <Text weight="black">Font weight: black</Text>
          </div>
        </section>

        {/* Style Variants */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Style Variants
          </Text>
          <div className="space-y-4">
            <Text variant="default" size="lg">
              Default variant (stronger color)
            </Text>
            <Text variant="muted" size="lg">
              Muted variant (lighter color)
            </Text>
            <Text variant="accent" size="lg">
              Accent variant (middle ground)
            </Text>
          </div>
        </section>

        {/* Semantic Colors */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Semantic Colors
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Text color="primary">Primary color</Text>
            <Text color="primary" variant="muted">
              Primary color (muted)
            </Text>
            <Text color="success">Success color</Text>
            <Text color="success" variant="muted">
              Success color (muted)
            </Text>
            <Text color="warning">Warning color</Text>
            <Text color="warning" variant="muted">
              Warning color (muted)
            </Text>
            <Text color="danger">Danger color</Text>
            <Text color="danger" variant="muted">
              Danger color (muted)
            </Text>
            <Text color="gray">Gray color (default)</Text>
            <Text color="gray" variant="muted">
              Gray color (muted)
            </Text>
          </div>
        </section>

        {/* Direct Tailwind Colors */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Direct Tailwind Colors
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Text color="blue">blue</Text>
            <Text color="indigo">indigo</Text>
            <Text color="purple">purple</Text>
            <Text color="pink">pink</Text>
            <Text color="rose">rose</Text>
            <Text color="red">red</Text>
            <Text color="orange">orange</Text>
            <Text color="amber">amber</Text>
            <Text color="yellow">yellow</Text>
            <Text color="lime">lime</Text>
            <Text color="green">green</Text>
            <Text color="emerald">emerald</Text>
            <Text color="teal">teal</Text>
            <Text color="cyan">cyan</Text>
          </div>
        </section>

        {/* Text Alignment */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Text Alignment
          </Text>
          <div className="space-y-4 w-full">
            <Text align="left" className="border-b pb-2">
              Left aligned text (default)
            </Text>
            <Text align="center" className="border-b pb-2">
              Center aligned text
            </Text>
            <Text align="right" className="border-b pb-2">
              Right aligned text
            </Text>
            <Text align="justify" className="border-b pb-2">
              Justified text with longer content to demonstrate. This text should stretch across the container and be justified on both sides to create an even text block appearance when there is enough content.
            </Text>
          </div>
        </section>

        {/* HTML Elements */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            HTML Element Types
          </Text>
          <div className="space-y-4">
            <Text as="p">Paragraph (p) - default</Text>
            <Text as="h1" size="xl">
              Heading 1 (h1)
            </Text>
            <Text as="h2" size="lg">
              Heading 2 (h2)
            </Text>
            <Text as="h3">Heading 3 (h3)</Text>
            <Text as="span" className="border p-1">
              Inline span element
            </Text>
          </div>
        </section>

        {/* Truncation */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Text Truncation
          </Text>
          <div className="space-y-4">
            <Text>Normal text that will wrap to the next line when it reaches the end of its container and continue on the next line.</Text>
            <div className="max-w-sm">
              <Text truncate>Truncated text with ellipsis that will not wrap and instead will be cut off with an ellipsis (...) when it reaches the end of its container.</Text>
            </div>
          </div>
        </section>

        {/* Usage in Code */}
        <section className="mb-12 border p-6 rounded-md">
          <Text as="h2" size="xl" weight="semibold" className="mb-4 pb-2 border-b">
            Usage Example
          </Text>
          <div className="bg-slate-50 p-4 rounded-md">
            <Text as="div" size="sm" className="font-mono whitespace-pre">
              {`import { Text } from "kookie/ui/text";

// Basic usage
<Text>Default text</Text>

// With semantic color and size
<Text color="primary" size="lg">Primary large text</Text>

// With variant
<Text variant="muted">Muted text</Text>

// With direct Tailwind color
<Text color="indigo" variant="accent">Accent indigo text</Text>

// As a heading with weight
<Text as="h2" size="2xl" weight="bold">Section Heading</Text>

// With alignment
<Text align="center">Centered text</Text>

// With truncation
<Text truncate>Text that truncates with ellipsis...</Text>`}
            </Text>
          </div>
        </section>
      </main>
    </div>
  );
}
