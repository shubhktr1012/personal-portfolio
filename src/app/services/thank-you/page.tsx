'use client';

import React from 'react';
import Link from 'next/link';
import { karla, ibm } from '@/lib/fonts';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className={`text-4xl lg:text-5xl font-bold ${karla.className}`}>Thank You for Your Enquiry!</h1>
            <p className={`mt-4 text-lg lg:text-xl text-gray-600 ${ibm.className}`}>
                Your submission has been received. We're excited to learn more about your project.
            </p>
            <p className={`mt-2 text-base text-gray-500 ${ibm.className}`}>
                We will review your details and get back to you within 24 hours.
            </p>
            <Link href="/" className={`mt-8 px-6 py-3 bg-black text-white font-semibold rounded-lg ${ibm.className}`}>
                Back to Home
            </Link>
        </div>
    );
}
