"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";

import Container from "@/components/common/Container";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#030712] py-32"
    >
      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-5xl font-bold text-white">
            Things I've Built
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of projects that demonstrate my frontend,
            backend and full stack development skills.
          </p>
        </motion.div>

        <div className="space-y-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="grid lg:grid-cols-2">

                {/* Left */}

                <div className="flex items-center justify-center bg-slate-900 p-10">

                  <div className="flex h-72 w-full items-center justify-center rounded-2xl border border-dashed border-slate-700 text-center">

                    <div>

                      <p className="text-lg text-slate-500">
                        Project Screenshot
                      </p>

                      <p className="mt-2 text-sm text-slate-600">
                        {project.image}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Right */}

                <div className="p-10">

                  {project.featured && (

                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                      Featured Project
                    </span>

                  )}

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-6 leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-10 flex flex-wrap gap-4">

                    <a
                      href={project.github || "#"}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
                    >
                      <GitBranch size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.live || "#"}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                      Live Demo

                      <ArrowUpRight size={18} />
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </Container>
    </section>
  );
}