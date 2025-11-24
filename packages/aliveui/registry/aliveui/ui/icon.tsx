"use client"

import * as React from "react"
import { CheckSquare, Power, Phone, Tray, CalendarBlank, MagnifyingGlass, Funnel, Tag, User, Plus, type Icon as PhosphorIcon, type IconProps as PhosphorIconProps } from "@phosphor-icons/react"
import { cn } from "@aliveui/ui"

const icons = {
  power: Power,
  todo: CheckSquare,
  phone: Phone,
  inbox: Tray,
  calendar: CalendarBlank,
  search: MagnifyingGlass,
  filter: Funnel,
  tag: Tag,
  user: User,
  plus: Plus
}

export type IconName = keyof typeof icons

interface IconProps extends PhosphorIconProps {
  icon: IconName
  className?: string
  weight?: "light" | "regular" | "bold" | "fill"
}

export function Icon({ icon, weight = "light", className, ...props }: IconProps) {
  const IconComponent = icons[icon] as React.ElementType

  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent
      weight={weight}
      className={cn("h-4 w-4", className)}
      {...props}
    />
  )
}
