"use client";

import { Text, Heading } from "../components/ui/text";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="w-full max-w-4xl">
        <div className="mb-12">
          <Text as="h1" size="3xl" weight="bold" color="gray" className="mb-4" variant="default">
            Kookie Text Component
          </Text>
          <Text size="md" className="mb-6">
            A flexible typography system with theme integration
          </Text>
        </div>

        {/* Size Variants */}
        <section className="mb-12">
          <Text as="h2" size="xl" weight="semibold" className="mb-4">
            Size Variants
          </Text>
          <div className="space-y-2">
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
        <section className="mb-12">
          <Text as="h2" size="xl" weight="semibold" className="mb-4">
            Font Weight Variants
          </Text>
          <div className="space-y-2">
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
        <section className="mb-12">
          <Text as="h2" size="xl" weight="semibold" className="mb-4">
            Style Variants
          </Text>
          <div className="space-y-2">
            <Text variant="default" size="sm">
              Default variant (stronger color)
            </Text>
            <Text variant="muted" size="sm">
              Muted variant (lighter color)
            </Text>
            <Text variant="accent" size="sm">
              Accent variant (middle ground)
            </Text>
          </div>
        </section>

        {/* Heading Component Demo */}
        <section className="mb-12 pt-8 border-t border-gray-200">
          <Heading as="h1" className="mb-8">
            Heading Component Demo
          </Heading>

          <div className="space-y-8">
            <div>
              <Heading as="h1">This is an H1 Heading</Heading>
              <Text variant="muted">Default size based on h1 (3xl), semibold weight</Text>
            </div>

            <div>
              <Heading as="h2">This is an H2 Heading</Heading>
              <Text variant="muted">Default size based on h2 (2xl), semibold weight</Text>
            </div>

            <div>
              <Heading as="h3">This is an H3 Heading</Heading>
              <Text variant="muted">Default size based on h3 (xl), semibold weight</Text>
            </div>

            <div>
              <Heading as="h4">This is an H4 Heading</Heading>
              <Text variant="muted">Default size based on h4 (lg), semibold weight</Text>
            </div>

            <div>
              <Heading as="h5">This is an H5 Heading</Heading>
              <Text variant="muted">Default size based on h5 (md), semibold weight</Text>
            </div>

            <div>
              <Heading as="h6">This is an H6 Heading</Heading>
              <Text variant="muted">Default size based on h6 (sm), semibold weight</Text>
            </div>

            <div>
              <Heading as="h2" level="h1" color="primary">
                Semantic H2, styled as H1, with primary color
              </Heading>
              <Text variant="muted">Using the level prop to style differently from the HTML element</Text>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
