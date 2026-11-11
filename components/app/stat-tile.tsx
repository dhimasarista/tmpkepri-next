import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatTileProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  /** Fill the tile with the signal color. Use for one tile only. */
  highlight?: boolean;
};

export function StatTile({
  icon: Icon,
  value,
  label,
  highlight,
}: StatTileProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-6 rounded-xl border p-5",
        highlight ? "border-signal bg-signal text-white" : "bg-card",
      )}
    >
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-lg",
          highlight ? "bg-white/20" : "bg-accent",
        )}
      >
        <Icon className="size-5" aria-hidden />
      </div>
      <div>
        <p className="text-3xl leading-none font-semibold tracking-tight">
          {value}
        </p>
        <p
          className={cn(
            "mt-2 text-sm",
            highlight ? "text-white" : "text-muted-foreground",
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
