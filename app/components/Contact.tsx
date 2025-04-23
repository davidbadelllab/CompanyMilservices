'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeField, setActiveField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [charCount, setCharCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    setCharCount(formData.message.length);
  }, [formData.message]);
  
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nombre requerido';
    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    else if (!validateEmail(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.subject) newErrors.subject = 'Asunto requerido';
    if (!formData.message.trim()) newErrors.message = 'Mensaje requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };
  
  const handleFocus = (field: string) => {
    setActiveField(field);
  };
  
  const handleBlur = () => {
    setActiveField(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      // 95% chance of success for demo purposes
      const success = Math.random() > 0.05;
      setFormState(success ? 'success' : 'error');
      
      if (success) {
        setShowConfetti(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset form state and confetti after 3 seconds
        setTimeout(() => {
          setFormState('idle');
          setShowConfetti(false);
        }, 3000);
      }
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 px-4 relative bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Interactive Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[15%] w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[35%] w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(11, 27, 59, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 27, 59, 0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '-1px -1px',
          }}
        />
      </div>
      
      {/* Success Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 10 + 5;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            const color = ['bg-blue-500', 'bg-purple-500', 'bg-cyan-500', 'bg-indigo-500', 'bg-blue-400'][Math.floor(Math.random() * 5)];
            
            return (
              <div 
                key={i}
                className={`absolute top-0 ${color} rounded-md opacity-70`}
                style={{
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: 'translateY(-100px)',
                  animation: `confetti ${animationDuration}s ease-in-out forwards`
                }}
              />
            );
          })}
        </div>
      )}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-wider uppercase text-blue-400 mb-2 block">Contáctanos</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-flex items-center justify-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Conversemos
            </span>
            <span className="ml-2 relative inline-block">
              <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-50" style={{ animationDuration: '2s' }}></span>
              <span className="relative flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-lg">
            Estamos aquí para escucharte y responder todas tus dudas. Déjanos tu mensaje y te responderemos pronto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form - Wider column */}
          <div className="lg:col-span-3 bg-gray-900/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 relative overflow-hidden border border-blue-900/30">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2 text-white">Envíanos un mensaje</h3>
              <p className="text-blue-200 mb-6">Completa el formulario y te responderemos lo antes posible</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 text-blue-300 ${activeField === 'name' || formData.name ? 'translate-y-[-180%] scale-90 text-blue-400' : ''}`}>
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <span>Nombre</span>
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-800/50 px-4 py-4 rounded-xl text-white outline-none transition-all duration-300 pl-12 ${
                        activeField === 'name' ? 'ring-2 ring-blue-500/30 border-blue-400' : 'border border-blue-900/50'
                      } ${errors.name ? 'border-red-400 bg-red-900/20' : ''}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    
                    {/* Animated focus indicator */}
                    {activeField === 'name' && (
                      <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-expand-width"></span>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 text-blue-300 ${activeField === 'email' || formData.email ? 'translate-y-[-180%] scale-90 text-blue-400' : ''}`}>
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>Email</span>
                    </div>
                    <input
                      id="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-800/50 px-4 py-4 rounded-xl text-white outline-none transition-all duration-300 pl-12 ${
                        activeField === 'email' ? 'ring-2 ring-blue-500/30 border-blue-400' : 'border border-blue-900/50'
                      } ${errors.email ? 'border-red-400 bg-red-900/20' : ''}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    
                    {/* Animated focus indicator */}
                    {activeField === 'email' && (
                      <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-expand-width"></span>
                    )}
                  </div>
                </div>
                
                {/* Subject Field - Modern Select */}
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 text-blue-300 ${activeField === 'subject' || formData.subject ? 'translate-y-[-180%] scale-90 text-blue-400' : ''}`}>
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                    </svg>
                    <span>Asunto</span>
                  </div>
                  
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className={`w-full bg-gray-800/50 px-4 py-4 rounded-xl text-white outline-none transition-all duration-300 pl-12 appearance-none ${
                      activeField === 'subject' ? 'ring-2 ring-blue-500/30 border-blue-400' : 'border border-blue-900/50'
                    } ${errors.subject ? 'border-red-400 bg-red-900/20' : ''}`}
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="general">Consulta General</option>
                    <option value="support">Soporte Técnico</option>
                    <option value="sales">Información de Ventas</option>
                    <option value="partnership">Oportunidades de Colaboración</option>
                  </select>
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  
                  {/* Custom select arrow */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className={`h-5 w-5 transition-transform duration-300 ${activeField === 'subject' ? 'text-blue-400 rotate-180' : 'text-blue-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Animated focus indicator */}
                  {activeField === 'subject' && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-expand-width"></span>
                  )}
                </div>
                
                {/* Message Field */}
                <div className="relative">
                  <div className={`absolute left-4 top-6 transform transition-all duration-300 text-blue-300 ${activeField === 'message' || formData.message ? 'translate-y-[-130%] scale-90 text-blue-400' : ''}`}>
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                    <span>Tu mensaje</span>
                  </div>
                  
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className={`w-full bg-gray-800/50 px-4 py-4 rounded-xl text-white outline-none transition-all duration-300 pl-12 resize-none ${
                      activeField === 'message' ? 'ring-2 ring-blue-500/30 border-blue-400' : 'border border-blue-900/50'
                    } ${errors.message ? 'border-red-400 bg-red-900/20' : ''}`}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  
                  {/* Character counter */}
                  <div className={`absolute bottom-3 right-3 text-xs ${charCount > 200 ? 'text-blue-400' : 'text-blue-300/70'}`}>
                    {charCount} / 500
                  </div>
                  
                  {/* Animated focus indicator */}
                  {activeField === 'message' && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-expand-width"></span>
                  )}
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 relative overflow-hidden shadow-lg group ${
                      formState === 'submitting' 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02]'
                    }`}
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-indigo-600 to-blue-600"></span>
                    
                    <span className="relative flex items-center justify-center">
                      {formState === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : formState === 'success' ? (
                        <>
                          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          ¡Mensaje Enviado!
                        </>
                      ) : formState === 'error' ? (
                        <>
                          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          Reintentar
                        </>
                      ) : (
                        <>
                          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                          Enviar Mensaje
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Info & Social - Smaller column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Card */}
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 relative overflow-hidden border border-blue-900/30 transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-600/10 blur-xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white relative">Contacto Directo</h3>
              
              <div className="space-y-6 relative">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-700/30 flex items-center justify-center text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Teléfono</h4>
                    <p className="mt-1 text-blue-200 font-medium">(569) 66363585</p>
                    <p className="mt-1 text-sm text-blue-300/70">Lun-Vie de 8am a 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-700/30 flex items-center justify-center text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Email</h4>
                    <p className="mt-1 text-blue-200 font-medium">milservicestech@gmail.com</p>
                    <p className="mt-1 text-sm text-blue-300/70">Respondemos en menos de 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-700/30 flex items-center justify-center text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Oficina</h4>
                    <p className="mt-1 text-blue-200 font-medium">General freire 80, Piso 8</p>
                    <p className="mt-1 text-sm text-blue-300/70">Chile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100px);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh - 100px));
            opacity: 0;
          }
        }
        
        @keyframes expand-width {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-expand-width {
          animation: expand-width 0.3s ease-out forwards;
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}
