"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Heart,
  MessageCircle,
  Share2,
  Play,
  Clock,
  ExternalLink,
  Flame,
  Search,
} from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";
import { InstagramIcon, YouTubeIcon } from "@/components/landing/social-icons";

// 1. Featured Slider Stories for Hero
const heroSlides = [
  {
    id: 1,
    tag: "Konsolidasi Organisasi",
    title:
      "DPD Taruna Merah Putih Kepri Mantapkan Barisan Gerakan Pemuda Maritim Jelang Rakorda 2026 di Batam",
    date: "Rabu, 11 November 2026",
    author: "Biro Humas & Media Center DPD",
    summary:
      "Rapat koordinasi tingkat daerah resmi diselenggarakan di Batam dengan mengumpulkan seluruh unsur fungsionaris DPD Taruna Merah Putih Provinsi Kepulauan Riau guna merumuskan arah kebijakan pengorganisasian pemuda dan advokasi nelayan pesisir.",
    image: "/assets/hero-bg.jpg",
  },
  {
    id: 2,
    tag: "Lingkungan Hidup",
    title:
      "Aksi Gotong Royong Pesisir: Satgas Lingkungan Hidup DPD TMP Kepri Tanam 2.500 Bibit Mangrove",
    date: "Rabu, 28 Oktober 2026",
    author: "Satgas Lingkungan Hidup DPD Kepri",
    summary:
      "Memperingati Hari Sumpah Pemuda, puluhan relawan dan anggota Taruna Merah Putih bersama warga nelayan pesisir menanam 2.500 bibit mangrove untuk membentengi pesisir pulau dari ancaman abrasi laut.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Pendidikan Politik",
    title:
      "Dialog Kebangsaan Pemuda: Memperkokoh Toleransi & Karakter Bahari di Ibukota Tanjungpinang",
    date: "Kamis, 05 November 2026",
    author: "Biro Ideologi & Kaderisasi DPD",
    summary:
      "Bertempat di Gedung Gonggong Tanjungpinang, Taruna Merah Putih menggelar dialog kepemudaan bersama perwakilan mahasiswa se-Kepri untuk meneladani api perjuangan Bung Karno di gerbang maritim Indonesia.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    tag: "Advokasi Kemaritiman",
    title:
      "Sosialisasi Keselamatan Berlayar dan Pendampingan Legalitas Nelayan di Natuna & Kepulauan Anambas",
    date: "Senin, 20 Oktober 2026",
    author: "Biro Advokasi & Wilayah Pesisir",
    summary:
      "Tim advokasi DPD TMP Kepri menggelar kunjungan kerja di pulau-pulau perbatasan untuk mendengarkan langsung aspirasi nelayan tradisional terkait pengurusan dokumen kapal dan ketersediaan BBM subsidi laut.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
  },
];

