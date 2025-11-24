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
      className="sticky w-1 hidden lg:flex top-0 h-svh border-l"
      side="right"
      {...props}
    >
      <SidebarHeader className="h-(--header-height) border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
          
   
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
    
      </SidebarContent>
    </Sidebar>
  )
}
