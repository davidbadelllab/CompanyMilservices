'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ReactNode } from 'react';

// Define types for our services
type ServiceFeature = string;

interface ServiceInfo {
  title: string;
  description: string;
  features: ServiceFeature[];
  icon: ReactNode;
}

type ServiceKey = 'development' | 'git' | 'aws' | 'architecture';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<ServiceKey>('development');

  const services: Record<ServiceKey, ServiceInfo> = {
    development: {
      title: 'Application Development',
      description: 'Creamos aplicaciones robustas y escalables utilizando las últimas tecnologías, garantizando un rendimiento óptimo y una experiencia de usuario excepcional.',
      features: [
        'Desarrollo de aplicaciones web progresivas (PWA)',
        'Soluciones móviles multiplataforma con React Native',
        'Aplicaciones a medida para necesidades empresariales',
        'Modernización de aplicaciones legacy',
        'Integración con sistemas existentes',
        'Metodologías ágiles y desarrollo iterativo'
      ],
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3H7C5.34315 3 4 4.34315 4 6V7M8 3H16M8 3V7M16 3H17C18.6569 3 20 4.34315 20 6V7M16 3V7M4 7V17C4 18.6569 5.34315 20 7 20H8M4 7H8M8 7V20M8 20H16M16 20H17C18.6569 20 20 18.6569 20 17V7M16 20V7M20 7H16M16 7V11M16 12V15M16 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 11L9 15H15L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    git: {
      title: 'Control de Versiones Git',
      description: 'Implementamos flujos de trabajo eficientes basados en Git para garantizar un desarrollo colaborativo organizado y proteger tu código fuente.',
      features: [
        'Configuración de repositorios Git optimizados',
        'Implementación de flujos de trabajo GitFlow o GitHub Flow',
        'Integración con herramientas de CI/CD',
        'Automatización de procesos de revisión de código',
        'Protección de branches y políticas de merge',
        'Capacitación en buenas prácticas Git'
      ],
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L12 2L9 5M15 5L12 8M15 5H18C19.6569 5 21 6.34315 21 8V16M9 5L12 8M9 5H6C4.34315 5 3 6.34315 3 8V16M12 8V12M21 16C21 17.6569 19.6569 19 18 19H15M21 16L18 13M21 16L18 19M3 16C3 17.6569 4.34315 19 6 19H9M3 16L6 13M3 16L6 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    aws: {
      title: 'Alojamiento en AWS',
      description: 'Diseñamos y gestionamos infraestructuras en la nube AWS robustas y seguras, optimizadas para tus aplicaciones específicas.',
      features: [
        'Arquitecturas serverless con AWS Lambda',
        'Implementación de contenedores con ECS y EKS',
        'Configuración de balanceadores de carga y alta disponibilidad',
        'Optimización de costos de infraestructura',
        'Monitoreo y alertas automatizadas',
        'Copias de seguridad y estrategias de recuperación'
      ],
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V10C22 11.1046 21.1046 12 20 12H4C2.89543 12 2 11.1046 2 10V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M2 18C2 16.8954 2.89543 16 4 16H20C21.1046 16 22 16.8954 22 18V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 8H7M10 8H11M6 18H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 18H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    architecture: {
      title: 'Diseño de Arquitecturas',
      description: 'Creamos arquitecturas de software modernas y escalables, optimizadas para rendimiento, seguridad y mantenibilidad a largo plazo.',
      features: [
        'Arquitecturas de microservicios',
        'Diseños orientados a eventos (Event-Driven)',
        'Arquitecturas serverless y cloud-native',
        'Planes de escalabilidad y resiliencia',
        'Modelado de dominio (DDD)',
        'Arquitecturas seguras por diseño'
      ],
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-blue-900/90 to-gray-900 text-white overflow-hidden"
    >
      {/* Abstract background elements */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Soluciones Técnicas</h2>
            <h1 className="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 sm:text-6xl">
              Nuestros Servicios
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              Ofrecemos soluciones integrales para el desarrollo, despliegue y mantenimiento
              de aplicaciones modernas con los más altos estándares de calidad e innovación.
            </p>
          </motion.div>
        </div>

        {/* Services Tabs */}
        <div className="flex flex-wrap justify-center mb-10 max-w-3xl mx-auto">
          {Object.keys(services).map((serviceKey, index) => (
            <motion.button
              key={serviceKey}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className={`m-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === serviceKey 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-800/50 text-blue-300 hover:bg-gray-800/80 hover:text-blue-200'
              }`}
              onClick={() => setActiveTab(serviceKey as ServiceKey)}
            >
              {services[serviceKey as ServiceKey].title}
            </motion.button>
          ))}
        </div>

        {/* Active Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-blue-900/30 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Service Icon and Title */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-700/30 text-blue-400 mb-4">
                {services[activeTab as ServiceKey].icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{services[activeTab as ServiceKey].title}</h3>
              <p className="text-blue-200 text-center md:text-left">{services[activeTab as ServiceKey].description}</p>
            </div>
            
            {/* Service Features */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Características principales:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services[activeTab as ServiceKey].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg className="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 flex justify-end"
              >
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2">
                  <span>Solicitar información</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Tools and Technologies Grid */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: isInView ? 0 : 40, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl font-bold text-white mb-10">Tecnologías que utilizamos</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', logo: '/react.svg', color: 'bg-blue-500' },
              { name: 'Node.js', logo: '/nodejs.svg', color: 'bg-green-600' },
              { name: 'AWS', logo: '/aws.svg', color: 'bg-yellow-500' },
              { name: 'Docker', logo: '/docker.svg', color: 'bg-blue-600' },
              { name: 'Git', logo: '/git.svg', color: 'bg-red-500' },
              { name: 'Kubernetes', logo: '/kubernetes.svg', color: 'bg-blue-500' },
              { name: 'TypeScript', logo: '/typescript.svg', color: 'bg-blue-700' },
              { name: 'Python', logo: '/python.svg', color: 'bg-yellow-600' },
              { name: 'MongoDB', logo: '/mongodb.svg', color: 'bg-green-500' },
              { name: 'PostgreSQL', logo: '/postgresql.svg', color: 'bg-blue-600' },
              { name: 'GraphQL', logo: '/graphql.svg', color: 'bg-pink-600' },
              { name: 'Next.js', logo: '/nextjs.svg', color: 'bg-gray-800' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border border-blue-900/30 flex flex-col items-center hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${tech.color} rounded-full flex items-center justify-center mb-3`}>
                  <div className="text-white text-xl font-bold">{tech.name.charAt(0)}</div>
                </div>
                <span className="text-blue-200 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 