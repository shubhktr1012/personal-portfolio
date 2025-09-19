'use client'
import React, { useState } from "react"
import {karla, ibm} from "../lib/fonts"
import Image from "next/image";

type CaseStudy = {
    problem: string;
    audience: string;
    solution: string;
    result: string;
};

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
    caseStudy: CaseStudy;
}

type ProjectCardProps = {
    project: Project;
}

const caseStudySections = [
    { title: 'The Problem', key: 'problem' as keyof CaseStudy },
    { title: 'The Audience', key: 'audience' as keyof CaseStudy },
    { title: 'The Solution & Tech Stack', key: 'solution' as keyof CaseStudy },
    { title: 'The Result', key: 'result' as keyof CaseStudy },
];

export default function ProjectCard({ project }: ProjectCardProps) {
    const [openSection, setOpenSection] = useState<keyof CaseStudy | null>(null);

    const toggleSection = (section: keyof CaseStudy) => {
        setOpenSection(openSection === section ? null : section);
    };
    return (
        <div
            className="w-full min-h-110 h-content bg-black text-white flex flex-col justify-between overflow-hidden"
        >
            <div className="relative w-full h-full flex flex-col items-start gap-y-5">
                <div className="w-full h-[60%] bg-gray-300 ">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                />
                </div>
                
                {/* <div className="w-full border-t border-white/50">
                </div> */}

                <div className="w-full py-2 px-3.5 h-full flex flex-col items-start gap-y-3">
                    <div className="w-full flex items-start justify-between">
                        <div className={`font-medium heading ${karla.className}`}>
                        {project.title}
                        </div>
                        <div>
                            <a href={project.link}>
                                <Image src="/github.svg" alt="GitHub" width={32} height={32} />
                            </a>
                        </div>
                    </div>
                    <div className={`text-gray-400 body-text ${karla.className}`}>
                        {project.description}
                    </div>
                </div>
                <div className="py-2 px-3.5 w-full">
                    {caseStudySections.map((section, index) => (
                        <div
                            key={index}
                            className={index !== caseStudySections.length - 1 ? "border-b border-white/20" : ""}
                        >
                            <button
                                onClick={() => toggleSection(section.key)}
                                className="w-full flex justify-between items-center py-3 text-left"
                            >
                                <span className={`body-text ${ibm.className}`}>{section.title}</span>
                                <span>{openSection === section.key ? '-' : '+'}</span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === section.key ? 'max-h-96' : 'max-h-0'}`}>
                                <div className={`pb-3 text-gray-400 body-text ${karla.className}`}>
                                    <p className="pt-1">{project.caseStudy[section.key]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}