"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Section headline */}
          <h2
            className="text-3xl md:text-4xl font-bold text-[#FF6B4A] mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Exhaustion
          </h2>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 mb-12"
          >
            {/* Quote marks */}
            <div className="absolute top-4 left-4 text-6xl text-[#2A2A2A] leading-none">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-[#2A2A2A] leading-none rotate-180">"</div>
            
            <blockquote
              className="text-xl md:text-2xl text-[#FAFAFA] leading-relaxed mb-6 relative z-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I spend <span className="text-[#FF6B4A] font-semibold">3 hours</span> turning one podcast into posts 
              for <span className="text-[#FF6B4A] font-semibold">6 platforms</span>. Every. Single. Week.
            </blockquote>
            <cite className="text-[#A8A8A8] text-lg not-italic">
              — Sarah, coach & content creator
            </cite>
          </motion.div>

          {/* Closing statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#A8A8A8] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            You created content to <span className="text-[#FAFAFA] font-semibold">SHARE IDEAS</span>.
            <br />
            Not to become a <span className="text-[#FF6B4A]">copy-paste machine</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
