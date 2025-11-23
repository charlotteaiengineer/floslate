"use client"

import { SidebarIcon } from "lucide-react"

import {
  Button,
  NavUser,
  SearchForm,
  useSidebar,
} from "@aliveui/ui"

export function SiteHeader({ user }: { user: { name: string; email: string; avatar: string } }) {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-sidebar sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4 justify-between">
        <div className="flex items-center gap-2">
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
            <SidebarIcon />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <SearchForm className="w-full sm:ml-auto sm:w-auto" />
        </div>
        <div>
          <NavUser user={user} />
        </div>
      </div>
    </header>
  )
}
