"use client"

import { AppSidebar } from "@aliveui/ui"

import { type IconName } from "@aliveui/ui/icon"

export const sidebarData: {
  user: {
    name: string
    email: string
    avatar: string
  }
  navMain: {
    title: string
    url: string
    icon: IconName
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
} = {
  user: {
    name: "Charlotte",
    email: "charlotte@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Todos",
      url: "/dashboard",
      icon: "todo",
      isActive: true,
      items: [
        {
          title: "My Todos",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Documents",
      url: "/dashboard/documents",
      icon: "inbox",
      items: [],
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: "filter",
      items: [],
    },
    {
      title: "Calendar",
      url: "/dashboard/calendar",
      icon: "calendar",
      items: [],
    },
  ],
}

export function AppSidebarWrapper() {
  return <AppSidebar navMain={sidebarData.navMain} />
}
