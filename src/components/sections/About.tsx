"use client";

import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
  Trophy,
} from "lucide-react";

import Container from "@/components/common/Container";
import about from "@/data/about";

export default function About() {
  const cards = [
    {
      icon: User,
      title: "Full Stack Developer",
      description: "Building responsive and scalable web applications.",
    },
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "B.Tech CSE | GGSIPU",
    },
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Practicing Data Structures & Algorithms every day.",
    },
    {
      icon: Trophy,
      title: "Career Goal",
      description: "Preparing for Software Engineering internships.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-[#030712]"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-cyan-400 font-semibold tracking-widest uppercase">
              About Me
            </p>

            <h2 className="mb-6 text-5xl font-bold text-white">
              {about.subtitle}
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-400">
              {about.description1}
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-400">
              {about.description2}
            </p>

            <p className="text-lg leading-8 text-slate-400">
              {about.description3}
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  {about.projects}
                </h3>

                <p className="mt-2 text-slate-400">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  {about.experience}
                </h3>

                <p className="mt-2 text-slate-400">
                  Years Learning
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  {about.cgpa}
                </h3>

                <p className="mt-2 text-slate-400">
                  Latest SGPA
                </p>
              </div>

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
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {card.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}