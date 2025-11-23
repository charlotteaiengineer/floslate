"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@aliveui/ui"
import { Calendar } from "lucide-react"

export function RightSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      side="right"
      {...props}
    >
      <SidebarHeader className="h-(--header-height) border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <div className="flex items-center justify-center">
                <span className="font-medium">Calendar</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium">Upcoming Events</span>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border p-3 text-sm">
                <div className="font-medium">Meeting {i}</div>
                <div className="text-muted-foreground text-xs">10:00 AM - 11:00 AM</div>
              </div>
            ))}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
