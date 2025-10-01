'use client'
import React, { useState, useRef, useEffect, useCallback } from "react"
import { karla, ibm } from "@/lib/fonts";
import ProjectCarousel from "./ProjectCarousel";
import useEmblaCarousel from "embla-carousel-react";

const webDevProjects = [
    {
        title: "Charlie Popcorn",
        description: "Charlie Popcorn is a vibrant single-page website for a gourmet popcorn brand, designed to showcase its unique flavors and simplify the ordering process for customers.",
        image: "/popcorn-ss.png",
        link: "https://github.com/shubhktr1012/charlie-popcorn.git",
        caseStudy: {
            problem: "A local popcorn business lacked an online presence, making it difficult for customers to discover their products, view flavors, or place orders. This absence of a digital storefront was hindering the brand's reach and growth.",
            audience: "The site targets local snack lovers and potential new customers searching for unique, high-quality popcorn. It also serves individuals and businesses interested in bulk orders for events or corporate gifts.",
            solution: "A modern, responsive single-page application was developed to elegantly present the brand. The tech stack includes React and TypeScript for a robust UI, with Tailwind CSS for styling. Vite was used for an optimized and fast development experience.",
            result: "The result is a professional, user-friendly website that elevates the Charlie Popcorn brand. It now acts as a central hub for product information and ordering, boosting customer engagement and providing a scalable platform for future growth."
        }
    },
    {
        title: "Punjabi Rishtey",
        description: "A SaaS platform for product managers to streamline workflows, manage teams, and gain actionable insights for better product decisions.",
        image: "/pmf-ss.png",
        link: "https://punjabi-rishtey.com",
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
        link: "https://github.com/shubhktr1012/adv-site-1.git",
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
        title: "unclut.ai",
        description: "Unclut is a command-line tool that automates the tedious process of unsubscribing from mailing lists and bulk-deleting unwanted promotional emails from your Gmail inbox, helping you reclaim a clean, focused workspace.",
        image: "/unclut-ai.png",
        link: "https://github.com/shubhktr1012/unclut",
        caseStudy: {
            problem: "Manually unsubscribing from and deleting promotional emails is a tedious, time-consuming chore. A cluttered inbox buries important messages, drains productivity, and creates significant digital frustration for millions of users.",
            audience: "This tool is for any Gmail user who feels overwhelmed by inbox clutter, including busy professionals, tech-savvy power users, and anyone seeking a fast, automated way to declutter their digital life.",
            solution: "Unclut is a command-line tool that automates inbox cleanup. It identifies promotional senders, then unsubscribes and bulk-deletes their emails based on simple user input. Tech Stack: Python, Gmail API, Google OAuth, BeautifulSoup.",
            result: "The tool successfully turns a multi-hour manual cleanup task into a simple, five-minute automated process. It delivers an immediate and measurable reduction in inbox clutter, saving users significant time and giving them renewed control over their digital workspace."
        }
    },
    {
        title: "RAG Document Engine",
        description: "An intelligent full-stack document analysis tool that uses a Retrieval-Augmented Generation (RAG) pipeline to answer questions about user-uploaded documents. The system features a modern 3-tier architecture, ensuring accurate, context-aware AI responses grounded in the source text.",
        image: "/cv-ai-service-1.png",
        link: "https://github.com/shubhktr1012/rag-document-engine.git",
        caseStudy: {
            problem: "Professionals often waste significant time sifting through lengthy documents like CVs, research papers, or legal contracts. Traditional searches lack contextual understanding, causing users to miss relevant information, which leads to decreased productivity and potential oversights.",
            audience: "This application is designed for anyone needing rapid, intelligent insights from text-based documents. It serves recruiters screening CVs, researchers analyzing academic papers, and legal professionals reviewing extensive contracts, among other users who need to find information instantly.",
            solution: "The solution is an interactive web application where users upload documents and ask questions via a chat interface. The backend dynamically builds an AI knowledge base from the document's content, ensuring all answers are factually grounded and free from AI hallucinations. The system is built with a Python backend using Flask and LangChain, a Node.js GraphQL API Gateway, and a responsive React frontend. The entire application is containerized with Docker for consistent and reliable deployment.",
            result: "The project successfully delivered an AI Document Assistant that provides trustworthy answers by eliminating factual hallucinations. It improves information retrieval speed by over 90% and offers a seamless user experience, all supported by a robust and scalable 3-tier architecture."
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
            {/* <div className="px-4">
                <h1 className={`font-bold text-7xl text-black tracking-tighter ${karla.className}`}>WORK & <br /> SERVICES</h1>
            </div> */}
            <div className=" w-full">
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
            <div className="w-full pt-8">
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