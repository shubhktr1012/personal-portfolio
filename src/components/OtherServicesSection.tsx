'use client'
import React, { useState, useRef, useEffect } from "react";
import { karla, ibm } from "@/lib/fonts";

const TABS = {
    BASIC: "Basic",
    STANDARD: "Standard",
    PREMIUM: "Premium"
};

const allFeatures = [
    { key: 'website', text: 'Functional Website' },
    { key: 'pages', text: 'Pages' },
    { key: 'content', text: 'Content Upload' },
    { key: 'plugins', text: 'Plugins/Extensions' },
    { key: 'payment', text: 'Payment Integration' },
    { key: 'optin', text: 'Opt-in Form' },
    { key: 'autoresponder', text: 'Autoresponder Integration' },
    { key: 'speed', text: 'Speed Optimization' },
    { key: 'hosting', text: 'Hosting Setup' },
    { key: 'social', text: 'Social Media Icons' },
];

const servicePlans = {
    [TABS.BASIC]: {
        title: "The Essential Launch",
        price: "₹7500",
        description: "A professional, responsive landing page to establish your online presence and capture leads.",
        delivery: "3-5 Days Delivery",
        revisions: "2 Revisions",
        features: {
            website: true,
            pages: 1,
            content: false,
            plugins: 1,
            payment: false,
            optin: true,
            autoresponder: false,
            speed: true,
            hosting: false,
            social: true,
        }
    },
    [TABS.STANDARD]: {
        title: "The Complete Build",
        price: "₹14,000",
        description: "A full solution with content upload and email integration to automate your lead magnet.",
        delivery: "7-10 Days Delivery",
        revisions: "3 Revisions",
        features: {
            website: true,
            pages: 1,
            content: true,
            plugins: 1,
            payment: false,
            optin: true,
            autoresponder: false,
            speed: true,
            hosting: true,
            social: true,
        }
    },
    [TABS.PREMIUM]: {
        title: "The Advanced Solution",
        price: "₹20,000",
        description: "An all-inclusive page with payment integration, advanced optimization, and more revisions.",
        delivery: "12-15 Days Delivery",
        revisions: "4 Revisions",
        features: {
            website: true,
            pages: 1,
            content: true,
            plugins: 2,
            payment: true,
            optin: true,
            autoresponder: true,
            speed: true,
            hosting: true,
            social: true,
        }
    }
};

const TickIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PlanDetails = ({ plan }: { plan: typeof servicePlans[keyof typeof TABS] }) => (
    <div className="w-full p-4 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
            <h1 className={`sub-heading font-bold ${karla.className}`}>{plan.title}</h1>
            <h1 className={`sub-heading font-medium ${karla.className}`}>{plan.price}</h1>
        </div>
        <div>
            <h2 className={`body-text`}>{plan.description}</h2>
        </div>
        <div className="flex items-center gap-x-2">
            <span className="bg-black text-gray-100 text-xs font-medium px-4 py-1.5 rounded-full">
                {plan.delivery}
            </span>
            <span className="bg-black text-gray-100 text-xs font-medium px-4 py-1.5 rounded-full">
                {plan.revisions}
            </span>
        </div>
        <div className={`w-full ${ibm.className} flex flex-col mt-4`}>
            <div className="flex items-center font-bold text-black border-b border-black">
                <div className="p-4 w-[75%]">Features</div>
                <div className="p-4 w-[25%] flex items-centerjustify-center">Inclusion</div>
            </div>
            {allFeatures.map((feature, index) => {
                const featureValue = (plan.features as any)[feature.key];
                
                let rightColumnContent;
                if (typeof featureValue === 'boolean') {
                    rightColumnContent = featureValue ? <TickIcon /> : <CrossIcon />;
                } else if (featureValue !== undefined && featureValue !== null) {
                    rightColumnContent = <span className="font-medium">{featureValue}</span>;
                } else {
                    rightColumnContent = <CrossIcon />;
                }

                return (
                    <div key={index} className="flex items-center">
                        <div className={`p-4 w-[75%] ${index % 2 === 0 ? 'bg-gray-200 text-black' : ''}`}>
                            {feature.text}
                        </div>
                        <div className={`p-4 w-[25%] flex items-center justify-center ${index % 2 !== 0 ? 'bg-gray-200 text-black' : ''}`}>
                            {rightColumnContent}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default function OtherServicesSection() {
    const [activeTab, setActiveTab] = useState(TABS.STANDARD);
    const tabsRef = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
    const [bgStyle, setBgStyle] = useState({ left: '0px', width: '0px' });

    useEffect(() => {
        const currentTab = tabsRef.current[activeTab];
        if (currentTab) {
            setBgStyle({
                left: `${currentTab.offsetLeft}px`,
                width: `${currentTab.offsetWidth}px`,
            });
        }
    }, [activeTab]);

    const activePlan = servicePlans[activeTab as keyof typeof TABS];

    return (
        <div className="max-w-full md:hidden flex flex-col justify-center border-b border-gray-400/20">
            <div className="pt-10 w-full">
                <div className="px-4 w-full flex justify-between items-center">
                    <div>
                        <h1 className={`font-medium sub-heading ${karla.className}`}>services.</h1>
                    </div>
                    <div className="border-2 rounded-full border-gray-400/20 bg-white p-2">
                        <div className="relative flex items-start gap-x-2">
                            <div
                                className="absolute rounded-full top-0 h-full bg-black transition-all duration-600 ease-in-out"
                                style={bgStyle}
                            ></div>
                            {Object.values(TABS).map((tab) => (
                                <h2
                                    key={tab}
                                    ref={(el) => { tabsRef.current[tab] = el; }}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 sub-heading cursor-pointer z-10 transition-colors duration-300 delay-150 ${karla.className} ${activeTab === tab ? 'text-white' : 'text-black'}`}
                                >
                                    {tab}
                                </h2>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="px-2 pt-6">
                    <PlanDetails plan={activePlan} />
                </div>
                <div className={`w-full px-6 py-4 flex items-center justify-center`}>
                    <button className={`w-full py-4 bg-black text-white`}>
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    );
}