"use client";

import { useState } from "react";
import Image from "next/image";

// Typage TypeScript des produits pour éviter les erreurs de compilation
interface ProductDetails {
  descriptionText: string;
  packaging: string;
}

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  details: ProductDetails;
}

// Vos produits avec une description détaillée unique pour le modal
const products: Product[] = [
  {
    id: 1,
    image: "/p1.jpeg",
    title: "Adomie Enduit de Finition",
    description:
      "Fabrication de poudre de calcium lourde de haute qualité pour diverses applications industrielles.",
    details: {
      descriptionText:
        "Ce produit est disponible en deux versions : enduit de nivellement en poudre pour murs intérieurs et extérieurs. Sa formule unique, composée de matières premières minérales de haute qualité et d'additifs composites spéciaux, est inodore et respectueuse de l'environnement. Après séchage, la surface est lisse et uniforme, avec une excellente adhérence au support. Il suffit d'ajouter de l'eau et de mélanger avant utilisation ; l'application et le ponçage sont simples et pratiques",
      packaging: "Poids 20kg",
    },
  },
  {
    id: 2,
    image: "/p2.jpeg",
    title: "Adomie Enduit de Lissage",
    description:
      "La difference fondamentale entre l'enduit en pate (pret a l'emploi) et l'enduit en poudre reside dans la forme physique et la commodite d'utilisation. ",
    details: {
      descriptionText:
        "La difference fondamentale entre l'enduit en pate (pret a l'emploi) et l'enduit en poudre reside dans la forme physique et la commodite d'utilisation. L'enduit en pate est un melange humide pret a être applique directement depuis le seau, tandis que l'enduit en poudre doit être melange avec de l'eau.",
      packaging: "Sacs de 20 kg",
    },
  },
  {
    id: 3,
    image: "/p4.jpeg",
    title: "Adomie C2TE Colle pour Carrelage",
    description:
      "Ce produit est un mortier‑colle monocomposant en poudre, à base de ciment modifié aux polymères",
    details: {
      descriptionText:
        "Ce produit est un mortier‑colle monocomposant en poudre, à base de ciment modifié aux polymères, classe C2TE. Il s’utilise aussi bien à l’intérieur qu’à l’extérieur. Il offre une excellente adhérence, une résistance au glissement et un temps‑ouvert prolongé. Convient aux carreaux céramiques, grès porcelaine, marbre et mosaïque. Il s’applique sur supports neufs ainsi que pour la rénovation sur ancien carrelage, pour les zones humides, les bassins de piscine et les plages de piscine.",
      packaging: "Poids 25kg",
    },
  },
  {
    id: 4,
    image: "/p5.jpeg",
    title: "Adomie Aqua Shield 2C",
    description:
      "AQUA SHIELD 2C est un revêtement imperméable bicomposant à base de polymères cimentaires.",
    details: {
      descriptionText:
        "AQUA SHIELD 2C est un revêtement imperméable bicomposant à base de polymères cimentaires. Ce matériau composite à base d’eau est composé du composant A (poudre sèche inorganique, ciment spécial, charges et additifs) et du composant B (émulsion de polymère acrylique à haut poids moléculaire). Après mélange et durcissement, il forme un film rigide-flexible, respirant et imperméable, alliant la flexibilité des matériaux organiques à la haute résistance et à la résistance aux alcalis des matériaux cimentaires inorganiques.",
      packaging: "Poids 20kg",
    },
  },
  {
    id: 5,
    image: "/p6.jpeg",
    title: "Adomie Interior Paint",
    description: "Peinture Hydro mat à base d'émulsion acrylique.",
    details: {
      descriptionText:
        "Peinture Hydro mat à base d'émulsion acrylique. Convient pour une utilisation en intérieur lorsque des couleurs vives sont requises.Il convient à tous les murs et plafonds intérieurs, qu'ils soient neufs, anciens ou peints, qu'ils aient été préalablement recouverts de peintures à base de ciment, de chaux ou de gypse, et à tous les types d'espaces intérieurs tels que les chambres, les salles de bains, les salons, les bureaux, les zones de service, etc.",
      packaging: "Poids 23kg",
    },
  },
  {
    id: 6,
    image: "/p7.jpeg",
    title: "Adomie Exterior Paint",
    description:
      "Peinture acrylique de haute qualité présentant une excellente résistance aux intempéries",
    details: {
      descriptionText:
        "Peinture acrylique de haute qualité présentant une excellente résistance aux intempéries et un bon pouvoir couvrant.",
      packaging: "Poids 23kg",
    },
  },
  {
    id: 7,
    image: "/p8.jpeg",
    title: "Adomie Aqua Shield GreenProof",
    description:
      "Solutions de revêtement imperméable pour protéger et durabiliser les surfaces.",
    details: {
      descriptionText:
        "Aquashield est un revêtement acrylique flexible, imperméable et isolant, adapté aux toitures en béton, aux toitures en tuiles, aux bordures de béton, aux puits de lumière et à d'autres applications. Il offre une forte adhérence, une excellente résistance aux hautes températures et au gel, et conserve son élasticité même à des températures inférieures à -20 °C, garantissant durabilité et résistance aux intempéries.",
      packaging: "Poids 20kg",
    },
  },
  {
    id: 8,
    image: "/p10.jpeg",
    title: "Adomie Mortier Colle pour Carrelage",
    description:
      "Cet adhésif renforcé pour carrelage grand format est un adhésif en poudre écologique",
    details: {
      descriptionText:
        "Cet adhésif renforcé pour carrelage grand format est un adhésif en poudre écologique, formulé à base de ciment de haute qualité comme liant inorganique, de sable raffiné comme agrégat et de divers additifs fonctionnels. Il est particulièrement adapté à de nombreuses applications courantes, notamment les grands bâtiments commerciaux (centres commerciaux, hôtels, bureaux), les habitations (séjours, chambres, cuisines, salles de bains), les zones à fort passage (couloirs, halls d'entrée) et les espaces extérieurs protégés (balcons, terrasses couvertes). Il présente des propriétés antidérapantes, une application facile, une forte adhérence, une absence de vides et une application en couche mince permettant des économies de matériau et d'espace. Il garantit une adhérence durable et fiable pour tous vos projets de décoration ou de rénovation.",
      packaging: "Poids 25kg",
    },
  },
  {
    id: 9,
    image: "/p9.jpeg",
    title: "Adomie Mortier penetrant a base de Ciment ",
    description:
      "Ce mortier polymère imperméable et résistant aux fissures est composé de ciment CEM-I42.5R",
    details: {
      descriptionText:
        "Ce mortier polymère imperméable et résistant aux fissures est composé de ciment CEM-I42.5R de haute qualité, de sable de quartz naturel et de polymères. Il offre une adhérence élevée, une résistance au gel, au vieillissement, à l'érosion, ainsi qu'une imperméabilité et une résistance à la corrosion. Les polymères, matériaux synthétiques à mi-chemin entre le caoutchouc et le plastique, garantissent une excellente imperméabilité, une résistance à la pression, une adhérence uniforme, une résistance aux UV et un caractère écologique. La poudre est homogène, fine et lisse. Ce mortier est idéal pour le plâtrage et le nivellement des murs lors de rénovations. Sa texture est excellente ; le mortier mélangé présente une forte adhérence après application et ne s'effrite pas. Ce produit utilise une poudre minérale inorganique naturelle pure comme matière première ; des variations de couleur peuvent survenir d'un lot à l'autre.",
      packaging: "Poids 25kg",
    },
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-10 text-center">
        Nos <span className="text-[#e95936]">Produits</span>
      </h2>

      {/* Grille de Produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
          >
            <div>
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain transition-transform duration-700 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Bouton Détails */}
            <button
              onClick={() => setSelectedProduct(product)}
              className="w-full bg-[#e95936] hover:bg-black text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300 shadow-sm"
            >
              Détails
            </button>
          </div>
        ))}
      </div>

      {/* Modal des Détails du Produit */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer (X) */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              ✕
            </button>

            {/* En-tête du Modal avec Image */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
              <div className="relative w-full md:w-1/2 h-56 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedProduct.title}
                </h2>
                {selectedProduct.details?.packaging && (
                  <span className="inline-block bg-[#e95936]/10 text-[#e95936] text-xs font-semibold px-3 py-1 rounded-full border border-[#e95936]/20 mt-2">
                    Conditionnement : {selectedProduct.details.packaging}
                  </span>
                )}
              </div>
            </div>

            {/* Section Description Unique */}
            {selectedProduct.details?.descriptionText && (
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Description
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedProduct.details.descriptionText}
                </p>
              </div>
            )}

            {/* Action du Modal */}
            <div className="mt-8 text-right">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-6 rounded-xl transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
