"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ScrollButton from "@/components/scrollbutton";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-12 bg-gradient-to-br from-slate-100 to-slate-100 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl">
        Welcome to My Personal Portfolio<br />
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
        className="mt-4">
        <ScrollButton />
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0e0217] w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-28 w-[15rem] md:h-56 md:w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
          <div className="absolute w-[100%] left-0 bg-[#0e0217] h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] md:h-40" />
          <div className="absolute w-20 h-[100%] left-0 bg-[#0e0217] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] md:w-40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-28 w-[15rem] md:h-56 md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
          <div className="absolute w-20 h-[100%] right-0 bg-[#0e0217] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] md:w-40" />
          <div className="absolute w-[100%] right-0 bg-[#0e0217] h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] md:h-40" />
        </motion.div>
        <div className="absolute top-1/2 h-24 w-full translate-y-12 scale-x-150 bg-[#0e0217] blur-2xl md:h-48"></div>
        <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md md:h-48"></div>
        <div className="absolute inset-auto z-50 h-18 w-[14rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl md:h-36 md:w-[28rem]"></div>
          <motion.div
            initial={{ width: "4rem" }}
            whileInView={{ width: "8rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-18 w-32 -translate-y-[3rem] rounded-full bg-cyan-400 blur-2xl md:h-36 md:w-64">
          </motion.div>
        <motion.div
          initial={{ width: "7.5rem" }}
          whileInView={{ width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[15rem] -translate-y-[3.5rem] bg-cyan-400 md:w-[30rem] md:-translate-y-[7rem]">
        </motion.div>
        <div className="absolute inset-auto z-40 h-22 w-full -translate-y-[6.25rem] bg-[#0e0217] md:h-44 md:-translate-y-[12.5rem]"></div>
      </div>

      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5 md:-translate-y-80">
        {children}
      </div>
    </div>
  );
};
