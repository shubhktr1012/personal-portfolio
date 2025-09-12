import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer'; // <-- Import your Footer component here
import SmoothScroll from '@/components/SmoothScroll';

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
      <body>
        <CustomCursor />
        <SmoothScroll />
        <div className="min-h-screen">
          <Navbar />
          <main className="w-full md:container md:mx-auto">
            <div className="flex items-start w-full">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
