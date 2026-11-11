"use client";

import Image from "next/image";
import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Search, Bell, Mail, LogOut, Settings, User } from "lucide-react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function DashboardHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const { state } = useSidebar();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Add scroll listener to window
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-20 shrink-0 items-center justify-between px-4 transition-all duration-300 sm:px-8",
        scrolled
          ? "mt-0 border-b border-border bg-white/80 shadow-xs backdrop-blur-md dark:bg-zinc-950/80"
          : "mt-2 border-b-0 bg-transparent",
      )}
    >
      <div className="flex flex-1 items-center gap-4">
        <SidebarTrigger
          className={cn(
            "text-muted-foreground hover:text-foreground",
            state === "expanded" ? "" : "", // Always show or let SidebarTrigger handle it
          )}
        />
        <div className="relative hidden w-full max-w-md sm:block">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search task"
            className="h-11 w-full rounded-full border-border/50 bg-white pr-14 pl-10 shadow-xs focus-visible:ring-1 dark:bg-zinc-900"
          />
          <div className="absolute top-1/2 right-3.5 -translate-y-1/2 rounded-md border border-border/50 bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            ⌘ F
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-border/50 bg-white text-muted-foreground shadow-xs dark:bg-zinc-900"
          >
            <Mail className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-border/50 bg-white text-foreground shadow-xs dark:bg-zinc-900"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <div className="hidden sm:block">
            <ModeToggle />
          </div>
        </div>

        <div className="border-border/100 px-4 sm:border-l sm:px-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-linear-to-tr from-zinc-700 to-zinc-900 shadow-xs">
                  <Image
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="hidden flex-col text-sm md:flex">
                  <span className="leading-none font-semibold text-foreground">
                    Totok Michael
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    tmichael20@mail.com
                  </span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm leading-none font-medium">
                    Totok Michael
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    tmichael20@mail.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/app/settings">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/app/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
