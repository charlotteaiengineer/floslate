"use client"

import {
  AppSidebar,
  RightSidebar,
  SidebarInset,
  SidebarProvider,
  SiteFooter,
  SiteHeader,
} from "@aliveui/ui"

interface AppShellProps {
  children: React.ReactNode
  user?: {
    name: string
    email: string
    avatar: string
  }
  navMain?: React.ComponentProps<typeof AppSidebar>["navMain"]
  sidebar?: React.ReactNode
  collapsible?: "offcanvas" | "icon" | "none"
  logo?: React.ReactNode
  appName?: string
}

export function AppShell({ children, user, navMain, sidebar, collapsible = "offcanvas", appName }: AppShellProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex flex-col h-svh w-svw overflow-hidden">
        <SiteHeader user={user}  navMain={navMain} appName={appName} />
        <div className="flex flex-1 overflow-hidden">
          {sidebar ? sidebar : <AppSidebar navMain={navMain} user={user} collapsible={collapsible} />}
          <SidebarInset className="flex flex-col flex-1 overflow-hidden bg-sidebar p-2">
            <main className="flex-1 rounded-3xl border bg-background overflow-y-auto p-4">
              {children}
            </main>
          </SidebarInset>
          <RightSidebar />
        </div>
        <SiteFooter />
      </div>
    </SidebarProvider>
  )
}
