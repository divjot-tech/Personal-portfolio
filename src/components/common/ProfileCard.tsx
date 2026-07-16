"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      className="relative w-full max-w-md"
    >
      {/* Glow */}

      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-30 blur-2xl"></div>

      {/* Card */}

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        {/* Profile Image */}

        <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl">

          <Image
            src="/profile.png"
            alt="Divjot Singh"
            fill
            priority
            className="object-cover"
          />

        </div>

        {/* Name */}

        <div className="mt-8 text-center">

          <h2 className="text-3xl font-bold text-white">
            Divjot Singh
          </h2>

          <p className="mt-2 text-blue-400">
            Full Stack Developer
          </p>

        </div>

        {/* Status */}

        <div className="mt-6 flex justify-center">

          <span className="rounded-full border border-green-500/30 bg-green-500/20 px-5 py-2 text-sm font-medium text-green-400">

            🟢 Open to Internship Opportunities

          </span>

        </div>

        {/* Information */}

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3 text-slate-300">

            <MapPin
              size={18}
              className="text-cyan-400"
            />

            Delhi, India

          </div>

          <div className="flex items-center gap-3 text-slate-300">

            <GraduationCap
              size={18}
              className="text-cyan-400"
            />

            GTBIT • GGSIPU

          </div>

          <div className="flex items-center gap-3 text-slate-300">

            <Star
              size={18}
              className="text-cyan-400"
            />

            Latest SGPA : 8.5

          </div>

          <div className="flex items-center gap-3 text-slate-300">

            <Briefcase
              size={18}
              className="text-cyan-400"
            />

            Available Immediately

          </div>

        </div>

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap justify-center gap-2">

          {[
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "Tailwind",
            "MongoDB",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </motion.div>
  );
}