import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-background">
      <div className="container mx-auto">
        <div className="flex min-h-32 items-start justify-between px-6 py-4">
          {/* Logo/Brand */}
          <div>
            <a href="#" className="hover:text-primary transition-colors">
              <div className="font-bold text-2xl">Shubh Khatri</div>
              <div className="text-gray-500 font-medium text-lg md:text-lg">
                Full Stack & AI Automation Professional
              </div>
            </a>
          </div>
 
          {/* Navigation Links - Will be added later */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation items will go here */}
            <a href="#" className="font-bold text-xl hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#" className="font-bold text-xl hover:text-primary transition-colors">
              Portfolio
            </a>
            <button className="font-bold text-xl bg-white text-black transition-colors hover:bg-gray-400 hover:text-black px-4 py-2 rounded-xl whitespace-nowrap">
              Hire Me
            </button>
            

          </div>

          {/* Mobile Menu Button - Will be implemented later */}
          <button className="md:hidden p-2">
            <div className="h-0.5 w-6 bg-foreground mb-1.5"></div>
            <div className="h-0.5 w-6 bg-foreground mb-1.5"></div>
            <div className="h-0.5 w-6 bg-foreground"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}