"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const platforms = [
  { name: "LinkedIn", emoji: "💼" },
  { name: "Twitter/X", emoji: "𝕏" },
  { name: "Instagram", emoji: "📸" },
  { name: "TikTok", emoji: "🎵" },
  { name: "Facebook", emoji: "👤" },
  { name: "YouTube", emoji: "▶️" },
  { name: "Blog", emoji: "✍️" },
  { name: "Threads", emoji: "🧵" },
  { name: "Pinterest", emoji: "📌" },
  { name: "Email", emoji: "📧" },
];

export function Platforms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Every platform. <span className="gradient-text">Covered.</span>
          </h2>
          <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Generate optimized content for all the platforms where your audience lives.
          </p>
        </motion.div>

        {/* Platform grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group"
            >
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-[#00D9FF] transition-all cursor-pointer hover:shadow-lg hover:shadow-[#00D9FF]/10">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {platform.emoji}
                </span>
                <span className="text-sm font-medium text-[#A8A8A8] group-hover:text-[#FAFAFA] transition-colors">
                  {platform.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-[#6B6B6B] mt-8 text-sm"
        >
          More platforms coming soon • Request your favorite
        </motion.p>
      </div>
    </section>
  );
}
