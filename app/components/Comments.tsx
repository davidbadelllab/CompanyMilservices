'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import DummyAvatar from './DummyAvatar';

interface Testimonial {
  id: string;
  user: {
    name: string;
    role: string;
    company: string;
  };
  text: string;
  date: string;
  rating: number;
  highlighted?: boolean;
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [newTestimonial, setNewTestimonial] = useState('');
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [activeTab, setActiveTab] = useState<'all' | 'featured'>('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Sample testimonials data
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      user: {
        name: 'María González',
        role: 'CTO',
        company: 'InnovaTech Solutions'
      },
      text: 'La transformación digital que Mil Services implementó para nuestra empresa ha sido revolucionaria. Desde el primer día, su enfoque estratégico y atención al detalle nos impresionó. El equipo no solo entregó una aplicación excepcional, sino que transformó completamente nuestra forma de operar.',
      date: 'Hace 2 semanas',
      rating: 5,
      highlighted: true
    },
    {
      id: '2',
      user: {
        name: 'Carlos Rodríguez',
        role: 'Director de Operaciones',
        company: 'CloudMaster'
      },
      text: 'La migración a AWS que realizaron fue impecable, sin tiempos de inactividad. Ahora nuestra infraestructura es mucho más estable, escalable y hemos reducido costos en un 30%. Su equipo de DevOps trabaja con una precisión increíble.',
      date: 'Hace 1 mes',
      rating: 5,
      highlighted: true
    },
    {
      id: '3',
      user: {
        name: 'Laura Martínez',
        role: 'Product Manager',
        company: 'EcoTech Innovations'
      },
      text: 'La aplicación móvil desarrollada por Mil Services superó todas nuestras expectativas. Su diseño intuitivo y rendimiento excepcional han impulsado nuestras conversiones en un 45%. Su enfoque en la experiencia de usuario realmente marca la diferencia.',
      date: 'Hace 2 meses',
      rating: 4,
      highlighted: false
    },
    {
      id: '4',
      user: {
        name: 'Alejandro Vega',
        role: 'CEO',
        company: 'FinTech Revolution'
      },
      text: 'Colaborar con Mil Services ha sido una experiencia transformadora para nuestra startup. Su capacidad para traducir ideas complejas en soluciones técnicas elegantes nos ha permitido lanzar nuestro producto en tiempo récord y con una calidad excepcional.',
      date: 'Hace 3 meses',
      rating: 5,
      highlighted: false
    }
  ]);

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.trim() || !newName.trim()) return;
    
    const testimonial: Testimonial = {
      id: Date.now().toString(),
      user: {
        name: newName,
        role: newRole || 'Cliente',
        company: newCompany || 'Empresa'
      },
      text: newTestimonial,
      date: 'Nuevo',
      rating: rating,
      highlighted: false
    };
    
    setTestimonials([testimonial, ...testimonials]);
    setNewTestimonial('');
    setNewName('');
    setNewRole('');
    setNewCompany('');
    setRating(5);
    setIsFormOpen(false);
  };

  const filteredTestimonials = activeTab === 'featured' 
    ? testimonials.filter(t => t.highlighted) 
    : testimonials;

  const getRandomGradient = (index: number) => {
    const gradients = [
      'from-blue-600 to-indigo-800',
      'from-indigo-600 to-purple-800',
      'from-purple-600 to-pink-800',
      'from-pink-600 to-rose-800',
      'from-blue-600 to-cyan-800',
      'from-emerald-600 to-teal-800',
    ];
    return gradients[index % gradients.length];
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-400'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const FormRating = () => {
    return (
      <div className="flex gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setRating(i + 1)}
            className="focus:outline-none"
          >
            <svg 
              className={`w-6 h-6 ${i < rating ? 'text-amber-400' : 'text-gray-400'} transition-colors duration-200 hover:text-amber-300`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-850 to-black text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob"></div>
        <div className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-4000"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? [0.1, 0.2, 0.1] : 0,
            y: isInView ? [0, -20, 0] : 0
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute top-10 right-10 w-20 h-20 border border-blue-500/20 rounded-full"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? [0.1, 0.2, 0.1] : 0,
            x: isInView ? [0, 20, 0] : 0
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 left-20 w-32 h-32 border border-purple-500/20 rounded-full"
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-2">OPINIONES QUE IMPORTAN</h2>
            <h1 className="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 sm:text-6xl">
              Historias de éxito
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto"
          >
            <p>
              Descubre cómo nuestras soluciones tecnológicas han transformado empresas 
              y potenciado el crecimiento de nuestros clientes en todo el mundo.
            </p>
          </motion.div>
        </div>

        {/* Tab Controls */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-blue-300 hover:text-blue-200'
              }`}
            >
              Todos los testimonios
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'featured' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-blue-300 hover:text-blue-200'
              }`}
            >
              Destacados
            </button>
          </div>
        </motion.div>

        {/* Add Testimonial Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-14"
        >
          <button
            onClick={() => setIsFormOpen(true)}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Compartir tu experiencia</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
          </button>
        </motion.div>

        {/* Testimonial Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-14 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-900/30 shadow-xl">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">Comparte tu experiencia</h3>
                <form onSubmit={handleAddTestimonial}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-blue-200 mb-2">Nombre completo</label>
                        <input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          placeholder="Tu nombre"
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-200 mb-2">Empresa</label>
                        <input
                          type="text"
                          value={newCompany}
                          onChange={(e) => setNewCompany(e.target.value)}
                          placeholder="Nombre de tu empresa"
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">Cargo / Rol</label>
                      <input
                        type="text"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        placeholder="Tu posición o cargo"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">Tu experiencia</label>
                      <textarea
                        value={newTestimonial}
                        onChange={(e) => setNewTestimonial(e.target.value)}
                        placeholder="Comparte detalles sobre tu experiencia trabajando con nosotros..."
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[120px]"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-2">Calificación</label>
                      <FormRating />
                    </div>

                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="px-5 py-2.5 bg-gray-700 text-gray-200 font-medium rounded-xl hover:bg-gray-600 transition-colors duration-200"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        Enviar testimonio
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: isInView ? 0 : 40, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 4) }}
              className={`group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-bl ${getRandomGradient(index)} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-bl from-white/5 to-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-blue-900/30 transition-colors duration-300 relative h-full flex flex-col">
                {testimonial.highlighted && (
                  <div className="absolute -top-1 -right-1">
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
                      <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Destacado
                    </span>
                  </div>
                )}

                <div className="flex items-start mb-6">
                  <div className="mr-4 relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                        <DummyAvatar 
                          name={testimonial.user.name} 
                          size={56} 
                          bgColor="#3B82F6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.user.name}</h3>
                    <p className="text-blue-300 text-sm">{testimonial.user.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.user.company}</p>
                    <div className="mt-1.5">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-gray-500">{testimonial.date}</span>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-200 leading-relaxed">"{testimonial.text}"</p>
                </div>

                <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-800 group-hover:border-blue-900/20 transition-colors duration-300">
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>Útil</span>
                  </div>
                  <div className="text-sm text-blue-400 font-medium">
                    <a href="#" className="flex items-center hover:text-blue-300 transition-colors duration-200">
                      <span>Ver proyecto</span>
                      <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">¿Listo para crear tu historia de éxito?</h3>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1 transition-all duration-300">
            Comienza tu proyecto
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 