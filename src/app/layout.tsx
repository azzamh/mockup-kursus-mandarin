import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kursus Bahasa Mandarin | Belajar Mandarin dari Nol Hingga Mahir",
  description:
    "Kursus Bahasa Mandarin online dan offline untuk anak, mahasiswa, karyawan, dan profesional. Konsultasi gratis dan tes level sekarang.",
  openGraph: {
    title: "Kursus Bahasa Mandarin — Belajar dari Nol Sampai Lancar",
    description:
      "Program belajar Mandarin terstruktur dengan pengajar berpengalaman. Online & offline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
