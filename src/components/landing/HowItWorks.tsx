"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, Copy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload your content",
    description: "YouTube URL, audio file (MP3/M4A/WAV), video (MP4), or paste a transcript directly.",
    color: "#FF6B4A",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI processes it",
    description: "Whisper transcribes with 95%+ accuracy, Claude generates platform-optimized posts.",
    color: "#00D9FF",
  },
  {
    number: "03",
    icon: Copy,
    title: "Copy & post",
    description: "Download as text files or copy directly to clipboard. Ready to publish anywhere.",
    color: "#FF6B4A",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#1A1A1A]" ref={ref}>
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
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Three simple steps. Under 60 seconds. Zero learning curve.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B4A] via-[#00D9FF] to-[#FF6B4A] -translate-y-1/2 opacity-30" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-2xl p-8 h-full hover:border-[#3A3A3A] transition-colors">
                    {/* Number badge */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                      style={{ backgroundColor: step.color }}
                    >
                      <span
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>

                    {/* Content */}
                    <h3
                      className="text-xl font-bold text-[#FAFAFA] mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#A8A8A8]" style={{ fontFamily: "var(--font-body)" }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Connector dot for desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-[#00D9FF] -translate-y-1/2 z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
