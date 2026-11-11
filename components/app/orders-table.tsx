"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orders, type OrderStatus } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 5;

const statusStyle: Record<OrderStatus, string> = {
  Paid: "bg-primary text-primary-foreground",
  Pending: "border border-foreground bg-background text-foreground",
  Refunded: "bg-signal text-white",
};

export function OrdersTable() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return orders;
    return orders.filter((order) =>
      [order.id, order.product, order.status]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const rows = filtered.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE);
  const from = filtered.length === 0 ? 0 : safePage * PAGE_SIZE + 1;
  const to = safePage * PAGE_SIZE + rows.length;

  return (
    <Card className="gap-0 py-0">
      <CardHeader className="border-b py-5">
        <CardTitle className="text-base font-semibold">Orders</CardTitle>
        <CardAction>
          <div className="relative">
            <Search
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="search"
              aria-label="Search orders"
              placeholder="Search orders"
              className="w-56 pl-9"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(0);
              }}
            />
          </div>
        </CardAction>
      </CardHeader>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-6">Order</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="pr-6 text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="py-10 text-center text-muted-foreground"
              >
                No orders match &ldquo;{query}&rdquo;. Clear the search to see
                all {orders.length}.
              </TableCell>
            </TableRow>
          ) : (
            rows.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="pl-6 font-medium">#{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell className="text-muted-foreground">
                  {order.date}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={cn("font-medium", statusStyle[order.status])}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="pr-6 text-right">
                  ${order.amount}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between border-t px-6 py-3 text-sm text-muted-foreground">
        <p role="status">
          {from}-{to} of {filtered.length}
        </p>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous page"
            disabled={safePage === 0}
            onClick={() => setPage(safePage - 1)}
          >
            <ChevronLeft aria-hidden />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next page"
            disabled={safePage >= pageCount - 1}
            onClick={() => setPage(safePage + 1)}
          >
            <ChevronRight aria-hidden />
          </Button>
        </div>
      </div>
    </Card>
  );
}
