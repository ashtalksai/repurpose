"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const platforms = [
  "LinkedIn",
  "Twitter",
  "Instagram",
  "TikTok",
  "Facebook",
  "YouTube",
  "Blog",
  "Email",
  "Threads",
  "Pinterest",
];

export function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-[#1A1A1A]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative p-8 bg-[#0F0F0F] border border-[#2A2A2A] rounded-2xl">
              {/* Input */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF6B4A] to-[#FF8563] flex items-center justify-center shadow-lg glow-primary">
                  <span className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>1</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8 text-[#00D9FF] rotate-90" />
                </motion.div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-5 gap-3">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                    className="aspect-square rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group hover:border-[#00D9FF] transition-colors"
                  >
                    <span className="text-xs text-[#6B6B6B] group-hover:text-[#00D9FF] transition-colors text-center px-1">
                      {platform.slice(0, 3)}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Infinity symbol */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#00D9FF] flex items-center justify-center glow-secondary">
                <span className="text-2xl font-bold text-[#0F0F0F]">∞</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="gradient-text">Upload once.</span>
              <br />
              <span className="text-[#FAFAFA]">Post everywhere.</span>
            </h2>

            <p
              className="text-lg text-[#A8A8A8] mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Drop in your video, podcast, or audio file. Our AI instantly transcribes it and 
              generates <span className="text-[#FAFAFA] font-semibold">12+ unique posts</span> optimized 
              for each platform's format, character limits, and best practices.
            </p>

            <div className="space-y-4">
              {[
                "Podcast episode → LinkedIn articles, Twitter threads, IG carousels",
                "YouTube video → TikTok scripts, blog posts, email newsletters",
                "Voice memo → Professional posts for every platform",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF6B4A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B4A]" />
                  </div>
                  <p className="text-[#A8A8A8]">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
