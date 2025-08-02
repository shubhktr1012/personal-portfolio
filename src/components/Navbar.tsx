export default function Navbar() {
  return (
    <nav className="border-b border-gray-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex h-60 items-start justify-between py-5">
          {/* Logo/Brand */}
          <div className="border border-border flex items-center font-bold text-xl">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Shubh Khatri</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#resume" className="text-foreground hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#cta" className="text-foreground hover:text-primary transition-colors">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 