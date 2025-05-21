# Kookie UI - Component Architecture

## Core Component Structure

Each component in Kookie UI follows a consistent file structure and implementation pattern.

### File Organization

```
components/
├── ui/
│   ├── button/
│   │   ├── button.tsx     # Main component implementation
│   │   └── index.ts       # Clean exports
│   │
│   ├── text/
│   │   ├── text.tsx
│   │   └── index.ts
│   │
│   └── ...
│
├── layout/
│   ├── flex/
│   │   ├── flex.tsx
│   │   └── index.ts
│   └── ...
│
└── ...
```

### Base Component Implementation Pattern

```tsx
import * as React from 'react';
import { cn } from '@/utils/cn';
import { useComponentSize } from '@/theme/hooks';
import { useAtomValue } from 'jotai';
import { styleAtom } from '@/theme/atoms';

// Define component props extending React element props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'tinted' | 'outline' | 'ghost' | 'link';
  style?: 'minimal' | 'modern' | 'classic';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  asChild?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  size, 
  variant = 'solid', 
  style: buttonStyle,
  color = 'primary',
  asChild = false,
  className,
  ...props 
}: ButtonProps) {
  // Get global style from theme
  const themeStyle = useAtomValue(styleAtom);
  
  // Use component style or fall back to theme style
  const resolvedStyle = buttonStyle || themeStyle;
  
  // Get size - either explicitly provided or from parent context
  const [componentSize, setComponentSize] = useComponentSize(size);
  
  // Use Radix Slot if asChild is true
  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      className={cn(
        // Base styles
        "inline-flex items-center justify-center font-medium",
        
        // Size styles based on design token reference
        componentSize === "xs" && "h-5 text-xs px-2 gap-1.5 rounded",
        componentSize === "sm" && "h-6 text-xs px-3 gap-2 rounded",
        componentSize === "md" && "h-8 text-sm px-4 gap-2.5 rounded-md",
        componentSize === "lg" && "h-10 text-sm px-5 gap-3 rounded-md",
        componentSize === "xl" && "h-12 text-base px-6 gap-3.5 rounded-lg",
        
        // Variant and color styles
        variant === "solid" && color === "primary" && "bg-primary-500 text-white hover:bg-primary-600",
        variant === "outline" && color === "primary" && "border border-primary-500 text-primary-500 hover:bg-primary-50",
        variant === "ghost" && color === "primary" && "text-primary-500 hover:bg-primary-50",
        variant === "link" && color === "primary" && "text-primary-500 underline hover:text-primary-600",
        
        // Style theme affects visual treatments
        resolvedStyle === "minimal" && "shadow-none transition-colors duration-150",
        resolvedStyle === "modern" && "shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        resolvedStyle === "modern" && variant === "solid" && "bg-gradient-to-r from-primary-500 to-primary-600",
        resolvedStyle === "classic" && "shadow transition-all duration-150 hover:brightness-105 active:brightness-95",
        
        className
      )}
      {...props}
    >
      <SizeProvider size={componentSize}>
        {children}
      </SizeProvider>
    </Comp>
  );
}

// Helper component to set context for children
function SizeProvider({ size, children }) {
  const [_, setComponentSize] = useComponentSize();
  
  React.useEffect(() => {
    setComponentSize(size);
  }, [size, setComponentSize]);
  
  return <>{children}</>;
}
```

## Radix UI Integration

Kookie builds upon Radix UI primitives for accessible, unstyled components.

### Example: Dialog Component

```tsx
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils/cn';
import { useComponentSize } from '@/theme/hooks';

export interface DialogProps extends DialogPrimitive.DialogProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Dialog({ children, size, ...props }: DialogProps) {
  const [componentSize, setComponentSize] = useComponentSize(size);
  
  return (
    <DialogPrimitive.Root {...props}>
      <SizeProvider size={componentSize}>
        {children}
      </SizeProvider>
    </DialogPrimitive.Root>
  );
}

Dialog.Trigger = DialogPrimitive.Trigger;

Dialog.Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const [componentSize] = useComponentSize();
  
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 transition-all" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          
          // Size-specific styles
          componentSize === "xs" && "w-64 rounded p-3",
          componentSize === "sm" && "w-80 rounded p-4",
          componentSize === "md" && "w-96 rounded-md p-5",
          componentSize === "lg" && "w-[28rem] rounded-md p-6",
          componentSize === "xl" && "w-[32rem] rounded-lg p-7",
          
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
Dialog.Content.displayName = "DialogContent";

Dialog.Header = function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-4 flex flex-col space-y-1.5", className)}
      {...props}
    />
  );
};

Dialog.Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
Dialog.Title.displayName = "DialogTitle";

Dialog.Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
));
Dialog.Description.displayName = "DialogDescription";

Dialog.Footer = function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-4 flex justify-end space-x-2", className)}
      {...props}
    />
  );
};
```

