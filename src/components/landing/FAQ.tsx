"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What formats do you support?",
    answer:
      "We support YouTube URLs, audio files (MP3, M4A, WAV), video files (MP4, MOV), and direct text/transcript input. If you have audio or video, we'll transcribe it automatically.",
  },
  {
    question: "How accurate is the transcription?",
    answer:
      "We use OpenAI's Whisper model which achieves 95%+ accuracy for clear audio. Background noise may reduce accuracy, but you can always paste your own transcript for perfect results.",
  },
  {
    question: "Can I edit the generated posts?",
    answer:
      "Absolutely! All generated content is fully editable. Copy it, tweak it, make it yours. The AI gives you a strong starting point — you add the final polish.",
  },
  {
    question: "Do you store my content?",
    answer:
      "No. We process your content in real-time and don't store your audio, video, or generated posts after your session ends. Your content stays yours.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "LinkedIn, Twitter/X, Instagram (captions + carousel ideas), TikTok (scripts), Facebook, YouTube descriptions, blog posts, email newsletters, Threads, and Pinterest. More coming soon!",
  },
  {
    question: "How long does it take?",
    answer:
      "Most content is processed in under 60 seconds. Longer videos (30+ minutes) may take 2-3 minutes for transcription. You'll see a progress indicator throughout.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes! No contracts, no commitments. Cancel your subscription anytime from your account settings. You'll keep access until the end of your billing period.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 7-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 7 days of purchase for a full refund — no questions asked.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div className="max-w-[800px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently <span className="gradient-text">asked</span>
          </h2>
          <p className="text-lg text-[#A8A8A8]" style={{ fontFamily: "var(--font-body)" }}>
            Got questions? We've got answers.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-6 data-[state=open]:border-[#FF6B4A]/30"
              >
                <AccordionTrigger
                  className="text-left text-[#FAFAFA] hover:text-[#FF6B4A] transition-colors py-5 hover:no-underline"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-[#A8A8A8] pb-5 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[#6B6B6B] mt-8 text-sm"
        >
          Still have questions?{" "}
          <a href="mailto:hello@repurpose.ai" className="text-[#00D9FF] hover:underline">
            Contact us
          </a>
        </motion.p>
      </div>
    </section>
  );
}
