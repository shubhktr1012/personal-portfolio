'use client'
import React from "react";
import { ibm , karla} from "../lib/fonts";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function AboutSection() {
    return (
        <div className="py-8 px-4 max-w-full md:hidden flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-8">
                <div className={`font-medium sub-heading ${karla.className}`}>about me.</div>
            </div>
            
            <div className="w-full px-6 flex flex-col items-center justify-center mb-6">
                <div
                    className="w-80 h-80 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
                >
                    {/* Placeholder image */}
                    <img
                        src="/michael.png"
                        alt="Profile Placeholder"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className={`py-6 px-3 font-bold text-center heading ${ibm.className}`}>
                    I'm a 
                    <br /> 
                    <TypewriterEffect 
                        phrases={[
                            "Full Stack Developer",
                            "Product Prototyper",
                            "AI Automation Professional"
                        ]}
                    />.
                </div>
            </div>

            <div className="w-full px-6 flex flex-col gap-y-6">
                <div className={`${karla.className} flex flex-col gap-y-1`}>
                    <div className={`body-text font-semibold`}>
                        What I do?
                    </div>
                    <div className={`body-text`}>
                    I help brands find clarity and express it through strong, thoughtful design.
                    </div>
                </div>
                <div className={`${karla.className} flex flex-col gap-y-1`}>
                    <div className={`body-text font-semibold`}>
                        My approach
                    </div>
                    <div className={`body-text`}>
                    I believe good design starts with empathy. I ask questions, listen closely, and build brands that feel as good as they look, honest, beautiful, and built to last.
                    </div>
                </div>
                <div className={`${karla.className} flex flex-col gap-y-1`}>
                    <div className={`body-text font-semibold`}>
                        My Background
                    </div>
                    <div className={`body-text`}>
                    Originally from CDMX, I’ve been designing identities for 7+ years, working with startups, restaurants, hoteliers, and creative founders across Mexico and beyond.
                    </div>
                </div>
            </div>
            <div  className={`mt-6 p-2 font-regular body-text w-50 h-12 flex items-center justify-center bg-[#171717] text-white ${karla.className}`}>
            <a
                href="/resume.pdf" // The path to your resume in the public folder
                target="_blank" // This opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for new tabs // Example styling with Tailwind CSS
            >
                View My Full Resume
            </a>
            </div>
        </div>
    )
}