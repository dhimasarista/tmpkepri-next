import Link from "next/link";
import {
  Clock,
  Flame,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactForm, CONTACT_EMAIL } from "@/components/landing/contact-form";
import { PageShell } from "@/components/landing/page-shell";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-neutral-50 py-12 sm:py-16 border-b border-neutral-200">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
            Layanan Komunikasi & Informasi
          </span>
          <h1 className="mt-2 font-display text-3xl font-black text-[#111827] sm:text-4xl">
            Kontak DPD Taruna Merah Putih Kepri
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 leading-relaxed">
            Pusat komunikasi, layanan informasi, dan posko aspirasi masyarakat
            kepemudaan dan kemaritiman se-Kepulauan Riau.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            {/* Info Sekretariat */}
            <div className="space-y-6">
              <div className="border border-neutral-200 bg-white p-6">
                <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
                  Kantor Sekretariat Tetap
                </span>
                <h2 className="mt-2 font-display text-base font-bold text-[#111827]">
                  DPD Taruna Merah Putih Provinsi Kepulauan Riau
                </h2>

                <div className="mt-4 space-y-3 text-xs text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="size-4 shrink-0 text-[#B91C1C] mt-0.5" />
                    <span>
                      Komp. Ruko Batam Centre Square Blok C No. 5-7, Jl. Engku
                      Putri, Kel. Teluk Tering, Kec. Batam Kota, Kota Batam,
                      Kepulauan Riau 29461
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="size-4 shrink-0 text-[#B91C1C]" />
                    <span>Telepon / WhatsApp: (0778) 461-234</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="size-4 shrink-0 text-[#B91C1C]" />
                    <span>Email: {CONTACT_EMAIL}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="size-4 shrink-0 text-[#B91C1C] mt-0.5" />
                    <span>
                      Waktu Pelayanan: Senin - Sabtu (Pukul 09.00 - 17.00 WIB)
                    </span>
                  </div>
                </div>
              </div>

              {/* Red Notice Box: Pure White on Red */}
              <div className="bg-[#B91C1C] p-6 text-white text-xs">
                <p className="font-bold uppercase tracking-wider text-white">
                  Posko Pengaduan & Aspirasi Rakyat
                </p>
                <p className="mt-2 leading-relaxed text-white/90">
                  Kader TMP Kepri siap menampung dan meneruskan aspirasi
                  masyarakat nelayan, buruh muda, dan pelajar/mahasiswa kepada
                  fraksi di DPRD tingkat kota/kabupaten maupun provinsi.
                </p>
              </div>
            </div>

            {/* Form Aspirasi */}
            <div className="border border-neutral-200 bg-white p-6 sm:p-8">
              <div className="border-b border-neutral-200 pb-3">
                <h2 className="font-display text-lg font-bold text-[#111827]">
                  Formulir Pengaduan / Aspirasi Warga
                </h2>
                <p className="text-xs text-neutral-500">
                  Silakan tuliskan identitas dan pesan aspirasi Anda secara jelas.
                </p>
              </div>

              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
