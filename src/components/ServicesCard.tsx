'use client';
import { ibm, karla } from "../lib/fonts";

// Define the types for our props
type Service = {
    title: string;
    description: string;
    tech: string[];
}

type ServiceCardProps = {
    service: Service;
}

// This is now just a simple, static card
export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className='w-full h-[400px] bg-black text-white rounded-lg shadow-xl flex flex-col justify-between'>
            <div className="py-8 px-8">
                <h3 className={`body-text text-gray-400 font-bold ${karla.className}`}>{service.title}</h3>
                <p className={`w-[60%] sub-heading mt-2 ${ibm.className}`}>
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
        </div>
    );
}