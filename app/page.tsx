"use client";

import React from "react";
import { Button } from "../components/ui/button/button";
import { Text } from "../components/ui/text";
import { Heading } from "../components/ui/heading";

export default function Home() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Heading as="h1" color="primary" className="mb-2">
          Kookie UI Components
        </Heading>
        <Text className="mb-12">A clean, consistent design system with semantic components</Text>

        {/* Button Demo */}
        <section className="mb-16">
          <Heading as="h2" className="mb-6">
            Button Variants
          </Heading>

          {/* Extra Large (XL) Button Size */}
          <div className="mb-12">
            <Heading as="h3" size="md" className="mb-4 pb-2 border-b">
              Size XL
            </Heading>
            <div className="flex flex-col gap-8">
              {/* Solid Variant - XL */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Solid
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="xl">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="xl" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Tinted Variant - XL */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Tinted
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="xl">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="xl" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Outline Variant - XL */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Outline
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="xl">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="xl" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Ghost Variant - XL */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Ghost
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="xl">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="xl" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Link Variant - XL */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Link
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="xl">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="xl" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large (LG) Button Size */}
          <div className="mb-12">
            <Heading as="h3" size="md" className="mb-4 pb-2 border-b">
              Size LG
            </Heading>
            <div className="flex flex-col gap-8">
              {/* Solid Variant - LG */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Solid
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="lg">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="lg" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Tinted Variant - LG */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Tinted
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="lg">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="lg" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Outline Variant - LG */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Outline
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="lg">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="lg" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Ghost Variant - LG */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Ghost
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="lg">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="lg" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Link Variant - LG */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Link
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="lg">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="lg" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium (MD) Button Size */}
          <div className="mb-12">
            <Heading as="h3" size="md" className="mb-4 pb-2 border-b">
              Size MD
            </Heading>
            <div className="flex flex-col gap-8">
              {/* Solid Variant - MD */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Solid
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="md">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="md" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Tinted Variant - MD */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Tinted
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="md">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="md" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Outline Variant - MD */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Outline
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="md">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="md" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Ghost Variant - MD */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Ghost
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="md">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="md" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Link Variant - MD */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Link
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="md">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="md" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small (SM) Button Size */}
          <div className="mb-12">
            <Heading as="h3" size="md" className="mb-4 pb-2 border-b">
              Size SM
            </Heading>
            <div className="flex flex-col gap-8">
              {/* Solid Variant - SM */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Solid
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="sm">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="sm" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Tinted Variant - SM */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Tinted
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="sm">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="sm" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Outline Variant - SM */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Outline
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="sm">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="sm" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Ghost Variant - SM */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Ghost
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="sm">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="sm" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Link Variant - SM */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Link
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="sm">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="sm" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Small (XS) Button Size */}
          <div className="mb-12">
            <Heading as="h3" size="md" className="mb-4 pb-2 border-b">
              Size XS
            </Heading>
            <div className="flex flex-col gap-8">
              {/* Solid Variant - XS */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Solid
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="xs">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="solid" color="primary" size="xs" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Tinted Variant - XS */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Tinted
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="xs">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="tinted" color="primary" size="xs" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Outline Variant - XS */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Outline
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="xs">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="outline" color="primary" size="xs" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Ghost Variant - XS */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Ghost
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="xs">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" color="primary" size="xs" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>

              {/* Link Variant - XS */}
              <div>
                <Heading as="h4" size="sm" className="mb-3">
                  Link
                </Heading>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="xs">
                      Standard
                    </Button>
                    <Text size="xs" className="mt-2">
                      Standard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="link" color="primary" size="xs" appearance="minimal">
                      Minimal
                    </Button>
                    <Text size="xs" className="mt-2">
                      Minimal
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Demo */}
        <section className="mb-16">
          <Heading as="h2" className="mb-6">
            Typography
          </Heading>

          {/* Heading Examples */}
          <div className="bg-white p-6 rounded-lg mb-8">
            <Heading as="h3" size="sm" className="mb-4">
              Headings
            </Heading>
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
            <Heading as="h6" className="mb-3">
              Heading 6
            </Heading>

            <Text variant="muted" className="mt-4 mb-2">
              Headings 1-3 use bold weight by default
            </Text>
            <Text variant="muted">Headings 4-6 use semibold weight by default</Text>
          </div>

          {/* Text Variants */}
          <div className="bg-white p-6 rounded-lg mb-8">
            <Heading as="h3" size="sm" className="mb-4">
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
          <div className="bg-white p-6 rounded-lg mb-8">
            <Heading as="h3" size="sm" className="mb-4">
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
          <div className="bg-white p-6 rounded-lg">
            <Heading as="h3" size="sm" className="mb-4">
              Text Utilities
            </Heading>

            <Heading as="h4" size="xs" className="mb-3">
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

            <Heading as="h4" size="xs" className="mb-3">
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
        </section>
      </div>
    </div>
  );
}
