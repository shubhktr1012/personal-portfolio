import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import StickySection from '../components/StickySection';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
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
      <body className={montserrat.className}>
        <div className="min-h-screen">
          <Navbar />
          {/* <main className="container mx-auto w-full">
            <div className="flex items-start max-w-full">
              <StickySection />
              {children}
            </div>
          </main> */}
        </div>
      </body>
    </html>
  );
}
