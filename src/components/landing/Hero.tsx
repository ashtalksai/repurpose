"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Upload, Link as LinkIcon, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F] to-[#1A1A1A]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? "#FF6B4A" : "#00D9FF",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Illustration - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-[45%] order-2 lg:order-1"
          >
            <div className="relative">
              <Image
                src="/images/hero-content-flow.png"
                alt="Content transformation illustration"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl"
                priority
              />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B4A]/20 to-[#00D9FF]/20 blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content - Right */}
          <div className="lg:w-[55%] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] mb-6">
                <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
                <span className="text-sm text-[#A8A8A8]">AI-Powered Content Transformation</span>
              </div>

              {/* Headline */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="gradient-text">ONE</span> upload.{" "}
                <span className="gradient-text">Dozens</span> of posts.{" "}
                <span className="text-[#00D9FF]">Every platform.</span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-lg md:text-xl text-[#A8A8A8] mb-8 max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Transform your video or audio into ready-to-post content for LinkedIn, 
                Twitter, Instagram, TikTok, and more. <span className="text-[#FAFAFA]">In seconds.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  size="lg"
                  className="bg-[#FF6B4A] hover:bg-[#FF8563] text-white text-lg px-8 py-6 glow-primary transition-all hover:scale-105"
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Your File
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2A2A2A] hover:border-[#00D9FF] text-[#FAFAFA] bg-transparent text-lg px-8 py-6 hover:bg-[#1A1A1A]"
                >
                  <LinkIcon className="mr-2 h-5 w-5" />
                  Paste YouTube URL
                </Button>
              </div>

              {/* Trust badge */}
              <p className="text-sm text-[#6B6B6B]">
                ✨ Free • No signup needed • Instant results
              </p>
            </motion.div>
          </div>
        </div>

        {/* Platform icons scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-[#6B6B6B] mb-6">Generate content for</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["LinkedIn", "Twitter/X", "Instagram", "TikTok", "YouTube", "Blog"].map((platform, i) => (
              <motion.span
                key={platform}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-[#A8A8A8] text-sm font-medium px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A]"
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
