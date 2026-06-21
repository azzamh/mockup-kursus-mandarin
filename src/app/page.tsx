"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, ChevronDown, ChevronUp, GraduationCap, Users, TrendingUp,
  Globe, BarChart3, Handshake, Briefcase, MessageCircle, Target, Star,
  MapPin, Phone, Mail, Menu, X, ArrowRight, Sparkles, Shield, Clock,
  Monitor, Award, BookMarked, Building2, UserCheck, Video, Headphones, Check, Heart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} id={id} className={`py-16 md:py-24 px-4 ${className}`}>
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer} className="max-w-7xl mx-auto">{children}</motion.div>
    </section>
  );
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-12 md:mb-16 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-heading leading-tight">{children}</h2>
      {subtitle && <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/6285712345678text=Halo%20saya%20mau%20info%20tentang%20program%20kursus" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 max-md:hidden flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      style={{ animation: "whatsappPulse 2s infinite" }}>
      <MessageCircle className="w-6 h-6" /><span className="text-sm font-medium">Chat WhatsApp</span>
    </a>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 md:hidden">
      <a href="https://wa.me/6285712345678text=Halo%20saya%20mau%20info%20tentang%20program%20kursus" target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 text-white w-full py-3 rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors">
        <MessageCircle className="w-5 h-5" /> Konsultasi Gratis via WhatsApp
      </a>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Program", href: "#program" }, { label: "Kelas Online", href: "#kelas-online" },
    { label: "Testimonial", href: "#testimonial" }, { label: "FAQ", href: "#faq" }, { label: "Kontak", href: "#kontak" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <GraduationCap className="w-7 h-7 text-primary" />
          <span className="font-heading font-bold text-lg text-gray-900"><span className="text-primary">Kursus</span> Mandarin</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (<a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">{l.label}</a>))}
          <a href="#form" className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">Daftar Konsultasi Gratis</a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 py-2 hover:text-primary">{l.label}</a>))}
              <a href="#form" onClick={() => setOpen(false)} className="bg-primary text-white text-center px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary-dark">Daftar Konsultasi Gratis</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({ students: 0, satisfaction: 0, skill: 0 });
  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        students: Math.min(500, Math.floor((step / steps) * 500)),
        satisfaction: Math.min(95, Math.floor((step / steps) * 95)),
        skill: Math.min(90, Math.floor((step / steps) * 90)),
      });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [isInView]);
  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 md:gap-8 mt-8 max-w-lg mx-auto md:mx-0">
      <div className="stat-item text-center md:text-left"><div className="text-3xl md:text-4xl font-bold text-primary font-heading">{counts.students}+</div><div className="text-xs md:text-sm text-gray-500 mt-1">Peserta Terdaftar</div></div>
      <div className="stat-item text-center md:text-left"><div className="text-3xl md:text-4xl font-bold text-secondary font-heading">{counts.satisfaction}%</div><div className="text-xs md:text-sm text-gray-500 mt-1">Peserta Puas</div></div>
      <div className="stat-item text-center md:text-left"><div className="text-3xl md:text-4xl font-bold text-green-600 font-heading">{counts.skill}%</div><div className="text-xs md:text-sm text-gray-500 mt-1">Peningkatan Skill</div></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-accent via-white to-white pt-20 pb-16 md:pb-24 px-4 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> No.1 Mandarin Learning Center
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 font-heading leading-tight">
              Kuasai <span className="text-primary">Bahasa Mandarin</span> Tanpa Harus Keluar Rumah
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Mulai dari nol hingga mampu berbicara, membaca, dan memahami Bahasa Mandarin — untuk
              kebutuhan sekolah, karier, bisnis, maupun persiapan studi ke China/Taiwan.{' '}
              <span className="font-semibold text-gray-800">Kelas online interaktif dengan pengajar profesional.</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#form"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Daftar Konsultasi Gratis <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6285712345678text=Halo%20saya%20mau%20info%20tentang%20program%20kursus" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-base font-semibold hover:border-primary hover:text-primary transition-all">
                <MessageCircle className="w-5 h-5 text-green-500" /> Chat WhatsApp Sekarang
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "Pengajar Profesional" },
                { icon: <Monitor className="w-4 h-4" />, text: "Online & Offline" },
                { icon: <BookMarked className="w-4 h-4" />, text: "Materi Terstruktur" },
                { icon: <Clock className="w-4 h-4" />, text: "Jadwal Fleksibel" },
              ].map((badge, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700">
                  {badge.icon} {badge.text}
                </motion.span>
              ))}
            </div>
            <StatsCounter />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-full max-w-lg aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center shadow-2xl border border-gray-100">
                <div className="text-center p-8">
                  <GraduationCap className="w-20 h-20 text-primary/40 mx-auto" />
                  <p className="mt-4 text-gray-400 font-medium">Foto Suasana Belajar</p>
                  <p className="text-sm text-gray-300">Ganti dengan gambar nyata</p>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"><Check className="w-5 h-5 text-green-600" /></div>
                <div><div className="text-sm font-semibold text-gray-900">500+ Siswa</div><div className="text-xs text-gray-500">Telah bergabung</div></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    { icon: <BookMarked className="w-8 h-8" />, title: "Sulit Menghafal Hanzi", desc: "Banyak siswa tidak memiliki metode belajar yang tepat untuk mengingat ribuan karakter Mandarin.", color: "bg-red-50 text-red-600" },
    { icon: <MessageCircle className="w-8 h-8" />, title: "Tidak Percaya Diri Berbicara", desc: "Sering memahami teori tetapi takut untuk praktik berbicara dengan orang lain.", color: "bg-amber-50 text-amber-600" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Belajar Tidak Konsisten", desc: "Tidak ada kurikulum dan pendampingan yang jelas sehingga mudah menyerah di tengah jalan.", color: "bg-blue-50 text-blue-600" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Materi Berantakan", desc: "Belajar dari banyak sumber tanpa arah yang jelas membuat progress terhambat.", color: "bg-purple-50 text-purple-600" },
  ];
  return (
    <Section className="bg-white" id="problem">
      <SectionTitle subtitle="Kenali hambatan yang sering dialami sebelum memulai">Mengapa Banyak Orang Gagal Belajar Mandarin?</SectionTitle>
      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p, i) => (
          <motion.div key={i} variants={fadeUp} custom={i}
            className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-primary/20">
            <div className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>{p.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{p.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function WhyLearnSection() {
  const reasons = [
    { icon: <Globe className="w-8 h-8" />, title: "Bahasa Paling Banyak Digunakan", desc: "Mandarin adalah bahasa dengan jumlah penutur terbanyak di dunia — lebih dari 1,2 miliar orang.", color: "bg-blue-50 text-blue-600" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "China Pemain Ekonomi Global", desc: "China memegang peran penting dalam ekonomi dunia dan perdagangan internasional.", color: "bg-green-50 text-green-600" },
    { icon: <Handshake className="w-8 h-8" />, title: "Investor Terbesar di Indonesia", desc: "Mayoritas investor asing di Indonesia adalah perusahaan China.", color: "bg-purple-50 text-purple-600" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Peluang Karir & Bisnis", desc: "Kemampuan Mandarin membuka kesempatan karir dan bisnis yang sangat luas.", color: "bg-amber-50 text-amber-600" },
  ];
  return (
    <Section className="bg-accent" id="why-learn">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp}>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Alasan Kenapa Harus</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mt-2 leading-tight">Belajar Bahasa Mandarin</h2>
          <p className="text-gray-600 leading-relaxed mt-4 mb-8">Bahasa Mandarin bukan sekadar bahasa asing — ini adalah investasi untuk masa depan. Dengan lebih dari 1,2 miliar penutur di seluruh dunia, menguasai Mandarin memberi Anda keunggulan kompetitif yang tak ternilai.</p>
          <motion.div variants={staggerContainer} className="space-y-6">
            {reasons.map((r, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl ${r.color} flex items-center justify-center flex-shrink-0`}>{r.icon}</div>
                <div><h4 className="font-semibold text-gray-900">{r.title}</h4><p className="text-sm text-gray-600 mt-1">{r.desc}</p></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp} className="hidden lg:flex justify-center">
          <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl flex items-center justify-center border border-gray-100">
            <div className="text-center p-8">
              <Globe className="w-24 h-24 text-primary/20 mx-auto" />
              <p className="mt-4 text-gray-400 font-medium">Ilustrasi Global</p>
              <p className="text-sm text-gray-300">Ganti dengan gambar/foto</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function SolutionSection() {
  const features = [
    { icon: <TrendingUp className="w-6 h-6" />, label: "Kurikulum Bertahap", desc: "Dari pinyin → Hanzi → percakapan" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "Latihan Percakapan Aktif", desc: "Speaking practice setiap sesi" },
    { icon: <Target className="w-6 h-6" />, label: "Evaluasi Perkembangan", desc: "Progress report berkala" },
    { icon: <Monitor className="w-6 h-6" />, label: "Materi Digital Lengkap", desc: "Akses 24/7 via platform" },
    { icon: <Award className="w-6 h-6" />, label: "Pengajar Berpengalaman", desc: "Native & bilingual trainer" },
    { icon: <Users className="w-6 h-6" />, label: "Grup Diskusi Siswa", desc: "Belajar bareng komunitas" },
  ];
  return (
    <Section className="bg-white" id="solution">
      <SectionTitle subtitle="Kami membantu siswa belajar Mandarin secara sistematis">Solusi Belajar Mandarin yang Terstruktur</SectionTitle>
      <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="flex gap-4 bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">{f.icon}</div>
            <div><h4 className="font-semibold text-gray-900">{f.label}</h4><p className="text-sm text-gray-500 mt-0.5">{f.desc}</p></div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function PlayCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function WhyUsSection() {
  const items = [
    { icon: <Target className="w-8 h-8" />, title: "Program Fleksibel", desc: "Setiap program dapat menyesuaikan dengan kebutuhan & kemampuan siswa — dari anak-anak hingga eksekutif.", color: "bg-blue-50 text-blue-600" },
    { icon: <Users className="w-8 h-8" />, title: "Kelas Mini", desc: "Hanya 3–6 siswa per kelas. Suasana lebih fokus, interaktif, dan perhatian guru lebih maksimal.", color: "bg-green-50 text-green-600" },
    { icon: <PlayCircleIcon className="w-8 h-8" />, title: "Metode Interaktif", desc: "Belajar dengan metode interaktif dan tidak membosankan. Fokus pada kemampuan berbicara tanpa ragu.", color: "bg-purple-50 text-purple-600" },
    { icon: <Award className="w-8 h-8" />, title: "Pengajar Profesional", desc: "Guru-guru bersertifikat, berpengalaman, dan ahli dalam mengajar bahkan ke siswa yang benar-benar nol Mandarin.", color: "bg-amber-50 text-amber-600" },
  ];
  return (
    <Section className="bg-accent" id="why-us">
      <SectionTitle subtitle="Apa yang membuat kami berbeda dari yang lain">Mengapa Harus Belajar di Sini?</SectionTitle>
      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="bg-white rounded-2xl p-6 flex gap-5 shadow-sm hover:shadow-lg transition-all border border-gray-100">
            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
            <div><h3 className="text-lg font-bold text-gray-900 font-heading">{item.title}</h3><p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p></div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function ProgramSection() {
  const programs = [
    { icon: <Heart className="w-7 h-7" />, title: "Mandarin untuk Anak", age: "Usia 4–15 tahun", desc: "Persiapkan buah hati Anda dengan kemampuan Bahasa yang matang sejak dini.", color: "from-pink-500 to-rose-500", wa: "Halo%20saya%20mau%20info%20tentang%20program%20kursus%20Mandarin%20untuk%20anak-anak" },
    { icon: <Users className="w-7 h-7" />, title: "Mandarin untuk Dewasa", age: "Karyawan & Profesional", desc: "Miliki kesempatan karir dan bisnis yang fantastis dengan bekal Mandarin yang mahir.", color: "from-blue-500 to-indigo-500", wa: "Halo%20saya%20mau%20info%20tentang%20program%20kursus%20Mandarin%20untuk%20dewasa" },
    { icon: <Briefcase className="w-7 h-7" />, title: "Mandarin Bisnis", age: "Profesional & Pebisnis", desc: "Komunikasi bisnis, presentasi, negosiasi — semua dalam Bahasa Mandarin.", color: "from-amber-500 to-orange-500", wa: "Halo%20saya%20mau%20info%20tentang%20program%20kursus%20Mandarin%20untuk%20bisnis" },
    { icon: <UserCheck className="w-7 h-7" />, title: "Program Private", age: "1-on-1 · Semua Usia", desc: "Belajar sendiri dengan guru. Jadwal & materi bisa disesuaikan dengan kebutuhan Anda.", color: "from-purple-500 to-violet-500", wa: "Halo%20saya%20mau%20info%20tentang%20program%20kursus%20Mandarin%20untuk%20private" },
    { icon: <GraduationCap className="w-7 h-7" />, title: "Persiapan Kuliah Taiwan", age: "Studi ke Luar Negeri", desc: "Persiapan Traditional/Simplified Mandarin untuk melanjutkan studi ke Taiwan atau China.", color: "from-teal-500 to-emerald-500", wa: "Halo%20saya%20mau%20info%20tentang%20program%20kursus%20Mandarin%20untuk%20persiapan%20studi%20di%20Taiwan" },
    { icon: <Target className="w-7 h-7" />, title: "Persiapan Ujian HSK", age: "HSK 1–6", desc: "Mempelajari kosakata dan soal latihan untuk tes HSK. Tersedia dari level 1 hingga 6.", color: "from-red-500 to-rose-600", wa: "Halo%20saya%20mau%20info%20tentang%20program%20kursus%20Mandarin%20untuk%20HSK" },
    { icon: <Building2 className="w-7 h-7" />, title: "Company Training", age: "Korporasi", desc: "Pelatihan Mandarin untuk perusahaan. Jadwal & lokasi fleksibel — bisa di kantor atau online.", color: "from-gray-700 to-gray-900", wa: "Halo%20saya%20mau%20info%20tentang%20program%20kursus%20Mandarin%20untuk%20Corporate%20Program" },
  ];
  return (
    <Section className="bg-white" id="program">
      <SectionTitle subtitle="Tersedia program untuk semua usia dan kebutuhan">Program Kami</SectionTitle>
      <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${p.color}`} />
            <div className="p-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center mb-4`}>{p.icon}</div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{p.age}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 font-heading">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
              <a href={`https://wa.me/6285718594220?text=${p.wa}`} target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link">
                Detail Program <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>);
}

// Re-use ChevronRight from lucide - but since we defined a local one, rename
const ChevronRight = ChevronRightIcon;

function AlternativeKelas() {
  const methods = [
    { icon: <Video className="w-8 h-8" />, title: "Group Video Call", desc: "Belajar bersama teman sekelas dalam grup kecil yang interaktif.", features: ["Mini Group — hanya 3–6 siswa", "Level Beginner hingga Advance", "Google Meet / Zoom + tools interaktif", "Rekaman video — putar ulang kapanpun"], color: "from-blue-500 to-cyan-500", wa: "Halo%20saya%20ingin%20mengetahui%20info%20dan%20biaya%20kelas%20online%20*Group%20Video%20Call*" },
    { icon: <Headphones className="w-8 h-8" />, title: "Private Video Call", desc: "1-on-1 dengan guru. Fokus penuh pada kebutuhan belajar Anda.", features: ["1 guru — 1 murid", "Materi sesuai level & kebutuhan", "Lebih efisien dan terfokus", "Jadwal fleksibel — atur sendiri"], color: "from-purple-500 to-pink-500", wa: "Halo%20saya%20ingin%20info%20dan%20biaya%20kelas%20online%20*Private%20Video%20Call*" },
    { icon: <Monitor className="w-8 h-8" />, title: "Semi Self Study", desc: "Belajar mandiri dengan bimbingan guru via LMS. Biaya lebih terjangkau.", features: ["Biaya lebih terjangkau", "Video, eBook, Audio, Kuis — via LMS", "Akses 24/7 dari mana saja", "WA support dengan pengajar"], color: "from-emerald-500 to-teal-500", wa: "Halo%20saya%20ingin%20mengetahui%20info%20dan%20biaya%20kelas%20online%20*Semi%20Self-study%20Program*" },
  ];
  return (
    <Section className="bg-accent" id="kelas-online">
      <SectionTitle subtitle="Pilih metode belajar yang paling cocok untuk Anda">Alternatif Kelas Online</SectionTitle>
      <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
        {methods.map((m, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${m.color}`} />
            <div className="p-6 md:p-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center mb-5`}>{m.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 font-heading">{m.title}</h3>
              <p className="text-sm text-gray-600 mt-2 mb-5">{m.desc}</p>
              <ul className="space-y-3">
                {m.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/6285718594220?text=${m.wa}`} target="_blank" rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all">
                Gabung Sekarang! <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function BenefitSection() {
  const benefits = ["Modul Pembelajaran Lengkap (PDF, Audio, Video)", "Rekaman Kelas — Akses tayang ulang", "Konsultasi Pengajar 1-on-1", "Grup Belajar dengan sesama siswa", "Sertifikat Penyelesaian Resmi", "Monitoring Perkembangan Belajar", "Jadwal Fleksibel (Weekday / Weekend)", "Materi Update Berkala"];
  return (
    <Section className="bg-white" id="benefits">
      <SectionTitle subtitle="Semua yang Anda dapatkan saat bergabung">Yang Akan Anda Dapatkan</SectionTitle>
      <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-primary/5 hover:border-primary/20 transition-all">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-sm font-medium text-gray-700">{b}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function TestimonialSection() {
  const testimonials = [
    { name: "Verine", role: "Banker", text: "Belum pernah sentuh Mandarin sama sekali. Aku belajar dari 0 banget sampai sekarang sudah cukup ngerti kalau nonton Drama Mandarin. Laoshinya baik dan jago ngajar!", rating: 5 },
    { name: "Gabby", role: "Wirausaha", text: "Sebelum aku kuliah di China, aku memutuskan untuk mempersiapkan Mandarin bersama... Aku merasa sangat terbantu karena sesampainya di China aku udah lumayan ngerti.", rating: 5 },
    { name: "Catherine", role: "Mahasiswi", text: "Saya bekerja di perusahaan China yang mengharuskan Saya untuk dapat berbahasa Mandarin. Cara mengajar gurunya cukup efektif dan memotivasi.", rating: 5 },
    { name: "David", role: "Karyawan Swasta", text: "Saya cukup kaget karena anak-anak Saya dapat menggunakan Mandarin dalam percakapan sehari-hari, bahkan lebih lancar dari Saya.", rating: 5 },
  ];
  return (
    <Section className="bg-accent" id="testimonial">
      <SectionTitle subtitle="Apa kata siswa dan orang tua murid">Testimonial</SectionTitle>
      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div className="flex items-center gap-1 mb-3">{Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="w-4 h-4 fill-secondary text-secondary" />))}</div>
            <p className="text-gray-700 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{t.name[0]}</div>
              <div><div className="font-semibold text-sm text-gray-900">{t.name}</div><div className="text-xs text-gray-500">{t.role}</div></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Apakah cocok untuk pemula?", a: "Ya, tersedia kelas dari level dasar hingga mahir. Kami memiliki program khusus pemula yang dimulai dari pengenalan Pinyin dan Hanzi dasar." },
    { q: "Apakah kelas tersedia secara online?", a: "Ya, tersedia kelas online via Zoom/Google Meet dan kelas offline tatap muka — Anda bisa pilih yang paling nyaman." },
    { q: "Berapa lama sampai bisa berbicara?", a: "Tergantung intensitas belajar. Umumnya 3–6 bulan dengan belajar rutin 2–3x seminggu sudah mampu melakukan percakapan dasar sehari-hari." },
    { q: "Apakah peserta mendapat sertifikat?", a: "Ya, peserta yang menyelesaikan program akan mendapat sertifikat resmi penyelesaian." },
    { q: "Apakah ada kelas private?", a: "Ya, tersedia program Private 1-on-1 yang dapat disesuaikan jadwal dan materinya dengan kebutuhan Anda." },
    { q: "Berapa biaya kursusnya?", a: "Biaya bervariasi tergantung program yang dipilih. Hubungi kami untuk info biaya terbaru dan promo spesial." },
  ];
  return (
    <Section className="bg-white" id="faq">
      <SectionTitle subtitle="Pertanyaan yang sering diajukan">Pertanyaan Umum (FAQ)</SectionTitle>
      <motion.div variants={staggerContainer} className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
              <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{faq.q}</span>
              {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  return (
    <Section className="bg-accent" id="form">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp}>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gratis</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mt-2 leading-tight">Konsultasi Gratis & Tes Level Mandarin</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">Isi form berikut dan tim kami akan menghubungi Anda untuk konsultasi program yang paling sesuai dengan kebutuhan.</p>
          <div className="mt-8 space-y-4">
            {[
              { icon: <MessageCircle className="w-5 h-5" />, text: "Langgan direspons dalam 1x24 jam" },
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "Konsultasi gratis — tanpa biaya" },
              { icon: <Shield className="w-5 h-5" />, text: "Data Anda aman & terjaga" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">{item.icon}</div>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          {submitted ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><Check className="w-8 h-8 text-green-600" /></div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 font-heading">Data Anda Telah Terkirim!</h3>
              <p className="text-gray-600 mt-2">Anda akan segera diarahkan ke WhatsApp untuk melanjutkan konsultasi.</p>
              <a href="https://wa.me/6285718594220?text=Halo%20saya%20baru%20saja%20mengisi%20form%20konsultasi%20kursus%20Mandarin" target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" /> Lanjut ke WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap <span className="text-primary">*</span></label>
                  <input type="text" required placeholder="Masukkan nama Anda" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Nomor WhatsApp <span className="text-primary">*</span></label>
                  <input type="tel" required placeholder="08xxx" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" placeholder="email@contoh.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Kota</label>
                  <input type="text" placeholder="Jakarta" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" /></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Tujuan Belajar <span className="text-primary">*</span></label>
                <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white">
                  <option value="">Pilih tujuan belajar</option>
                  <option value="hobi">Hobi</option><option value="sekolah">Sekolah</option><option value="kuliah">Kuliah</option>
                  <option value="karir">Karier</option><option value="bisnis">Bisnis</option><option value="hsk">Persiapan HSK</option><option value="lainnya">Lainnya</option>
                </select></div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-xs text-gray-500">Saya setuju dihubungi oleh tim konsultan.</span>
              </label>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-base hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Kirim & Lanjut WhatsApp <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

function FooterCTA() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10"><div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl" /><div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary rounded-full blur-3xl" /></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 md:py-28 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">Siap untuk Menguasai Bahasa Mandarin?</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">Bergabunglah dengan kami hari ini dan mulailah perjalanan belajarmu bersama pengajar profesional.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#form" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl">
              Daftar Sekarang! <ArrowRight className="w-5 h-5" /></a>
            <a href="https://wa.me/6285712345678text=Halo%20saya%20mau%20info%20tentang%20program%20kursus" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all">
              <MessageCircle className="w-5 h-5" /> Hubungi Kami</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4"><GraduationCap className="w-7 h-7 text-primary" /><span className="font-heading font-bold text-lg text-white"><span className="text-primary">Kursus</span> Mandarin</span></a>
            <p className="text-sm leading-relaxed">No.1 Mandarin Learning Center. Program pelatihan Bahasa Mandarin yang dapat mengubah mimpi Anda menjadi kesempatan luar biasa.</p>
          </div>
          <div><h4 className="font-semibold text-white mb-4 font-heading">Navigasi</h4>
            <ul className="space-y-2 text-sm">{["Tentang Kami", "Program", "Kontak", "Karir"].map((item) => (<li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>))}</ul></div>
          <div><h4 className="font-semibold text-white mb-4 font-heading">Paket Kelas Online</h4>
            <ul className="space-y-2 text-sm">{["Group Video Call", "Private Video Call", "Semi-self Study"].map((item) => (<li key={item}><a href="#kelas-online" className="hover:text-white transition-colors">{item}</a></li>))}</ul></div>
          <div><h4 className="font-semibold text-white mb-4 font-heading">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>BSD City, Tangerang</span></li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>+62 857 123 456789</span></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>info@kursusmandarin.com</span></li>
            </ul></div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kursus Mandarin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <WhyLearnSection />
        <SolutionSection />
        <WhyUsSection />
        <ProgramSection />
        <AlternativeKelas />
        <BenefitSection />
        <TestimonialSection />
        <FAQSection />
        <LeadFormSection />
        <FooterCTA />
        <Footer />
      </main>
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </>
  );
}
