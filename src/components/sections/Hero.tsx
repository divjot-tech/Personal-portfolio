"use client";

import AuroraBackground from "@/components/effects/AuroraBackground";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import ProfileCard from "@/components/common/ProfileCard";
import SocialIcons from "@/components/common/SocialIcons";
import personal from "@/data/personal";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowDown,
  Download,
  Sparkles,
} from "lucide-react";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "MongoDB",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white">
      {/* Aurora Background */}

      <AuroraBackground />

      {/* Extra Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      <Container>

        <div className="relative grid min-h-screen items-center gap-24 py-24 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative z-10 max-w-2xl"
          >

            {/* Welcome Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl"
            >
              <Sparkles
                size={16}
                className="text-cyan-300"
              />

              <span className="text-sm font-medium text-cyan-300">
                Welcome to my Portfolio
              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
              }}
              className="mt-8 text-6xl font-black leading-tight md:text-7xl lg:text-8xl"
            >

              Hi, I'm

              <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Divjot Singh
              </span>

            </motion.h1>

            {/* Subtitle */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-7 text-3xl font-semibold text-slate-200"
            >
              {personal.title}
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
              className="mt-8 max-w-xl text-lg leading-9 text-slate-400"
            >
              I build modern, responsive and scalable web applications
              with React, Next.js, TypeScript and Node.js while
              continuously exploring AI-powered solutions and writing
              clean, maintainable code.
            </motion.p>

            {/* CTA Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
              }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <Button
                href="#projects"
                className="group rounded-xl px-8 py-4"
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />

              </Button>

              <Button
                href="/resume.pdf"
                variant="secondary"
                className="group rounded-xl px-8 py-4"
              >

                Resume

                <Download
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-y-[2px]"
                />

              </Button>

            </motion.div>

            {/* Tech Stack */}
                        <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
              }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Social Icons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.25,
              }}
              className="mt-12"
            >
              <SocialIcons />
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.45,
              }}
              className="mt-16 grid grid-cols-3 gap-5"
            >
              {[
                {
                  number: "10+",
                  label: "Projects Built",
                },
                {
                  number: "8.5",
                  label: "Latest SGPA",
                },
                {
                  number: "2+",
                  label: "Years Learning",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/10"
                >
                  <h3 className="text-3xl font-black text-white">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="relative flex justify-center lg:justify-center"
          >

            {/* Glow */}

            <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[120px]" />

            {/* Floating Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-cyan-500/20"
            ></motion.div>

            {/* Profile Card */}

            <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="relative z-10"
          >
            <ProfileCard />
          </motion.div>

          </motion.div>

          {/* Scroll Indicator */}
                    <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.8,
              duration: 1,
            }}
            className="absolute bottom-8 left-[53%] z-50 hidden -translate-x-1/2 flex-col items-center lg:flex"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
              Scroll Down
            </p>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-xl"
            >
              <ArrowDown
                size={22}
                className="text-cyan-400"
              />
            </motion.div>
          </motion.div>

        </div>

      </Container>

    </section>
  );
}