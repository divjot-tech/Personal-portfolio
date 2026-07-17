"use client";

import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
  Trophy,
  Sparkles,
} from "lucide-react";

import Container from "@/components/common/Container";
import about from "@/data/about";

export default function About() {
  const cards = [
    {
      icon: User,
      title: "Full Stack Developer",
      description: "Building fast, responsive and scalable web applications with modern technologies.",
    },
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "B.Tech CSE undergraduate focused on software engineering and practical development.",
    },
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Strengthening logical thinking through Data Structures & Algorithms every day.",
    },
    {
      icon: Trophy,
      title: "Career Goal",
      description: "Preparing for software engineering internships while building impactful projects.",
    },
  ];

  const stats = [
    {
      value: about.projects,
      label: "Projects",
    },
    {
      value: about.experience,
      label: "Years Learning",
    },
    {
      value: about.cgpa,
      label: "Latest SGPA",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#030712]" />

      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                {about.title}
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
              {about.subtitle}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-400">
              <p>{about.description1}</p>
              <p>{about.description2}</p>
              <p>{about.description3}</p>
            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h3 className="text-4xl font-bold text-cyan-400">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  {/* Glow */}

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={30} />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {card.title}
                    </h3>

                    <p className="leading-7 text-slate-400">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}