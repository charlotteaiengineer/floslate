"use client"

import { SidebarIcon, type LucideIcon } from "lucide-react"

import {
  Button,
  Icon,
  NavUser,
  SearchForm,
  useSidebar,
  FloslateLogo,
} from "@aliveui/ui"

export function SiteHeader({ user, navMain }: { user?: { name: string; email: string; avatar: string }, navMain: { title: string; url: string; icon: LucideIcon; isActive?: boolean; items?: { title: string; url: string }[] }[] }) {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-sidebar sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4 justify-between">
       
       {/* Left: Sidebar toggle and Search */}
       <div className="flex items-center gap-2 flex-1">
         {navMain && (
           <Button
             className="h-8 w-8"
             variant="ghost"
             size="icon"
             onClick={toggleSidebar}
           >
             <SidebarIcon />
           </Button>
         )}
         <SearchForm className="w-full sm:w-auto max-w-md" />
       </div>

       {/* Center: FLOSLATE Logo */}
       <div className="flex items-center justify-center flex-1">
         <FloslateLogo size="lg" textVariant="medium" />
       </div>

       {/* Right: User menu */}
       <div className="flex items-center justify-end flex-1">
         <NavUser user={user} />
       </div>
      </div>
    </header>
  )
}
