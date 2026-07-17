"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">
            Divjot Singh
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Full Stack Developer • Building modern and responsive web
            applications.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            © {year} Divjot Singh. All rights reserved.
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/divjot-tech"
            target="_blank"
            className="rounded-full bg-white/5 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-black"
          >
            <FaGithub size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/divjot-singh-034292358"
            target="_blank"
            className="rounded-full bg-white/5 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-black"
          >
            <FaLinkedin size={22} />
          </Link>

          <Link
            href="mailto:2006.divjot.singh@gmail.com"
            className="rounded-full bg-white/5 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-black"
          >
            <FaEnvelope size={22} />
          </Link>
        </div>

        {/* Right */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}