// 2. Berita List (Tab 1)
const newsArticles = [
  {
    id: 1,
    title:
      "DPD Taruna Merah Putih Kepri Mantapkan Barisan Gerakan Pemuda Maritim Jelang Rapat Kerja Daerah 2026 di Batam",
    category: "Konsolidasi Organisasi",
    date: "11 November 2026",
    author: "Biro Humas & Media Center DPD",
    readTime: "3 mnt baca",
    content:
      "Rapat koordinasi tingkat daerah resmi diselenggarakan di Batam dengan mengumpulkan jajaran fungsionaris DPD Taruna Merah Putih Provinsi Kepulauan Riau. Agenda utama berfokus pada penguatan keanggotaan, persiapan Rapat Kerja Daerah (Rakorda), serta penyusunan rekomendasi advokasi nelayan tradisional dan pemuda bahari kepulauan.",
    image: "/assets/hero-bg.jpg",
  },
  {
    id: 2,
    title:
      "DPD TMP Kepri Gelar Diskusi Kebangsaan Pemuda: Memperkokoh Toleransi & Karakter Bahari di Ibukota Tanjungpinang",
    category: "Pendidikan Politik",
    date: "05 November 2026",
    author: "Biro Ideologi & Politik DPD Kepri",
    readTime: "4 mnt baca",
    content:
      "Bertempat di Gedung Gonggong Tanjungpinang, Taruna Merah Putih menginisiasi dialog kepemudaan bersama perwakilan mahasiswa se-Kepri. Diskusi menyoroti pentingnya regenerasi kepemimpinan yang berintegritas, pemahaman sejarah Bung Karno, serta penguatan benteng moral generasi muda menghadapi penetrasi budaya asing di wilayah perbatasan.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title:
      "Aksi Gotong Royong Pesisir: Satgas Lingkungan Hidup DPD TMP Kepri Tanam 2.500 Bibit Mangrove",
    category: "Lingkungan Hidup",
    date: "28 Oktober 2026",
    author: "Satgas Lingkungan Hidup DPD Kepri",
    readTime: "2 mnt baca",
    content:
      "Memperingati momentum Hari Sumpah Pemuda, puluhan relawan dan anggota Taruna Merah Putih bersama warga nelayan pesisir menanam 2.500 bibit mangrove. Kegiatan ini merupakan wujud nyata kepedulian terhadap kelestarian kawasan pesisir Kepulauan Riau yang rentan mengalami abrasi pantai.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title:
      "Sosialisasi Keselamatan Berlayar dan Pendampingan Legalitas Nelayan di Natuna & Kepulauan Anambas",
    category: "Advokasi Kemaritiman",
    date: "20 Oktober 2026",
    author: "Biro Perbatasan DPD TMP Kepri",
    readTime: "3 mnt baca",
    content:
      "Tim advokasi DPD TMP Kepri menggelar kunjungan kerja di Ranai (Natuna) dan Tarempa (Anambas) untuk mendengarkan langsung aspirasi nelayan tradisional perbatasan terkait kendala pengurusan dokumen kapal dan ketersediaan BBM subsidi laut. TMP berkomitmen membawa persoalan ini ke forum legislatif daerah.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title:
      "Pelatihan Vokasi Pemuda Pesisir: Mengoptimalkan Hilirisasi Produk Olahan Ikan Nelayan Tradisional",
    category: "Ekonomi Kreatif",
    date: "14 Oktober 2026",
    author: "Bidang Ekraf & UMKM DPD TMP",
    readTime: "3 mnt baca",
    content:
      "Guna meningkatkan nilai tambah hasil tangkapan laut keluarga nelayan, DPD TMP Kepri menggandeng wirausahawan muda memberikan pelatihan pengemasan higienis dan pemasaran digital produk krupuk ikan dan abon ikan di pesisir Barelang.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title:
      "Pos Bantuan Hukum TMP Kepri Terima Aduan Sengketa Ruang Tangkap Nelayan Tradisional",
    category: "Hukum & Advokasi",
    date: "02 Oktober 2026",
    author: "Bidang Hukum & Advokasi DPD",
    readTime: "4 mnt baca",
    content:
      "Posko bantuan hukum cuma-cuma DPD Taruna Merah Putih Kepulauan Riau menindaklanjuti laporan kelompok nelayan pulau terpencil terkait dugaan pelanggaran zonasi kapal pukat asing di perairan Natuna Utara.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
  },
];

