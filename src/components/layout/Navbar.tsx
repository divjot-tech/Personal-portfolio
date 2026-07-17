"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";

import Logo from "./navbar/Logo";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[999]">
      <Container>
        <motion.nav
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className={`mt-5 flex items-center justify-between rounded-2xl border px-7 transition-all duration-500 ${
            isScrolled
              ? "border-white/10 bg-slate-900/75 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              : "border-transparent bg-transparent py-5"
          }`}
        >
          {/* Left */}

          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Center */}

          <DesktopNav />

          {/* Right */}

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 lg:inline-flex"
            >
              Hire Me
            </a>

            <MobileNav />
          </div>
        </motion.nav>
      </Container>
    </header>
  );
}