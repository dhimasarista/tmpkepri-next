"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Terminal,
  Copy,
  Settings,
  Box,
  LayoutTemplate,
  Layers,
} from "lucide-react";
import { FormShowcase } from "./_sections/form-showcase";
import { NavigationShowcase } from "./_sections/navigation-showcase";
import { OverlayShowcase } from "./_sections/overlay-showcase";
import { DataDisplayShowcase } from "./_sections/data-display-showcase";
import { LayoutShowcase } from "./_sections/layout-showcase";
import { AdvancedShowcase } from "./_sections/advanced-showcase";

export default function ComponentsShowcasePage() {
  return (
    <div className="flex-1 space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Component gallery
        </h1>
        <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
          Every shadcn/ui component in the repo, rendered and interactive. Use
          the tabs to move between categories.
        </p>
      </div>

      <Tabs defaultValue="form" className="w-full">
        <TabsList className="mb-8 flex h-auto flex-wrap rounded-xl bg-muted/50 p-1">
          <TabsTrigger
            value="form"
            className="min-w-[120px] flex-1 rounded-lg py-3 hover:bg-background/50 data-[state=active]:shadow-xs"
          >
            <Box className="mr-2 h-4 w-4" /> Form
          </TabsTrigger>
          <TabsTrigger
            value="navigation"
            className="min-w-[120px] flex-1 rounded-lg py-3 hover:bg-background/50 data-[state=active]:shadow-xs"
          >
            <LayoutTemplate className="mr-2 h-4 w-4" /> Navigation
          </TabsTrigger>
          <TabsTrigger
            value="overlay"
            className="min-w-[120px] flex-1 rounded-lg py-3 hover:bg-background/50 data-[state=active]:shadow-xs"
          >
            <Copy className="mr-2 h-4 w-4" /> Overlay
          </TabsTrigger>
          <TabsTrigger
            value="data"
            className="min-w-[120px] flex-1 rounded-lg py-3 hover:bg-background/50 data-[state=active]:shadow-xs"
          >
            <Layers className="mr-2 h-4 w-4" /> Data Display
          </TabsTrigger>
          <TabsTrigger
            value="layout"
            className="min-w-[120px] flex-1 rounded-lg py-3 hover:bg-background/50 data-[state=active]:shadow-xs"
          >
            <Settings className="mr-2 h-4 w-4" /> Layout
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="min-w-[120px] flex-1 rounded-lg py-3 hover:bg-background/50 data-[state=active]:shadow-xs"
          >
            <Terminal className="mr-2 h-4 w-4" /> Advanced
          </TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent
            value="form"
            className="m-0 focus-visible:outline-hidden"
          >
            <FormShowcase />
          </TabsContent>
          <TabsContent
            value="navigation"
            className="m-0 focus-visible:outline-hidden"
          >
            <NavigationShowcase />
          </TabsContent>
          <TabsContent
            value="overlay"
            className="m-0 focus-visible:outline-hidden"
          >
            <OverlayShowcase />
          </TabsContent>
          <TabsContent
            value="data"
            className="m-0 focus-visible:outline-hidden"
          >
            <DataDisplayShowcase />
          </TabsContent>
          <TabsContent
            value="layout"
            className="m-0 focus-visible:outline-hidden"
          >
            <LayoutShowcase />
          </TabsContent>
          <TabsContent
            value="advanced"
            className="m-0 focus-visible:outline-hidden"
          >
            <AdvancedShowcase />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
