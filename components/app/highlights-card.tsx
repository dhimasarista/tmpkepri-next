import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { channels } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

const barColors = ["bg-deep", "bg-signal", "bg-cyan"];

export function HighlightsCard() {
  const total = channels.reduce((sum, channel) => sum + channel.amount, 0);

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="text-base font-semibold">Highlights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <p className="text-sm text-muted-foreground">Sales, all time</p>
          <p className="mt-1 text-3xl font-semibold tracking-tight">
            ${total}k
          </p>
        </div>

        <div
          role="img"
          aria-label="Share of sales by channel"
          className="flex h-2.5 gap-0.5 overflow-hidden rounded-full"
        >
          {channels.map((channel, index) => (
            <span
              key={channel.name}
              className={cn("h-full", barColors[index])}
              style={{ width: `${channel.share}%` }}
            />
          ))}
        </div>

        <ul className="text-sm">
          {channels.map((channel, index) => {
            const isUp = channel.delta >= 0;
            return (
              <li
                key={channel.name}
                className="flex items-center gap-3 border-t py-3"
              >
                <span
                  aria-hidden
                  className={cn("size-2.5 rounded-full", barColors[index])}
                />
                <span className="flex-1 font-medium">{channel.name}</span>
                <span>${channel.amount}k</span>
                <span className="flex w-16 items-center justify-end gap-0.5 font-bold">
                  {isUp ? (
                    <ArrowUp className="size-4" aria-label="Up" />
                  ) : (
                    <ArrowDown
                      className="size-4 text-accent-mark"
                      aria-label="Down"
                    />
                  )}
                  {Math.abs(channel.delta)}%
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
