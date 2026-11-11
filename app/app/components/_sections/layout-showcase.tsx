"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export function LayoutShowcase() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Scroll Area</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="py-2 text-sm">
                Tag {i + 1}
                {i !== 49 && <Separator className="my-2" />}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Collapsible & Aspect Ratio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline">Can I use this in my project?</Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 rounded-md bg-muted/50 p-4 text-sm text-muted-foreground">
              Yes. Free to use for personal and commercial projects. No
              attribution required.
            </CollapsibleContent>
          </Collapsible>

          <AspectRatio
            ratio={16 / 9}
            className="flex items-center justify-center overflow-hidden rounded-md bg-muted"
          >
            <span className="text-sm text-muted-foreground">
              16:9 Aspect Ratio
            </span>
          </AspectRatio>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Resizable Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            orientation="horizontal"
            className="min-h-[200px] w-full rounded-lg border"
          >
            <ResizablePanel defaultSize="50%">
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Left Panel</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize="50%">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize="25%">
                  <div className="flex h-full items-center justify-center bg-muted/30 p-6">
                    <span className="font-semibold">Top</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize="75%">
                  <div className="flex h-full items-center justify-center bg-muted/10 p-6">
                    <span className="font-semibold">Bottom</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>
    </div>
  );
}
