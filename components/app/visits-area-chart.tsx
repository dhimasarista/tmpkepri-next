"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { dailyVisits } from "@/lib/sample-data";

const config = {
  visits: { label: "Visits", color: "var(--chart-1)" },
} satisfies ChartConfig;

export function VisitsAreaChart() {
  return (
    <ChartContainer config={config} className="h-72 w-full">
      <AreaChart data={dailyVisits} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="visits"
          type="monotone"
          stroke="var(--chart-3)"
          strokeWidth={2.5}
          fill="var(--chart-3)"
          fillOpacity={0.15}
          dot={false}
        />
      </AreaChart>
    </ChartContainer>
  );
}
