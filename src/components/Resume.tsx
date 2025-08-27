'use client'
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function Resume() {

    return (
        <div>
            <div className="pb-4 sub-heading text-gray-500 font-medium border-b-4 border-double border-gray-300/50 pb-2">
                Experience
            </div>
            <div className="flex items-start justify-between">

                <div className="py-4">
                    <AiOutlineArrowRight size={24} color="gray" />
                    <h1 className="font-bold body-text py-1">Freelance Full Stack Developer & Product Builder</h1>
                    <h2 className="font-medium italic body-text py-1">Self-Employed</h2>
                </div>
                <div className="py-4 font-medium italic body-text">
                    <h2 className="font-medium italic body-text py-1">Jan'24 - Present</h2>
                </div>
            </div>
            

        </div>
        
    )
}