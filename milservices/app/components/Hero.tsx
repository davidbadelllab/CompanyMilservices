'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-black" ref={heroRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[15%] w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[35%] w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(11, 27, 59, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 27, 59, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '-1px -1px',
        }}
      />
      
      {/* Animated polygon shapes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <svg
          className="absolute w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            className="absolute animate-float-slow animation-delay-1000"
            fill="rgba(59, 130, 246, 0.7)"
            points="25,30 75,20 95,70 60,85 10,65"
          />
          <polygon
            className="absolute animate-float-slow animation-delay-3000"
            fill="rgba(124, 58, 237, 0.7)"
            points="40,10 90,30 80,80 30,90 10,40"
          />
          <polygon
            className="absolute animate-float-slow animation-delay-5000"
            fill="rgba(6, 182, 212, 0.7)"
            points="20,50 70,20 90,60 50,95 10,70"
          />
        </svg>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8 z-20">
        <div 
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Animated Logo with glow effect */}
          <div className="mb-8 relative inline-block">
            <div className="relative inline-flex items-center justify-center p-4">
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse-slow"></div>
              <span className="relative text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                MilServices
              </span>
            </div>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block">Security Solutions</span>
            <span className="block mt-2 text-blue-400">For The Digital Age</span>
          </h1>
          
          <p className={`max-w-2xl mx-auto mt-6 text-xl text-blue-100 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Protecting what matters most with cutting-edge technology and unparalleled expertise. 
            Our military-grade security solutions safeguard your digital and physical assets.
          </p>
          
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            <Link 
              href="#contact" 
              className="w-full sm:w-auto mt-4 sm:mt-0 px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-100 font-medium rounded-lg hover:bg-blue-800/20 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-blue-300 text-sm mb-2">Scroll to Discover</span>
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
        
        {/* Stats section */}
        <div className={`absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-4 border-t border-blue-900/30 transition-all duration-1000 delay-900 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-blue-300 text-sm">Clients Protected</p>
                <p className="text-white text-2xl font-bold">10,000+</p>
              </div>
              <div>
                <p className="text-blue-300 text-sm">Countries Served</p>
                <p className="text-white text-2xl font-bold">32+</p>
              </div>
              <div>
                <p className="text-blue-300 text-sm">Security Experts</p>
                <p className="text-white text-2xl font-bold">500+</p>
              </div>
              <div>
                <p className="text-blue-300 text-sm">Satisfaction Rate</p>
                <p className="text-white text-2xl font-bold">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}