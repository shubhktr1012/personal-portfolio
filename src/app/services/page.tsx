'use client'
import React from "react"
import { karla, ibm } from "@/lib/fonts";
import WorkSection from "@/components/WorkSection";
import OtherServicesSection from "@/components/OtherServicesSection";

export default function Services() {
    return (
        <div className="min-h-screen w-full">
            <WorkSection />
            <OtherServicesSection />
        
        </div>
    );
}