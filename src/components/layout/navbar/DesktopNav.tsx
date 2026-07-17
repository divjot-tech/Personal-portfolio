"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import navigation from "@/data/navigation";
import Button from "@/components/common/Button";

export default function DesktopNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) =>
        document.getElementById(item.id)
      );

      let current = "home";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden items-center gap-10 lg:flex">
      {/* Navigation */}

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
        {navigation.map((item) => {
          const active = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative"
            >
              {active && (
                <motion.div
                  layoutId="navbar-active"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-full bg-cyan-500"
                />
              )}

              <span
                className={`relative z-10 block rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Resume Button */}

      <Button
        href="/resume.pdf"
        variant="primary"
        className="group rounded-xl"
      >
        Resume

        <svg
          className="ml-2 transition-transform duration-300 group-hover:translate-y-[2px]"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m0 0l-6-6m6 6l6-6"
          />
        </svg>
      </Button>
    </div>
  );
}