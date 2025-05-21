# Kookie Design Token Reference

## Overview

This document serves as a reference guide for consistent styling across Kookie UI components. Rather than creating a complex token abstraction system, we document the standard Tailwind classes that should be used for different component types and variants.

## Color System

Kookie UI uses semantic color names that map to Tailwind's built-in colors:

| Semantic Color | Tailwind Color               |
| -------------- | ---------------------------- |
| primary        | blue (default, customizable) |
| success        | green                        |
| warning        | amber                        |
| danger         | red                          |

The mapping is configured in the Tailwind configuration and can be accessed through the theme system:

```tsx
// Example of using the theme system to get color classes
import { useTheme } from "../lib/theme/hooks";

function Button({ color = "primary" }) {
  const { getTwColorClass } = useTheme();

  return <button className={cn(getTwColorClass("bg", color, 500), getTwColorClass("hover:bg", color, 600))}>Click Me</button>;
}
```

## Global Size Scale

| Size | Description           | Use Cases                        |
| ---- | --------------------- | -------------------------------- |
| xs   | Extra Small (compact) | Dense UIs, sidebars, data tables |
| sm   | Small (default)       | Most interface elements          |
| md   | Medium                | Primary actions, form controls   |
| lg   | Large                 | Featured elements, headers       |
| xl   | Extra Large           | Hero sections, featured content  |

## Core Components

### Button

| Size | Height | Text Size | Padding | Gap     | Border Radius |
| ---- | ------ | --------- | ------- | ------- | ------------- |
| xs   | h-5    | text-xs   | px-2    | gap-1.5 | rounded       |
| sm   | h-6    | text-xs   | px-3    | gap-2   | rounded       |
| md   | h-8    | text-sm   | px-4    | gap-2.5 | rounded-md    |
| lg   | h-10   | text-sm   | px-5    | gap-3   | rounded-md    |
| xl   | h-12   | text-base | px-6    | gap-3.5 | rounded-lg    |

#### Button Variants

| Variant | Primary                                           | Success                                           | Warning                                           |
| ------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| solid   | bg-primary-500 text-white hover:bg-primary-600    | bg-success-500 text-white hover:bg-success-600    | bg-warning-500 text-white hover:bg-warning-600    |
| outline | border border-primary-500 text-primary-500        | border border-success-500 text-success-500        | border border-warning-500 text-warning-500        |
| ghost   | text-primary-500 hover:bg-primary-50              | text-success-500 hover:bg-success-50              | text-warning-500 hover:bg-warning-50              |
| link    | text-primary-500 underline hover:text-primary-600 | text-success-500 underline hover:text-success-600 | text-warning-500 underline hover:text-warning-600 |

#### Visual Styles

| Style   | Shadow      | Transition                     | Hover                  | Active               |
| ------- | ----------- | ------------------------------ | ---------------------- | -------------------- |
| minimal | shadow-none | transition-colors duration-150 | -                      | -                    |
| modern  | shadow-sm   | transition-all duration-200    | hover:-translate-y-0.5 | active:translate-y-0 |
| classic | shadow      | transition-all duration-150    | hover:brightness-105   | active:brightness-95 |

### Text

| Size | Font Size | Line Height | Font Weight (Normal) | Font Weight (Medium) | Font Weight (Bold) |
| ---- | --------- | ----------- | -------------------- | -------------------- | ------------------ |
| xs   | text-xs   | leading-4   | font-normal          | font-medium          | font-bold          |
| sm   | text-sm   | leading-5   | font-normal          | font-medium          | font-bold          |
| md   | text-base | leading-6   | font-normal          | font-medium          | font-bold          |
| lg   | text-lg   | leading-7   | font-normal          | font-medium          | font-bold          |
| xl   | text-xl   | leading-8   | font-normal          | font-medium          | font-bold          |
| 2xl  | text-2xl  | leading-9   | font-normal          | font-medium          | font-bold          |
| 3xl  | text-3xl  | leading-10  | font-normal          | font-medium          | font-bold          |

### Card

