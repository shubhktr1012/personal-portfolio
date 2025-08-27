import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import StickySection from '../components/StickySection';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Shubh Khatri - Portfolio',
  description: 'Full Stack & AI Automation Professional',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="min-h-screen px-2 md:px-4">
          <Navbar />
          <main className="container mx-auto w-full">
            <div className="flex items-start max-w-full">
              <StickySection />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
