"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="reef flex min-h-screen items-center bg-background px-6 text-foreground">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Something broke while loading this page.
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Try again first. If it keeps happening, check the server log
          {error.digest ? (
            <>
              {" "}
              for the digest{" "}
              <code className="font-mono text-sm text-foreground">
                {error.digest}
              </code>
            </>
          ) : null}
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to the home page</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
