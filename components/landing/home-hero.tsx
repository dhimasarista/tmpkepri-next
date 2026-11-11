"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, UserPlus, Flame, Compass, Mail } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      {/* 1. Breaking / Agenda Ticker (Centered) */}
      <div className="border-b border-neutral-200 bg-neutral-50 px-4 py-2 sm:px-6">
        <div className="container mx-auto flex max-w-6xl items-center justify-center gap-3 text-xs text-center">
          <span className="shrink-0 rounded-xs bg-[#B91C1C] px-2.5 py-0.5 font-bold uppercase tracking-wider text-white">
            WARTA UTAMA
          </span>
          <div className="text-neutral-700">
            <span className="font-medium">
              Konsolidasi Pemuda Maritim DPD Taruna Merah Putih Provinsi Kepulauan Riau Resmi Digelar di Batam.
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Hero Area with Photographic Background & Red Tint */}
      <div className="relative isolate overflow-hidden bg-neutral-950 py-14 sm:py-18 lg:py-24 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assets/hero-bg.jpg"
            alt="Latar Belakang Bahari Maritim Kepulauan Riau"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Subtle Red Opacity Overlay (Nasionalis Merah) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#991B1B]/35 mix-blend-multiply"
        />

        {/* Directional Scrim: Deep dark on left for text legibility, transparent on right for imagery */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/35 lg:from-black/85 lg:via-black/55 lg:to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30"
        />

        {/* Container Content */}
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            {/* Left Column: Editorial Statement & CTAs */}
            <div className="flex flex-col">
              <h1 className="font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
                Menggalang Solidaritas Pemuda Maritim, Bergotong Royong Membangun
                Kepulauan Riau
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                Taruna Merah Putih (TMP) Provinsi Kepulauan Riau merupakan sayap
                kepemudaan resmi yang mendidik, menggembleng, dan menyatukan
                pemuda-pemudi di wilayah bahari Indonesia terdepan. Berlandaskan
                ideologi Pancasila 1 Juni dan semangat persatuan, kami berjuang
                untuk keadilan sosial, kemandirian ekonomi nelayan muda, dan
                integritas kepemimpinan generasi penerus.
              </p>

              {/* CTAs: Clean Pill Style inspired by Ouaken reference */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/daftar"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#B91C1C] px-6 text-xs font-bold tracking-wider text-white uppercase shadow-lg transition hover:bg-[#991B1B] hover:shadow-red-950/50"
                >
                  <UserPlus className="size-4 text-white" />
                  <span>Pendaftaran Anggota</span>
                </Link>

                <Link
                  href="/kontak"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/15 px-6 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs transition hover:bg-white/25 hover:border-white/60"
                >
                  <Mail className="size-4 text-white" />
                  <span>Hubungi Kami</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Modern Cards (Ouaken Inspired) */}
            <div className="flex flex-col gap-4">
              {/* 1. Dual Top Cards (Lencana TMP di Kiri, Prov. Kepri di Kanan) */}
              <div className="grid grid-cols-2 gap-4">
                {/* Card Left: Single Official Emblem (Logo TMP) */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/30 bg-white/95 p-4.5 text-center text-neutral-900 shadow-xl backdrop-blur-md">
                  <div className="relative h-13 w-8 shrink-0">
                    <Image
                      src="/logo-only.svg"
                      alt="Lencana Resmi Taruna Merah Putih"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-2 text-[11px] font-extrabold uppercase tracking-wide text-[#111827] leading-none">
                    Taruna Merah Putih
                  </p>
                  <p className="mt-1 text-[9px] font-bold text-[#B91C1C] uppercase tracking-wider">
                    Sayap PDI Perjuangan
                  </p>
                </div>

                {/* Card Right: Prov. Kepri */}
                <div className="flex flex-col justify-between rounded-2xl border border-white/30 bg-white/95 p-4.5 text-neutral-900 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex size-8 items-center justify-center rounded-lg bg-red-50 text-[#B91C1C]">
                      <Compass className="size-4.5" />
                    </div>
                    <p className="mt-3 text-2xl font-black tracking-tight text-[#111827] leading-none">
                      Prov. Kepri
                    </p>
                    <p className="mt-1.5 text-xs font-bold text-neutral-800">
                      Bumi Segantang Lada
                    </p>
                  </div>
                  <p className="mt-2 text-[10px] text-neutral-500 font-medium line-clamp-1">
                    Wilayah Maritim Bahari
                  </p>
                </div>
              </div>

              {/* 2. Featured Program Card (Bottom Horizontal) */}
              <div className="rounded-2xl border border-white/30 bg-white/95 p-5 text-neutral-900 shadow-2xl backdrop-blur-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 rounded-xs bg-red-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#B91C1C] uppercase">
                      <Flame className="size-3 text-[#B91C1C]" />
                      <span>Agenda Prioritas</span>
                    </div>
                    <h2 className="mt-2 text-base font-bold text-[#111827] leading-snug">
                      Sekolah Kader Maritim & Advokasi Nelayan Muda
                    </h2>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Penggemblengan kepemimpinan pemuda bahari se-Kepri
                      berlandaskan Trisakti dan ekonomi maritim kerakyatan.
                    </p>
                    <div className="mt-3.5">
                      <Link
                        href="/profil"
                        className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-neutral-800"
                      >
                        <span>Lihat Profil</span>
                        <ChevronRight className="size-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Thumbnail on card right */}
                  <div className="relative hidden size-20 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 sm:block">
                    <Image
                      src="/assets/hero-bg.jpg"
                      alt="Kegiatan Kader Maritim"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
