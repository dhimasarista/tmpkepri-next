import Link from "next/link";
import Image from "next/image";
import { pageLinks } from "@/components/landing/nav-links";
import { MapPin, Mail, Phone, Flame } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/landing/social-icons";

export function Footer() {
  return (
    <footer className="w-full">
      {/* 1. Main Footer: Solid Red (#B91C1C) with Pure White (#FFFFFF) Content */}
      <div className="bg-[#B91C1C] text-white">
        <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            {/* Col 1: Identity & Description */}
            <div>
              <div className="relative h-14 w-[164px]">
                <Image
                  src="/logo-horizontal-white.svg"
                  alt="Taruna Merah Putih Kepulauan Riau"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>

              <p className="mt-4 text-xs leading-relaxed text-white/90">
                Wadah persatuan, penggemblengan ideologi, dan gotong royong
                generasi muda di wilayah maritim Kepulauan Riau untuk
                memperjuangkan kedaulatan bangsa dan kesejahteraan rakyat.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-xs bg-white/15 text-white transition hover:bg-white hover:text-[#B91C1C]"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="size-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-xs bg-white/15 text-white transition hover:bg-white hover:text-[#B91C1C]"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="size-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-xs bg-white/15 text-white transition hover:bg-white hover:text-[#B91C1C]"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="size-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Halaman Navigasi */}
            <div>
              <p className="border-b border-white/20 pb-2 text-xs font-bold uppercase tracking-wider text-white">
                Halaman Utama
              </p>
              <ul className="mt-3 space-y-2 text-xs">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/85 transition hover:text-white hover:underline underline-offset-4"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/daftar"
                    className="font-bold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white"
                  >
                    Pendaftaran Anggota
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Fokus Gerakan DPD */}
            <div>
              <p className="border-b border-white/20 pb-2 text-xs font-bold uppercase tracking-wider text-white">
                Fokus Gerakan DPD
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/85">
                <li className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-white" />
                  <span>Kedaulatan Maritim & Pesisir</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-white" />
                  <span>Advokasi Nelayan Tradisional</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-white" />
                  <span>Ekonomi Kreatif Pemuda</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-white" />
                  <span>Pendidikan Ideologi Pancasila</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-white" />
                  <span>Konservasi Bahari & Mangrove</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Alamat & Kontak */}
            <div>
              <p className="border-b border-white/20 pb-2 text-xs font-bold uppercase tracking-wider text-white">
                Sekretariat DPD
              </p>
              <div className="mt-3 space-y-2.5 text-xs text-white/90">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-white" />
                  <span>
                    Komp. Ruko Batam Centre Square Blok C No. 5-7, Jl. Engku
                    Putri, Batam Kota, Kepulauan Riau 29461
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 shrink-0 text-white" />
                  <span>Hotline: (0778) 461-234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-3.5 shrink-0 text-white" />
                  <span>sekretariat@tmpkepri.id</span>
                </div>
                <div className="pt-2">
                  <span className="inline-block border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Tri Prasetya Taruna Merah Putih
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Strip: Rich Black (#111827) - Minority Black for crisp grounding */}
      <div className="bg-[#111827] text-neutral-400 border-t border-neutral-800">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} DPD TARUNA MERAH PUTIH PROVINSI
            KEPULAUAN RIAU. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-300">
            <Link href="/profil" className="hover:text-white">
              Profil
            </Link>
            <span>&bull;</span>
            <Link href="/kontak" className="hover:text-white">
              Kontak
            </Link>
            <span>&bull;</span>
            <Link href="/daftar" className="text-white font-bold hover:underline">
              Pendaftaran Anggota
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
