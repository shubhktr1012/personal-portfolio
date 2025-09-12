import React from "react";
import { ibm } from "@/lib/fonts";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className={`min-h-screen w-full`}>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
