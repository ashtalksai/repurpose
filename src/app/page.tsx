import {
  Navigation,
  Hero,
  Problem,
  Solution,
  Features,
  HowItWorks,
  Platforms,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Platforms />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
