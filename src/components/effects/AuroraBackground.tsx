"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] bottom-[-120px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, 25, -35, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[120px]"
      />

    </div>
  );
}