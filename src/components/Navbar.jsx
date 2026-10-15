import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Main Brand & 3 Partner Logos Lockup */}
          <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4 shrink-0">
            
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

            {/* Vertical Divider beside 2026 */}
            <div className="hidden md:block h-8 w-px bg-slate-200/90 mx-0.5 lg:mx-1" />

            {/* 3 Partner Logos (Organizer, Strategic Partner, In Collaboration with) */}
            <div className="hidden md:flex items-center gap-2.5 lg:gap-3.5">
              
              {/* 1. Organizer */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-[9px] lg:text-[10px] font-semibold text-slate-500 tracking-tight leading-none mb-1 whitespace-nowrap">
                  Organizer
                </span>
                <img
                  src="/images/iirc-logo.png"
                  alt="IIRC - ITSB Innovation & Research Centre"
                  className="h-6 sm:h-7 lg:h-7.5 w-auto max-w-[70px] lg:max-w-[85px] object-contain hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Separator */}
              <div className="h-6 w-px bg-slate-200/70" />

              {/* 2. Strategic Partner */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-[9px] lg:text-[10px] font-semibold text-slate-500 tracking-tight leading-none mb-1 whitespace-nowrap">
                  Strategic Partner
                </span>
                <img
                  src="/images/logos/harmoni.png"
                  alt="Harmoni Bisnis Antaranta"
                  className="h-4.5 sm:h-5 lg:h-5.5 w-auto max-w-[85px] lg:max-w-[105px] object-contain hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Separator */}
              <div className="h-6 w-px bg-slate-200/70" />

              {/* 3. In Collaboration with */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-[9px] lg:text-[10px] font-semibold text-slate-500 tracking-tight leading-none mb-1 whitespace-nowrap">
                  In Collaboration with
                </span>
                <img
                  src="/images/logos/itsb-corporation.png"
                  alt="ITSB Corporation"
                  className="h-4.5 sm:h-5 lg:h-5.5 w-auto max-w-[85px] lg:max-w-[105px] object-contain hover:opacity-90 transition-opacity"
                />
              </div>

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

          {/* Partner Logos for mobile devices when menu is opened */}
          <div className="pt-4 mt-2 border-t border-slate-100 md:hidden">
            <div className="grid grid-cols-3 gap-2 items-end text-center">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-semibold text-slate-400 mb-1 leading-none">Organizer</span>
                <img src="/images/iirc-logo.png" alt="IIRC" className="h-6 w-auto object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-semibold text-slate-400 mb-1 leading-none">Strategic Partner</span>
                <img src="/images/logos/harmoni.png" alt="Harmoni" className="h-4.5 w-auto object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-semibold text-slate-400 mb-1 leading-none">In Collaboration with</span>
                <img src="/images/logos/itsb-corporation.png" alt="ITSB" className="h-4.5 w-auto object-contain" />
              </div>
            </div>
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
