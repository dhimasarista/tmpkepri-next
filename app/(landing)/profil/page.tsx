import Link from "next/link";
import Image from "next/image";
import {
  Award,
  BookOpen,
  CheckCircle,
  Compass,
  FileText,
  Flame,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";

const pengurus = [
  {
    kategori: "Pimpinan Inti",
    jabatan: "Ketua",
    nama: "M. Fajar Pratama, S.H.",
    tugas: "Memimpin pelaksanaan kebijakan strategis organisasi dan memegang komando tertinggi kepemudaan DPD Taruna Merah Putih Provinsi Kepulauan Riau.",
  },
  {
    kategori: "Pimpinan Inti",
    jabatan: "Sekretaris",
    nama: "Aditya Wicaksono, S.I.Kom.",
    tugas: "Mengelola administrasi persuratan resmi, pangkalan data keanggotaan, dan koordinasi operasional harian DPD.",
  },
  {
    kategori: "Pimpinan Inti",
    jabatan: "Bendahara",
    nama: "Rina Anggraini, S.E.",
    tugas: "Mengatur manajemen keuangan organisasi, transparansi anggaran program, dan tata kelola dana gotong royong.",
  },
  {
    kategori: "Bidang Organisasi",
    jabatan: "Wakil Ketua Bid. Organisasi, Keanggotaan, & Pemberdayaan Perempuan",
    nama: "Siti Nurhaliza, S.Sos.",
    tugas: "Konsolidasi keanggotaan pemuda se-Kepri, penataan tertib organisasi, dan advokasi kepemimpinan perempuan muda.",
  },
  {
    kategori: "Bidang Kaderisasi",
    jabatan: "Wakil Ketua Bid. Pendidikan & Kaderisasi",
    nama: "Hendro Saputro, S.Pd.",
    tugas: "Menyelenggarakan pendidikan politik, pelatihan kepemimpinan, dan kaderisasi anggota menuju kader PDI Perjuangan.",
  },
  {
    kategori: "Bidang Ekonomi",
    jabatan: "Wakil Ketua Bid. Ekraf, UMKM, & Pariwisata",
    nama: "Rizky Kurniawan, B.B.A.",
    tugas: "Mendorong inkubasi usaha rintisan anak muda, pembinaan UMKM pemuda pesisir, dan promosi potensi pariwisata bahari Kepri.",
  },
  {
    kategori: "Bidang Kepemudaan",
    jabatan: "Wakil Ketua Bid. Pemuda, Olahraga, & Kebudayaan",
    nama: "Bayu Segara, S.Or.",
    tugas: "Pengembangan prestasi olahraga generasi muda, pelestarian seni budaya bahari Melayu, dan ruang ekspresi kreatif pemuda.",
  },
  {
    kategori: "Bidang Kemaritiman",
    jabatan: "Wakil Ketua Bid. Sosial, Lingkungan, & Kemaritiman",
    nama: "Dedi Iskandar, S.Kel.",
    tugas: "Advokasi hak nelayan tradisional, tanggap darurat bencana laut, serta aksi gotong royong konservasi ekosistem mangrove.",
  },
  {
    kategori: "Bidang Komunikasi",
    jabatan: "Wakil Ketua Bid. Media & Komunikasi Digital",
    nama: "Ilham Maulana, S.Kom.",
    tugas: "Mengelola informasi publik, siaran pers resmi, media komunikasi digital, dan kampanye narasi positif kepemudaan.",
  },
  {
    kategori: "Bidang Hukum",
    jabatan: "Wakil Ketua Bid. Hukum & Advokasi",
    nama: "Bambang Triyadi, S.H., M.H.",
    tugas: "Memberikan posko bantuan hukum cuma-cuma bagi rakyat kecil, pengawalan hak asasi, dan kajian kebijakan publik.",
  },
  {
    kategori: "Bidang Riset",
    jabatan: "Wakil Ketua Bid. Penelitian dan Pengembangan",
    nama: "Dr. Faisal Rahman, M.Si.",
    tugas: "Riset strategis isu kemaritiman daerah, analisis data kepemudaan, dan perumusan rekomendasi pembangunan Provinsi Kepri.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* 1. Hero Profil: Solid Red (#B91C1C) with Horizontal Vector Logo Only */}
      <section className="bg-[#B91C1C] py-14 sm:py-20 border-b border-red-800">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="relative mx-auto h-32 w-full max-w-xl sm:h-44 sm:max-w-2xl md:h-52 md:max-w-3xl">
            <Image
              src="/logo-horizontal-white.svg"
              alt="Taruna Merah Putih Kepulauan Riau"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Visi, Misi & Landasan */}
      <section className="bg-white py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                Arah & Pedoman
              </span>
              <h2 className="mt-1 font-display text-2xl font-black text-[#111827]">
                Visi & Misi Organisasi
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-700">
                <div className="border-l-4 border-[#B91C1C] bg-neutral-50 p-4">
                  <p className="font-bold text-[#111827]">Visi:</p>
                  <p className="mt-1">
                    Mewujudkan generasi muda Kepulauan Riau yang berdikari secara
                    ekonomi, berdaulat dalam politik kebangsaan, dan berjiwa
                    gotong royong dalam menjaga kedaulatan maritim Indonesia.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[#111827]">Misi Utama:</p>
                  <ul className="mt-2 space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 shrink-0 text-[#B91C1C] mt-0.5" />
                      <span>
                        Menyelenggarakan pendidikan politik dan kaderisasi pemuda
                        yang disiplin dan berintegritas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 shrink-0 text-[#B91C1C] mt-0.5" />
                      <span>
                        Memperjuangkan hak-hak nelayan tradisional, pekerja muda,
                        dan masyarakat kepulauan terpencil.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 shrink-0 text-[#B91C1C] mt-0.5" />
                      <span>
                        Menjaga persatuan dan toleransi suku bangsa serta agama di
                        wilayah perbatasan Kepri.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 shrink-0 text-[#B91C1C] mt-0.5" />
                      <span>
                        Mendorong konservasi lingkungan pesisir dan ekosistem
                        bahari yang berkelanjutan.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Red Box: Pure White Text on Red ("kalau diatas merah tetap putih") */}
            <div className="bg-[#B91C1C] p-6 text-white shadow-xs sm:p-8">
              <div className="flex items-center gap-3.5 border-b border-white/20 pb-4">
                <div className="relative h-11 w-7 shrink-0">
                  <Image
                    src="/logo-only-white.svg"
                    alt="Badge Taruna Merah Putih"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white uppercase">
                    Tri Prasetya
                  </h3>
                  <p className="text-[11px] text-white/85">
                    Taruna Merah Putih
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3.5 text-xs">
                <div className="border border-white/20 bg-white/10 p-3">
                  <p className="font-bold text-white uppercase">1. Kebangsaan</p>
                  <p className="mt-1 text-[11px] text-white/85">
                    Tunduk dan patuh pada Pancasila, UUD 1945, dan menjaga
                    keutuhan Negara Kesatuan Republik Indonesia.
                  </p>
                </div>
                <div className="border border-white/20 bg-white/10 p-3">
                  <p className="font-bold text-white uppercase">2. Kerakyatan</p>
                  <p className="mt-1 text-[11px] text-white/85">
                    Selalu berdiri bersama rakyat, mendengar penderitaan rakyat,
                    dan berjuang demi keadilan wong cilik.
                  </p>
                </div>
                <div className="border border-white/20 bg-white/10 p-3">
                  <p className="font-bold text-white uppercase">3. Keadilan Sosial</p>
                  <p className="mt-1 text-[11px] text-white/85">
                    Memastikan kesetaraan akses kehidupan yang layak,
                    pendidikan, dan pekerjaan bagi seluruh pemuda bangsa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Struktur Fungsional Dewan Pengurus Daerah */}
      <section className="bg-neutral-50 py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="border-b border-neutral-200 pb-3">
            <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
              Tata Kelola Organisasi
            </span>
            <h2 className="font-display text-2xl font-black text-[#111827]">
              Struktur Fungsional DPD TMP Kepulauan Riau
            </h2>
            <p className="mt-1 text-xs text-neutral-600">
              Uraian tugas pokok dan fungsi jajaran pengurus tingkat provinsi.
            </p>
          </div>

          {/* Pimpinan Inti (KSB) */}
          <div className="mt-8">
            <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
              Pimpinan Inti Organisasi
            </span>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {pengurus.slice(0, 3).map((p, idx) => (
                <div
                  key={idx}
                  className="border-t-4 border-[#B91C1C] border-x border-b border-neutral-200 bg-white p-5 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-[#B91C1C]">
                      {p.nama
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#B91C1C]">
                        {p.jabatan}
                      </span>
                      <h3 className="font-display text-sm font-bold text-[#111827] leading-snug">
                        {p.nama}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-neutral-100 pt-3 text-xs leading-relaxed text-neutral-600">
                    {p.tugas}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Jajaran Wakil Ketua Bidang */}
          <div className="mt-10">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Jajaran Wakil Ketua Bidang
            </span>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pengurus.slice(3).map((p, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between border border-neutral-200 bg-white p-4.5 shadow-2xs hover:border-[#B91C1C] transition-colors"
                >
                  <div>
                    <span className="inline-block rounded-xs bg-neutral-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-neutral-700">
                      {p.kategori}
                    </span>
                    <h3 className="mt-2 font-display text-xs font-bold text-[#B91C1C] leading-snug">
                      {p.jabatan}
                    </h3>
                    <p className="mt-1 font-display text-sm font-bold text-[#111827]">
                      {p.nama}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      {p.tugas}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border border-neutral-200 bg-white p-6 text-center">
            <h3 className="font-display text-base font-bold text-[#111827]">
              Sekretariat DPD TMP Provinsi Kepulauan Riau
            </h3>
            <p className="mt-1 text-xs text-neutral-600">
              Komp. Ruko Batam Centre Square Blok C No. 5-7, Batam Kota, Kota
              Batam &bull; Kontak: (0778) 461-234 &bull; Email:
              sekretariat@tmpkepri.id
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <Link
                href="/daftar"
                className="rounded-xs bg-[#B91C1C] px-5 py-2 text-xs font-bold uppercase text-white hover:bg-[#991B1B]"
              >
                Pendaftaran Anggota
              </Link>
              <Link
                href="/kontak"
                className="border border-neutral-300 px-5 py-2 text-xs font-bold uppercase text-[#111827] hover:border-[#B91C1C]"
              >
                Hubungi Sekretariat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
