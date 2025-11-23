import { AppSidebarWrapper } from "@/components/app-sidebar-wrapper"
import { SiteHeaderWrapper } from "@/components/site-header-wrapper"
import { SiteFooterWrapper } from "@/components/site-footer-wrapper"
import { RightSidebarWrapper } from "@/components/right-sidebar-wrapper"
import { SidebarInset, SidebarProvider } from "@aliveui/ui"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebarWrapper />
      <SidebarInset className="flex flex-col h-svh overflow-hidden">
        <SiteHeaderWrapper />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
        <SiteFooterWrapper />
      </SidebarInset>
      <RightSidebarWrapper />
    </SidebarProvider>
  )
}
