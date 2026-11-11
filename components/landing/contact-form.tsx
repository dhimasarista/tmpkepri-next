"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const CONTACT_EMAIL = "sekretariat@tmpkepri.id";

const fieldClass =
  "h-11 rounded-xl border-input bg-background focus-visible:ring-primary";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center text-primary">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h3 className="mt-4 font-display text-xl font-bold">
          Pesan Aspirasi Berhasil Dikirim!
        </h3>
        <p className="mt-2 text-sm text-foreground/80">
          Terima kasih {name ? <strong>{name}</strong> : "Rekan Pemuda"}.
          Sekretariat DPD Taruna Merah Putih Kepri akan menindaklanjuti pesan
          Anda sesegera mungkin.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 rounded-full bg-primary px-5 py-2 text-xs font-bold text-white transition hover:bg-[#a6191c]"
        >
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-name" className="text-xs font-bold text-foreground">
            Nama Lengkap
          </Label>
          <Input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-phone" className="text-xs font-bold text-foreground">
            Nomor WhatsApp
          </Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="0812-xxxx-xxxx"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-email" className="text-xs font-bold text-foreground">
            Alamat Email
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="nama@email.com"
            className={fieldClass}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-region" className="text-xs font-bold text-foreground">
            Wilayah Kab / Kota
          </Label>
          <select
            id="contact-region"
            name="region"
            className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="Batam">Kota Batam</option>
            <option value="Tanjungpinang">Kota Tanjungpinang</option>
            <option value="Bintan">Kabupaten Bintan</option>
            <option value="Karimun">Kabupaten Karimun</option>
            <option value="Lingga">Kabupaten Lingga</option>
            <option value="Natuna">Kabupaten Natuna</option>
            <option value="Anambas">Kabupaten Kepulauan Anambas</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-subject" className="text-xs font-bold text-foreground">
          Perihal
        </Label>
        <Input
          id="contact-subject"
          name="subject"
          required
          placeholder="Aspirasi, Kemitraan Komunitas, atau Pertanyaan"
          className={fieldClass}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message" className="text-xs font-bold text-foreground">
          Isi Pesan / Aspirasi
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tuliskan aspirasi, gagasan, atau pesan Anda untuk DPD Taruna Merah Putih Kepri..."
          className="rounded-xl border-input bg-background focus-visible:ring-primary"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md hover:bg-[#a6191c]"
      >
        <Send className="mr-2 size-4" />
        <span>Kirim Aspirasi Sekarang</span>
      </Button>
    </form>
  );
}
