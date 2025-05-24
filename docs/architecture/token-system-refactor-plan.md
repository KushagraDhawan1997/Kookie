# Token System Refactor Plan

## Overview

Refactor the current two-layer token system to a three-layer system (semantic reference -> system -> component) for better maintainability and flexibility.

## Current State Problems

1. **Direct mapping**: Color files map Radix tokens directly to semantic tokens (`--primary-foreground: var(--orange-1)`)
2. **Hardcoded context**: No consideration for different component contexts (solid vs tinted buttons need different text colors)
3. **No extensibility**: Other developers can't easily override at different abstraction levels
4. **Inconsistent text variants**: Text component uses direct semantic tokens instead of systematic approach

## Target Architecture

### Layer 1: Semantic Reference Tokens (Current Foundation)

These are the foundational tokens that all system and component tokens reference:

- `--primary-1` through `--primary-12`, `--primary-a1` through `--primary-a12`
- `--warning-1` through `--warning-12`, `--warning-a1` through `--warning-a12`
- `--error-1` through `--error-12`, `--error-a1` through `--error-a12`
- `--success-1` through `--success-12`, `--success-a1` through `--success-a12`
- `--gray-1` through `--gray-12`, `--gray-a1` through `--gray-a12`

**Note**: Color files (`orange.css`, `yellow.css`, etc.) map Radix colors to these semantic tokens based on theme provider configuration.

### Layer 2: System Tokens (New)

Semantic UI tokens that map to the semantic reference tokens using Radix scale steps:

#### Background System Tokens

- `--ui-bg-app`: var(--primary-1) (Step 1: App background)
- `--ui-bg-subtle`: var(--primary-2) (Step 2: Subtle background)
- `--ui-bg-component`: var(--primary-3) (Step 3: Normal tinted state)
- `--ui-bg-component-hover`: var(--primary-4) (Step 4: Hover tinted state)
- `--ui-bg-component-pressed`: var(--primary-5) (Step 5: Pressed tinted state)
- `--ui-bg-solid`: var(--primary-9) (Step 9: Primary solid)
- `--ui-bg-solid-hover`: var(--primary-10) (Step 10: Solid hover)

#### Border System Tokens

- `--ui-border-subtle`: var(--primary-6) (Step 6: Subtle borders)
- `--ui-border-interactive`: var(--primary-7) (Step 7: Interactive borders)
- `--ui-border-strong`: var(--primary-8) (Step 8: Strong borders & focus)

#### Text System Tokens

- `--text-high-contrast`: var(--primary-12) (Step 12: Default text)
- `--text-medium-contrast`: var(--primary-11) (Step 11: Accent text)
- `--text-low-contrast`: var(--primary-10) (Step 10: Muted text)
- `--text-on-solid`: Varies per color (Defined in color files)
- `--text-on-tinted`: var(--primary-12) (Dark text on light tinted backgrounds)
- `--text-on-app`: var(--primary-12) (Dark text on app backgrounds)

### Layer 3: Component Tokens (New)

Component-specific tokens that map to system tokens:

#### Button Component Tokens

- `--button-bg`: Maps to system background tokens based on variant
- `--button-text`: Maps to system text tokens based on variant
- `--button-border`: Maps to system border tokens based on variant

## Implementation Plan

### Phase 1: Create System Token Foundation & Reorganize Structure

1. **Reorganize existing color files**

   - Move `styles/colors/` to `styles/tokens/reference/colors/`
   - Rename individual color files: `orange.css` → `orange-reference.css`, `amber.css` → `amber-reference.css`, etc.
   - Move and rename `styles/colors.css` to `styles/tokens/reference/colors/reference.css`

2. **Create `styles/tokens/system/colors/system.css`**

   - Define all system tokens mapping to semantic reference tokens
   - Include comprehensive documentation
   - Support all semantic color contexts (primary, warning, error, success)

