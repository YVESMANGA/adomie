import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white w-full min-h-[80vh] lg:min-h-[850px] flex items-center justify-center py-24 sm:py-32"
      style={{ backgroundImage: "url('/h.jpg')" }}
    >
      {/* Superposition de dégradé sombre pour maximiser la lisibilité et le contraste */}

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-none max-w-5xl">
          <span className="text-[#e95936]">Adomie </span>New Materials Co., Ltd
        </h1>

        {/* Sous-titre descriptive */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl leading-relaxed font-normal">
          Spécialistes de la production de la poudre de calcium lourde, de la
          poudre de mastic et des revêtements imperméables à haute performance.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Link
            href="/produits"
            className="bg-[#e95936] hover:bg-slate-950 text-white font-bold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase text-xs tracking-wider border border-[#e95936]"
          >
            <span>Découvrir nos produits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 hover:bg-white text-white hover:text-slate-950 font-bold px-8 py-4 rounded-md backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 uppercase text-xs tracking-wider border border-white/30"
          >
            <Phone className="w-4 h-4" />
            <span>Nous contacter</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
