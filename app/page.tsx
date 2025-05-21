"use client";

import { Text, Heading } from "../components/ui/text";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="w-full max-w-4xl">
        <Heading as="h1" size="3xl" color="primary" className="mb-4">
          Kookie Typography System
        </Heading>
        <Text size="lg" className="mb-10">
          A cohesive typography system with semantic components for different content types
        </Text>

        {/* Typography Hierarchy */}
        <section className="mb-10">
          <Heading as="h2" className="mb-6">
            Typography Hierarchy
          </Heading>

          <Heading as="h3" className="mb-4">
            Automatic Heading Sizes
          </Heading>
          <Heading as="h1" className="mb-2">
            H1 Heading (automatically uses size="3xl" → text-4xl)
          </Heading>
          <Text className="mb-4">No size prop needed - automatically sized based on heading level</Text>

          <Heading as="h2" className="mb-2">
            H2 Heading (automatically uses size="2xl" → text-3xl)
          </Heading>
          <Text className="mb-4">No size prop needed - automatically sized based on heading level</Text>

          <Heading as="h3" className="mb-2">
            H3 Heading (automatically uses size="xl" → text-2xl)
          </Heading>
          <Text className="mb-4">No size prop needed - automatically sized based on heading level</Text>

          <Heading as="h4" className="mb-2">
            H4 Heading (automatically uses size="lg" → text-xl)
          </Heading>
          <Text className="mb-4">No size prop needed - automatically sized based on heading level</Text>

          <Heading as="h5" className="mb-2">
            H5 Heading (automatically uses size="md" → text-lg)
          </Heading>
          <Text className="mb-4">No size prop needed - automatically sized based on heading level</Text>

          <Heading as="h6" className="mb-2">
            H6 Heading (automatically uses size="sm" → text-base)
          </Heading>
          <Text className="mb-6">No size prop needed - automatically sized based on heading level</Text>

          <Heading as="h3" className="mb-4">
            With Explicit Size Props
          </Heading>
          <Heading as="h1" size="3xl" className="mb-2">
            H1 Heading with explicit size="3xl"
          </Heading>
          <Text className="mb-4">Same as automatic sizing for h1</Text>

          <Heading as="h2" size="xl" className="mb-2">
            H2 Heading with explicit size="xl"
          </Heading>
          <Text className="mb-4">Overrides the default size="2xl" for h2</Text>
        </section>

        {/* Text Variants */}
        <section className="mb-10">
          <Heading as="h2" className="mb-6">
            Text Variants
          </Heading>

          <Text className="mb-2">Default text for standard content.</Text>
          <Text variant="muted" className="mb-2">
            Muted text for less emphasis.
          </Text>
          <Text variant="accent" className="mb-6">
            Accent text for subtle emphasis.
          </Text>
        </section>

        {/* Semantic Colors */}
        <section className="mb-10">
          <Heading as="h2" className="mb-6">
            Semantic Colors
          </Heading>

          <Heading as="h3" color="primary" className="mb-2">
            Primary Color
          </Heading>
          <Text color="primary" className="mb-4">
            Primary colored text for brand elements.
          </Text>

          <Heading as="h3" color="success" className="mb-2">
            Success Color
          </Heading>
          <Text color="success" className="mb-4">
            Success colored text for positive states.
          </Text>

          <Heading as="h3" color="warning" className="mb-2">
            Warning Color
          </Heading>
          <Text color="warning" className="mb-4">
            Warning colored text for cautionary states.
          </Text>

          <Heading as="h3" color="danger" className="mb-2">
            Danger Color
          </Heading>
          <Text color="danger" className="mb-4">
            Danger colored text for error states.
          </Text>
        </section>

        {/* Font Weights */}
        <section className="mb-10">
          <Heading as="h2" className="mb-6">
            Font Weights
          </Heading>

          <Text weight="light" className="mb-2">
            Light (300) for subtle, elegant text
          </Text>
          <Text weight="normal" className="mb-2">
            Normal (400) for standard body text
          </Text>
          <Text weight="medium" className="mb-2">
            Medium (500) for slightly emphasized text
          </Text>
          <Text weight="semibold" className="mb-2">
            Semibold (600) for heading text
          </Text>
          <Text weight="bold" className="mb-2">
            Bold (700) for strong emphasis
          </Text>
          <Text weight="extrabold" className="mb-2">
            Extrabold (800) for very strong emphasis
          </Text>
        </section>

        {/* Advanced Examples */}
        <section className="mb-10">
          <Heading as="h2" className="mb-6">
            Advanced Examples
          </Heading>

          <Heading as="h3" className="mb-4">
            Semantic vs. Visual
          </Heading>
          <Heading as="h2" level="h4" className="mb-2">
            This is semantically an H2 but styled as H4 (size="lg")
          </Heading>
          <Text className="mb-2">The HTML element is h2 for SEO, but visually appears as h4.</Text>

          <Heading as="h4" level="h1" className="mb-2">
            This is semantically an H4 but styled as H1 (size="3xl")
          </Heading>
          <Text className="mb-6">The HTML element is h4 for document hierarchy, but visually appears as h1.</Text>

          <Heading as="h3" className="mb-4">
            Text Sizes
          </Heading>
          <Text size="xs" className="mb-2">
            Extra small text (xs)
          </Text>
          <Text size="sm" className="mb-2">
            Small text (sm)
          </Text>
          <Text size="md" className="mb-2">
            Medium text (md) - default
          </Text>
          <Text size="lg" className="mb-2">
            Large text (lg)
          </Text>
          <Text size="xl" className="mb-2">
            Extra large text (xl)
          </Text>
        </section>
      </main>
    </div>
  );
}
