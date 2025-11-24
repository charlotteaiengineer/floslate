"use client"

import * as React from "react"
import { cn } from "@aliveui/ui"
import { Icon } from "./icon"

interface ClockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

function ClockFace({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full border-2 border-foreground bg-background",
        className
      )}
      {...props}
    >
      {/* Tick Marks */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-full w-full rounded-full"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          <div className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground" />
        </div>
      ))}
      {/* Minute Ticks (optional, simplified for now to match logo style mostly) */}
      {Array.from({ length: 60 }).map((_, i) => {
        if (i % 5 === 0) return null // Skip hour ticks
        return (
          <div
            key={i}
            className="absolute h-full w-full"
            style={{ transform: `rotate(${i * 6}deg)` }}
          >
            <div className="absolute left-1/2 top-1 h-[7px] w-[1.3px] -translate-x-1/2 bg-muted-foreground/50" />
          </div>
        )
      })}
      {children}
    </div>
  )
}

export function Logo({ className, ...props }: ClockProps) {
  return (
    <ClockFace className={cn("h-32 w-32", className)} {...props}>
      <Icon icon="power" className="h-1/2 w-1/2 text-foreground" />
    </ClockFace>
  )
}

interface AnimatedClockProps extends ClockProps {
  staticTime?: Date
}

export function AnimatedClock({ className, staticTime, ...props }: AnimatedClockProps) {
  const [time, setTime] = React.useState(staticTime || new Date())

  React.useEffect(() => {
    if (staticTime) return

    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [staticTime])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours()

  const secondDegrees = (seconds / 60) * 360
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360
  const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360

  return (
    <ClockFace className={cn("h-40 w-40", className)} {...props}>
      {/* Center Dot */}
      {/* <div className="absolute z-20 h-3 w-3 rounded-full bg-foreground" /> */}
     <Icon icon="power" className="h-[50%] w-[50%] text-foreground" />
      {/* Hour Hand */}
      {/* <div
        className="absolute z-10 h-[30%] w-1 origin-bottom  bg-foreground"
        style={{
          bottom: "50%",
          transform: `rotate(${hourDegrees}deg)`,
          transition: "transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44)",
        }}
      /> */}

      {/* Minute Hand */}
      {/* <div
        className="absolute z-10 h-[45%] w-1 origin-bottom  bg-foreground"
        style={{
          bottom: "50%",
          transform: `rotate(${minuteDegrees}deg)`,
          transition: "transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44)",
        }}
      /> */}

      {/* Second Hand */}
      {/* <div
        className="absolute z-10 h-[45%] w-0.5 origin-bottom rounded-full bg-orange-500"
        style={{
          bottom: "50%",
          transform: `rotate(${secondDegrees}deg)`,
          transition: seconds === 0 ? "none" : "transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)",
        }}
      /> */}
    </ClockFace>
  )
}



