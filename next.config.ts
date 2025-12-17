import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Advertencia: Esto permite que las compilaciones de producción
    // se completen con éxito incluso si hay errores de ESLint.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚠️ Atención: Esto permite que las compilaciones de producción
    // se completen con éxito incluso si hay errores de tipo TypeScript.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;