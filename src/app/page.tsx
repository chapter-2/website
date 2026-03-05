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
} from "lucide-react";
import { Axel, Gizmo, Zip, Nova, Bite, Echo } from "@/components/ui/mascots"; // Impor 6 Maskot

// --- CONSTANTS & DATA ---
const SKETCH_BOX = "border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a]";
const SKETCH_RADIUS = "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]";

const PROJECT_DATA = [
  {
    id: "core",
    title: "Chapter-2",
    desc: "Organization Core. Command center for all self-hosted initiatives.\n\n👉 Click the numbered index tabs on the right to explore other project archives.",
    color: "bg-slate-300",
    icon: <FolderOpen className="size-8 text-slate-900" />,
    tech: "Vercel • GitHub",
    mascot: "zip",
    quote:
      "Core system online! Don't just stare, click the numbered tabs to open a new chapter!",
  },
  {
    id: "bodylog",
    title: "BodyLog",
    desc: "Physical Transformation Tracker. Log progressive overload without distractions.",
    color: "bg-pink-300",
    icon: <Dumbbell className="size-8 text-slate-900" />,
    tech: "Nuxt 4 • SQLite",
    mascot: "axel",
    quote: "Your body is the primary infrastructure. Don't let it crash.",
  },
  {
    id: "mindspace",
    title: "MindSpace",
    desc: "Encrypted Brain-Dump. Empty your thoughts into a 100% private medium.",
    color: "bg-violet-300",
    icon: <Brain className="size-8 text-slate-900" />,
    tech: "Next.js • AES-256",
    mascot: "bite", // Menggunakan BITE (Proteksi)
    quote: "I am guarding your mental vault. Nobody gets in here but you.",
  },
  {
    id: "fluent",
    title: "Fluent",
    desc: "AI English Speaking Partner. Stop studying grammar, start speaking.",
    color: "bg-amber-300",
    icon: <Mic className="size-8 text-slate-900" />,
    tech: "WebRTC • LLM",
    mascot: "echo", // Menggunakan ECHO (Komunikasi)
    quote: "Mic check, one two! Let's build those communication networks.",
  },
  {
    id: "habitforge",
    title: "HabitForge",
    desc: "Brutal Routine Tracker. Destroy bad habits, build new systems.",
    color: "bg-red-300",
    icon: <Flame className="size-8 text-slate-900" />,
    tech: "Vue • Tailwind",
    mascot: "bite", // Menggunakan BITE (Disiplin/Pertahanan)
    quote: "Bad habits detected! I will bite them off before they grow.",
  },
  {
    id: "deepwork",
    title: "DeepWork",
    desc: "Absolute Focus Timer. Mute notifications, enter the flow state.",
    color: "bg-cyan-300",
    icon: <Target className="size-8 text-slate-900" />,
    tech: "React • Electron",
    mascot: "axel",
    quote: "I've locked down the system. Focus mode engaged, start hammering.",
  },
  {
    id: "coinquest",
    title: "CoinQuest",
    desc: "Gamified Wealth Building. Track your expenses like playing an RPG.",
    color: "bg-emerald-300",
    icon: <Wallet className="size-8 text-slate-900" />,
    tech: "Svelte • Go",
    mascot: "gizmo",
    quote: "Financial data a mess? Let me crunch those numbers for you.",
  },
  {
    id: "socialtie",
    title: "SocialTie",
    desc: "Personal Relationship CRM. Don't lose touch with the people who matter.",
    color: "bg-fuchsia-300",
    icon: <Users className="size-8 text-slate-900" />,
    tech: "Nuxt • Postgres",
    mascot: "echo", // Menggunakan ECHO (Sosial)
    quote:
      "Broadcasting to your inner circle! Never miss a beat with your network.",
  },
  {
    id: "skilltree",
    title: "SkillTree",
    desc: "Visual Learning Roadmaps. Map your skills from zero to mastery.",
    color: "bg-lime-300",
    icon: <BookOpen className="size-8 text-slate-900" />,
    tech: "React Flow • Node",
    mascot: "nova", // Menggunakan NOVA (Visi/Ide)
    quote: "So much to learn, so many paths! I'll illuminate the best route.",
  },
  {
    id: "visionary",
    title: "Visionary",
    desc: "Manifestation Board. Brutally visualize your long-term goals.",
    color: "bg-orange-300",
    icon: <Layers className="size-8 text-slate-900" />,
    tech: "Next.js • Prisma",
    mascot: "nova", // Menggunakan NOVA (Visi/Ide)
    quote:
      "Vision without execution is hallucination. Dream big, sketch it here.",
  },
];

// --- SUB-COMPONENTS ---

const GlobalSvgFilters = () => (
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
);

const TopNavigation = () => (
  <>
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
  </>
);

const BinderRings = () => (
  <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-8 flex flex-col justify-between items-center z-30 pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="w-12 h-4 bg-slate-300 border-4 border-slate-900 rounded-full"
        style={{ filter: "url(#roughen)" }}
      />
    ))}
  </div>
);

