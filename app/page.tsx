"use client";

import { Text, Heading } from "../components/ui/text";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="w-full max-w-3xl">
        {/* Page Header */}
        <Heading as="h1" color="primary" className="mb-2">
          Kookie Typography
        </Heading>
        <Text className="mb-12">A clean, consistent typography system with semantic components</Text>

        {/* Heading Examples */}
        <div className="mb-16">
          <Heading as="h1" className="mb-3">
            Heading 1
          </Heading>
          <Heading as="h2" className="mb-3">
            Heading 2
          </Heading>
          <Heading as="h3" className="mb-3">
            Heading 3
          </Heading>
          <Heading as="h4" className="mb-3">
            Heading 4
          </Heading>
          <Heading as="h5" className="mb-3">
            Heading 5
          </Heading>
          <Heading as="h6" className="mb-8">
            Heading 6
          </Heading>

          <Text variant="muted" className="mb-2">
            Headings 1-3 use bold weight by default
          </Text>
          <Text variant="muted">Headings 4-6 use semibold weight by default</Text>
        </div>

        {/* Text Variants */}
        <div className="mb-16">
          <Heading as="h2" className="mb-6">
            Text Variants
          </Heading>

          <Text className="mb-3">This is default text. It uses the theme's gray scale at a stronger shade.</Text>
          <Text variant="muted" className="mb-3">
            This is muted text. It uses a lighter shade for secondary information.
          </Text>
          <Text variant="accent" className="mb-3">
            This is accent text. It uses a middle-ground shade for mild emphasis.
          </Text>
        </div>

        {/* Semantic Colors */}
        <div className="mb-16">
          <Heading as="h2" className="mb-6">
            Semantic Colors
          </Heading>

          <Text color="primary" className="mb-3">
            Primary color text for brand elements
          </Text>
          <Text color="success" className="mb-3">
            Success color text for positive states
          </Text>
          <Text color="warning" className="mb-3">
            Warning color text for cautionary states
          </Text>
          <Text color="danger" className="mb-3">
            Danger color text for error states
          </Text>
        </div>

        {/* Text Utilities */}
        <div className="mb-16">
          <Heading as="h2" className="mb-6">
            Text Utilities
          </Heading>

          <Heading as="h3" className="mb-3">
            Font Weights
          </Heading>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Text weight="light">Light text</Text>
            <Text weight="normal">Normal text</Text>
            <Text weight="medium">Medium text</Text>
            <Text weight="semibold">Semibold text</Text>
            <Text weight="bold">Bold text</Text>
            <Text weight="extrabold">Extrabold text</Text>
          </div>

          <Heading as="h3" className="mb-3">
            Text Sizes
          </Heading>
          <Text size="xs" className="mb-2">
            Extra small text (xs)
          </Text>
          <Text size="sm" className="mb-2">
            Small text (sm)
          </Text>
          <Text size="md" className="mb-2">
            Medium text (md - default)
          </Text>
          <Text size="lg" className="mb-2">
            Large text (lg)
          </Text>
          <Text size="xl" className="mb-2">
            Extra large text (xl)
          </Text>
        </div>
      </main>
    </div>
  );
}
