"use client";

import { motion } from "framer-motion";
import { Layout, Smartphone, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  
  const services = [
    {
      icon: <Layout className="w-10 h-10 text-purple-400" />,
      title: "Desarrollo Web Corporativo",
      description: "Ideal para negocios que necesitan presencia digital seria. No uso plantillas lentas; creo sitios a medida que Google ama.",
      features: ["Diseño UI/UX Moderno", "Optimización SEO Básica", "Carga ultra-rápida", "Integración con WhatsApp"],
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
      title: "Aplicaciones Web (SaaS)",
      description: "Para quien necesita más que una web informativa. Transformo procesos complejos en software fácil de usar.",
      features: ["Paneles de Administración", "Bases de Datos Seguras", "Cuentas de Usuarios", "Pagos en Línea"],
    },
    {
      icon: <LineChart className="w-10 h-10 text-green-400" />,
      title: "Optimización y Monetización",
      description: "¿Ya tienes web pero no vende? La audito, optimizo y preparo para monetizar con AdSense o ventas directas.",
      features: ["Auditoría de Rendimiento", "Estrategia de Monetización", "Corrección de Errores", "Analítica Web"],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Soluciones a la Medida de tu <span className="text-purple-400">Negocio</span>
          </h2>
          <p className="text-slate-400">
            No vendo código, vendo herramientas digitales que trabajan por ti las 24 horas del día.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/30 hover:bg-slate-900/50 transition-all duration-300 group"
            >
              {/* Icono */}
              <div className="mb-6 bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-slate-700">
                {service.icon}
              </div>

              {/* Título y Descripción */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Lista de Características */}
              <ul className="space-y-3 mb-8">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* ... resto del código anterior ... */}

{/* Botón CTA - Reemplaza la etiqueta <button> por esta etiqueta <a> */}
<a 
  href="#contacto" 
  className="w-full py-3 rounded-lg border border-slate-700 text-white font-medium hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-2 group-hover:border-white cursor-pointer"
>
  Solicitar Cotización
  <ArrowRight size={16} />
</a>

{/* ... resto del código ... */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}