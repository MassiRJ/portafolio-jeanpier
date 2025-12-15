import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <Code2 className="text-purple-500" />
          <span>DevPortfolio</span>
        </div>

        <p className="text-slate-500 text-sm flex items-center gap-1">
          Hecho con <Heart size={14} className="text-red-500 fill-red-500" /> desde Perú
        </p>

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}