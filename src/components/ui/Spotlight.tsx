"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Spotlight() {
  
  const [isHovering, setIsHovering] = useState(false);

  // Usamos useSpring para que el movimiento no sea robótico, sino suave (física)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Actualizamos los valores del spring en lugar del state directo
      x.set(e.clientX - 200); // Restamos la mitad del tamaño para centrar
      y.set(e.clientY - 200);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovering ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen hidden md:block"
    />
  );
}