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
    name: "Charlotte Bondarev",
    email: "charlotte@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Today",
      url: "/today",
      icon: "calendar",
      isActive: true,
      items: [],
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: "inbox",
      items: [],
    },
    {
      title: "Upcoming",
      url: "/upcoming",
      icon: "calendar",
      items: [],
    },
  ],
}

export function AppSidebarWrapper() {
  return <AppSidebar navMain={sidebarData.navMain} />
}
