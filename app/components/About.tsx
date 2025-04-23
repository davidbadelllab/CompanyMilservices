'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [visibleStats, setVisibleStats] = useState(false);
  
  const stats = [
    { value: 98, label: 'Client Satisfaction', symbol: '%' },
    { value: 180, label: 'Completed Projects', symbol: '+' },
    { value: 42, label: 'Industry Awards', symbol: '' },
    { value: 12, label: 'Years Experience', symbol: '+' }
  ];
  
  const technologies = [
    'AI & Machine Learning', 'Blockchain', 'Cloud Computing', 
    'DevOps', 'AR/VR', 'IoT Solutions'
  ];

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setVisibleStats(true), 500);
    }
  }, [isInView]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -left-24 top-1/2 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Discover Our Story</h2>
            <h1 className="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 sm:text-6xl">
              About MilServices
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              Pioneering excellence in digital transformation and software solutions
              with a focus on innovation, security, and scalability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Overview */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Engineered for Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  MilServices delivers enterprise-grade software solutions that empower organizations to thrive in the digital era. Our elite team of engineers, designers, and strategists collaborate to create powerful, intuitive systems that solve complex challenges across industries.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Founded in 2010, we've grown from a specialized security-focused consultancy to a comprehensive digital transformation partner trusted by Fortune 500 companies and government agencies worldwide.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-0.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.169 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </span>
                Our Mission
              </h3>
              <p className="text-gray-300">
                To create transformative technology that sets new standards for security, reliability, and user experience, enabling our clients to lead confidently in the digital frontier.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-2">Global Presence</h4>
                <p className="text-gray-300">
                  Operations in 15+ countries with specialized teams tailored to regional requirements.
                </p>
              </div>
              <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-2">Dedicated Teams</h4>
                <p className="text-gray-300">
                  Exceptional talent across development, security, design, and client success.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Technologies and Stats */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Advanced Technology Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {technologies.map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                      className="bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-600/50 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <span className="text-gray-200 font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Stats with counting animation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="bg-gray-800/70 border border-gray-700 rounded-lg p-4 text-center">
                  <h4 className="text-3xl font-bold text-white flex justify-center items-baseline">
                    {visibleStats ? (
                      <CountUp to={stat.value} duration={2} delay={(i * 0.1) + 0.2} />
                    ) : (
                      <span>0</span>
                    )}
                    <span className="text-blue-400 ml-1">{stat.symbol}</span>
                  </h4>
                  <p className="text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            
            {/* Company Values */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: isInView ? 0 : 40, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="bg-gray-800/70 border border-gray-700 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-300">
                    <span className="font-semibold text-white">Innovation Excellence</span> - Pushing boundaries and reimagining possibilities
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-500 mt-1 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-300">
                    <span className="font-semibold text-white">Security-First Mindset</span> - Protecting digital assets at every layer
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500 mt-1 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-300">
                    <span className="font-semibold text-white">Client Partnership</span> - Building lasting relationships through collaboration
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
          >
            Connect With Our Team
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Animated counter component
function CountUp({ to, duration = 2, delay = 0 }: { to: number, duration?: number, delay?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let start = 0;
    const end = to;
    const totalDuration = duration * 1000;
    const delayTime = delay * 1000;
    
    let timer: number | undefined;
    
    // Add delay before starting animation
    const delayTimer = setTimeout(() => {
      // Handle animation
      const startTime = Date.now();
      
      const animateCount = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        
        if (elapsed > totalDuration) {
          setCount(end);
          return;
        }
        
        const progress = elapsed / totalDuration;
        const currentCount = Math.round(easeOutQuad(progress) * end);
        
        setCount(currentCount);
        timer = requestAnimationFrame(animateCount);
      };
      
      timer = requestAnimationFrame(animateCount);
    }, delayTime);
    
    return () => {
      if (timer) cancelAnimationFrame(timer);
      clearTimeout(delayTimer);
    };
  }, [to, duration, delay]);
  
  // Easing function for smoother animation
  function easeOutQuad(x: number) {
    return 1 - (1 - x) * (1 - x);
  }
  
  return <span ref={countRef}>{count}</span>;
}
