"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-slate-950/0 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Columna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Creo experiencias web que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">venden</span>.
          </h1>
          
          <p className="text-slate-400 text-lg mb-8 max-w-lg">
            Ayudo a negocios y emprendedores a transformar visitantes en clientes mediante desarrollo web moderno, rápido y estratégico.
          </p>

          {/* ... código anterior ... */}

<div className="flex flex-col sm:flex-row gap-4">
  {/* Botón 1: Baja a la sección de Proyectos */}
  <a 
    href="#proyectos"
    className="flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
  >
    Ver mis Proyectos
    <ArrowRight size={20} />
  </a>

  {/* Botón 2: Baja directo al formulario de Contacto */}
  <a 
    href="#contacto"
    className="flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white"
  >
    Hablemos
  </a>
</div>

{/* ... resto del código ... */}
        </motion.div>

        {/* Columna Visual (Abstracta o tu foto) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl">
            {/* Simulación de código o métrica de éxito */}
            <div className="flex items-center gap-4 mb-4 border-b border-slate-800 pb-4">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Rendimiento Web</p>
                <p className="text-xl font-bold text-white">+100% Velocidad</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <Code2 size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Tecnología</p>
                <p className="text-xl font-bold text-white">Next.js & React</p>
              </div>
            </div>
          </div>
          
          {/* Elementos decorativos de fondo */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}