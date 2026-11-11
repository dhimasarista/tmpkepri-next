"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  UserPlus,
  Shield,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { pageLinks } from "@/components/landing/nav-links";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRedHeader = pathname === "/profil";

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      {/* 1. Top Bar / Sub Header: Inverts color depending on hero section */}
      <div
        className={
          isRedHeader
            ? "border-b border-neutral-200 bg-white text-[#111827]"
            : "bg-[#B91C1C] text-white"
        }
      >
        <div className="container mx-auto flex h-9 max-w-6xl items-center justify-between px-4 text-xs sm:px-6">
          <div className="flex items-center gap-2">
            <span
              className={
                isRedHeader
                  ? "font-semibold tracking-wide text-[#B91C1C]"
                  : "font-semibold tracking-wide text-white"
              }
            >
              DEWAN PIMPINAN DAERAH TARUNA MERAH PUTIH KEPULAUAN RIAU
            </span>
          </div>

          <div
            className={
              isRedHeader
                ? "hidden items-center gap-6 text-neutral-700 md:flex"
                : "hidden items-center gap-6 text-white/95 md:flex"
            }
          >
            <span className="flex items-center gap-1.5">
              <MapPin
                className={
                  isRedHeader ? "size-3.5 text-[#B91C1C]" : "size-3.5 text-white"
                }
              />
              <span>Sekretariat: Batam Centre, Kota Batam</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone
                className={
                  isRedHeader ? "size-3.5 text-[#B91C1C]" : "size-3.5 text-white"
                }
              />
              <span>(0778) 461-234</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Brand & Nav Bar: Reverse color (Red on /about, White on /) */}
      <div
        className={
          isRedHeader
            ? "border-b border-red-800 bg-[#B91C1C] text-white"
            : "border-b border-neutral-200 bg-white"
        }
      >
        <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo Resmi TMP Kepri */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] focus-visible:ring-offset-2 rounded-xs"
            aria-label="Beranda Taruna Merah Putih Provinsi Kepulauan Riau"
          >
            <div className="relative h-13 w-[142px] sm:h-15 sm:w-[164px]">
              <Image
                src={isRedHeader ? "/logo-horizontal-white.svg" : "/logo-horizontal.svg"}
                alt="Taruna Merah Putih Provinsi Kepulauan Riau"
                fill
                className="object-contain object-left"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Navigasi Utama" className="hidden items-center gap-1 lg:flex">
            {pageLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isRedHeader
                      ? isActive
                        ? "bg-white/20 text-white font-bold"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                      : isActive
                        ? "bg-red-50 text-[#B91C1C]"
                        : "text-[#111827] hover:bg-neutral-100 hover:text-[#B91C1C]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/daftar"
              className={`inline-flex items-center gap-2 rounded-md px-4.5 py-2.5 text-xs font-bold tracking-wider uppercase shadow-xs transition active:scale-[0.98] ${
                isRedHeader
                  ? "bg-white text-[#B91C1C] hover:bg-neutral-100"
                  : "bg-[#B91C1C] text-white hover:bg-[#991B1B]"
              }`}
            >
              <UserPlus className="size-4" />
              <span>Daftar Anggota</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex size-11 items-center justify-center rounded-md border lg:hidden ${
              isRedHeader
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-neutral-200 text-[#111827] hover:bg-neutral-100"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`border-b px-4 py-4 lg:hidden ${
            isRedHeader
              ? "border-red-800 bg-[#B91C1C] text-white"
              : "border-neutral-200 bg-white"
          }`}
        >
          <nav className="flex flex-col space-y-1">
            {pageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-semibold ${
                  isRedHeader
                    ? "text-white hover:bg-white/10"
                    : "text-[#111827] hover:bg-neutral-100 hover:text-[#B91C1C]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/daftar"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-xs font-bold uppercase ${
                  isRedHeader
                    ? "bg-white text-[#B91C1C]"
                    : "bg-[#B91C1C] text-white"
                }`}
              >
                <UserPlus className="size-4" />
                <span>Pendaftaran Anggota</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
