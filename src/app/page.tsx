"use client";

import DisplayCards from "@/components/ui/display-cards";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { FolderOpen, Code2, Database } from "lucide-react";
import { motion } from "framer-motion";

const projectCards = [
  {
    icon: <Database className="size-5 text-pink-400" />,
    title: "BodyLog",
    description: "Private Fitness Tracker",
    date: "Production",
    titleClassName: "text-pink-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:bg-white/5 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 border-pink-500/30 bg-pink-500/10",
  },
  {
    icon: <Code2 className="size-5 text-emerald-400" />,
    title: "Project Red",
    description: "Upcoming Analytics Tool",
    date: "In Development",
    titleClassName: "text-emerald-400",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:bg-white/5 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    icon: <FolderOpen className="size-5 text-violet-400" />,
    title: "Chapter-2 Core",
    description: "Organization Framework",
    date: "v1.0.0",
    titleClassName: "text-violet-400",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 border-violet-500/30 bg-violet-500/10",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0a0a0f] py-20 text-white overflow-hidden relative selection:bg-pink-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#0a0a0f] to-[#0a0a0f] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-16 z-10 w-full"
      >
        <div className="h-[100px] flex items-center justify-center mb-2">
          <GooeyText
            texts={["Chapter-2", "Open Chapters", "Build Impact", "Stay Fun"]}
            morphTime={1.2}
            cooldownTime={1.5}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-zinc-400 text-lg font-mono tracking-tight"
        >
          Opening new chapters, building tools that matter.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ delay: 0.4, duration: 1.2, type: "spring", bounce: 0.4 }}
        className="w-full max-w-4xl flex justify-center lg:-ml-12 perspective-[1000px] z-20"
      >
        <DisplayCards cards={projectCards} />
      </motion.div>
    </main>
  );
}
