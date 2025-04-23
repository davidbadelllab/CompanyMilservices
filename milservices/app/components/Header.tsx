'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determinar sección activa basada en la posición de scroll
      const sections = ['about', 'services', 'testimonials', 'plans', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Plans', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-blue-500/20' 
          : 'bg-gradient-to-r from-gray-900 via-blue-900 to-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo con efecto futurista mejorado */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-1 group relative">
              <div className="relative overflow-hidden py-1">
                {/* Efecto de resplandor detrás del logo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Contenedor del texto con efecto de corte digital */}
                <div className="relative flex items-center overflow-hidden">
                  {/* Texto "Mil" con efecto neón */}
                  <div className="relative overflow-hidden">
                    <span className={`text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r 
                      ${isScrolled 
                        ? 'from-blue-400 to-blue-600' 
                        : 'from-white to-blue-300'} 
                      transition-all duration-300`}>
                      MIL
                    </span>
                    {/* Línea de neón debajo */}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500
                      transform ${isScrolled ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                      transition-transform origin-left duration-300 opacity-70`}>
                    </div>
                  </div>
                  
                  {/* Segmento "Services" con estilo tech */}
                  <div className="relative ml-0.5">
                    <span className={`text-2xl font-extrabold
                      ${isScrolled 
                        ? 'text-gray-200' 
                        : 'text-blue-200'}`}>
                      SERVICES
                    </span>
                    
                    {/* Efectos de glitch */}
                    <span className={`absolute inset-0 text-2xl font-extrabold text-red-500
                      animate-pulse-slow opacity-0 group-hover:opacity-30 transform translate-x-0.5 -translate-y-0.5`}>
                      SERVICES
                    </span>
                    <span className={`absolute inset-0 text-2xl font-extrabold text-cyan-500
                      animate-pulse-slow opacity-0 group-hover:opacity-30 transform -translate-x-0.5 translate-y-0.5`}>
                      SERVICES
                    </span>
                  </div>
                  
                  {/* Elemento decorativo - circuito */}
                  <div className="absolute -right-4 top-0 h-full w-4 flex flex-col justify-between opacity-70">
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                    <div className={`w-1 h-8 border-r border-blue-400 ${isScrolled ? 'border-dashed' : 'border-solid'}`}></div>
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  </div>
                </div>
              </div>
              
              {/* Indicador parpadeante */}
              <div className="relative">
                <div className={`h-4 w-1.5 ${isScrolled ? 'bg-blue-500' : 'bg-blue-400'} animate-pulse-slow rounded-sm`}></div>
                <div className={`absolute top-5 left-0 h-1 w-3 ${isScrolled ? 'bg-blue-600' : 'bg-blue-500'} rounded-sm animate-pulse delay-150`}></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <div
                  key={item.name}
                  className="transform transition-all duration-200 hover:scale-110 relative group"
                >
                  <Link
                    href={`#${item.name.toLowerCase()}`}
                    className={`text-sm font-medium flex items-center space-x-1 px-3 py-2 rounded-full transition-colors duration-300 
                      ${isScrolled
                        ? isActive 
                          ? 'text-blue-400 bg-gray-900/40' 
                          : 'text-gray-300 hover:text-blue-400 hover:bg-gray-900/40'
                        : isActive 
                          ? 'text-white bg-blue-500/30' 
                          : 'text-white/90 hover:text-white hover:bg-blue-500/20'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                    </svg>
                    <span>{item.name}</span>
                  </Link>
                  <div className={`absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-blue-500 transform -translate-x-1/2 
                    transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              );
            })}
            <button
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 transform 
                hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 
                ${isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border border-blue-600/50'
                  : 'bg-black text-blue-400 border border-blue-500/30 hover:bg-black/80'
                }`}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button with Animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-blue-500' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 
                  ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-200 
                  ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 
                  ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Enhanced Animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 mt-2 bg-gray-900/95 border-t border-blue-500/30 
              rounded-b-xl shadow-xl shadow-blue-500/20 backdrop-blur-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium 
                    ${activeSection === item.name.toLowerCase()
                      ? 'bg-blue-600/20 text-blue-400'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/10'
                    } transition-all duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  </svg>
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-2">
                <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 
                  text-white font-medium hover:from-blue-700 hover:to-blue-600 
                  transition-all duration-200 flex justify-center items-center space-x-2 shadow-md shadow-blue-600/20">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}