| Size | Padding | Border | Border Radius | Shadow    |
| ---- | ------- | ------ | ------------- | --------- |
| xs   | p-2     | border | rounded       | shadow-sm |
| sm   | p-3     | border | rounded       | shadow-sm |
| md   | p-4     | border | rounded-md    | shadow    |
| lg   | p-5     | border | rounded-md    | shadow    |
| xl   | p-6     | border | rounded-lg    | shadow-md |

## Layout Components

### Spacing/Gap Scale

| Size | Value   | CSS Class |
| ---- | ------- | --------- |
| none | 0px     | gap-0     |
| xs   | 0.25rem | gap-1     |
| sm   | 0.5rem  | gap-2     |
| md   | 1rem    | gap-4     |
| lg   | 1.5rem  | gap-6     |
| xl   | 2rem    | gap-8     |

### Flex Component

```tsx
<div
  className={cn(
    // Base
    "flex",

    // Direction
    direction === "row" && "flex-row",
    direction === "column" && "flex-col",
    direction === "row-reverse" && "flex-row-reverse",
    direction === "column-reverse" && "flex-col-reverse",

    // Alignment
    align === "start" && "items-start",
    align === "center" && "items-center",
    align === "end" && "items-end",
    align === "stretch" && "items-stretch",
    align === "baseline" && "items-baseline",

    // Justification
    justify === "start" && "justify-start",
    justify === "center" && "justify-center",
    justify === "end" && "justify-end",
    justify === "between" && "justify-between",
    justify === "around" && "justify-around",
    justify === "evenly" && "justify-evenly",

    // Gap
    gap === "none" && "gap-0",
    gap === "xs" && "gap-1",
    gap === "sm" && "gap-2",
    gap === "md" && "gap-4",
    gap === "lg" && "gap-6",
    gap === "xl" && "gap-8"
  )}
/>
```

### Container

| Size | Max Width        | Padding |
| ---- | ---------------- | ------- |
| sm   | max-w-screen-sm  | px-4    |
| md   | max-w-screen-md  | px-6    |
| lg   | max-w-screen-lg  | px-8    |
| xl   | max-w-screen-xl  | px-8    |
| 2xl  | max-w-screen-2xl | px-8    |

## Form Components

### Input

| Size | Height | Text Size | Padding | Border | Border Radius |
| ---- | ------ | --------- | ------- | ------ | ------------- |
| xs   | h-5    | text-xs   | px-2    | border | rounded       |
| sm   | h-6    | text-xs   | px-3    | border | rounded       |
| md   | h-8    | text-sm   | px-4    | border | rounded-md    |
| lg   | h-10   | text-sm   | px-5    | border | rounded-md    |
| xl   | h-12   | text-base | px-6    | border | rounded-lg    |

## Navigation Components

### Sidebar

| Size | Width (Expanded) | Width (Collapsed) | Item Padding | Item Height |
| ---- | ---------------- | ----------------- | ------------ | ----------- |
| xs   | w-48             | w-12              | px-2 py-1    | h-8         |
| sm   | w-56             | w-14              | px-3 py-1.5  | h-9         |
| md   | w-64             | w-16              | px-4 py-2    | h-10        |
| lg   | w-72             | w-18              | px-4 py-2.5  | h-11        |
| xl   | w-80             | w-20              | px-5 py-3    | h-12        |

## Visual Effects

### Style: Modern

For components using the "modern" style:

- Subtle shadows: `shadow-sm`
- Micro-interactions: `transition-all duration-200`
- Hover state with slight lift: `hover:-translate-y-0.5`
- Active state with press down: `active:translate-y-0`
- For solid variant buttons: Add subtle gradient `bg-gradient-to-r from-primary-500 to-primary-600`

### Style: Minimal

For components using the "minimal" style:

- No shadows: `shadow-none`
- Simple color transitions: `transition-colors duration-150`
- Flat design: Avoid 3D effects or gradients
- Subtle hover states: Color changes only, no movement

### Style: Classic

For components using the "classic" style:

- Standard shadows: `shadow`
- Standard transitions: `transition-all duration-150`
- Hover brightening: `hover:brightness-105`
- Active darkening: `active:brightness-95`
- Traditional button look: Avoid gradients or fancy effects