## Component Patterns

### 1. Layout Components

Layout components provide flexible, responsive containers with consistent spacing:

```tsx
// components/layout/flex/flex.tsx
export function Flex({
  children,
  size,
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = 'nowrap',
  gap = 'none',
  className,
  ...props
}: FlexProps) {
  const [componentSize, setComponentSize] = useComponentSize(size);
  
  return (
    <div
      className={cn(
        // Base flex styles
        'flex',
        
        // Direction
        direction === 'row' && 'flex-row',
        direction === 'column' && 'flex-col',
        // ...other directions
        
        // Alignment and justification
        align === 'start' && 'items-start',
        align === 'center' && 'items-center',
        // ...other alignments
        
        justify === 'start' && 'justify-start',
        justify === 'center' && 'justify-center',
        // ...other justifications
        
        // Gap - from design token reference
        gap === 'none' && 'gap-0',
        gap === 'xs' && 'gap-1',
        gap === 'sm' && 'gap-2',
        gap === 'md' && 'gap-4',
        gap === 'lg' && 'gap-6',
        gap === 'xl' && 'gap-8',
        
        className
      )}
      {...props}
    >
      <SizeProvider size={componentSize}>
        {children}
      </SizeProvider>
    </div>
  );
}
```

### 2. Compound Components

Kookie uses the compound component pattern for complex UI elements:

```tsx
// Example: Card component with subcomponents
export function Card({ children, size, className, ...props }) {
  const [componentSize, setComponentSize] = useComponentSize(size);
  
  return (
    <div
      className={cn(
        "bg-white border rounded shadow",
        componentSize === "xs" && "p-2 rounded",
        componentSize === "sm" && "p-3 rounded",
        componentSize === "md" && "p-4 rounded-md",
        componentSize === "lg" && "p-5 rounded-md",
        componentSize === "xl" && "p-6 rounded-lg",
        className
      )}
      {...props}
    >
      <SizeProvider size={componentSize}>
        {children}
      </SizeProvider>
    </div>
  );
}

Card.Header = function CardHeader({ children, className, ...props }) {
  return (
    <div
      className={cn("mb-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className, ...props }) {
  return (
    <h3
      className={cn("font-semibold", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

Card.Content = function CardContent({ children, className, ...props }) {
  return (
    <div
      className={cn("", className)}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className, ...props }) {
  return (
    <div
      className={cn("mt-4 flex justify-end space-x-2", className)}
      {...props}
    >
      {children}
    </div>
  );
};
```

### 3. Marketing Components

Marketing components focus on visual appeal while maintaining consistency:

```tsx
export function Hero({
  children,
  size,
  align = 'center',
  variant = 'default',
  className,
  ...props
}: HeroProps) {
  const [componentSize, setComponentSize] = useComponentSize(size);
  
  return (
    <section
      className={cn(
        // Base styles
        'relative overflow-hidden',
        
        // Padding based on component size
        componentSize === 'xs' ? 'py-8' :
        componentSize === 'sm' ? 'py-12' :
        componentSize === 'md' ? 'py-16' :
        componentSize === 'lg' ? 'py-20' : 'py-24',
        
        // Text alignment
        align === 'left' ? 'text-left' :
        align === 'center' ? 'text-center' : 'text-right',
        
        // Variant specific styles
        variant === 'gradient' && 'bg-gradient-to-br from-primary-50 to-primary-100',
        variant === 'image' && 'bg-cover bg-center',
        
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        <SizeProvider size={componentSize}>
          {children}
        </SizeProvider>
      </div>
    </section>
  );
}

// Compound components
Hero.Title = function HeroTitle({ children, className, ...props }) {
  const [componentSize] = useComponentSize();
  
  return (
    <h1
      className={cn(
        'font-bold text-gray-900',
        // Size-based font sizing
        componentSize === 'xs' ? 'text-3xl md:text-4xl' :
        componentSize === 'sm' ? 'text-4xl md:text-5xl' :
        componentSize === 'md' ? 'text-5xl md:text-6xl' :
        componentSize === 'lg' ? 'text-6xl md:text-7xl' : 'text-7xl md:text-8xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
```

## Component Styling Approach

1. **Tailwind First**: Styling is done with Tailwind CSS classes for optimal performance
2. **Design Token Reference**: Follow style guidelines from the design token reference document
3. **Conditional Styles**: Use conditional class application based on props
4. **Flexible Customization**: Use `className` prop with `cn` utility for overrides

## Utility Functions

### Class Name Merging

```typescript
// utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Size Provider

```tsx
// Common size inheritance pattern
function SizeProvider({ size, children }) {
  const [_, setComponentSize] = useComponentSize();
  
  React.useEffect(() => {
    setComponentSize(size);
  }, [size, setComponentSize]);
  
  return <>{children}</>;
}
```
