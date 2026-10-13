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
              About
            </a>
            <a href="#why-join" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Why join
            </a>
            <a href="#highlights" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Highlights
            </a>
            <a href="#speakers" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Speakers
            </a>
            <a href="#sponsorship" className="text-sm font-semibold text-slate-700 hover:text-[#240a5e] transition">
              Sponsorship
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6285973209723"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-[#240a5e] border border-[#240a5e]/30 hover:bg-[#240a5e]/5 transition"
            >
              Become a Sponsor
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTvSuwTech1J7o7VppO5TAvzogNqXUOjW0rakDOF8xm9h8Qw/viewform"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#240a5e] hover:bg-[#1a0647] shadow-md shadow-[#240a5e]/20 transition"
            >
              Register Now
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
            About
          </a>
          <a
            href="#why-join"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Why join
          </a>
          <a
            href="#highlights"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Highlights
          </a>
          <a
            href="#speakers"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Speakers
          </a>
          <a
            href="#sponsorship"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Sponsorship
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/6285973209723"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-sm font-bold text-[#240a5e] border border-[#240a5e]/30"
            >
              Become a Sponsor
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTvSuwTech1J7o7VppO5TAvzogNqXUOjW0rakDOF8xm9h8Qw/viewform"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-sm font-bold text-white bg-[#240a5e]"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
