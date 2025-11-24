"use client"

import * as React from "react"
import { cn } from "@aliveui/ui"
import { Button } from "@aliveui/ui/button"
import { Icon, type IconName } from "@aliveui/ui/icon"

interface AppIconProps extends React.ComponentProps<typeof Button> {
  icon: IconName
  label: string
  active?: boolean
  color?: string
}

export function AppIcon({ icon, label, active, color = "bg-blue-500", className, ...props }: AppIconProps) {
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      className={cn(
        "relative flex flex-col items-center justify-center gap-1 h-auto p-2 hover:bg-transparent",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-sm transition-transform hover:scale-105 active:scale-95",
          color
        )}
      >
        <Icon icon={icon} weight="fill" className="w-7 h-7" />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground">{label}</span>
    </Button>
  )
}
