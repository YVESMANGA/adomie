import React from "react";
import { Sparkles } from "lucide-react";

export default function Actualites() {
  const publications = [
    {
      titre: "Discours de l'Ambassadeur Li Zhigang au symposium",
      description:
        "Découvrez le discours de l'Ambassadeur Li Zhigang au symposium organisé par la communauté chinoise d'outre-mer du Sénégal.",
      lien: "https://mp.weixin.qq.com/s/GkyhILWf0NbXkf8C2S8fRw",
      image: "chine.jpg", // drapeau chinois
      type: "article",
    },

    {
      titre: "Le Sénégal, terre d’investissements",
      description:
        "Découvrez la vidéo officielle sur les opportunités d’investissements au Sénégal, notamment avec les partenaires chinois.",
      lien: "vz1.mp4", // lien vidéo locale
      type: "video",
    },
    {
      titre: "Forum d’investissement des entreprises chinoises",
      description:
        "Retour sur le Forum d’investissement des entreprises chinoises, mettant en lumière les opportunités et collaborations internationales.",
      lien: "https://mp.weixin.qq.com/s/FNnOKj3Y17YZAGVCJQoc9A",
      image: "chine.jpg",
      type: "article",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="lg:col-span-7 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-[#e95936] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-black fill-black" />
            <span className="text-xs font-bold tracking-widest uppercase">
              ACTUALITES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#e95936] tracking-tight leading-[1.15]">
            Nos <span className="text-black">Actualités</span>
          </h2>
        </div>
        <p className="text-lg text-gray-600 mt-4">
          Restez informés de nos dernières publications et nouveautés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col overflow-hidden relative"
          >
            {/* Badge type */}
            <div className="absolute top-4 right-4 bg-[#e95936]/10 text-[#e95936] border border-[#e95936]/20 px-3 py-1 rounded-full font-semibold text-sm z-10 backdrop-blur-sm">
              {pub.type === "article" ? "Article" : "Vidéo"}
            </div>

            {pub.type === "article" && (
              <>
                <img
                  src={pub.image}
                  alt={pub.titre}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {pub.titre}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1">{pub.description}</p>
                  <a
                    href={pub.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-[#e95936] hover:bg-black text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-sm"
                  >
                    Lire l’article
                  </a>
                </div>
              </>
            )}

            {pub.type === "video" && (
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-16">
                  {pub.titre}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{pub.description}</p>
                <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-lg mt-auto">
                  <video
                    src={pub.lien}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
