"use client"

import * as React from "react"
import { cn } from "@aliveui/ui"
import { Button } from "@aliveui/ui/button"
import { Icon, type IconName } from "@aliveui/ui/icon"

interface AppIconProps {
  icon: IconName
  label: string
  active?: boolean
  color?: string
  size?: "md" | "lg"
  className?: string
}

export function AppIcon({ icon, label, active, color = "bg-gray-500", size = "lg", className }: AppIconProps) {
  const iconSize = size === "lg" ? "w-18 h-18" : "w-10 h-10"
  const iconInnerSize = size === "lg" ? "w-12 h-12" : "w-5 h-5"
  
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-1 cursor-pointer",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-xl text-white shadow-sm transition-transform hover:scale-105 active:scale-95",
          iconSize,
          color
        )}
      >
        <Icon icon={icon} weight="fill" className={iconInnerSize} />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground">{label}</span>
    </div>
  )
}
