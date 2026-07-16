"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills";
import Container from "@/components/common/Container";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#020617] py-32"
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
            My Skills
          </p>

          <h2 className="text-5xl font-bold text-white">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I enjoy building modern web applications using a wide range
            of frontend, backend and cloud technologies while constantly
            learning new tools to improve my development workflow.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((section, index) => (

            <motion.div
              key={section.category}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <h3 className="mb-8 text-2xl font-bold text-white">
                {section.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {section.items.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:bg-cyan-500 hover:text-white"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>
      </Container>
    </section>
  );
}