"use client";

import Link from "next/link";
import { Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "mailto:hello@repurpose.ai" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/repurpose_ai", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/repurpose-ai", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@repurpose-ai", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B4A] to-[#FF8563] flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>R</span>
              </div>
              <span className="text-xl font-bold text-[#FAFAFA]" style={{ fontFamily: "var(--font-display)" }}>
                Repurpose
              </span>
            </Link>
            <p className="text-sm text-[#6B6B6B] mb-4 max-w-xs">
              Transform one piece of content into dozens of platform-optimized posts. In seconds.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#6B6B6B] hover:text-[#FAFAFA] hover:border-[#3A3A3A] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6B6B6B] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6B6B6B] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6B6B6B] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B6B6B]">
            © 2026 Repurpose. All rights reserved.
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Built by{" "}
            <a
              href="https://chimestream.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D9FF] hover:underline"
            >
              ChimeStream
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
