import React, { useState } from 'react'
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    console.log('Element found:', element); // Debug log
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Element not found:', sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo}
              alt="Vaibhav Setiya Logo" 
              className="h-12 md:h-16 object-contain cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('values')}
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Values
            </button>
            <button 
              onClick={() => scrollToSection('legacy')}
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Legacy
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Blog
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-slate-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-slate-900 font-medium transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-slate-900 font-medium transition-colors text-left"
              >
                Journey
              </button>
              <button 
                onClick={() => scrollToSection('values')}
                className="text-gray-700 hover:text-slate-900 font-medium transition-colors text-left"
              >
                Values
              </button>
              <button 
                onClick={() => scrollToSection('legacy')}
                className="text-gray-700 hover:text-slate-900 font-medium transition-colors text-left"
              >
                Legacy
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-slate-900 font-medium transition-colors text-left"
              >
                Blog
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}