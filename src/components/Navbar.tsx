"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/about" },
  { name: "Produits", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation de rotation du logo
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm font-sans sticky top-0 z-50">
      {/* 1. TOP BAR */}
      <div className="relative flex items-center justify-between border-b border-gray-100 min-h-[42px] overflow-hidden">
        {/* Infos de contact */}
        <div className="relative z-10 bg-slate-950 text-white px-4 md:px-8 py-2.5 text-xs flex flex-wrap items-center gap-4 sm:gap-6 pr-12 [clip-path:polygon(0_0,_100%_0,_92%_100%,_0%_100%)]">
          <a
            href="mailto:contact@zhengyuan-materials.com"
            className="flex items-center gap-2 hover:text-[#e95936] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#e95936]" />
            <span className="hidden sm:inline">zynm86457@gmail.com</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="tel:+221784627479"
              className="hidden md:flex items-center gap-1.5 hover:text-[#e95936] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e95936]" />
              <span>+221 71 146 88 88</span>
            </a>
          </div>

          <div className="hidden xl:flex items-center gap-2 border-l border-white/20 pl-4">
            <MapPin className="w-3.5 h-3.5 text-[#e95936]" />
            <span>Zone Industrielle, Dakar</span>
          </div>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex items-center gap-2 px-4 md:px-8">
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#e95936] text-white flex items-center justify-center hover:bg-slate-950 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#e95936] text-white flex items-center justify-center hover:bg-slate-950 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#e95936] text-white flex items-center justify-center hover:bg-slate-950 transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        {/* LOGO ET IDENTITÉ ZHENGYUAN */}
        <Link
          href="/"
          className="flex items-center gap-4 py-2 overflow-visible group"
        >
          <div className="relative flex-shrink-0">
            <Image
              src="/logos.jpeg"
              alt="Adomie Logo"
              width={200}
              height={65}
              className={`h-12 sm:h-16 w-auto object-contain transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? "rotate-[360deg] brightness-110 drop-shadow-[0_0_15px_rgba(233,89,54,0.7)]"
                  : "rotate-0 brightness-100"
              }`}
              priority
            />
          </div>

          <div className="flex flex-col justify-center w-fit">
            <span className="text-sm sm:text-base font-black text-slate-950 leading-none uppercase tracking-tight block">
              ADOMIE
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#e95936] uppercase leading-none tracking-[0.2em] mt-1.5 block">
              Nouveaux Matériaux
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#e95936] transition-colors py-2 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e95936] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#e95936]"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 font-semibold text-gray-700 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base hover:text-[#e95936] transition-colors py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3 text-xs text-gray-600">
            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Contacts Directs
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#e95936]" />
              <span>M. Gan : +221 77 588 3799</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#e95936]" />
              <span>Mlle Li : +221 78 462 7479</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
