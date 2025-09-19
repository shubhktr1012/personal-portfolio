'use client'
import React, { useState, useRef, useEffect, useCallback } from "react"
import { karla, ibm } from "@/lib/fonts";
import ProjectCarousel from "./ProjectCarousel";
import useEmblaCarousel from "embla-carousel-react";

const webDevProjects = [
    {
        title: "Charlie Popcorn",
        description: "A movie recommendation app that curates personalized suggestions, tracks your watchlist, and helps you discover trending films with ease.",
        image: "/popcorn-ss.png",
        link: "https://popcorntime.shubh.services/",
        caseStudy: {
            problem: "Finding quality movie recommendations tailored to individual tastes is difficult with generic platforms.",
            audience: "Movie enthusiasts looking for personalized suggestions and an easy way to manage their watchlist.",
            solution: "Built a recommendation engine using collaborative filtering, integrated trending APIs for up-to-date suggestions, and designed a user-friendly interface for watchlist management.",
            result: "Increased user engagement and retention, with positive feedback on recommendation accuracy."
        }
    },
    {
        title: "Punjabi Rishtey",
        description: "A SaaS platform for product managers to streamline workflows, manage teams, and gain actionable insights for better product decisions.",
        image: "/pmf-ss.png",
        link: "https://productmarketfit.shubh.services/",
        caseStudy: {
            problem: "Product managers struggle to coordinate teams and track progress efficiently.",
            audience: "Product managers and team leads in tech startups and enterprises.",
            solution: "Developed workflow automation tools, implemented team management dashboards, and provided analytics for actionable insights.",
            result: "Reduced project delivery times and improved team collaboration."
        }
    },
    {
        title: "Advocate Portfolio Site",
        description: "A modern, responsive website for a law firm, featuring attorney profiles, service details, and an easy-to-use contact system.",
        image: "/advsite-ss.png",
        link: "https://advsite.shubh.services/",
        caseStudy: {
            problem: "Law firms need a professional online presence to attract and inform clients.",
            audience: "Law firms and independent attorneys seeking to showcase their expertise.",
            solution: "Designed a responsive, SEO-friendly website, integrated attorney profiles and service listings, and added a secure, user-friendly contact form.",
            result: "Improved client inquiries and enhanced firm credibility online."
        }
    },
];

const aiProjects = [
    {
        title: "Advocate Portfolio",
        description: "A modern, responsive website for a law firm, featuring attorney profiles, service details, and an easy-to-use contact system.",
        image: "/advsite-ss.png",
        link: "https://advsite.shubh.services/",
        caseStudy: {
            problem: "Law firms need a professional online presence to attract and inform clients.",
            audience: "Law firms and independent attorneys seeking to showcase their expertise.",
            solution: "Designed a responsive, SEO-friendly website, integrated attorney profiles and service listings, and added a secure, user-friendly contact form.",
            result: "Improved client inquiries and enhanced firm credibility online."
        }
    },
    {
        title: "Punjabi Rishtey",
        description: "A SaaS platform for product managers to streamline workflows, manage teams, and gain actionable insights for better product decisions.",
        image: "/pmf-ss.png",
        link: "https://productmarketfit.shubh.services/",
        caseStudy: {
            problem: "Product managers struggle to coordinate teams and track progress efficiently.",
            audience: "Product managers and team leads in tech startups and enterprises.",
            solution: "Developed workflow automation tools, implemented team management dashboards, and provided analytics for actionable insights.",
            result: "Reduced project delivery times and improved team collaboration."
        }
    },
    {
        title: "Charlie Popcorn",
        description: "A movie recommendation app that curates personalized suggestions, tracks your watchlist, and helps you discover trending films with ease.",
        image: "/popcorn-ss.png",
        link: "https://popcorntime.shubh.services/",
        caseStudy: {
            problem: "Finding quality movie recommendations tailored to individual tastes is difficult with generic platforms.",
            audience: "Movie enthusiasts looking for personalized suggestions and an easy way to manage their watchlist.",
            solution: "Built a recommendation engine using collaborative filtering, integrated trending APIs for up-to-date suggestions, and designed a user-friendly interface for watchlist management.",
            result: "Increased user engagement and retention, with positive feedback on recommendation accuracy."
        }
    },
];

