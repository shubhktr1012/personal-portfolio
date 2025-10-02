'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { karla, ibm, formaDjr } from '../lib/fonts';
import { RiFileCopyLine } from "react-icons/ri";


export default function HeroSection() {

    const [copied, setCopied] = useState(false);
    const email = "shubh12khatri@gmail.com";

    return (
        <div className='w-full'>
            {/* Mobile Hero Section - visible on small screens, hidden on medium and up */}
            <div className='py-12 px-4 gap-y-10 max-w-full md:hidden flex flex-col items-start justify-center border-b border-gray-400/20'>
                {/* Hero Section */}
                <div className='gap-y-8 flex flex-col items-start'>
                    {/* Profile picture container */}
                    <div className='profile-picture'>
                    <Image
                        src="/shubh.jpg"
                        alt="Your Name"
                        width={150}
                        height={150}
                        className="profile-picture"
                        />
                    </div>
                    {/* Name heading */}
                    <div className={`${karla.className} font-bold text-7xl text-black tracking-tighter`}>
                        SHUBH
                        <br />
                        KHATRI
                    </div>
                    {/* Email copy button */}
                    <button
                    className={`${karla.className} font-medium sub-heading flex items-center gap-x-2 cursor-pointer`}
                    onClick={() => {
                        navigator.clipboard.writeText(email);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                    }}
                    >
                        {email} <RiFileCopyLine size={28} />
                    </button>
                    {/* Short bio/description */}
                    <div className={`${ibm.className} text-justify font-medium sub-heading`}>
                    <span className='pl-11.5'>Hey, I build tools that bring order to chaos—from elegant websites to intelligent automations.</span> Based in Indore, helping clients worldwide. Let's solve a problem together!
                    </div>
                </div>
                <div className={`${karla.className} container mx-auto gap-x-4 flex items-center justify-center`}>
                    <button className='p-2 font-regular body-text w-50 h-12 flex items-center justify-center bg-[#171717] text-white'>
                        Explore My Web Work
                    </button>
                    <button className='p-2 font-regular body-text w-50 h-12 flex items-center justify-center bg-[#171717] text-white'>
                        See My AI Projects
                    </button>
                </div>
                {/* Copied notification - Keep inside mobile section for now as it was originally there */}
                <div
                    className={`
                        fixed bottom-4 left-1/2 -translate-x-1/2 z-[9998] px-4 py-2 bg-gray-200 ${ibm.className} text-black text-sm shadow-lg
                        transition-all duration-500 ease-in-out
                        ${copied ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}
                    `}
                    style={{ minWidth: 90, textAlign: 'center' }}
                >
                    Copied!
                </div>
            </div>
            
            {/* Desktop/Tablet Hero Section - hidden on small screens, visible on medium and up */}
            <div className="hidden md:block md:px-8 lg:px-20 2xl:px-0 pt-10 pb-15 w-full h-[95vh] border-b border-gray-400/20">
                {/* Your desktop/tablet HeroSection content will go here */}
                <div className={`w-full h-full flex flex-col items-center justify-between`}>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-content flex flex-col items-start'>
                                <h1 className="text-center md:text-9xl font-semibold xl:text-[10.5rem]">SHUBH</h1>
                                <h1 className="pl-20 text-center md:text-9xl font-semibold xl:text-[10.5rem]">KHATRI</h1>
                            </div>
                            <div className='h-full flex flex-col items-start'>
                                <Image
                                        src="/shubh.jpg"
                                        alt="Your Name"
                                        width={150}
                                        height={150}
                                        className="profile-picture"
                                />
                            </div>                                
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            {/* Email copy button */}
                            <div className='h-full flex flex-col items-start gap-y-10'>
                                <button
                                className={`${karla.className} md:font-medium heading flex items-center gap-x-2 cursor-pointer`}
                                onClick={() => {
                                    navigator.clipboard.writeText(email);
                                    setCopied(true);
                                    setTimeout(() => setCopied(false), 1500);
                                }}
                                >
                                    {email} <RiFileCopyLine size={28} />
                                </button>
                            </div>
                            {/* Short bio/description */}
                            <div className={`${ibm.className} md:max-w-90 md:text-[1.5em] text-justify font-semibold [hyphens:auto] text-pretty xl:max-w-160 text-justify xl:text-[1.8em] font-semibold [hyphens:auto] text-pretty`} style={{ lineHeight: 1.2 }}>
                            <span className='pl-16'>Hey, I build tools that bring order to chaos—from elegant websites to intelligent automations.</span> Based in Indore, helping clients worldwide. Let's solve a problem together!
                            </div>
                        </div>
                </div>
                
                {/* Remember to handle the 'copied' state for desktop if needed, or move the global notification outside */}
            </div>
        </div>
        
    );
}