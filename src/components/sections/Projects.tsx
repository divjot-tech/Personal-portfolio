"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GitBranch, ArrowUpRight } from "lucide-react";

import Container from "@/components/common/Container";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-5xl font-bold text-white">
            Things I've Built
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of projects showcasing my frontend, backend and
            full-stack development experience with modern technologies.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="relative z-10 space-y-16">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
                </div>

                <div
                  className={`relative grid items-center lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Screenshot */}

                  <div className="p-8">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl">
                      {/* Browser Header */}

                      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1F2937] px-5 py-3">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />

                        <div className="ml-5 truncate rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs text-slate-400">
                          {project.live.replace("https://", "")}
                        </div>
                      </div>

                      <div className="group/image relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1400}
                          height={900}
                          priority={index === 0}
                          className="h-auto w-full transition-transform duration-700 group-hover/image:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-10">
                    {project.featured && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                        ⭐ Featured Project
                      </span>
                    )}

                    <div className="mt-6">
                      <h3 className="text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-6 leading-8 text-slate-400">
                      {project.description}
                    </p>

                    {/* Tech Stack */}

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{
                            scale: 1.08,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="cursor-default rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:bg-cyan-500 hover:text-white"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white/10"
                      >
                        <GitBranch size={18} />
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                      >
                        Live Demo
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}