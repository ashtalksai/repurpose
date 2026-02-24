"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/10 via-[#00D9FF]/10 to-[#FF6B4A]/10 blur-3xl -z-10" />

          {/* Content */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to save{" "}
            <span className="gradient-text">10 hours a week?</span>
          </h2>
          
          <p
            className="text-lg md:text-xl text-[#A8A8A8] mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start transforming your content today.{" "}
            <span className="text-[#FAFAFA]">Free, no signup required.</span>
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/app">
              <Button
                size="lg"
                className="bg-[#FF6B4A] hover:bg-[#FF8563] text-white text-lg md:text-xl px-10 md:px-14 py-7 md:py-8 glow-primary transition-all hover:scale-105 group"
              >
                <Upload className="mr-3 h-5 w-5 md:h-6 md:w-6" />
                Upload Your First File
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B4A] to-[#00D9FF] border-2 border-[#0F0F0F] flex items-center justify-center"
                  style={{ zIndex: 5 - i }}
                >
                  <span className="text-xs text-white font-bold">
                    {["S", "M", "J", "A", "K"][i]}
                  </span>
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border-2 border-[#2A2A2A] flex items-center justify-center">
                <span className="text-xs text-[#6B6B6B]">+</span>
              </div>
            </div>

            <p className="text-[#6B6B6B] text-sm">
              Trusted by <span className="text-[#FAFAFA]">1,200+</span> creators
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
