"use client"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@aliveui/ui"
import { AppIcon } from "@aliveui/ui/app-icon"
import { GridIcon } from "lucide-react"

interface AppLauncherProps {
  apps?: Array<{
    name: string
    icon: string
    color: string
    url: string
  }>
}

const defaultApps = [
  {
    name: "Todo",
    icon: "todo",
    color: "bg-gray-500",
    url: "http://localhost:3001"
  }
]

export function AppLauncher({ apps = defaultApps }: AppLauncherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <GridIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Apps</h3>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="transition-transform group-hover:scale-110">
                <AppIcon 
                  icon={app.icon as any} 
                  label={app.name} 
                  color={app.color}
                  size="lg"
                />
              </div>
              {/* <span className="text-xs text-center">{app.name}</span> */}
            </a>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
