"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image"; // <--- Importante: Importamos el componente de imagen

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, image, demoUrl, repoUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
    >
      {/* Contenedor de la Imagen */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Aquí es donde se renderiza la imagen real */}
        <Image 
          src={image} 
          alt={title}
          fill // Esto hace que la imagen llene el contenedor
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay al hacer hover (Capa oscura + Botón) */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          {demoUrl && demoUrl !== "#" && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-white text-slate-950 rounded-full hover:scale-110 transition-transform font-bold flex items-center gap-2 text-sm">
              <ExternalLink size={16} /> Ver Demo
            </a>
          )}
        </div>
      </div>

      {/* Contenido Texto */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          {repoUrl && repoUrl !== "#" && (
            <a href={repoUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
        </div>

        <p className="text-slate-400 text-sm mb-6 line-clamp-3">
          {description}
        </p>

        {/* Tags / Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}