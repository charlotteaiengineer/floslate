"use client"

import { AppSidebar } from "@aliveui/ui"
import { BookOpen, Frame, Map, SquareTerminal } from "lucide-react"

const data = {
  user: {
    name: "Charlotte",
    email: "charlotte@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Todos",
      url: "/dashboard",
      icon: SquareTerminal,
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
      icon: BookOpen,
      items: [],
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Frame,
      items: [],
    },
    {
      title: "Calendar",
      url: "/dashboard/calendar",
      icon: Map,
      items: [],
    },
  ],
}

export function AppSidebarWrapper() {
  return <AppSidebar navMain={data.navMain} />
}
