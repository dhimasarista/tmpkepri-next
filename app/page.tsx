import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  GraduationCap,
  HeartHandshake,
  Ship,
  Users,
} from "lucide-react";
import { HomeHero } from "@/components/landing/home-hero";
import { PageShell } from "@/components/landing/page-shell";

const pillars = [
  {
    icon: GraduationCap,
    title: "1. Kaderisasi & Pendidikan Politik",
    desc: "Menyelenggarakan pendidikan politik dan kaderisasi berjenjang bagi pemuda Kepri yang siap berhimpun di PDI Perjuangan untuk melatih integritas moral dan kepemimpinan publik.",
  },
  {
    icon: Ship,
    title: "2. Gerakan Kemaritiman & Nelayan",
    desc: "Advokasi kebijakan perlindungan ruang tangkap nelayan tradisional, pendampingan legalitas armada kapal nelayan kecil, dan aksi rehabilitasi hutan mangrove pesisir Kepri.",
  },
  {
    icon: Users,
    title: "3. Ekonomi Kreatif & Ketenagakerjaan",
    desc: "Mendorong inkubasi usaha rintisan anak muda Kepri, pelatihan sertifikasi vokasi industri, serta perluasan akses permodalan bagi wirausahawan pemuda berbasis potensi bahari.",
  },
  {
    icon: HeartHandshake,
    title: "4. Advokasi Rakyat & Aksi Kemanusiaan",
    desc: "Posko bantuan hukum bagi masyarakat kurang mampu, tanggap darurat musibah laut dan cuaca ekstrem di pulau terluar, serta bakti sosial gotong royong tanpa membedakan latar belakang.",
  },
];

