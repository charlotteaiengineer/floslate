# Text Component

A flexible text component using the Riviera font family with support for multiple weights, sizes, and italic styling.

## Features

- **Font Variants**: ultralight, light, regular, medium, bold, black
- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
- **Italic Support**: Toggle italic styling with the `italic` prop
- **Polymorphic**: Use `asChild` prop to render as a different element via Radix UI Slot

## Usage

```tsx
import { Text } from "@aliveui/ui";

// Basic usage with default variant (regular) and size (base)
<Text>Hello World</Text>

// With variant
<Text variant="bold">Bold Text</Text>

// With size
<Text size="3xl">Large Text</Text>

// With both variant and size
<Text variant="black" size="6xl">Large Bold Text</Text>

// Italic text
<Text variant="light" italic>Light Italic Text</Text>

// With custom className
<Text variant="medium" size="2xl" className="text-primary uppercase">
  Custom Styled Text
</Text>

// Using asChild to render as a different element
<Text variant="bold" size="lg" asChild>
  <h1>This renders as an h1</h1>
</Text>
```

## Variants

All variants use the Riviera Nights Trial font family:

- `ultralight` - Weight 200
- `light` - Weight 300
- `regular` - Weight 400 (default)
- `medium` - Weight 500
- `bold` - Weight 700
- `black` - Weight 900

## Sizes

Based on Tailwind's text sizing scale:

- `xs` - 0.75rem (12px)
- `sm` - 0.875rem (14px)
- `base` - 1rem (16px) - default
- `lg` - 1.125rem (18px)
- `xl` - 1.25rem (20px)
- `2xl` - 1.5rem (24px)
- `3xl` - 1.875rem (30px)
- `4xl` - 2.25rem (36px)
- `5xl` - 3rem (48px)
- `6xl` - 3.75rem (60px)
- `7xl` - 4.5rem (72px)
- `8xl` - 6rem (96px)
- `9xl` - 8rem (128px)

## Props

Extends `React.ComponentProps<"span">` and includes:

- `variant`: Font weight variant (default: "regular")
- `size`: Text size (default: "base")
- `italic`: Boolean to enable italic styling (default: false)
- `asChild`: Boolean to use Radix UI Slot for polymorphic rendering (default: false)
- `className`: Additional CSS classes to apply

## Examples

### All Variants Demo

```tsx
<div className="flex flex-col gap-2">
  <Text variant="ultralight" size="2xl">Ultralight Text</Text>
  <Text variant="light" size="2xl">Light Text</Text>
  <Text variant="regular" size="2xl">Regular Text</Text>
  <Text variant="medium" size="2xl">Medium Text</Text>
  <Text variant="bold" size="2xl">Bold Text</Text>
  <Text variant="black" size="2xl">Black Text</Text>
</div>
```

### Italic Variants

```tsx
<div className="flex flex-col gap-2">
  <Text variant="light" italic>Light Italic</Text>
  <Text variant="regular" italic>Regular Italic</Text>
  <Text variant="bold" italic>Bold Italic</Text>
</div>
```

### Heading Replacement

```tsx
{/* Replace traditional heading tags with Text component */}
<Text variant="black" size="6xl" asChild>
  <h1>Main Heading</h1>
</Text>

<Text variant="bold" size="4xl" asChild>
  <h2>Section Heading</h2>
</Text>

<Text variant="medium" size="2xl" asChild>
  <h3>Subsection Heading</h3>
</Text>
```
