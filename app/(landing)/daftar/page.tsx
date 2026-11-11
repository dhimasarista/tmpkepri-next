"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";

export default function DaftarPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    gender: "Laki-laki",
    phone: "",
    email: "",
    region: "Kota Batam",
    interest: "Kemaritiman & Kelautan",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <PageShell>
      {/* 1. Header Section */}
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
            Provinsi Kepulauan Riau.
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

      {/* 2. Form Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="border border-neutral-200 bg-white p-6 sm:p-10 shadow-xs">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="font-display text-xl font-bold text-[#111827]">
                Biodata Calon Anggota
              </h2>
              <p className="mt-1 text-xs text-neutral-500">
                Silakan isi data diri Anda dengan benar sesuai dokumen KTP yang sah.
              </p>
            </div>

            {submitted ? (
              <div className="mt-6 border border-emerald-300 bg-emerald-50 p-6 text-neutral-800">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <CheckCircle2 className="size-5" />
                  <span>Pendaftaran Anggota Berhasil Dikirim!</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                  Terima kasih, <strong>{formData.name}</strong>. Berkas pendaftaran
                  keanggotaan Anda untuk wilayah <strong>{formData.region}</strong> telah
                  berhasil terekam di sistem pangkalan data DPD Taruna Merah Putih
                  Provinsi Kepulauan Riau. Tim sekretariat akan menghubungi nomor
                  WhatsApp ({formData.phone}) untuk verifikasi lebih lanjut.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      nik: "",
                      gender: "Laki-laki",
                      phone: "",
                      email: "",
                      region: "Kota Batam",
                      interest: "Kemaritiman & Kelautan",
                    });
                  }}
                  className="mt-4 rounded-xs bg-[#B91C1C] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#991B1B] transition-colors"
                >
                  Daftarkan Anggota Baru Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#111827]">
                    Nama Lengkap (Sesuai KTP)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Muhammad Rizky Pratama"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
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
                      placeholder="16 digit nomor KTP"
                      value={formData.nik}
                      onChange={(e) =>
                        setFormData({ ...formData, nik: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
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
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
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
                      placeholder="Contoh: 0812-7000-8899"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
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
                  <div>
                    <label className="block text-xs font-bold text-[#111827]">
                      Peminatan Bidang Gerakan
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="mt-1.5 w-full border border-neutral-300 bg-white px-3.5 py-2 text-xs text-[#111827] focus:border-[#B91C1C] focus:outline-none"
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
                    administrasi DPD Taruna Merah Putih Kepri.
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
