"use client"

import * as React from "react"
import { cn, Text } from "@aliveui/ui"
import { AppIcon } from "./app-icon"


interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  children?: React.ReactNode
  className?: string
  noBackground?: boolean
}

export function BentoCard({
  title,
  icon,
  action,
  children,
  className,
  noBackground,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[6px] border-muted bg-card p-6 shadow-sm shadow-[var(--muted)] transition-all ",
        className
      )}
      {...props}
    >
      {/* Header */}
      {(title || icon || action) && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <AppIcon size="sm" noBackground={true} icon={icon} color="bg-chart-1" />

            )}
            {title && (
              <Text >{title}</Text>
            )}
          </div>
          {action && (
            <div className="flex items-center">
              {action}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
