import Link from "next/link";
import { BackButton } from "@/components/go-back";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="reef flex min-h-screen items-center bg-background px-6 text-foreground">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-display text-8xl font-semibold text-signal sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          That page is not in the repo.
        </h1>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          The address may be mistyped, or the page was removed. The home page
          links every route that exists.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Back to the home page</Link>
          </Button>
          <BackButton />
        </div>
      </div>
    </main>
  );
}
