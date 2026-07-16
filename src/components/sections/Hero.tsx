"use client";

import AuroraBackground from "@/components/effects/AuroraBackground";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import ProfileCard from "@/components/common/ProfileCard";
import SocialIcons from "@/components/common/SocialIcons";
import personal from "@/data/personal";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* Background Glow */}

      <AuroraBackground />

      <Container>

        <div className="relative grid min-h-screen items-center gap-20 py-32 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-2xl"
          >

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
                delay: 0.2,
              }}
              className="text-lg font-medium text-cyan-400"
            >
              👋 Hello, I'm
            </motion.p>

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
                delay: 0.3,
              }}
              className="mt-6 text-6xl font-black leading-none md:text-7xl lg:text-8xl"
            >
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                Divjot
              </span>

              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-500 bg-clip-text text-transparent">
                Singh
              </span>
            </motion.h1>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-8 text-3xl font-bold text-white"
            >
              {personal.title}
            </motion.h2>

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
              I build modern web applications with clean architecture,
              responsive interfaces and seamless user experiences using
              React, Next.js, Node.js and modern web technologies.
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
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                href="#projects"
                className="group"
              >
                View My Work

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <Button
                href="/resume.pdf"
                variant="secondary"
                className="group"
              >
                Resume

                <Download
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-y-[2px]"
                />
              </Button>

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
                delay: 1.1,
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
                delay: 1.3,
              }}
              className="mt-16 grid grid-cols-3 gap-6"
            >

              <div>

                <h3 className="text-3xl font-bold text-white">
                  10+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Projects Built
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  8.5
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Latest SGPA
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  2+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Years Learning
                </p>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="flex justify-center lg:justify-end"
          >

            <ProfileCard />

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
              delay: 1.6,
              duration: 1,
            }}
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex"
          >
            <p className="mb-3 text-sm tracking-widest text-slate-500 uppercase">
              Scroll
            </p>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
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