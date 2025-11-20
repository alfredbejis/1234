'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ThermometerSun, 
  Activity, 
  Car, 
  Leaf, 
  ClipboardCheck, 
  Lightbulb, 
  Package, 
  BadgeEuro, 
  Flame, 
  Wind, 
  Droplets, 
  Battery 
} from 'lucide-react';

const services = [
  {
    title: "Auditorías Energéticas",
    description: "Análisis exhaustivo de consumo para identificar oportunidades de ahorro y eficiencia energética.",
    icon: ClipboardCheck,
    iconColor: "text-neon-green"
  },
  {
    title: "Monitorización",
    description: "Sistemas inteligentes para centralizar la gestión, optimizar el consumo y reducir costes en tiempo real.",
    icon: Activity,
    iconColor: "text-neon-cyan"
  },
  {
    title: "CAEs",
    description: "Monetizamos tus ahorros gestionando los Certificados de Ahorro Energético de tu empresa.",
    icon: BadgeEuro,
    iconColor: "text-neon-purple"
  },
  {
    title: "Aerotermia",
    description: "Aprovechamos la energía del aire para climatización, eliminando la dependencia de combustibles fósiles.",
    icon: ThermometerSun,
    iconColor: "text-yellow-400"
  },
  {
    title: "Iluminación LED",
    description: "Proyectos de sustitución tecnológica para reducir drásticamente el consumo y mejorar la calidad lumínica.",
    icon: Lightbulb,
    iconColor: "text-yellow-300"
  },
  {
    title: "Movilidad Eléctrica",
    description: "Infraestructuras de recarga de vehículos para facilitar la transición hacia una flota sostenible.",
    icon: Car,
    iconColor: "text-blue-400"
  },
  {
    title: "Huella de Carbono",
    description: "Medición y consultoría para cumplir con los alcances 1, 2 y 3 de sostenibilidad corporativa.",
    icon: Leaf,
    iconColor: "text-green-500"
  },
  {
    title: "Geotermia",
    description: "Energía renovable de alta eficiencia que genera calor y electricidad aprovechando el subsuelo.",
    icon: Flame,
    iconColor: "text-orange-500"
  },
  {
    title: "Mini Eólica",
    description: "Generación distribuida a pequeña escala para autoconsumo eficiente, ideal para zonas ventosas.",
    icon: Wind,
    iconColor: "text-cyan-200"
  },
  {
    title: "Hidrógeno Verde",
    description: "Soluciones avanzadas de energía limpia para descarbonizar procesos industriales complejos.",
    icon: Droplets,
    iconColor: "text-blue-300"
  },
  {
    title: "Baterías de Condensadores",
    description: "Eliminamos las penalizaciones por energía reactiva en tu factura mediante compensación técnica.",
    icon: Battery,
    iconColor: "text-red-400"
  },
  {
    title: "Pack Sostenibilidad",
    description: "Proyectos integrales diseñados 100% a la medida de las necesidades estratégicas de tu cliente.",
    icon: Package,
    iconColor: "text-purple-400"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 px-4 sm:px-6 relative scroll-mt-12">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6">
            Soluciones <br className="md:hidden"/>
            <span className="shimmer-text-enhanced">
              Integrales 360°
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Desde la auditoría inicial hasta la implementación de tecnologías renovables. Todo lo que tu empresa necesita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-dark-800/40 border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-dark-800/60 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:border-white/30"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="mb-4 md:mb-6 flex items-center justify-between">
                <div className="p-2 md:p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <service.icon size={24} className={`md:w-7 md:h-7 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  <service.icon size={48} className={service.iconColor} />
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 group-hover:text-neon-green transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;