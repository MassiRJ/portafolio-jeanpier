"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { Code2 } from "lucide-react";

export default function Projects() {
  
  // Aquí definimos tus proyectos. ¡Fácil de editar!
  const projects = [
    {
      title: "Gourmet Experience",
      description: "Sitio web moderno para un restaurante de alta gama. Optimizado para SEO local y con carga ultra-rápida para retener clientes móviles.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      image: "/projects/restaurant.jpg",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "QuizMaster Pro",
      description: "Aplicación interactiva de simulación de exámenes (tipo MTC). Incluye sistema de puntuación en tiempo real y banco de preguntas dinámico.",
      tags: ["React", "TypeScript", "State Management"],
      image: "/projects/quiz.jpg",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Finanzas Perú Tools",
      description: "Plataforma de herramientas tributarias y financieras. Diseñada con enfoque en monetización (AdSense) y alto tráfico.",
      tags: ["Next.js", "SEO Avanzado", "Google Ads"],
      image: "/projects/finance.jpg",
      demoUrl: "#",
      // repoUrl: "#", // Ejemplo: Si es privado, no pones esta línea
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
            <Code2 size={16} />
            <span>Portafolio Destacado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos que generan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Resultados</span>
          </h2>
          <p className="text-slate-400">
            Cada línea de código tiene un propósito: resolver problemas reales y mejorar la experiencia del usuario.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}