"use client";

import * as React from "react";
import { useState } from "react";
import {
  Calendar,
  LayoutDashboard,
  HelpCircle,
  PieChart,
  Settings,
  Users,
  CheckSquare,
  Home,
  LayoutGrid,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Mock Data DPD TMP KEPRI
const user = {
  nama: "Biro Kaderisasi DPD",
  role: "Admin TMP Kepri",
};

const availableDashboards = [
  {
    key: "admin",
    label: "Portal Kader & Wilayah",
    href: "/app/dashboard",
    icon: LayoutDashboard,
  },
  {
    key: "analytics",
    label: "Statistik DPC Se-Kepri",
    href: "/app/analytics",
    icon: PieChart,
  },
];

const data = {
  menu: [
    {
      title: "Dashboard",
      url: "/app/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Tasks",
      url: "/app/tasks",
      icon: CheckSquare,
      badge: "12+",
    },
    {
      title: "Calendar",
      url: "/app/calendar",
      icon: Calendar,
    },
    {
      title: "Analytics",
      url: "/app/analytics",
      icon: PieChart,
    },
    {
      title: "Team",
      url: "/app/team",
      icon: Users,
    },
    {
      title: "Components",
      url: "/app/components",
      icon: LayoutDashboard,
    },
  ],
  general: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Settings",
      url: "/app/settings",
      icon: Settings,
    },
    {
      title: "Help",
      url: "/app/help",
      icon: HelpCircle,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [dashboardSwitcherOpen, setDashboardSwitcherOpen] = useState(false);
  const dashboardType = "admin"; // Mock active dashboard key
  const switcherRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setDashboardSwitcherOpen(false);
      }
    };
    if (dashboardSwitcherOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dashboardSwitcherOpen]);

  const renderMenuItems = (items: typeof data.menu) => {
    return items.map((item) => {
      const isActive =
        pathname === item.url ||
        (pathname.startsWith(item.url + "/") && item.url !== "/");
      return (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={isActive}
            tooltip={item.title}
            className={`h-11 px-4 font-medium transition-all group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:!h-12 group-data-[collapsible=icon]:!w-12 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!px-0 hover:bg-transparent hover:text-foreground ${
              isActive
                ? "relative bg-transparent font-semibold text-foreground before:absolute before:top-1/2 before:left-0 before:h-2/3 before:w-1 before:-translate-y-1/2 before:rounded-r-full before:bg-primary"
                : "bg-transparent text-muted-foreground/80 hover:text-foreground"
            } `}
          >
            <Link
              href={item.url}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className={`h-5 w-5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground/80"}`}
                />
                <span className="group-data-[collapsible=icon]:hidden">
                  {item.title}
                </span>
              </div>
              {item.badge && (
                <span className="rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground group-data-[collapsible=icon]:hidden">
                  {item.badge}
                </span>
              )}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  };

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="border-r-0 bg-background/50"
    >
      <SidebarHeader className="px-3 pt-5 pb-4 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:p-2">
        {/* === HEADER CARD & SWITCHER (Tampil saat sidebar terbuka) === */}
        <div className="relative w-full group-data-[collapsible=icon]:hidden">
          <div className="flex items-center justify-between rounded-xl border border-border/70 bg-card/70 p-3 shadow-xs dark:bg-zinc-900/60">
            {/* Avatar & Identitas Admin */}
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary">
                <span className="text-xs font-bold text-primary-foreground">
                  TMP
                </span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="block truncate text-sm font-bold text-foreground">
                  {user.nama}
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted-foreground capitalize">
                  {user.role.replace("_", " ")}
                </span>
              </div>
            </div>

            {/* Tombol Switcher Grid */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setDashboardSwitcherOpen(!dashboardSwitcherOpen);
              }}
              className={`ml-2 shrink-0 rounded-lg p-1.5 transition-colors focus:outline-hidden ${
                dashboardSwitcherOpen
                  ? "bg-muted text-foreground"
                  : "bg-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>

            {/* Menu Dropdown Pindah Dashboard */}
            <AnimatePresence>
              {dashboardSwitcherOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-[calc(100%+8px)] right-0 left-0 z-50 overflow-hidden rounded-lg border border-border bg-popover shadow-xl"
                >
                  <div className="border-b border-border/80 bg-muted/30 px-4 py-3">
                    <p className="text-sm font-bold tracking-wide text-foreground">
                      Pindah Dashboard
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Pilih dashboard yang ingin diakses
                    </p>
                  </div>
                  <div className="max-h-64 scrollbar-none overflow-y-auto py-1.5">
                    {availableDashboards.map((dashboard) => {
                      const isActive = dashboard.key === dashboardType;
                      const IconComponent = dashboard.icon;
                      return (
                        <Link
                          key={dashboard.key}
                          href={dashboard.href}
                          onClick={() => setDashboardSwitcherOpen(false)}
                          className={`group flex w-full items-center px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? "border-l-2 border-primary bg-accent/50 text-foreground"
                              : "border-l-2 border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                        >
                          <IconComponent
                            className={`mr-3 h-5 w-5 ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                          />
                          <span className="flex-1 font-medium">
                            {dashboard.label}
                          </span>
                          {isActive && (
                            <span className="ml-2 rounded-sm bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
                              Aktif
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Garis Pemisah & Nama Dashboard Aktif */}
          <div className="mt-4 mb-2">
            <div className="flex items-center border-t border-border/50 px-1 pt-4">
              <div className="mr-2.5 flex h-4 w-4 items-center justify-center rounded-full border border-foreground/30">
                <div className="h-1.5 w-1.5 rounded-xs bg-foreground"></div>
              </div>
              <span className="text-sm font-bold tracking-wide text-muted-foreground">
                Menu Utama
              </span>
            </div>
          </div>
        </div>

        {/* === ICON HEADER (Hanya tampil saat sidebar di-collapse) === */}
        <div className="mt-1 hidden aspect-square size-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary shadow-xs group-data-[collapsible=icon]:flex">
          <span className="text-[10px] font-bold text-primary-foreground">
            TMP
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex scrollbar-none flex-col gap-6 px-2 pb-6">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground/60 group-data-[collapsible=icon]:hidden">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {renderMenuItems(data.menu)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground/60 group-data-[collapsible=icon]:hidden">
            GENERAL
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {renderMenuItems(data.general)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
