"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import navigation from "@/data/navigation";
import Button from "@/components/common/Button";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      {/* Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-500 hover:bg-white/10"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Menu */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
              className="absolute right-0 top-16 z-50 w-80 rounded-3xl border border-white/10 bg-[#0B1120]/95 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <Button
                  href="/resume.pdf"
                  className="w-full justify-center"
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}