"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, TrendingUp, Database, ShieldCheck } from "lucide-react";

export default function Hero() {
  // --- LÓGICA DE MÁQUINA DE ESCRIBIR ---
  const words = ["Sistemas Robustos", "Soluciones Escalables", "Software a Medida", "Gestión de Datos"];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100; // Velocidad de borrado vs escritura
    const word = words[currentWord];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === word) {
        // Si terminó de escribir, espera un poco antes de borrar
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && displayText === "") {
        // Si terminó de borrar, pasa a la siguiente palabra
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      } else {
        // Proceso de escritura/borrado
        setDisplayText(
          isDeleting ? word.substring(0, displayText.length - 1) : word.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord, words]);

  // --- RENDERIZADO ---
  return (
    <section className="min-h-screen md:min-h-[100dvh] flex items-center justify-center bg-slate-950 text-white relative overflow-hidden pt-20 md:pt-0">
      
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-slate-950/0 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge de disponibilidad */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Ingeniero disponible para proyectos
          </div>

          {/* Título Principal con Máquina de Escribir */}
          {/* min-h fijado para evitar que el texto de abajo "salte" cuando cambia la longitud de la palabra */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 min-h-[140px] sm:min-h-[160px] md:min-h-[auto]">
            Diseño y Desarrollo de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {displayText}
            </span>
            <span className="animate-pulse text-purple-400">|</span>
          </h1>
          
          <p className="text-slate-400 text-lg mb-8 max-w-lg">
            Ayudo a empresas y organizaciones a digitalizar sus procesos con tecnología moderna. Desde portales institucionales hasta sistemas complejos de gestión.
          </p>

          {/* Botones de Acción (Ahora son enlaces <a>) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#proyectos"
              className="flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Ver mis Proyectos
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contacto"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold border border-slate-700 hover:border-slate-500 transition-colors text-white cursor-pointer"
            >
              Hablemos
            </a>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: VISUAL (Tarjeta Flotante) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Tarjeta Abstracta que simula un panel de control/sistema */}
          <div className="relative z-10 bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-2xl">
            
            {/* Header de la tarjeta simulada */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-slate-500 font-mono">system_status: active</div>
            </div>

            {/* Métrica 1: Rendimiento */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Rendimiento del Sistema</p>
                <p className="text-xl font-bold text-white">99.9% Uptime</p>
              </div>
            </div>

            {/* Métrica 2: Tecnología */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                <Database size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Gestión de Datos</p>
                <p className="text-xl font-bold text-white">SQL & NoSQL</p>
              </div>
            </div>

            {/* Métrica 3: Seguridad (Nuevo, por tu perfil de Hospital) */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Seguridad</p>
                <p className="text-xl font-bold text-white">Encriptado E2E</p>
              </div>
            </div>

          </div>
          
          {/* Elementos decorativos de fondo (blur) */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}