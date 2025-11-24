"use client"

import { SiteHeader } from "@aliveui/ui"

const user = {
  name: "Charlotte",
  email: "charlotte@example.com",
  avatar: "/avatars/shadcn.jpg",
}

import { sidebarData } from "./app-sidebar-wrapper"

export function SiteHeaderWrapper() {
  return <SiteHeader user={user} navMain={sidebarData.navMain} appName="Todo" />
}
