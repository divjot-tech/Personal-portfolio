"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export default function SocialIcons() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/divjot-tech",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/divjot-singh-034292358",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: "mailto:2006.divjot.singh@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="flex flex-wrap items-center gap-4"
    >
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Icon size={22} />
          </motion.a>
        );
      })}

      <motion.a
        href="/resume.pdf"
        target="_blank"
        whileHover={{ y: -6, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group ml-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10"
      >
        Resume
        <ExternalLink
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.a>
    </motion.div>
  );
}