import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taruna Merah Putih Kepulauan Riau | DPD TMP KEPRI",
  description:
    "Situs Resmi DPD Taruna Merah Putih (TMP) Provinsi Kepulauan Riau. Sayap kepemudaan progresif berjiwa Pancasila, berdikari, dan bergotong-royong membangun Bumi Segantang Lada.",
  icons: {
    icon: [
      { url: "/logo-only.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo-only.svg",
    apple: "/logo-only.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} min-h-screen antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
