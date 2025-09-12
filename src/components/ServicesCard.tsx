'use client';
import { ibm, karla } from "../lib/fonts";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

type LogoItem = {
    src: string;
    name: string;
}

// Define the types for our props
type Service = {
    title: string;
    description: string;
    logos: LogoItem[];
}

type ServiceCardProps = {
    service: Service;
}

// This is now just a simple, static card
export default function ServiceCard({ service }: ServiceCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(videoRef.current) {
                        if(entry.isIntersecting) {
                            if(videoRef.current.paused) {
                                videoRef.current.play().catch(error => console.error("Video Play Failed:", error));
                                console.log(`Playing video for ${service.title}`);
                            }
                        } else {
                            if(!videoRef.current.paused) {
                                videoRef.current.pause();
                                console.log(`Pausing video for ${service.title}`);
                            }
                        }
                    }
                });
            },
            { threshold: 0 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };

    }, [service.title]);
    return (
        <div
            className="relative w-full aspect-square bg-black text-white shadow-xl flex flex-col justify-between overflow-hidden"
        >
            <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                playsInline
                src="/pattern-30s.webm"
            />
            <div className="relative z-10 p-8">
                <h3 className={`body-text text-gray-400 font-bold ${karla.className}`}>{service.title}</h3>
                <p className={`w-[60%] heading mt-2 ${ibm.className}`}>
                    {(() => {
                        const words = service.description.split(' ');
                        const midPoint = Math.ceil(words.length / 2);
                        const firstHalf = words.slice(0, midPoint).join(' ');
                        const secondHalf = words.slice(midPoint).join(' ');
                        return (
                            <>
                                <span className="text-white">{firstHalf}</span>{' '}
                                <span className="text-gray-400">{secondHalf}</span>
                            </>
                        );
                    })()}
                </p>
            </div>
            <div className="absolute bottom-0 right-0 py-8 px-8">
                <div className="max-w- flex items-start justify-end">
                    {service.logos.map((logoItem, index) => (
                        <div
                            key={index}
                            className={`
                                relative group flex items-center justify-center w-18 h-18 bg-white rounded-full border-2 border-gray-300
                                transition-transform duration-300 ease-out
                                hover:-translate-y-3 hover:shadow-2xl
                                float-levitate
                                ${index > 0 ? '-ml-4' : ''}
                            `}
                            style={{ willChange: 'transform' }}
                        >
                            <div
                                className="
                                    transition-transform duration-300 ease-out
                                    group-hover:-translate-y-1 group-hover:scale-110
                                    flex items-center justify-center
                                "
                                style={{ willChange: 'transform' }}
                            >
                                <Image src={logoItem.src} alt={`${logoItem.name}`} width={40} height={40} />
                        
                            </div>
                            <span
                                className={`
                                    z-20 absolute bottom-full mb-4
                                    px-3 py-1 bg-white text-black text-xs shadow-lg whitespace-nowrap
                                    ${karla.className}
                                    pointer-events-none
                                    opacity-0 scale-95 translate-y-2
                                    group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                                    transition-all duration-300 ease-out
                                `}
                                style={{
                                    transitionProperty: 'opacity, transform',
                                }}
                            >
                                {logoItem.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
                
        </div>
        
    );
}