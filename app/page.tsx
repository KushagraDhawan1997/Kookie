"use client";

import { Text } from "@/components/ui/text/text";
import { Box } from "@/components/ui/box";
import { Flex } from "@/components/ui/flex";
import { Grid } from "@/components/ui/grid";
import { TypographySize } from "@/components/ui/text/typography-types";
import { Heading } from "@/components/ui/text/heading";
import { Button } from "@/components/ui/button/button";
import { ButtonSize, ButtonVariant } from "@/components/ui/button/button-types";
import { ThemeRoundness } from "@/components/providers/theme-types";
import React from "react";

/**
 * Kookie Design System Demo
 *
 * This page showcases the token-based design system,
 * demonstrating spacing tokens, dimension tokens, typography tokens and responsive layouts.
 *
 * @returns {JSX.Element} Design system demo page
 */
export default function Page() {
  // Spacing tokens to demonstrate (linear 1-24)
  const spacingTokens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Dimension tokens to demonstrate
  const numericSizeTokens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const namedSizeTokens = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl"];

  // Typography tokens to demonstrate
  const typographyTokens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as TypographySize[];

  return (
    <Box width="full" maxWidth="2xl" mx="auto" my={24}>
      <Flex direction="column" gap={24}>
        {/* Header */}
        <Flex direction="column" gap={2}>
          <Text as="h1" size={12 as TypographySize} weight="bold">
            Kookie
          </Text>
          <Text size={4 as TypographySize}>Token-based spacing, dimensions, and typography for consistent interfaces</Text>
        </Flex>

        {/* BUTTON DEMO SECTION */}
        <Flex direction="column" gap={16}>
          {/* Variants Demo */}
          <Flex direction="column" gap={4} align="start">
            <Text as="h2" size={6} weight="semibold">
              Button Variants
            </Text>
            <Text as="div" variant="muted">
              A comprehensive showcase of button variants.
            </Text>
            <Grid gap={4} columns={6} justifyItems="start">
              <Button variant="modern">Kookie</Button>
              <Button variant="solid">Kookie</Button>
              <Button variant="tinted">Kookie</Button>
              <Button variant="outline">Kookie</Button>
              <Button variant="ghost">Kookie</Button>
              <Button variant="link">Kookie</Button>
            </Grid>
          </Flex>

          {/* Colors Demo */}
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6} weight="semibold">
              Color Variations
            </Text>
            <Text as="div" variant="muted">
              Explore all color options for each button variant.
            </Text>
            <Grid gap={8}>
              {/* Primary */}
              <Flex gap={4} wrap="wrap">
                <Button variant="modern">Kookie</Button>
                <Button>Kookie</Button>
                <Button variant="tinted">Kookie</Button>
                <Button variant="outline">Kookie</Button>
                <Button variant="ghost">Kookie</Button>
                <Button variant="link">Kookie</Button>
              </Flex>
              {/* Gray */}
              <Flex gap={4} wrap="wrap">
                <Button color="gray" variant="modern">
                  Kookie
                </Button>
                <Button color="gray">Kookie</Button>
                <Button color="gray" variant="tinted">
                  Kookie
                </Button>
                <Button color="gray" variant="outline">
                  Kookie
                </Button>
                <Button color="gray" variant="ghost">
                  Kookie
                </Button>
                <Button color="gray" variant="link">
                  Kookie
                </Button>
              </Flex>
              {/* Error */}
              <Flex gap={4} wrap="wrap">
                <Button color="error" variant="modern">
                  Kookie
                </Button>
                <Button color="error">Kookie</Button>
                <Button color="error" variant="tinted">
                  Kookie
                </Button>
                <Button color="error" variant="outline">
                  Kookie
                </Button>
                <Button color="error" variant="ghost">
                  Kookie
                </Button>
                <Button color="error" variant="link">
                  Kookie
                </Button>
              </Flex>
              {/* Success */}
              <Flex gap={4} wrap="wrap">
                <Button color="success" variant="modern">
                  Kookie
                </Button>
                <Button color="success">Kookie</Button>
                <Button color="success" variant="tinted">
                  Kookie
                </Button>
                <Button color="success" variant="outline">
                  Kookie
                </Button>
                <Button color="success" variant="ghost">
                  Kookie
                </Button>
                <Button color="success" variant="link">
                  Kookie
                </Button>
              </Flex>
              {/* Warning */}
              <Flex gap={4} wrap="wrap">
                <Button color="warning" variant="modern">
                  Kookie
                </Button>
                <Button color="warning">Kookie</Button>
                <Button color="warning" variant="tinted">
                  Kookie
                </Button>
                <Button color="warning" variant="outline">
                  Kookie
                </Button>
                <Button color="warning" variant="ghost">
                  Kookie
                </Button>
                <Button color="warning" variant="link">
                  Kookie
                </Button>
              </Flex>
            </Grid>
          </Flex>

          {/* Roundness Demo */}
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6} weight="semibold">
              Roundness Variations
            </Text>
            <Text as="div" variant="muted">
              Compare all roundness options for each button size.
            </Text>
            <Flex gap={6} align="start" wrap="wrap">
              {[1, 2, 3, 4, 5, 6].map((size) => (
                <Flex key={`size-col-${size}`} direction="column" align="center" gap={2}>
                  {["sm", "md", "lg", "xl"].map((roundness) => (
                    <Button key={`size${size}-roundness${roundness}`} size={size as ButtonSize} roundness={roundness as ThemeRoundness}>
                      Kookie
                    </Button>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Flex>

          {/* Size Variations Demo */}
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6} weight="semibold">
              Size Variations
            </Text>
            <Text as="div" variant="muted">
              See all button sizes across all variants.
            </Text>
            <Grid justifyItems="start" justify="start" columns="120px repeat(6, 1fr)" gap={2}>
              {[1, 2, 3, 4, 5, 6].map((size) => (
                <React.Fragment key={size}>
                  <Text size={2} weight="semibold" style={{ display: "flex", alignItems: "center" }}>{`Size ${size}`}</Text>
                  {["modern", "solid", "tinted", "outline", "ghost", "link"].map((variant) => (
                    <Button key={variant} size={size as ButtonSize} variant={variant as ButtonVariant}>
                      Kookie
                    </Button>
                  ))}
                </React.Fragment>
              ))}
            </Grid>
          </Flex>

          {/* Interactive States Demo */}
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6} weight="semibold">
              Interactive States
            </Text>
            <Text as="div" variant="muted">
              Hover over buttons to see their interactive states.
            </Text>
            <Flex gap={4} wrap="wrap">
              <Button variant="modern">Kookie</Button>
              <Button>Kookie</Button>
              <Button variant="tinted">Kookie</Button>
              <Button variant="outline">Kookie</Button>
              <Button variant="ghost">Kookie</Button>
              <Button variant="link">Kookie</Button>
            </Flex>
          </Flex>
        </Flex>

        {/* SECTION: Typography Tokens */}
        <Flex direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6 as TypographySize} weight="semibold">
              Typography Tokens
            </Text>
            <Text as="div" variant="muted">
              Typography tokens provide a consistent scale for text sizes and spacing.
            </Text>
          </Flex>
          <Divider />
          <Flex direction="column" gap={5}>
            {typographyTokens.map((token) => (
              <Box key={token} p={4}>
                <Flex direction="column" gap={4}>
                  <Text weight="semibold" size={2 as TypographySize} variant="muted">
                    Text Size {token}
                  </Text>
                  <Text as="div" size={token}>
                    The quick brown fox jumped.
                  </Text>
                  <Text as="div" size={1 as TypographySize} variant="muted">
                    {`size={${token}}`} – Font size: var(--font-size-${token})
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>

        <Divider />

        {/* SECTION: Spacing Tokens */}
        <Flex direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6 as TypographySize} weight="semibold">
              Spacing Tokens
            </Text>
            <Text as="div" variant="muted">
              Spacing tokens provide a consistent scale for padding, margins and layout spacing.
            </Text>
          </Flex>
          <Divider />
          <Grid gap={5} columns="repeat(auto-fill, minmax(250px, 1fr))">
            {spacingTokens.map((token) => (
              <Box key={token} p={4}>
                <Flex direction="column" gap={3}>
                  <Text weight="semibold">Space {token}</Text>
                  <Box style={{ padding: `var(--space-${token})`, outline: "1px dashed var(--gray-5)" }}>
                    <Box style={{ height: "24px", width: "100%" }} />
                  </Box>
                  <Text as="div" size={2 as TypographySize} variant="muted">{`--space-${token}`}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Flex>

        <Divider />

        {/* SECTION: Dimension Tokens */}
        <Flex direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6 as TypographySize} weight="semibold">
              Dimension Tokens
            </Text>
            <Text as="div" variant="muted">
              Dimension tokens provide consistent sizing for UI elements.
            </Text>
          </Flex>
          <Divider />
          <Flex direction="column" gap={6}>
            <Flex direction="column" gap={4}>
              <Text as="h3" size={5 as TypographySize} weight="medium">
                Numeric Size Tokens
              </Text>
              <Divider />
              <Grid gap={4} columns="repeat(auto-fill, minmax(200px, 1fr))">
                {numericSizeTokens.map((token) => (
                  <Box key={token} p={3}>
                    <Flex direction="column" gap={2}>
                      <Text weight="semibold">Size {token}</Text>
                      <Box style={{ width: `var(--size-${token})`, maxWidth: "100%", height: "24px" }} />
                      <Text as="div" size={2 as TypographySize} variant="muted">{`--size-${token}`}</Text>
                    </Flex>
                  </Box>
                ))}
              </Grid>
            </Flex>
            <Flex direction="column" gap={4}>
              <Text as="h3" size={5 as TypographySize} weight="medium">
                Named Size Tokens
              </Text>
              <Divider />
              <Grid gap={4} columns="repeat(auto-fill, minmax(200px, 1fr))">
                {namedSizeTokens.map((token) => (
                  <Box key={token} p={3}>
                    <Flex direction="column" gap={2}>
                      <Text weight="semibold">Size {token}</Text>
                      <Box style={{ width: `var(--size-${token})`, maxWidth: "100%", height: "24px" }} />
                      <Text as="div" size={2 as TypographySize} variant="muted">{`--size-${token}`}</Text>
                    </Flex>
                  </Box>
                ))}
              </Grid>
            </Flex>
          </Flex>
        </Flex>

        <Divider />

        {/* SECTION: Responsive Design */}
        <Flex direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6 as TypographySize} weight="semibold">
              Responsive Design
            </Text>
            <Text variant="muted">Token-based responsive layouts adapt to different screen sizes.</Text>
          </Flex>
          <Divider />
          <Box p={{ base: 3, md: 5, lg: 6 }} width={{ base: "full", md: "lg", lg: "xl" }}>
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 6 }} align={{ base: "stretch", md: "center" }}>
              <Box style={{ height: "80px", flexShrink: 0, width: "160px" }} />
              <Flex direction="column" gap={3}>
                <Text weight="semibold" color="primary">
                  Responsive Component
                </Text>
                <Text>This component uses responsive token values for padding, width, and layout. Try resizing your browser window to see how it adapts.</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Divider />

        {/* SECTION: Token vs Raw Values */}
        <Flex direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6 as TypographySize} weight="semibold">
              Token vs Raw Values
            </Text>
            <Text variant="muted">The system supports both token values and raw CSS values.</Text>
          </Flex>
          <Divider />
          <Flex gap={6} wrap="wrap">
            <Box p={4} style={{ width: "320px" }}>
              <Flex direction="column" gap={2}>
                <Text weight="semibold" color="success">
                  Token Values
                </Text>
                <Text as="div" size={2 as TypographySize} variant="muted">{`<Text size={4}>Text with token</Text>`}</Text>
              </Flex>
            </Box>
            <Box p={4} style={{ width: "320px" }}>
              <Flex direction="column" gap={2}>
                <Text weight="semibold" color="error">
                  Raw CSS Values
                </Text>
                <Text as="div" size={2 as TypographySize} variant="muted">{`<Text style={{ fontSize: "20px" }}>Text with raw CSS</Text>`}</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Divider />

        {/* SECTION: Margin Props */}
        <Flex direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Text as="h2" size={6 as TypographySize} weight="semibold">
              Margin Props
            </Text>
            <Text variant="muted">Components support direct margin props for convenient spacing control, similar to Radix UI.</Text>
          </Flex>
          <Divider />
          <Flex direction="column" gap={6}>
            <Text as="div" style={{ padding: "var(--space-2)" }}>
              This text has mt=4 and mb=4 margin props
            </Text>
            <Text as="div" style={{ padding: "var(--space-2)" }}>
              This text has my=6 margin prop (top and bottom)
            </Text>
            <Text as="div" style={{ width: "fit-content", padding: "var(--space-2)" }}>
              This text has mx=8 margin prop (left and right)
            </Text>
            <Text as="div" style={{ width: "fit-content", padding: "var(--space-2)" }}>
              This text has m=3 margin all around
            </Text>
            <Flex align="center" gap={5}>
              <Text style={{ padding: "var(--space-2)" }}>mr=5</Text>
              <Text style={{ padding: "var(--space-2)" }}>ml=5</Text>
            </Flex>
            <Text as="div" size={2 as TypographySize} variant="muted">
              All components accepting MarginProps can use m, mx, my, mt, mr, mb, ml props with token values
            </Text>
          </Flex>
        </Flex>

        <Divider />

        {/* SECTION: Heading Tokens */}
        <Flex direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Heading as="h2" size={6 as TypographySize} weight="extrabold">
              Heading Tokens
            </Heading>
            <Text variant="muted">The Heading component uses a separate, larger scale and stronger defaults than Text. Only h1-h6 are allowed.</Text>
          </Flex>
          <Divider />
          <Flex direction="column" gap={5}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((token) => (
              <Box key={token} p={4}>
                <Flex direction="column" gap={4}>
                  <Text weight="semibold" size={2 as TypographySize} variant="muted">
                    Heading Size {token}
                  </Text>
                  <Heading size={token as TypographySize} weight="semibold">
                    The quick brown fox jumped.
                  </Heading>
                  <Text size={1 as TypographySize} variant="muted">
                    {`size={${token}}`} – Font size: heading-size-{token}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

function Divider() {
  return <div style={{ borderBottom: "1px solid var(--gray-4)" }} />;
}
