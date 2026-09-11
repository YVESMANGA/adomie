import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  // Si tu utilises le composant <Image /> de Next.js avec des images locales :
  images: {
    unoptimized: true,
  },
  eslint: {
    // Permet de finaliser le build de production même en présence d'avertissements/erreurs ESLint
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
