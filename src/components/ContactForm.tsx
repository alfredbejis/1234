'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSubmit?: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  return (
    <section id="contacto" className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden scroll-mt-12">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neon-purple/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-6 md:p-16 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 shadow-[0_0_50px_rgba(204,255,0,0.2),0_0_100px_rgba(0,255,255,0.15),0_0_150px_rgba(188,19,254,0.1)] relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-green/3 via-transparent to-neon-purple/3 opacity-60" />
            <div className="absolute top-20 left-20 w-40 h-40 bg-neon-green/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-52 h-52 bg-neon-purple/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-neon-cyan/8 rounded-full blur-2xl animate-pulse animation-delay-4000" />
          </div>

          <div className="text-center mb-8 md:mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-neon-purple">
              Empieza a Ahorrar Hoy
            </h2>
            <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
              Déjanos tus datos y en un plazo de 24 horas, te contactaremos para pedir tu factura y realizar el estudio.
            </p>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            onSubmit={onSubmit}
            className="space-y-6 md:space-y-8 relative z-10"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="group relative">
                <input 
                  type="text" 
                  name="name"
                  required
                  className="peer w-full bg-transparent border-b border-gray-600 py-2 md:py-3 text-white focus:outline-none focus:border-neon-green transition-colors placeholder-transparent text-base md:text-lg"
                  placeholder="Tu nombre"
                  id="name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-green">
                  NOMBRE
                </label>
              </div>
              <div className="group relative">
                <input 
                  type="text" 
                  name="company"
                  className="peer w-full bg-transparent border-b border-gray-600 py-2 md:py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors placeholder-transparent text-base md:text-lg"
                  placeholder="Empresa"
                  id="company"
                />
                <label htmlFor="company" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-cyan">
                  EMPRESA (OPCIONAL)
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="group relative">
                <input 
                  type="email" 
                  name="email"
                  required
                  className="peer w-full bg-transparent border-b border-gray-600 py-2 md:py-3 text-white focus:outline-none focus:border-neon-purple transition-colors placeholder-transparent text-base md:text-lg"
                  placeholder="Email"
                  id="email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-purple">
                  EMAIL
                </label>
              </div>
              <div className="group relative">
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="peer w-full bg-transparent border-b border-gray-600 py-2 md:py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors placeholder-transparent text-base md:text-lg"
                  placeholder="Teléfono"
                  id="phone"
                />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-cyan">
                  TELÉFONO
                </label>
              </div>
            </div>

            <div className="group relative">
              <textarea 
                rows={4}
                name="message"
                className="peer w-full bg-transparent border-b border-gray-600 py-2 md:py-3 text-white focus:outline-none focus:border-neon-green transition-colors resize-none placeholder-transparent text-base md:text-lg"
                placeholder="Mensaje"
                id="message"
              />
              <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-green">
                MENSAJE
              </label>
            </div>

            <div className="pt-6 flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple text-black px-8 py-4 md:px-12 md:py-5 rounded-full font-display font-bold text-base md:text-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.5),0_0_50px_rgba(0,255,255,0.3),0_0_70px_rgba(188,19,254,0.2)] transition-all duration-300 transform hover:scale-105"
              >
                SOLICITAR AUDITORÍA GRATUITA
              </motion.button>
            </div>
            <p className="text-center text-[10px] md:text-xs text-gray-600 mt-4">
              Al enviar este formulario, aceptas nuestra política de privacidad.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;