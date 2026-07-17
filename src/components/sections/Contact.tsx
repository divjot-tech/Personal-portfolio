"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "@/components/common/Container";
import contact from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#030712] py-32"
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
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white">
            {contact.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500 hover:bg-white/10"
            >
              <Mail className="text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-slate-400">{contact.email}</p>
              </div>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500 hover:bg-white/10"
            >
              <FaGithub className="text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">GitHub</h3>
                <p className="text-slate-400">divjot-tech</p>
              </div>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500 hover:bg-white/10"
            >
              <FaLinkedin className="text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">LinkedIn</h3>
                <p className="text-slate-400">Connect with me</p>
              </div>
            </a>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <MapPin className="text-cyan-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-slate-400">{contact.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition hover:bg-cyan-400"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}