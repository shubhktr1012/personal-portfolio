'use client'
import React from "react";
import { ibm } from "../lib/fonts";
import ServiceCard from "./ServicesCard"; // The filename is ServicesCard.tsx

const services = [
    {
      title: "WEB DEVELOPMENT",
      description: "Building clean, fast, and responsive websites that look great on any device.",
      tech: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "AI & AUTOMATION",
      description: "Creating intelligent tools to automate tedious tasks and bring clarity to your data.",
      tech: ["Python", "Gemini", "LangChain"],
    },
    {
      title: "PRODUCT PROTOTYPING",
      description: "Turning ideas into working prototypes for validation and investment.",
      tech: ["Framer", "Supabase", "Vercel"],
    },
];

export default function ServicesSection() {
    return (
        <div className="py-8 px-4 max-w-full md:hidden flex flex-col items-start">
            <div className="flex items-center justify-between w-full mb-8">
                <div className="font-medium sub-heading ">services.</div>
                <button className={`bg-gray-300 w-25 h-12 font-regular flex items-center justify-center ${ibm.className}`}>Explore</button>
            </div>

            {/* A simple container for our static cards */}
            <div className="px-6 w-full flex flex-col items-center space-y-4">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  service={service} 
                />
              ))}
            </div>
        </div>
    );
}
