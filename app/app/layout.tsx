import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0 bg-zinc-50 dark:bg-zinc-950/50">
        <DashboardHeader />
        <main className="mx-auto h-full w-full flex-1 overflow-hidden p-4 sm:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
