'use client'
import { useState } from "react";
import React from "react";
import { ibm, karla } from "@/lib/fonts";
import { RiFileCopyLine } from "react-icons/ri";


export default function ContactHero() {
    const [copied, setCopied] = useState(false);
    return (
        <div className='py-12 px-4 gap-y-10 max-w-full md:hidden flex flex-col items-start justify-center border-b border-t border-gray-400/20'>
                {/* Name heading */}
                <div className={`${karla.className} font-bold text-7xl text-black tracking-tighter`}>
                    SHOOT A
                    <br />
                    REQUEST
                </div>
                {/* Email copy button */}
                <button
                className={`${ibm.className} font-medium sub-heading flex items-center gap-x-2 cursor-pointer`}
                onClick={() => {
                    navigator.clipboard.writeText('shubh12khatri@gmail.com');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                }}
                >
                    shubh12khatri@gmail.com <RiFileCopyLine size={28} />
                </button>
                <div className="w-full flex flex-col gap-y-3">
                    
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className={` w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-500 sub-heading font-light text-black bg-gray-200`}
                    />

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Email"
                        className={` w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-500 sub-heading font-light text-black bg-gray-200`}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Describe your needs"
                        className={`w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-500 sub-heading font-light text-black bg-gray-200 resize-y min-h-[120px]`}
                        rows={5}
                    />
                    
                    {/*
                        Add a pseudo loading effect to the submit button.
                        After submission, change color for a couple of seconds and then revert,
                        but with a different text ("Send Another").
                        "Send Another" should go back to "Submit" after a page reload.
                    */}
                    {(() => {
                        const [loading, setLoading] = React.useState(false);
                        const [submitted, setSubmitted] = React.useState(false);
                        const [showSendAnother, setShowSendAnother] = React.useState(false);

                        // On mount, always reset to initial state (Submit)
                        React.useEffect(() => {
                            setShowSendAnother(false);
                        }, []);

                        // Handler for button click
                        const handleClick = () => {
                            if (loading) return;
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                                setSubmitted(true);
                                // After 2 seconds, revert color and show "Send Another"
                                setTimeout(() => {
                                    setSubmitted(false);
                                    setShowSendAnother(true);
                                }, 2000);
                            }, 1500); // Simulate loading for 1.5s
                        };

                        let buttonText = "Submit";
                        if (loading) buttonText = "Submitting...";
                        else if (submitted) buttonText = "Submitted!";
                        else if (showSendAnother) buttonText = "Send Another";

                        // The reason the cursor shows for this button is because of the inline style:
                        // style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                        // This overrides the global CSS that sets cursor: none for buttons.
                        // To fix, remove the inline style and rely on global CSS for cursor hiding.

                        return (
                            <button
                                className={`w-full px-4 py-5 sub-heading flex items-center justify-center transition-colors duration-300
                                    ${submitted ? "bg-green-600 text-white" : "bg-black text-white"}
                                    ${loading ? "opacity-70 cursor-not-allowed" : "opacity-100"}
                                `}
                                onClick={handleClick}
                                disabled={loading}
                                // Removed inline cursor style to allow custom cursor to work
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    buttonText
                                )}
                            </button>
                        );
                    })()}
                </div>
                
                <div
                    className={`
                        fixed bottom-4 left-1/2 -translate-x-1/2 z-[9998] px-4 py-2 bg-gray-300 ${ibm.className} text-black text-sm shadow-lg
                        transition-all duration-500 ease-in-out
                        ${copied ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}
                    `}
                    style={{ minWidth: 90, textAlign: 'center' }}
                >
                    Copied!
                </div>
        </div>
    );
}