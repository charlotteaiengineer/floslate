"use client"

import { Text, Icon } from "@aliveui/ui"
import { cn } from "@aliveui/ui"

interface LogoProps {
  variant?: "text-only" | "icon-only" | "full"
  className?: string
  textVariant?: "ultralight" | "light" | "regular" | "medium" | "bold" | "black"
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeMap = {
  sm: {
    text: "text-sm" as const,
    icon: "h-3 w-3",
  },
  md: {
    text: "text-base" as const,
    icon: "h-4 w-4",
  },
  lg: {
    text: "text-xl" as const,
    icon: "h-5 w-5",
  },
  xl: {
    text: "text-2xl" as const,
    icon: "h-6 w-6",
  },
}

export function FloslateLogo({
  variant = "full",
  className,
  textVariant = "ultralight",
  size = "md",
}: LogoProps) {
  const sizes = sizeMap[size]

  if (variant === "icon-only") {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <Icon icon="power" className={cn(sizes.icon, "text-foreground")} />
      </div>
    )
  }

  if (variant === "text-only") {
    return (
      <div className={cn("flex items-center gap-0", className)}>
        <Text variant={textVariant} className={sizes.text}>
          FL
        </Text>
        <div className="inline-flex items-center justify-center">
          <Icon icon="power" className={cn(sizes.icon, "!w-12 !h-12 text-foreground")} />
        </div>
        <Text variant={textVariant} className={sizes.text}>
          SLATE
        </Text>
      </div>
    )
  }

  // full variant
  return (
    <div className={cn("flex items-center", className)}>
      <Text variant="light" className={sizes.text}>
        FL
      </Text>
      <div className="inline-flex items-center -ml-[0.3rem] -mr-[0.2rem] justify-center">
        <Icon icon="power" className={cn("!h-6 !w-6", "text-foreground")} />
      </div>
      <Text variant="light" className={sizes.text}>
        SLATE
      </Text>
    </div>
  )
}
