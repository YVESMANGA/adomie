"use client";

import About from "@/components/About";
import Actualites from "@/components/Actualites";
import Fcontacts from "@/components/Fcontacts";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Faq from "@/components/Faq";
import Plan from "@/components/Plan";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Sparkles, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

// Import des styles Swiper requis
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

export default function Acceuil() {
  const services = [
    {
      image: "/p6.jpeg",
      title: "Adomie Interior Paint",
      description: "Peinture Hydro mat à base d'émulsion acrylique.",
    },
    {
      image: "/p1.jpeg",
      title: "Adomie Enduit de Finition",
      description:
        "Fabrication de poudre de calcium lourde de haute qualité pour diverses applications industrielles.",
    },
    {
      image: "/p2.jpeg",
      title: "Adomie Enduit de Lissage",
      description:
        "La difference fondamentale entre l'enduit en pate (pret a l'emploi) et l'enduit en poudre reside dans la forme physique et la commodite d'utilisation.",
    },
    {
      image: "/p4.jpeg",
      title: "Adomie C2TE Colle pour Carrelage",
      description:
        "Ce produit est un mortier‑colle monocomposant en poudre, à base de ciment modifié aux polymères",
    },
    {
      image: "/p5.jpeg",
      title: "Adomie Aqua Shield 2C",
      description:
        "AQUA SHIELD 2C est un revêtement imperméable bicomposant à base de polymères cimentaires.",
    },
    {
      image: "/p6.jpeg",
      title: "Adomie Interior Paint",
      description: "Peinture Hydro mat à base d'émulsion acrylique.",
    },
    {
      image: "/p8.jpeg",
      title: "Adomie Aqua Shield GreenProof",
      description:
        "Solutions de revêtement imperméable pour protéger et durabiliser les surfaces.",
    },
  ];

  // ✅ Correction ici
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const cooperationOptions = [
    {
      id: "agents",
      title: "Agents Régionaux",
      description:
        "Principaux distributeurs ayant des ressources dans l’industrie, agents exclusifs, OEM, marques, co-traitance, soutien aux prix compétitifs.",
    },
    {
      id: "distributeurs",
      title: "Distributeurs Professionnels",
      description:
        "Se concentrer sur des clients spécialisés dans des domaines particuliers, fournir un support technique prioritaire, droits de distribution préférentiels.",
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      <Hero />
      <About />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-[#e95936] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-black fill-black" />
              <span className="text-xs font-bold tracking-widest uppercase">
                PRODUITS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#e95936] tracking-tight leading-[1.15]">
              Nos <span className="text-black">Produits</span>
            </h2>
          </div>

          <Plan />

          {/* Carrousel Sans Flèches */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 !px-2"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto pb-4">
                <div className="flex flex-col h-full items-center bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
                  <div className="mb-6 relative w-full h-48 rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-center text-gray-800 hover:text-[#e95936] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bouton Voir Plus */}
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block bg-[#e95936] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#d04928] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Voir plus de produits
            </Link>
          </div>
        </div>
      </section>

      <Why />

      <Faq />
    </div>
  );
}
