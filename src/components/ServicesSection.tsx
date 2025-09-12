'use client'
import React from "react";
import { ibm, karla } from "../lib/fonts";
import ServiceCard from "./ServicesCard"; // The filename is ServicesCard.tsx


const services = [
    {
      title: "WEB DEVELOPMENT",
      description: "Building clean, fast, and responsive websites that look great on any device.",
      logos: [
        { src:  "/react.svg", name: "React"},
        { src:  "/nextjs.svg", name: "Next.js"},
        { src:  "/framer.svg", name: "Framer"},
      ],
    },
    {
      title: "AI & AUTOMATION",
      description: "Creating intelligent tools to automate tedious tasks and bring clarity to your data.",
      logos: [
        { src:  "/python.svg", name: "Python"},
        { src:  "/n8n.svg", name: "n8n"},
        { src:  "/graphql.svg", name: "GraphQL"},
      ],
    },
    {
      title: "PRODUCT PROTOTYPING",
      description: "Turning ideas into working prototypes for validation and investment.",
      logos: [
        { src:  "/framer.svg", name: "Framer"},
        { src:  "/supabase.svg", name: "SupaBase"},
        { src:  "/vercel.svg", name: "Vercel"},
      ],
    },
];

export default function ServicesSection() {
    return (
        <div className="pt-8 pb-10 px-4 max-w-full md:hidden flex flex-col items-start border-b border-gray-400/20">
            <div className="flex items-center justify-between w-full mb-8">
                <div className={`font-medium sub-heading ${karla.className}`}>services.</div>
                <button className={`bg-gray-200 w-25 h-12 font-regular flex items-center justify-center ${ibm.className}`}>Explore</button>
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
