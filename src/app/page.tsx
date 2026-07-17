"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const section = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <motion.div
          variants={section}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          variants={section}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={section}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          variants={section}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          variants={section}
          transition={{ duration: 0.6 }}
        >
          <Education />
        </motion.div>

        <motion.div
          variants={section}
          transition={{ duration: 0.6 }}
        >
          <Certifications />
        </motion.div>

        <motion.div
          variants={section}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.div>

        <Footer />
      </motion.main>
    </>
  );
}