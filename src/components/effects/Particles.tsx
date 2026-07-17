"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: Math.random() * 5 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 8 + 8,
  delay: Math.random() * 5,
}));

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.15, 0.6, 0.15],
            y: [-25, 25, -25],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-400/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  );
}