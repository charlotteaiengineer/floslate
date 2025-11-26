"use client"

import {
  AppSidebar,
  EtheralShadow,
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
  appName?: string,
  backgroundAnimated?: boolean
}

export function AppShell({ children, user, navMain, sidebar, collapsible = "offcanvas", backgroundAnimated = false, appName }: AppShellProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex flex-col h-svh w-svw overflow-hidden">
        <SiteHeader user={user} navMain={navMain} appName={appName} />
        <div className="flex flex-1 overflow-hidden">
          {sidebar ? sidebar : <AppSidebar navMain={navMain} user={user} collapsible={collapsible} />}
          <SidebarInset className="flex flex-col flex-1 overflow-hidden bg-sidebar p-2">
            {backgroundAnimated ? (
              // <EtheralShadow
              //   color="var(--primary)"
              //   staticFilter={true}
              //   // animation={{ scale: 1000, speed: 0 }}
              //   noise={{ opacity: 0.3, scale: 0.5 }}
              //   className="rounded-[45px] relative overflow-hidden shadow-inset shadow-[inset_0px_4px_108px_15px_rgba(0,_0,_0,_0.3)]"
              // >
              <div className="rounded-[45px] bg-background relative overflow-hidden shadow-inset shadow-[inset_0px_4px_58px_15px_rgba(0,_0,_0,_0.2)]">

                <main className="  flex-1 h-full w-full overflow-y-scroll !scrollbar-none  ">
                  {children}
                </main>
              </div>
              // </EtheralShadow>
            ) : (
              <main className="flex-1  border bg-background overflow-y-auto ">
                {children}
              </main>
            )}
          </SidebarInset>
          <RightSidebar />
        </div>
        <SiteFooter />
      </div>
    </SidebarProvider>
  )
}
