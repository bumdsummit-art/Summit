import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-2xl tracking-tight text-[#240a5e]">
                BUMD
              </span>
              <span className="font-display font-bold text-[10px] tracking-widest text-[#240a5e] uppercase">
                SCALE UP SUMMIT
              </span>
            </div>
            <span className="font-display font-black text-2xl text-[#f9572a]">
              2026
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Tentang
            </a>
            <a href="#why-join" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Mengapa Hadir
            </a>
            <a href="#highlights" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Sorotan Acara
            </a>
            <a href="#speakers" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Pembicara
            </a>
            <a href="#sponsorship" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Kemitraan
            </a>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://forms.gle/kdhtCunAkdp23zm79"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#240a5e] hover:bg-[#1a0647] shadow-md shadow-[#240a5e]/20 hover:scale-105 transition-all duration-200"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
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
