"use client";
import React from "react";

const ScrollButton4 = () => {
  const handleScroll = () => {
    document.getElementById("socials")?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div className="flex justify-center items-center w-full">
      <button
        onClick={handleScroll}
        className="relative inline-flex h-12 overflow-hidden 
        rounded-full p-[3px] focus:outline-none 
        focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
        focus:ring-offset-slate-50 cursor-pointer">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Next: My Socials
        </span>
      </button>
    </div>
  );
};

export default ScrollButton4;
