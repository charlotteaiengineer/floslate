"use client"

import { Command } from "lucide-react"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { type IconName } from "@aliveui/ui/icon"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@aliveui/ui"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navMain?: {
    title: string
    url: string
    icon: IconName
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  user?: {
    name: string
    email: string
    avatar: string
  }
}

export function AppSidebar({ navMain, user, ...props }: AppSidebarProps) {

  return (
    <Sidebar
      className="max-h-[calc(100vh-100px)] my-auto"
      {...props}
    >
      <SidebarHeader>
   
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain || []} />
      </SidebarContent>
      <SidebarFooter>
     
      </SidebarFooter>
    </Sidebar>
  )
}
