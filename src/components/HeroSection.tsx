'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { karla } from '../lib/fonts';
import { ibm } from '../lib/fonts';
import { RiFileCopyLine } from "react-icons/ri";


export default function HeroSection() {
    return (


        // Mobile Hero Section
        <div className='py-12 px-4 gap-y-10 max-w-full md:hidden flex flex-col items-start justify-center border-b border-t border-gray-400/20'>
            <div className='gap-y-8 flex flex-col items-start'>
                {/* Profile picture container */}
                <div className='profile-picture'>
                <Image
                    src="/michael.png"
                    alt="Your Name"
                    width={150}
                    height={150}
                    className="profile-picture"
                    />
                </div>
                {/* Name heading */}
                <div className={`${karla.className} font-bold text-7xl text-black`}>
                    SHUBH
                    <br />
                    KHATRI
                </div>
                {/* Email copy button */}
                <button
                className={`${ibm.className} font-medium sub-heading flex items-center gap-x-2 cursor-pointer`}
                onClick={() => {
                    navigator.clipboard.writeText('shubh12khatri@gmail.com');
                }}
                >
                    shubh12khatri@gmail.com <RiFileCopyLine size={28} />
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
            
        </div>
        
    );
}