import React from "react";
import { ibm } from "@/lib/fonts";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FooterParallax from "@/components/FooterParallax";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={`min-h-screen w-full`}>
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