// 3. Instagram Feed Posts (Tab 2)
const instagramPosts = [
  {
    id: "ig-1",
    image: "/assets/hero-bg.jpg",
    caption:
      "Merapatkan barisan pemuda bahari! Konsolidasi DPD Taruna Merah Putih Kepulauan Riau jelang Rapat Kerja Daerah 2026. Solid bergerak untuk rakyat! 🔴⚪ #TarunaMerahPutih #TMPKepri #PemudaMaritim #PDIPerjuangan",
    likes: "1.428",
    comments: "86",
    timeAgo: "2 hari lalu",
  },
  {
    id: "ig-2",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    caption:
      "Benteng hijau pesisir Kepri! 2.500 bibit mangrove berhasil ditanam bersama masyarakat nelayan. Merawat bumi, menjaga masa depan bahari kita. 🌊🌱 #SumpahPemuda #AksiNyata #TMPPeduliPesisir",
    likes: "2.105",
    comments: "142",
    timeAgo: "1 minggu lalu",
  },
  {
    id: "ig-3",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    caption:
      "Meneladani api perjuangan Bung Karno: Beri aku 10 pemuda, niscaya akan kuguncangkan dunia! Diskusi kebangsaan pemuda maritim di Tanjungpinang. ✊📖 #BungKarno #Trisakti #IdeologiPancasila",
    likes: "974",
    comments: "49",
    timeAgo: "2 minggu lalu",
  },
  {
    id: "ig-4",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    caption:
      "Menyapa saudara-saudara nelayan di pulau terdepan Natuna & Anambas. Memperjuangkan hak solar subsidi dan jaminan keselamatan berlayar. 🛥️🇮🇩 #NelayanBerdaulat #TMPPerbatasan",
    likes: "1.850",
    comments: "98",
    timeAgo: "3 minggu lalu",
  },
  {
    id: "ig-5",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    caption:
      "Generasi muda mandiri secara ekonomi! Pelatihan pengemasan dan digital marketing produk olahan laut karya anak-anak muda pesisir. 📦💡 #EkrafKepri #UMKMPemuda #Berdikari",
    likes: "820",
    comments: "37",
    timeAgo: "1 bulan lalu",
  },
  {
    id: "ig-6",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    caption:
      "Posko Bantuan Hukum DPD TMP Kepri senantiasa terbuka membela masyarakat kecil yang membutuhkan perlindungan hukum. Keadilan untuk semua! ⚖️🤝 #PoskoHukumRakyat #TMPUntukRakyat",
    likes: "1.120",
    comments: "64",
    timeAgo: "1 bulan lalu",
  },
];

// 4. YouTube Video Gallery (Tab 3)
const youtubeVideos = [
  {
    id: "yt-1",
    title:
      "DOKUMENTER: Menjaga Kedaulatan Laut Terdepan Indonesia Bersama Pemuda Bahari Kepulauan Riau",
    duration: "14:28",
    views: "18,4 rb kali ditonton",
    timeAgo: "1 minggu lalu",
    thumbnail: "/assets/hero-bg.jpg",
    description:
      "Sorotan mendalam mengenai dinamika kehidupan nelayan pulau terluar Kepri dan kontribusi nyata Taruna Merah Putih dalam advokasi kebijakan laut kerakyatan.",
  },
  {
    id: "yt-2",
    title:
      "PIDATO KEBANGSAAN: Membumikan Ajaran Trisakti Bung Karno di Wilayah Maritim Kepri",
    duration: "21:10",
    views: "25,1 rb kali ditonton",
    timeAgo: "2 minggu lalu",
    thumbnail:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    description:
      "Refleksi ideologis kepemimpinan nasionalis dan penggemblengan karakter kader muda dalam menyongsong tantangan geopolitik kawasan perbatasan.",
  },
  {
    id: "yt-3",
    title:
      "AKSI NYATA: Gerakan Tanam 2.500 Mangrove & Bersih Pesisir DPD TMP Kepri",
    duration: "08:45",
    views: "9,6 rb kali ditonton",
    timeAgo: "3 minggu lalu",
    thumbnail:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    description:
      "Liputan dokumentasi lapangan satgas lingkungan hidup bersama ratusan pemuda dan nelayan pesisir merawat ekosistem bakau di Kepulauan Riau.",
  },
  {
    id: "yt-4",
    title:
      "VOICE OF PERBATASAN: Suara Nelayan Natuna & Anambas Meminta Perlindungan Ruang Tangkap",
    duration: "11:32",
    views: "34,8 rb kali ditonton",
    timeAgo: "1 bulan lalu",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    description:
      "Investigasi langsung tim hukum dan advokasi DPD TMP Kepri menyerap keluhan nelayan kecil menghadapi kapal penangkap ikan ilegal di perairan Natuna.",
  },
];

