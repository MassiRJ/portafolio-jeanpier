"use client";

import { motion } from "framer-motion";
import { Code2, Building2, GraduationCap, Database } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Tu Historia Profesional */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
              <GraduationCap size={16} />
              <span>Ing. Informático y de Sistemas</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Jeanpier Rios Colonia: <br />
              <span className="text-purple-500">Desarrollo que da confianza</span>
            </h2>
            
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                La programación no es un juego para mí; es mi profesión. Soy <strong>Ingeniero Informático</strong> y actualmente me desempeño en el área de Estadística e Informática del <strong>Hospital de Barranca</strong>.
              </p>
              <p>
                Allí desarrollé el portal web institucional y gestiono sistemas de salud donde la precisión y la seguridad de los datos son vitales.
              </p>
              <p>
                <strong className="text-white">¿Qué significa esto para tu proyecto?</strong> Que aplico el mismo rigor y calidad técnica a mis clientes particulares. Ya sea una web corporativa o un sistema de ventas, obtienes un desarrollo robusto, seguro y bien estructurado.
              </p>
            </div>

            {/* Datos rápidos */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-3">
                <Building2 className="text-purple-500" size={24} />
                <div>
                  <h4 className="font-bold text-white">Sector Salud</h4>
                  <p className="text-xs text-slate-500">Experiencia en Sistemas</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-3">
                <Database className="text-blue-500" size={24} />
                <div>
                  <h4 className="font-bold text-white">Full Stack</h4>
                  <p className="text-xs text-slate-500">Frontend & Backend</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Stack Técnico Equilibrado */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Code2 size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Perfil Técnico</h3>
                  <p className="text-slate-400 text-sm">Versatilidad total</p>
                </div>
              </div>
              
              <div className="space-y-5">
                {/* Skill Bars - Mostrando equilibrio */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">Frontend (Interfaces Modernas)</span>
                    <span className="text-purple-400">Avanzado</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[90%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">Backend (Lógica y Seguridad)</span>
                    <span className="text-blue-400">Avanzado</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">Bases de Datos (SQL/NoSQL)</span>
                    <span className="text-green-400">Sólido</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decoración */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}