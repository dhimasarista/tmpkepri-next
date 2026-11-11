"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  FileCheck,
  Flame,
  IdCard,
  MapPin,
  Send,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";

export default function DaftarPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "Muhammad Rizky Pratama",
    nik: "2171012304980002",
    gender: "Laki-laki",
    birthPlace: "Batam",
    birthDate: "1998-04-23",
    phone: "0812-7000-8899",
    email: "rizky.pratama@gmail.com",
    address: "Batu Aji, Kota Batam",
    region: "Kota Batam",
    interest: "Kemaritiman & Kelautan",
  });

  const memberId = `TMP-KEPRI-${formData.region.substring(0, 3).toUpperCase()}-2026-${Math.floor(
    1000 + Math.random() * 9000,
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <section className="bg-neutral-50 py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
            Biro Keanggotaan & Organisasi
          </span>
          <h1 className="mt-2 font-display text-3xl font-black text-[#111827] sm:text-4xl">
            Pendaftaran Anggota Taruna Merah Putih Kepri
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 leading-relaxed">
            Formulir resmi registrasi keanggotaan DPD Taruna Merah Putih
            Provinsi Kepulauan Riau untuk penerbitan Kartu Tanda Anggota (KTA).
          </p>

          <div className="mx-auto mt-6 max-w-2xl border border-amber-300 bg-amber-50/90 p-4 text-left text-xs text-amber-950 sm:text-center">
            <p className="font-bold text-amber-900">
              Ketentuan Keanggotaan & Kaderisasi:
            </p>
            <p className="mt-1 leading-relaxed text-amber-900/90">
              Pendaftaran ini adalah untuk menjadi <strong>Anggota Taruna Merah Putih</strong>.
              Sesuai ketentuan organisasi, untuk dapat menjadi <strong>Kader</strong>,
              setiap anggota wajib menjadi kader <strong>PDI Perjuangan</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            {/* Form */}
            <div className="border border-neutral-200 bg-white p-6 sm:p-8">
              <div className="border-b border-neutral-200 pb-3">
                <h2 className="font-display text-base font-bold text-[#111827]">
                  Biodata Lengkap Calon Anggota
                </h2>
                <p className="text-xs text-neutral-500">
                  Data wajib sesuai dokumen KTP yang sah.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#111827]">
                    Nama Lengkap (Sesuai KTP)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      NIK (Nomor Induk Kependudukan)
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      value={formData.nik}
                      onChange={(e) =>
                        setFormData({ ...formData, nik: e.target.value })
                      }
                      className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Jenis Kelamin
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
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
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Wilayah Domisili (Kepulauan Riau)
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) =>
                        setFormData({ ...formData, region: e.target.value })
                      }
                      className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
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
                      <option value="Kab. Kepulauan Anambas">
                        Kabupaten Kepulauan Anambas
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Peminatan Gerakan
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    >
                      <option value="Kemaritiman & Kelautan">
                        Kemaritiman & Nelayan Pesisir
                      </option>
                      <option value="Kaderisasi & Ideologi">
                        Kaderisasi & Ideologi Politik
                      </option>
                      <option value="Ekonomi Kreatif & UMKM">
                        Ekonomi Kreatif & Ketenagakerjaan
                      </option>
                      <option value="Advokasi Hukum Rakyat">
                        Advokasi Hukum & Posko Bantuan
                      </option>
                      <option value="Media & Publikasi">
                        Media Informasi & Kebudayaan
                      </option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xs bg-[#B91C1C] py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#991B1B] transition-colors"
                  >
                    <Send className="size-3.5" />
                    <span>Kirim Formulir Pendaftaran Anggota</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Official KTA Card Presentation: Solid Red with Pure White Text ("kalau diatas merah tetap putih") */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                Kartu Tanda Anggota (KTA) Digital
              </span>

              {/* KTA Formal Card */}
              <div className="border border-neutral-800 bg-[#B91C1C] p-6 text-white shadow-md">
                <div className="border-b border-white/20 pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-6 shrink-0">
                      <Image
                        src="/logo-only-white.svg"
                        alt="Badge Taruna Merah Putih"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase text-white leading-tight">
                        TARUNA MERAH PUTIH
                      </p>
                      <p className="text-[9px] font-bold text-white/80 uppercase">
                        DPD KEPULAUAN RIAU
                      </p>
                    </div>
                  </div>
                  <span className="border border-white/30 bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                    KTA ANGGOTA
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] text-white/70 uppercase">
                      Nama Lengkap:
                    </span>
                    <p className="font-display text-sm font-bold text-white">
                      {formData.name || "NAMA LENGKAP ANGGOTA"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-white/70 uppercase">
                        Nomor Anggota:
                      </span>
                      <p className="font-mono text-[11px] font-bold text-white">
                        {memberId}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 uppercase">
                        Domisili:
                      </span>
                      <p className="font-semibold text-white">
                        {formData.region}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-white/70 uppercase">
                      Bidang Gerakan:
                    </span>
                    <p className="text-[11px] text-white/90">
                      {formData.interest}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-white/20 pt-2.5 flex items-center justify-between text-[9px] text-white/80">
                  <span>Masa Berlaku: 2024 - 2029</span>
                  <span className="font-bold text-white">
                    KADER WAJIB KADER PDI PERJUANGAN
                  </span>
                </div>
              </div>

              {submitted && (
                <div className="border border-emerald-300 bg-emerald-50 p-4 text-xs text-neutral-800">
                  <p className="font-bold text-emerald-800">
                    Pendaftaran Anggota Berhasil Dicatat!
                  </p>
                  <p className="mt-1 text-neutral-600">
                    Nomor registrasi keanggotaan Anda adalah: <strong>{memberId}</strong>.
                    Simpan nomor ini untuk verifikasi kartu fisik saat mengikuti
                    Orientasi Anggota Baru DPD Taruna Merah Putih Provinsi Kepulauan Riau.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
