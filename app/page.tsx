"use client";

import { Text } from "../components/ui/text";
import { Heading } from "../components/ui/heading";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="w-full max-w-3xl">
        {/* Page Header */}
        <Heading as="h1" color="primary" className="mb-2">
          Kookie UI Components
        </Heading>
        <Text className="mb-12">A clean, consistent design system with semantic components</Text>

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

        {/* Button Examples */}
        <div className="mb-16">
          <Heading as="h2" className="mb-6">
            Button Component
          </Heading>

          {/* Button Variants */}
          <Heading as="h3" className="mb-3">
            Button Variants
          </Heading>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="solid">Solid Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            <Button variant="tinted">Tinted Button</Button>
          </div>

          {/* Semantic Colors */}
          <Heading as="h3" className="mb-3">
            Semantic Colors
          </Heading>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button color="gray">Gray</Button>
          </div>

          {/* Direct Tailwind Colors */}
          <Heading as="h3" className="mb-3">
            Direct Tailwind Colors
          </Heading>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button color="violet">Violet</Button>
            <Button color="amber">Amber</Button>
            <Button color="teal">Teal</Button>
            <Button color="pink">Pink</Button>
          </div>

          {/* Button Sizes */}
          <Heading as="h3" className="mb-3">
            Button Sizes
          </Heading>
          <div className="flex items-center flex-wrap gap-4 mb-8">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>

          {/* Button Radius */}
          <Heading as="h3" className="mb-3">
            Button Radius
          </Heading>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button radius="none">No Radius</Button>
            <Button radius="sm">Small Radius</Button>
            <Button radius="md">Medium Radius</Button>
            <Button radius="lg">Large Radius</Button>
            <Button radius="full">Full Radius</Button>
          </div>

          {/* Button States */}
          <Heading as="h3" className="mb-3">
            Button States
          </Heading>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button>Default</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth>Full Width Button</Button>
          </div>

          {/* Button Variants + Colors */}
          <Heading as="h3" className="mb-3">
            Variants + Colors
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Button variant="outline" color="primary">
              Primary Outline
            </Button>
            <Button variant="ghost" color="success">
              Success Ghost
            </Button>
            <Button variant="link" color="danger">
              Danger Link
            </Button>
            <Button variant="solid" color="warning">
              Warning Solid
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
