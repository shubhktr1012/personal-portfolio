'use client'
import { useState, FormEvent } from "react";
import React from "react";
import { ibm, karla } from "@/lib/fonts";
import { RiFileCopyLine } from "react-icons/ri";
import { Listbox, Transition, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { HiCheck, HiChevronDown } from 'react-icons/hi';


const services = [
    { name: 'Website Development' },
    { name: 'UI/UX Design' },
    { name: 'AI Integration' },
    { name: 'Consulting' },
];

const budgets = [
    { name: 'Under ₹15,000', value: '<15k' },
    { name: '₹15,000 - ₹50,000', value: '15k-50k' },
    { name: 'Over ₹50,000', value: '50k+' },
];

const sources = [
    { name: 'Google Search' },
    { name: 'LinkedIn' },
    { name: 'Referral' },
    { name: 'Social Media' },
    { name: 'Other' },
];

export default function ContactHero() {
    const [copied, setCopied] = useState(false);
    const [selectedService, setSelectedService] = useState<{name: string} | null>(null);
    const [selectedBudget, setSelectedBudget] = useState<{name: string, value: string} | null>(null);
    const [selectedSource, setSelectedSource] = useState<{name: string} | null>(null);

    // State for form submission
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showSendAnother, setShowSendAnother] = useState(false);

    const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        // If the button says "Send Another", reset the form instead of submitting
        if (showSendAnother) {
            form.reset();
            setSelectedService(null);
            setSelectedBudget(null);
            setSelectedSource(null);
            setShowSendAnother(false);
            return;
        }

        setLoading(true);

        const formData = new FormData(form);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            service: selectedService?.name,
            budget: selectedBudget?.name,
            source: selectedSource?.name,
            details: formData.get('optional-details') as string,
        };

        // Basic validation
        if (!data.name || !data.email || !data.service || !data.budget || !data.source) {
            alert('Please fill out all required fields.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/submit-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }

            // Success! Start the UI feedback sequence.
            setLoading(false);
            setSubmitted(true);

            // After 2 seconds, show "Send Another"
            setTimeout(() => {
                setSubmitted(false);
                setShowSendAnother(true);
            }, 2000);

        } catch (error) {
            console.error('Contact form submission error:', error);
            alert((error as Error).message);
            setLoading(false);
        }
    };

    let buttonText = "Submit";
    if (loading) buttonText = "Submitting...";
    else if (submitted) buttonText = "Submitted!";
    else if (showSendAnother) buttonText = "Send Another";

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
                <form className="w-full flex flex-col gap-y-3" onSubmit={handleContactSubmit}>
                    
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className={` w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-500 sub-heading font-light text-black bg-gray-200`}
                        required
                    />

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className={` w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-500 sub-heading font-light text-black bg-gray-200`}
                        required
                    />
                    <Listbox value={selectedService} onChange={setSelectedService} name="service">
                        {({ open }) => (
                            <div className="relative w-full">
                                <ListboxButton className="w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black sub-heading font-light text-left text-black bg-gray-200 flex justify-between items-center">
                                    <span className={selectedService ? 'text-black' : 'text-gray-500'}>
                                        {selectedService ? selectedService.name : 'What service are you interested in?'}
                                    </span>
                                    <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </ListboxButton>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <ListboxOptions className="absolute w-full py-1 mt-1 overflow-auto bg-white border-2 border-black focus:outline-none z-10">
                                        {services.map((service, serviceIdx) => (
                                            <ListboxOption
                                                key={serviceIdx}
                                                className={({ active }) =>
                                                    `cursor-pointer select-none relative py-3 pl-10 pr-4 ${
                                                    active ? 'text-white bg-black' : 'text-black'
                                                    }`
                                                }
                                                value={service}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                            {service.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                                <HiCheck className="w-5 h-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </Transition>
                            </div>
                        )}
                    </Listbox>

                    <Listbox value={selectedBudget} onChange={setSelectedBudget} name="budget">
                        {({ open }) => (
                            <div className="relative w-full">
                                <ListboxButton className="w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black sub-heading font-light text-left text-black bg-gray-200 flex justify-between items-center">
                                    <span className={selectedBudget ? 'text-black' : 'text-gray-500'}>
                                        {selectedBudget ? selectedBudget.name : 'What is your estimated budget?'}
                                    </span>
                                    <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </ListboxButton>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <ListboxOptions className="absolute w-full py-1 mt-1 overflow-auto bg-white border-2 border-black focus:outline-none z-10">
                                        {budgets.map((budget, budgetIdx) => (
                                            <ListboxOption
                                                key={budgetIdx}
                                                className={({ active }) =>
                                                    `cursor-pointer select-none relative py-3 pl-10 pr-4 ${
                                                    active ? 'text-white bg-black' : 'text-black'
                                                    }`
                                                }
                                                value={budget}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                            {budget.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                                <HiCheck className="w-5 h-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </Transition>
                            </div>
                        )}
                    </Listbox>

                    <Listbox value={selectedSource} onChange={setSelectedSource} name="source">
                        {({ open }) => (
                            <div className="relative w-full">
                                <ListboxButton className="w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black sub-heading font-light text-left text-black bg-gray-200 flex justify-between items-center">
                                    <span className={selectedSource ? 'text-black' : 'text-gray-500'}>
                                        {selectedSource ? selectedSource.name : 'How did you hear about me?'}
                                    </span>
                                    <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </ListboxButton>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <ListboxOptions className="absolute w-full py-1 mt-1 overflow-auto bg-white border-2 border-black focus:outline-none z-10">
                                        {sources.map((source, sourceIdx) => (
                                            <ListboxOption
                                                key={sourceIdx}
                                                className={({ active }) =>
                                                    `cursor-pointer select-none relative py-3 pl-10 pr-4 ${
                                                    active ? 'text-white bg-black' : 'text-black'
                                                    }`
                                                }
                                                value={source}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                            {source.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                                <HiCheck className="w-5 h-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </Transition>
                            </div>
                        )}
                    </Listbox>

                    <textarea
                        id="optional-details"
                        name="optional-details"
                        placeholder="Optional details about your needs"
                        className={`w-full px-4 py-5 focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-500 sub-heading font-light text-black bg-gray-200 resize-y min-h-[120px]`}
                        rows={5}
                    />
                    
                    <button
                        type="submit"
                        className={`w-full px-4 py-5 sub-heading flex items-center justify-center transition-colors duration-300
                            ${submitted ? "bg-green-600 text-white" : "bg-black text-white"}
                            ${loading ? "opacity-70 cursor-not-allowed" : "opacity-100"}
                        `}
                        disabled={loading}
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
                </form>
                
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