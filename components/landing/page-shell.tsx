import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

/** Wraps a landing page in the reef theme with the shared header and footer. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="reef flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
