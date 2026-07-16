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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
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
          }}
          className={`mt-5 flex items-center justify-between rounded-2xl border px-6 py-4 transition-all duration-300 ${
            isScrolled
              ? "border-white/10 bg-[#0B1120]/80 shadow-2xl backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <DesktopNav />

          <MobileNav />
        </motion.nav>
      </Container>
    </header>
  );
}