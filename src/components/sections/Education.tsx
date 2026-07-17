"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, School, Award } from "lucide-react";

import Container from "@/components/common/Container";
import education from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-[#020817] py-32"
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
            Education
          </p>

          <h2 className="text-5xl font-bold text-white">
            Academic Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My educational background that built the foundation of my
            technical knowledge and software development journey.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}

          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative flex gap-8"
              >
                {/* Timeline Dot */}

                <div className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 md:flex">
                  <GraduationCap
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-lg font-medium text-cyan-400">
                        {item.specialization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                      <Calendar size={16} />
                      {item.duration}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <School
                        size={22}
                        className="mt-1 text-cyan-400"
                      />

                      <div>
                        <p className="font-semibold text-white">
                          Institution
                        </p>

                        <p className="mt-1 text-slate-400">
                          {item.institution}
                        </p>

                        {item.university && (
                          <p className="mt-1 text-sm text-slate-500">
                            {item.university}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award
                        size={22}
                        className="mt-1 text-cyan-400"
                      />

                      <div>
                        <p className="font-semibold text-white">
                          Performance
                        </p>

                        <p className="mt-1 text-slate-400">
                          {item.grade || "—"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-8 leading-8 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}