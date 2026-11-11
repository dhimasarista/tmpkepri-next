"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { earningsByMonth } from "@/lib/sample-data";

const config = {
  earnings: { label: "Earnings ($k)", color: "var(--chart-1)" },
} satisfies ChartConfig;

const periods = {
  "6": "Last 6 months",
  "12": "Last 12 months",
} as const;

type Period = keyof typeof periods;

export function EarningsCard() {
  const [period, setPeriod] = useState<Period>("12");
  const data = earningsByMonth.slice(-Number(period));

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="text-base font-semibold">Earnings</CardTitle>
        <CardAction>
          <Select
            value={period}
            onValueChange={(value) => setPeriod(value as Period)}
          >
            <SelectTrigger className="w-44" aria-label="Period">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(periods).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-64 w-full">
          <AreaChart data={data} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={44}
              tickFormatter={(value) => `$${value}k`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="earnings"
              type="monotone"
              stroke="var(--chart-1)"
              strokeWidth={2.5}
              fill="var(--chart-1)"
              fillOpacity={0.15}
              dot={false}
              activeDot={{
                r: 5,
                fill: "var(--foreground)",
                stroke: "var(--background)",
              }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
