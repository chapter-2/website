"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import {
  FolderOpen,
  Github,
  Dumbbell,
  Brain,
  Wallet,
  Mic,
  Target,
  Flame,
  Users,
  BookOpen,
  Layers,
  Code2,
} from "lucide-react";
import { Axel, Gizmo, Zip } from "@/components/ui/mascots";

const pages = [
  {
    id: "core",
    title: "Chapter-2",
    desc: "Organization Core. Pusat komando untuk semua inisiatif self-hosted.\n\n👉 Tarik dan klik tab index bernomor di sebelah kanan buku ini untuk mengeksplorasi arsip proyek lainnya.",
    color: "bg-slate-300",
    icon: <FolderOpen className="size-8 text-slate-900" />,
    tech: "Vercel • GitHub",
    mascot: "zip",
    quote:
      "Sistem inti online! Jangan bengong, klik tab bernomor di kanan buat buka lembaran lain!",
  },
  {
    id: "bodylog",
    title: "BodyLog",
    desc: "Physical Transformation Tracker. Catat progressive overload tanpa distraksi.",
    color: "bg-pink-300",
    icon: <Dumbbell className="size-8 text-slate-900" />,
    tech: "Nuxt 4 • SQLite",
    mascot: "axel",
    quote: "Tubuh lu itu infrastruktur utama. Jangan sampai down.",
  },
  {
    id: "mindspace",
    title: "MindSpace",
    desc: "Encrypted Brain-Dump. Kosongkan pikiran lu ke medium yang 100% private.",
    color: "bg-violet-300",
    icon: <Brain className="size-8 text-slate-900" />,
    tech: "Next.js • AES-256",
    mascot: "gizmo",
    quote: "Privasi pikiran lu itu mutlak. Gw pastikan datanya aman.",
  },
  {
    id: "fluent",
    title: "Fluent",
    desc: "AI English Speaking Partner. Berhenti belajar grammar, mulai bicara.",
    color: "bg-amber-300",
    icon: <Mic className="size-8 text-slate-900" />,
    tech: "WebRTC • LLM",
    mascot: "zip",
    quote: "Koneksi ke dunia luar dimulai dari bahasa. Let's talk!",
  },
  {
    id: "habitforge",
    title: "HabitForge",
    desc: "Brutal Routine Tracker. Hancurkan kebiasaan buruk, bangun sistem baru.",
    color: "bg-red-300",
    icon: <Flame className="size-8 text-slate-900" />,
    tech: "Vue • Tailwind",
    mascot: "axel",
    quote: "Disiplin itu mekanis. Setting sistemnya, jalankan tanpa emosi.",
  },
  {
    id: "deepwork",
    title: "DeepWork",
    desc: "Absolute Focus Timer. Matikan notifikasi, masuk ke flow state.",
    color: "bg-cyan-300",
    icon: <Target className="size-8 text-slate-900" />,
    tech: "React • Electron",
    mascot: "zip",
    quote: "Ping! Semua notifikasi udah gw blokir. Fokus sekarang.",
  },
  {
    id: "coinquest",
    title: "CoinQuest",
    desc: "Gamified Wealth Building. Lacak pengeluaran lu layaknya main RPG.",
    color: "bg-emerald-300",
    icon: <Wallet className="size-8 text-slate-900" />,
    tech: "Svelte • Go",
    mascot: "gizmo",
    quote: "Data finansial lu berantakan? Sini gw bantu analisis.",
  },
  {
    id: "socialtie",
    title: "SocialTie",
    desc: "Personal Relationship CRM. Jangan kehilangan kontak dengan orang penting.",
    color: "bg-fuchsia-300",
    icon: <Users className="size-8 text-slate-900" />,
    tech: "Nuxt • Postgres",
    mascot: "zip",
    quote: "Jaringan itu kekuatan. Biar gw yang ngingetin jadwal meetup lu.",
  },
  {
    id: "skilltree",
    title: "SkillTree",
    desc: "Visual Learning Roadmaps. Petakan keahlian lu dari nol sampai master.",
    color: "bg-lime-300",
    icon: <BookOpen className="size-8 text-slate-900" />,
    tech: "React Flow • Node",
    mascot: "gizmo",
    quote: "Algoritma belajar lu kurang efisien. Ikuti roadmap ini.",
  },
  {
    id: "visionary",
    title: "Visionary",
    desc: "Manifestation Board. Visualisasikan gol jangka panjang lu secara brutal.",
    color: "bg-orange-300",
    icon: <Layers className="size-8 text-slate-900" />,
    tech: "Next.js • Prisma",
    mascot: "axel",
    quote: "Visi tanpa eksekusi itu halusinasi. Susun blueprint-nya di sini.",
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // GSAP: Rough sketch vibration
    gsap.to("#turb", {
      attr: { baseFrequency: "0.02 0.02" },
      duration: 0.15,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#zip-mascot-sketch", {
        y: -25,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to("#zip-wings", {
        rotation: -5,
        transformOrigin: "bottom center",
        duration: 0.3,
        yoyo: true,
        repeat: -1,
      });

      gsap.to("#axel-mascot-sketch", {
        y: -10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
      gsap.to("#hand-wrench-group", {
        rotation: 15,
        duration: 1.2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        svgOrigin: "160 510", // <- INI KUNCINYA: Pakai svgOrigin, tanpa "px"
      });

      gsap.to("#gizmo-mascot-sketch", {
        y: -15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to("#data-orb", {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center",
      });
    });
    return () => ctx.revert();
  }, [currentPage]);

  const activeData = pages[currentPage];
  const sketchBox = "border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a]";
  const sketchRadius = "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]";

  const nextPage = () =>
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));

  const renderMascot = () => {
    switch (activeData.mascot) {
      case "zip":
        return <Zip className="w-56 md:w-72" />;
      case "gizmo":
        return <Gizmo className="w-56 md:w-72" />;
      case "axel":
        return <Axel className="w-64 md:w-80" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-[#Fdfbf7] overflow-hidden p-4 md:p-8">
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="roughen">
            <feTurbulence
              id="turb"
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
        </defs>
      </svg>

      <div className="absolute top-6 left-8 flex items-center gap-3 z-50">
        <div className="bg-yellow-300 border-2 border-slate-900 p-2 -rotate-6">
          <FolderOpen className="size-6" />
        </div>
        <span className="font-bold text-2xl uppercase tracking-widest text-slate-800">
          Chapter-2
        </span>
      </div>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="absolute top-6 right-8 flex items-center gap-2 hover:text-rose-500 transition-colors font-bold text-lg z-50"
      >
        <Github className="size-6" />
        <span className="hidden sm:block">Repository</span>
      </a>

      {/* THE BINDER */}
      <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex mt-12">
        {/* KIRI: Konten */}
        <div
          className={`relative w-1/2 h-full bg-white ${sketchBox} border-r-0 rounded-l-3xl p-8 md:p-12 flex flex-col z-20`}
        >
          <div className="flex justify-between items-start mb-6">
            <div
              className={`p-4 rounded-xl border-2 border-slate-900 ${activeData.color} -rotate-3`}
            >
              {activeData.icon}
            </div>
            {/* Indikator Halaman di Sudut */}
            <span className="font-bold text-slate-400 text-xl font-mono">
              {String(currentPage + 1).padStart(2, "0")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-none text-slate-900">
            {activeData.title}
          </h1>
          <p className="text-lg md:text-xl font-bold text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
            {activeData.desc}
          </p>

          <div className="mt-auto pt-6 border-t-4 border-dashed border-slate-300">
            <p className="font-bold text-lg text-slate-500 mb-4">
              Tech Stack:{" "}
              <span className="text-slate-900">{activeData.tech}</span>
            </p>
            <button
              className={`w-full py-3 bg-slate-900 text-white font-bold text-lg hover:bg-rose-500 hover:-translate-y-1 transition-all ${sketchBox} ${sketchRadius}`}
            >
              Akses Sistem
            </button>
          </div>
        </div>

        {/* BINDER RINGS */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-8 flex flex-col justify-between items-center z-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-12 h-4 bg-slate-300 border-4 border-slate-900 rounded-full"
              style={{ filter: "url(#roughen)" }}
            />
          ))}
        </div>

        {/* KANAN: Maskot */}
        <div
          className={`relative w-1/2 h-full bg-[#f8f9fa] ${sketchBox} border-l-0 rounded-r-3xl flex flex-col items-center justify-center p-8 z-10`}
        >
          <div
            className={`absolute top-12 w-4/5 p-4 bg-white text-lg font-bold border-4 border-slate-900 shadow-[4px_4px_0_0_#0f172a] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] z-20 text-center`}
          >
            "{activeData.quote}"
          </div>

          <div className="mt-16 relative w-full flex justify-center items-center h-64">
            {renderMascot()}
          </div>

          <div className="absolute bottom-8 right-8 flex gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-3 bg-white border-4 border-slate-900 rounded-full hover:bg-yellow-300 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-slate-900"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className="p-3 bg-white border-4 border-slate-900 rounded-full hover:bg-yellow-300 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-slate-900"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* TABS INDEX REDESIGN: Horizontal Numbers, No Zero-Prefix */}
        <div className="absolute top-6 bottom-6 -right-12 md:-right-16 w-12 md:w-16 flex flex-col justify-between z-0 gap-1 py-2">
          {pages.map((page, index) => (
            <div
              key={page.id}
              onClick={() => setCurrentPage(index)}
              className={`relative flex-1 border-4 border-l-0 border-slate-900 rounded-r-xl cursor-pointer transition-all duration-200 flex items-center justify-center group
                ${
                  currentPage === index
                    ? `${page.color} w-full shadow-[6px_6px_0_0_#0f172a] -translate-x-2 z-10`
                    : "bg-slate-100 w-3/4 hover:w-full hover:bg-slate-200 hover:-translate-x-1"
                }`}
              style={{ filter: "url(#roughen)" }}
            >
              {/* Angka murni horizontal (1 sampai 10) */}
              <span className="font-black text-slate-800 font-mono text-sm md:text-base select-none">
                {index + 1}
              </span>

              <div className="opacity-0 group-hover:opacity-100 absolute left-full ml-4 bg-slate-900 text-white text-sm font-bold px-3 py-2 rounded-lg whitespace-nowrap z-50 pointer-events-none transition-opacity shadow-lg">
                {page.title}
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 border-y-4 border-y-transparent border-r-8 border-r-slate-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
