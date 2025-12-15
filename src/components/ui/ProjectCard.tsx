"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {/* Imagen del Proyecto (Placeholder inteligente) */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
           {/* Aquí iría la imagen real con <Image />, por ahora usamos un div placeholder */}
           <span className="font-mono text-sm">Vista previa de {title}</span>
        </div>
        {/* Overlay al hacer hover */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-white text-slate-950 rounded-full hover:scale-110 transition-transform font-bold flex items-center gap-2 text-sm">
              <ExternalLink size={16} /> Ver Demo
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          {repoUrl && (
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