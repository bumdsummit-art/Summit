import React from 'react';
import { Calendar, MapPin, Mail, ExternalLink, Share2, Globe, MessageCircle } from 'lucide-react';

export default function PartnersFooter() {
  return (
    <footer id="kontak" className="bg-[#0b092b] text-white border-t border-white/10">
      
      {/* Organizing & Strategic Partners Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center sm:text-left">
          
          {/* Penyelenggara */}
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
              PENYELENGGARA
            </span>
            <div className="font-bold text-white text-base">
              IIRC · ITSB
            </div>
            <p className="text-[11px] text-slate-400">Innovation & Research Centre</p>
          </div>

          {/* Event Organizer */}
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
              PENGELOLA ACARA
            </span>
            <div className="font-bold text-white text-base">
              Harmoni Organizer
            </div>
            <p className="text-[11px] text-slate-400">Professional Event Management</p>
          </div>

          {/* Strategic Partner */}
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
              MITRA STRATEGIS
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              Kementerian Dalam Negeri RI
            </div>
          </div>

          {/* Knowledge Partner */}
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
              MITRA PENGETAHUAN
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              BPKP & BSKDN
            </div>
          </div>

          {/* Sponsorship */}
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
              SPONSORSHIP
            </span>
            <a
              href="#registrasi"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 underline transition"
            >
              Ajukan kemitraan
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                B
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                BUMD SUMMIT <span className="text-indigo-400 font-extrabold">2026</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Mentransformasi Badan Usaha Milik Daerah Menjadi Bisnis yang Cerdas, Kompetitif, dan Terhubung Global.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-mono font-semibold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
                #EventsWithImpact
              </span>
            </div>
          </div>

          {/* Acara & Venue */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
              ACARA
            </span>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>18–19 November 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>JS Luwansa Hotel, Jakarta</span>
              </div>
            </div>
          </div>

          {/* Kontak Emails */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
              KONTAK
            </span>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <a href="mailto:fadhil.pradana@itsb.ac.id" className="block hover:text-amber-400 transition truncate">
                fadhil.pradana@itsb.ac.id
              </a>
              <a href="mailto:zidane.fathir@harmoni.co.id" className="block hover:text-amber-400 transition truncate">
                zidane.fathir@harmoni.co.id
              </a>
            </div>
          </div>

          {/* Ikuti Socials */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
              IKUTI
            </span>
            <div className="flex items-center gap-3 text-slate-300">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-amber-400 transition" title="LinkedIn">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-amber-400 transition" title="Instagram">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-amber-400 transition" title="YouTube">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 IIRC — ITSB Innovation & Research Centre. Hak cipta dilindungi undang-undang.
          </div>
          <div>
            Desain Landing Page Resmi · BUMD Summit 2026
          </div>
        </div>

      </div>
    </footer>
  );
}
