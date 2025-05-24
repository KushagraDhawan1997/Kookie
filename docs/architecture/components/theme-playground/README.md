# Theme Playground

The ThemePlayground component provides a visual interface for real-time theme customization. It's designed as a floating panel that allows users to experiment with different theme configurations.

## Usage

```tsx
import { ThemePlayground } from "@/components/helpers";

function App() {
  return (
    <>
      <ThemePlayground />
      {/* Your app content */}
    </>
  );
}
```

## Features

### Color Controls

- **Accent color**: All 18 available theme colors
- **Gray color**: All 5 gray variants (sage, slate, mauve, olive, sand)
- **Error color**: Error-appropriate colors (red, ruby, crimson)
- **Success color**: Success-appropriate colors (green, teal, lime)
- **Warning color**: Warning-appropriate colors (amber, yellow, orange)

### Theme Properties

- **Size**: Component sizing scale 1-6 with current value display
- **Roundness**: Border radius options (none, sm, md, lg, xl, full)

### Real-time Updates

- Changes apply immediately to the entire application
- Updates both Jotai state atoms and document data attributes
- Visual feedback shows currently selected options

## Design

### Layout

- **Position**: Fixed top-right corner
- **Width**: 320px when expanded
- **Height**: Auto with 90vh max height and scroll
- **Z-index**: 1000 to float above other content

### Visual Design

- Uses native design system components (Box, Flex, Text, Heading, Button)
- Consistent with application theme and styling
- Subtle background with border and shadow
- Compact button grid layout

### Interaction

- **Selected states**: Solid variant buttons for active selections
- **Unselected states**: Ghost variant buttons for available options
- **Current values**: Displayed in section labels where relevant

## Implementation Details

### Component Architecture

```tsx
export interface ThemePlaygroundProps {
  className?: string;
}

export function ThemePlayground({ className }: ThemePlaygroundProps) {
  const { color, setColor, gray, setGray, error, setError, success, setSuccess, warning, setWarning, size, setSize, roundness, setRoundness } = useTheme();

  // Handlers for each theme property...
}
```

### State Management

- Uses `useTheme` hook for state access and updates
- Updates both Jotai atoms and document attributes for immediate effect
- Maintains synchronization between UI state and CSS variables

### Configuration-Driven

- Color options derived from centralized theme configuration
- Arrays imported from `theme-types.ts`:
  - `THEME_COLORS` - All available colors
  - `THEME_GRAYS` - All gray variants
  - `ERROR_COLORS` - Error-appropriate colors
  - `SUCCESS_COLORS` - Success-appropriate colors
  - `WARNING_COLORS` - Warning-appropriate colors
  - `THEME_SIZES` - Size scale options
  - `THEME_ROUNDNESS_OPTIONS` - Roundness options

### CSS Integration

Each theme change updates the corresponding document data attribute:

```tsx
// Example handlers
const handlePrimaryColorChange = (newColor: ThemeColor) => {
  setColor(newColor);
  document.documentElement.setAttribute("data-primary-color", newColor);
};

const handleSizeChange = (newSize: ThemeSize) => {
  setSize(newSize);
  document.documentElement.setAttribute("data-size", newSize.toString());
};
```

## Styling Guidelines

### Button Grid Layout

- Uses Flex with `wrap="wrap"` and `gap="1"`
- Small size 1 buttons with compact padding
- 11px font size for space efficiency
- Auto width with minimal padding override

### Section Organization

- Clear visual hierarchy with Text labels
- Consistent 8px margin bottom for labels
- 4-unit gap between sections
- Current values shown in labels where helpful

### Color Coding

- Selected buttons use `variant="solid"` (themed)
- Unselected buttons use `variant="ghost"` (subtle)
- No custom color overrides - relies on theme system

## Accessibility

- Uses semantic HTML via design system components
- Proper button roles and interactions
- Keyboard navigation supported through Button component
- Screen reader friendly with descriptive labels

## Performance

- Minimal re-renders through selective hook usage
- Direct DOM manipulation for data attributes (fast)
- Small component tree with efficient layout
- No heavy computations or external dependencies

## Customization

The component can be customized through:

### Props

```tsx
<ThemePlayground className="custom-styles" />
```

### Position Override

```tsx
<ThemePlayground
  style={{
    position: "fixed",
    top: "20px",
    left: "20px", // Move to left side
  }}
/>
```

### Size Adjustment

```tsx
<ThemePlayground
  style={{
    width: "280px", // Smaller width
    fontSize: "10px", // Smaller text
  }}
/>
```

## Integration Notes

- Designed to work with any page layout
- Non-intrusive floating design
- Self-contained with no external dependencies
- Works immediately with existing theme system
- Can be included in development or production builds
