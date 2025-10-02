'use client'
import React, {useCallback, useEffect, useState} from "react"
import ProjectCard from "./ProjectCard";
import useEmblaCarousel from 'embla-carousel-react'

type CaseStudy = {
    problem: string;
    audience: string;
    solution: string;
    result: string;
};

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    caseStudy: CaseStudy;
}

interface ProjectCarouselProps {
    emblaRef: (node: HTMLDivElement | null) => void;
    projects: Project[];
    selectedIndex: number;
}

export default function ProjectCarousel({ emblaRef, projects, selectedIndex }: ProjectCarouselProps) {

    return (
        <div className="w-full"> 
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {projects.map((project, index) => (
                                <div key={index} className={`flex-[0_0_95%] md:flex-[0_0_78%] lg:flex-[0_0_50%] min-w-0 transition-all duration-300 ease-in-out ${index === selectedIndex ? 'opacity-100 scale-100' : 'opacity-100 scale-90'}`}>
                                    <ProjectCard project={project} />
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    );
}