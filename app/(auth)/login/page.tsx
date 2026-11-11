import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flame, Lock, UserCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/40 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 self-center font-medium transition hover:opacity-90"
        >
          <div className="relative h-12 w-7 shrink-0">
            <Image
              src="/logo-only.svg"
              alt="Logo Taruna Merah Putih"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="font-display text-lg leading-none font-extrabold tracking-tight text-primary uppercase">
              Taruna Merah Putih
            </h1>
            <h2 className="mt-1 text-[11px] font-semibold text-foreground/80 uppercase">
              DPD Provinsi Kepulauan Riau
            </h2>
          </div>
        </Link>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-md sm:p-8">
            <div className="flex flex-col space-y-1.5 pb-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Portal Pengurus & Kader
              </h2>
              <p className="text-xs text-muted-foreground">
                Masuk ke sistem informasi DPD TMP Kepri
              </p>
            </div>

            <form className="mt-2">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-xs font-bold">
                    Email Pengurus / ID Kader
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="kader@tmpkepri.id"
                    defaultValue="admin@tmpkepri.id"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-xs font-bold">
                      Kata Sandi
                    </Label>
                    <a
                      href="#"
                      className="text-xs text-primary hover:underline underline-offset-4"
                    >
                      Lupa sandi?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    defaultValue="••••••••"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  asChild
                  className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white hover:bg-[#a6191c]"
                >
                  <Link href="/app/dashboard">Masuk ke Portal</Link>
                </Button>
              </div>
            </form>

            <div className="mt-6 border-t border-border pt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Belum terdaftar sebagai kader?{" "}
                <Link
                  href="/daftar"
                  className="font-bold text-primary hover:underline"
                >
                  Daftar di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