export default function Home() {
  return (
    <PageShell>
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Empat Pilar Pengabdian: Arah Gerakan Organisasi (Naik ke Atas) */}
      <section className="bg-neutral-50 py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
              Arah Gerakan Organisasi
            </span>
            <h2 className="mt-2 font-display text-2xl font-black text-[#111827] sm:text-3xl">
              Empat Pilar Pengabdian Taruna Merah Putih Kepri
            </h2>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Program nyata yang dilaksanakan secara berkesinambungan oleh DPD
              Taruna Merah Putih di seluruh wilayah maritim Provinsi Kepulauan Riau.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white p-6 shadow-2xs hover:border-[#B91C1C] transition-colors"
                >
                  <div className="flex size-11 items-center justify-center rounded-sm bg-red-50 text-[#B91C1C]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-[#111827]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-neutral-600">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Amanat Ideologi Bung Karno: Solid Red (#B91C1C) with Pure White (#FFFFFF) text */}
      <section className="bg-[#B91C1C] py-14 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="relative mx-auto mb-5 h-16 w-10 sm:h-20 sm:w-12">
            <Image
              src="/logo-only-white.svg"
              alt="Lambang Taruna Merah Putih"
              fill
              className="object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white">
            <Flame className="size-3.5 text-white" />
            <span>Amanat Proklamator Bangsa</span>
          </div>

          <blockquote className="mt-6 font-display text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
            &ldquo;Beri aku 1.000 orang tua, niscaya akan kucabut Semeru dari
            akarnya. Beri aku 10 pemuda, niscaya akan kuguncangkan dunia!&rdquo;
          </blockquote>

          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-white">
            Ir. Soekarno, Proklamator & Presiden Pertama Republik Indonesia
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-white/90 sm:text-sm">
            Taruna Merah Putih Kepulauan Riau meneladani api perjuangan Bung
            Karno: membela rakyat maritim yang tertindas, mengobarkan semangat
            persatuan nasional, dan membuktikan dedikasi pemuda bagi kejayaan
            Ibu Pertiwi.
          </p>
        </div>
      </section>

      {/* 4. Portal Publikasi & Liputan Kegiatan Resmi (Menggantikan Registrasi) */}
      <section className="bg-white py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 border-b-2 border-[#B91C1C] pb-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                Publikasi & Liputan Kegiatan
              </span>
              <h2 className="font-display text-2xl font-black text-[#111827] sm:text-3xl">
                Warta & Publikasi DPD TMP Kepri
              </h2>
            </div>
            <Link
              href="/publikasi"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#B91C1C] hover:underline"
            >
              <span>Indeks Publikasi Selengkapnya</span>
              <ChevronRight className="size-4" />
            </Link>
          </div>

          {/* Asymmetric Editorial News Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Main Headline News */}
            <article className="border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-500">
                  <span className="rounded-xs bg-[#B91C1C] px-2 py-0.5 text-white uppercase">
                    Konsolidasi Organisasi
                  </span>
                  <span>&bull;</span>
                  <span>Rabu, 11 November 2026</span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-black leading-snug text-[#111827] sm:text-3xl hover:text-[#B91C1C] transition-colors">
                  <Link href="/publikasi">
                    DPD Taruna Merah Putih Kepri Mantapkan Barisan Gerakan Pemuda Maritim Jelang
                    Rapat Kerja Daerah 2026 di Batam
                  </Link>
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  Konsolidasi kepengurusan DPD Taruna Merah Putih Provinsi Kepulauan
                  Riau resmi digelar guna merumuskan arah kebijakan keanggotaan
                  dan gerakan advokasi masyarakat pesisir. Pertemuan ini menegaskan
                  komitmen pemuda bahari untuk hadir nyata membela kepentingan rakyat di
                  gerbang maritim Indonesia.
                </p>
              </div>

              <div className="mt-6 border-t border-neutral-200 pt-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-600">
                  Oleh: Humas & Media Center DPD TMP Kepri
                </span>
                <Link
                  href="/publikasi"
                  className="font-bold text-[#B91C1C] hover:underline inline-flex items-center gap-1"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>

            {/* Side Secondary News List */}
            <div className="divide-y divide-neutral-200 border border-neutral-200 bg-neutral-50/50">
              <div className="bg-[#111827] px-4 py-3 text-xs font-bold text-white uppercase tracking-wider">
                Siaran Pers & Agenda Gerakan DPD Kepri
              </div>

              <article className="p-4.5 bg-white">
                <span className="text-[11px] font-bold text-[#B91C1C] uppercase">
                  Biro Ideologi & Kebangsaan
                </span>
                <h4 className="mt-1 font-display text-sm font-bold text-[#111827] hover:text-[#B91C1C]">
                  <Link href="/publikasi">
                    Diskusi Kebangsaan Mahasiswa: Menggali Nilai Pancasila dalam
                    Menghadapi Era Digital di Kepulauan Riau
                  </Link>
                </h4>
                <p className="mt-1 text-xs text-neutral-500">
                  05 November 2026 &bull; DPD TMP Kepulauan Riau
                </p>
              </article>

              <article className="p-4.5 bg-white">
                <span className="text-[11px] font-bold text-[#B91C1C] uppercase">
                  Satgas Lingkungan & Kemaritiman
                </span>
                <h4 className="mt-1 font-display text-sm font-bold text-[#111827] hover:text-[#B91C1C]">
                  <Link href="/publikasi">
                    Aksi Gotong Royong Pesisir: Penanaman 2.500 Bibit Mangrove
                    Bersama Komunitas Nelayan Pesisir Kepri
                  </Link>
                </h4>
                <p className="mt-1 text-xs text-neutral-500">
                  28 Oktober 2026 &bull; Satgas Lingkungan DPD TMP Kepri
                </p>
              </article>

              <article className="p-4.5 bg-white">
                <span className="text-[11px] font-bold text-[#B91C1C] uppercase">
                  Biro Advokasi & Wilayah Pesisir
                </span>
                <h4 className="mt-1 font-display text-sm font-bold text-[#111827] hover:text-[#B91C1C]">
                  <Link href="/publikasi">
                    Sosialisasi Pengawasan Wilayah Laut Perbatasan dan Bantuan
                    Alat Keselamatan Berlayar untuk Nelayan Pulau Terluar Kepri
                  </Link>
                </h4>
                <p className="mt-1 text-xs text-neutral-500">
                  20 Oktober 2026 &bull; DPD TMP Kepulauan Riau
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
