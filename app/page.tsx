"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileText,
  Flame,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Send,
  Shield,
  Ship,
  UserPlus,
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    phone: "",
    region: "Kota Batam",
    interest: "Kaderisasi & Ideologi",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <PageShell>
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Portal Warta Berita & Siaran Pers Resmi */}
      <section className="bg-white py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 border-b-2 border-[#B91C1C] pb-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                Publikasi & Liputan Kegiatan
              </span>
              <h2 className="font-display text-2xl font-black text-[#111827] sm:text-3xl">
                Warta Taruna Merah Putih Kepri
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#B91C1C] hover:underline"
            >
              <span>Indeks Berita Selengkapnya</span>
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
                  <Link href="/berita">
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
                  href="/berita"
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
                  <Link href="/berita">
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
                  <Link href="/berita">
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
                  <Link href="/berita">
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

      {/* 3. 4 Pilar Program Kerja Strategis */}
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

      {/* 4. Amanat Ideologi Bung Karno: Solid Red (#B91C1C) with Pure White (#FFFFFF) text */}
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

      {/* 6. Formulir Resmi Pendaftaran Anggota Baru */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                Registrasi Keanggotaan Resmi
              </span>
              <h2 className="mt-1 font-display text-2xl font-black text-[#111827]">
                Formulir Pendaftaran Anggota Taruna Merah Putih Kepri
              </h2>
              <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                Terbuka bagi pemuda-pemudi WNI berdomisili di Provinsi Kepulauan
                Riau usia 17 s/d 40 tahun yang berintegritas dan siap bergotong
                royong.
              </p>

              <div className="mt-4 border border-red-800 bg-[#B91C1C] p-3.5 text-xs text-white shadow-xs">
                <p className="font-bold uppercase tracking-wider text-white">
                  Ketentuan Keanggotaan & Kaderisasi:
                </p>
                <p className="mt-1 leading-relaxed text-white/95">
                  Pendaftaran ini adalah untuk menjadi <strong className="font-extrabold text-white">Anggota Taruna Merah Putih</strong>.
                  Sesuai ketentuan organisasi, untuk dapat menjadi <strong className="font-extrabold text-white">Kader</strong>,
                  setiap anggota wajib menjadi kader <strong className="font-extrabold text-white">PDI Perjuangan</strong>.
                </p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="mt-6 border border-emerald-300 bg-emerald-50 p-6 text-neutral-800">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <CheckCircle2 className="size-5" />
                  <span>Pendaftaran Anggota Berhasil Terkirim!</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                  Terima kasih, <strong>{formData.name}</strong>. Berkas
                  pendaftaran awal Anda untuk wilayah <strong>{formData.region}</strong>{" "}
                  telah terekam di pangkalan data DPD TMP Kepri. Tim sekretariat DPD
                  akan menghubungi nomor WhatsApp Anda ({formData.phone}) untuk
                  verifikasi berkas dan penerbitan KTA.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 rounded-xs bg-[#B91C1C] px-4 py-2 text-xs font-bold text-white uppercase hover:bg-[#991B1B]"
                >
                  Daftarkan Anggota Baru Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Nama Lengkap (Sesuai KTP)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Muhammad Ilham Pratama"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Nomor Induk Kependudukan (NIK)
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      placeholder="16 digit nomor KTP"
                      value={formData.nik}
                      onChange={(e) =>
                        setFormData({ ...formData, nik: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Nomor WhatsApp Aktif
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Kabupaten / Kota Domisili di Kepulauan Riau
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) =>
                        setFormData({ ...formData, region: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    >
                      <option value="Kota Batam">Kota Batam</option>
                      <option value="Kota Tanjungpinang">
                        Kota Tanjungpinang
                      </option>
                      <option value="Kabupaten Bintan">Kabupaten Bintan</option>
                      <option value="Kabupaten Karimun">
                        Kabupaten Karimun
                      </option>
                      <option value="Kabupaten Lingga">Kabupaten Lingga</option>
                      <option value="Kabupaten Natuna">Kabupaten Natuna</option>
                      <option value="Kabupaten Kepulauan Anambas">
                        Kabupaten Kepulauan Anambas
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111827]">
                    Minat Bidang Gerakan
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                  >
                    <option value="Kaderisasi & Ideologi">
                      Kaderisasi, Ideologi & Pendidikan Politik
                    </option>
                    <option value="Kemaritiman & Kelautan">
                      Kemaritiman, Nelayan Tradisional & Konservasi Bahari
                    </option>
                    <option value="Ekonomi Kreatif & Ketenagakerjaan">
                      Ekonomi Kreatif, UMKM Pemuda & Vokasi
                    </option>
                    <option value="Advokasi Hukum & Kemanusiaan">
                      Advokasi Hukum, HAM & Posko Sosial Peduli
                    </option>
                    <option value="Media, Informasi & Kebudayaan">
                      Media Informasi, Publikasi & Seni Budaya Melayu
                    </option>
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xs bg-[#B91C1C] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#991B1B] transition-colors"
                  >
                    <Send className="size-4" />
                    <span>Kirim Formulir Pendaftaran Anggota</span>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-neutral-500">
                    Data keanggotaan dilindungi dan hanya digunakan untuk tertib
                    administrasi organisasi DPD TMP Kepri.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
