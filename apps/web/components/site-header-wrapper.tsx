"use client"

import { SiteHeader } from "@aliveui/ui"

const user = {
  name: "Charlotte",
  email: "charlotte@example.com",
  avatar: "/avatars/shadcn.jpg",
}

export function SiteHeaderWrapper() {
  return <SiteHeader user={user} />
}
