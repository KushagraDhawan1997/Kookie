# Kookie Design Token Reference

## Overview

This document serves as a reference guide for the design tokens used across the Kookie UI system. Design tokens are the foundational visual properties that ensure consistency throughout the UI.

## Color System

### Semantic Colors

| Semantic Name | Default Tailwind Color | Purpose                                          |
| ------------- | ---------------------- | ------------------------------------------------ |
| primary       | blue                   | Main actions, branding, key interactive elements |
| success       | green                  | Success states, confirmations, positive actions  |
| warning       | amber                  | Warnings, cautions, actions that need attention  |
| danger        | rose                   | Errors, destructive actions, critical states     |

### Color Shades & Usage

Each semantic color uses specific Tailwind shades for different purposes:

| Context           | Shade | Examples                                           |
| ----------------- | ----- | -------------------------------------------------- |
| Text (default)    | 700   | Standard text, labels                              |
| Text (muted)      | 400   | Secondary text, hints, less emphasis               |
| Text (accent)     | 600   | Emphasized text, but not primary                   |
| Backgrounds       | 500   | Button backgrounds, indicators                     |
| Hover States      | 600   | Button hover background                            |
| Borders           | 500   | Input borders, dividers                            |
| Light Backgrounds | 50    | Subtle highlights, hover states for ghost variants |

### Gray Scale

The UI uses a configurable gray scale, with "slate" as the default:

| Gray Scale | Usage                     |
| ---------- | ------------------------- |
| slate      | Default gray scale        |
| gray       | Alternative, warmer grays |
| zinc       | Cooler, neutral grays     |
| neutral    | True neutral grays        |
| stone      | Warm, organic grays       |

## Typography

### Font Sizes

| Token | Tailwind Class | Font Size | Line Height | Usage                       |
| ----- | -------------- | --------- | ----------- | --------------------------- |
| xs    | text-xs        | 0.75rem   | 1rem (16px) | Small labels, captions      |
| sm    | text-sm        | 0.875rem  | 1.25rem     | Secondary text, UI elements |
| md    | text-base      | 1rem      | 1.5rem      | Body text, default size     |
| lg    | text-lg        | 1.125rem  | 1.75rem     | Large text, subheadings     |
| xl    | text-xl        | 1.25rem   | 2rem        | Headings, featured text     |
| 2xl   | text-2xl       | 1.5rem    | 2.25rem     | Major headings              |
| 3xl   | text-3xl       | 1.875rem  | 2.5rem      | Hero headings, display text |

### Font Weights

| Token      | Tailwind Class  | Weight | Usage                                 |
| ---------- | --------------- | ------ | ------------------------------------- |
| thin       | font-thin       | 100    | Extremely light text, specialized use |
| extralight | font-extralight | 200    | Very light text, specialized use      |
| light      | font-light      | 300    | Light text, specialized use           |
| normal     | font-normal     | 400    | Standard body text                    |
| medium     | font-medium     | 500    | Slightly emphasized text              |
| semibold   | font-semibold   | 600    | Headings, important text              |
| bold       | font-bold       | 700    | Strong emphasis, primary headings     |
| extrabold  | font-extrabold  | 800    | Very strong emphasis                  |
| black      | font-black      | 900    | Maximum emphasis, special cases       |

### Typography Components

Kookie provides two main typography components that implement these tokens. Both follow a modular file structure with separate files for types, styles, and component logic:

#### Text Component

The foundational typography component for general content, located in `components/ui/text`:

- **Structure**:

  - `text.tsx`: Core component implementation
  - `types.ts`: Type definitions and interfaces
  - `styles.ts`: Style generation functions
  - `index.ts`: Re-exports for easy importing

