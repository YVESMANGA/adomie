"use client";

import { useState } from "react";
import { Sparkles, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

const faqItems = [
  {
    question: "Quels types de matériaux de construction Adomie produit-il ?",
    answer:
      "Adomie est spécialisé dans la recherche, le développement et la fabrication de nouveaux matériaux de construction haute performance, notamment des revêtements écologiques, des panneaux composites innovants et des solutions d'isolation thermique avancées.",
  },
  {
    question: "Vos matériaux sont-ils conformes aux normes internationales ?",
    answer:
      "Absolument. L'ensemble de nos lignes de production respecte des normes de qualité strictes (ISO, CE) et subit des tests rigoureux de résistance, de durabilité et de sécurité environnementale avant commercialisation.",
  },
  {
    question:
      "Proposez-vous des solutions sur-mesure pour les grands projets ?",
    answer:
      "Oui, notre équipe R&D travaille en étroite collaboration avec les architectes et promoteurs pour développer des formulations, formats ou finitions répondant exactement aux cahiers des charges de vos chantiers.",
  },
  {
    question:
      "Comment garantissez-vous la durabilité écologique de vos produits ?",
    answer:
      "Nous intégrons des procédés de fabrication à faible empreinte carbone et privilégions des composants durables et recyclables afin de répondre aux exigences modernes de la construction durable.",
  },
  {
    question:
      "Quels sont vos délais de production et de livraison pour les commandes industrielles ?",
    answer:
      "Grâce à nos capacités de production automatisées, nous traitons rapidement les commandes de grande envergure. Les délais exacts dépendent du volume et des spécifications techniques, et vous sont communiqués dès l'établissement du devis.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F4F6F8] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EN-TÊTE ASYMÉTRIQUE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-[#e95936] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-black fill-black" />
              <span className="text-xs font-bold tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#e95936] tracking-tight leading-[1.15]">
              Questions <span className="text-black">Fréquentes</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center justify-between gap-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              Retrouvez les réponses aux interrogations les plus courantes
              concernant les matériaux et solutions industrielles Adomie.
            </p>
            <button className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black text-white font-extrabold text-sm hover:bg-[#e95936] hover:text-white transition-all shadow-md shrink-0">
              En Savoir Plus
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SECTION PRINCIPALE : IMAGE À GAUCHE + ACCORDÉON À DROITE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* COLONNE GAUCHE : GRAND VISUEL DANS UN CADRE BLANC */}
          <div className="lg:col-span-5">
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-200/80">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full rounded-2xl overflow-hidden">
                <img
                  src="/p5.jpeg"
                  alt="Production et R&D de nouveaux matériaux de construction Zhengyuan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : ACCORDÉON DE QUESTIONS */}
          <div className="lg:col-span-7 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#e95936]/30 shadow-lg"
                      : "border-slate-200/80 shadow-sm hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-extrabold text-[#e95936] text-base sm:text-lg transition-colors"
                  >
                    <span>{item.question}</span>
                    <div
                      className={`p-1.5 rounded-full transition-colors shrink-0 ${
                        isOpen
                          ? "bg-[#e95936]/10 text-[#e95936]"
                          : "text-slate-400"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Contenu déroulant */}
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
