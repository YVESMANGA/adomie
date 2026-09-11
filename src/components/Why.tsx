"use client";

import { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Données de témoignages adaptées au secteur des matériaux BTP / Zhengyuan
const testimonials = [
  {
    id: 1,
    quote:
      "La qualité des profilés en PVC et des matériaux de structure fournis par Zhengyuan pour notre chantier à Diamniadio est irréprochable. La résistance et la finition répondent parfaitement aux normes industrielles exigées.",
    author: "Moussa Diop",
    role: "Chef de Projet BTP",
    location: "Dakar",
    type: "Entreprise de Construction",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Un approvisionnement rapide et un support technique très réactif. Zhengyuan est devenu notre partenaire privilégié pour l'importation de nouveaux matériaux de second œuvre sur nos programmes résidentiels.",
    author: "Chen Wei",
    role: "Directeur des Approvisionnements",
    location: "Zone Industrielle, Dakar",
    type: "Promoteur Immobilier",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Nous avons testé leurs panneaux composites et isolants sur plusieurs villas à Saly. La tenue face au climat côtier est excellente. Le rapport qualité-prix sur le marché sénégalais est imbattable.",
    author: "Amadou Kane",
    role: "Architecte & Maître d'Œuvre",
    location: "Saly",
    type: "Cabinet d'Architecture",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-[#e95936] text-white overflow-hidden relative">
      {/* MOTIF DE FOND - SCHÉMA GÉOMÉTRIQUE INDUSTRIEL/STRUCTURE */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* EN-TÊTE DE SECTION ET COMMANDES DE NAVIGATION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
              <Quote className="w-3.5 h-3.5 text-white fill-[#e95936]" />
              Témoignages & Confiance Clients
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ce qu'ils disent de <span className="text-slate-950">Adomie</span>
            </h2>
            <p className="text-orange-100/90 text-sm sm:text-base leading-relaxed">
              Découvrez comment nos matériaux de construction et nos solutions
              de second œuvre accompagnent les projets majeurs de nos
              partenaires.
            </p>
          </div>

          {/* BOUTONS DE NAVIGATION */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-slate-950 hover:border-slate-950 transition-all shadow-sm flex items-center justify-center active:scale-95"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-slate-950 hover:border-slate-950 transition-all shadow-sm flex items-center justify-center active:scale-95"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CARROUSEL DES CARTES DE TÉMOIGNAGES */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-[300px] sm:w-[360px] shrink-0 bg-white text-slate-800 rounded-3xl p-7 shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                {/* 1. ÉTOILES DE NOTATION */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* 2. CITATION DU CLIENT */}
                <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* 3. PROFIL DE L'AUTEUR */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-[#e95936]/10 text-[#e95936] font-extrabold text-base flex items-center justify-center shrink-0 shadow-sm border border-[#e95936]/20">
                  {item.author.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-extrabold text-slate-900 text-xs tracking-wider uppercase truncate">
                    {item.author}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {item.role} •{" "}
                    <span className="text-slate-400">{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