const LeftPage = ({
  data,
  pageNumber,
}: {
  data: (typeof PROJECT_DATA)[0];
  pageNumber: number;
}) => (
  <div
    className={`relative w-1/2 h-full bg-white ${SKETCH_BOX} border-r-0 rounded-l-3xl p-8 md:p-12 flex flex-col z-20`}
  >
    <div className="flex justify-between items-start mb-6">
      <div
        className={`p-4 rounded-xl border-2 border-slate-900 ${data.color} -rotate-3`}
      >
        {data.icon}
      </div>
      <span className="font-bold text-slate-400 text-xl font-mono">
        {String(pageNumber).padStart(2, "0")}
      </span>
    </div>
    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-none text-slate-900">
      {data.title}
    </h1>
    <p className="text-lg md:text-xl font-bold text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
      {data.desc}
    </p>
    <div className="mt-auto pt-6 border-t-4 border-dashed border-slate-300">
      <p className="font-bold text-lg text-slate-500 mb-4">
        Tech Stack: <span className="text-slate-900">{data.tech}</span>
      </p>
      <button
        className={`w-full py-3 bg-slate-900 text-white font-bold text-lg hover:bg-rose-500 hover:-translate-y-1 transition-all ${SKETCH_BOX} ${SKETCH_RADIUS}`}
      >
        Access System
      </button>
    </div>
  </div>
);

const RightPage = ({
  data,
  onPrev,
  onNext,
  isFirst,
  isLast,
}: {
  data: (typeof PROJECT_DATA)[0];
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const renderMascot = () => {
    switch (data.mascot) {
      case "zip":
        return <Zip className="w-56 md:w-72" />;
      case "gizmo":
        return <Gizmo className="w-56 md:w-72" />;
      case "axel":
        return <Axel className="w-64 md:w-80" />;
      case "nova":
        return <Nova className="w-56 md:w-72" />;
      case "bite":
        return <Bite className="w-56 md:w-72" />;
      case "echo":
        return <Echo className="w-48 md:w-60" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative w-1/2 h-full bg-[#f8f9fa] ${SKETCH_BOX} border-l-0 rounded-r-3xl flex flex-col items-center justify-center p-8 z-10`}
    >
      <div
        className={`absolute top-12 w-4/5 p-4 bg-white text-lg font-bold border-4 border-slate-900 shadow-[4px_4px_0_0_#0f172a] ${SKETCH_RADIUS} z-20 text-center`}
      >
        "{data.quote}"
      </div>
      <div className="mt-16 relative w-full flex justify-center items-center h-64">
        {renderMascot()}
      </div>
      <div className="absolute bottom-8 right-8 flex gap-4">
        <button
          onClick={onPrev}
          disabled={isFirst}
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
          onClick={onNext}
          disabled={isLast}
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
  );
};

const SideTabs = ({
  data,
  currentIndex,
  onSelect,
}: {
  data: typeof PROJECT_DATA;
  currentIndex: number;
  onSelect: (i: number) => void;
}) => (
  <div className="absolute top-6 bottom-6 -right-12 md:-right-16 w-12 md:w-16 flex flex-col justify-between z-0 gap-1 py-2">
    {data.map((page, index) => (
      <div
        key={page.id}
        onClick={() => onSelect(index)}
        className={`relative flex-1 border-4 border-l-0 border-slate-900 rounded-r-xl cursor-pointer transition-all duration-200 flex items-center justify-center group
          ${currentIndex === index ? `${page.color} w-full shadow-[6px_6px_0_0_#0f172a] -translate-x-2 z-10` : "bg-slate-100 w-3/4 hover:w-full hover:bg-slate-200 hover:-translate-x-1"}`}
        style={{ filter: "url(#roughen)" }}
      >
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
);

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  // Global sketch vibration
  useEffect(() => {
    gsap.to("#turb", {
      attr: { baseFrequency: "0.02 0.02" },
      duration: 0.15,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  // 6 Mascots GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Zip
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

      // 2. Axel
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
        svgOrigin: "160 510",
      });

      // 3. Gizmo
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

      // 4. Nova
      gsap.to("#nova-mascot-sketch", {
        y: -20,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to("#nova-rays", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center",
      });

      // 5. Bite
      gsap.to("#bite-mascot-sketch", {
        scaleY: 0.98,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        transformOrigin: "bottom center",
      }); // Breathing effect

      // 6. Echo
      gsap.to("#echo-mascot-sketch", {
        y: -18,
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to("#echo-headphones", {
        y: -5,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      }); // Grooving to music
    });
    return () => ctx.revert();
  }, [currentPage]);

  const activeData = PROJECT_DATA[currentPage];

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-[#Fdfbf7] overflow-hidden p-4 md:p-8">
      <GlobalSvgFilters />
      <TopNavigation />

      {/* THE BINDER */}
      <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex mt-12">
        <LeftPage data={activeData} pageNumber={currentPage + 1} />
        <BinderRings />
        <RightPage
          data={activeData}
          onPrev={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          onNext={() =>
            setCurrentPage((prev) =>
              Math.min(PROJECT_DATA.length - 1, prev + 1),
            )
          }
          isFirst={currentPage === 0}
          isLast={currentPage === PROJECT_DATA.length - 1}
        />
        <SideTabs
          data={PROJECT_DATA}
          currentIndex={currentPage}
          onSelect={setCurrentPage}
        />
      </div>
    </div>
  );
}
