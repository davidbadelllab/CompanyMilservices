'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Plans() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [isYearly, setIsYearly] = useState(true);
  
  const planFeatures = {
    essential: [
      'Up to 5 projects',
      'Basic analytics',
      'Community support',
      '24/7 system monitoring',
      'Standard security features',
      '5 team members'
    ],
    professional: [
      'Unlimited projects',
      'Advanced analytics dashboard',
      'Priority support',
      'Performance optimization',
      'Enhanced security protocols',
      'Up to 15 team members',
      'Custom integrations'
    ],
    enterprise: [
      'Unlimited everything',
      'AI-powered insights',
      'Dedicated account manager',
      'Custom development',
      'Enterprise-grade security',
      'Unlimited team members',
      'White labeling',
      'SLA guarantees',
      'Compliance assistance'
    ]
  };

  type PlanType = 'essential' | 'professional' | 'enterprise';

  const planPricing: Record<PlanType, {monthly: number, yearly: number}> = {
    essential: {
      monthly: 149,
      yearly: 129
    },
    professional: {
      monthly: 349,
      yearly: 299
    },
    enterprise: {
      monthly: 999,
      yearly: 849
    }
  };
  
  const featuredBenefits = [
    {
      title: 'Accelerate Development',
      description: 'Deploy faster with our optimized workflows and robust infrastructure',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Scale Effortlessly',
      description: 'Infrastructure that grows with you - from startup to enterprise',
      icon: 'M7 11v8a1 1 0 001 1h8a1 1 0 001-1v-8m-10 0V8a1 1 0 011-1h8a1 1 0 011 1v3m-10 0h10'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols with compliance built-in',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    }
  ];

  const ctaHighlights = [
    'No credit card required',
    'Free 14-day trial',
    'Cancel anytime'
  ];

  return (
    <section 
      id="plans" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik02MCAwSDMwdjMwaDMweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">Enterprise Solutions</h2>
            <h1 className="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 sm:text-6xl">
              Flexible Plans
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              Scalable solutions designed for businesses of all sizes.
              Only pay for what you need with transparent pricing and no hidden fees.
            </p>
          </motion.div>
        </div>

        {/* Plan Switcher */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 p-1 rounded-full backdrop-blur-sm border border-gray-700/50 inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isYearly 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly <span className="text-xs opacity-90 ml-1">(Save 15%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.keys(planPricing) as PlanType[]).map((plan, index) => {
            const isSelected = selectedPlan === plan;
            const price = isYearly ? planPricing[plan].yearly : planPricing[plan].monthly;
            const features = planFeatures[plan];
            
            return (
              <motion.div
                key={plan}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className={`relative rounded-2xl overflow-hidden transform transition-transform duration-300 ${
                  isSelected ? 'scale-105 md:scale-110 z-10' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                {/* Card Gradient Border */}
                <div className={`absolute -inset-px rounded-2xl ${
                  isSelected 
                    ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' 
                    : 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700'
                }`}></div>

                {/* Card Content */}
                <div className="relative bg-gray-900 m-px rounded-2xl flex flex-col h-full">
                  {/* Popular Badge */}
                  {plan === 'professional' && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold py-1 px-4 rounded-bl-lg rounded-tr-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="p-6 pb-0">
                    <h3 className="text-xl font-bold text-white capitalize mb-1">{plan}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {plan === 'essential' && 'Perfect for small teams'}
                      {plan === 'professional' && 'Ideal for growing businesses'}
                      {plan === 'enterprise' && 'For organizations at scale'}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline mb-6">
                      <span className="text-5xl font-extrabold text-white">${price}</span>
                      <span className="text-gray-400 ml-2">/{isYearly ? 'year' : 'month'}</span>
                    </div>

                    {/* Selected Check */}
                    <div className={`h-1.5 w-16 rounded-full mb-6 transition-colors duration-300 ${
                      isSelected ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gray-700'
                    }`}></div>
                  </div>

                  {/* Feature List */}
                  <div className="px-6 py-4 flex-grow">
                    <ul className="space-y-3">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg 
                            className={`h-5 w-5 flex-shrink-0 ${
                              isSelected ? 'text-indigo-400' : 'text-gray-400'
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="p-6 pt-0">
                    <button 
                      className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-500/20'
                          : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-750 hover:text-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: isInView ? 0 : 40, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Why Choose MilServices</h3>
            <p className="text-gray-400 mt-2">All plans include these powerful features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="flex flex-col items-center p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center mb-4">
                  <svg 
                    className="w-6 h-6 text-indigo-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
}
