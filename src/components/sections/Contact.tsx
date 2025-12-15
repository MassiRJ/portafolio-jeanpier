"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Datos Reales */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Hablemos de tu <span className="text-purple-500">Proyecto</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Desde Barranca para el mundo. Si buscas un ingeniero comprometido que entienda tus necesidades técnicas y de negocio, estoy a un mensaje de distancia.
            </p>

            <div className="space-y-6">
              {/* Correo */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-purple-400 border border-slate-800">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Correo Electrónico</p>
                  <a href="mailto:piererios@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                    piererios@gmail.com
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-purple-400 border border-slate-800">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Celular / WhatsApp</p>
                  <a href="https://wa.me/51934140549?text=Hola%20Jeanpier,%20vi%20tu%20portafolio" target="_blank" className="text-white font-medium hover:text-purple-400 transition-colors">
                    +51 934 140 549
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-purple-400 border border-slate-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Ubicación</p>
                  <p className="text-white font-medium">Barranca, Lima - Perú</p>
                </div>
              </div>
            </div>
            
            {/* Redes Sociales (Puedes poner tus links reales si tienes LinkedIn o GitHub) */}
            <div className="flex gap-4 mt-10">
              <a href="#" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-blue-700 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario (Se mantiene funcional visualmente) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Empresa</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Nombre de tu negocio" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Correo</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="ejemplo@correo.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
                Contactar a Jeanpier
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}