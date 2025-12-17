"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { Code2 } from "lucide-react";

export default function Projects() {
  
  const projects = [
    {
      title: "Gourmet Experience",
      description: "Sitio web moderno para un restaurante de alta gama. Optimizado para SEO local y con carga ultra-rápida para retener clientes móviles.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      image: "/projects/restaurant.png", // Recuerda poner imágenes reales luego
      demoUrl: "https://gastro-lab.vercel.app/",
      repoUrl: "#",
    },
    {
      title: "D'Carito E-commerce",
      description: "Tienda online completa para boutique de lencería. Incluye gestión de inventario en tiempo real, catálogo dinámico con CMS (Sanity) y pasarela de pagos.",
      tags: ["Next.js", "Sanity CMS", "E-commerce"],
      image: "/projects/tienda.png",
      demoUrl: "https://dcarito-tienda.vercel.app/",
      repoUrl: "#",
    },
    {
      title: "Hospital de Barranca",
      description: "Portal institucional y sistemas internos de gestión de salud. Desarrollo enfocado en la accesibilidad al ciudadano y la integridad de datos estadísticos médicos.",
      tags: ["Sistemas de Salud", "Base de Datos", "Seguridad"],
      image: "/projects/hospital.png",
      demoUrl: "https://hospitalbarranca.gob.pe/portal/", // Aquí podrías poner el link real del hospital si es público
    },
  ];

  return (
    <section id="proyectos" className="pt-24 pb-60 bg-slate-950 relative">
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
            Desde e-commerce hasta sistemas de salud complejos. Desarrollo soluciones adaptadas a cada industria.
          </p>
        </div>

        {/* CAMBIOS REALIZADOS:
   1. grid-cols-1: Obliga a que en móvil sea 1 sola columna.
   2. gap-10: Aumenté el espacio entre tarjetas para que no se vean pegadas.
*/}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {projects.map((project, index) => (
    <ProjectCard key={index} {...project} index={index} />
  ))}
</div>

      </div>
    </section>
  );
}