export default function PublikasiPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<"berita" | "instagram" | "youtube">(
    "berita",
  );
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const slide = heroSlides[currentSlide];

  return (
    <PageShell>
      {/* 1. Hero Section: Featured Publication Slider */}
      <section
        className="relative overflow-hidden bg-neutral-950 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide Background Image */}
        <div className="relative h-[480px] sm:h-[540px] lg:h-[600px] w-full">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center transition-all duration-700 brightness-90"
          />

          {/* Red Blend Multiply Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#991B1B]/40 mix-blend-multiply"
          />

          {/* Directional Gradient Scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/75 lg:to-black/30"
          />

          {/* Slide Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
              <div className="max-w-3xl">
                {/* Category Badge & Date */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="rounded-xs bg-[#B91C1C] px-3 py-1 font-bold uppercase tracking-wider text-white shadow-xs">
                    {slide.tag}
                  </span>
                  <span className="text-white/70">&bull;</span>
                  <span className="flex items-center gap-1.5 text-white/90">
                    <Calendar className="size-3.5" />
                    <span>{slide.date}</span>
                  </span>
                  <span className="hidden sm:inline text-white/70">&bull;</span>
                  <span className="hidden sm:flex items-center gap-1.5 text-white/90">
                    <User className="size-3.5" />
                    <span>{slide.author}</span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="mt-4 font-display text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {slide.title}
                </h1>

                {/* Excerpt */}
                <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-sm lg:text-base line-clamp-3">
                  {slide.summary}
                </p>

                {/* Slide Action Button */}
                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("berita")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#B91C1C] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#991B1B]"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="size-4" />
                  </button>
                  <span className="text-xs font-mono font-bold tracking-widest text-white/80">
                    0{currentSlide + 1} / 0{heroSlides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Arrow Controls */}
          <div className="absolute bottom-6 right-4 sm:right-8 flex items-center gap-2 z-20">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Slide Sebelumnya"
              className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-xs transition hover:bg-[#B91C1C] hover:border-transparent"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Slide Selanjutnya"
              className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-xs transition hover:bg-[#B91C1C] hover:border-transparent"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Slider Progress Bar / Dots */}
          <div className="absolute bottom-6 left-4 sm:left-8 flex items-center gap-2 z-20">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Buka slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-8 bg-[#B91C1C]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Three Tabs Section: Berita | Instagram | YouTube */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* Section Header & Tab Controls */}
          <div className="border-b border-neutral-200 pb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                  Kanal Informasi Publik
                </span>
                <h2 className="mt-1 font-display text-2xl font-black text-[#111827] sm:text-3xl">
                  Publikasi & Media DPD TMP Kepri
                </h2>
              </div>

              {/* 3 Tabs Switcher */}
              <div
                role="tablist"
                aria-label="Pilihan Kanal Publikasi"
                className="inline-flex rounded-lg border border-neutral-200 bg-neutral-100 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  id="tab-berita"
                  aria-selected={activeTab === "berita"}
                  aria-controls="panel-berita"
                  onClick={() => setActiveTab("berita")}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === "berita"
                      ? "bg-[#B91C1C] text-white shadow-xs"
                      : "text-neutral-700 hover:text-[#B91C1C]"
                  }`}
                >
                  <FileText className="size-3.5" />
                  <span>Berita</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  id="tab-instagram"
                  aria-selected={activeTab === "instagram"}
                  aria-controls="panel-instagram"
                  onClick={() => setActiveTab("instagram")}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === "instagram"
                      ? "bg-[#B91C1C] text-white shadow-xs"
                      : "text-neutral-700 hover:text-[#B91C1C]"
                  }`}
                >
                  <InstagramIcon className="size-3.5" />
                  <span>Instagram</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  id="tab-youtube"
                  aria-selected={activeTab === "youtube"}
                  aria-controls="panel-youtube"
                  onClick={() => setActiveTab("youtube")}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === "youtube"
                      ? "bg-[#B91C1C] text-white shadow-xs"
                      : "text-neutral-700 hover:text-[#B91C1C]"
                  }`}
                >
                  <YouTubeIcon className="size-3.5" />
                  <span>YouTube</span>
                </button>
              </div>
            </div>
          </div>

          {/* TAB 1: BERITA */}
          {activeTab === "berita" && (
            <div
              role="tabpanel"
              id="panel-berita"
              aria-labelledby="tab-berita"
              className="mt-8"
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {newsArticles.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-col justify-between overflow-hidden border border-neutral-200 bg-white shadow-2xs hover:border-[#B91C1C] transition-colors group"
                  >
                    <div>
                      {/* Thumbnail Image */}
                      <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 rounded-xs bg-[#B91C1C] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          {article.category}
                        </span>
                      </div>

                      {/* Article Details */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="size-3" />
                            <span>{article.date}</span>
                          </span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-3" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>

                        <h3 className="mt-2.5 font-display text-base font-bold text-[#111827] leading-snug group-hover:text-[#B91C1C] transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-3">
                          {article.content}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-neutral-100 px-5 py-3 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium text-neutral-500">
                        {article.author}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#B91C1C] group-hover:translate-x-0.5 transition-transform">
                        <span>Baca</span>
                        <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INSTAGRAM */}
          {activeTab === "instagram" && (
            <div
              role="tabpanel"
              id="panel-instagram"
              aria-labelledby="tab-instagram"
              className="mt-8"
            >
              {/* Instagram Profile Bar */}
              <div className="mb-6 flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white p-0.5">
                    <div className="flex size-full items-center justify-center rounded-full bg-white text-[#B91C1C]">
                      <InstagramIcon className="size-5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-sm text-[#111827]">
                        tmpkepri.official
                      </p>
                      <span className="inline-block size-3.5 rounded-full bg-blue-500 text-center text-[9px] font-bold text-white leading-tight">
                        ✓
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500">
                      DPD Taruna Merah Putih Kepulauan Riau &bull; Kanal Resmi
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/tarunamerahputih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#B91C1C] px-4 py-2 text-xs font-bold text-white hover:bg-[#991B1B] transition-colors"
                >
                  <InstagramIcon className="size-3.5" />
                  <span>Ikuti di Instagram</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              {/* Instagram Feed Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {instagramPosts.map((post) => (
                  <div
                    key={post.id}
                    className="overflow-hidden border border-neutral-200 bg-white shadow-2xs hover:shadow-md transition-shadow"
                  >
                    {/* Post Image */}
                    <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={post.image}
                        alt="Instagram Post DPD TMP Kepri"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Post Meta */}
                    <div className="p-4">
                      <div className="flex items-center justify-between text-neutral-700">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs font-semibold text-[#B91C1C]">
                            <Heart className="size-4 fill-[#B91C1C]" />
                            <span>{post.likes}</span>
                          </span>
                          <span className="flex items-center gap-1 text-xs font-semibold text-neutral-600">
                            <MessageCircle className="size-4" />
                            <span>{post.comments}</span>
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-400">
                          {post.timeAgo}
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-neutral-700 line-clamp-3">
                        {post.caption}
                      </p>

                      <a
                        href="https://www.instagram.com/tarunamerahputih"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#B91C1C] hover:underline"
                      >
                        <span>Lihat Postingan Asli</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: YOUTUBE */}
          {activeTab === "youtube" && (
            <div
              role="tabpanel"
              id="panel-youtube"
              aria-labelledby="tab-youtube"
              className="mt-8"
            >
              {/* YouTube Channel Banner Bar */}
              <div className="mb-6 flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-red-600 text-white">
                    <YouTubeIcon className="size-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#111827]">
                      Taruna Merah Putih Kepulauan Riau Official
                    </p>
                    <p className="text-xs text-neutral-500">
                      Dokumentasi kegiatan, pidato kebangsaan, dan advokasi bahari
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#B91C1C] px-4 py-2 text-xs font-bold text-white hover:bg-[#991B1B] transition-colors"
                >
                  <YouTubeIcon className="size-4" />
                  <span>Subscribe Channel</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              {/* YouTube Videos Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {youtubeVideos.map((video) => (
                  <div
                    key={video.id}
                    className="overflow-hidden border border-neutral-200 bg-white shadow-2xs hover:shadow-md transition-shadow group"
                  >
                    {/* Video Thumbnail with Play Button & Duration */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex size-13 items-center justify-center rounded-full bg-[#B91C1C]/90 text-white shadow-lg transition-transform group-hover:scale-110">
                          <Play className="size-6 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Duration Tag */}
                      <span className="absolute bottom-3 right-3 rounded-xs bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white">
                        {video.duration}
                      </span>
                    </div>

                    {/* Video Metadata */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                        <span>{video.views}</span>
                        <span>&bull;</span>
                        <span>{video.timeAgo}</span>
                      </div>

                      <h3 className="mt-2 font-display text-base font-bold text-[#111827] leading-snug group-hover:text-[#B91C1C] transition-colors line-clamp-2">
                        {video.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-2">
                        {video.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#B91C1C] inline-flex items-center gap-1">
                          <span>Tonton di YouTube</span>
                          <ExternalLink className="size-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
