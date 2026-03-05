"use client";

import { cn } from "@/lib/utils";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

export function DisplayCard({
  className,
  icon,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 backdrop-blur-md px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-[#0a0a0f] after:to-transparent hover:border-white/40 hover:bg-white/20 [&>*]:flex [&>*]:items-center [&>*]:gap-2 shadow-2xl shadow-black/50",
        className,
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-white/10 p-2 shadow-inner">
          {icon}
        </span>
        <p
          className={cn(
            "text-lg font-black uppercase tracking-widest",
            titleClassName,
          )}
        >
          {title}
        </p>
      </div>
      <p className="whitespace-nowrap text-lg font-medium text-white">
        {description}
      </p>
      <p className="text-white/50 font-mono text-sm">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:bg-white/5 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 border-white/10 bg-white/5",
    },
    {
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:bg-white/5 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 border-white/10 bg-white/5",
    },
    {
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 border-white/10 bg-white/5",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
