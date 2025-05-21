"use client";

import { Text } from "../components/ui/text";

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
      </main>
    </div>
  );
}
