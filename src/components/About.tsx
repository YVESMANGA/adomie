"use client";
import { Sparkles, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
export default function AboutPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Section principale */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 bg-white rounded-3xl shadow-xl p-8 md:p-16 transform transition-transform hover:-translate-y-1">
        {/* Colonne gauche : Image + vidéo responsive */}
        <div className="md:w-1/2 w-full space-y-6">
          {/* Bloc Image */}
          <div className="space-y-2">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="/about.jpeg" // 👉 Remplacez par le chemin de votre image (ex: /sindia-site.jpg)
                alt="Image de notre site dans le parc industriel SINDIA au Sénégal"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Colonne droite : description */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#e95936] bg-clip-text  bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight">
            Adomie
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Nous sommes un fabricant professionnel spécialisé dans la recherche,
            le développement et la production de nouveaux matériaux de
            construction. Nous nous engageons à fournir au secteur du bâtiment
            des solutions de haute qualité et performantes et à contribuer à
            l'amélioration de la qualité des bâtiments grâce à des technologies
            innovantes.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Entreprise leader sénégalaise dans le domaine des nouveaux matériaux
            de construction, nous tirons parti de notre production locale pour
            offrir à nos clients un support technique immédiat et des garanties
            d'approvisionnement stables, faisant de nous un partenaire de
            confiance
          </p>

          {/* Badges points forts */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-blue-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L15.09 7.36H23.18L17.09 11.82L19.27 19.36L12 14.91L4.73 19.36L6.91 11.82L0.82 7.36H8.91L12 0Z" />
              </svg>
              Qualité & Innovation
            </span>
            <span className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-green-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15l6-6-1.41-1.41L13 14.17l-2.59-2.58L9 13l4 4z" />
              </svg>
              Fiabilité
            </span>
            <span className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-yellow-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 8l6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L3 9l6-1z" />
              </svg>
              Expertise sectorielle
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
