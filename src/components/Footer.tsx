'use client'
import { ibm, karla, mont } from "@/lib/fonts";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";


export default function Footer() {

    // const wrapRef = useRef<HTMLDivElement>(null);
    // const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     const onScroll = () => {
    //         const el = wrapRef.current;
    //         if (!el) return;
    //         const rect = el.getBoundingClientRect();
    //         const vh = window.innerHeight;

    //         const visible = Math.min(1, Math.min(0, 1 - rect.top / vh));

    //         setOffset(-visible * 120);

    //     };
    //     onScroll();
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);

    const goToContact = () => {
        if (typeof window !== 'undefined' && window.location.pathname === '/contact') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = '/contact';
        }
      };

    return (
            <footer 
            className=" md:hidden px-6 pt-12 pb-16 w-full h-[100vh] bg-cover bg-center bg-no-repeat will-change-transform" 
            style={{
                backgroundImage: "url('/footer-mesh.png')"
            }}
            >   
                <div className="h-full flex flex-col justify-between">
                    {/* Will add the social button later */}       
                    <div className="flex items-center justify-center gap-x-4">
                        <a href="https://www.linkedin.com/in/shubhkhatri1209/">
                            <Image src="/linkedin.svg" alt="LinkedIn" width={46} height={46} />
                        </a>
                        <a href="https://github.com/shubhktr1012">
                            <Image src="/github.svg" alt="GitHub" width={46} height={46} />
                        </a>
                        <a href="https://www.instagram.com/shubh_khatri12">
                            <Image src="/instagram.svg" alt="Instagram" width={46} height={46} />
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-y-8">
                        <div className={`${ibm.className} text-white heading`}>
                            Curious about what we could build together?
                            <br />
                            <span className="text-gray-400">Let's bring something extraordinary to life! </span>
                        </div>
                        
                        <div className={`flex items-center gap-3 text-white text-sm ${karla.className}`}>
                            <div className="relative">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                            </div>
                            Available for Work
                        </div>

                        <button onClick={goToContact} className={`${ibm.className} w-full bg-white py-4 sub-heading`}>
                            Get in Touch
                        </button> 
                    </div>
                    <div className={`border-b border-gray-300/70 flex items-end justify-between ${ibm.className} text-white text-sm`}>
                            <div className="border-r border-gray-300/70 pb-1 pr-1 h-content flex flex-col items-end">
                                <div>
                                    +917089983626
                                </div>
                                <div>
                                    shubh12khatri@gmail.com
                                </div>
                            </div>
                            <div
                                className={`
                                    ${mont.className} pl-1 py-1 font-semibold text-5xl border-l border-t border-gray-300/70
                                    
                                `}
                                style={{
                                    color: "white",
                                    // Optionally, you can add opacity for more subtle blending:
                                    opacity: 1,
                                }}
                            >
                                PORT <br /> FO <br /> LIO
                            </div>
                    </div>
                </div>
                <div className="w-full pt-4 text-white text-xs flex flex-col items-center justify-center">
                    <div>
                        Designed and Developed by Shubh Khatri
                    </div>
                    <div>
                        All Rights Reserved, Ⓒ2025
                    </div>
                </div>
            </footer>
        
    );
}