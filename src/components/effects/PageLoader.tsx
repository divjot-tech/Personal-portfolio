"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
            },
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#020617]"
        >
          <div className="flex flex-col items-center">
            {/* Logo */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-8"
            >
              <h1 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 bg-clip-text text-5xl font-extrabold text-transparent">
                DS
              </h1>
            </motion.div>

            {/* Loading Bar */}

            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="h-full w-24 rounded-full bg-cyan-400"
              />
            </div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="mt-6 text-sm tracking-[0.35em] text-slate-400 uppercase"
            >
              Loading Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}