import { AnimatedClock, Button, Icon, Logo, Text, FloslateLogo } from "@aliveui/ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 p-24">
      <div className="flex flex-col items-center gap-4">
        <Text variant="light" size="6xl" className="uppercase">
          It's up to you
        </Text>
        <Text variant="light" size="3xl" className="uppercase">
          Your very own Floslate
        </Text>
        <AnimatedClock className="h-52 w-52" />
        <Button className="rounded-full mt-4" size="icon-lg" variant="outline">
          <Icon icon="phone" />
        </Button>
      </div>
      
      {/* Demo of FloslateLogo variants */}
      <div className="flex flex-col gap-6 items-center">
        <Text variant="bold" size="2xl">FLOSLATE Logo Variants</Text>
        
        {/* Full Logo - Different Sizes */}
        <div className="flex flex-col gap-4 items-center">
          <Text variant="medium" size="lg">Full Logo (Different Sizes)</Text>
          <FloslateLogo variant="full" size="sm" textVariant="light" />
          <FloslateLogo variant="full" size="md" textVariant="regular" />
          <FloslateLogo variant="full" size="lg" textVariant="medium" />
          <FloslateLogo variant="full" size="xl" textVariant="bold" />
        </div>

        {/* Icon Only */}
        <div className="flex gap-4 items-center">
          <Text variant="medium" size="lg">Icon Only:</Text>
          <FloslateLogo variant="icon-only" size="sm" />
          <FloslateLogo variant="icon-only" size="md" />
          <FloslateLogo variant="icon-only" size="lg" />
          <FloslateLogo variant="icon-only" size="xl" />
        </div>

        {/* Text Only */}
        <div className="flex flex-col gap-4 items-center">
          <Text variant="medium" size="lg">Text with Icon (Different Weights)</Text>
          <FloslateLogo variant="text-only" size="lg" textVariant="ultralight" />
          <FloslateLogo variant="text-only" size="lg" textVariant="light" />
          <FloslateLogo variant="text-only" size="lg" textVariant="regular" />
          <FloslateLogo variant="text-only" size="lg" textVariant="medium" />
          <FloslateLogo variant="text-only" size="lg" textVariant="bold" />
          <FloslateLogo variant="text-only" size="lg" textVariant="black" />
        </div>
      </div>
      
      {/* Demo of all Riviera variants */}
      <div className="flex flex-col gap-2 max-w-4xl">
        <Text variant="ultralight" size="2xl">Ultralight - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="ultralight" size="2xl" italic>Ultralight Italic - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="light" size="2xl">Light - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="light" size="2xl" italic>Light Italic - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="regular" size="2xl">Regular - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="regular" size="2xl" italic>Regular Italic - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="medium" size="2xl">Medium - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="medium" size="2xl" italic>Medium Italic - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="bold" size="2xl">Bold - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="bold" size="2xl" italic>Bold Italic - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="black" size="2xl">Black - The quick brown fox jumps over the lazy dog</Text>
        <Text variant="black" size="2xl" italic>Black Italic - The quick brown fox jumps over the lazy dog</Text>
      </div>
    </div>
  );
}
