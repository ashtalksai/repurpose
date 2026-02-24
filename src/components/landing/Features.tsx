"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  LayoutGrid, 
  Sparkles, 
  Zap, 
  Ruler, 
  Hash, 
  SlidersHorizontal 
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Multi-Platform Output",
    description: "LinkedIn, Twitter, Instagram, TikTok, blog, email — all from one upload.",
    color: "#FF6B4A",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Optimization",
    description: "Claude analyzes your content and crafts human-sounding copy that converts.",
    color: "#00D9FF",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "All posts generated in under 60 seconds. No waiting, no delays.",
    color: "#FF6B4A",
  },
  {
    icon: Ruler,
    title: "Character Limits Handled",
    description: "Auto-split into threads, respect platform limits. No manual trimming.",
    color: "#00D9FF",
  },
  {
    icon: Hash,
    title: "SEO & Hashtags",
    description: "Automatic hashtag suggestions and keyword extraction for discoverability.",
    color: "#FF6B4A",
  },
  {
    icon: SlidersHorizontal,
    title: "Tone Control",
    description: "Choose casual, professional, or educational tone for your brand voice.",
    color: "#00D9FF",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 md:py-32 bg-[#0F0F0F]" ref={ref}>
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
            Everything you need to{" "}
            <span className="gradient-text">repurpose smarter</span>
          </h2>
          <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Powerful features designed to save you hours every week while maximizing your content's reach.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group h-full">
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <CardTitle
                      className="text-xl text-[#FAFAFA]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#A8A8A8]" style={{ fontFamily: "var(--font-body)" }}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
