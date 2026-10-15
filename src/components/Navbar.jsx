import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Main Brand & 3 Partner Logos Lockup (Plain, no titles, no dividers) */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            
            {/* Main Brand Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#240a5e] group-hover:text-[#1a0647] transition-colors">
                  BUMD
                </span>
                <span className="font-display font-bold text-[9px] sm:text-[10px] tracking-widest text-[#240a5e] uppercase">
                  SCALE UP SUMMIT
                </span>
              </div>
              <span className="font-display font-black text-xl sm:text-2xl text-[#f9572a]">
                2026
              </span>
            </a>

            {/* 3 Partner Logos directly beside 2026 (Plain, cleanly spaced) */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5.5">
              <img
                src="/images/iirc-logo.png"
                alt="IIRC - ITSB Innovation & Research Centre"
                className="h-7.5 lg:h-8.5 w-auto object-contain hover:opacity-85 transition-opacity"
              />
              <img
                src="/images/logos/harmoni.png"
                alt="Harmoni Bisnis Antaranta"
                className="h-5.5 lg:h-6.5 w-auto object-contain hover:opacity-85 transition-opacity"
              />
              <img
                src="/images/logos/itsb-corporation.png"
                alt="ITSB Corporation"
                className="h-5.5 lg:h-6.5 w-auto object-contain hover:opacity-85 transition-opacity"
              />
            </div>

          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
            <a href="#about" className="text-xs 2xl:text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition whitespace-nowrap">
              Tentang
            </a>
            <a href="#why-join" className="text-xs 2xl:text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition whitespace-nowrap">
              Mengapa Hadir
            </a>
            <a href="#highlights" className="text-xs 2xl:text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition whitespace-nowrap">
              Sorotan Acara
            </a>
            <a href="#speakers" className="text-xs 2xl:text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition whitespace-nowrap">
              Pembicara
            </a>
            <a href="#sponsorship" className="text-xs 2xl:text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition whitespace-nowrap">
              Kemitraan
            </a>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="https://forms.gle/kdhtCunAkdp23zm79"
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#240a5e] hover:bg-[#1a0647] shadow-md shadow-[#240a5e]/20 hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Tentang
          </a>
          <a
            href="#why-join"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Mengapa Hadir
          </a>
          <a
            href="#highlights"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Sorotan Acara
          </a>
          <a
            href="#speakers"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Pembicara
          </a>
          <a
            href="#sponsorship"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Kemitraan
          </a>

          {/* Partner Logos for mobile devices when menu is opened (plain) */}
          <div className="pt-4 mt-2 border-t border-slate-100 md:hidden flex items-center justify-around gap-3">
            <img src="/images/iirc-logo.png" alt="IIRC" className="h-7 w-auto object-contain" />
            <img src="/images/logos/harmoni.png" alt="Harmoni" className="h-5 w-auto object-contain" />
            <img src="/images/logos/itsb-corporation.png" alt="ITSB" className="h-5 w-auto object-contain" />
          </div>

          <div className="pt-2">
            <a
              href="https://forms.gle/kdhtCunAkdp23zm79"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full text-sm font-bold text-white bg-[#240a5e] hover:bg-[#1a0647] shadow-md block transition"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
