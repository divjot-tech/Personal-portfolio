"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ duration: 0.2 }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 font-extrabold text-lg text-white shadow-lg shadow-blue-500/30"
      >
        DS
      </motion.div>

      <div className="hidden sm:block">
        <h2 className="text-lg font-bold text-white">
          Divjot Singh
        </h2>

        <p className="text-sm text-slate-400">
          Full Stack Developer
        </p>
      </div>
    </Link>
  );
}