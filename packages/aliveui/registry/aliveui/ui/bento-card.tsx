"use client"

import * as React from "react"
import { cn } from "@aliveui/ui"

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function BentoCard({
  title,
  icon,
  action,
  children,
  className,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2px] border bg-card p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Header */}
      {(title || icon || action) && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex items-center justify-center">
                {icon}
              </div>
            )}
            {title && (
              <h3 className="font-semibold text-lg">{title}</h3>
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
