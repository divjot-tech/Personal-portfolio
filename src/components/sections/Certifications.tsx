"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

import Container from "@/components/common/Container";
import certifications from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#030712] py-32"
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
            Certifications
          </p>

          <h2 className="text-5xl font-bold text-white">
            Certifications & Training
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Professional certifications and learning experiences that
            have strengthened my knowledge in AI, cloud technologies,
            and software development.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Certificate Image */}

              <div className="relative h-72 overflow-hidden border-b border-white/10 bg-slate-900">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-contain bg-slate-900 p-4 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />

                {/* Verified Badge */}

                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-md">
                  <Award
                    size={16}
                    className="text-cyan-300"
                  />

                  <span className="text-xs font-semibold text-cyan-300">
                    Verified
                  </span>
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                    {certificate.issuer}
                  </span>

                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar size={16} />
                    {certificate.date}
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {certificate.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {certificate.description}
                </p>

                {certificate.credential && (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
                  >
                    View Certificate

                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}