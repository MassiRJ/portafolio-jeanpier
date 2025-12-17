"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
// Importamos AnimatePresence para poder animar cuando el componente DESAPARECE
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Servicios", href: "#servicios" },
  ];

  // Variantes para la animación del contenedor del menú
  const menuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  // Variantes para los enlaces (aparecen uno por uno)
  const containerVars = {
    initial: { transition: { staggerChildren: 0.09 } },
    animate: { transition: { staggerChildren: 0.09 } },
  };

  const linkVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative z-50">
          
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold flex items-center gap-2 z-50" onClick={() => setIsOpen(false)}>
            <Code2 className="text-purple-500" />
            <span>Dev<span className="text-purple-500">Portfolio</span></span>
          </Link>

          {/* DESKTOP MENU (Se mantiene igual) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contacto"
              className="bg-white text-slate-950 px-5 py-2 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors"
            >
              Contáctame
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON (Animado) */}
          <button 
            className="md:hidden text-white z-50 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="relative w-6 h-6 flex items-center justify-center"
            >
              {/* Icono condicional con animación de rotación */}
              <motion.span
                variants={{
                  closed: { rotate: 0, opacity: 1 },
                  open: { rotate: 90, opacity: 0 }
                }}
                className="absolute"
              >
                <Menu size={28} />
              </motion.span>
              
              <motion.span
                variants={{
                  closed: { rotate: -90, opacity: 0 },
                  open: { rotate: 0, opacity: 1 }
                }}
                className="absolute"
              >
                <X size={28} className="text-purple-500" />
              </motion.span>
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
          >
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center gap-8 w-full"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVars} className="overflow-hidden">
                  <Link 
                    href={link.href}
                    className="text-3xl font-bold text-white hover:text-purple-500 transition-colors tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVars} className="mt-8">
                <Link 
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  Hablemos Ahora
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              {/* Decoración de fondo */}
              <div className="absolute top-1/4 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}