export default function WorkSection() {
    const [activeTab, setActiveTab] = useState('Web Dev');
    const webDevRef = useRef<HTMLHeadingElement>(null);
    const aiAutomationRef = useRef<HTMLHeadingElement>(null);
    const [bgStyle, setBgStyle] = useState({ left: '0px', width: '0px' });

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center', containScroll: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const projects = activeTab === 'Web Dev' ? webDevProjects : aiProjects;

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
            emblaApi.scrollTo(0, true);
            setSelectedIndex(0);
        }
    }, [activeTab, emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (activeTab === 'Web Dev' && webDevRef.current) {
            setBgStyle({
                left: `${webDevRef.current.offsetLeft}px`,
                width: `${webDevRef.current.offsetWidth}px`,
            });
        } else if (activeTab === 'AI Automation' && aiAutomationRef.current) {
            setBgStyle({
                left: `${aiAutomationRef.current.offsetLeft}px`,
                width: `${aiAutomationRef.current.offsetWidth}px`,
            });
        }
    }, [activeTab]);

    return (
        <div className="py-10 max-w-full md:hidden flex flex-col justify-center border-b border-t border-gray-400/20">
            <div className="px-4">
                <h1 className={`font-bold text-7xl text-black tracking-tighter ${karla.className}`}>WORK & <br /> SERVICES</h1>
            </div>
            <div className="pt-20 w-full">
                <div className="px-4 w-full flex justify-between items-center">
                    <div>
                        <h1 className={`font-medium sub-heading ${karla.className}`}>work.</h1>
                    </div>
                    <div className="border-2 rounded-full border-gray-400/20 bg-white p-2">
                        <div className={`relative flex items-start gap-x-2`}>
                            {/* Moving white background */}
                            <div 
                                className={`absolute rounded-full top-0 h-full bg-black transition-all duration-600 ease-in-out`}
                                style={bgStyle}
                            ></div>
                            <h2 
                                ref={webDevRef}
                                onClick={() => setActiveTab('Web Dev')}
                                className={`px-3 sub-heading cursor-pointer z-10 transition-colors duration-300 delay-150 ${karla.className} ${activeTab === 'Web Dev' ? 'text-white' : 'text-black'}`}
                            >
                                Web Dev
                            </h2>
                            <h2 
                                ref={aiAutomationRef}
                                onClick={() => setActiveTab('AI Automation')}
                                className={`px-3 sub-heading cursor-pointer z-10 transition-colors duration-300 delay-150 ${karla.className} ${activeTab === 'AI Automation' ? 'text-white' : 'text-black'}`}
                            >
                                AI Automation
                            </h2>
                        </div>
                    </div>  
                </div>
            </div>
            {/* Project Carousel */}
            <div className="w-full pt-4">
                <ProjectCarousel emblaRef={emblaRef} projects={projects} selectedIndex={selectedIndex} />
            </div>
            <div className="w-full flex justify-center items-center gap-x-4 mt-8.5">
                <button 
                    onClick={scrollPrev} 
                    className="w-10 h-10 flex items-center justify-center bg-black rounded-full text-white"
                    aria-label="Previous"
                >
                    &#8592;
                </button>
                <span className="text-lg font-semibold">{selectedIndex + 1} / {projects.length}</span>
                <button 
                    onClick={scrollNext} 
                    className="w-10 h-10 flex items-center justify-center bg-black rounded-full text-white"
                    aria-label="Next"
                >
                    &#8594;
                </button>
            </div>     
        </div>
        
    );
}