'use client'
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";

export default function Resume() {

    return (
        <div>
            <div className="pb-4 sub-heading text-gray-500 font-medium border-b-4 border-double border-gray-300/50 pb-2">
                Experience
            </div>
            <div className="flex items-start justify-between">
                <div className="py-4">
                    <div className="flex items-center">
                        <AiOutlineArrowRight size={18} color="gray" className="mr-2" />
                        <h1 className="font-bold body-text">Freelance Full Stack Developer & Product Builder</h1>
                    </div>
                    <h2 className="font-medium italic body-text pl-6">Self-Employed</h2>
                </div>
                <div className="py-4 font-medium italic body-text">
                    <h2 className="font-medium italic body-text">Jan'24 - Present</h2>
                </div>
            </div>
            <div className="pl-6 body-text">
                
            </div>
        </div>
        
    )
}