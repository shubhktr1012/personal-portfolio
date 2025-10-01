'use client'
import React, { useState, useRef, useEffect } from "react";
import { karla, ibm } from "@/lib/fonts";
import { useRouter } from "next/navigation";

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

const ADD_ONS = [
    { id: 'revision', name: 'Additional Revision', price: 1000, type: 'quantity' },
    { id: 'content', name: 'Content Upload', price: 2500, type: 'boolean' },
    { id: 'ecommerce', name: 'E-commerce Functionality', price: 20000, type: 'boolean' },
    { id: 'payment', name: 'Payment Integration', price: 5000, type: 'boolean' },
    { id: 'autoresponder', name: 'Autoresponder Integration', price: 4500, type: 'boolean' },
    { id: 'page', name: 'Additional Page', price: 8000, type: 'quantity', note: '(+2 Days)' },
    { id: 'plugin', name: 'Additional Plugin Installation', price: 3500, type: 'quantity' },
];

const TickIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className || 'text-green-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PlanDetails = ({ plan }: { plan: typeof servicePlans[keyof typeof TABS] }) => (
    <div className="w-full bg-white border-2 border-black p-6 flex flex-col gap-y-6">
        <div>
            <h1 className={`sub-heading font-bold ${karla.className}`}>{plan.title}</h1>
            <p className={`text-gray-600 body-text mt-1`}>{plan.description}</p>
        </div>
        
        <div className="flex items-baseline gap-x-2">
            <h2 className={`text-4xl font-bold ${karla.className}`}>{plan.price}</h2>
            <span className="text-gray-600">/one-time</span>
        </div>

        <div className="flex items-center gap-x-2">
            <span className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {plan.delivery}
            </span>
            <span className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {plan.revisions}
            </span>
        </div>
        
        <div className={`w-full ${ibm.className} flex flex-col border-t border-black/20 pt-4`}>
            <h3 className="font-semibold text-black mb-3">What's included:</h3>
            <ul className="space-y-3">
                {allFeatures.map((feature, index) => {
                    const featureValue = (plan.features as any)[feature.key];
                    
                    let content;
                    let icon;

                    if (typeof featureValue === 'boolean') {
                        if (featureValue) {
                            icon = <TickIcon />;
                            content = <span className="text-black">{feature.text}</span>;
                        } else {
                            icon = <CrossIcon />;
                            content = <span className="text-gray-500 line-through">{feature.text}</span>;
                        }
                    } else if (featureValue !== undefined && featureValue !== null && featureValue > 0) {
                        icon = <TickIcon />;
                        let featureText = feature.text;
                        if (featureValue === 1) {
                            if (feature.key === 'pages') featureText = 'Page';
                            if (feature.key === 'plugins') featureText = 'Plugin/Extension';
                        }
                        content = (
                            <span className="text-black">
                                <span className="font-bold">{featureValue}</span> {featureText}
                            </span>
                        );
                    } else {
                        icon = <CrossIcon />;
                        content = <span className="text-gray-500 line-through">{feature.text}</span>;
                    }

                    return (
                        <li key={index} className="flex items-center gap-x-3">
                            {icon}
                            {content}
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
);

export default function OtherServicesSection() {
    const [activeTab, setActiveTab] = useState(TABS.STANDARD);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: number | boolean }>({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status

    const tabsRef = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
    const [bgStyle, setBgStyle] = useState({ left: '0px', width: '0px' });

    const router = useRouter();

    useEffect(() => {
        const currentTab = tabsRef.current[activeTab];
        if (currentTab) {
            setBgStyle({
                left: `${currentTab.offsetLeft}px`,
                width: `${currentTab.offsetWidth}px`,
            });
        }
        setSelectedAddons({}); // Reset addons on plan change
    }, [activeTab]);

    const activePlan = servicePlans[activeTab as keyof typeof TABS];

    useEffect(() => {
        const basePrice = parseFloat(activePlan.price.replace('₹', '').replace(',', ''));
        const addonsPrice = ADD_ONS.reduce((total, addon) => {
            const value = selectedAddons[addon.id];
            if (addon.type === 'boolean' && value) {
                return total + addon.price;
            }
            if (addon.type === 'quantity' && typeof value === 'number' && value > 0) {
                return total + (addon.price * value);
            }
            return total;
        }, 0);
        setTotalPrice(basePrice + addonsPrice);
    }, [activePlan, selectedAddons]);


    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleAddonChange = (addonId: string, value: number | boolean) => {
        setSelectedAddons(prev => {
            const newAddons = { ...prev };
            if (value === false || value === 0) {
                delete newAddons[addonId];
            } else {
                newAddons[addonId] = value;
            }
            return newAddons;
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Submit button clicked, form submission initiated.');
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const clientData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        const orderSummary = {
            plan: activePlan.title,
            basePrice: activePlan.price,
            addons: ADD_ONS.filter(addon => selectedAddons[addon.id]).map(addon => ({
                name: addon.name,
                value: selectedAddons[addon.id],
                price: addon.price,
            })),
            totalPrice: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalPrice),
        };

        try {
            const response = await fetch('/api/submit-enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...clientData,
                    orderSummary,
                }),
            });

            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }

            // On successful submission
            closeModal();
            router.push('/services/thank-you');

        } catch (error) {
            console.error('Submission Error:', error);
            alert((error as Error).message);
        } finally {
            setIsSubmitting(false);
        }
    };


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
                <div className={`w-full px-6 py-6`}>
                    <div className={`w-full bg-black text-white transition-all duration-500 ease-in-out overflow-hidden`}>
                        <button 
                            onClick={toggleExpansion}
                            className={`w-full p-4 font-semibold ${ibm.className} flex justify-center items-center gap-x-2`}
                        >
                            <span>{isExpanded ? 'Choose a Different Plan' : 'Select Plan'}</span>
                            {isExpanded && <span className="text-2xl">&uarr;</span>}
                        </button>
                        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
                            <div className="p-6 border-t border-white/20 flex flex-col gap-y-6">
                                <h3 className={`sub-heading font-semibold ${karla.className}`}>Upgrade your order with extras</h3>
                                <div className="space-y-3">
                                    {ADD_ONS.map((addon) => (
                                        <div key={addon.id} className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                                            <div>
                                                <p className="font-semibold">
                                                    {addon.name} {addon.note && <span className="text-gray-400 text-sm font-normal">{addon.note}</span>}
                                                </p>
                                                <p className="text-gray-300">₹{addon.price.toLocaleString('en-IN')}</p>
                                                {/* Remove description as it's not present on all addon types */}
                                                {/* <p className="text-gray-400 text-sm">{addon.description}</p> */}
                                            </div>
                                            {addon.type === 'boolean' ? (
                                                <button 
                                                    onClick={() => handleAddonChange(addon.id, !selectedAddons[addon.id])} 
                                                    className={`w-7 h-7 border-2 ${selectedAddons[addon.id] ? 'border-green-500 bg-green-500' : 'border-gray-500'} rounded-full flex items-center justify-center transition-colors`}
                                                >
                                                    {selectedAddons[addon.id] && <TickIcon className="text-white h-4 w-4" />}
                                                </button>
                                            ) : (
                                                <div className="flex items-center gap-x-4">
                                                    <button 
                                                        onClick={() => handleAddonChange(addon.id, Math.max(0, ((selectedAddons[addon.id] as number) || 0) - 1))} 
                                                        className="w-7 h-7 border-2 border-gray-500 rounded-full flex items-center justify-center text-lg hover:bg-white/10 transition-colors disabled:opacity-50"
                                                        disabled={!selectedAddons[addon.id] || selectedAddons[addon.id] === 0}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="font-bold text-lg w-4 text-center">{(selectedAddons[addon.id] as number) || 0}</span>
                                                    <button 
                                                        onClick={() => handleAddonChange(addon.id, ((selectedAddons[addon.id] as number) || 0) + 1)} 
                                                        className="w-7 h-7 border-2 border-gray-500 rounded-full flex items-center justify-center text-lg hover:bg-white/10 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                                    <p className="sub-heading font-medium">Total Amount</p>
                                    <p className="sub-heading font-bold">
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(totalPrice)}
                                    </p>
                                </div>
                                <button className="w-full bg-white text-black p-4 font-semibold" onClick={() => setIsModalOpen(true)}>
                                    Proceed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out">
                    <div className="bg-white text-black border-2 border-black w-full max-w-lg p-8 relative">
                        <button 
                            onClick={closeModal} 
                            className="absolute -top-3 -right-3 h-8 w-8 bg-white border-2 border-black rounded-full flex items-center justify-center text-lg font-bold"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <h2 className={`text-3xl font-bold mb-2 ${karla.className}`}>Almost there!</h2>
                        <p className={`mb-6 text-gray-600 ${ibm.className}`}>Please provide your details below to complete the enquiry.</p>
                        
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className={`block text-black text-sm font-semibold mb-1 ${ibm.className}`}>Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className={`appearance-none bg-transparent border-b-2 border-black/20 w-full py-2 px-1 text-black leading-tight focus:outline-none focus:border-black ${ibm.className}`} 
                                    required 
                                    disabled={isSubmitting} 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={`block text-black text-sm font-semibold mb-1 ${ibm.className}`}>Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className={`appearance-none bg-transparent border-b-2 border-black/20 w-full py-2 px-1 text-black leading-tight focus:outline-none focus:border-black ${ibm.className}`} 
                                    required 
                                    disabled={isSubmitting} 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className={`block text-black text-sm font-semibold mb-1 ${ibm.className}`}>Project Brief</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={3} 
                                    className={`appearance-none bg-transparent border-b-2 border-black/20 w-full py-2 px-1 text-black leading-tight focus:outline-none focus:border-black resize-none ${ibm.className}`} 
                                    required 
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className={`w-full py-3 bg-black text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${ibm.className}`} 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}