- **Default element**: `<p>`
- **Default weight**: `normal` (400)
- **Default color**: gray (based on theme's gray scale)
- **Default size**: `md` (or inherited from parent)
- **Size scale**: Uses standard font sizes (xs → text-xs, sm → text-sm, etc.)

#### Heading Component

Specialized component for heading elements with appropriate defaults, located in `components/ui/heading`:

- **Structure**:

  - `heading.tsx`: Core component implementation
  - `types.ts`: Type definitions and interfaces
  - `styles.ts`: Style generation functions
  - `index.ts`: Re-exports for easy importing

- **Relationship to Text**: Reuses style logic from Text component but applies heading-specific defaults and enhancements
- **Default element**: `<h2>`
- **Default weights**:
  - h1, h2, h3: `bold` (700)
  - h4, h5, h6: `semibold` (600)
- **Default color**: gray (based on theme's gray scale)
- **Automatic sizing**: Sizes are automatically applied based on heading level (no need to specify size prop)
- **Enhanced size scale**: Each size is mapped to a larger text size
  - xs → text-sm (one step larger than Text xs)
  - sm → text-base (one step larger than Text sm)
  - md → text-lg (one step larger than Text md)
  - lg → text-xl (one step larger than Text lg)
  - xl → text-2xl (one step larger than Text xl)
  - 2xl → text-3xl (one step larger than Text 2xl)
  - 3xl → text-4xl (one step larger than Text 3xl)
- **Default sizes by heading level**:
  - h1: automatically uses 3xl (renders as text-4xl)
  - h2: automatically uses 2xl (renders as text-3xl)
  - h3: automatically uses xl (renders as text-2xl)
  - h4: automatically uses lg (renders as text-xl)
  - h5: automatically uses md (renders as text-lg)
  - h6: automatically uses sm (renders as text-base)
- **Additional features**: tracking-tight by default, level-based sizing

## Component Sizing

### Global Size Scale

All components follow this consistent size scale:

| Size | Description           | Use Cases                        |
| ---- | --------------------- | -------------------------------- |
| xs   | Extra Small (compact) | Dense UIs, sidebars, data tables |
| sm   | Small (default)       | Most interface elements          |
| md   | Medium                | Primary actions, form controls   |
| lg   | Large                 | Featured elements, headers       |
| xl   | Extra Large           | Hero sections, featured content  |

## Component Appearances

Components support different visual styles through the `appearance` prop. This allows for consistent styling that can be switched across the entire application or per component.

| Appearance | Description                                    | Use Cases                            |
| ---------- | ---------------------------------------------- | ------------------------------------ |
| standard   | Default style with more gradients and depth    | Modern web apps, consumer interfaces |
| minimal    | Flatter, simpler style with less visual noise  | Dashboards, enterprise applications  |
| detailed   | More elaborate styling with additional details | Marketing sites, feature showcases   |

The appearance system works on multiple levels:

1. **Global default**: Set via ThemeProvider's `style` prop
2. **Per-component**: Override via each component's `appearance` prop
3. **Implementation**: Each style lives in its own file (e.g., `minimal-styles.ts`, `standard-styles.ts`)

### Specific Component Sizes

#### Button

Button component follows the modular structure in `components/ui/button`:

- **Structure**:
  - `button.tsx`: Core component implementation
  - `types.ts`: Type definitions and interfaces
  - `styles.ts`: Style delegation to specific style modules
  - `styles/`: Modular style files:
    - `common-styles.ts`: Shared style utilities for all appearances
    - `standard-styles.ts`: Styles for standard appearance
    - `minimal-styles.ts`: Styles for minimal appearance
  - `index.ts`: Re-exports for easy importing

Button sizes are implemented according to the following specifications:

| Size | Height | Text Size | Padding X | Gap     | Border Radius |
| ---- | ------ | --------- | --------- | ------- | ------------- |
| xs   | h-5    | text-xs   | px-2      | gap-1.5 | rounded       |
| sm   | h-6    | text-xs   | px-3      | gap-2   | rounded       |
| md   | h-8    | text-sm   | px-4      | gap-2.5 | rounded-md    |
| lg   | h-10   | text-sm   | px-5      | gap-3   | rounded-md    |
| xl   | h-12   | text-base | px-6      | gap-3.5 | rounded-lg    |

#### Card

| Size | Padding | Border Radius | Shadow    |
| ---- | ------- | ------------- | --------- |
| xs   | p-2     | rounded       | shadow-sm |
| sm   | p-3     | rounded       | shadow-sm |
| md   | p-4     | rounded-md    | shadow    |
| lg   | p-5     | rounded-md    | shadow    |
| xl   | p-6     | rounded-lg    | shadow-md |

#### Input

| Size | Height | Text Size | Padding X | Border Radius |
| ---- | ------ | --------- | --------- | ------------- |
| xs   | h-5    | text-xs   | px-2      | rounded       |
| sm   | h-6    | text-xs   | px-3      | rounded       |
| md   | h-8    | text-sm   | px-4      | rounded-md    |
| lg   | h-10   | text-sm   | px-5      | rounded-md    |
| xl   | h-12   | text-base | px-6      | rounded-lg    |

## Spacing

### Gap Scale

Used for spacing between elements, especially in layout components:

| Token | Value   | Tailwind Class | Usage                               |
| ----- | ------- | -------------- | ----------------------------------- |
| none  | 0px     | gap-0          | No spacing                          |
| xs    | 0.25rem | gap-1          | Minimal spacing, tight UIs          |
| sm    | 0.5rem  | gap-2          | Default spacing for related items   |
| md    | 1rem    | gap-4          | Standard spacing for content        |
| lg    | 1.5rem  | gap-6          | Generous spacing, section divisions |
| xl    | 2rem    | gap-8          | Maximum spacing, major sections     |

### Container

| Size | Max Width        | Padding X | Usage                    |
| ---- | ---------------- | --------- | ------------------------ |
| sm   | max-w-screen-sm  | px-4      | Small focused content    |
| md   | max-w-screen-md  | px-6      | Standard content width   |
| lg   | max-w-screen-lg  | px-8      | Wide content, dashboards |
| xl   | max-w-screen-xl  | px-8      | Very wide content        |
| 2xl  | max-w-screen-2xl | px-8      | Maximum content width    |

## Visual Styles

Kookie supports three distinct visual styles that affect component aesthetics through the theme system:

### Minimal Style

- No shadows: `shadow-none`
- Simple color transitions: `transition-colors duration-150`

## Border Radius System

Kookie uses a size-sensitive border radius system that ensures consistent visual roundness across components of different sizes. Rather than applying the same border radius to all components regardless of size, the system scales radius values based on component dimensions.

### Button Radius Scaling

The Button component uses a size-sensitive radius matrix that maps theme radius values to appropriate Tailwind classes based on the button's size:

| ThemeRadius | xs Button      | sm Button      | md Button      | lg Button      | xl Button      |
| ----------- | -------------- | -------------- | -------------- | -------------- | -------------- |
| none        | `rounded-none` | `rounded-none` | `rounded-none` | `rounded-none` | `rounded-none` |
| sm          | `rounded-none` | `rounded-sm`   | `rounded-sm`   | `rounded-sm`   | `rounded-md`   |
| md          | `rounded-sm`   | `rounded-sm`   | `rounded-md`   | `rounded-md`   | `rounded-lg`   |
| lg          | `rounded-sm`   | `rounded-md`   | `rounded-md`   | `rounded-lg`   | `rounded-xl`   |
| full        | `rounded-full` | `rounded-full` | `rounded-full` | `rounded-full` | `rounded-full` |

This approach ensures that:

1. Smaller buttons don't look disproportionately round with larger radius values
2. Larger buttons have appropriately larger radius values to maintain design harmony
3. The visual rounding effect is consistent across different button sizes

When setting a global radius in ThemeProvider (`style="lg"`), each component applies appropriate size-sensitive adjustments to maintain visual harmony.
