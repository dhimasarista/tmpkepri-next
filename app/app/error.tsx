"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-xl border bg-card p-8">
      <h2 className="text-2xl font-bold tracking-tight">
        This screen failed to load.
      </h2>
      <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
        Try again. If the error returns, look for
        {error.digest ? (
          <>
            {" "}
            digest{" "}
            <code className="font-mono text-sm text-foreground">
              {error.digest}
            </code>{" "}
            in
          </>
        ) : (
          " it in"
        )}{" "}
        the server log.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button variant="outline" asChild>
          <Link href="/app/dashboard">Go to the dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
