import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact"; // Nuevo
import Footer from "@/components/layout/Footer";     // Nuevo

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>

      <Projects />
      
      <Services />

      <About />

      {/* Sección Final de Contacto */}
      <Contact />

      {/* Pie de página */}
      <Footer />
    </main>
  );
}