import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  Compass,
  FileText,
  Flame,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Ship,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";

const strategicPrograms = [
  {
    icon: GraduationCap,
    category: "Bidang Ideologi & Kaderisasi",
    title: "Pendidikan Politik & Kaderisasi Taruna Merah Putih",
    description:
      "Program penggemblengan mentalitas, integritas, dan pemahaman Pancasila bagi anggota yang berkomitmen menjadi kader PDI Perjuangan.",
    points: [
      "Pendidikan Politik & Orientasi Anggota Baru DPD TMP Kepri",
      "Kaderisasi Berjenjang Bersama PDI Perjuangan",
      "Workshop Tata Kelola Organisasi & Pemikiran Bung Karno",
    ],
  },
  {
    icon: Ship,
    category: "Bidang Kemaritiman & Lingkungan Hidup",
    title: "Advokasi Ruang Laut Nelayan & Konservasi Pesisir",
    description:
      "Aksi konkrit perlindungan zona tangkap nelayan tradisional Kepri dan penanaman mangrove di pulau-pulau rawan abrasi.",
    points: [
      "Advokasi Akses Solar Bersubsidi untuk Nelayan Kecil",
      "Penanaman 20.000 Bibit Mangrove Pesisir Barelang, Karimun & Lingga",
      "Pos Pengaduan & Perlindungan Hukum Nelayan Perbatasan",
    ],
  },
  {
    icon: Users,
    category: "Bidang Ekonomi Kreatif & Ketenagakerjaan",
    title: "Pemberdayaan Wirausaha Muda & Vokasi Kepelabuhanan",
    description:
      "Pendampingan usaha mikro berbasis produk maritim dan fasilitasi sertifikasi keahlian industri pemuda Batam-Bintan.",
    points: [
      "Pelatihan Legalitas Usaha & Sertifikasi Halal UMKM Pemuda",
      "Bursa Pelatihan Kejuruan Teknik Logistik & Galangan Kapal",
      "Kemitraan Modal Bergulir Pemuda Desa Pesisir",
    ],
  },
  {
    icon: HeartHandshake,
    category: "Bidang Bantuan Hukum & Aksi Kemanusiaan",
    title: "Posko Bantuan Hukum Rakyat & TMP Peduli Sosial",
    description:
      "Pelayanan konsultasi hukum gratis serta tanggap darurat musibah laut dan angin puting beliung di pulau-pulau terluar.",
    points: [
      "Penyuluhan Hukum Hak-Hak Pekerja Muda & Nelayan",
      "Bantuan Logistik Darurat Warga Terdampak Cuaca Ekstrem",
      "Khitanan Massal & Layanan Kesehatan Gotong Royong",
    ],
  },
];

export default function ProgramPage() {
  return (
    <PageShell>
      <section className="bg-neutral-50 py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
            Rencana Strategis Organisasi
          </span>
          <h1 className="mt-2 font-display text-3xl font-black text-[#111827] sm:text-4xl">
            Program DPD Taruna Merah Putih Kepri
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 leading-relaxed">
            Daftar program nyata yang diamanatkan dalam Rapat Kerja Daerah
            guna menjawab kebutuhan riil generasi muda dan masyarakat maritim
            Kepulauan Riau.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {strategicPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white p-6 sm:p-8"
                >
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#B91C1C]" />
                    <span className="text-xs font-bold text-[#B91C1C] uppercase">
                      {prog.category}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-lg font-bold text-[#111827]">
                    {prog.title}
                  </h2>

                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    {prog.description}
                  </p>

                  <div className="mt-5 border-t border-neutral-200 pt-4">
                    <p className="text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                      Uraian Aksi:
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-600">
                      {prog.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-[#B91C1C] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 border border-neutral-200 bg-neutral-50 p-6 text-center">
            <h3 className="font-display text-base font-bold text-[#111827]">
              Siap Terlibat Dalam Pelaksanaan Program Kerja Daerah?
            </h3>
            <p className="mt-1 text-xs text-neutral-600">
              Setiap kader memiliki ruang untuk berpartisipasi aktif dalam
              bidang minat masing-masing.
            </p>
            <div className="mt-4">
              <Link
                href="/daftar"
                className="inline-block rounded-xs bg-[#B91C1C] px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-[#991B1B]"
              >
                Pendaftaran Anggota Baru
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
