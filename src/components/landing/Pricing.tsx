"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out",
    features: [
      "3 uploads per month",
      "All platform outputs",
      "Basic tone control",
      "Copy to clipboard",
    ],
    cta: "Start Free",
    popular: false,
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious creators",
    features: [
      "Unlimited uploads",
      "Priority AI processing",
      "Advanced tone controls",
      "Download as files",
      "Hashtag suggestions",
      "Email support",
    ],
    cta: "Get Pro",
    popular: true,
    variant: "default" as const,
  },
  {
    name: "Team",
    price: "$99",
    period: "/month",
    description: "For agencies & teams",
    features: [
      "Everything in Pro",
      "5 team seats",
      "Shared content library",
      "Custom templates",
      "API access",
      "Priority support",
    ],
    cta: "Contact Sales",
    popular: false,
    variant: "secondary" as const,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#1A1A1A]" ref={ref}>
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
            Simple, <span className="gradient-text">honest</span> pricing
          </h2>
          <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FF8563] text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 border transition-all ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#FF6B4A]/10 to-[#0F0F0F] border-[#FF6B4A]/50 glow-primary"
                    : "bg-[#0F0F0F] border-[#2A2A2A] hover:border-[#3A3A3A]"
                }`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <h3
                    className="text-xl font-bold text-[#FAFAFA] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#6B6B6B]">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className="text-4xl md:text-5xl font-bold text-[#FAFAFA]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#6B6B6B]">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.popular ? "text-[#FF6B4A]" : "text-[#00D9FF]"
                        }`}
                      />
                      <span className="text-[#A8A8A8] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/signup">
                  <Button
                    className={`w-full py-6 text-base font-semibold ${
                      plan.popular
                        ? "bg-[#FF6B4A] hover:bg-[#FF8563] text-white"
                        : plan.variant === "secondary"
                        ? "bg-transparent border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF]/10"
                        : "bg-transparent border-2 border-[#2A2A2A] text-[#FAFAFA] hover:border-[#3A3A3A] hover:bg-[#1A1A1A]"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#6B6B6B] mt-8 text-sm"
        >
          💳 7-day money-back guarantee • No questions asked
        </motion.p>
      </div>
    </section>
  );
}
