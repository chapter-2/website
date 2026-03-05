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
        "relative flex h-32 md:h-36 w-[16rem] md:w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-2xl border-2 backdrop-blur-md px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[14rem] md:after:w-[20rem] after:bg-gradient-to-l after:from-slate-50 after:to-transparent hover:border-slate-300 hover:bg-white [&>*]:flex [&>*]:items-center [&>*]:gap-2 shadow-2xl shadow-slate-200/50",
        className,
      )}
    >
      <div>
        <span className="relative inline-flex items-center justify-center rounded-xl bg-slate-100 p-2 shadow-sm border border-slate-200">
          {icon}
        </span>
        <p
          className={cn(
            "text-base md:text-lg font-black uppercase tracking-widest",
            titleClassName,
          )}
        >
          {title}
        </p>
      </div>
      <p className="whitespace-nowrap text-base md:text-lg font-bold text-slate-800">
        {description}
      </p>
      <p className="text-slate-500 font-mono text-xs md:text-sm">{date}</p>
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
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:bg-slate-50/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 border-slate-200 bg-white",
    },
    {
      className:
        "[grid-area:stack] translate-x-8 md:translate-x-16 translate-y-6 md:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:bg-slate-50/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0 border-slate-200 bg-white",
    },
    {
      className:
        "[grid-area:stack] translate-x-16 md:translate-x-32 translate-y-12 md:translate-y-20 hover:translate-y-10 border-slate-200 bg-white",
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