3. **Update color reference files** (`styles/tokens/reference/colors/*-reference.css`)
   - Add contextual system token mappings (especially `--text-on-solid`)
   - Update existing semantic token mappings
   - Define color-specific overrides where needed

### Phase 2: Component Token Implementation

1. **Create component token files**

   - `components/ui/button/button-tokens.css`
   - `components/ui/text/text-tokens.css`
   - Map component tokens to system tokens based on variant context

2. **Update component CSS files**
   - `components/ui/button/button.css`: Use component tokens instead of semantic tokens
   - `components/ui/text/text.css`: Use system tokens for text variants

### Phase 3: Integration & Testing

1. **Update imports**

   - Ensure system.css is imported before component token files
   - Update main CSS import order to reflect new structure
   - Update any existing imports to reference new file paths

2. **Test all combinations**
   - All button variants × all semantic colors (primary, warning, error, success)
   - All text variants × all semantic colors
   - Verify no visual regressions across theme configurations

### Phase 4: Documentation & Cleanup

1. **Update documentation**

   - Document new token system and file structure
   - Provide migration guide for consumers
   - Create examples of extending tokens at each layer

2. **Gradual deprecation**
   - Mark old patterns as deprecated
   - Provide migration path
   - Eventually remove direct semantic token usage in components

## File Structure After Refactor

```
styles/
  tokens/
    reference/
      colors/
        reference.css                 # Main semantic token definitions (moved from styles/colors.css)
        orange-reference.css          # Orange → semantic mappings
        amber-reference.css           # Amber → semantic mappings
        yellow-reference.css          # Yellow → semantic mappings
        red-reference.css             # Red → semantic mappings
        green-reference.css           # Green → semantic mappings
        blue-reference.css            # Blue → semantic mappings
        ... (other color references)
    system/
      colors/
        system.css                    # System tokens (ui-bg-*, text-*, ui-border-*)
components/
  ui/
    button/
      button-tokens.css               # Button component tokens
      button.css                      # Button styles using component tokens
    text/
      text-tokens.css                 # Text component tokens
      text.css                        # Text styles using system tokens
```

## Files to Create

### New Files

- `styles/tokens/system/colors/system.css` - Core system token definitions
- `components/ui/button/button-tokens.css` - Button-specific component tokens
- `components/ui/text/text-tokens.css` - Text-specific component tokens

### Files to Move/Rename

- `styles/colors/orange.css` → `styles/tokens/reference/colors/orange-reference.css`
- `styles/colors/amber.css` → `styles/tokens/reference/colors/amber-reference.css`
- `styles/colors/yellow.css` → `styles/tokens/reference/colors/yellow-reference.css`
- `styles/colors/red.css` → `styles/tokens/reference/colors/red-reference.css`
- `styles/colors/green.css` → `styles/tokens/reference/colors/green-reference.css`
- `styles/colors/blue.css` → `styles/tokens/reference/colors/blue-reference.css`
- `styles/colors.css` → `styles/tokens/reference/colors/reference.css`
- ... (other color files)

### Files to Modify

- `styles/tokens/reference/colors/*-reference.css` - Add contextual system token mappings
- `components/ui/button/button.css` - Use component tokens
- `components/ui/text/text.css` - Use system tokens
- Main CSS import file - Update import order and paths

## Benefits After Refactor

1. **Consistency**: All components follow same token hierarchy
2. **Flexibility**: Consumers can override at any abstraction level
3. **Maintainability**: Clear separation of concerns
4. **Theme compatibility**: Works seamlessly with existing theme provider
5. **Semantic clarity**: "on" terminology makes context clear

## Migration Strategy

- Implement new system and update all components immediately
- Update all imports to new file structure
- Provide clear documentation for consumers

## Risks & Mitigation

- **Risk**: Breaking existing customizations
  - **Mitigation**: Provide migration guide with clear file path changes
- **Risk**: Developer confusion
  - **Mitigation**: Clear documentation and examples
