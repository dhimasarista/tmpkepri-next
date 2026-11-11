import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";

const newsList = [
  {
    id: 1,
    title:
      "DPD Taruna Merah Putih Kepri Mantapkan Barisan Gerakan Pemuda Maritim Jelang Rapat Kerja Daerah 2026 di Batam",
    category: "Konsolidasi Organisasi",
    date: "Rabu, 11 November 2026",
    author: "Biro Humas & Media Center DPD",
    content:
      "Rapat koordinasi tingkat daerah resmi diselenggarakan di Batam dengan mengumpulkan jajaran fungsionaris DPD Taruna Merah Putih Provinsi Kepulauan Riau. Agenda utama berfokus pada penguatan keanggotaan, persiapan Rapat Kerja Daerah (Rakorda), serta penyusunan rekomendasi advokasi nelayan tradisional dan pemuda bahari kepulauan.",
  },
  {
    id: 2,
    title:
      "DPD TMP Kepri Gelar Diskusi Kebangsaan Pemuda: Memperkokoh Toleransi & Karakter Bahari di Ibukota Tanjungpinang",
    category: "Pendidikan Politik",
    date: "Kamis, 05 November 2026",
    author: "Biro Ideologi & Politik DPD Kepri",
    content:
      "Bertempat di Gedung Gonggong Tanjungpinang, Taruna Merah Putih menginisiasi dialog kepemudaan bersama perwakilan mahasiswa se-Kepri. Diskusi menyoroti pentingnya regenerasi kepemimpinan yang berintegritas, pemahaman sejarah Bung Karno, serta penguatan benteng moral generasi muda menghadapi penetrasi budaya asing di wilayah perbatasan.",
  },
  {
    id: 3,
    title:
      "Aksi Gotong Royong Pesisir: Satgas Lingkungan Hidup DPD TMP Kepri Tanam 2.500 Bibit Mangrove",
    category: "Lingkungan Hidup",
    date: "Rabu, 28 Oktober 2026",
    author: "Satgas Lingkungan Hidup DPD Kepri",
    content:
      "Memperingati momentum Hari Sumpah Pemuda, puluhan relawan dan anggota Taruna Merah Putih bersama warga nelayan pesisir menanam 2.500 bibit mangrove. Kegiatan ini merupakan wujud nyata kepedulian terhadap kelestarian kawasan pesisir Kepulauan Riau yang rentan mengalami abrasi pantai.",
  },
  {
    id: 4,
    title:
      "Sosialisasi Keselamatan Berlayar dan Pendampingan Legalitas Nelayan di Natuna & Kepulauan Anambas",
    category: "Advokasi Kemaritiman",
    date: "Senin, 20 Oktober 2026",
    author: "Biro Perbatasan DPD TMP Kepri",
    content:
      "Tim advokasi DPD TMP Kepri menggelar kunjungan kerja di Ranai (Natuna) dan Tarempa (Anambas) untuk mendengarkan langsung aspirasi nelayan tradisional perbatasan terkait kendala pengurusan dokumen kapal dan ketersediaan BBM subsidi laut. TMP berkomitmen membawa persoalan ini ke forum legislatif daerah.",
  },
];

export default function BeritaPage() {
  return (
    <PageShell>
      <section className="bg-neutral-50 py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
            Kabar Kegiatan & Siaran Pers
          </span>
          <h1 className="mt-2 font-display text-3xl font-black text-[#111827] sm:text-4xl">
            Warta & Publikasi DPD TMP Kepri
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 leading-relaxed">
            Arsip berita resmi, rilis pers organisasi, dan dokumentasi aksi
            gotong royong kader se-Provinsi Kepulauan Riau.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-8">
            {newsList.map((item) => (
              <article
                key={item.id}
                className="border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                  <span className="bg-[#B91C1C] px-2 py-0.5 font-bold uppercase text-white">
                    {item.category}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    <span>{item.date}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <User className="size-3.5" />
                    <span>{item.author}</span>
                  </span>
                </div>

                <h2 className="mt-4 font-display text-xl font-bold text-[#111827] sm:text-2xl leading-snug">
                  {item.title}
                </h2>

                <p className="mt-4 text-xs leading-relaxed text-neutral-700 sm:text-sm">
                  {item.content}
                </p>

                <div className="mt-6 border-t border-neutral-200 pt-3 text-xs text-neutral-500 flex justify-between items-center">
                  <span>Humas DPD Taruna Merah Putih Kepri</span>
                  <span className="text-[#B91C1C] font-semibold">
                    Rilis Resmi
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
