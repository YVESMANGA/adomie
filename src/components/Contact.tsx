import React from "react";
import {
  Sparkles,
  Phone,
  MessageCircle,
  Building2,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      nom: "Mlle Li",
      poste: "Service Commercial & Suivi",
      senegalTel: "+221 71 146 88 88",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 relative overflow-hidden text-slate-800">
      {/* EFFETS D'ÉCLAIRAGE ET DÉGRADÉS DISCRETS EN ARRIÈRE-PLAN */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e95936]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-[#e95936] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#e95936] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Ligne directe
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Coopération{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e95936] to-orange-500">
              Commerciale
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Notre équipe dédiée reste à votre entière disposition pour vos
            demandes de devis, spécifications techniques et partenariats
            industriels.
          </p>
        </div>

        {/* GRILLE DES CONTACTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {contacts.map((contact, index) => {
            const rawPhone = contact.senegalTel.replace(/\s+/g, "");

            return (
              <div
                key={index}
                className="bg-white/80 border border-slate-200/80 rounded-3xl p-8 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-[#e95936]/40 hover:shadow-2xl hover:shadow-[#e95936]/10 transition-all duration-500 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* EN-TÊTE CARTE */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/60 text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1">
                        Contact Privilégié
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#e95936] transition-colors duration-300">
                        {contact.nom}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {contact.poste}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e95936]/10 to-orange-500/5 text-[#e95936] border border-[#e95936]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 w-full" />

                  {/* COORDONNÉES */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      Numéro direct
                    </span>
                    <a
                      href={`tel:${rawPhone}`}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:border-slate-300 hover:bg-slate-100/60 transition-all group/phone"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-[#e95936] border border-slate-200/60 shadow-sm flex items-center justify-center shrink-0 group-hover/phone:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] text-slate-500 block font-medium">
                          Sénégal
                        </span>
                        <span className="text-base font-bold text-slate-900 tracking-wide">
                          {contact.senegalTel}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/phone:text-[#e95936] group-hover/phone:translate-x-0.5 group-hover/phone:-translate-y-0.5 transition-all" />
                    </a>
                  </div>
                </div>

                {/* BOUTONS D'ACTION (Appel & WhatsApp) */}
                <div className="pt-8 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${rawPhone}`}
                    className="flex items-center justify-center gap-2 bg-[#e95936] hover:bg-[#d44826] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md shadow-[#e95936]/20 hover:shadow-lg hover:shadow-[#e95936]/30 active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Appeler</span>
                  </a>

                  <a
                    href={`https://wa.me/${rawPhone.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
